import { Stat, Stats } from "../data/stats";


export interface StatRemaining {
	eitherPool: number;
	mentalPool: number;
	physicalPool: number;
}

// GET
export function GetMentalTotal(totals: LifepathTotals) {
	return totals.stats.fromAge[0] + totals.stats.fromLifepaths.mentalPoints;
}

export function GetPhysicalTotal(totals: LifepathTotals) {
	return totals.stats.fromAge[1] + totals.stats.fromLifepaths.physicalPoints;
}

export function GetStatShade(name: StatsList, spendings: CharacterSpendings): ShadesListLimited {
	const totalSpent =
		spendings.stats[name].eitherPool.shade +
		((Stats.find(v => v.name === name) as Stat).pool === "Mental"
			? (spendings.stats[name].mentalPool as StatSpending).shade
			: (spendings.stats[name].physicalPool as StatSpending).shade);

	return totalSpent === 0 ? "B" : "G";
}

export function GetStatExponent(name: StatsList, spendings: CharacterSpendings): number {
	const total =
		spendings.stats[name].eitherPool.exponent +
		((Stats.find(v => v.name === name) as Stat).pool === "Mental"
			? (spendings.stats[name].mentalPool as StatSpending).exponent
			: (spendings.stats[name].physicalPool as StatSpending).exponent);

	return total;
}

// REMAINING
export function GetRemainingStatTotals(totals: LifepathTotals, spendings: CharacterSpendings): StatRemaining {
	const eitherSpending =
		Object.values(spendings.stats).map(v => v.eitherPool.exponent + v.eitherPool.shade).reduce((v, a) => v + a);

	const mentalSpending =
		Object.values(spendings.stats).map(v => ("mentalPool" in v) ? (v.mentalPool as StatSpending).exponent + (v.mentalPool as StatSpending).shade : 0).reduce((v, a) => v + a);

	const physicalSpending =
		Object.values(spendings.stats).map(v => ("physicalPool" in v) ? (v.physicalPool as StatSpending).exponent + (v.physicalPool as StatSpending).shade : 0).reduce((v, a) => v + a);

	return {
		eitherPool: totals.stats.fromLifepaths.eitherPoints - eitherSpending,
		mentalPool: (totals.stats.fromAge[0] + totals.stats.fromLifepaths.mentalPoints) - mentalSpending,
		physicalPool: (totals.stats.fromAge[1] + totals.stats.fromLifepaths.physicalPoints) - physicalSpending
	};
}

// SPENT
export function ModifyStatShadeSpending(statName: StatsList, spendings: CharacterSpendings, totals: LifepathTotals) {
	const spending = spendings.stats[statName];
	const remaining = GetRemainingStatTotals(totals, spendings);
	const key = (Stats.find(v => v.name === statName) as Stat).pool === "Mental" ? "mentalPool" : "physicalPool";
	const shadeSpending = spending.eitherPool.shade + (spending[key] as StatSpending).shade;

	if (shadeSpending === 0) {
		// if mental pool has enough points, add that
		if (remaining[key] >= 5) {
			(spending[key] as StatSpending).shade += 5;
		}
		// otherwise add as many as possible from mental pool, then deduct either
		else if (remaining.eitherPool + remaining[key] >= 5) {
			(spending[key] as StatSpending).shade += remaining[key];
			spending.eitherPool.shade += (5 - remaining[key]);
		}
	}
	else if (shadeSpending === 5) {
		(spending[key] as StatSpending).shade = 0;
		spending.eitherPool.shade = 0;
	}

	return spending;
}

export function ModifyStatExponentSpending(statName: StatsList, spendings: CharacterSpendings, totals: LifepathTotals, change: 1 | -1) {
	const spending = spendings.stats[statName];
	const remaining = GetRemainingStatTotals(totals, spendings);
	const key = (Stats.find(v => v.name === statName) as Stat).pool === "Mental" ? "mentalPool" : "physicalPool";

	if (change === 1) {
		if (remaining[key] > 0) (spending[key] as StatSpending).exponent += 1;
		else if (remaining.eitherPool > 0) spending.eitherPool.exponent += 1;
	}
	else if (change === -1) {
		if (spending.eitherPool.exponent > 0) spending.eitherPool.exponent -= 1;
		else if ((spending[key] as StatSpending).exponent > 0) (spending[key] as StatSpending).exponent -= 1;
	}

	return spending;
}
