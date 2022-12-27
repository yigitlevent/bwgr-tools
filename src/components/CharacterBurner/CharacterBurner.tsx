import { Fragment, useState } from "react";

import Typography from "@mui/material/Typography";

import { useAppSelector } from "../../state/store";

import { BlockDivider } from "./BlockDivider";
import { StatsBlock } from "./Blocks/StatsBlock";
import { AttributesBlock } from "./Blocks/AttributesBlock";
import { SkillsBlock } from "./Blocks/SkillsBlock";
import { TraitsBlock } from "./Blocks/TraitsBlock";
import { BasicsBlock } from "./Blocks/BasicsBlock";
import { LifepathsBlock } from "./Blocks/LifepathsBlock";
import { ResourcesBlock } from "./Blocks/ResourcesBlock";
import { LifepathModal } from "./Modals/LifepathModal";
import { QuestionModal } from "./Modals/QuestionModal";
import { SpecialSkillsModal } from "./Modals/SpecialSkillsModal";
import { ResourceModal } from "./Modals/ResourceModal";


export function CharacterBurner(): JSX.Element {
	const { totals } = useAppSelector(state => state.characterBurner);

	const [openLp, openLpModal] = useState(false);
	const [openQu, openQuModal] = useState(false);
	const [openSu, openSuModal] = useState(false);
	const [openRe, openReModal] = useState(false);

	return (
		<Fragment>
			<Typography variant="h3">Character Burner</Typography>

			<LifepathModal openLp={openLp} openLpModal={openLpModal} />
			<QuestionModal openQu={openQu} openQuModal={openQuModal} />
			<SpecialSkillsModal openSu={openSu} openSuModal={openSuModal} />
			<ResourceModal openRe={openRe} openReModal={openReModal} />

			<BasicsBlock />
			<LifepathsBlock openLpModal={openLpModal} openQuModal={openQuModal} openSuModal={openSuModal} />

			{totals.years.points > 0
				? <Fragment>
					<BlockDivider />
					<StatsBlock />
					<BlockDivider />
					<AttributesBlock />
					<BlockDivider />
					<SkillsBlock />
					<BlockDivider />
					<TraitsBlock />
					<BlockDivider />
					<ResourcesBlock openReModal={openReModal} />
				</Fragment>
				: null
			}
		</Fragment>
	);
}
