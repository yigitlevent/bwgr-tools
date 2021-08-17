import { Fragment, useState } from "react";
import shallow from "zustand/shallow";

import { Stocks } from "../../../data/stocks";

import { ClientStore } from "../../../stores/ClientStore";

import { Select, Option, Button } from "../../shared/Inputs";
import { Subtitle } from "../../shared/Titles";

export function LifepathExplorer(): JSX.Element {
	const { lifepathMenu, setActiveMenu, setLifepathMenu } = ClientStore(state => ({
		lifepathMenu: state.lifepathMenu,
		setActiveMenu: state.setActiveMenu,
		setLifepathMenu: state.setLifepathMenu
	}), shallow);

	const [stock, setStock] = useState(lifepathMenu.stock);
	const [setting, setSetting] = useState(lifepathMenu.setting);

	return (
		<Fragment>
			<Subtitle>Lifepath Explorer</Subtitle>

			<Select value={stock} onChange={e => { setStock(e.target.value as any); setSetting(""); }}>
				<Option value=""></Option>
				{Object.keys(Stocks).map((k, i) => <Option key={i} value={k}>{k}</Option>)}
			</Select>

			<Select value={setting} onChange={e => setSetting(e.target.value)}>
				<Option value=""></Option>
				{(stock !== "")
					? Object.keys(Stocks[stock].settings).map((k, i) => <Option key={i} value={k}>{k}</Option>)
					: null
				}
			</Select>

			<Button value={"List"} onClick={() => { setActiveMenu("lifepath"); setLifepathMenu(stock, setting); }} />
		</Fragment>
	);
}
