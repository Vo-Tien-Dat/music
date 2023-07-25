type HeaderType = {
	onClickLogIn?: () => void;
	onClickSignUp?: () => void;
	isLogin?: boolean;
	isPlayActive?: boolean;
	name?: string;
	onView?: (onView: boolean) => void;
};

type PlayType = {
	onClickFavorite?: () => void;
	onClickPlay?: () => void;
	name?: string;
};
