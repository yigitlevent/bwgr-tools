import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Lifepath } from "../../data/stocks/_stocks";
import { CalculateLifepathTotals } from "../../utils/lifepathTotals";


export function RandomCharacterBurnerBasics({ chosenLifepaths }: { chosenLifepaths: Lifepath[]; }) {
	const totals = CalculateLifepathTotals(chosenLifepaths);

	return (
		<Grid container columns={2}>
			<Grid item xs={1}>
				<Typography variant="caption">Years: {totals.year}{totals.yearExt.length > 0 ? `, plus ${totals.yearExt.join(" ")}` : ""}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="caption">Resources: {totals.resource}{totals.resourcesExt.length > 0 ? `, plus ${totals.resourcesExt.join(" ")}` : ""}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="caption">Stats: {totals.ageStats[0] + totals.mental}M, {totals.ageStats[1] + totals.physical}P {(totals.either !== 0) ? `(${totals.either > 0 ? "+" : ""}${totals.either}M/P)` : ""}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="caption">Trait Points: {totals.trait}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="caption">General Skill Points: {totals.general}{totals.generalExt.length > 0 ? `, plus ${totals.generalExt.join(" ")}` : ""}</Typography>
			</Grid>
			<Grid item xs={1}>
				<Typography variant="caption">Lifepath Skill Points: {totals.lifepath}{totals.lifepathExt.length > 0 ? `, plus ${totals.lifepathExt.join(" ")}` : ""}</Typography>
			</Grid>
		</Grid>
	);
}
