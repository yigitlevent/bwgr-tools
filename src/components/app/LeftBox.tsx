import { Box } from "../shared/Box";
import { Title } from "../shared/Titles";

import { LifepathExplorer } from "./leftbox/LifepathExplorer";
import { SkillExplorer } from "./leftbox/SkillExplorer";
import { TraitExplorer } from "./leftbox/TraitExplorer";
import { MagicWheel } from "./leftbox/MagicWheel";
import { Distillation } from "./leftbox/Distillation";

export function LeftBox(): JSX.Element {

	return (
		<Box grow={0} shrink={0} flexWidth={"300px"}>
			<Title>BWGR Tools</Title>
			<LifepathExplorer />
			<SkillExplorer />
			<TraitExplorer />
			<MagicWheel />
			{/*<Distillation />*/}
		</Box>
	);
}
