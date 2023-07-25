type PersonType = 'artist' | 'normal' | 'album' | 'exceptional';

export type PersonAvatar = {
	id?: string;
	name?: string;
	image?: string;
	type?: PersonType;
	following?: number;
	follower?: number;
};

export interface ArtistAvatar extends PersonAvatar {
	type: 'artist';
	listener?: number;
}

export interface PlaylistAvatar extends PersonAvatar {}

export interface AlbumAvatar extends PersonAvatar {
	aNumberOfSongs?: number;
	year?: number;
	time?: number;
	label: 'album';
	type: 'album';
}

export interface ExceptionalAvatar extends Required<PersonAvatar> {
	type: 'exceptional';
}
