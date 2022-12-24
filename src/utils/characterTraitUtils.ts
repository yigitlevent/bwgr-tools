import { CharacterSpendings } from "../state/reducers/characterBurner";
import { LifepathTotals } from "./lifepathTotals";
import { GetTraitFromPath } from "./pathFinder";


export interface TraitRemaining {
	traitPoints: number;
}

// GET
export function GetTraitOpenness(traitName: string, spendings: CharacterSpendings): boolean {
	return traitName in spendings.traits && spendings.traits[traitName].open > 0;
}

// REMAINING
export function GetRemainingTraitTotals(totals: LifepathTotals, spendings: CharacterSpendings): TraitRemaining {
	const traitPointSpending = Object.values(spendings.traits).map(v => v.open);

	// BUG: [EXTENSIONS] This does not take extensions into account
	return {
		traitPoints: totals.traits.points - ((traitPointSpending.length > 0) ? traitPointSpending.reduce((v, a) => v + a) : 0)
	};
}

// SPEND
export function TryOpenTrait(traitName: string, totals: LifepathTotals, spendings: CharacterSpendings, toOpen: boolean, isLifepath: boolean) {
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
export function RefreshTraitList(totals: LifepathTotals, spendings: CharacterSpendings): CharacterSpendings {
	const newSpending = JSON.parse(JSON.stringify(spendings)) as CharacterSpendings;

	for (const key in spendings.traits) {
		if (key in totals.traits.mandatoryList || key in totals.traits.lifepathList) {
			newSpending.traits[key] = spendings.traits[key];
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
