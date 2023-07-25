import {
	faVolumeHigh,
	faVolumeLow,
	faVolumeMute,
	faVolumeOff,
} from '@fortawesome/free-solid-svg-icons';

export const VOLUME_MUTE = 'mute';

export const VOLUME_OFF = 'un_mute';

export const VOLUME_HIGH = 'max_volume';

export const VOLUME_LOW = 'min_volume';

export type VolumeStatus =
	| typeof VOLUME_MUTE
	| typeof VOLUME_OFF
	| typeof VOLUME_HIGH
	| typeof VOLUME_LOW;

export type IconVolumeStatus =
	| typeof faVolumeMute
	| typeof faVolumeOff
	| typeof faVolumeLow
	| typeof faVolumeHigh;

export type ValueVolumeStatus = '0' | '50' | '100' | string;

export interface IVolumeStatus {
	status: VolumeStatus;
	iconStatus: IconVolumeStatus;
	value: ValueVolumeStatus;
}

export default interface IVolume {
	status?: IVolumeStatus;
	checkCondition?: () => {};
	onChange?: () => void;
}
