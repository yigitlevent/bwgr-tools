import { RefreshAttributesList } from "../../../utils/characterAttributeUtils";
import { RefreshSkillsList } from "../../../utils/characterSkillUtils";
import { CalculateLifepathTotals } from "../../../utils/lifepathTotals";
import { GetLifepathsFromPaths } from "../../../utils/pathFinder";
import { GetEmptyTotals } from "./_common";


export function SelectAppropriateWeapon(state: CharacterBurnerState, action: SelectApprWeapon) {
	const newSpecialSkills = JSON.parse(JSON.stringify(state.specialSkills)) as SpecialSkills;
	if (newSpecialSkills.appropriateWeapons.selected.length > 1 && newSpecialSkills.appropriateWeapons.selected.includes(action.payload.skillPath)) {
		newSpecialSkills.appropriateWeapons.selected = newSpecialSkills.appropriateWeapons.selected.filter(v => v !== action.payload.skillPath);
	}
	else {
		newSpecialSkills.appropriateWeapons.selected.push(action.payload.skillPath);
	}

	newSpecialSkills.appropriateWeapons.mandatory =
		(newSpecialSkills.appropriateWeapons.selected.includes(newSpecialSkills.appropriateWeapons.mandatory))
			? newSpecialSkills.appropriateWeapons.mandatory
			: newSpecialSkills.appropriateWeapons.selected[0];

	const lifepaths = GetLifepathsFromPaths(state.lifepathPaths);
	const newTotals: LifepathTotals = state.lifepathPaths.length > 0
		? CalculateLifepathTotals(lifepaths, state.specialLifepaths, newSpecialSkills, state.totals.skills.generalList, state.totals.traits.generalList)
		: GetEmptyTotals();

	const newSpendings: CharacterSpendings = {
		...state.spendings,
		skills: RefreshSkillsList(newTotals, state.spendings).skills,
		attributes: RefreshAttributesList(newTotals, state.spendings).attributes
	};

	return {
		...state,
		totals: newTotals,
		spendings: newSpendings,
		specialSkills: newSpecialSkills
	};
}

export function SelectMandatoryAppropriateWeapon(state: CharacterBurnerState, action: SelectMandApprWeapon) {
	const newSpecialSkills = JSON.parse(JSON.stringify(state.specialSkills)) as SpecialSkills;
	newSpecialSkills.appropriateWeapons.mandatory =
		(newSpecialSkills.appropriateWeapons.selected.includes(action.payload.skillPath))
			? action.payload.skillPath
			: newSpecialSkills.appropriateWeapons.selected[0];

	const lifepaths = GetLifepathsFromPaths(state.lifepathPaths);
	const newTotals: LifepathTotals = state.lifepathPaths.length > 0
		? CalculateLifepathTotals(lifepaths, state.specialLifepaths, newSpecialSkills, state.totals.skills.generalList, state.totals.traits.generalList)
		: GetEmptyTotals();

	const newSpendings: CharacterSpendings = {
		...state.spendings,
		skills: RefreshSkillsList(newTotals, state.spendings).skills,
		attributes: RefreshAttributesList(newTotals, state.spendings).attributes
	};

	return {
		...state,
		totals: newTotals,
		spendings: newSpendings,
		specialSkills: newSpecialSkills
	};
}

export function SelectJavelinOrBow(state: CharacterBurnerState, action: SelectJavelinOrBow) {
	const newSpecialSkills = JSON.parse(JSON.stringify(state.specialSkills)) as SpecialSkills;
	newSpecialSkills.javelinOrBow = action.payload.skillPath;

	const lifepaths = GetLifepathsFromPaths(state.lifepathPaths);
	const newTotals: LifepathTotals = state.lifepathPaths.length > 0
		? CalculateLifepathTotals(lifepaths, state.specialLifepaths, newSpecialSkills, state.totals.skills.generalList, state.totals.traits.generalList)
		: GetEmptyTotals();

	const newSpendings: CharacterSpendings = {
		...state.spendings,
		skills: RefreshSkillsList(newTotals, state.spendings).skills,
		attributes: RefreshAttributesList(newTotals, state.spendings).attributes
	};

	return {
		...state,
		totals: newTotals,
		spendings: newSpendings,
		specialSkills: newSpecialSkills
	};
}

export function SelectAnySmith(state: CharacterBurnerState, action: SelectAnySmith) {
	const newSpecialSkills = JSON.parse(JSON.stringify(state.specialSkills)) as SpecialSkills;
	if (newSpecialSkills.anySmith.includes(action.payload.skillPath)) {
		newSpecialSkills.anySmith = newSpecialSkills.anySmith.filter(v => v !== action.payload.skillPath);
	}
	else {
		newSpecialSkills.anySmith.push(action.payload.skillPath);
	}

	const lifepaths = GetLifepathsFromPaths(state.lifepathPaths);
	const newTotals: LifepathTotals = state.lifepathPaths.length > 0
		? CalculateLifepathTotals(lifepaths, state.specialLifepaths, newSpecialSkills, state.totals.skills.generalList, state.totals.traits.generalList)
		: GetEmptyTotals();

	const newSpendings: CharacterSpendings = {
		...state.spendings,
		skills: RefreshSkillsList(newTotals, state.spendings).skills,
		attributes: RefreshAttributesList(newTotals, state.spendings).attributes
	};

	return {
		...state,
		totals: newTotals,
		spendings: newSpendings,
		specialSkills: newSpecialSkills
	};
}
