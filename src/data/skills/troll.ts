import { SkillCategory } from "./_skills";


export const TrollSpecial: SkillCategory = {
	allowed: ["bwc", "msc"],
	name: "Troll Special",
	skills: [
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Bridge-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Using this skill, a Troll may take on the appearance of his surroundings and remain hidden. The Dread Stone love to build false stone walls around themselves and they wait for an unsuspecting passerby to wander into reach.<br>Using this skill effectively requires that the Troll remain motionless while camouflaged. Test this skill as a Stealthy skill.<br>Camouflage is used in versus tests against Observation.",
			magical: false,
			name: "Camouflage",
			noList: false,
			restriction: "Trolls only",
			root: ["Perception", "Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Bull Trolls sometimes learn that it is more fruitful to let their victims live to extort food and shiny bits from them over the years. This way they can get more than a single meal out of them!<br>Obstacles are equal to the Will of the victim.",
			magical: false,
			name: "Extortion",
			noList: false,
			restriction: "Trolls only",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Mine-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		}
	]
};
