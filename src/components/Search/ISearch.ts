export default interface ISearch {
	placeholder?: string;
	onChange?: (value: string) => void;
	value?: string;
	size?: number;
	className?: string;
	style?: React.CSSProperties;
}
