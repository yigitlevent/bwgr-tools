import { AttributeQuestionsKeys } from "../../data/attributes";
import { ModifyAttributeShadeSpending, RefreshAttributesList } from "../../utils/characterAttributeUtils";
import { RefreshQuestionsList, SwitchAnswer } from "../../utils/characterQuestionUtils";
import { TryOpenSkill, RefreshSkillList, ModifySkillExponentSpending } from "../../utils/characterSkillUtils";
import { ModifyStatExponentSpending, ModifyStatShadeSpending } from "../../utils/characterStatUtils";
import { RefreshTraitList, TryOpenTrait } from "../../utils/characterTraitUtils";
import { CalculateLifepathTotals, EmptyTotals, LifepathTotals } from "../../utils/lifepathTotals";
import { GetLifepathsFromPaths } from "../../utils/pathFinder";


interface ChangeCharacterStock { type: "CHANGE_CB_STOCK"; payload: { stock: StocksList; }; }
interface ChangeCharacterConcept { type: "CHANGE_CB_CONCEPT"; payload: { concept: string; }; }

interface AddLifepath { type: "ADD_CB_LIFEPATH"; payload: { lifepathPath: string; }; }
interface RemoveLifepath { type: "REMOVE_CB_LIFEPATH"; }

interface ChangeStatShade { type: "CHANGE_CB_STAT_SHADE"; payload: { statName: StatsList; }; }
interface ChangeStatExponent { type: "CHANGE_CB_STAT_EXPONENT"; payload: { statName: StatsList; change: 1 | -1; }; }

interface ChangeAttributeShade { type: "CHANGE_CB_ATTRIBUTE_SHADE"; payload: { attributeName: AttributesList; change: 5 | -5; }; }

interface OpenSkill { type: "OPEN_CB_SKILL"; payload: { skillName: string; open: boolean; isLifepath: boolean; }; }
interface ChangeSkillAdvancement { type: "CHANGE_CB_SKILL_EXPONENT"; payload: { skillName: string; change: 1 | -1; isLifepath: boolean; }; }

interface OpenTrait { type: "OPEN_CB_TRAIT"; payload: { traitName: string; open: boolean; isLifepath: boolean; }; }

interface SwitchAnswer { type: "SWITCH_CB_ANSWER"; payload: { questionKey: AttributeQuestionsKeys; }; }

export type CharacterBurnerActions =
	ChangeCharacterStock | ChangeCharacterConcept |
	AddLifepath | RemoveLifepath |
	ChangeStatShade | ChangeStatExponent |
	ChangeAttributeShade |
	OpenSkill | ChangeSkillAdvancement |
	OpenTrait |
	SwitchAnswer;

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

export interface CharacterSpendings {
	stats: { [key in StatsList]: SpendingForStat; };
	attributes: { [key: string]: SpendingForAttribute; };
	skills: { [key: string]: SpendingForSkill; };
	traits: { [key: string]: SpendingForTrait; };
}

export type CharacterQuestions = {
	[key in AttributeQuestionsKeys]?: boolean;
};

export interface CharacterBurnerState {
	stock: StocksList;
	concept: string;
	lifepathPaths: string[];
	totals: LifepathTotals;
	spendings: CharacterSpendings;
	questions: CharacterQuestions;
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
	traits: {}
};

const INITIAL: CharacterBurnerState = {
	stock: "Dwarf",
	concept: "",
	lifepathPaths: [],
	totals: EmptyTotals,
	spendings: EmptySpendings,
	questions: {}
};

function GetEmptyTotals(): LifepathTotals { return JSON.parse(JSON.stringify(EmptyTotals)); }
function GetSpending(state: CharacterBurnerState): CharacterSpendings { return JSON.parse(JSON.stringify(state.spendings)); }
function GetEmptySpending(): CharacterSpendings { return JSON.parse(JSON.stringify(EmptySpendings)); }
function GetQuestions(state: CharacterBurnerState): CharacterQuestions { return JSON.parse(JSON.stringify(state.questions)); }

export const CharacterBurnerReducer = (state = INITIAL, action: CharacterBurnerActions): CharacterBurnerState => {
	switch (action.type) {
		case "CHANGE_CB_STOCK":
			const newStock = action.payload.stock;
			const stockTotals: LifepathTotals = GetEmptyTotals();
			const stockSpendings: CharacterSpendings = GetEmptySpending();
			return {
				...state,
				stock: newStock,
				lifepathPaths: [],
				totals: stockTotals,
				spendings: stockSpendings,
				questions: {}
			};

		case "CHANGE_CB_CONCEPT":
			return { ...state, concept: action.payload.concept };

		case "ADD_CB_LIFEPATH":
			const addedLifepaths = [...state.lifepathPaths];
			addedLifepaths.push(action.payload.lifepathPath);
			const lifepathAddedTotals: LifepathTotals = addedLifepaths.length > 0 ? CalculateLifepathTotals(GetLifepathsFromPaths(addedLifepaths)) : EmptyTotals;
			const newAddedSpendings: CharacterSpendings = {
				...state.spendings,
				skills: RefreshSkillList(lifepathAddedTotals, state.spendings).skills,
				traits: RefreshTraitList(lifepathAddedTotals, state.spendings).traits,
				attributes: RefreshAttributesList(lifepathAddedTotals, state.spendings).attributes
			};
			const addLifepathQuestions: CharacterQuestions = RefreshQuestionsList(lifepathAddedTotals, newAddedSpendings, GetQuestions(state));
			return {
				...state,
				lifepathPaths: addedLifepaths,
				totals: JSON.parse(JSON.stringify(lifepathAddedTotals)),
				spendings: JSON.parse(JSON.stringify(newAddedSpendings)),
				questions: JSON.parse(JSON.stringify(addLifepathQuestions))
			};

		case "REMOVE_CB_LIFEPATH":
			const removedLifepaths = [...state.lifepathPaths];
			removedLifepaths.pop();
			const lifepathRemovedTotals = removedLifepaths.length > 0 ? CalculateLifepathTotals(GetLifepathsFromPaths(removedLifepaths)) : EmptyTotals;
			const newRemovedSpendings: CharacterSpendings = {
				...state.spendings,
				skills: RefreshSkillList(lifepathRemovedTotals, state.spendings).skills,
				traits: RefreshTraitList(lifepathRemovedTotals, state.spendings).traits,
				attributes: RefreshAttributesList(lifepathRemovedTotals, state.spendings).attributes
			};
			const removeLifepathQuestions: CharacterQuestions = RefreshQuestionsList(lifepathRemovedTotals, newRemovedSpendings, GetQuestions(state));
			return {
				...state,
				lifepathPaths: removedLifepaths,
				totals: JSON.parse(JSON.stringify(lifepathRemovedTotals)),
				spendings: JSON.parse(JSON.stringify(newRemovedSpendings)),
				questions: JSON.parse(JSON.stringify(removeLifepathQuestions))
			};

		case "CHANGE_CB_STAT_SHADE":
			const spendingStatShade = GetSpending(state);
			spendingStatShade.stats[action.payload.statName] = ModifyStatShadeSpending(action.payload.statName, spendingStatShade, state.totals);
			return {
				...state,
				spendings: { ...spendingStatShade }
			};

		case "CHANGE_CB_STAT_EXPONENT":
			const spendingStatExp = GetSpending(state);
			spendingStatExp.stats[action.payload.statName] = ModifyStatExponentSpending(action.payload.statName, spendingStatExp, state.totals, action.payload.change);
			return {
				...state,
				spendings: { ...spendingStatExp }
			};

		case "CHANGE_CB_ATTRIBUTE_SHADE":
			const spendingAttributeShade = GetSpending(state);
			spendingAttributeShade.attributes[action.payload.attributeName] = ModifyAttributeShadeSpending(action.payload.attributeName, action.payload.change, state.stock, state.lifepathPaths, state.totals, spendingAttributeShade, state.questions);
			return {
				...state,
				spendings: { ...spendingAttributeShade }
			};

		case "OPEN_CB_SKILL":
			const spendingSkillOpen = GetSpending(state);
			spendingSkillOpen.skills[action.payload.skillName] = TryOpenSkill(action.payload.skillName, state.totals, spendingSkillOpen, action.payload.open, action.payload.isLifepath);
			return {
				...state,
				spendings: { ...spendingSkillOpen }
			};

		case "CHANGE_CB_SKILL_EXPONENT":
			const spendingSkillExp = GetSpending(state);
			spendingSkillExp.skills[action.payload.skillName] = ModifySkillExponentSpending(action.payload.skillName, spendingSkillExp, state.totals, action.payload.change, action.payload.isLifepath);
			return {
				...state,
				spendings: { ...spendingSkillExp }
			};

		case "OPEN_CB_TRAIT":
			const spendingTraitOpen = GetSpending(state);
			spendingTraitOpen.traits[action.payload.traitName] = TryOpenTrait(action.payload.traitName, state.totals, spendingTraitOpen, action.payload.open, action.payload.isLifepath);
			const openTraitQuestions: CharacterQuestions = RefreshQuestionsList(state.totals, spendingTraitOpen, GetQuestions(state));
			return {
				...state,
				spendings: {
					...spendingTraitOpen,
					traits: spendingTraitOpen.traits,
					attributes: RefreshAttributesList(state.totals, spendingTraitOpen).attributes
				},
				questions: JSON.parse(JSON.stringify(openTraitQuestions))
			};

		case "SWITCH_CB_ANSWER":
			const newAnswers = SwitchAnswer(action.payload.questionKey, GetQuestions(state));
			return {
				...state,
				questions: JSON.parse(JSON.stringify(newAnswers))
			};

		default:
			return { ...state };
	}
};
