import { CharacterSpending } from "../state/reducers/characterBurner";
import { LifepathTotals } from "./lifepathTotals";
import { GetTraitFromPath } from "./pathFinder";


export interface TraitRemaining {
	traitPoints: number;
}

// GET
export function GetTraitOpenness(traitName: string, spending: CharacterSpending): boolean {
	return spending.traits[traitName].open > 0;
}

// REMAINING
export function GetRemainingTraitTotals(totals: LifepathTotals, spending: CharacterSpending): TraitRemaining {
	const traitPointSpending = Object.values(spending.traits).map(v => v.open);

	// BUG: This does not take extensions into account
	return {
		traitPoints: totals.traits.points - ((traitPointSpending.length > 0) ? traitPointSpending.reduce((v, a) => v + a) : 0)
	};
}

// SPEND
export function TryOpenTrait(traitName: string, totals: LifepathTotals, spendings: CharacterSpending, toOpen: boolean, isLifepath: boolean) {
	const spending = spendings.traits[traitName];

	const trait = GetTraitFromPath(traitName);
	const traitRemainings = GetRemainingTraitTotals(totals, spendings);

	if (toOpen) {
		if (isLifepath && traitRemainings.traitPoints >= 1) {
			spending.open = 1;
		}
		else if (!isLifepath && traitRemainings.traitPoints >= trait.cost) {
			spending.open = trait.cost;
		}
	}
	else {
		spending.open = 0;
	}

	return spending;
}

// REFRESH
export function RefreshTraitList(totals: LifepathTotals, spending: CharacterSpending): CharacterSpending {
	const newSpending = JSON.parse(JSON.stringify(spending)) as CharacterSpending;

	for (const key in spending.traits) {
		if (key in totals.traits.mandatoryList || key in totals.traits.lifepathList) {
			newSpending.traits[key] = spending.traits[key];
		}
		else delete newSpending.traits[key];
	}

	totals.traits.mandatoryList.map(traitName => {
		if (!(traitName in newSpending.traits)) {
			newSpending.traits[traitName] = { open: 0 };
			TryOpenTrait(traitName, totals, newSpending, true, true);
		}
	});

	totals.traits.lifepathList.map(traitName => {
		if (!(traitName in newSpending.traits)) newSpending.traits[traitName] = { open: 0 };
	});

	return newSpending;
}
