import { useCallback, useEffect, useState } from "react";
import Fuse from "fuse.js";
import { useSearchParams } from "react-router-dom";

import { useRulesetStore } from "./stores/useRulesetStore";


type List<T> = (T & { allowed: RulesetId[]; })[];

export function useSearch<T>(list: List<T>) {
	const [searchParams, setSearchParams] = useSearchParams();
	const { checkRulesets } = useRulesetStore();

	const s = searchParams.get("s");
	const sf = searchParams.get("sf");

	const [mainList, setMainList] = useState<List<T>>(list.filter(v => checkRulesets(v.allowed)));
	const [searchResults, setSearchResults] = useState<List<T>>(list.filter(v => checkRulesets(v.allowed)));

	const [searchString, setSearchString] = useState(s ? s : "");
	const [searchFields, setSearchFields] = useState<string[]>(sf ? sf.split(",") : []);

	const setList = useCallback((newList: List<T>) => {
		setMainList(newList.filter(v => checkRulesets(v.allowed)));
	}, [checkRulesets]);

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
		setSearchResults(res.filter(v => checkRulesets(v.allowed)));
	}, [checkRulesets, mainList, searchFields, searchString]);

	useEffect(() => {
		const arr = [...searchParams.entries()];
		const prms: { [key: string]: string; } = {};
		for (const item in arr) { prms[arr[item][0]] = arr[item][1]; }
		if (searchString.length > 0) prms["s"] = searchString;
		if (searchFields.length > 0) prms["sf"] = searchFields.join(",");
		setSearchParams(prms);
	}, [searchFields, searchParams, searchString, setSearchParams]);

	useEffect(() => {
		search();
	}, [search, mainList, searchFields, searchString]);

	return { searchString, setSearchString, searchFields, setSearchFields, setList, searchResults };
}
