import { Space, Avatar, Typography } from 'antd';
import { AlbumAvatar } from './types';
import { TimeType } from 'utils/format/FormatTime';
import formatTime from 'utils/format/FormatTime';

type AlbumAvatarProps = Partial<AlbumAvatar>;

const Album = (props: AlbumAvatarProps) => {
	const time: Required<TimeType> = formatTime(props.time ?? 0);
	return (
		<Space direction="horizontal" size={16}>
			<Avatar size={192} shape="square" />
			<Space direction="vertical" size={2}>
				<Typography className="text-white text-base font-semibold">
					Album
				</Typography>
				<Typography className="text-5xl text-white font-bold">
					{props.name}
				</Typography>
				<Space direction="horizontal">
					{time.years !== 0 && (
						<Space direction="horizontal" size={1}>
							<Typography className="text-base text-white">
								{time.years}
							</Typography>
							<Typography className="text-base text-white">
								year
							</Typography>
						</Space>
					)}

					{time.days !== 0 && (
						<Space direction="horizontal">
							<Typography className="text-base text-white">
								{time.days}
							</Typography>

							<Typography className="text-base text-white">
								days
							</Typography>
						</Space>
					)}

					{time.minutes !== 0 && (
						<Space direction="horizontal">
							<Typography className="text-base text-white">
								{time.minutes}
							</Typography>

							<Typography className="text-base text-white">
								minute
							</Typography>
						</Space>
					)}

					{time.secs !== 0 && (
						<Space direction="horizontal">
							<Typography className="text-base text-white">
								{time.minutes}
							</Typography>
							<Typography className="text-base text-white">
								sec
							</Typography>
						</Space>
					)}
				</Space>
			</Space>
		</Space>
	);
};

export default Album;
