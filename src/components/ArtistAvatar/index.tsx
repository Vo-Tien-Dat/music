import React from 'react';
import Album from './Album';
import { AlbumAvatar, ArtistAvatar, ExceptionalAvatar } from './types';
import Artist from './Artist';

type PersonProps =
	| Partial<AlbumAvatar>
	| Required<ArtistAvatar>
	| ExceptionalAvatar;

const Avatar = (props: PersonProps) => {
	const renderNode: React.ReactNode =
		(props.type === 'album' && <Album {...props} />) ||
		(props.type === 'artist' && <Artist {...props} />) ||
		(props.type === 'exceptional' && <></>);

	return <>{renderNode}</>;
};

export default Avatar;
