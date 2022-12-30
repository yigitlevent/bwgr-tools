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

interface StatRemaining {
	eitherPool: number;
	mentalPool: number;
	physicalPool: number;
}

interface SkillRemaining {
	generalPoints: number;
	lifepathPoints: number;
}

interface TraitRemaining {
	traitPoints: number;
}

interface ResourceRemaining {
	resourcePoints: number;
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

	checkHasLifepath: (lifepathPath: LifepathPath) => boolean;
	checkHasSkill: (skillPath: SkillPath) => boolean;
	checkHasTrait: (traitPath: TraitPath) => boolean;

	clearLifepathPaths: () => void;
	clearTotals: () => void;
	clearSpendings: () => void;
	clearQuestions: () => void;

	calculateTotals: (chosenLifepaths: Lifepath[]) => LifepathTotals;
	checkIfTraitInCommonOrOpen: (questionTrait: string) => boolean;

	refreshTotals: (generalSkills: string[], generalTraits: string[]) => void;
	refreshStockLimits: () => void;
	refreshSkillSpendings: () => void;
	refreshTraitSpendings: () => void;
	refreshAttributeSpendings: () => void;
	refreshQuestions: () => void;
	resetStockSpecifics: () => void;

	getMentalPointsTotal: () => number;
	getPhysicalPointsTotal: () => number;
	getStatShade: (statName: StatsList) => ShadesListLimited;
	getStatExponent: (statName: StatsList) => number;
	getStatRemainings: () => StatRemaining;
	getAttributeShade: (attributeName: AttributesList) => ShadesList;
	getAttributeExponent: (attributeName: AttributesList) => number;
	getSkillOpenness: (skillName: SkillPath) => boolean;
	getSkillShade: (skillName: SkillPath) => ShadesList;
	getSkillExponent: (skillName: SkillPath) => number;
	getSkillRemainings: () => SkillRemaining;
	getTraitOpenness: (traitName: TraitPath) => boolean;
	getTraitRemainings: () => TraitRemaining;
	getResourceRemainings: () => ResourceRemaining;

	changeStock: (stock: StocksList) => void;
	changeConcept: (concept: string) => void;
	changeName: (name: string) => void;
	changeBelief: (index: number, belief: string) => void;
	changeInstinct: (index: number, instinct: string) => void;

	addLifepath: (lifepathPath: LifepathPath) => void;
	removeLifepath: () => void;

	changeStatShade: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, statName: StatsList) => void;
	changeStatExponent: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, statName: StatsList, change: 1 | -1) => void;

	changeAttributeShade: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, attributeName: AttributesList, change: 5 | -5) => void;

	openSkill: (skillPath: SkillPath, toOpen: boolean, isLifepath: boolean) => void;
	changeSkillExponent: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, skillPath: SkillPath, change: 1 | -1, isLifepath: boolean) => void;
	addSkill: (skillPath: SkillPath) => void;
	removeSkill: (skillPath: SkillPath) => void;

	openTrait: (traitPath: TraitPath, toOpen: boolean, isLifepath: boolean) => void;
	addTrait: (traitPath: TraitPath) => void;
	removeTrait: (traitPath: TraitPath) => void;

	switchAnswer: (questionKey: AttributeQuestionsKeys) => void;

	selectAppropriateWeapon: (skillPath: SkillPath) => void;
	selectMandatoryAppropriateWeapon: (skillPath: SkillPath) => void;
	selectJavelinOrBow: (skillPath: SkillPath) => void;
	selectAnySmith: (skillPath: SkillPath) => void;

	addResource: (resource: SpendingForResource) => void;
	removeResource: (guid: string) => void;
	editResourceDescription: (guid: string, description: string) => void;

	addBrutalLifeTrait: (traitPath: TraitPath | undefined) => void;
	setHuntingGround: (huntingGround: HuntingGroundsList) => void;

	modifySpecialLifepathValue: (value: { advisorToTheCourtYears: number; } | { princeOfTheBloodYears: number; } | { bondsmanOwnerLifepathPath: LifepathPath; }) => void;
}
