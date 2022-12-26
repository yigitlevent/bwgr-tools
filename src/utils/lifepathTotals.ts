import { Lifepath, Stocks } from "../data/stocks/_stocks";
import { TraitCategories } from "../data/traits/_traits";
import { SpecialSkills } from "../state/reducers/characterBurner";


export interface LifepathTotals {
	years: {
		points: number;
		extensions: string[];
	};
	resources: {
		points: number;
		extensions: string[];
	};
	stats: {
		fromAge: [mentalPoints: number, physicalPoints: number];
		fromLifepaths: {
			mentalPoints: number;
			physicalPoints: number;
			eitherPoints: number;
		};
	};
	skills: {
		generalPoints: {
			points: number;
			extensions: string[];
		};
		lifepathPoints: {
			points: number;
			extensions: string[];
		};
		mandatoryList: string[];
		lifepathList: string[];
		generalList: string[];
	};
	traits: {
		points: number;
		commonList: string[];
		mandatoryList: string[];
		lifepathList: string[];
		generalList: string[];
	};
}

function OccuranceCount(chosenLifepaths: Lifepath[], currentLifepath: Lifepath, currentIndex: number) {
	const previousLifepaths = chosenLifepaths.slice(0, currentIndex);
	return previousLifepaths.filter(lp => lp.name === currentLifepath.name).length;
}

export const EmptyTotals: LifepathTotals = {
	years: {
		points: 0,
		extensions: []
	},
	resources: {
		points: 0,
		extensions: []
	},
	stats: {
		fromAge: [0, 0],
		fromLifepaths: {
			mentalPoints: 0,
			physicalPoints: 0,
			eitherPoints: 0
		}
	},
	skills: {
		generalPoints: {
			points: 0,
			extensions: []
		},
		lifepathPoints: {
			points: 0,
			extensions: []
		},
		mandatoryList: [],
		lifepathList: [],
		generalList: []
	},
	traits: {
		points: 0,
		commonList: [],
		mandatoryList: [],
		lifepathList: [],
		generalList: []
	}
};

export function CalculateLifepathTotals(chosenLifepaths: Lifepath[], specialSkills: SpecialSkills) {
	const totals: LifepathTotals = JSON.parse(JSON.stringify(EmptyTotals));

	for (let i = 0; i < chosenLifepaths.length; i++) {
		const lp = chosenLifepaths[i];
		const repeatCount = OccuranceCount(chosenLifepaths, lp, i);

		if (i !== 0) {
			const prevLp = chosenLifepaths[i - 1];
			if (lp.setting !== prevLp.setting) totals.years.points += 1;
		}

		if (typeof lp.years === "number") totals.years.points = totals.years.points + lp.years;
		else totals.years.extensions.push(lp.years);

		if (repeatCount === 0 || repeatCount === 1) {
			totals.stats.fromLifepaths.eitherPoints += lp.eitherPool;
			totals.stats.fromLifepaths.mentalPoints += lp.mentalPool;
			totals.stats.fromLifepaths.physicalPoints += lp.physicalPool;

			if (typeof lp.resources === "number") totals.resources.points += lp.resources;
			else totals.resources.extensions.push(lp.resources);

			if (typeof lp.generalSkillPool === "number") totals.skills.generalPoints.points += lp.generalSkillPool;
			else totals.skills.generalPoints.extensions.push(lp.generalSkillPool);

			if (typeof lp.skillPool === "number") totals.skills.lifepathPoints.points += lp.skillPool;
			else totals.skills.lifepathPoints.extensions.push(lp.skillPool);

			if (repeatCount === 1 && lp.traits.length < 2) totals.traits.points += lp.traitPool - 1;
			else totals.traits.points += lp.traitPool;
		}
		else if (repeatCount === 2) {
			if (typeof lp.resources === "number") totals.resources.points += Math.floor(lp.resources / 2);
			else totals.resources.extensions.push(`${lp.resources}/2`);

			if (typeof lp.generalSkillPool === "number") totals.skills.generalPoints.points += Math.floor(lp.generalSkillPool / 2);
			else totals.skills.generalPoints.extensions.push(`${lp.generalSkillPool}/2`);

			if (typeof lp.skillPool === "number") totals.skills.lifepathPoints.points += Math.floor(lp.skillPool / 2);
			else totals.skills.lifepathPoints.extensions.push(`${lp.skillPool}/2`);
		}
		else if (repeatCount > 2) {
			if (typeof lp.resources === "number") totals.resources.points += Math.floor(lp.resources / 2);
			else totals.resources.extensions.push(`${lp.resources}/2`);
		}
	}

	const stock = chosenLifepaths[0].stock;

	// FIX: [EXTENSIONS] This does not take extensions into account
	const ageBracket = Stocks[stock].agePool.filter(v => (v.max >= totals.years.points && v.min <= totals.years.points));
	totals.stats.fromAge = [ageBracket[0].m, ageBracket[0].p];

	const mandSkills = new Set<string>();
	const skills = new Set<string>();

	const commonTraits = new Set<string>(`${stock} Common` in TraitCategories ? TraitCategories[`${stock} Common`].traits.map(trait => `${stock} Common➞${trait.name}`) : []);
	const mandTraits = new Set<string>();
	const traits = new Set<string>();

	for (let i = 0; i < chosenLifepaths.length; i++) {
		const lp = chosenLifepaths[i];
		const repeatCount = OccuranceCount(chosenLifepaths, lp, i);

		if (lp.skills.length > 0) mandSkills.add(lp.skills[0]);
		if (repeatCount === 1 && lp.skills.length > 1) mandSkills.add(lp.skills[1]);

		if (mandSkills.has("Any General➞Appropriate Weapons")) {
			mandSkills.add(specialSkills.appropriateWeapons.mandatory);
		}

		if (lp.traits.length > 0) mandTraits.add(lp.traits[0]);
		if (repeatCount === 1 && lp.traits.length > 1) mandTraits.add(lp.traits[1]);
	}

	for (const lifepathKey in chosenLifepaths) {
		const lp = chosenLifepaths[lifepathKey];

		lp.skills.forEach(skill => { if (!mandSkills.has(skill)) skills.add(skill); });
		lp.traits.forEach(skill => { if (!commonTraits.has(skill) && !mandTraits.has(skill)) traits.add(skill); });

		if (mandSkills.has("Any General➞Appropriate Weapons") || skills.has("Any General➞Appropriate Weapons")) {
			specialSkills.appropriateWeapons.selected.forEach(skill => { if (!mandSkills.has(skill)) skills.add(skill); });
		}

		if (skills.has("Any General➞Javelin or Bow")) {
			if (!mandSkills.has(specialSkills.javelinOrBow)) skills.add(specialSkills.javelinOrBow);
		}

		if (skills.has("Any General➞Any -smith")) {
			specialSkills.anySmith.forEach(skill => { if (!mandSkills.has(skill)) skills.add(skill); });
		}
	}

	totals.skills.mandatoryList = Array.from(mandSkills);
	totals.skills.lifepathList = Array.from(skills);

	totals.traits.commonList = Array.from(commonTraits);
	totals.traits.mandatoryList = Array.from(mandTraits);
	totals.traits.lifepathList = Array.from(traits);

	return totals;
}
