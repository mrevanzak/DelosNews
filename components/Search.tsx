import { SearchIcon } from "@heroicons/react/solid";
import { FC } from "react";

type SearchProps = {
    search: string;
    setSearch: (search: string) => void;
};

const Search: FC<SearchProps> = ({ search, setSearch }) => {
    return (
        <div className="flex-1 mr-3">
            <label htmlFor="search" className="sr-only" />
            <div className="relative text-gray-400 focus-within:text-gray-400">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-slate-300 bg-opacity-25 text-grey-900 placeholder-grey-700 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                    placeholder="Search for articles"
                    type="search"
                    value={search}
                    onChange={e => {
                        const filter = e.target.value;
                        setSearch(filter);
                    }}
                />
            </div>
        </div>
    );
};

export default Search;
