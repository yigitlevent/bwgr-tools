import shallow from "zustand/shallow";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Subtitle } from "../../shared/Titles";
import { NoLink } from "../../shared/Links";

export function MagicWheel(): JSX.Element {
	const { setActiveMenu } = ClientStore(state => ({
		setActiveMenu: state.setActiveMenu
	}), shallow);

	return (
		<SubBox>
			<Subtitle>
				<NoLink onClick={() => { setActiveMenu("magicwheel"); }}>
					Magic Wheel
				</NoLink>
			</Subtitle>
		</SubBox>
	);
}
