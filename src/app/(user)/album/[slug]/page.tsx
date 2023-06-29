'use client';

import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';
import songs from '__mocks__/songs';
import Song from '@/components/Song';
import SongControl from '@/components/SongControl';
import ISong from '@/components/Song/ISong';
import { ReactNode, useState } from 'react';
import ISongEvent from '@/components/Song/ISongEvent';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPause,
    faPlay,
    faHeart as faSolidHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
function getSongItem({
    id,
    title,
    time,
    onClickPlay,
    onClickFavorite,
}: ISong & ISongEvent): ReactNode {
    return (
        <Song
            key={id}
            id={id}
            title={title}
            time={time}
            onClickFavorite={onClickFavorite}
            onClickPlay={onClickPlay}
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
    getSongItem({
        ...songs[0],
        onClickFavorite: handleClickFavorite,
        onClickPlay: handleClickPlay,
    }),
    getSongItem({
        ...songs[1],
        onClickFavorite: handleClickFavorite,
        onClickPlay: handleClickPlay,
    }),
    getSongItem(songs[2]),
    getSongItem(songs[2]),
    getSongItem(songs[2]),
    getSongItem(songs[2]),
    getSongItem(songs[2]),
    getSongItem(songs[2]),
];

const Album = ({ params }: { params: { slug: TemplateString } }) => {
    const [isPlay, setPlay] = useState<boolean>(false);

    const [isFavorite, setFavorite] = useState<boolean>(false);

    const handleClickPlay = () => {
        setPlay(!isPlay);
    };

    const handleClickFavorite = () => {
        setFavorite(!isFavorite);
    };

    return (
        <div className="w-full h-full">
            <div className="flex flex-row items-center justify-start px-4 pt-2 ">
                <Avatar shape="square" size={144} />
                <div className="flex flex-col w-full ml-4">
                    <div className="text-base">Bài hát</div>
                    <div className="text-base text-white">
                        Hello tat ca moi nguoi
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-start px-4 pt-2 gap-4">
                <div className="flex flex-row items-center justify-around h-10 w-10 bg-white rounded-full">
                    <FontAwesomeIcon
                        icon={isPlay ? faPause : faPlay}
                        onClick={handleClickPlay}
                    />
                </div>
                <FontAwesomeIcon
                    icon={isFavorite ? faSolidHeart : faRegularHeart}
                    onClick={handleClickFavorite}
                    className="text-2xl text-white"
                />
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col gap-2 p-4">
                    <SongControl items={items} />
                </div>
            </div>
        </div>
    );
};

export default Album;
