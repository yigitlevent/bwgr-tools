import { Stock } from "./_stocks";

export const Roden: Stock = {
	agePool: [
		{ max: 5, min: 0, m: 6, p: 10 },
		{ max: 9, min: 6, m: 7, p: 13 },
		{ max: 15, min: 10, m: 7, p: 14 },
		{ max: 24, min: 16, m: 8, p: 15 },
		{ max: 30, min: 25, m: 8, p: 14 },
		{ max: 36, min: 31, m: 7, p: 13 },
		{ max: 40, min: 37, m: 7, p: 12 },
		{ max: 45, min: 41, m: 7, p: 11 },
		{ max: 99999, min: 46, m: 6, p: 10 }
	],
	allowed: ["bwc", "msc"],
	hasSetting: true,
	hasSubsetting: true,
	name: "Roden",
	stride: 8,
	settings: {
		"Below": {
			allowed: ["bwc", "msc"],
			name: "Below",
			short: "Below",
			stock: "Roden",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 3,
					leads: [
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Born Below",
					physicalPool: 0,
					requirements: {},
					resources: 0,
					setting: "Below",
					skillPool: 0,
					skills: [],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Tunnel Vision"
					],
					years: 6
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: -1,
					name: "Pinky",
					physicalPool: 0,
					requirements: {},
					resources: 2,
					setting: "Below",
					skillPool: 3,
					skills: [
						"Any General➞Soothing Platitudes",
						"Any Wise➞Below-wise"
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Confusing Rant",
						"Roden Lifepath➞Distracted",
						"Roden Lifepath➞Clumsy",
						"Roden Lifepath➞Lucky"
					],
					years: 2
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Scavenger",
					physicalPool: 0,
					requirements: {},
					resources: 3,
					setting: "Below",
					skillPool: 5,
					skills: [
						"Any General➞Inconspicuous",
						"Any General➞Scavenging",
						"Any General➞Survival",
						"Any General➞Appraisal",
						"Any Wise➞Junk-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Acquisitive"
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
					name: "Scratcher",
					physicalPool: 1,
					requirements: {},
					resources: 4,
					setting: "Below",
					skillPool: 4,
					skills: [
						"Any General➞Ditch Digging",
						"Any Wise➞Tunnel-wise",
						"Any General➞Mending"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Hacking Cough",
						"Roden Lifepath➞Deep Sense"
					],
					years: 6
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Snitch",
					physicalPool: 0,
					requirements: {},
					resources: 3,
					setting: "Below",
					skillPool: 4,
					skills: [
						"Any General➞Inconspicuous",
						"Any General➞Falsehood",
						"Any General➞Haggling",
						"Any Wise➞Secret-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Cowardly"
					],
					years: 4
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "The Gauntlet",
					physicalPool: 1,
					requirements: {},
					resources: 4,
					setting: "Below",
					skillPool: 1,
					skills: [
						"Any General➞Brawling",
						"Any General➞Soothing Platitudes",
						"Any Wise➞Hazing-wise",
						"Any Wise➞Pecking Order-wise"
					],
					stock: "Roden",
					traitPool: 5,
					traits: [
						"Roden Lifepath➞Victim"
					],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Apprentice",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞The Gauntlet"
							]
						}
					},
					resources: 5,
					setting: "Below",
					skillPool: 3,
					skills: [
						"Any General➞Mending",
						"Any General➞Blacksmith",
						"Any Wise➞Bribe-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Gopher"
					],
					years: 6
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Society"
					],
					mentalPool: 1,
					name: "Kidnapper",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞The Gauntlet"
							]
						}
					},
					resources: 10,
					setting: "Below",
					skillPool: 7,
					skills: [
						"Any General➞Inconspicuous",
						"Any General➞Knots",
						"Any General➞Haggling",
						"Any General➞Cudgel",
						"Any General➞Intimidation",
						"Any Wise➞Child-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Ruthless"
					],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Fingers",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞The Gauntlet"
							]
						}
					},
					resources: 5,
					setting: "Below",
					skillPool: 4,
					skills: [
						"Any General➞Sleight of Hand",
						"Any General➞Inconspicuous",
						"Any General➞Knives",
						"Any General➞Streetwise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Light Touch",
						"Roden Lifepath➞Cocky"
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
					name: "Sneak Thief",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞The Gauntlet"
							]
						}
					},
					resources: 6,
					setting: "Below",
					skillPool: 5,
					skills: [
						"Any General➞Stealthy",
						"Any General➞Lock Pick",
						"Any General➞Knives",
						"Any Wise➞Roof-wise",
						"Any Wise➞Window-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Cool Headed",
						"Roden Lifepath➞Soft Step"
					],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Bladesmith",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞Apprentice",
								"Roden➞Field➞Apprentice"
							]
						}
					},
					resources: 20,
					setting: "Below",
					skillPool: 7,
					skills: [
						"Any General➞Haggling",
						"Any General➞Instruction",
						"Any General➞Weaponsmith",
						"Any Wise➞Knife-wise",
						"Any Wise➞Sword-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Secretive"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Burglar",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞Fingers",
								"Roden➞Below➞Sneak Thief",
								"Roden➞Society➞Shadow",
								"Roden➞Exile➞Corsair",
								"Roden➞Exile➞Bushwhacker"
							]
						}
					},
					resources: 10,
					setting: "Below",
					skillPool: 7,
					skills: [
						"Any General➞Observation",
						"Any General➞Climbing",
						"Any General➞Throwing",
						"Any General➞Locksmith",
						"Any Wise➞Loot-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Quiet",
						"Roden Lifepath➞Confident"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Bruiser",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞The Gauntlet"
							]
						}
					},
					resources: 8,
					setting: "Below",
					skillPool: 7,
					skills: [
						"Any General➞Appropriate Weapons",
						"Any General➞Intimidation",
						"Any General➞Extortion",
						"Any General➞Shield Training"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Mean",
						"Roden Lifepath➞Dumb"
					],
					years: 6
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Fence",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞Scavenger",
								"Roden➞Below➞Snitch",
								"Roden➞Below➞Sneak Thief"
							]
						}
					},
					resources: 20,
					setting: "Below",
					skillPool: 7,
					skills: [
						"Any General➞Appraisal",
						"Any General➞Haggling",
						"Any General➞Falsehood",
						"Any Wise➞Antique-wise",
						"Any Wise➞Fake-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Poker Face"
					],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile"
					],
					mentalPool: 0,
					name: "Sawbones",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Society➞Poisoner",
								"Roden➞Exile➞Albino",
								"Roden➞Field➞Healer",
								"Roden➞Below➞Pinky"
							]
						}
					},
					resources: 15,
					setting: "Below",
					skillPool: 5,
					skills: [
						"Any General➞Field Dressing",
						"Any General➞Apothecary",
						"Any General➞Poisons",
						"Any General➞Haggling"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Practical",
						"Roden Lifepath➞Impersonal"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Society"
					],
					mentalPool: 1,
					name: "Negotiator",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞Kidnapper",
								"Roden➞Field➞Deputy",
								"Roden➞Exile➞Corsair",
								"Roden➞Field➞Missionary",
								"Roden➞Below➞Fence",
								"Roden➞Society➞Perverter"
							]
						}
					},
					resources: 15,
					setting: "Below",
					skillPool: 6,
					skills: [
						"Any General➞Persuasion",
						"Any Wise➞Deal-wise",
						"Any General➞Haggling",
						"Any General➞Intimidation",
						"Any General➞Ugly Truth"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Calm Demeanor",
						"Roden Lifepath➞Good Listener"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Society"
					],
					mentalPool: 1,
					name: "The Brain",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Exile➞Hermit",
								"Roden➞Field➞Mayor",
								"Roden➞Below➞Scratcher",
								{
									type: "NOT",
									items: [
										"Roden➞Below➞Pinky"
									]
								}
							]
						}
					},
					resources: 13,
					setting: "Below",
					skillPool: 13,
					skills: [
						"Any General➞Soothing Platitudes",
						"Any General➞Read",
						"Any General➞Write",
						"Any General➞Research",
						"Human Special➞Astrology",
						"Any General➞Strategy",
						"Any General➞Logistics",
						"Any General➞Falsehood",
						"Any General➞History",
						"Any General➞Obscure History",
						"Any Wise➞World Domination-wise"
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Genius",
						"Roden Lifepath➞Condescending",
						"Roden Lifepath➞Frustrated"
					],
					years: 9
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Mastermind",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞Negotiator",
								"Roden➞Below➞The Brain",
								"Roden➞Exile➞Bandit King",
								"Roden➞Field➞Abbot/Abbess"
							]
						}
					},
					resources: 30,
					setting: "Below",
					skillPool: 11,
					skills: [
						"Any General➞Intimidation",
						"Any General➞Persuasion",
						"Any General➞Oratory",
						"Any General➞Falsehood",
						"Any General➞Command",
						"Any Wise➞Below-wise",
						"Any General➞Sword",
						"Any Wise➞Clique-wise",
						"Any Wise➞Nest-wise",
						"Any Wise➞Traitor-wise"
					],
					stock: "Roden",
					traitPool: 3,
					traits: [
						"Roden Lifepath➞Ambitious",
						"Roden Lifepath➞Ruthless"
					],
					years: 10
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "The Pope",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Father/Mother",
								"Roden➞Society➞Visionary"
							]
						}
					},
					resources: 75,
					setting: "Below",
					skillPool: 9,
					skills: [
						"Any General➞Extortion",
						"Any General➞Intimidation",
						"Any General➞Read",
						"Any General➞Write",
						"Any General➞Composition",
						"Any Wise➞Church-wise",
						"Any Wise➞Papal Bull-wise",
						"Any Wise➞Pope Joke-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Most Holy",
						"Roden Lifepath➞Faithful"
					],
					years: 11
				}
			]
		},
		"Exile": {
			allowed: ["bwc", "msc"],
			name: "Exile",
			short: "Exile",
			stock: "Roden",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Below",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Carnivore",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Born to the Fields"
							]
						}
					},
					resources: 5,
					setting: "Exile",
					skillPool: 5,
					skills: [
						"Any General➞Hunting",
						"Any General➞Tracking",
						"Any General➞Trapper",
						"Any General➞Bow",
						"Any Wise➞Forest-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Gnawing Hunger",
						"Roden Lifepath➞Blood Thirsty"
					],
					years: 4
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Field",
						"Roden➞Society"
					],
					mentalPool: -1,
					name: "Serub",
					physicalPool: -1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞Born Below"
							]
						}
					},
					resources: 3,
					setting: "Exile",
					skillPool: 5,
					skills: [
						"Any General➞Inconspicuous",
						"Any General➞Soothing Platitudes",
						"Any Wise➞Kick Me-wise",
						"Any Wise➞Bully-wise",
						"Any Wise➞Nest-wise",
						"Any Wise➞Below-wise",
						"Any Wise➞Village-wise",
						"Any Wise➞Cat-wise"
					],
					stock: "Roden",
					traitPool: 3,
					traits: [
						"Roden Lifepath➞Abused",
						"Roden Lifepath➞Pack Rat"
					],
					years: 3
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Field",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Hermit",
					physicalPool: 0,
					requirements: {},
					resources: 2,
					setting: "Exile",
					skillPool: 8,
					skills: [
						"Any General➞Philosophy",
						"Human Special➞Astrology",
						"Any General➞Rhetoric",
						"Any General➞Oratory",
						"Any General➞Foraging",
						"Any Wise➞Books-wise",
						"Any Wise➞Lost Secret-wise"
					],
					stock: "Roden",
					traitPool: 3,
					traits: [
						"Roden Lifepath➞Toughtful",
						"Roden Lifepath➞Pack Rat",
						"Any Character➞Boring",
						"Any Character➞Farting"
					],
					years: 10
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Field",
						"Roden➞Below",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Bushwhacker",
					physicalPool: 1,
					requirements: {},
					resources: 5,
					setting: "Exile",
					skillPool: 4,
					skills: [
						"Any General➞Appropriate Weapons",
						"Any General➞Intimidation",
						"Any General➞Stealthy",
						"Any Wise➞Ambush-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Desperate"
					],
					years: 5
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Roden➞Field",
						"Roden➞Below",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Corsair",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Exile➞Bushwhacker",
								"Roden➞Field➞Sheriff",
								"Roden➞Exile➞Bandit King",
								"Roden➞Field➞Trader",
								"Roden➞Below➞Negotiator",
								"Roden➞Below➞Bruiser"
							]
						}
					},
					resources: 15,
					setting: "Exile",
					skillPool: 8,
					skills: [
						"Any General➞Pilot",
						"Any General➞Rigging",
						"Any General➞Knots",
						"Any General➞Navigation",
						"Any General➞Mending",
						"Any Wise➞Ship-wise",
						"Any Wise➞Bay-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Ruthless",
						"Roden Lifepath➞Sea Legs"
					],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Roden➞Field",
						"Roden➞Below",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Bandit King",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Exile➞Bushwhacker",
								"Roden➞Field➞Sheriff",
								"Roden➞Below➞Bruiser"
							]
						}
					},
					resources: 15,
					setting: "Exile",
					skillPool: 6,
					skills: [
						"Any General➞Intimidation",
						"Any General➞Command",
						"Any General➞Sword",
						"Any Wise➞Bandit-wise",
						"Any Wise➞Caravan-wise"
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Scheming",
						"Roden Lifepath➞Daring"
					],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Albino",
					physicalPool: 0,
					requirements: {},
					resources: 25,
					setting: "Exile",
					skillPool: 7,
					skills: [
						"Human Special➞Astrology",
						"Any General➞Ugly Truth",
						"Any General➞Read",
						"Any General➞Write",
						"Human Magical➞Sorcery",
						"Human Magical➞Spirit Binding"
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Albino",
						"Human Special➞Gifted",
						"Roden Lifepath➞Misunderstood"
					],
					years: 10
				}
			]
		},
		"Field": {
			allowed: ["bwc", "msc"],
			name: "Field",
			short: "Field",
			stock: "Roden",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 3,
					leads: [
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Born to the Fields",
					physicalPool: 0,
					requirements: {},
					resources: 0,
					setting: "Field",
					skillPool: 0,
					skills: [],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Vegetarian"
					],
					years: 6
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile"
					],
					mentalPool: 0,
					name: "Hand",
					physicalPool: 1,
					requirements: {},
					resources: 3,
					setting: "Field",
					skillPool: 4,
					skills: [
						"Any General➞Sing",
						"Any Wise➞Work-wise",
						"Any General➞Ditch Digging"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Back-Breaking Labor"
					],
					years: 3
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile"
					],
					mentalPool: 0,
					name: "Woodsen",
					physicalPool: 1,
					requirements: {},
					resources: 6,
					setting: "Field",
					skillPool: 4,
					skills: [
						"Any General➞Tree Cutting",
						"Any Wise➞Tree-wise",
						"Any General➞Mending",
						"Any General➞Orienteering"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Independent"
					],
					years: 6
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Apprentice",
					physicalPool: 1,
					requirements: {},
					resources: 9,
					setting: "Field",
					skillPool: 3,
					skills: [
						"Any General➞Mending",
						"Any General➞Haggling",
						"Any Wise➞Materials-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Gopher"
					],
					years: 4
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile"
					],
					mentalPool: 0,
					name: "Gatherer",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Field",
					skillPool: 3,
					skills: [
						"Any General➞Foraging",
						"Any General➞Herbalism",
						"Any Wise➞Nut and Berry-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Farmer",
					physicalPool: 1,
					requirements: {},
					resources: 10,
					setting: "Field",
					skillPool: 3,
					skills: [
						"Any General➞Farming",
						"Any General➞Mending",
						"Any Wise➞Seed-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Hoarder"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Beekeeper",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Woodsen",
								"Roden➞Field➞Gatherer",
								"Roden➞Field➞Farmer",
								"Roden➞Below➞Apprentice",
								"Roden➞Field➞Apprentice",
								"Roden➞Field➞Hand"
							]
						}
					},
					resources: 9,
					setting: "Field",
					skillPool: 5,
					skills: [
						"Any General➞Bird Husbandry",
						"Any General➞Firebuilding",
						"Any Wise➞Bee-wise",
						"Any Wise➞Flower-wise",
						"Any Wise➞Honey-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Thick Skin",
						"Roden Lifepath➞Beespeaker"
					],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Miller",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Woodsen",
								"Roden➞Field➞Gatherer",
								"Roden➞Field➞Farmer",
								"Roden➞Below➞Apprentice",
								"Roden➞Field➞Apprentice",
								"Roden➞Field➞Hand"
							]
						}
					},
					resources: 15,
					setting: "Field",
					skillPool: 5,
					skills: [
						"Any General➞Miller",
						"Any Wise➞Grain-wise",
						"Any General➞Haggling"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Industrious"
					],
					years: 9
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Meadmaker",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Beekeeper"
							]
						}
					},
					resources: 14,
					setting: "Field",
					skillPool: 5,
					skills: [
						"Any General➞Brewer",
						"Any Wise➞Mead-wise",
						"Any General➞Haggling",
						"Any General➞Cooper"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [],
					years: 9
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Baker",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Hand",
								"Roden➞Field➞Miller",
								"Roden➞Field➞Beekeeper"
							]
						}
					},
					resources: 12,
					setting: "Field",
					skillPool: 4,
					skills: [
						"Any General➞Baking",
						"Any General➞Firebuilding",
						"Any Wise➞Bread-wise",
						"Any General➞Cooking"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Fragrant",
						"Roden Lifepath➞Sweet Tooth"
					],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Weaver",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞Apprentice",
								"Roden➞Field➞Apprentice"
							]
						}
					},
					resources: 15,
					setting: "Field",
					skillPool: 6,
					skills: [
						"Any General➞Weaving",
						"Any General➞Sewing",
						"Any General➞Embroidery",
						"Any General➞Soothing Platitudes",
						"Any General➞Sing"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Calloused"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Crafter",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞Apprentice",
								"Roden➞Field➞Apprentice"
							]
						}
					},
					resources: 20,
					setting: "Field",
					skillPool: 5,
					skills: [
						"Any General➞Jargon",
						"Any General➞Instruction",
						"Any Wise➞Apprentice-wise",
						"Any General➞Blacksmith",
						"Any General➞Carpentry",
						"Any General➞Potter",
						"Any General➞Mason"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Diligent"
					],
					years: 10
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Healer",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Exile➞Albino",
								"Roden➞Below➞Sawbones",
								"Roden➞Field➞Hand",
								"Roden➞Field➞Woodsen",
								"Roden➞Field➞Farmer",
								"Roden➞Field➞Beekeeper"
							]
						}
					},
					resources: 10,
					setting: "Field",
					skillPool: 6,
					skills: [
						"Any General➞Herbalism",
						"Any General➞Field Dressing",
						"Any General➞Apothecary",
						"Any General➞Ugly Truth",
						"Any Wise➞Hurt-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Compassionate",
						"Roden Lifepath➞Bedside Manner"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile"
					],
					mentalPool: 0,
					name: "Trader",
					physicalPool: 0,
					requirements: {
						limits: [
							"LP➞MAX➞2"
						]
					},
					resources: 16,
					setting: "Field",
					skillPool: 6,
					skills: [
						"Any General➞Haggling",
						"Any General➞Appraisal",
						"Any General➞Accounting",
						"Any General➞Conspicuous",
						"Any Wise➞Village-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Opportunist"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Society"
					],
					mentalPool: 0,
					name: "Deputy",
					physicalPool: 1,
					requirements: {
						limits: [
							"LP➞MIN➞3"
						]
					},
					resources: 6,
					setting: "Field",
					skillPool: 6,
					skills: [
						"Any General➞Conspicuous",
						"Any General➞Spear",
						"Any General➞Bow",
						"Any General➞Brawling",
						"Any General➞Shield Training"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Alarmist"
					],
					years: 4
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Sheriff",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Deputy",
								"Roden➞Exile➞Bandit King",
								"Roden➞Below➞Bruiser",
								"Roden➞Below➞Mastermind"
							]
						}
					},
					resources: 8,
					setting: "Field",
					skillPool: 6,
					skills: [
						"Any General➞Command",
						"Any General➞Intimidation",
						"Any General➞Interrogation",
						"Any General➞Sword"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Mayor",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Sheriff",
								"Roden➞Field➞Healer",
								"Roden➞Field➞Baker",
								"Roden➞Field➞Meadmaker",
								"Roden➞Below➞Negotiator"
							]
						}
					},
					resources: 20,
					setting: "Field",
					skillPool: 7,
					skills: [
						"Any General➞Oratory",
						"Any General➞Persuasion",
						"Any General➞Rule of Law",
						"Any General➞Etiquette",
						"Any General➞Haggling",
						"Any Wise➞Petitioner-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Practiced Smile"
					],
					years: 10
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Society"
					],
					mentalPool: 1,
					name: "Brother/Sister",
					physicalPool: 0,
					requirements: {},
					resources: 14,
					setting: "Field",
					skillPool: 6,
					skills: [
						"Any General➞Doctrine",
						"Any General➞Read",
						"Any General➞Write",
						"Any General➞Meditation",
						"Any Wise➞Shrine-wise",
						"Any Wise➞Prayer-wise"
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Ordained",
						"Roden Lifepath➞Faithful"
					],
					years: 5
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Society"
					],
					mentalPool: 1,
					name: "Missionary",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Brother/Sister"
							]
						}
					},
					resources: 5,
					setting: "Field",
					skillPool: 5,
					skills: [
						"Any General➞Suasion",
						"Roden Special➞Preaching",
						"Any General➞Foreign Languages",
						"Any General➞Intimidation",
						"Any Wise➞Below-wise",
						"Any General➞Brawling",
						"Any Wise➞Human-wise"
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Zealot",
						"Roden Lifepath➞Righteous"
					],
					years: 5
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Father/Mother",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Brother/Sister"
							]
						}
					},
					resources: 15,
					setting: "Field",
					skillPool: 6,
					skills: [
						"Any Wise➞Aecer-wise",
						"Any General➞Oratory",
						"Any General➞Illuminations",
						"Any General➞Calligraphy",
						"Any General➞Sing",
						"Any General➞History",
						"Any General➞Research",
						"Any General➞Cartography",
						"Any General➞Poetry"
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Portly",
						"Roden Lifepath➞Patient"
					],
					years: 7
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Abbot/Abbess",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Field➞Father/Mother"
							]
						}
					},
					resources: 30,
					setting: "Field",
					skillPool: 5,
					skills: [
						"Any General➞Administration",
						"Any General➞Accounting",
						"Any General➞Conspicuous",
						"Any General➞Etiquette"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Revered"
					],
					years: 10
				}
			]
		},
		"Society": {
			allowed: ["bwc", "msc"],
			name: "Society",
			short: "Society",
			stock: "Roden",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile"
					],
					mentalPool: 0,
					name: "Initiate",
					physicalPool: 0,
					requirements: {},
					resources: 2,
					setting: "Society",
					skillPool: 3,
					skills: [
						"Any General➞Doctrine",
						"Any Wise➞Society-wise"
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Broken"
					],
					years: 3
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Cultist",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Society➞Initiate"
							]
						}
					},
					resources: 4,
					setting: "Society",
					skillPool: 5,
					skills: [
						"Any General➞Rhetoric",
						"Any General➞Suasion",
						"Any General➞Cudgel",
						"Any Wise➞Tail-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Zealot",
						"Roden Lifepath➞Defensive"
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
					name: "Shadow",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Society➞Initiate"
							]
						}
					},
					resources: 6,
					setting: "Society",
					skillPool: 6,
					skills: [
						"Any General➞Stealthy",
						"Any General➞Observation",
						"Any General➞Inconspicuous",
						"Any General➞Climbing",
						"Any Wise➞Tail-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Cautious"
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
					name: "Arsonist",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Society➞Initiate"
							]
						}
					},
					resources: 6,
					setting: "Society",
					skillPool: 6,
					skills: [
						"Human Special➞Arson",
						"Any General➞Firebuilding",
						"Any General➞Inconspicuous",
						"Roden Special➞Firebombs",
						"Any Wise➞Arson-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Pyromaniac"
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
					name: "Murderer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Society➞Initiate"
							]
						}
					},
					resources: 7,
					setting: "Society",
					skillPool: 5,
					skills: [
						"Any General➞Knives",
						"Any General➞Stealthy",
						"Any General➞Intimidation",
						"Any General➞Inconspicuous",
						"Roden Special➞Garrote"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Murderous",
						"Roden Lifepath➞Single-Minded"
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
					name: "Willard",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Society➞Initiate"
							]
						}
					},
					resources: 5,
					setting: "Society",
					skillPool: 4,
					skills: [
						"Any General➞Animal Husbandry",
						"Any General➞Inconspicuous",
						"Any General➞Ratiquette" 
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Rat Speak",
						"Roden Lifepath➞Bitter",
						"Roden Lifepath➞Weird"
					],
					years: 5
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Field",
						"Roden➞Below",
						"Roden➞Exile"
					],
					mentalPool: 1,
					name: "Perverter",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Below➞The Brain",
								"Roden➞Society➞Cultist",
								"Roden➞Field➞Missionary"
							]
						}
					},
					resources: 10,
					setting: "Society",
					skillPool: 6,
					skills: [
						"Any General➞Disguise",
						"Roden Special➞Preaching",
						"Any General➞Inconspicuous",
						"Any General➞Falsehood",
						"Any Wise➞Dupe-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Scheming"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Poisoner",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Society➞Initiate"
							]
						}
					},
					resources: 7,
					setting: "Society",
					skillPool: 5,
					skills: [
						"Any General➞Poisons",
						"Any General➞Inconspicuous",
						"Any General➞Apothecary",
						"Any Wise➞Toxin-wise"
					],
					stock: "Roden",
					traitPool: 1,
					traits: [
						"Roden Lifepath➞Nauseous"
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
					name: "Guardian",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Society➞Murderer",
								"Roden➞Society➞Willard",
								"Roden➞Society➞Perverter"
							]
						}
					},
					resources: 9,
					setting: "Society",
					skillPool: 8,
					skills: [
						"Any General➞Appropriate Weapons",
						"Any General➞Brawling",
						"Any General➞Armor Training",
						"Any General➞Shield Training",
						"Any General➞Intimidation"
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Merciless",
						"Roden Lifepath➞Loyal"
					],
					years: 6
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Preacher",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Society➞Cultist",
								"Roden➞Field➞Missionary"
							]
						}
					},
					resources: 15,
					setting: "Society",
					skillPool: 6,
					skills: [
						"Roden Special➞Preaching",
						"Any General➞Conspicuous",
						"Any General➞Symbology",
						"Any General➞Obscure History"
					],
					stock: "Roden",
					traitPool: 2,
					traits: [
						"Roden Lifepath➞Obsessed",
						"Roden Lifepath➞Righteous"
					],
					years: 8
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Roden➞Exile",
						"Roden➞Below"
					],
					mentalPool: 1,
					name: "Visionary",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Roden➞Exile➞Albino",
								"Roden➞Society➞Preacher",
								"Roden➞Field➞Abbot/Abbess",
								"Roden➞Below➞Mastermind"
							]
						}
					},
					resources: 30,
					setting: "Society",
					skillPool: 11,
					skills: [
						"Any General➞Oratory",
						"Any General➞Command",
						"Human Special➞Astrology",
						"Any General➞Research",
						"Any General➞Interrogation",
						"Any General➞Torture",
						"Any General➞Observation",
						"Any General➞Poetry",
						"Any Wise➞Cult-wise",
						"Any Wise➞Inner Workings-wise",
						"Any Wise➞Undermining-wise"
					],
					stock: "Roden",
					traitPool: 4,
					traits: [
						"Roden Lifepath➞Megalomaniac",
						"Roden Lifepath➞Imperious Demeanor",
						"Roden Special➞Visionary Faith",
						"Roden Lifepath➞Dreamer"
					],
					years: 10
				}
			]
		}
	}
};
