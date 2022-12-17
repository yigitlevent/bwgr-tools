import { Lifepath, Stocks } from "../data/stocks/_stocks";


export interface LifepathTotals {
	year: number;
	yearExt: string[];
	ageStats: [number, number];
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
	mandSkills: Set<string>;
	skills: Set<string>;
	mandTraits: Set<string>;
	traits: Set<string>;
}

function OccuranceCount(chosenLifepaths: Lifepath[], currentLifepath: Lifepath, currentIndex: number) {
	const previousLifepaths = chosenLifepaths.slice(0, currentIndex);
	return previousLifepaths.filter(lp => lp.name === currentLifepath.name).length;
}

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
		trait: 0,
		mandSkills: new Set<string>(),
		skills: new Set<string>(),
		mandTraits: new Set<string>(),
		traits: new Set<string>()
	};

	for (let i = 0; i < chosenLifepaths.length; i++) {
		const lp = chosenLifepaths[i];
		const repeatCount = OccuranceCount(chosenLifepaths, lp, i);

		if (i !== 0) {
			const prevLp = chosenLifepaths[i - 1];
			if (lp.setting !== prevLp.setting) totals.year += 1;
		}

		if (repeatCount === 0 || repeatCount === 1) {
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

			if (repeatCount === 1 && lp.traits.length < 2) totals.trait += lp.traitPool - 1;
			else totals.trait += lp.traitPool;
		}
		else if (repeatCount === 2) {
			if (typeof lp.years === "number") totals.year += lp.years;
			else totals.yearExt.push(lp.years);

			if (typeof lp.resources === "number") totals.resource += Math.floor(lp.resources / 2);
			else totals.resourcesExt.push(`${lp.resources}/2`);

			if (typeof lp.generalSkillPool === "number") totals.general += Math.floor(lp.generalSkillPool / 2);
			else totals.generalExt.push(`${lp.generalSkillPool}/2`);

			if (typeof lp.skillPool === "number") totals.lifepath += Math.floor(lp.skillPool / 2);
			else totals.lifepathExt.push(`${lp.skillPool}/2`);
		}
		else if (repeatCount > 2) {
			if (typeof lp.years === "number") totals.year += lp.years;
			else totals.yearExt.push(lp.years);

			if (typeof lp.resources === "number") totals.resource += Math.floor(lp.resources / 2);
			else totals.resourcesExt.push(`${lp.resources}/2`);
		}
	}

	const ageBracket = Stocks[chosenLifepaths[0].stock].agePool.filter(v => (v.max >= totals.year && v.min <= totals.year));
	totals.ageStats = [ageBracket[0].m, ageBracket[0].p];

	for (let i = 0; i < chosenLifepaths.length; i++) {
		const lp = chosenLifepaths[i];
		const repeatCount = OccuranceCount(chosenLifepaths, lp, i);

		if (lp.skills.length > 0) totals.mandSkills.add(lp.skills[0]);
		if (repeatCount === 1 && lp.skills.length > 1) totals.mandSkills.add(lp.skills[1]);

		if (lp.traits.length > 0) totals.mandTraits.add(lp.traits[0]);
		if (repeatCount === 1 && lp.traits.length > 1) totals.mandTraits.add(lp.traits[1]);
	}

	for (const lifepathKey in chosenLifepaths) {
		const lp = chosenLifepaths[lifepathKey];
		lp.skills.forEach(v => { if (!totals.mandSkills.has(v)) totals.skills.add(v); });
		lp.traits.forEach(v => { if (!totals.mandTraits.has(v)) totals.traits.add(v); });
	}

	return totals;
}
