import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Space, Typography } from 'antd';
import { useState } from 'react';

export type ISongForAlbum = {
	key: number;
	id?: string;
	name?: string;
	artist?: string;
	time?: string;
	isFavorite?: boolean;
};

export type ISongForAlbumEvent = {
	onClickItem?: (item: ISongForAlbum) => void;
};

export type ISongForAlbumPosition = {
	position?: number;
};

type SongForAlbumProps = Required<ISongForAlbum> &
	Partial<ISongForAlbumEvent> &
	Partial<ISongForAlbumPosition>;

const SongForAlbum = (props: SongForAlbumProps) => {
	const [isFavorite, setFavorite] = useState(props.isFavorite);

	const handleClickFavorite = () => {
		setFavorite(!isFavorite);
	};

	return (
		<Space
			align="center"
			direction="horizontal"
			className="px-3 py-2 hover:bg-neutral-800 rounded-lg w-full"
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Space
				direction="horizontal"
				size={16}
				style={{
					width: '100%',
				}}
			>
				{props.position && (
					<Typography className=" text-base text-white font-bold">
						{props.position}
					</Typography>
				)}
				<Space direction="vertical" align="start">
					<Typography className="text-base text-white">
						{props.name}
					</Typography>
					<Typography className="text-sm text-white font-md">
						{props.artist}
					</Typography>
				</Space>
			</Space>

			<Space direction="horizontal" size={16} align="center">
				<FontAwesomeIcon
					onClick={handleClickFavorite}
					className="text-white text-base"
					icon={isFavorite ? faSolidHeart : faRegularHeart}
				/>
				<Typography className="text-gray-400 text-sm">
					{props.time}
				</Typography>
			</Space>
		</Space>
	);
};

export default SongForAlbum;
