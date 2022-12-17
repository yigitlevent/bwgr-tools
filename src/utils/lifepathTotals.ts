import { Lifepath, Stocks } from "../data/stocks/_stocks";

export interface LifepathTotals {
	year: number;
	yearExt: string[]
	ageStats: [number, number]
	resource: number;
	resourcesExt: string[];
	either: number;
	mental: number;
	physical: number;
	general: number;
	generalExt: string[];
	lifepath: number;
	lifepathExt: string[];
	trait: number;
}

// TODO: This does not take into account the repeated-lifepaths
export function CalculateLifepathTotals(chosenLifepaths: Lifepath[]) {
	const totals: LifepathTotals = {
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

	return totals;
}
