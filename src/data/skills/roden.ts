import { SkillCategory } from "./_skills";


export const RodenSpecial: SkillCategory = {
	allowed: ["bwc", "msc"],
	name: "Roden Special",
	skills: [
		{
			allowed: ["bwc", "msc"],
			description: "The Arsonist learns how to mix ingredients to create incendiary bombs. The Mark result damage is listed with each type. If the explosion hits a character, roll the die of fate to determine IMS (like a spell). This skill does not cover the distribution of such bombs. That would come from Agility, Throwing, Artillery or simply inconspicuous placement. When igniting such a device, roll the die of fate. On a 1, the bomb malfunctions. Roll again immediately: Odd, it detonates; even, its a dud.",
			magical: false,
			name: "Firebombs",
			noList: false,
			restriction: "Roden only",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwc", "msc"],
			description: "A garrote is a two- to three-foot length of cord strung between two small wooden handles or leather loops. Roden use it to throttle victims to death. To use this skill, the would-be-muyrderer must attack from stealth or surprise (or against a victim already in a Lock. Thet Garrote versus Power or Agility (victim's choice, but at double obstacle). If the attacked lands a 2D or greater lock, the victim loses 1D Forte every exchange thereafter. If Forte reaches zero, the victim falls unconscious.",
			magical: false,
			name: "Garrote",
			noList: false,
			restriction: "Roden only",
			root: ["Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Preaching relies upon religious doctrine, real-life anecdotes and folk wisdom.",
			magical: false,
			name: "Preaching",
			noList: false,
			restriction: "Roden only",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		}
	]
};
