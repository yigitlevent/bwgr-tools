import { Fragment, useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";
import { SpecialSkills } from "../../../data/skills/_specialSkills";
import { GetRemainingSkillTotals, GetSkillExponent, GetSkillOpenness, GetSkillShade } from "../../../utils/characterSkillUtils";

import { GenericGrid } from "../../Shared/Grids";
import { BlockSkillPopover } from "../BlockText";
import { GeneralSkillModal } from "../Modals/GeneralSkillModal";
import { AbilityButton } from "../../Shared/AbilityButton";


function MandatorySkillsBlock() {
	const { stock, lifepathPaths, totals, spendings, questions } = useAppSelector(state => state.characterBurner);
	const { cbChangeSkillExponent } = useStore().characterBurner;

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Lifepath</Typography>
			</Grid>

			<Fragment>
				{totals.skills.mandatoryList
					.filter(v => !SpecialSkills.includes(v))
					.map((skillName, i) =>
						<Grid key={i} item xs={6} sm={3} md={2}>
							<GenericGrid columns={5} center="h" hasBackground={1}>
								<BlockSkillPopover
									skillName={skillName}
									checkbox={{
										checked: GetSkillOpenness(skillName, spendings),
										disabled: true
									}}
								/>
								<Grid item>
									<AbilityButton name={skillName} disabled>{GetSkillShade(skillName, spendings)}</AbilityButton>
									<AbilityButton onClick={e => cbChangeSkillExponent(e, skillName, 1, true)} onContextMenu={e => cbChangeSkillExponent(e, skillName, -1, true)}>
										{GetSkillExponent(skillName, stock, lifepathPaths, totals, spendings, questions)}
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
	const { stock, lifepathPaths, totals, spendings, questions } = useAppSelector(state => state.characterBurner);
	const { cbOpenSkill, cbChangeSkillExponent } = useStore().characterBurner;

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Lifepath</Typography>
			</Grid>

			<Fragment>
				{totals.skills.lifepathList
					.filter(v => !SpecialSkills.includes(v))
					.map((skillName, i) =>
						<Grid key={i} item xs={6} sm={3} md={2}>
							<GenericGrid columns={5} center="h" hasBackground={1}>
								<BlockSkillPopover
									skillName={skillName}
									checkbox={{
										checked: GetSkillOpenness(skillName, spendings),
										onChange: (e, c) => cbOpenSkill(skillName, c, true)
									}}
								/>
								<Grid item sx={{ marginTop: "3px" }}>
									<AbilityButton name={skillName} disabled>{GetSkillShade(skillName, spendings)}</AbilityButton>
									<AbilityButton
										disabled={!GetSkillOpenness(skillName, spendings)}
										onClick={e => cbChangeSkillExponent(e, skillName, 1, true)}
										onContextMenu={e => cbChangeSkillExponent(e, skillName, -1, true)}
									>
										{GetSkillExponent(skillName, stock, lifepathPaths, totals, spendings, questions)}
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
	const { stock, lifepathPaths, totals, spendings, questions } = useAppSelector(state => state.characterBurner);
	const { cbOpenSkill, cbChangeSkillExponent } = useStore().characterBurner;

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>General</Typography>
			</Grid>

			<Fragment>
				{totals.skills.generalList
					.filter(v => !SpecialSkills.includes(v))
					.map((skillName, i) =>
						<Grid key={i} item xs={6} sm={3} md={2}>
							<GenericGrid columns={5} center="h" hasBackground={1}>
								<BlockSkillPopover
									skillName={skillName}
									checkbox={{
										checked: GetSkillOpenness(skillName, spendings),
										onChange: (e, c) => cbOpenSkill(skillName, c, false)
									}}
								/>
								<Grid item sx={{ marginTop: "3px" }}>
									<AbilityButton name={skillName} disabled>{GetSkillShade(skillName, spendings)}</AbilityButton>
									<AbilityButton
										name={skillName}
										disabled={!GetSkillOpenness(skillName, spendings)}
										onClick={e => cbChangeSkillExponent(e, skillName, 1, false)}
										onContextMenu={e => cbChangeSkillExponent(e, skillName, -1, false)}
									>
										{GetSkillExponent(skillName, stock, lifepathPaths, totals, spendings, questions)}
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
	const { totals, spendings } = useAppSelector(state => state.characterBurner);

	const [open, setOpen] = useState(false);

	const skillRemaining = GetRemainingSkillTotals(totals, spendings);

	return (
		<GenericGrid columns={6} center spacing={[0, 2]}>
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
