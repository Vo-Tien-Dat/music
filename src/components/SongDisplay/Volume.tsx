import { faVolumeDown, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IVolume, {
	VOLUME_HIGH,
	VOLUME_LOW,
	VOLUME_MUTE,
	VOLUME_OFF,
	IVolumeStatus,
} from './IVolume';
import { CSSProperties, useState } from 'react';

type VolumePropsType = IVolume;

const initialVolumeProps: VolumePropsType = {};

const defaultHighVolumeStatus: Required<IVolumeStatus> = {
	status: VOLUME_HIGH,
	iconStatus: faVolumeHigh,
	value: '100',
};

const defaultLowVolumeStatus: Required<IVolumeStatus> = {
	status: VOLUME_LOW,
	iconStatus: faVolumeHigh,
	value: '50',
};

const initialVolumeStatus: Required<IVolumeStatus> = {
	status: VOLUME_HIGH,
	iconStatus: faVolumeHigh,
	value: '100',
};

const progressStyle: CSSProperties = {
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'green',
	height: 4,
	borderRadius: 2,
};

const Volume = (props: VolumePropsType) => {
	const [volume, setVolume] = useState<IVolumeStatus>(
		props.status ?? initialVolumeStatus
	);

	const handleClickVolume = () => {
		switch (volume.status) {
			case VOLUME_OFF:
				break;

			case VOLUME_MUTE:
				break;

			case VOLUME_HIGH:
				break;

			case VOLUME_LOW:
				break;

			default:
				break;
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
	return (
		<div className="flex flex-row justify-start items-center gap-2">
			<FontAwesomeIcon
				icon={volume.iconStatus}
				onClick={handleClickVolume}
				className="text-neutral-500"
			/>
			<input
				type="range"
				onChange={handleChange}
				defaultValue={volume.value}
				style={progressStyle}
			/>
		</div>
	);
};

export default Volume;
