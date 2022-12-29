import { Fragment, useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";
import { SpecialSkills } from "../../../data/skills/_specialSkills";

import { GenericGrid } from "../../Shared/Grids";
import { BlockSkillPopover } from "../BlockText";
import { GeneralSkillModal } from "../Modals/GeneralSkillModal";
import { AbilityButton } from "../../Shared/AbilityButton";


function MandatorySkillsBlock() {
	const { totals, getSkillOpenness, getSkillShade, getSkillExponent, changeSkillExponent } = useCharacterBurnerStore();

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Mandatory</Typography>
			</Grid>

			<Fragment>
				{totals.skills.mandatoryList
					.filter(v => !SpecialSkills.includes(v as SkillPath))
					.map((skillName, i) =>
						<Grid key={i} item xs={6} sm={3} md={2}>
							<GenericGrid columns={5} center="h" hasBackground={1}>
								<BlockSkillPopover
									skillName={skillName}
									checkbox={{
										checked: getSkillOpenness(skillName as SkillPath),
										disabled: true
									}}
								/>
								<Grid item>
									<AbilityButton name={skillName} disabled>{getSkillShade(skillName as SkillPath)}</AbilityButton>
									<AbilityButton onClick={e => changeSkillExponent(e, skillName as SkillPath, 1, true)} onContextMenu={e => changeSkillExponent(e, skillName as SkillPath, -1, true)}>
										{getSkillExponent(skillName as SkillPath)}
									</AbilityButton>
								</Grid>
							</GenericGrid>
						</Grid>
					)}
			</Fragment>
		</Fragment>
	);
}

function LifepathSkillsBlock() {
	const { totals, getSkillOpenness, getSkillShade, getSkillExponent, openSkill, changeSkillExponent } = useCharacterBurnerStore();

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Lifepath</Typography>
			</Grid>

			<Fragment>
				{totals.skills.lifepathList
					.filter(v => !SpecialSkills.includes(v as SkillPath))
					.map((skillPath, i) =>
						<Grid key={i} item xs={6} sm={3} md={2}>
							<GenericGrid columns={5} center="h" hasBackground={1}>
								<BlockSkillPopover
									skillName={skillPath}
									checkbox={{
										checked: getSkillOpenness(skillPath as SkillPath),
										onChange: (e, c) => openSkill(skillPath as SkillPath, c, true)
									}}
								/>
								<Grid item sx={{ marginTop: "3px" }}>
									<AbilityButton name={skillPath} disabled>{getSkillShade(skillPath as SkillPath)}</AbilityButton>
									<AbilityButton
										disabled={!getSkillOpenness(skillPath as SkillPath)}
										onClick={e => changeSkillExponent(e, skillPath as SkillPath, 1, true)}
										onContextMenu={e => changeSkillExponent(e, skillPath as SkillPath, -1, true)}
									>
										{getSkillExponent(skillPath as SkillPath)}
									</AbilityButton>
								</Grid>
							</GenericGrid>
						</Grid>
					)}
			</Fragment>
		</Fragment>
	);
}

function GeneralSkillsBlock() {
	const { totals, getSkillOpenness, getSkillShade, getSkillExponent, openSkill, changeSkillExponent, removeSkill } = useCharacterBurnerStore();

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>General</Typography>
			</Grid>

			<Fragment>
				{totals.skills.generalList
					.filter(v => !SpecialSkills.includes(v as SkillPath))
					.map((skillName, i) =>
						<Grid key={i} item xs={6} sm={3} md={2}>
							<GenericGrid columns={5} center="h" hasBackground={1}>
								<BlockSkillPopover
									skillName={skillName}
									checkbox={{
										checked: getSkillOpenness(skillName as SkillPath),
										onChange: (e, c) => openSkill(skillName as SkillPath, c, false)
									}}
									deleteCallback={() => removeSkill(skillName as SkillPath)}
								/>
								<Grid item sx={{ marginTop: "3px" }}>
									<AbilityButton name={skillName} disabled>{getSkillShade(skillName as SkillPath)}</AbilityButton>
									<AbilityButton
										name={skillName}
										disabled={!getSkillOpenness(skillName as SkillPath)}
										onClick={e => changeSkillExponent(e, skillName as SkillPath, 1, false)}
										onContextMenu={e => changeSkillExponent(e, skillName as SkillPath, -1, false)}
									>
										{getSkillExponent(skillName as SkillPath)}
									</AbilityButton>
								</Grid>
							</GenericGrid>
						</Grid>
					)}
			</Fragment>
		</Fragment>
	);
}

export function SkillsBlock() {
	const { totals, getSkillRemainings } = useCharacterBurnerStore();

	const [open, setOpen] = useState(false);

	const skillRemaining = getSkillRemainings();

	return (
		<GenericGrid columns={6} center="v" spacing={[0, 2]}>
			<Grid item xs={6}>
				<Typography variant="h4">Skills</Typography>
			</Grid>

			<Grid item xs={6} sm={5}>
				<Typography>General Skill Points: {totals.skills.generalPoints.points}, Remaining: {skillRemaining ? skillRemaining.generalPoints : -1}</Typography>
				<Typography>Lifepath Skill Points: {totals.skills.lifepathPoints.points}, Remaining: {skillRemaining ? skillRemaining.lifepathPoints : -1}</Typography>
			</Grid>

			<Grid item xs={6} sm={1}>
				<Button variant="outlined" size="small" onClick={() => setOpen(true)} fullWidth>Add General Skill</Button>
			</Grid>

			{totals.skills.mandatoryList.length > 0 ? <MandatorySkillsBlock /> : null}
			{totals.skills.lifepathList.length > 0 ? <LifepathSkillsBlock /> : null}
			{totals.skills.generalList.length > 0 ? <GeneralSkillsBlock /> : null}

			<GeneralSkillModal open={open} setOpen={setOpen} />
		</GenericGrid>
	);
}
