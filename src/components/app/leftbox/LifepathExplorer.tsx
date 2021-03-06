import { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import shallow from "zustand/shallow";

import { Stocks } from "../../../data/stocks";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Button } from "../../shared/Inputs";
import { Subtitle } from "../../shared/Titles";

export function LifepathExplorer(): JSX.Element {
	const { lifepathMenu, setActiveMenu, setLifepathStockSetting } = ClientStore(state => ({
		lifepathMenu: state.lifepathMenu,
		setActiveMenu: state.setActiveMenu,
		setLifepathStockSetting: state.setLifepathStockSetting
	}), shallow);

	const [stock, setStock] = useState(lifepathMenu.stock);
	const [setting, setSetting] = useState(lifepathMenu.setting);

	return (
		<SubBox>
			<Subtitle>Lifepath Explorer</Subtitle>

			<SelectSearch
				options={[{ name: "", value: "" }, ...Object.keys(Stocks).map(k => { return { name: k, value: k }; })]}
				value={stock}
				search filterOptions={fuzzySearch}
				placeholder="Choose a Stock"
				onChange={(selectedValue) => { setStock(selectedValue as any); setSetting(""); }}
			/>

			{(stock !== "" && stock)
				? <SelectSearch
					options={[{ name: "", value: "" }, ...Object.keys(Stocks[stock].settings).map(k => { return { name: k, value: k }; })]}
					value={setting}
					search filterOptions={fuzzySearch}
					placeholder="Choose a Setting"
					onChange={(selectedValue) => { setSetting(selectedValue as any); }}
				/>
				: null
			}

			{(stock !== "" && setting !== "")
				? <Button value={"List"} onClick={() => { setActiveMenu("lifepath"); setLifepathStockSetting(stock, setting); }} />
				: null
			}
		</SubBox>
	);
}
