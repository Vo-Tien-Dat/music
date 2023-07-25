import { Avatar } from 'antd';
import IPlaylist from './IPlaylist';

export type PlaylistProps = IPlaylist;

const Playlist = (props: PlaylistProps) => {
	return (
		<div className="flex flex-row p-2">
			<Avatar shape="square" size={48} />
			<div className="flex flex-col">
				<div className="text-base">{props.playlistName ?? ''}</div>
				<div className="text-base">{props.playlistArtist ?? ''}</div>
			</div>
		</div>
	);
};

export default Playlist;
