import { Fragment } from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import { useRulesetStore } from "../../../hooks/stores/useRulesetStore";
import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";
import { Skill } from "../../../data/skills/_skills";
import { GetSkillFromPath } from "../../../utils/pathFinder";

import { GenericGrid } from "../../Shared/Grids";


function GetSubskills(skillPath: SkillPath): SkillPath[] {
	const { checkRulesets } = useRulesetStore();

	return ((GetSkillFromPath(skillPath).subskills as SkillPath[])
		.map(v => [v, GetSkillFromPath(v)]) as [SkillPath, Skill][])
		.filter(v => checkRulesets(v[1].allowed))
		.map(v => v[0]);
}

export function AppropriateWeaponsSelection() {
	const { specialSkills, selectAppropriateWeapon, selectMandatoryAppropriateWeapon } = useCharacterBurnerStore();

	const subskills = GetSubskills("Any General➞Appropriate Weapons");

	return (
		<Fragment>
			<Grid item xs={2}>
				<Typography variant="h5">Appropriate Weapons</Typography>
			</Grid>

			<Grid item xs={2}>
				<FormControl fullWidth>
					<InputLabel>Mandatory Weapon Skill</InputLabel>
					<Select value={specialSkills.appropriateWeapons.mandatory} label="Mandatory Weapon Skill" onChange={(v) => selectMandatoryAppropriateWeapon(v.target.value as SkillPath)}>
						{specialSkills.appropriateWeapons.selected.map((skillName, i) =>
							<MenuItem key={i} value={skillName}>{skillName.split("➞")[1]}</MenuItem>
						)}
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={2}>
				{subskills.map((skillPaths, i) =>
					<FormControlLabel
						key={i}
						label={skillPaths.split("➞")[1]}
						control={
							<Checkbox
								checked={specialSkills.appropriateWeapons.selected.includes(skillPaths)}
								onChange={() => selectAppropriateWeapon(skillPaths)}
							/>
						}
					/>
				)}
			</Grid>
		</Fragment>
	);
}

export function JavelinOrBowSelection() {
	const { specialSkills, selectJavelinOrBow } = useCharacterBurnerStore();

	return (
		<Fragment>
			<Grid item xs={2}>
				<Typography variant="h5">Javelin or Bow</Typography>
			</Grid>

			<Grid item xs={2}>
				<FormControl fullWidth>
					<InputLabel>Javelin or Bow</InputLabel>
					<Select value={specialSkills.javelinOrBow} label="Javelin or Bow" onChange={(v) => selectJavelinOrBow(v.target.value as SkillPath)}>
						<MenuItem value={"Any General➞Bow"}>Bow</MenuItem>
						<MenuItem value={"Any General➞Javelin"}>Javelin</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		</Fragment>
	);
}

export function AnySmithSelection() {
	const { specialSkills, selectAnySmith } = useCharacterBurnerStore();

	const subskills = GetSubskills("Any General➞Any -smith");

	return (
		<Fragment>
			<Grid item xs={2}>
				<Typography variant="h5">Any Smithing</Typography>
			</Grid>

			<Grid item xs={2}>
				{subskills.map((skillName, i) =>
					<FormControlLabel
						key={i}
						label={skillName.split("➞")[1]}
						control={
							<Checkbox
								checked={specialSkills.anySmith.includes(skillName)}
								onChange={() => selectAnySmith(skillName)}
							/>
						}
					/>
				)}
			</Grid>
		</Fragment>
	);
}

export function SpecialSkillsModal({ openSu, openSuModal }: { openSu: boolean; openSuModal: (open: boolean) => void; }) {
	const { totals } = useCharacterBurnerStore();

	const hasSkill = (skillName: string) => {
		return totals.skills.mandatoryList.includes(skillName) || totals.skills.lifepathList.includes(skillName);
	};

	return (
		<Modal open={openSu} onClose={() => openSuModal(false)}>
			<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none", overflow: "auto" }}>
				<GenericGrid columns={2} spacing={[2, 1]} center>
					{hasSkill("Any General➞Appropriate Weapons") ? <AppropriateWeaponsSelection /> : null}
					{hasSkill("Any General➞Javelin or Bow") ? <JavelinOrBowSelection /> : null}
					{hasSkill("Any General➞Any -smith") ? <AnySmithSelection /> : null}
				</GenericGrid>
			</Paper>
		</Modal>
	);

}
