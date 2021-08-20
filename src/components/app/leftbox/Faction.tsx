import { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import shallow from "zustand/shallow";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Button } from "../../shared/Inputs";
import { Subtitle } from "../../shared/Titles";

export function Faction(): JSX.Element {
	const { factionMenu, setActiveMenu, setFactionIndex } = ClientStore(state => ({
		factionMenu: state.factionMenu,
		setActiveMenu: state.setActiveMenu,
		setFactionIndex: state.setFactionIndex
	}), shallow);

	const [index, setIndex] = useState(factionMenu.currentIndex);

	return (
		<SubBox>
			<Subtitle>Faction Maker</Subtitle>

			<SelectSearch
				options={[{ name: "", value: -1 }, ...factionMenu.factions.map((v, i) => { return { name: v.name, value: i }; })]}
				value={index.toString()}
				search filterOptions={fuzzySearch}
				placeholder="Choose a Faction"
				onChange={(selectedValue) => { setIndex(parseInt(selectedValue as any)); }}
			/>

			{(index !== -1)
				? <Button value={"Show"} onClick={() => { setActiveMenu("faction"); setFactionIndex(index); }} />
				: null
			}

			{(index === -1)
				? <Button value={"Create New"} onClick={() => { setActiveMenu("faction"); setFactionIndex(index); }} />
				: null
			}
		</SubBox>
	);
}
