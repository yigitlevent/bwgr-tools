import { Resource } from "./_resources";


export const Relationship: Resource = {
	name: "Relationship",
	allowed: ["bwgr"],
	type: "Relationship",
	cost: [
		["A relationship with a character who is considered powerful and who plays a large role in the game setting", 15],
		["A relationship with a character who is considered significant or important to the game setting", 10],
		["A relationship with a character who plays a minor role in the setting or situation", 5]
	],
	modifiers: [
		["Immediate family", -2],
		["Other family", -1],
		["Romantic", -2],
		["Forbidden", -1],
		["Hateful", -2]
	]
};

export const Reputation: Resource = {
	name: "Reputation",
	allowed: ["bwgr"],
	type: "Reputation",
	cost: [
		["1D: Local or minor reputation", 7],
		["2D: Regional or notable reputation", 25],
		["3D: National or major reputation", 45]
	]
};

export const Affiliation: Resource = {
	name: "Affiliation",
	allowed: ["bwgr"],
	type: "Affiliation",
	cost: [
		["1D: A small, local or specialized group", 10],
		["2D: A large, regional or expansive group", 25],
		["3D: A national, powerful or ruling group", 50]
	]
};

export const OrcAffiliation: Resource = {
	name: "Clans and Warbands",
	allowed: ["bwgr"],
	type: "Affiliation",
	description: "Orcs frequently gather together in groups, warbands, clans and hordes. Relationships in the group/clan are purchased as normal. Additional characters and functionaries can be generated using the Circles rules in play. Orc commanders are often unaware of who precisely is working under them. It's usually a nest of rabble, a few bitter enemies and one or two die hard heavies. The exact nature of who's who is up to the Circles tests. The character's own position in the warband/horde is dependent on his reputation. Use the standard rules described in Step 8. Spending Resource Points to generate this.",
	cost: [
		["1D: A typical/minor clan", 10],
		["2D: An important or powerful clan or horde", 25]
	]
};

export const PackAffiliation: Resource = {
	name: "Pack Affiliation",
	allowed: ["bwc"],
	type: "Affiliation",
	cost: [
		["1D: Wild, 3-5 wolves", 5],
		["1D: Legion, 4-6 wolves", 7],
		["1D: Spirit, 2-4 wolves", 15],
		["1D: Ghost, 2-3 wolves", 20]
	]
};
