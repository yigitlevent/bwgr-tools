import { GetEmptySpending, GetEmptyTotals } from "./_common";


export function ChangeStock(state: CharacterBurnerState, action: ChangeCharacterStock) {
	const newStock = action.payload.stock;
	const newTotals: LifepathTotals = GetEmptyTotals();
	const newSpendings: CharacterSpendings = GetEmptySpending();
	return {
		...state,
		stock: newStock,
		lifepathPaths: [],
		totals: newTotals,
		spendings: newSpendings,
		questions: {}
	};
}

export function ChangeConcept(state: CharacterBurnerState, action: ChangeCharacterConcept) {
	return { ...state, concept: action.payload.concept };
}

export function ChangeName(state: CharacterBurnerState, action: ChangeCharacterName) {
	return { ...state, name: action.payload.name };
}

export function ChangeBelief(state: CharacterBurnerState, action: ChangeBelief) {
	const newBeliefs = [...state.beliefs];
	newBeliefs[action.payload.index] = action.payload.belief;
	return { ...state, beliefs: newBeliefs as any };
}

export function ChangeInstinct(state: CharacterBurnerState, action: ChangeInstinct) {
	const newInstincts = [...state.instincts];
	newInstincts[action.payload.index] = action.payload.instinct;
	return { ...state, instincts: newInstincts as any };
}
