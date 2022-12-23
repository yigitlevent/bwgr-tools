import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { GetMentalTotal, GetPhysicalTotal } from "../../utils/characterStatUtils";
import { LifepathTotals } from "../../utils/lifepathTotals";


export function RandomCharacterBurnerBasics({ totals }: { totals: LifepathTotals; }) {
	const yearsExtension = totals.years.extensions.length > 0 ? `, plus ${totals.years.extensions.join(" ")}` : "";
	const resourcesExtension = totals.resources.extensions.length > 0 ? `, plus ${totals.resources.extensions.join(" ")}` : "";

	const mentalPool = GetMentalTotal(totals);
	const physicalPool = GetPhysicalTotal(totals);
	const eitherPool = (totals.stats.fromLifepaths.eitherPoints !== 0) ? `(${totals.stats.fromLifepaths.eitherPoints > 0 ? "+" : ""}${totals.stats.fromLifepaths.eitherPoints}M/P)` : "";

	const generalSkillExtension = totals.skills.generalPoints.extensions.length > 0 ? `, plus ${totals.skills.generalPoints.extensions.join(" ")}` : "";
	const lifepathSkillExtension = totals.skills.lifepathPoints.extensions.length > 0 ? `, plus ${totals.skills.lifepathPoints.extensions.join(" ")}` : "";

	return (
		<Grid container columns={2}>
			<Grid item xs={1}>
				<Typography variant="caption">Years: {totals.years.points}{yearsExtension}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="caption">Resources: {totals.resources.points}{resourcesExtension}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="caption">Stats: {mentalPool}M, {physicalPool}P, {eitherPool}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="caption">Trait Points: {totals.traits.points}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="caption">General Skill Points: {totals.skills.generalPoints.points}{generalSkillExtension}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="caption">Lifepath Skill Points: {totals.skills.lifepathPoints.points}{lifepathSkillExtension}</Typography>
			</Grid>
		</Grid>
	);
}
