import { ResourceStock } from "./_resources";
import { Relationship, Reputation, PackAffiliation } from "./_social";
import { DireHauntSpells, SpiritBindingDomainBindingLevels, SpiritBindingSpiritMarkLevels } from "./_magical";


export const GreatWolf: ResourceStock = {
	name: "Great Wolf",
	allowed: ["bwc"],
	resources: [
		Relationship,
		Reputation,
		PackAffiliation,
		{
			name: "Wolf Barding",
			allowed: ["bwc"],
			type: "Gear",
			cost: [
				["Leather chanfron (Head and Face; 1D)", 3],
				["Metal chanfron (Head and Face; 2D)", 15],
				["Stiff leather collar (Neck; 1D)", 2],
				["Reinforced leather body armor (Breast, Body, Rump; 2D)", 6],
				["Reinforced leather body armor, Spiked (Breast, Body, Rump; 2D)", 8],
				["Light mail body armor (Breast, Body, Rump; 3D)", 24],
				["Light mail body armor, Spiked (Breast, Body, Rump; 3D)", 30],
				["Leather greaves and cuissarts (Fore and Hind legs; 1D)", 2],
				["Leather greaves and cuissarts, Blades (Fore and Hind legs; 1D)", 4],
				["Metal greaves and cuissarts (Fore and Hind legs; 2D)", 15],
				["Metal greaves and cuissarts, Blades (Fore and Hind legs; 2D)", 20]
			]
		},
		...DireHauntSpells,
		...SpiritBindingDomainBindingLevels,
		...SpiritBindingSpiritMarkLevels
	]
};
