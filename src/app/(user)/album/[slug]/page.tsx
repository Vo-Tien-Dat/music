'use client';

import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';
import songs from '__mocks__/songs';
import { Space } from 'antd';

import { ReactNode, useCallback, useState } from 'react';
import { ISongForAlbum } from '@/components/SongForAlbum';
import Avatar from '@/components/ArtistAvatar';
import {
	faPause,
	faPlay,
	faHeart as faSolidHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import SongForAlbum from '@/components/SongForAlbum';
import SongForAlbunContainer from 'containers/SongForAlbumContainer';
import Control from '@/components/Control';
import Header from '@/components/Header';
function getSongItem({
	id,
	name,
	artist,
	isFavorite,
	time,
}: Required<ISongForAlbum>): ReactNode {
	return (
		<SongForAlbum
			key={0}
			id={id}
			name={name}
			artist={artist}
			time={time}
			isFavorite={isFavorite}
		/>
	);
}

const handleClickFavorite = (id: string | number) => {
	console.log(id);
};

const handleClickPlay = (id: string | number) => {
	console.log(id);
};

const items: ReactNode[] = [
	getSongItem(songs[0]),
	getSongItem(songs[0]),
	getSongItem(songs[0]),
	getSongItem(songs[0]),
	getSongItem(songs[0]),
	getSongItem(songs[0]),
	getSongItem(songs[0]),
	getSongItem(songs[0]),
	getSongItem(songs[0]),
	getSongItem(songs[0]),
	getSongItem(songs[0]),
	getSongItem(songs[0]),
];

const Album = ({ params }: { params: { slug: TemplateString } }) => {
	const [isView, setView] = useState<boolean>(false);

	const handleOnView = useCallback((inView: boolean) => {
		setView(inView);
	}, []);

	return (
		<Space direction="vertical" className="w-full p-4" size={16}>
			<Avatar
				type="album"
				aNumberOfSongs={20}
				year={2000}
				id="16"
				name="hello"
				following={5}
				time={1000}
			/>
			<Control onView={handleOnView} />
			<SongForAlbunContainer items={songs}></SongForAlbunContainer>
		</Space>
	);
};

export default Album;
