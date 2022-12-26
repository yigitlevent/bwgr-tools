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
			restriction: "ONLY➞Roden",
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
			description: "Preaching relies upon religious doctrine, real-life anecdotes and folk wisdom.",
			magical: false,
			name: "Preaching",
			noList: false,
			restriction: "ONLY➞Roden",
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
