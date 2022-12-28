interface LifepathTotals {
	years: {
		points: number;
		extensions: string[];
	};
	resources: {
		points: number;
		extensions: string[];
	};
	stats: {
		fromAge: [mentalPoints: number, physicalPoints: number];
		fromLifepaths: {
			mentalPoints: number;
			physicalPoints: number;
			eitherPoints: number;
		};
	};
	skills: {
		generalPoints: {
			points: number;
			extensions: string[];
		};
		lifepathPoints: {
			points: number;
			extensions: string[];
		};
		mandatoryList: string[];
		lifepathList: string[];
		generalList: string[];
	};
	traits: {
		points: number;
		commonList: string[];
		mandatoryList: string[];
		lifepathList: string[];
		generalList: string[];
	};
}

// ACTIONS
interface ChangeCharacterStock { type: "CHANGE_CB_STOCK"; payload: { stock: StocksList; }; }
interface ChangeCharacterConcept { type: "CHANGE_CB_CONCEPT"; payload: { concept: string; }; }
interface ChangeCharacterName { type: "CHANGE_CB_NAME"; payload: { name: string; }; }

interface ChangeBelief { type: "CHANGE_CB_BELIEF"; payload: { index: number; belief: string; }; }
interface ChangeInstinct { type: "CHANGE_CB_INSTINCT"; payload: { index: number; instinct: string; }; }

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
interface SetHuntingGround { type: "SET_CB_HUNTING_GROUND"; payload: { huntingGround: HuntingGroundsList; }; }
interface ModifySpecialLifepathValue { type: "MODIFY_CB_SPECIAL_LIFEPATH_VALUE"; payload: { advisorToTheCourtYears: number; } | { princeOfTheBloodYears: number; } | { bondsmanOwnerLifepathPath: LifepathPath; }; }

type CharacterBurnerActions =
	ChangeCharacterStock | ChangeCharacterConcept | ChangeCharacterName |
	ChangeBelief | ChangeInstinct |
	AddLifepath | RemoveLifepath |
	ChangeStatShade | ChangeStatExponent |
	ChangeAttributeShade |
	OpenSkill | ChangeSkillAdvancement | AddSkill | RemoveSkill |
	OpenTrait | AddTrait | RemoveTrait |
	SwitchQuestionAnswer |
	SelectApprWeapon | SelectMandApprWeapon | SelectJavelinOrBow | SelectAnySmith |
	AddResource | RemoveResource |
	AddBrutalLifeTrait | SetHuntingGround | ModifySpecialLifepathValue;

// STATE
interface StatSpending {
	shade: number;
	exponent: number;
}

interface SkillSpending {
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

type SpendingForStat = StrictUnion<MentalPoolSpending | PhysicalPoolSpending>;

interface SpendingForAttribute {
	shadeShifted: 0 | 5 | 10;
}

interface SpendingForSkill {
	general: { open: 0 | 1 | 2; advance: number; };
	lifepath: { open: 0 | 1 | 2; advance: number; };
}

interface SpendingForTrait {
	open: number;
}

interface SpendingForResource {
	name: string;
	type: "Magical" | "Gear" | "Property" | "Relationship" | "Affiliation" | "Reputation";
	cost: number;
	modifiers: string[];
	description: string;
}

interface CharacterSpendings {
	stats: { [key in StatsList]: SpendingForStat; };
	attributes: { [key: string]: SpendingForAttribute; };
	skills: { [key: string]: SpendingForSkill; };
	traits: { [key: string]: SpendingForTrait; };
	resources: { [key: string]: SpendingForResource; };
}

type CharacterQuestions = {
	[key in AttributeQuestionsKeys]?: boolean;
};

interface SpecialLifepaths {
	advisorToTheCourt: { years: number; };
	bondsman: { ownerLifepathPath: LifepathPath; };
	princeOfTheBlood: { years: number; };
}

interface SpecialSkills {
	appropriateWeapons: { selected: SkillPath[]; mandatory: SkillPath; };
	javelinOrBow: SkillPath;
	anySmith: SkillPath[];
}

interface CharacterStockSpecific {
	brutalLife: {
		traits: (TraitPath | undefined)[];
	};
	territory: {
		huntingGround: undefined | HuntingGroundsList;
	};
}

interface CharacterLimits {
	beliefs: number;
	instincts: number;
	stats: { [key in StatsList]: { min: number, max: number; }; };
	attributes: number;
}

interface CharacterBurnerState {
	stock: StocksList;
	concept: string;
	name: string;
	beliefs: [string, string, string, string];
	instincts: [string, string, string, string];
	limits: CharacterLimits;
	lifepathPaths: LifepathPath[];
	specialLifepaths: SpecialLifepaths;
	specialSkills: SpecialSkills;
	totals: LifepathTotals;
	spendings: CharacterSpendings;
	questions: CharacterQuestions;
	stockSpecific: CharacterStockSpecific;
}
