export default interface ISongEvent {
	onClickPlay?: (id: string | number) => void;
	onClickFavorite?: (id: string | number) => void;
}
