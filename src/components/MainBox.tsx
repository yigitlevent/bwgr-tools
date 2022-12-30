import { forwardRef, useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Fingerprint from "@mui/icons-material/Fingerprint";

import { useRulesetStore } from "../hooks/stores/useRulesetStore";

import { DiceRoller } from "./DiceRoller/DiceRoller";
import { LifepathLists } from "./LifepathLists/LifepathLists";
import { SkillLists } from "./SkillLists/SkillLists";
import { TraitLists } from "./TraitLists/TraitLists";
import { PracticePlanner } from "./PracticePlanner/PracticePlanner";
import { MagicWheel } from "./MagicWheel/MagicWheel";
import { DuelOfWitsPlanner } from "./DuelOfWitsPlanner/DuelOfWitsPlanner";
import { RangeAndCoverPlanner } from "./RangeAndCoverPlanner/RangeAndCoverPlanner";
import { FightPlanner } from "./FightPlanner/FightPlanner";
import { ResourcesList } from "./ResourcesList/ResourcesList";
import { CharacterBurner } from "./CharacterBurner/CharacterBurner";


function RulesetSwitches() {
	const { checkRulesets, toggleDataset } = useRulesetStore();

	return (
		<Grid container columns={4} justifyContent="flex-start" alignItems="center">
			<Grid item xs={1}>
				<FormControlLabel
					label="Core"
					labelPlacement="top"
					checked={checkRulesets(["bwg"])}
					control={<Switch color="primary" />}
					onChange={() => toggleDataset("bwg")}
				/>
			</Grid>
			<Grid item xs={1}>
				<FormControlLabel
					label="Codex"
					labelPlacement="top"
					checked={checkRulesets(["bwc"])}
					control={<Switch color="primary" />}
					onChange={() => toggleDataset("bwc")}
				/>
			</Grid>
			<Grid item xs={1}>
				<FormControlLabel
					label="Misc"
					labelPlacement="top"
					checked={checkRulesets(["msc"])}
					control={<Switch color="primary" />}
					onChange={() => toggleDataset("msc")}
				/>
			</Grid>
		</Grid>
	);
}

function RouteButton({ item, icon }: { item: [string, string]; icon?: JSX.Element; }) {
	const renderLink = useMemo(() => forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(function Link(itemProps, ref) {
		return <RouterLink to={item[1]} ref={ref} {...itemProps} role={undefined} />;
	}), [item]);

	return (
		<Grid item>
			<IconButton color="primary" title="Lifepath List" component={renderLink}>
				{icon}
			</IconButton>
		</Grid>
	);
}

export function MainBox() {
	const items: [string, string][] = [
		["Lifepaths List", "/lifepaths"],
		["Skills List", "/skills"],
		["Traits List", "/traits"],
		["Resources List", "/resources"],
		["Practice Planner", "/practiceplanner"],
		["Fight Planner", "/fightplanner"],
		["Range and Cover Planner", "/racplanner"],
		["Duel of Wits Planner", "/dowplanner"],
		["Dice Roller", "/diceroller"],
		["Character Burner", "/characterburner"],
		["Magic Wheel", "/magicwheel"]
	];

	return (
		<Container maxWidth="lg" sx={{ margin: "10px auto" }}>
			<Box sx={{ margin: "0 0 16px 0" }}>
				<Grid container columns={2} justifyContent="space-between" alignItems="center">
					<Grid item>
						<Typography variant="h1">BWGR Tools</Typography>
					</Grid>
					<Grid item>
						<RulesetSwitches />
					</Grid>
					<Grid item sx={{ maxWidth: "160px" }}>
						<Grid container columns={4} justifyContent="flex-end" alignItems="center">
							{items.map((v, i) => <RouteButton key={i} item={v} icon={<Fingerprint />} />)}
						</Grid>
					</Grid>
				</Grid>
			</Box>

			<Paper sx={{ padding: "10px 20px" }}>
				<Routes>
					<Route path="/" element={<Navigate replace to="/diceroller" />} />
					<Route path="/diceroller" element={<DiceRoller />} />
					<Route path="/lifepaths" element={<LifepathLists />} />
					<Route path="/skills" element={<SkillLists />} />
					<Route path="/traits" element={<TraitLists />} />
					<Route path="/resources" element={<ResourcesList />} />
					<Route path="/practiceplanner" element={<PracticePlanner />} />
					<Route path="/magicwheel" element={<MagicWheel />} />
					<Route path="/dowplanner" element={<DuelOfWitsPlanner />} />
					<Route path="/racplanner" element={<RangeAndCoverPlanner />} />
					<Route path="/fightplanner" element={<FightPlanner />} />
					<Route path="/characterburner" element={<CharacterBurner />} />
				</Routes>
			</Paper>

			<Box sx={{ margin: "0 0 200px" }} />
		</Container >
	);
}
