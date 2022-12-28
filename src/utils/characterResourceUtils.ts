export interface ResourceRemaining {
	resourcePoints: number;
}

// REMAINING
export function GetRemainingResourceTotals(totals: LifepathTotals, spendings: CharacterSpendings): ResourceRemaining {
	const costs = Object.values(spendings.resources).map(v => v.cost);
	const resourcePointSpending = costs.length > 0 ? costs.reduce((a, b) => a + b) : 0;

	return {
		resourcePoints: totals.resources.points - resourcePointSpending
	};
}
