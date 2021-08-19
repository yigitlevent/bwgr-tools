import { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import shallow from "zustand/shallow";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Button } from "../../shared/Inputs";
import { Subtitle } from "../../shared/Titles";

export function Unit(): JSX.Element {
	const { unitMenu, setActiveMenu, setUnitMenu } = ClientStore(state => ({
		unitMenu: state.unitMenu,
		setActiveMenu: state.setActiveMenu,
		setUnitMenu: state.setUnitMenu
	}), shallow);

	const [unitIndex, setUnitIndex] = useState(unitMenu.unitIndex);

	return (
		<SubBox>
			<Subtitle>Unit Maker</Subtitle>

			<SelectSearch
				options={[{ name: "", value: -1 }, ...unitMenu.units.map((v, i) => { return { name: v.name, value: i }; })]}
				value={unitIndex.toString()}
				search filterOptions={fuzzySearch}
				placeholder="Choose a Unit"
				onChange={(selectedValue) => { setUnitIndex(parseInt(selectedValue as any)); }}
			/>

			{(unitIndex !== -1)
				? <Button value={"Show"} onClick={() => { setActiveMenu("unit"); setUnitMenu(unitIndex); }} />
				: null
			}

			{(unitIndex === -1)
				? <Button value={"Create New"} onClick={() => { setActiveMenu("unit"); setUnitMenu(unitIndex); }} />
				: null
			}
		</SubBox>
	);
}
