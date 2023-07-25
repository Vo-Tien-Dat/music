import { Avatar } from 'antd';
import { useState } from 'react';

interface IArtist {
	id?: string;
	name?: string;
	image?: string;
}

type ArtistProps = IArtist;

const Artists = (props: ArtistProps) => {
	const [isActive, setActive] = useState<boolean>(false);

	return (
		<div className="flex flex-row justify-start items-center">
			<Avatar shape="circle" size={48} />
			<div className="text-base text-white">{props.name}</div>
		</div>
	);
};

export default Artists;
