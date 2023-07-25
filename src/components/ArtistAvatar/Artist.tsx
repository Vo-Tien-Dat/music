import { Space, Typography } from 'antd';
import { ArtistAvatar } from './types';

type AvatarArtistProps = Partial<ArtistAvatar>;

const Artist = (props: AvatarArtistProps) => {
	return (
		<Space direction="vertical" className="px-4 py-2 w-full">
			<Space direction="horizontal">
				<Typography></Typography>
				<Typography>Verified Artist</Typography>
			</Space>
			<Typography className="text-2xl text-white font-bold">
				{props.name}
			</Typography>
			<Space direction="horizontal">
				<Typography className="text-base text-white font-semibold">
					{props.listener}
				</Typography>
				<Typography className="text-base text-white font-semibold">
					monthly listeners
				</Typography>
			</Space>
		</Space>
	);
};

export default Artist;
