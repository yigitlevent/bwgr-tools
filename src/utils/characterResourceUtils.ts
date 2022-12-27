import { CharacterSpendings } from "../state/reducers/characterBurner";
import { LifepathTotals } from "./lifepathTotals";


export interface ResourceRemaining {
	resourcePoints: number;
}

// REMAINING
export function GetRemainingResourceTotals(totals: LifepathTotals, spendings: CharacterSpendings): ResourceRemaining {
	const costs = Object.values(spendings.resources).map(v => v.cost);
	const resourcePointSpending = costs.length > 0 ? costs.reduce((a, b) => a + b) : 0;

	// FIX: [EXTENSIONS] This does not take extensions into account
	return {
		resourcePoints: totals.resources.points - resourcePointSpending
	};
}
