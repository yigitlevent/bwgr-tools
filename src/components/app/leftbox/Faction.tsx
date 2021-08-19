import { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import shallow from "zustand/shallow";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Button } from "../../shared/Inputs";
import { Subtitle } from "../../shared/Titles";

export function Faction(): JSX.Element {
	const { factionMenu, setActiveMenu, setFactionMenu } = ClientStore(state => ({
		factionMenu: state.factionMenu,
		setActiveMenu: state.setActiveMenu,
		setFactionMenu: state.setFactionMenu
	}), shallow);

	const [factionIndex, setFactionIndex] = useState(factionMenu.factionIndex);

	return (
		<SubBox>
			<Subtitle>Faction Maker</Subtitle>

			<SelectSearch
				options={[{ name: "", value: -1 }]} // TODO: stored factions
				value={factionIndex.toString()}
				search filterOptions={fuzzySearch}
				placeholder="Choose a Faction"
				onChange={(selectedValue) => { setFactionIndex(parseInt(selectedValue as any)); }}
			/>

			{(factionIndex !== -1)
				? <Button value={"Show"} onClick={() => { setActiveMenu("faction"); setFactionMenu(factionIndex); }} />
				: null
			}

			{(factionIndex === -1)
				? <Button value={"Create New"} onClick={() => { setActiveMenu("faction"); setFactionMenu(factionIndex); }} />
				: null
			}
		</SubBox>
	);
}
