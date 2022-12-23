import { RefreshAttributesList } from "../../utils/characterAttributeUtils";
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

interface ChangeAttributeShade { type: "CHANGE_CB_ATTRIBUTE_SHADE"; payload: { attributeName: AttributesList; change: 1 | -1; }; }

interface OpenSkill { type: "OPEN_CB_SKILL"; payload: { skillName: string; open: boolean; isLifepath: boolean; }; }
interface ChangeSkillAdvancement { type: "CHANGE_CB_SKILL_EXPONENT"; payload: { skillName: string; change: 1 | -1; isLifepath: boolean; }; }

interface OpenTrait { type: "OPEN_CB_TRAIT"; payload: { traitName: string; open: boolean; isLifepath: boolean; }; }

export type CharacterBurnerActions =
	ChangeCharacterStock | ChangeCharacterConcept |
	AddLifepath | RemoveLifepath |
	ChangeStatShade | ChangeStatExponent |
	ChangeAttributeShade |
	OpenSkill | ChangeSkillAdvancement |
	OpenTrait;

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
	general: {
		open: 0 | 1 | 2;
		advance: number;
	};
	lifepath: {
		open: 0 | 1 | 2;
		advance: number;
	};
}

export interface SpendingForTrait {
	open: number;
}

export interface CharacterSpending {
	stats: { [key in StatsList]: SpendingForStat; };
	attributes: { [key: string]: SpendingForAttribute; };
	skills: { [key: string]: SpendingForSkill; };
	traits: { [key: string]: SpendingForTrait; };
}

export interface CharacterBurnerState {
	stock: StocksList;
	concept: string;
	lifepathPaths: string[];
	totals: LifepathTotals;
	spending: CharacterSpending;
}

const EmptySpending: CharacterSpending = {
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
	spending: EmptySpending
};

export const CharacterBurnerReducer = (state = INITIAL, action: CharacterBurnerActions): CharacterBurnerState => {
	switch (action.type) {
		case "CHANGE_CB_STOCK":
			return {
				...state,
				stock: action.payload.stock,
				lifepathPaths: [],
				totals: JSON.parse(JSON.stringify(EmptyTotals)),
				spending: JSON.parse(JSON.stringify((EmptySpending)))
			};

		case "CHANGE_CB_CONCEPT":
			return { ...state, concept: action.payload.concept };

		case "ADD_CB_LIFEPATH":
			const addedLifepaths = [...state.lifepathPaths];
			addedLifepaths.push(action.payload.lifepathPath);
			const lifepathAddedTotals: LifepathTotals = addedLifepaths.length > 0 ? CalculateLifepathTotals(GetLifepathsFromPaths(addedLifepaths)) : EmptyTotals;
			const newAddedSpendings: CharacterSpending = {
				...state.spending,
				skills: RefreshSkillList(lifepathAddedTotals, state.spending).skills,
				traits: RefreshTraitList(lifepathAddedTotals, state.spending).traits,
				attributes: RefreshAttributesList(state.spending).attributes
			};
			return {
				...state,
				lifepathPaths: addedLifepaths,
				totals: JSON.parse(JSON.stringify(lifepathAddedTotals)),
				spending: JSON.parse(JSON.stringify(newAddedSpendings))
			};

		case "REMOVE_CB_LIFEPATH":
			const removedLifepaths = [...state.lifepathPaths];
			removedLifepaths.pop();
			const lifepathRemovedTotals = removedLifepaths.length > 0 ? CalculateLifepathTotals(GetLifepathsFromPaths(removedLifepaths)) : EmptyTotals;
			const newRemovedSpendings: CharacterSpending = {
				...state.spending,
				skills: RefreshSkillList(lifepathRemovedTotals, state.spending).skills,
				traits: RefreshTraitList(lifepathRemovedTotals, state.spending).traits,
				attributes: RefreshAttributesList(state.spending).attributes
			};
			return {
				...state,
				lifepathPaths: removedLifepaths,
				totals: JSON.parse(JSON.stringify(lifepathRemovedTotals)),
				spending: JSON.parse(JSON.stringify(newRemovedSpendings))
			};

		case "CHANGE_CB_STAT_SHADE":
			const spendingStatShade = JSON.parse(JSON.stringify(state.spending)) as CharacterSpending;
			spendingStatShade.stats[action.payload.statName] = ModifyStatShadeSpending(action.payload.statName, spendingStatShade, state.totals);
			return { ...state, spending: { ...spendingStatShade } };

		case "CHANGE_CB_STAT_EXPONENT":
			const spendingStatExp = JSON.parse(JSON.stringify(state.spending)) as CharacterSpending;
			spendingStatExp.stats[action.payload.statName] = ModifyStatExponentSpending(action.payload.statName, spendingStatExp, state.totals, action.payload.change);
			return { ...state, spending: { ...spendingStatExp } };

		case "CHANGE_CB_ATTRIBUTE_SHADE":
			return state;

		case "OPEN_CB_SKILL":
			const spendingSkillOpen = TryOpenSkill(action.payload.skillName, state.totals, JSON.parse(JSON.stringify(state.spending)), action.payload.open, action.payload.isLifepath);
			return { ...state, spending: { ...spendingSkillOpen } };

		case "CHANGE_CB_SKILL_EXPONENT":
			const spendingSkillExp = JSON.parse(JSON.stringify(state.spending)) as CharacterSpending;
			spendingSkillExp.skills[action.payload.skillName] = ModifySkillExponentSpending(action.payload.skillName, spendingSkillExp, state.totals, action.payload.change, action.payload.isLifepath);
			return { ...state, spending: { ...spendingSkillExp } };

		case "OPEN_CB_TRAIT":
			const spendingTraitOpen = TryOpenTrait(action.payload.traitName, state.totals, JSON.parse(JSON.stringify(state.spending)) as CharacterSpending, action.payload.open, action.payload.isLifepath);
			return {
				...state,
				spending: {
					...spendingTraitOpen,
					traits: spendingTraitOpen.traits,
					attributes: RefreshAttributesList(spendingTraitOpen).attributes
				}
			};

		default:
			return { ...state };
	}
};
