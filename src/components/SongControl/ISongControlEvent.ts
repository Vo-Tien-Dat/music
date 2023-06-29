export default interface ISongControlEvent {
    onClickPlay?: (id: string | number) => void;
    onClickFavorite?: (id: string | number) => void;
}
