import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';

interface FilterMenuItemValue<T> {
	value: T;
}

type IFilterMenuItem = {
	children?: React.ReactNode | string;
	className?: string;
	onClick?: (event: any) => void;
	condition?: (value: any) => boolean;
};

type FilterMenuItemProps = IFilterMenuItem;

const FilterMenuItem = (props: FilterMenuItemProps): ReactNode => {
	const [isActive, setActive] = useState<boolean>(false);

	const hasChildren = !!props.children;

	if (!hasChildren) return <></>;

	const isChildrenString: boolean = typeof props.children === 'string';

	const handleClickMenuItem = () => {
		console.log('oke');
		setActive(!isActive);
	};

	const childNode: ReactNode = isChildrenString ? (
		<div
			className={classNames(
				'text-base text-white text-semibold px-2 py-1 rounded-lg hover:bg-neutral-500',
				props?.className,
				isActive ? 'bg-neutral-700' : 'bg-neutral-500'
			)}
		>
			<span>{props.children}</span>
		</div>
	) : (
		<>{props.children}</>
	);

	return (
		<div className="flex" onClick={props.onClick ?? handleClickMenuItem}>
			{childNode}
		</div>
	);
};

export default FilterMenuItem;
