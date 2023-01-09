

export interface CoreRuleset {
	id: CoreRulesetId;
	name: string;
	isOffical: boolean;
	expansions: ExpansionRulesetId[];
}

export interface ExpansionRuleset {
	id: ExpansionRulesetId;
	name: string;
	isOffical: boolean;
	hasSkills?: boolean;
	hasTraits?: boolean;
	hasLifepaths?: boolean;
	hasResources?: boolean;
	hasMechanics?: boolean;
}

export const CoreRulesets: CoreRuleset[] = [
	{
		id: "bwgr",
		name: "Burning Wheel Gold Revised",
		isOffical: true,
		expansions: ["bwc", "antv1", "amw"]
	},
	{
		id: "bs",
		name: "Burning Sun",
		isOffical: false,
		expansions: ["amw"]
	}
];

export const ExpansionRulesets: ExpansionRuleset[] = [
	{
		id: "bwc",
		name: "Burning Wheel Codex",
		isOffical: true,
		hasSkills: true,
		hasTraits: true,
		hasLifepaths: true,
		hasResources: true,
		hasMechanics: true
	},
	{
		id: "antv1",
		name: "Burning Wheel Anthology Volume 1",
		isOffical: true,
		hasMechanics: true
	},
	{
		id: "amw",
		name: "Alternative Magic Wheel",
		isOffical: false,
		hasMechanics: true
	}
];
