type ObjectType = 'album' | 'playist' | 'artist';

export type ControlType = {
	object?: ObjectType;
	onPlay?: () => void;
	onClick?: () => void;
	onView?: (inView: boolean) => void;
};
