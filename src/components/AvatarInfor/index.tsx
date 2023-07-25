import { Avatar } from 'antd';
import { useEffect, useState } from 'react';
import Menu from '../Menu';

const items: any = [];

const AvatarInfor = () => {
	const [isMenuActive, setMenuActive] = useState(false);

	const handleClickAvatar = () => {
		setMenuActive(!setMenuActive);
	};

	useEffect(() => {}, []);

	return (
		<div className="flex flex-row">
			<Avatar shape="circle" size={16} />
			{isMenuActive && <Menu items={items} />}
		</div>
	);
};

export default AvatarInfor;
