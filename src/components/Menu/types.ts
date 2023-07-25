export type MenuItemType = {
	key: number | string;
	prefixIcon?: React.ReactNode;
	suffixIcon?: React.ReactNode;
	label?: string | React.ReactNode;
	onClick?: () => void;
};

export type MultipleMenuItem =
	| MenuItemType[]
	| React.ReactNode
	| React.ReactNode[];

export type MenuType = {
	items?: MultipleMenuItem;
	onClickItem?: () => void;
	children?: MultipleMenuItem;
};
