import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";
import { GetRemainingSkillTotals, GetSkillExponent, GetSkillOpenness, GetSkillShade } from "../../../utils/characterSkillUtils";

import { GenericGrid } from "../../Shared/Grids";
import { SkillButton } from "../AbilityButtons";
import { BlockSkillPopover } from "../BlockText";


export function SkillsBlock() {
	const { stock, lifepathPaths, totals, spendings, questions } = useAppSelector(state => state.characterBurner);
	const { cbOpenSkill, cbChangeSkillExponent } = useStore().characterBurner;

	const skillRemaining = GetRemainingSkillTotals(totals, spendings);

	const specialSkills = ["Any General➞Appropriate Weapons", "Any General➞Javelin or Bow", "Any General➞Any -smith"];

	return (
		<GenericGrid columns={6} center spacing={[0, 2]}>
			<Grid item xs={6}>
				<Typography variant="h4">Skills</Typography>
			</Grid>

			<Grid item xs={6}>
				<Typography>General Skill Points: {totals.skills.generalPoints.points}, Remaining: {skillRemaining ? skillRemaining.generalPoints : []}</Typography>
				<Typography>Lifepath Skill Points: {totals.skills.lifepathPoints.points}, Remaining: {skillRemaining ? skillRemaining.lifepathPoints : []}</Typography>
			</Grid>

			{totals.skills.mandatoryList.length > 0
				? <Fragment>
					<Grid item xs={6}>
						<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Lifepath</Typography>
					</Grid>

					<Fragment>
						{totals.skills.mandatoryList
							.filter(v => !specialSkills.includes(v))
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
											<SkillButton name={skillName} value={GetSkillShade(skillName, spendings)} disabled />
											<SkillButton
												name={skillName}
												value={GetSkillExponent(skillName, stock, lifepathPaths, totals, spendings, questions)}
												onClick={e => cbChangeSkillExponent(e, skillName, 1, true)}
												onContext={e => cbChangeSkillExponent(e, skillName, -1, true)}
											/>
										</Grid>
									</GenericGrid>
								</Grid>
							)}
					</Fragment>
				</Fragment>
				: null
			}

			{totals.skills.lifepathList.length > 0
				? <Fragment>
					<Grid item xs={6}>
						<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Lifepath</Typography>
					</Grid>

					<Fragment>
						{totals.skills.lifepathList
							.filter(v => !specialSkills.includes(v))
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
											<SkillButton name={skillName} value={GetSkillShade(skillName, spendings)} disabled />
											<SkillButton
												name={skillName}
												value={GetSkillExponent(skillName, stock, lifepathPaths, totals, spendings, questions)}
												disabled={!GetSkillOpenness(skillName, spendings)}
												onClick={e => cbChangeSkillExponent(e, skillName, 1, true)}
												onContext={e => cbChangeSkillExponent(e, skillName, -1, true)}
											/>
										</Grid>
									</GenericGrid>
								</Grid>
							)}
					</Fragment>
				</Fragment>
				: null
			}
		</GenericGrid>
	);
}
