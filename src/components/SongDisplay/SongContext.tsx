'use client';
import React, { useState, Dispatch, SetStateAction } from 'react';
import ISong from './ISong';
import { ISongDisplayStatus } from '.';
const initialSong: Required<ISong> = {
	id: '',
	title: '',
	artist: '',
	time: '',
	image: '',
	isFavorite: false,
};

export const initialSongStatus: Required<ISongDisplayStatus> = {
	isPlay: false,
};

export interface SongContextValue {
	song: ISong;
	status: ISongDisplayStatus;
	setSong?: Dispatch<SetStateAction<ISong>>;
	setStatus?: Dispatch<SetStateAction<ISongDisplayStatus>>;
}

export const SongContext = React.createContext<SongContextValue>({
	song: initialSong,
	status: initialSongStatus,
});

export const SongProvider = ({ children }: { children: React.ReactNode }) => {
	const [song, setSong] = useState<ISong>(initialSong);
	const [status, setStatus] = useState<ISongDisplayStatus>(initialSongStatus);
	const songContextValue: SongContextValue = {
		song: song,
		status: initialSongStatus,
		setSong: setSong,
		setStatus: setStatus,
	};
	return (
		<SongContext.Provider value={songContextValue}>
			{children}
		</SongContext.Provider>
	);
};
