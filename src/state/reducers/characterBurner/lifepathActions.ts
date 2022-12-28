import { RefreshAttributesList } from "../../../utils/characterAttributeUtils";
import { RefreshQuestionsList } from "../../../utils/characterQuestionUtils";
import { RefreshSkillsList } from "../../../utils/characterSkillUtils";
import { RefreshTraitsList } from "../../../utils/characterTraitUtils";
import { CalculateLifepathTotals } from "../../../utils/lifepathTotals";
import { GetLifepathsFromPaths } from "../../../utils/pathFinder";

import { GetEmptyTotals, GetQuestions } from "./_common";


export function AddLifepath(state: CharacterBurnerState, action: AddLifepath) {
	const lifepaths = [...state.lifepathPaths];
	lifepaths.push(action.payload.lifepathPath);
	const newTotals: LifepathTotals = lifepaths.length > 0
		? CalculateLifepathTotals(GetLifepathsFromPaths(lifepaths), state.specialLifepaths, state.specialSkills, state.totals.skills.generalList, state.totals.traits.generalList)
		: GetEmptyTotals();

	const newLimits = JSON.parse(JSON.stringify(state.limits)) as CharacterLimits;
	if (newTotals.traits.commonList.includes("Dwarf Common➞Stout")) {
		newLimits.stats.Forte = { min: 1, max: 9 };
		newLimits.stats.Speed = { min: 1, max: 6 };
	}
	if (newTotals.traits.commonList.includes("Elf Common➞First Born")) {
		newLimits.stats.Perception = { min: 1, max: 9 };
	}
	if (newTotals.traits.commonList.includes("Troll Common➞Massive Stature")) {
		newLimits.stats.Power = { min: 4, max: 9 };
		newLimits.stats.Forte = { min: 4, max: 9 };
		newLimits.stats.Agility = { min: 1, max: 5 };
		newLimits.stats.Speed = { min: 1, max: 5 };
	}
	if (newTotals.traits.commonList.includes("Great Wolf Common➞Great Lupine Form")) {
		newLimits.stats.Agility = { min: 1, max: 6 };
	}

	const newSkills = RefreshSkillsList(newTotals, state.spendings).skills;
	const newTraits = RefreshTraitsList(newTotals, state.spendings).traits;
	const newAttributes = RefreshAttributesList(newTotals, state.spendings).attributes;
	const newSpendings: CharacterSpendings = {
		...state.spendings,
		skills: newSkills,
		traits: newTraits,
		attributes: newAttributes
	};

	const newQuestions: CharacterQuestions = RefreshQuestionsList(newTotals, newSpendings, GetQuestions(state));
	const newStockSpecific = JSON.parse(JSON.stringify(state.stockSpecific)) as CharacterStockSpecific;
	if (newStockSpecific.brutalLife.traits.length > 0) newStockSpecific.brutalLife.traits.pop();
	newStockSpecific.territory.huntingGround = undefined;

	return {
		...state,
		limits: newLimits,
		lifepathPaths: lifepaths,
		totals: JSON.parse(JSON.stringify(newTotals)),
		spendings: JSON.parse(JSON.stringify(newSpendings)),
		questions: JSON.parse(JSON.stringify(newQuestions)),
		stockSpecific: newStockSpecific
	};
}

export function RemoveLifepath(state: CharacterBurnerState) {
	const lifepaths = [...state.lifepathPaths];
	lifepaths.pop();

	const newTotals = lifepaths.length > 0
		? CalculateLifepathTotals(GetLifepathsFromPaths(lifepaths), state.specialLifepaths, state.specialSkills, state.totals.skills.generalList, state.totals.traits.generalList)
		: GetEmptyTotals();

	const newSkills = RefreshSkillsList(newTotals, state.spendings).skills;
	const newTraits = RefreshTraitsList(newTotals, state.spendings).traits;
	const newAttributes = RefreshAttributesList(newTotals, state.spendings).attributes;
	const newSpendings: CharacterSpendings = {
		...state.spendings,
		skills: newSkills,
		traits: newTraits,
		attributes: newAttributes
	};

	const newQuestions: CharacterQuestions = RefreshQuestionsList(newTotals, newSpendings, GetQuestions(state));
	const newStockSpecific = JSON.parse(JSON.stringify(state.stockSpecific)) as CharacterStockSpecific;
	if (newStockSpecific.brutalLife.traits.length > 0) newStockSpecific.brutalLife.traits.pop();
	newStockSpecific.territory.huntingGround = undefined;

	return {
		...state,
		lifepathPaths: lifepaths,
		totals: JSON.parse(JSON.stringify(newTotals)),
		spendings: JSON.parse(JSON.stringify(newSpendings)),
		questions: JSON.parse(JSON.stringify(newQuestions)),
		stockSpecific: newStockSpecific
	};
}
