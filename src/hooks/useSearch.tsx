import { useCallback, useEffect, useState } from "react";
import Fuse from "fuse.js";


export function useSearch<T>(list: T[]) {
	const [mainList, setMainList] = useState<T[]>(list);
	const [searchResults, setSearchResults] = useState<T[]>(list);

	const [searchString, setSearchString] = useState("");
	const [searchFields, setSearchFields] = useState<string[]>(["Name"]);

	const setList = (newList: T[]) => {
		setMainList(newList);
	};

	const search = useCallback(() => {
		if (searchString.length > 0 && searchFields.length > 0) {
			const options = {
				includeScore: true,
				threshold: 0.3,
				keys: searchFields.map(v => v.toLocaleLowerCase())
			};

			const fuse = new Fuse(mainList, options);
			const results = fuse.search(searchString);
			setSearchResults(results.map(x => x.item));
		}
		else setSearchResults(mainList);
	}, [mainList, searchFields, searchString]);

	useEffect(() => {
		search();
	}, [search, mainList, searchFields, searchString]);

	return { searchString, setSearchString, searchFields, setSearchFields, setList, searchResults };
}
