import shallow from "zustand/shallow";

import { ClientStore } from "../../stores/ClientStore";

import { Box } from "../shared/Box";

import { LifepathList } from "./rightbox/LifepathList";
import { SkillList } from "./rightbox/SkillList";
import { TraitList } from "./rightbox/TraitList";
import { FactionMaker } from "./rightbox/FactionMaker";
import { UnitMaker } from "./rightbox/UnitMaker";
import { MagicWheel } from "./rightbox/MagicWheel";
// import { Distillation } from "./rightbox/Distillation";

export function RightBox(): JSX.Element {
	const { activeMenu } = ClientStore(state => ({ activeMenu: state.activeMenu }), shallow);

	return (
		<Box grow={0} shrink={0} flexWidth={"600px"}>
			{(activeMenu === "lifepath") ? <LifepathList /> : null}
			{(activeMenu === "skill") ? <SkillList /> : null}
			{(activeMenu === "trait") ? <TraitList /> : null}
			{(activeMenu === "faction") ? <FactionMaker /> : null}
			{(activeMenu === "unit") ? <UnitMaker /> : null}
			{(activeMenu === "magicwheel") ? <MagicWheel /> : null}
			{/*(activeMenu === "distillation") ? <Distillation /> : null*/}
		</Box>
	);
}
