'use client';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ISearch from './ISearch';
import classNames from 'classnames';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export type SearchProps = ISearch;

const initialSearch: Required<SearchProps> = {
	placeholder: 'Search',
	onChange: () => {},
	value: '',
	size: 256,
	className: '',
	style: {},
};

const Search = (props: Partial<SearchProps>) => {
	const [value, setValue] = useState<string>(
		props.value ?? initialSearch.value
	);

	const handleChange = (e: any) => {
		setValue(e.target.value);
		props.onChange?.(value);
	};

	return (
		<div
			className={classNames(
				'flex flex-row gap-2 justify-start items-center px-4 py-2 rounded-md border-white border-solid border  focus:outline-none ',
				props?.className
			)}
			style={props.style ?? {}}
		>
			<FontAwesomeIcon icon={faSearch} className="text-base text-white" />
			<input
				type="text"
				className="w-full bg-inherit text-base text-white bg-inherit focus:outline-none"
				placeholder={props.placeholder ?? initialSearch.placeholder}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Search;
