export default interface ISongDisplayEvent {
    onClickPlay?: () => void;
    onClickForward?: () => void;
    onClickBackward?: () => void;
    onClickQueue?: () => void;
}
