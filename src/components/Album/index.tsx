import React from 'react';
import { Avatar } from 'antd';
import { useState } from 'react';
import classNames from 'classnames';
import { usePlay } from '@/hooks/usePlay';

export interface IAlbum {
	id?: string;
	name?: string;
	image?: string;
	artists?: string;
}

export interface IAlbumStatus {
	isActive?: boolean;
	isHover?: boolean;
	isPressed?: boolean;
	isPlay?: boolean;
}

export type AlbumProps = IAlbum & IAlbumStatus;

const Album = (props: AlbumProps) => {
	const { song, onStart } = usePlay();

	const [isActive, setActive] = useState<boolean>(props.isActive ?? false);

	const [isPlay, setPlay] = useState<boolean>(props.isPlay ?? false);

	const handleDoubleClick = () => {};

	const handleClick = () => {
		console.log(onStart());
	};

	return (
		<div
			className="flex flex-row gap-2 bg-inherit hover:bg-neutral-700 p-2 rounded-md"
			onClick={handleClick}
			onDoubleClick={handleDoubleClick}
		>
			<Avatar size={48} shape="square" />
			<div className="flex flex-col">
				<div
					className={classNames(
						'text-base text-white font-semibold',
						{
							'text-green-800': isPlay,
						}
					)}
				>
					{props.name ?? ''}
				</div>
				<div className="text-base text-white">
					{props.artists ?? ''}
				</div>
			</div>
		</div>
	);
};

export default React.memo(Album);
