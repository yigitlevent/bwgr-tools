import { Lifepath, Stocks } from "../data/stocks/_stocks";


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
	};
	traits: {
		points: number;
		mandatoryList: string[];
		lifepathList: string[];
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
		lifepathList: []
	},
	traits: {
		points: 0,
		mandatoryList: [],
		lifepathList: []
	}
};

export function CalculateLifepathTotals(chosenLifepaths: Lifepath[]) {
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

	// BUG: This does not take extension-related age changes into account
	const ageBracket = Stocks[chosenLifepaths[0].stock].agePool.filter(v => (v.max >= totals.years.points && v.min <= totals.years.points));
	totals.stats.fromAge = [ageBracket[0].m, ageBracket[0].p];

	const mandSkills = new Set<string>();
	const skills = new Set<string>();
	const mandTraits = new Set<string>();
	const traits = new Set<string>();

	for (let i = 0; i < chosenLifepaths.length; i++) {
		const lp = chosenLifepaths[i];
		const repeatCount = OccuranceCount(chosenLifepaths, lp, i);

		if (lp.skills.length > 0) mandSkills.add(lp.skills[0]);
		if (repeatCount === 1 && lp.skills.length > 1) mandSkills.add(lp.skills[1]);

		if (lp.traits.length > 0) mandTraits.add(lp.traits[0]);
		if (repeatCount === 1 && lp.traits.length > 1) mandTraits.add(lp.traits[1]);
	}

	for (const lifepathKey in chosenLifepaths) {
		const lp = chosenLifepaths[lifepathKey];
		lp.skills.forEach(v => { if (!mandSkills.has(v)) skills.add(v); });
		lp.traits.forEach(v => { if (!mandTraits.has(v)) traits.add(v); });
	}

	totals.skills.mandatoryList = Array.from(mandSkills);
	totals.skills.lifepathList = Array.from(skills);
	totals.traits.mandatoryList = Array.from(mandTraits);
	totals.traits.lifepathList = Array.from(traits);

	return totals;
}