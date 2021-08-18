import { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import shallow from "zustand/shallow";

import { TraitCategories } from "../../../data/traits";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Button } from "../../shared/Inputs";
import { Subtitle } from "../../shared/Titles";

export function TraitExplorer(): JSX.Element {
	const { traitMenu, setActiveMenu, setTraitMenu } = ClientStore(state => ({
		traitMenu: state.traitMenu,
		setActiveMenu: state.setActiveMenu,
		setTraitMenu: state.setTraitMenu
	}), shallow);

	const [category, setCategory] = useState(traitMenu.category);

	return (
		<SubBox>
			<Subtitle>Trait Explorer</Subtitle>

			<SelectSearch
				options={[{ name: "", value: "" }, ...Object.keys(TraitCategories).map(k => { return { name: k, value: k }; })]}
				value={category}
				search filterOptions={fuzzySearch}
				placeholder="Choose a Trait Category"
				onChange={(selectedValue) => { setCategory(selectedValue as any); }}
			/>

			{(category !== "")
				? <Button value={"List"} onClick={() => { setActiveMenu("trait"); setTraitMenu(category); }} />
				: null
			}
		</SubBox>
	);
}
