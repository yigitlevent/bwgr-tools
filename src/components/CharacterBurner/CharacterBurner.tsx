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
import { TolerancesBlock } from "./Blocks/TolerancesBlock";
import { LifepathModal } from "./Modals/LifepathModal";
import { RandomLifepathsModal } from "./Modals/RandomLifepathsModal";
import { QuestionModal } from "./Modals/QuestionModal";
import { SpecialLifepathsModal } from "./Modals/SpecialLifepathsModal";
import { SpecialSkillsModal } from "./Modals/SpecialSkillsModal";
import { ResourceModal } from "./Modals/ResourceModal";
import { StockSpecificModal } from "./Modals/StockSpecialModal";
import { BeliefsBlock } from "./Blocks/BeliefsBlock";
import { InstinctsBlock } from "./Blocks/InstinctsBlock";


export function CharacterBurner(): JSX.Element {
	const { totals } = useAppSelector(state => state.characterBurner);

	const [openLp, openLpModal] = useState(false);
	const [openRl, openRlModal] = useState(false);
	const [openQu, openQuModal] = useState(false);
	const [openSl, openSlModal] = useState(false);
	const [openSu, openSuModal] = useState(false);
	const [openRe, openReModal] = useState(false);
	const [openSs, openSsModal] = useState(false);

	return (
		<Fragment>
			<Typography variant="h3">Character Burner</Typography>

			<LifepathModal openLp={openLp} openLpModal={openLpModal} />
			<RandomLifepathsModal openRl={openRl} openRlModal={openRlModal} />
			<QuestionModal openQu={openQu} openQuModal={openQuModal} />
			<SpecialLifepathsModal openSl={openSl} openSlModal={openSlModal} />
			<SpecialSkillsModal openSu={openSu} openSuModal={openSuModal} />
			<ResourceModal openRe={openRe} openReModal={openReModal} />
			<StockSpecificModal openSs={openSs} openSsModal={openSsModal} />

			<BasicsBlock />
			<BlockDivider />
			<BeliefsBlock />
			<BlockDivider />
			<InstinctsBlock />
			<BlockDivider />
			<LifepathsBlock openLpModal={openLpModal} openRlModal={openRlModal} openQuModal={openQuModal} openSlModal={openSlModal} openSuModal={openSuModal} openSsModal={openSsModal} />

			{totals.years.points > 0
				? <Fragment>
					<BlockDivider />
					<StatsBlock />
					<BlockDivider />
					<AttributesBlock />
					<BlockDivider />
					<TolerancesBlock />
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
