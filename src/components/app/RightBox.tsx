import shallow from "zustand/shallow";

import { ClientStore } from "../../stores/ClientStore";

import { Box } from "../shared/Box";

import { LifepathList } from "./rightbox/LifepathList";
import { MagicWheel } from "./rightbox/MagicWheel";

export function RightBox(): JSX.Element {
	const { activeMenu } = ClientStore(state => ({ activeMenu: state.activeMenu }), shallow);

	return (
		<Box grow={0} shrink={0} flexWidth={"600px"}>
			{(activeMenu === "lifepath") ? <LifepathList /> : null}
			{(activeMenu === "magicwheel") ? <MagicWheel /> : null}
		</Box>
	);
}
