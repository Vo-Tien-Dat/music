import React from 'react';
import { Space } from 'antd';
import { MenuType, MultipleMenuItem } from './types';

type MenuProps = MenuType;

const Menu = (props: MenuType) => {
	return (
		<Space direction="vertical">
			{React.Children.map(props.children, (child: MultipleMenuItem) => {
				return <>{child}</>;
			})}
		</Space>
	);
};

export default React.memo(Menu);
