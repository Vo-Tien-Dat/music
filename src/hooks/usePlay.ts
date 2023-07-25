import { useContext } from 'react';
import ISong from '@/components/Song/ISong';
import {
	SongContext,
	SongContextValue,
} from '@/components/SongDisplay/SongContext';

type SongType = {
	song: Partial<ISong>;
	onStart: () => void;
};

export const usePlay = (): SongType => {
	const { song, setSong } = useContext<SongContextValue>(SongContext);
	const onStart = () => {
		setSong?.({ ...song, id: song.id + '1' });
	};
	return { song: {}, onStart: onStart };
};
