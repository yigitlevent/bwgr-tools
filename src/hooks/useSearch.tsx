import { useCallback, useEffect, useState } from "react";
import Fuse from "fuse.js";

import { useAppSelector } from "../state/store";

type List<T> = (T & { allowed: Ruleset; })[];

export function useSearch<T>(list: List<T>) {
	const { datasets } = useAppSelector(state => state.dataset);

	const [mainList, setMainList] = useState<List<T>>(list.filter(v => datasets.includes(v.allowed)));
	const [searchResults, setSearchResults] = useState<List<T>>(list.filter(v => datasets.includes(v.allowed)));

	const [searchString, setSearchString] = useState("");
	const [searchFields, setSearchFields] = useState<string[]>(["Name"]);

	const setList = useCallback((newList: List<T>) => {
		setMainList(newList.filter(v => datasets.includes(v.allowed)));
	}, [datasets]);

	const search = useCallback(() => {
		let res = [];
		if (searchString.length > 0 && searchFields.length > 0) {
			const options = {
				includeScore: true,
				threshold: 0.3,
				keys: searchFields.map(v => v.toLocaleLowerCase())
			};

			const fuse = new Fuse(mainList, options);
			const results = fuse.search(searchString);
			res = results.map(x => x.item);
		}
		else { res = mainList; }
		setSearchResults(res.filter(v => datasets.includes(v.allowed)));
	}, [datasets, mainList, searchFields, searchString]);

	useEffect(() => {
		search();
	}, [search, mainList, searchFields, searchString]);

	return { searchString, setSearchString, searchFields, setSearchFields, setList, searchResults };
}
