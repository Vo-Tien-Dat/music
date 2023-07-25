'use client';
import ISong from '@/components/Song/ISong';
import { Typography, Space } from 'antd';

interface IQueue {
	currentSong: ISong;
	waitiSong?: ISong[];
}

const Queue = () => {
	return (
		<Space direction="vertical" size={4} className="px-8 py-4">
			<Typography className="text-2xl text-white text-white font-bold">
				Queue
			</Typography>
			<Space>
				<Typography className="text-lg text-white text-gray-400 font-semibold">
					Now playing
				</Typography>
			</Space>
			<Typography className="text-lg text-white text-gray-400 font-semibold">
				Next From
			</Typography>
		</Space>
	);
};

export default Queue;
