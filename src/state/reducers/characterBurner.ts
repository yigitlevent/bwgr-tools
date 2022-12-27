import { v4 as uuidv4 } from "uuid";

import { AttributeQuestionsKeys } from "../../data/attributes";
import { ModifyAttributeShadeSpending, RefreshAttributesList } from "../../utils/characterAttributeUtils";
import { RefreshQuestionsList, SwitchAnswer } from "../../utils/characterQuestionUtils";
import { TryOpenSkill, RefreshSkillsList, ModifySkillExponentSpending } from "../../utils/characterSkillUtils";
import { ModifyStatExponentSpending, ModifyStatShadeSpending } from "../../utils/characterStatUtils";
import { RefreshTraitsList, TryOpenTrait } from "../../utils/characterTraitUtils";
import { CalculateLifepathTotals, EmptyTotals, LifepathTotals } from "../../utils/lifepathTotals";
import { GetLifepathsFromPaths } from "../../utils/pathFinder";


interface ChangeCharacterStock { type: "CHANGE_CB_STOCK"; payload: { stock: StocksList; }; }
interface ChangeCharacterConcept { type: "CHANGE_CB_CONCEPT"; payload: { concept: string; }; }

interface AddLifepath { type: "ADD_CB_LIFEPATH"; payload: { lifepathPath: LifepathPath; }; }
interface RemoveLifepath { type: "REMOVE_CB_LIFEPATH"; }

interface ChangeStatShade { type: "CHANGE_CB_STAT_SHADE"; payload: { statName: StatsList; }; }
interface ChangeStatExponent { type: "CHANGE_CB_STAT_EXPONENT"; payload: { statName: StatsList; change: 1 | -1; }; }

interface ChangeAttributeShade { type: "CHANGE_CB_ATTRIBUTE_SHADE"; payload: { attributeName: AttributesList; change: 5 | -5; }; }

interface OpenSkill { type: "OPEN_CB_SKILL"; payload: { skillPath: string; open: boolean; isLifepath: boolean; }; }
interface ChangeSkillAdvancement { type: "CHANGE_CB_SKILL_EXPONENT"; payload: { skillPath: string; change: 1 | -1; isLifepath: boolean; }; }

interface OpenTrait { type: "OPEN_CB_TRAIT"; payload: { traitPath: string; open: boolean; isLifepath: boolean; }; }

interface SwitchQuestionAnswer { type: "SWITCH_CB_ANSWER"; payload: { questionKey: AttributeQuestionsKeys; }; }

interface SelectApprWeapon { type: "SELECT_CB_APPR_WEAPON"; payload: { skillPath: SkillPath; }; }
interface SelectMandApprWeapon { type: "SELECT_CB_MAND_APPR_WEAPON"; payload: { skillPath: SkillPath; }; }
interface SelectJavelinOrBow { type: "SELECT_CB_JAVELIN_OR_BOW"; payload: { skillPath: SkillPath; }; }
interface SelectAnySmith { type: "SELECT_CB_ANY_SMITH"; payload: { skillPath: SkillPath; }; }

interface AddTrait { type: "ADD_CB_TRAIT"; payload: { traitPath: TraitPath; }; }
interface RemoveTrait { type: "REMOVE_CB_TRAIT"; payload: { traitPath: TraitPath; }; }

interface AddSkill { type: "ADD_CB_SKILL"; payload: { skillPath: SkillPath; }; }
interface RemoveSkill { type: "REMOVE_CB_SKILL"; payload: { skillPath: SkillPath; }; }

interface AddResource { type: "ADD_CB_RESOURCE"; payload: { resource: SpendingForResource; }; }
interface RemoveResource { type: "REMOVE_CB_RESOURCE"; payload: { guid: string; }; }

interface AddBrutalLifeTrait { type: "ADD_CB_BRUTAL_LIFE_TRAIT"; payload: { traitPath: TraitPath | undefined; }; }

export type CharacterBurnerActions =
	ChangeCharacterStock | ChangeCharacterConcept |
	AddLifepath | RemoveLifepath |
	ChangeStatShade | ChangeStatExponent |
	ChangeAttributeShade |
	OpenSkill | ChangeSkillAdvancement | AddSkill | RemoveSkill |
	OpenTrait | AddTrait | RemoveTrait |
	SwitchQuestionAnswer |
	SelectApprWeapon | SelectMandApprWeapon | SelectJavelinOrBow | SelectAnySmith |
	AddResource | RemoveResource |
	AddBrutalLifeTrait;

export interface StatSpending {
	shade: number;
	exponent: number;
}

export interface SkillSpending {
	exponent: number;
}

interface MentalPoolSpending {
	mentalPool: StatSpending;
	eitherPool: StatSpending;
}

interface PhysicalPoolSpending {
	physicalPool: StatSpending;
	eitherPool: StatSpending;
}

export type SpendingForStat = StrictUnion<MentalPoolSpending | PhysicalPoolSpending>;

export interface SpendingForAttribute {
	shadeShifted: 0 | 5 | 10;
}

export interface SpendingForSkill {
	general: { open: 0 | 1 | 2; advance: number; };
	lifepath: { open: 0 | 1 | 2; advance: number; };
}

export interface SpendingForTrait {
	open: number;
}

export interface SpendingForResource {
	name: string;
	type: "Magical" | "Gear" | "Property" | "Relationship" | "Affiliation" | "Reputation";
	cost: number;
	modifiers: string[];
	description: string;
}

export interface CharacterSpendings {
	stats: { [key in StatsList]: SpendingForStat; };
	attributes: { [key: string]: SpendingForAttribute; };
	skills: { [key: string]: SpendingForSkill; };
	traits: { [key: string]: SpendingForTrait; };
	resources: { [key: string]: SpendingForResource; };
}

export type CharacterQuestions = {
	[key in AttributeQuestionsKeys]?: boolean;
};

export interface SpecialSkills {
	appropriateWeapons: { selected: SkillPath[]; mandatory: SkillPath; },
	javelinOrBow: SkillPath;
	anySmith: SkillPath[];
}

export interface CharacterStockSpecific {
	brutalLife: {
		traits: (TraitPath | undefined)[];
	};
}

export interface CharacterBurnerState {
	stock: StocksList;
	concept: string;
	lifepathPaths: LifepathPath[];
	specialSkills: SpecialSkills;
	totals: LifepathTotals;
	spendings: CharacterSpendings;
	questions: CharacterQuestions;
	stockSpecific: CharacterStockSpecific;
}

const EmptySpendings: CharacterSpendings = {
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

const INITIAL: CharacterBurnerState = {
	stock: "Dwarf",
	concept: "",
	lifepathPaths: [],
	specialSkills: {
		appropriateWeapons: { selected: ["Any General➞Sword"], mandatory: "Any General➞Sword" },
		javelinOrBow: "Any General➞Javelin",
		anySmith: ["Any General➞Blacksmith"]
	},
	totals: EmptyTotals,
	spendings: EmptySpendings,
	questions: {},
	stockSpecific: {
		brutalLife: {
			traits: []
		}
	}
};

function GetTotals(state: CharacterBurnerState): LifepathTotals { return JSON.parse(JSON.stringify(state.totals)); }
function GetEmptyTotals(): LifepathTotals { return JSON.parse(JSON.stringify(EmptyTotals)); }

function GetSpending(state: CharacterBurnerState): CharacterSpendings { return JSON.parse(JSON.stringify(state.spendings)); }
function GetEmptySpending(): CharacterSpendings { return JSON.parse(JSON.stringify(EmptySpendings)); }

function GetQuestions(state: CharacterBurnerState): CharacterQuestions { return JSON.parse(JSON.stringify(state.questions)); }

export const CharacterBurnerReducer = (state = INITIAL, action: CharacterBurnerActions): CharacterBurnerState => {
	if (action.type === "CHANGE_CB_STOCK") {
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
	else if (action.type === "CHANGE_CB_CONCEPT") {
		return { ...state, concept: action.payload.concept };
	}
	else if (action.type === "ADD_CB_LIFEPATH") {
		const lifepaths = [...state.lifepathPaths];
		lifepaths.push(action.payload.lifepathPath);
		const newTotals: LifepathTotals = lifepaths.length > 0 ? CalculateLifepathTotals(GetLifepathsFromPaths(lifepaths), state.specialSkills, state.totals.skills.generalList, state.totals.traits.generalList) : EmptyTotals;
		const newSpendings: CharacterSpendings = {
			...state.spendings,
			skills: RefreshSkillsList(newTotals, state.spendings).skills,
			traits: RefreshTraitsList(newTotals, state.spendings).traits,
			attributes: RefreshAttributesList(newTotals, state.spendings).attributes
		};
		const newQuestions: CharacterQuestions = RefreshQuestionsList(newTotals, newSpendings, GetQuestions(state));
		return {
			...state,
			lifepathPaths: lifepaths,
			totals: JSON.parse(JSON.stringify(newTotals)),
			spendings: JSON.parse(JSON.stringify(newSpendings)),
			questions: JSON.parse(JSON.stringify(newQuestions))
		};
	}
	else if (action.type === "REMOVE_CB_LIFEPATH") {
		const lifepaths = [...state.lifepathPaths];
		lifepaths.pop();
		const newTotals = lifepaths.length > 0 ? CalculateLifepathTotals(GetLifepathsFromPaths(lifepaths), state.specialSkills, state.totals.skills.generalList, state.totals.traits.generalList) : EmptyTotals;
		const newSpendings: CharacterSpendings = {
			...state.spendings,
			skills: RefreshSkillsList(newTotals, state.spendings).skills,
			traits: RefreshTraitsList(newTotals, state.spendings).traits,
			attributes: RefreshAttributesList(newTotals, state.spendings).attributes
		};
		const newQuestions: CharacterQuestions = RefreshQuestionsList(newTotals, newSpendings, GetQuestions(state));
		const newStockSpecific = JSON.parse(JSON.stringify(state.stockSpecific)) as CharacterStockSpecific;
		newStockSpecific.brutalLife.traits.pop();
		return {
			...state,
			lifepathPaths: lifepaths,
			totals: JSON.parse(JSON.stringify(newTotals)),
			spendings: JSON.parse(JSON.stringify(newSpendings)),
			questions: JSON.parse(JSON.stringify(newQuestions)),
			stockSpecific: newStockSpecific
		};
	}
	else if (action.type === "CHANGE_CB_STAT_SHADE") {
		const spending = GetSpending(state);
		spending.stats[action.payload.statName] = ModifyStatShadeSpending(action.payload.statName, spending, state.totals);
		return {
			...state,
			spendings: { ...spending }
		};
	}
	else if (action.type === "CHANGE_CB_STAT_EXPONENT") {
		const spending = GetSpending(state);
		spending.stats[action.payload.statName] = ModifyStatExponentSpending(action.payload.statName, spending, state.totals, action.payload.change);
		return {
			...state,
			spendings: { ...spending }
		};
	}
	else if (action.type === "CHANGE_CB_ATTRIBUTE_SHADE") {
		const spending = GetSpending(state);
		spending.attributes[action.payload.attributeName] = ModifyAttributeShadeSpending(action.payload.attributeName, action.payload.change, state.stock, state.lifepathPaths, state.totals, spending, state.questions);
		return {
			...state,
			spendings: { ...spending }
		};
	}
	else if (action.type === "OPEN_CB_SKILL") {
		const spending = GetSpending(state);
		spending.skills[action.payload.skillPath] = TryOpenSkill(action.payload.skillPath, state.totals, spending, action.payload.open, action.payload.isLifepath);
		return {
			...state,
			spendings: { ...spending }
		};
	}
	else if (action.type === "CHANGE_CB_SKILL_EXPONENT") {
		const spending = GetSpending(state);
		spending.skills[action.payload.skillPath] = ModifySkillExponentSpending(action.payload.skillPath, spending, state.totals, action.payload.change, action.payload.isLifepath);
		return {
			...state,
			spendings: { ...spending }
		};
	}
	else if (action.type === "OPEN_CB_TRAIT") {
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
	else if (action.type === "SWITCH_CB_ANSWER") {
		const newAnswers = SwitchAnswer(action.payload.questionKey, GetQuestions(state));
		return {
			...state,
			questions: JSON.parse(JSON.stringify(newAnswers))
		};
	}
	else if (action.type === "SELECT_CB_APPR_WEAPON") {
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
		const newTotals: LifepathTotals = state.lifepathPaths.length > 0 ? CalculateLifepathTotals(lifepaths, newSpecialSkills, state.totals.skills.generalList, state.totals.traits.generalList) : EmptyTotals;
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
	else if (action.type === "SELECT_CB_MAND_APPR_WEAPON") {
		const newSpecialSkills = JSON.parse(JSON.stringify(state.specialSkills)) as SpecialSkills;
		newSpecialSkills.appropriateWeapons.mandatory =
			(newSpecialSkills.appropriateWeapons.selected.includes(action.payload.skillPath))
				? action.payload.skillPath
				: newSpecialSkills.appropriateWeapons.selected[0];

		const lifepaths = GetLifepathsFromPaths(state.lifepathPaths);
		const newTotals: LifepathTotals = state.lifepathPaths.length > 0 ? CalculateLifepathTotals(lifepaths, newSpecialSkills, state.totals.skills.generalList, state.totals.traits.generalList) : EmptyTotals;
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
	else if (action.type === "SELECT_CB_JAVELIN_OR_BOW") {
		const newSpecialSkills = JSON.parse(JSON.stringify(state.specialSkills)) as SpecialSkills;
		newSpecialSkills.javelinOrBow = action.payload.skillPath;

		const lifepaths = GetLifepathsFromPaths(state.lifepathPaths);
		const newTotals: LifepathTotals = state.lifepathPaths.length > 0 ? CalculateLifepathTotals(lifepaths, newSpecialSkills, state.totals.skills.generalList, state.totals.traits.generalList) : EmptyTotals;
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
	else if (action.type === "SELECT_CB_ANY_SMITH") {
		const newSpecialSkills = JSON.parse(JSON.stringify(state.specialSkills)) as SpecialSkills;
		if (newSpecialSkills.anySmith.includes(action.payload.skillPath)) {
			newSpecialSkills.anySmith = newSpecialSkills.anySmith.filter(v => v !== action.payload.skillPath);
		}
		else {
			newSpecialSkills.anySmith.push(action.payload.skillPath);
		}

		const lifepaths = GetLifepathsFromPaths(state.lifepathPaths);
		const newTotals: LifepathTotals = state.lifepathPaths.length > 0 ? CalculateLifepathTotals(lifepaths, newSpecialSkills, state.totals.skills.generalList, state.totals.traits.generalList) : EmptyTotals;
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
	else if (action.type === "ADD_CB_TRAIT") {
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
	else if (action.type === "REMOVE_CB_TRAIT") {
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
	else if (action.type === "ADD_CB_SKILL") {
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
	else if (action.type === "REMOVE_CB_SKILL") {
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
	else if (action.type === "ADD_CB_RESOURCE") {
		const newSpendings = GetSpending(state);
		newSpendings.resources[uuidv4()] = action.payload.resource;
		return {
			...state,
			spendings: newSpendings
		};
	}
	else if (action.type === "REMOVE_CB_RESOURCE") {
		const newSpendings = GetSpending(state);
		delete newSpendings.resources[action.payload.guid];
		return {
			...state,
			spendings: newSpendings
		};
	}
	else if (action.type === "ADD_CB_BRUTAL_LIFE_TRAIT") {
		const newStockSpecific = JSON.parse(JSON.stringify(state.stockSpecific)) as CharacterStockSpecific;
		newStockSpecific.brutalLife.traits.push(action.payload.traitPath);
		return {
			...state,
			stockSpecific: newStockSpecific
		};
	}

	return { ...state };
};
