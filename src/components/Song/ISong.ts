export default interface ISong {
    readonly id: number | string;
    title?: string;
    artist?: string;
    image?: string;
    time?: number | string;
    isFavorite?: boolean;
}
