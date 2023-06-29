import FilterItem from './FilterItem';
import FilterMenuType from './FilterMenuType';

type FilterMenuProps = FilterMenuType;

const FilterMenu = (props: FilterMenuProps) => {
    const handleClickFilter = (key: string | number) => {
        props.onClick?.(key);
    };

    return (
        <div className="flex flex-row gap-1">
            {props.items?.map((item: React.ReactNode, key: number) => {
                return <FilterItem label={item} />;
            })}
        </div>
    );
};

export default FilterMenu;
