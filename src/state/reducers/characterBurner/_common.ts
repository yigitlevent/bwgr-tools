import { EmptyTotals } from "../../../utils/lifepathTotals";


export const EmptySpendings: CharacterSpendings = {
	stats: {
		Will: { mentalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } },
		Perception: { mentalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } },
		Power: { physicalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } },
		Agility: { physicalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } },
		Forte: { physicalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } },
		Speed: { physicalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } }
	},
	attributes: {},
	skills: {},
	traits: {},
	resources: {}
};

export function GetTotals(state: CharacterBurnerState): LifepathTotals {
	return JSON.parse(JSON.stringify(state.totals));
}

export function GetEmptyTotals(): LifepathTotals {
	return JSON.parse(JSON.stringify(EmptyTotals));
}

export function GetSpending(state: CharacterBurnerState): CharacterSpendings {
	return JSON.parse(JSON.stringify(state.spendings));
}

export function GetEmptySpending(): CharacterSpendings {
	return JSON.parse(JSON.stringify(EmptySpendings));
}

export function GetQuestions(state: CharacterBurnerState): CharacterQuestions {
	return JSON.parse(JSON.stringify(state.questions));
}
