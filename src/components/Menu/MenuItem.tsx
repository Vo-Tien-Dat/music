import classNames from 'classnames';
import { MenuItemType } from './types';
import { Space } from 'antd';
type MenuItemProp = MenuItemType;

const MenuItem = (props: MenuItemProp) => {
	const labelComponent: React.ReactNode = props.label ?? <></>;

	return (
		<Space
			direction="horizontal"
			className={classNames(
				'px-2 py-1 w-full bg-inherit rounded-md hover:bg-white'
			)}
		>
			{props?.prefixIcon}
			<div className="text-white font-semibold">{labelComponent}</div>

			{props?.suffixIcon}
		</Space>
	);
};

export default MenuItem;
