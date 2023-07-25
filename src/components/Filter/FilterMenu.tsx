import React, { useEffect, useState } from 'react';
import FilterMenuItem from './FilterMenuItem';
type OptionMenuType = 'multiple' | 'single';

type IFilterMenu = {
	space?: number | string;
	children?: React.ReactNode | React.ReactNode[] | string[] | string;
	option?: OptionMenuType;
};

const defaultFilterMenu: IFilterMenu = {
	space: 8,
	option: 'single',
};

export type FilterMenuProps = IFilterMenu;

const FilterMenu = (props: FilterMenuProps) => {
	const conditions: any[] = [];

	useEffect(() => {}, []);

	return (
		<div
			className="flex flex-row"
			style={{
				gap: props.space ?? defaultFilterMenu.space,
			}}
		>
			{!!props.children &&
				React.Children.map(props.children, (child: any) => {
					if (!!child) {
						const element = <FilterMenuItem />;
						if (
							React.isValidElement(element) &&
							element.type === FilterMenuItem
						) {
							conditions.push(child.props.condition);
							return React.cloneElement(child, {
								...child.props,
							});
						}
					}
					return <></>;
				})}
		</div>
	);
};

export default FilterMenu;
