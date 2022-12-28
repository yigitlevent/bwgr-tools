import { v4 as uuidv4 } from "uuid";

import { ModifyAttributeShadeSpending, RefreshAttributesList } from "../../../utils/characterAttributeUtils";
import { RefreshQuestionsList } from "../../../utils/characterQuestionUtils";
import { ModifySkillExponentSpending, RefreshSkillsList, TryOpenSkill } from "../../../utils/characterSkillUtils";
import { ModifyStatExponentSpending, ModifyStatShadeSpending } from "../../../utils/characterStatUtils";
import { RefreshTraitsList, TryOpenTrait } from "../../../utils/characterTraitUtils";
import { GetQuestions, GetSpending, GetTotals } from "./_common";


export function ChangeStatShade(state: CharacterBurnerState, action: ChangeStatShade) {
	const spending = GetSpending(state);
	spending.stats[action.payload.statName] = ModifyStatShadeSpending(action.payload.statName, spending, state.totals);

	return {
		...state,
		spendings: { ...spending }
	};
}

export function ChangeStatExponent(state: CharacterBurnerState, action: ChangeStatExponent) {
	const spending = GetSpending(state);
	spending.stats[action.payload.statName] = ModifyStatExponentSpending(action.payload.statName, spending, state.totals, action.payload.change);
	return {
		...state,
		spendings: { ...spending }
	};
}

export function ChangeAttributeShade(state: CharacterBurnerState, action: ChangeAttributeShade) {
	const spending = GetSpending(state);
	spending.attributes[action.payload.attributeName] = ModifyAttributeShadeSpending(action.payload.attributeName, action.payload.change, state.stock, state.lifepathPaths, state.totals, spending, state.questions, state.stockSpecific);
	return {
		...state,
		spendings: { ...spending }
	};
}

export function OpenSkill(state: CharacterBurnerState, action: OpenSkill) {
	const spending = GetSpending(state);
	spending.skills[action.payload.skillPath] = TryOpenSkill(action.payload.skillPath, state.totals, spending, action.payload.open, action.payload.isLifepath);
	return {
		...state,
		spendings: { ...spending }
	};
}

export function ChangeSkillExponent(state: CharacterBurnerState, action: ChangeSkillAdvancement) {
	const spending = GetSpending(state);
	spending.skills[action.payload.skillPath] = ModifySkillExponentSpending(action.payload.skillPath, spending, state.totals, action.payload.change, action.payload.isLifepath);
	return {
		...state,
		spendings: { ...spending }
	};
}

export function OpenTrait(state: CharacterBurnerState, action: OpenTrait) {
	const spending = GetSpending(state);
	spending.traits[action.payload.traitPath] = TryOpenTrait(action.payload.traitPath, state.totals, spending, action.payload.open, action.payload.isLifepath);
	const newQuestions: CharacterQuestions = RefreshQuestionsList(state.totals, spending, GetQuestions(state));
	return {
		...state,
		spendings: {
			...spending,
			traits: spending.traits,
			attributes: RefreshAttributesList(state.totals, spending).attributes
		},
		questions: JSON.parse(JSON.stringify(newQuestions))
	};
}

export function AddGeneralSkill(state: CharacterBurnerState, action: AddSkill) {
	const newTotals = GetTotals(state);
	newTotals.skills.generalList.push(action.payload.skillPath);
	const newSpendings: CharacterSpendings = {
		...state.spendings,
		skills: RefreshSkillsList(newTotals, state.spendings).skills,
		attributes: RefreshAttributesList(newTotals, state.spendings).attributes
	};
	return {
		...state,
		totals: newTotals,
		spendings: newSpendings
	};
}

export function RemoveGeneralSkill(state: CharacterBurnerState, action: RemoveSkill) {
	const newTotals = GetTotals(state);
	newTotals.skills.generalList = newTotals.skills.generalList.filter(v => v !== action.payload.skillPath);
	const newSpendings: CharacterSpendings = {
		...state.spendings,
		skills: RefreshSkillsList(newTotals, state.spendings).skills,
		attributes: RefreshAttributesList(newTotals, state.spendings).attributes
	};
	return {
		...state,
		totals: newTotals,
		spendings: newSpendings
	};
}

export function AddGeneralTrait(state: CharacterBurnerState, action: AddTrait) {
	const newTotals = GetTotals(state);
	newTotals.traits.generalList.push(action.payload.traitPath);
	const newSpendings: CharacterSpendings = {
		...state.spendings,
		traits: RefreshTraitsList(newTotals, state.spendings).traits,
		attributes: RefreshAttributesList(newTotals, state.spendings).attributes
	};
	return {
		...state,
		totals: newTotals,
		spendings: newSpendings
	};
}

export function RemoveGeneralTrait(state: CharacterBurnerState, action: RemoveTrait) {
	const newTotals = GetTotals(state);
	newTotals.traits.generalList = newTotals.traits.generalList.filter(v => v !== action.payload.traitPath);
	const newSpendings: CharacterSpendings = {
		...state.spendings,
		traits: RefreshTraitsList(newTotals, state.spendings).traits,
		attributes: RefreshAttributesList(newTotals, state.spendings).attributes
	};
	return {
		...state,
		totals: newTotals,
		spendings: newSpendings
	};
}

export function AddResource(state: CharacterBurnerState, action: AddResource) {
	const newSpendings = GetSpending(state);
	newSpendings.resources[uuidv4()] = action.payload.resource;
	return {
		...state,
		spendings: newSpendings
	};
}

export function RemoveResource(state: CharacterBurnerState, action: RemoveResource) {
	const newSpendings = GetSpending(state);
	delete newSpendings.resources[action.payload.guid];
	return {
		...state,
		spendings: newSpendings
	};
}


