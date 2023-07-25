import React, { FC, useState } from 'react';
import { Space, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';

type PlayProps = PlayType;

const PlayComponent = (props: PlayProps) => {
	const [isPlay, setPlay] = useState<boolean>(false);
	return (
		<Space>
			<div className="h-12 w-12 flex flex-row items-center justify-around  rounded-full bg-green-500">
				<FontAwesomeIcon
					icon={isPlay ? faPlay : faPause}
					className="text-2xl"
				/>
			</div>
			<Typography>{props.name ?? ''}</Typography>
		</Space>
	);
};

export default React.memo(PlayComponent);
