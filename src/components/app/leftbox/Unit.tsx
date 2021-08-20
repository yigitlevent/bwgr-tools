import { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import shallow from "zustand/shallow";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Button } from "../../shared/Inputs";
import { Subtitle } from "../../shared/Titles";

export function Unit(): JSX.Element {
	const { unitMenu, setActiveMenu, setUnitIndex } = ClientStore(state => ({
		unitMenu: state.unitMenu,
		setActiveMenu: state.setActiveMenu,
		setUnitIndex: state.setUnitIndex
	}), shallow);

	const [index, setIndex] = useState(unitMenu.currentIndex);

	return (
		<SubBox>
			<Subtitle>Unit Maker</Subtitle>

			<SelectSearch
				options={[{ name: "", value: -1 }, ...unitMenu.units.map((v, i) => { return { name: v.name, value: i }; })]}
				value={index.toString()}
				search filterOptions={fuzzySearch}
				placeholder="Choose a Unit"
				onChange={(selectedValue) => { setIndex(parseInt(selectedValue as any)); }}
			/>

			{(index !== -1)
				? <Button value={"Show"} onClick={() => { setActiveMenu("unit"); setUnitIndex(index); }} />
				: null
			}

			{(index === -1)
				? <Button value={"Create New"} onClick={() => { setActiveMenu("unit"); setUnitIndex(index); }} />
				: null
			}
		</SubBox>
	);
}
