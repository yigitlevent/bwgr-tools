import { Fragment } from "react";
import shallow from "zustand/shallow";

import { ClientStore } from "../../../stores/ClientStore";

import { Subtitle } from "../../shared/Titles";

export function Distillation(): JSX.Element {
	const { skillMenu } = ClientStore(state => ({ skillMenu: state.skillMenu }), shallow);

	return (
		<Fragment>
			<Subtitle>Distillation</Subtitle>

		</Fragment>
	);
}
