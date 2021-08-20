import { DataDebug } from "../../utility/dataDebug";

import { Box } from "../shared/Box";
import { Title } from "../shared/Titles";
import { Button } from "../shared/Inputs";

import { LifepathExplorer } from "./leftbox/LifepathExplorer";
import { SkillExplorer } from "./leftbox/SkillExplorer";
import { TraitExplorer } from "./leftbox/TraitExplorer";
import { Faction } from "./leftbox/Faction";
import { Unit } from "./leftbox/Unit";
import { MagicWheel } from "./leftbox/MagicWheel";

// import { Distillation } from "./leftbox/Distillation";

export function LeftBox(): JSX.Element {
	const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

	return (
		<Box grow={0} shrink={0} flexWidth={"300px"}>
			<Title>BWGR Tools</Title>

			<LifepathExplorer />
			<SkillExplorer />
			<TraitExplorer />

			<Faction />
			<Unit />

			<MagicWheel />
			{/*<Distillation />*/}

			{(development)
				? <Button value="Data Debug" onClick={DataDebug} />
				: null
			}
		</Box>
	);
}
