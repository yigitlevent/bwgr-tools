import shallow from "zustand/shallow";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Button } from "../../shared/Inputs";
import { Subtitle } from "../../shared/Titles";

export function MagicWheel(): JSX.Element {
	const { setActiveMenu } = ClientStore(state => ({
		setActiveMenu: state.setActiveMenu
	}), shallow);

	return (
		<SubBox>
			<Subtitle>Magic Wheel</Subtitle>

			<Button value={"Open Magic Wheel"} onClick={() => { setActiveMenu("magicwheel"); }} />
		</SubBox>
	);
}
