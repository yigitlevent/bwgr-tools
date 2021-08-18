import shallow from "zustand/shallow";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Subtitle } from "../../shared/Titles";
import { NoLink } from "../../shared/Links";

export function Distillation(): JSX.Element {
	const { setActiveMenu } = ClientStore(state => ({
		setActiveMenu: state.setActiveMenu
	}), shallow);

	return (
		<SubBox>
			<Subtitle noBorder>
				<NoLink onClick={() => { setActiveMenu("distillation"); }}>
					Spell Distillation
				</NoLink>
			</Subtitle>
		</SubBox>
	);
}
