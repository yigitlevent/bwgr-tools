import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Lifepath, Stocks } from "../../data/stocks/_stocks";


export function RandomCharacterBurnerBasics({ chosenLifepaths }: { chosenLifepaths: Lifepath[]; }) {
	const totals = {
		year: 0, yearExt: [] as string[], ageStats: [0, 0],
		resource: 0, resourcesExt: [] as string[],
		// Stat
		either: 0, mental: 0, physical: 0,
		// Skill
		general: 0, generalExt: [] as string[],
		lifepath: 0, lifepathExt: [] as string[],
		// Trait
		trait: 0
	};

	for (const lifepathKey in chosenLifepaths) {
		const lp = chosenLifepaths[lifepathKey];

		if (parseInt(lifepathKey) !== 0) {
			const prevLp = chosenLifepaths[parseInt(lifepathKey) - 1];
			if (lp.setting !== prevLp.setting) totals.year += 1;
		}

		totals.either += lp.eitherPool;
		totals.mental += lp.mentalPool;
		totals.physical += lp.physicalPool;

		if (typeof lp.years === "number") totals.year += lp.years;
		else totals.yearExt.push(lp.years);

		if (typeof lp.resources === "number") totals.resource += lp.resources;
		else totals.resourcesExt.push(lp.resources);

		if (typeof lp.generalSkillPool === "number") totals.general += lp.generalSkillPool;
		else totals.generalExt.push(lp.generalSkillPool);

		if (typeof lp.skillPool === "number") totals.lifepath += lp.skillPool;
		else totals.lifepathExt.push(lp.skillPool);

		totals.trait += lp.traitPool;
	}

	const ageBracket = Stocks[chosenLifepaths[0].stock].agePool.filter(v => (v.max >= totals.year && v.min <= totals.year));
	totals.ageStats = [ageBracket[0].m, ageBracket[0].p];

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
