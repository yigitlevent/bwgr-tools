import { Navigate, Route, Routes } from "react-router-dom";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import { DiceRoller } from "./DiceRoller/DiceRoller";
import { LifepathLists } from "./LifepathLists/LifepathLists";
import { SkillLists } from "./SkillLists/SkillLists";
import { TraitLists } from "./TraitLists/TraitLists";
import { LifepathRandomizer } from "./LifepathRandomizer/LifepathRandomizer";
import { PracticePlanner } from "./PracticePlanner/PracticePlanner";
import { MagicWheel } from "./MagicWheel/MagicWheel";
import { DuelOfWitsPlanner } from "./DuelOfWitsPlanner/DuelOfWitsPlanner";
import { RangeAndCoverPlanner } from "./RangeAndCoverPlanner/RangeAndCoverPlanner";
import { FightPlanner } from "./FightPlanner/FightPlanner";
import { ResourcesList } from "./ResourcesList/ResourcesList";


export function MainBox() {
	return (
		<Container maxWidth="lg" sx={{ margin: "10px auto" }}>
			<Paper sx={{ padding: "10px 20px" }}>
				<Routes>
					<Route path="/" element={<Navigate replace to="/diceroller" />} />
					<Route path="/diceroller" element={<DiceRoller />} />
					<Route path="/lifepaths" element={<LifepathLists />} />
					<Route path="/skills" element={<SkillLists />} />
					<Route path="/traits" element={<TraitLists />} />
					<Route path="/resources" element={<ResourcesList />} />
					<Route path="/lprandomizer" element={<LifepathRandomizer />} />
					<Route path="/practiceplanner" element={<PracticePlanner />} />
					<Route path="/magicwheel" element={<MagicWheel />} />
					<Route path="/dowplanner" element={<DuelOfWitsPlanner />} />
					<Route path="/racplanner" element={<RangeAndCoverPlanner />} />
					<Route path="/fightplanner" element={<FightPlanner />} />
				</Routes>
			</Paper>
		</Container>
	);
}
