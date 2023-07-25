import { Avatar } from 'antd';

export interface IMedia {
	id?: string;
	key?: string;
}

export type MediaProps = IMedia;

const Component = (props: MediaProps) => {
	return (
		<div className="flex flex-row px-2 py-1">
			<Avatar shape="square" size={48} />
			<div className="flex flex-col">
				<div className="text-base text-white"></div>
			</div>
		</div>
	);
};

export default Component;
