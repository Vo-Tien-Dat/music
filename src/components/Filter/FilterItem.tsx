import FilterItemType from "./FilterItemType";

export type MenuPropsType = FilterItemType;

const FilterItem = (props: MenuPropsType) => {
  return <div className="px-2 py-1 rounded">{props.label ?? ""}</div>;
};

export default FilterItem;
