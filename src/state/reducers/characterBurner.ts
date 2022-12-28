import { EmptyTotals } from "../../utils/lifepathTotals";

import { EmptySpendings } from "./characterBurner/_common";
import { ChangeBelief, ChangeConcept, ChangeInstinct, ChangeName, ChangeStock } from "./characterBurner/basicActions";
import { AddLifepath, RemoveLifepath } from "./characterBurner/lifepathActions";
import { AddGeneralSkill, AddGeneralTrait, AddResource, ChangeAttributeShade, ChangeSkillExponent, ChangeStatExponent, ChangeStatShade, OpenSkill, OpenTrait, RemoveGeneralSkill, RemoveGeneralTrait, RemoveResource } from "./characterBurner/abilityActions";
import { SelectAnySmith, SelectAppropriateWeapon, SelectJavelinOrBow, SelectMandatoryAppropriateWeapon } from "./characterBurner/specialSkillActions";
import { AddBrutalLifeTrait, ModifySpecialLifepathValue, SetHuntingGround, SwitchQuestionAnswer } from "./characterBurner/specialActions";


const INITIAL: CharacterBurnerState = {
	stock: "Dwarf",
	concept: "",
	name: "",
	beliefs: ["", "", "", ""],
	instincts: ["", "", "", ""],
	limits: {
		beliefs: 3,
		instincts: 3,
		stats: {
			Will: { min: 1, max: 8 },
			Perception: { min: 1, max: 8 },
			Power: { min: 1, max: 8 },
			Agility: { min: 1, max: 8 },
			Forte: { min: 1, max: 8 },
			Speed: { min: 1, max: 8 }
		},
		attributes: 9
	},
	lifepathPaths: [],
	specialLifepaths: {
		advisorToTheCourt: { years: 1 },
		bondsman: { ownerLifepathPath: "Human➞Noble➞Lord" },
		princeOfTheBlood: { years: 2 }
	},
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
		},
		territory: {
			huntingGround: undefined
		}
	}
};

export const CharacterBurnerReducer = (state = INITIAL, action: CharacterBurnerActions): CharacterBurnerState => {
	if (action.type === "CHANGE_CB_STOCK") ChangeStock(state, action);
	else if (action.type === "CHANGE_CB_CONCEPT") ChangeConcept(state, action);
	else if (action.type === "CHANGE_CB_NAME") ChangeName(state, action);
	else if (action.type === "CHANGE_CB_BELIEF") ChangeBelief(state, action);
	else if (action.type === "CHANGE_CB_INSTINCT") ChangeInstinct(state, action);
	else if (action.type === "ADD_CB_LIFEPATH") AddLifepath(state, action);
	else if (action.type === "REMOVE_CB_LIFEPATH") RemoveLifepath(state);
	else if (action.type === "CHANGE_CB_STAT_SHADE") ChangeStatShade(state, action);
	else if (action.type === "CHANGE_CB_STAT_EXPONENT") ChangeStatExponent(state, action);
	else if (action.type === "CHANGE_CB_ATTRIBUTE_SHADE") ChangeAttributeShade(state, action);
	else if (action.type === "OPEN_CB_SKILL") OpenSkill(state, action);
	else if (action.type === "CHANGE_CB_SKILL_EXPONENT") ChangeSkillExponent(state, action);
	else if (action.type === "OPEN_CB_TRAIT") OpenTrait(state, action);
	else if (action.type === "SWITCH_CB_ANSWER") SwitchQuestionAnswer(state, action);
	else if (action.type === "SELECT_CB_APPR_WEAPON") SelectAppropriateWeapon(state, action);
	else if (action.type === "SELECT_CB_MAND_APPR_WEAPON") SelectMandatoryAppropriateWeapon(state, action);
	else if (action.type === "SELECT_CB_JAVELIN_OR_BOW") SelectJavelinOrBow(state, action);
	else if (action.type === "SELECT_CB_ANY_SMITH") SelectAnySmith(state, action);
	else if (action.type === "ADD_CB_SKILL") AddGeneralSkill(state, action);
	else if (action.type === "REMOVE_CB_SKILL") RemoveGeneralSkill(state, action);
	else if (action.type === "ADD_CB_TRAIT") AddGeneralTrait(state, action);
	else if (action.type === "REMOVE_CB_TRAIT") RemoveGeneralTrait(state, action);
	else if (action.type === "ADD_CB_RESOURCE") AddResource(state, action);
	else if (action.type === "REMOVE_CB_RESOURCE") RemoveResource(state, action);
	else if (action.type === "ADD_CB_BRUTAL_LIFE_TRAIT") AddBrutalLifeTrait(state, action);
	else if (action.type === "SET_CB_HUNTING_GROUND") SetHuntingGround(state, action);
	else if (action.type === "MODIFY_CB_SPECIAL_LIFEPATH_VALUE") ModifySpecialLifepathValue(state, action);
	return { ...state };
};
