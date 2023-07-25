import FilterMenu from './FilterMenu';
import FilterMenuItem from './FilterMenuItem';
interface IFilter {
	items?: [];
	children?: React.ReactNode | React.ReactNode[];
}

const Filter = () => {
	return (
		<div className="flex flex-start w-full h-10">
			<FilterMenu>
				<FilterMenuItem>
					<div className="flex flex-row items-center rounded-full px-4 text-white bg-neutral-800 font-bold text-xs">
						Album
					</div>
				</FilterMenuItem>
				<FilterMenuItem>
					<div className="flex flex-row items-center rounded-full px-4 text-white bg-neutral-800 font-bold text-xs">
						Podcast
					</div>
				</FilterMenuItem>

				<FilterMenuItem>
					<div className="flex flex-row items-center rounded-full px-4 text-white bg-neutral-800 font-bold text-xs">
						Playlist
					</div>
				</FilterMenuItem>

				<FilterMenuItem>
					<div className="flex flex-row items-center rounded-full px-4 text-white bg-neutral-800 font-bold text-xs whitespace-nowrap">
						Podcast & Show
					</div>
				</FilterMenuItem>
			</FilterMenu>
		</div>
	);
};

export default Filter;
