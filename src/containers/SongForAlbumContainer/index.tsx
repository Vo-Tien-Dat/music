import { ISongForAlbum } from '@/components/SongForAlbum';
import { Divider, Space, Typography } from 'antd';
import SongForAlbum from '@/components/SongForAlbum';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

type SongForAlbumContainerType = {
	items?: Required<ISongForAlbum>[];
	onClickItem?: (item: ISongForAlbum | undefined) => void;
};

const SongForAlbunContainer = (props: SongForAlbumContainerType) => {
	return (
		<Space
			direction="vertical"
			size={4}
			style={{
				height: '100%',
				width: '100%',
			}}
		>
			<div className="flex flex-col gap-1">
				<div className="flex flex-row items-center px-2">
					<Typography className="text-base text-white font-bold">
						#
					</Typography>
					<Typography className="text-base text-white font-bold grow ml-4">
						Title
					</Typography>

					<Typography>
						<FontAwesomeIcon
							icon={faClock}
							className="text-white"
						/>
					</Typography>
				</div>
				<Divider className="bg-white" />
			</div>

			{props.items?.map(
				(item: Required<ISongForAlbum>, index: number) => {
					return (
						<SongForAlbum {...item} position={index} key={index} />
					);
				}
			)}
		</Space>
	);
};

export default SongForAlbunContainer;
