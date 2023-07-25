import React from 'react';
import { Space } from 'antd';
import { MenuType } from './types';
import MenuItem from './MenuItem';

type MenuProps = MenuType;

const Menu = (props: MenuProps) => {
	return (
		<Space direction="vertical">
			{React.Children.map({}, (child) => {
				return <></>;
			})}
		</Space>
	);
};

export default React.memo(Menu);
