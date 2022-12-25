import { Stock } from "./_stocks";

export const Troll: Stock = {
	agePool: [
		{ max: 5, min: 0, m: 3, p: 11 },
		{ max: 10, min: 6, m: 4, p: 14 },
		{ max: 19, min: 13, m: 4, p: 17 },
		{ max: 27, min: 20, m: 4, p: 19 },
		{ max: 57, min: 28, m: 4, p: 20 },
		{ max: 80, min: 58, m: 4, p: 19 },
		{ max: 124, min: 81, m: 4, p: 18 },
		{ max: 213, min: 125, m: 5, p: 17 },
		{ max: 390, min: 214, m: 5, p: 16 },
		{ max: 712, min: 391, m: 6, p: 15 }
	],
	allowed: ["bwc", "msc"],
	hasSetting: true,
	hasSubsetting: false,
	name: "Troll",
	stride: 7,
	settings: {
		"Cavedweller": {
			allowed: ["bwc", "msc"],
			name: "Cavedweller",
			short: "Cave",
			stock: "Troll",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 2,
					leads: [
						"Troll➞Pit"
					],
					mentalPool: 0,
					name: "Born to Dark Caves",
					physicalPool: 0,
					requirements: {},
					resources: 2,
					setting: "Cavedweller",
					skillPool: 0,
					skills: [],
					stock: "Troll",
					traitPool: 2,
					traits: [],
					years: 5
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Troll➞Wild"
					],
					mentalPool: 0,
					name: "Dweller",
					physicalPool: 1,
					requirements: {},
					resources: 1,
					setting: "Cavedweller",
					skillPool: 2,
					skills: [
						"Any General➞Climbing",
						"Any Wise➞Rock-wise",
						"Any General➞Brawling"
					],
					stock: "Troll",
					traitPool: 2,
					traits: [],
					years: 4
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Troll➞Pit",
						"Troll➞Wild"
					],
					mentalPool: 0,
					name: "Mine Haunt",
					physicalPool: 0,
					requirements: {},
					resources: 1,
					setting: "Cavedweller",
					skillPool: 2,
					skills: [
						"Troll Special➞Mine-wise",
						"Any General➞Brawling"
					],
					stock: "Troll",
					traitPool: 1,
					traits: [],
					years: 12
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Troll➞Pit"
					],
					mentalPool: 1,
					name: "Dwarf Hunter",
					physicalPool: 1,
					requirements: {},
					resources: 3,
					setting: "Cavedweller",
					skillPool: 3,
					skills: [
						"Any Wise➞Dwarf-wise",
						"Any General➞Throwing"
					],
					stock: "Troll",
					traitPool: 1,
					traits: [
						"Troll Lifepath➞Stubborn"
					],
					years: 6
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Dread Stone",
					physicalPool: 2,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Troll➞Cavedweller➞Mine Haunt",
								"Troll➞Cavedweller➞Dwarf Hunter"
							]
						}
					},
					resources: 4,
					setting: "Cavedweller",
					skillPool: 3,
					skills: [
						"Troll Special➞Camouflage",
						"Any General➞Stealthy"
					],
					stock: "Troll",
					traitPool: 3,
					traits: [],
					years: 30
				}
			]
		},
		"Pit": {
			allowed: ["bwc", "msc"],
			name: "Pit",
			short: "Pit",
			stock: "Troll",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 1,
					leads: [
						"Troll➞Cavedweller"
					],
					mentalPool: 0,
					name: "Born to the Pit",
					physicalPool: 0,
					requirements: {},
					resources: 1,
					setting: "Pit",
					skillPool: 0,
					skills: [],
					stock: "Troll",
					traitPool: 2,
					traits: [
						"Troll Lifepath➞Vile Language"
					],
					years: 4
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Tortured",
					physicalPool: 0,
					requirements: {},
					resources: 0,
					setting: "Pit",
					skillPool: 1,
					skills: [],
					stock: "Troll",
					traitPool: 3,
					traits: [
						"Troll Lifepath➞Tasting the Lash",
						"Troll Lifepath➞Numb"
					],
					years: 3
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Ox",
					physicalPool: 1,
					requirements: {},
					resources: 1,
					setting: "Pit",
					skillPool: 2,
					skills: [
						"Any General➞Ditch Digging",
						"Any General➞Hauling",
						"Any General➞Mining"
					],
					stock: "Troll",
					traitPool: 1,
					traits: [
						"Troll Lifepath➞Back-Breaking Labor",
						"Troll Lifepath➞Tasting the Lash"
					],
					years: 9
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Troll➞Wild"
					],
					mentalPool: 0,
					name: "Battering Ram",
					physicalPool: 1,
					requirements: {},
					resources: 1,
					setting: "Pit",
					skillPool: 2,
					skills: [
						"Any General➞Brawling",
						"Any General➞Throwing"
					],
					stock: "Troll",
					traitPool: 1,
					traits: [
						"Troll Lifepath➞Hardened"
					],
					years: 6
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Troll➞Wild"
					],
					mentalPool: 0,
					name: "Mattock",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Troll➞Pit➞Ox",
								"Troll➞Pit➞Battering Ram",
								"Troll➞Cavedweller➞Dwarf Hunter",
								"Troll➞Wild➞Manhunter",
								"Troll➞Wild➞Brute"
							]
						}
					},
					resources: 7,
					setting: "Pit",
					skillPool: 3,
					skills: [
						"Any General➞Hammer",
						"Any General➞Formation Fighting Training"
					],
					stock: "Troll",
					traitPool: 1,
					traits: [
						"Troll Lifepath➞Brutal"
					],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Troll➞Wild"
					],
					mentalPool: 0,
					name: "Ironshield",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Troll➞Pit➞Mattock",
								"Troll➞Wild➞Brute"
							]
						}
					},
					resources: 6,
					setting: "Pit",
					skillPool: 3,
					skills: [
						"Any General➞Shield Training",
						"Any General➞Intimidation"
					],
					stock: "Troll",
					traitPool: 1,
					traits: [
						"Troll Lifepath➞Unflinching"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Bellower",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Troll➞Wild➞Bull",
								"Troll➞Pit➞Ironshield"
							]
						}
					},
					resources: 4,
					setting: "Pit",
					skillPool: 3,
					skills: [
						"Any General➞Torture",
						"Any Monstrous➞Lash"
					],
					stock: "Troll",
					traitPool: 1,
					traits: [
						"Troll Lifepath➞Where There's a Whip There's a Way",
						"Troll Lifepath➞Tough as Nails",
						"Troll Lifepath➞Bellowing"
					],
					years: 16
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 1,
					leads: [],
					mentalPool: 1,
					name: "Warlord",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Troll➞Pit➞Bellower"
							]
						}
					},
					resources: 10,
					setting: "Pit",
					skillPool: 3,
					skills: [
						"Any General➞Command",
						"Any General➞Strategy"
					],
					stock: "Troll",
					traitPool: 2,
					traits: [
						"Troll Lifepath➞Insidious Cruelty",
						"Troll Lifepath➞Wickedly Clever"
					],
					years: 56
				}
			]
		},
		"Wild": {
			allowed: ["bwc", "msc"],
			name: "Wild",
			short: "Wild",
			stock: "Troll",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 2,
					leads: [
						"Troll➞Pit"
					],
					mentalPool: 0,
					name: "Born Wild",
					physicalPool: 0,
					requirements: {},
					resources: 2,
					setting: "Wild",
					skillPool: 0,
					skills: [],
					stock: "Troll",
					traitPool: 1,
					traits: [],
					years: 5
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Troll➞Cavedweller"
					],
					mentalPool: 0,
					name: "Bogey",
					physicalPool: 1,
					requirements: {},
					resources: 1,
					setting: "Wild",
					skillPool: 3,
					skills: [
						"Any General➞Brawling",
						"Any Wise➞Forest-wise",
						"Any General➞Stealthy"
					],
					stock: "Troll",
					traitPool: 2,
					traits: [],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Bridgehaunt",
					physicalPool: 1,
					requirements: {},
					resources: 2,
					setting: "Wild",
					skillPool: 2,
					skills: [
						"Any Wise➞Bridge-wise",
						"Any General➞Intimidation"
					],
					stock: "Troll",
					traitPool: 1,
					traits: [
						"Troll Lifepath➞Stubborn"
					],
					years: 10
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Troll➞Pit"
					],
					mentalPool: 0,
					name: "Manhunter",
					physicalPool: 0,
					requirements: {},
					resources: 2,
					setting: "Wild",
					skillPool: 2,
					skills: [
						"Any Wise➞Human-wise",
						"Any Wise➞Village-wise"
					],
					stock: "Troll",
					traitPool: 1,
					traits: [],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 1,
					leads: [],
					mentalPool: 1,
					name: "Forlorn",
					physicalPool: 0,
					requirements: {},
					resources: 1,
					setting: "Wild",
					skillPool: 0,
					skills: [],
					stock: "Troll",
					traitPool: 2,
					traits: [
						"Troll Lifepath➞Solitary",
						"Troll Lifepath➞Addled",
						"Troll Lifepath➞Slow"
					],
					years: 13
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Troll➞Pit"
					],
					mentalPool: 0,
					name: "Brute",
					physicalPool: 2,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Troll➞Wild➞Bridgehaunt",
								"Troll➞Cavedweller➞Mine Haunt",
								"Troll➞Wild➞Manhunter",
								"Troll➞Cavedweller➞Dwarf Hunter",
								"Troll➞Pit➞Battering Ram",
								"Troll➞Pit➞Mattock"
							]
						}
					},
					resources: 2,
					setting: "Wild",
					skillPool: 2,
					skills: [
						"Any General➞Intimidation",
						"Any General➞Brawling"
					],
					stock: "Troll",
					traitPool: 1,
					traits: [
						"Troll Lifepath➞Brute"
					],
					years: 15
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Troll➞Cavedweller",
						"Troll➞Pit"
					],
					mentalPool: 1,
					name: "Brood Mother",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Troll➞Wild➞Brute",
								"Troll➞Cavedweller➞Dread Stone",
								"Troll➞Pit➞Bellower"
							]
						}
					},
					resources: 10,
					setting: "Wild",
					skillPool: 3,
					skills: [
						"Any Monstrous➞Nursing",
						"Any General➞Ugly Truth"
					],
					stock: "Troll",
					traitPool: 2,
					traits: [
						"Troll Lifepath➞Misshapen",
						"Troll Lifepath➞Grotesque",
						"Troll Lifepath➞Witch Flesh"
					],
					years: 33
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Troll➞Pit"
					],
					mentalPool: 1,
					name: "Bull",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Troll➞Wild➞Brute",
								"Troll➞Pit➞Ironshield"
							]
						}
					},
					resources: 5,
					setting: "Wild",
					skillPool: 3,
					skills: [
						"Any General➞Torture",
						"Troll Special➞Extortion"
					],
					stock: "Troll",
					traitPool: 2,
					traits: [
						"Troll Lifepath➞Boor"
					],
					years: 45
				}
			]
		}
	}
};
