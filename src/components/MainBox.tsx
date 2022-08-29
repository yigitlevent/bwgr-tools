import { Fragment } from "react";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import { useAppSelector } from "../state/store";

import { DiceRoller } from "./DiceRoller/DiceRoller";
import { Lifepaths } from "./LifepathLists/LifepathLists";
import { SkillLists } from "./SkillLists/SkillLists";
import { TraitLists } from "./TraitLists/TraitLists";
import { LifepathRandomizer } from "./LifepathRandomizer/LifepathRandomizer";
import { PracticePlanner } from "./PracticePlanner/PracticePlanner";
import { MagicWheel } from "./MagicWheel/MagicWheel";
import { DuelOfWitsPlanner } from "./DuelOfWitsPlanner/DuelOfWitsPlanner";
import { RangeAndCoverPlanner } from "./RangeAndCover/RangeAndCoverPlanner";
import { FightPlanner } from "./FightPlanner/FightPlanner";

export function MainBox() {
	const { selected } = useAppSelector(state => state.drawer);

	const getElement = () => {
		switch (selected) {
			case "Dice Roller":
				return <DiceRoller />;
			case "Lifepaths":
				return <Lifepaths />;
			case "Skills":
				return <SkillLists />;
			case "Traits":
				return <TraitLists />;
			case "Lifepath Randomizer":
				return <LifepathRandomizer />;
			case "Practice Planner":
				return <PracticePlanner />;
			case "Magic Wheel":
				return <MagicWheel />;
			case "Duel of Wits Planner":
				return <DuelOfWitsPlanner />;
			case "Range and Cover Planner":
				return <RangeAndCoverPlanner />;
			case "Fight Planner":
				return <FightPlanner />;
			default:
				return <Fragment />;
		}
	};

	return (
		<Container maxWidth="lg" sx={{ margin: "10px auto" }}>
			<Paper sx={{ padding: "10px 20px" }}>
				{getElement()}
			</Paper>
		</Container>
	);
}
