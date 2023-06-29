import FilterItemType from "./FilterItemType";

export default interface FilterMenuType {
  defaultSelectedKey?: string | number;
  items?: React.ReactNode[];
  onClick?: (key: string | number) => void;
}
