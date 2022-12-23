import { Stock } from "./_stocks";

export const Orc: Stock = {
	agePool: [
		{ max: 10, min: 0, m: 3, p: 10 },
		{ max: 16, min: 11, m: 4, p: 11 },
		{ max: 22, min: 17, m: 5, p: 12 },
		{ max: 30, min: 23, m: 5, p: 13 },
		{ max: 40, min: 31, m: 6, p: 14 },
		{ max: 50, min: 41, m: 6, p: 15 },
		{ max: 60, min: 51, m: 7, p: 16 },
		{ max: 80, min: 61, m: 7, p: 17 },
		{ max: 99, min: 81, m: 8, p: 17 },
		{ max: 125, min: 100, m: 8, p: 18 },
		{ max: 150, min: 126, m: 9, p: 18 },
		{ max: 99999, min: 151, m: 9, p: 19 }
	],
	allowed: ["bwg", "bwc", "msc"],
	hasSetting: true,
	hasSubsetting: true,
	name: "Orc",
	stride: 7,
	settings: {
		"Black Legion": {
			allowed: ["bwg", "bwc", "msc"],
			name: "Black Legion",
			short: "Legion",
			stock: "Orc",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 0,
					name: "Goblin",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "NOT",
							items: [
								"Orc➞Great and Black➞Born Great"
							]
						}
					},
					resources: 2,
					setting: "Black Legion",
					skillPool: 2,
					skills: [
						"Any General➞Foraging",
						"Any General➞Brawling"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Human Lifepath➞Tasting the Lash",
						"Human Lifepath➞Exhausted",
						"Orc Lifepath➞Running (Away)",
						"Orc Lifepath➞Charging Blindly",
						"Orc Lifepath➞Marching"
					],
					years: 3
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 0,
					name: "Sun Blotter",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "NOT",
							items: [
								"Orc➞Great and Black➞Born Great"
							]
						}
					},
					resources: 3,
					setting: "Black Legion",
					skillPool: 2,
					skills: [
						"Any General➞Bow",
						"Any General➞Mending",
						"Any General➞Fletcher"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Orc Lifepath➞Hiding",
						"Orc Lifepath➞Running (Away)"
					],
					years: 3
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 1,
					name: "Nightseeker",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "NOT",
							items: [
								"Orc➞Great and Black➞Born Great"
							]
						}
					},
					resources: 4,
					setting: "Black Legion",
					skillPool: 5,
					skills: [
						"Any General➞Orienteering",
						"Any General➞Tracking",
						"Any General➞Trapper",
						"Any General➞Stealthy",
						"Any General➞Climbing",
						"Any Monstrous➞Garrote"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Human Lifepath➞Tasting the Lash"
					],
					years: 4
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 0,
					name: "Legioner",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "NOT",
							items: [
								"Orc➞Great and Black➞Born Great"
							]
						}
					},
					resources: 5,
					setting: "Black Legion",
					skillPool: 4,
					skills: [
						"Any General➞Spear",
						"Any General➞Shield Training",
						"Any General➞Brawling",
						"Any General➞Foraging"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [],
					years: 4
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 1,
					name: "Hatred Bearer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Great and Black➞The Rites",
								"Orc➞Black Legion➞Legioner",
								"Orc➞Chattel➞Whipmaster"
							]
						}
					},
					resources: 15,
					setting: "Black Legion",
					skillPool: 3,
					skills: [
						"Any General➞Conspicuous",
						"Any Wise➞Black Legion-wise"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Any Character➞Psychotic",
						"Any Character➞Paranoid",
						"Any Call-on➞Booming Voice"
					],
					years: 1
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 0,
					name: "Despair Shouter",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Great and Black➞The Rites",
								"Orc➞Black Legion➞Legioner",
								"Orc➞Chattel➞Whipmaster"
							]
						}
					},
					resources: 10,
					setting: "Black Legion",
					skillPool: 3,
					skills: [
						"Orc Special➞Brazen Horn of Despair",
						"Any General➞Intimidation",
						"Any General➞Brawling"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Any Character➞Reviled"
					],
					years: 3
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 0,
					name: "Black Hunter",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Great and Black➞Follower",
								"Orc➞Chattel➞Ravager",
								"Orc➞Black Legion➞Nightseeker"
							]
						}
					},
					resources: 5,
					setting: "Black Legion",
					skillPool: 5,
					skills: [
						"Any General➞Bow",
						"Any General➞Hunting",
						"Any General➞Field Dressing",
						"Any General➞Stealthy"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Orc Special➞Black Bile Poison"
					],
					years: 5
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel",
						"Orc➞Great and Black"
					],
					mentalPool: 0,
					name: "Astride the Beast",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Black Legion➞Black Hunter",
								"Orc➞Great and Black➞Follower"
							]
						}
					},
					resources: 6,
					setting: "Black Legion",
					skillPool: 9,
					skills: [
						"Any General➞Mounted Combat Training",
						"Any General➞Riding",
						"Any General➞Great Wolf Husbandry",
						"Any General➞Intimidation",
						"Any General➞Spear",
						"Any General➞Armor Training"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Any Character➞Brash",
						"Orc Lifepath➞Cry of Doom"
					],
					years: 5
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel",
						"Orc➞Great and Black"
					],
					mentalPool: 1,
					name: "Bears the Lash",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Chattel➞Whipmaster",
								"Orc➞Black Legion➞Black Hunter",
								"Orc➞Black Legion➞Astride the Beast",
								"Orc➞Great and Black➞The Rites"
							]
						}
					},
					resources: 9,
					setting: "Black Legion",
					skillPool: 6,
					skills: [
						"Any Wise➞Whip-wise",
						"Any General➞Intimidation",
						"Any General➞Torture",
						"Any General➞Command",
						"Any General➞Sword",
						"Any General➞Brawling"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Orc Lifepath➞Where There's a Whip There's a Way"
					],
					years: 6
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel",
						"Orc➞Great and Black"
					],
					mentalPool: 0,
					name: "Packmaster",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Black Legion➞Bears the Lash",
								"Orc➞Great and Black➞Follower",
								"Orc➞Chattel➞Whipmaster",
								"Orc➞Servant of the Dark Blood➞Master of Eight",
								"Orc➞Servant of the Dark Blood➞Knower of Secrets"
							]
						}
					},
					resources: 10,
					setting: "Black Legion",
					skillPool: 5,
					skills: [
						"Any General➞Great Wolf Husbandry",
						"Any Wise➞Great Wolf-wise",
						"Any Wise➞Pack-wise",
						"Any General➞Mending"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Any Character➞Flea-Bitten",
						"Orc Lifepath➞Where There's a Whip There's a Way",
						"Any Call-on➞Show No Fear"
					],
					years: 7
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel",
						"Orc➞Great and Black"
					],
					mentalPool: 1,
					name: "Head Taker",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Black Legion➞Bears the Lash",
								"Orc➞Great and Black➞Black Destroyer",
								"Orc➞Great and Black➞Named"
							]
						}
					},
					resources: 15,
					setting: "Black Legion",
					skillPool: 5,
					skills: [
						"Any General➞Command",
						"Orc Special➞Brutal Intimidation",
						"Any General➞Axe",
						"Any General➞Brawling"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Orc Lifepath➞Unrelenting Savagery",
						"Any Character➞Fondness for Elven Blood",
						"Any Character➞Taste for Man-Flesh"
					],
					years: 6
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Great and Black",
						"Orc➞Servant of the Dark Blood"
					],
					mentalPool: 1,
					name: "Troll Lord",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Black Legion➞Bears the Lash",
								"Orc➞Black Legion➞Packmaster",
								"Orc➞Great and Black➞Named"
							]
						}
					},
					resources: 20,
					setting: "Black Legion",
					skillPool: 6,
					skills: [
						"Any Wise➞Troll-wise",
						"Any General➞Troll Etiquette",
						"Any General➞Hammer",
						"Any General➞Shield Training"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Any Character➞Arrogant",
						"Orc Lifepath➞Troll Speak"
					],
					years: 5
				}
			]
		},
		"Chattel": {
			allowed: ["bwg", "bwc", "msc"],
			name: "Chattel",
			short: "Chattel",
			stock: "Orc",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwg", "bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 2,
					leads: [
						"Orc➞Black Legion",
						"Orc➞Servant of the Dark Blood"
					],
					mentalPool: 0,
					name: "Born Chattel",
					physicalPool: 1,
					requirements: {},
					resources: 5,
					setting: "Chattel",
					skillPool: 0,
					skills: [],
					stock: "Orc",
					traitPool: 1,
					traits: [],
					years: 10
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Cattle Slave",
					physicalPool: 1,
					requirements: {},
					resources: 3,
					setting: "Chattel",
					skillPool: 2,
					skills: [
						"Any General➞Animal Husbandry"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Human Lifepath➞Tasting the Lash",
						"Any Character➞Screaming",
						"Any Character➞Shouting",
						"Orc Lifepath➞Kicking the Beast"
					],
					years: 5
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Black Legion"
					],
					mentalPool: 0,
					name: "Scavenger",
					physicalPool: 1,
					requirements: {},
					resources: 6,
					setting: "Chattel",
					skillPool: 3,
					skills: [
						"Any General➞Foraging",
						"Any General➞Inconspicuous"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Human Lifepath➞Tasting the Lash",
						"Orc Lifepath➞Running (Away)",
						"Orc Lifepath➞Hiding",
						"Orc Lifepath➞Stealing",
						"Any Character➞Scavenger"
					],
					years: 3
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Forge Slave",
					physicalPool: 1,
					requirements: {},
					resources: 3,
					setting: "Chattel",
					skillPool: 2,
					skills: [
						"Any General➞Ditch Digging"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Human Lifepath➞Tasting the Lash",
						"Orc Lifepath➞Pain Life",
						"Human Lifepath➞Back-Breaking Labor",
						"Human Lifepath➞Numb"
					],
					years: 5
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Hauler",
					physicalPool: 1,
					requirements: {},
					resources: 3,
					setting: "Chattel",
					skillPool: 2,
					skills: [
						"Any General➞Driving",
						"Any Wise➞Beast of Burden-wise"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Human Lifepath➞Tasting the Lash",
						"Human Lifepath➞Back-Breaking Labor",
						"Any Character➞Cursing",
						"Any Character➞Spitting",
						"Any Character➞Yowling"
					],
					years: 5
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Cutter Slave",
					physicalPool: 1,
					requirements: {},
					resources: 3,
					setting: "Chattel",
					skillPool: 2,
					skills: [
						"Orc Special➞Tree Pulling",
						"Any General➞Ditch Digging"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Human Lifepath➞Tasting the Lash",
						"Any Character➞Hatred of Forests",
						"Human Lifepath➞Back-Breaking Labor"
					],
					years: 5
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Tunneler",
					physicalPool: 1,
					requirements: {},
					resources: 3,
					setting: "Chattel",
					skillPool: 2,
					skills: [
						"Any General➞Ditch Digging",
						"Any Wise➞Tunnel-wise"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Human Lifepath➞Tasting the Lash",
						"Human Lifepath➞Back-Breaking Labor",
						"Orc Lifepath➞Black Lung"
					],
					years: 4
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Black Legion"
					],
					mentalPool: 0,
					name: "Ravager",
					physicalPool: 1,
					requirements: {},
					resources: 4,
					setting: "Chattel",
					skillPool: 4,
					skills: [
						"Any General➞Brawling",
						"Any General➞Cudgel",
						"Any General➞Intimidation"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Orc Lifepath➞Pack Hunter"
					],
					years: 3
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Woodcutter",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Chattel➞Cutter Slave"
							]
						}
					},
					resources: 9,
					setting: "Chattel",
					skillPool: 4,
					skills: [
						"Orc Special➞Rude Carpentry",
						"Any General➞Mending",
						"Any General➞Intimidation"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [],
					years: 7
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Butcher",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Chattel➞Cattle Slave"
							]
						}
					},
					resources: 9,
					setting: "Chattel",
					skillPool: 4,
					skills: [
						"Any General➞Butchery",
						"Any General➞Tanner",
						"Any General➞Intimidation"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [],
					years: 7
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Forger",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Chattel➞Forge Slave"
							]
						}
					},
					resources: 9,
					setting: "Chattel",
					skillPool: 5,
					skills: [
						"Any General➞Blacksmith",
						"Any General➞Intimidation"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Any Character➞Singed"
					],
					years: 7
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Pitwright",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Chattel➞Tunneler"
							]
						}
					},
					resources: 10,
					setting: "Chattel",
					skillPool: 4,
					skills: [
						"Any General➞Mining",
						"Any General➞Intimidation"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Dwarf Lifepath➞Deep Sense"
					],
					years: 8
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Orc➞Black Legion"
					],
					mentalPool: 0,
					name: "Edge Grinder",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Chattel➞Forger"
							]
						}
					},
					resources: 15,
					setting: "Chattel",
					skillPool: 6,
					skills: [
						"Any General➞Mending",
						"Any General➞Weaponsmith",
						"Any General➞Armorer",
						"Any General➞Tanner"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Any Character➞Suspicious"
					],
					years: 10
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Black Legion"
					],
					mentalPool: 1,
					name: "Whipmaster",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Chattel➞Pitwright",
								"Orc➞Chattel➞Forger",
								"Orc➞Great and Black➞1*ANY",
								"Orc➞Black Legion➞1*ANY",
								"Orc➞Chattel➞4*ANY" // NOTE: I'm not sure if they mean this
							]
						}
					},
					resources: 15,
					setting: "Chattel",
					skillPool: 4,
					skills: [
						"Any General➞Interrogation",
						"Any General➞Intimidation",
						"Any General➞Brawling",
						"Any General➞Torture"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Orc Lifepath➞Where There's a Whip There's a Way"
					],
					years: 9
				}
			]
		},
		"Great and Black": {
			allowed: ["bwg", "bwc", "msc"],
			name: "Great and Black",
			short: "Great",
			stock: "Orc",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwg", "bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 3,
					leads: [
						"Orc➞Servant of the Dark Blood"
					],
					mentalPool: 0,
					name: "Born Great",
					physicalPool: 0,
					requirements: {},
					resources: 5,
					setting: "Great and Black",
					skillPool: 0,
					skills: [],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Orc Lifepath➞Born to Rule Them All",
						"Orc Special➞Enemy of the Sun"
					],
					years: 10
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Black Legion",
						"Orc➞Servant of the Dark Blood"
					],
					mentalPool: 1,
					name: "The Rites",
					physicalPool: 1,
					requirements: {
						limits: [
							"LP➞UNIQUE",
							"LP➞MAX➞2"
						]
					},
					resources: 3,
					setting: "Great and Black",
					skillPool: 5,
					skills: [
						"Any General➞Brawling",
						"Any General➞Intimidation",
						"Any General➞Torture"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Orc Lifepath➞Life is Death",
						"Any Die➞Sprinter"
					],
					years: 3
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Black Legion",
						"Orc➞Chattel"
					],
					mentalPool: 0,
					name: "Servant of the Gate",
					physicalPool: 1,
					requirements: {},
					resources: 7,
					setting: "Great and Black",
					skillPool: 2,
					skills: [
						"Any General➞Soothing Platitudes",
						"Any General➞Ditch Digging",
						"Any General➞Hauling"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Any Character➞Humble Before My Master",
						"Human Lifepath➞Back-Breaking Labor"
					],
					years: 4
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Black Legion",
						"Orc➞Chattel"
					],
					mentalPool: 1,
					name: "Follower",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Great and Black➞The Rites",
								"Orc➞Black Legion➞Astride the Beast"
							]
						}
					},
					resources: 9,
					setting: "Great and Black",
					skillPool: 8,
					skills: [
						"Any General➞Armor Training",
						"Any General➞Axe",
						"Any General➞Bow",
						"Any General➞Knives",
						"Any General➞Mace",
						"Any General➞Riding",
						"Any General➞Shield Training",
						"Any Wise➞Clan-wise"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Any Character➞Silent Hatred"
					],
					years: 5
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 1,
					name: "Black Destroyer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Great and Black➞Follower",
								"Orc➞Black Legion➞Astride the Beast",
								"Orc➞Black Legion➞Head Taker"
							]
						}
					},
					resources: 12,
					setting: "Great and Black",
					skillPool: 7,
					skills: [
						"Any General➞Mounted Combat Training",
						"Any General➞Great Wolf Husbandry",
						"Any General➞Riding",
						"Any General➞Axe",
						"Any General➞Spear"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Any Character➞Intense Hatred",
						"Orc Special➞Low Cunning"
					],
					years: 6
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 1,
					name: "Named",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Great and Black➞Black Destroyer",
								"Orc➞Black Legion➞Troll Lord",
								"Orc➞Black Legion➞Head Taker"
							]
						}
					},
					resources: 25,
					setting: "Great and Black",
					skillPool: 5,
					skills: [
						"Any General➞Command",
						"Orc Special➞Brutal Intimidation",
						"Any General➞Torture"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Orc Lifepath➞Savage Consequences"
					],
					years: 8
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 1,
					name: "Siege Master",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Great and Black➞Servant of the Gate"
							]
						}
					},
					resources: 30,
					setting: "Great and Black",
					skillPool: 5,
					skills: [
						"Orc Special➞Siege Engineer",
						"Any General➞Artillerist",
						"Any General➞Mending"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Orc Lifepath➞The Bigger They Come…",
						"Orc Lifepath➞Brutish Efficiency"
					],
					years: 10
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 1,
					name: "Gate Forger",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Great and Black➞Siege Master"
							]
						}
					},
					resources: 30,
					setting: "Great and Black",
					skillPool: 5,
					skills: [
						"Any General➞Mason",
						"Orc Special➞Bastions of Hatred",
						"Any General➞Mining"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Orc Lifepath➞Rare Talent"
					],
					years: 10
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Servant of the Dark Blood"
					],
					mentalPool: 1,
					name: "Whisperer",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Servant of the Dark Blood➞Slave to the Dark",
								"Orc➞Chattel➞Whipmaster",
								"Orc➞Great and Black➞Gate Forger",
								"Orc➞Black Legion➞Bears the Lash"
							]
						}
					},
					resources: 40,
					setting: "Great and Black",
					skillPool: 5,
					skills: [
						"Orc Special➞Poisonous Platitudes",
						"Any General➞Falsehood",
						"Any General➞Persuasion",
						"Any Wise➞Clan-wise",
						"Any Wise➞Ambition-wise"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Orc Lifepath➞Forked Tongue",
						"Any Character➞Poisonous Ambition"
					],
					years: 9
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 1,
					leads: [],
					mentalPool: 2,
					name: "Great One",
					physicalPool: 2,
					requirements: {
						conditions: {
							type: "AND",
							items: [
								"Orc➞Great and Black➞Named",
								"Trait➞Orc Lifepath➞Born to Rule Them All"
							]
						}
					},
					resources: 60,
					setting: "Great and Black",
					skillPool: 5,
					skills: [
						"Any General➞Command",
						"Any General➞Strategy",
						"Orc Special➞Name Ritual"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Orc Lifepath➞Brooding",
						"Orc Lifepath➞Flights of Murderous Fancy",
						"Any Character➞Unrelenting Hatred"
					],
					years: 20
				}
			]
		},
		"Servant of the Dark Blood": {
			allowed: ["bwg", "bwc", "msc"],
			name: "Servant of the Dark Blood",
			short: "Servant",
			stock: "Orc",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 0,
					name: "Slave to the Dark",
					physicalPool: 0,
					requirements: {},
					resources: 3,
					setting: "Servant of the Dark Blood",
					skillPool: 2,
					skills: [
						"Orc Special➞Servant-wise"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Any Character➞Fearful Respect of the Servants",
						"Any Character➞Naked Hatred"
					],
					years: 6
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 1,
					name: "Drinker of the Dark",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Servant of the Dark Blood➞Slave to the Dark"
							]
						}
					},
					resources: 6,
					setting: "Servant of the Dark Blood",
					skillPool: 3,
					skills: [
						"Orc Special➞Doctrine of Night's Blood"
					],
					stock: "Orc",
					traitPool: 3,
					traits: [
						"Orc Lifepath➞Stark Madness",
						"Any Character➞Blasphemer",
						"Orc Special➞Void Embrace"
					],
					years: 5
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel"
					],
					mentalPool: 1,
					name: "Bloodletter",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Servant of the Dark Blood➞Drinker of the Dark"
							]
						}
					},
					resources: 6,
					setting: "Servant of the Dark Blood",
					skillPool: 5,
					skills: [
						"Orc Special➞Rituals of Blood",
						"Any General➞Torture",
						"Any General➞Intimidation",
						"Any General➞Knives"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [],
					years: 5
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel",
						"Orc➞Black Legion"
					],
					mentalPool: 0,
					name: "Knower of Secrets",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Servant of the Dark Blood➞Drinker of the Dark"
							]
						}
					},
					resources: 7,
					setting: "Servant of the Dark Blood",
					skillPool: 4,
					skills: [
						"Orc Special➞Rituals of Night",
						"Orc Special➞Vile Poisoner",
						"Any General➞Foraging"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [],
					years: 6
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Orc➞Chattel",
						"Orc➞Black Legion"
					],
					mentalPool: 0,
					name: "Master of Eight",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Servant of the Dark Blood➞Knower of Secrets"
							]
						}
					},
					resources: 8,
					setting: "Servant of the Dark Blood",
					skillPool: 7,
					skills: [
						"Orc Special➞Spider Husbandry",
						"Any General➞Riding",
						"Any General➞Mounted Combat Training",
						"Any Wise➞Web-wise",
						"Any General➞Climbing"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Any Character➞Batshit",
						"Orc Lifepath➞Affinity for Spiders"
					],
					years: 8
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Master of Blood",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Servant of the Dark Blood➞Bloodletter"
							]
						}
					},
					resources: 8,
					setting: "Servant of the Dark Blood",
					skillPool: 4,
					skills: [
						"Any Wise➞Rituals-wise",
						"Any General➞Animal Husbandry",
						"Any Wise➞Orc-wise",
						"Any Wise➞Elf-wise",
						"Any Wise➞Wolf-wise"
					],
					stock: "Orc",
					traitPool: 2,
					traits: [
						"Orc Lifepath➞Where There's a Whip There's a Way"
					],
					years: 7
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Master of Darkness",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Servant of the Dark Blood➞Knower of Secrets"
							]
						}
					},
					resources: 8,
					setting: "Servant of the Dark Blood",
					skillPool: 3,
					skills: [
						"Any Wise➞Cave-wise",
						"Any Wise➞Tunnel-wise"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [],
					years: 7
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 1,
					leads: [],
					mentalPool: 0,
					name: "Dark Summoner",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Servant of the Dark Blood➞Master of Darkness"
							]
						}
					},
					resources: 12,
					setting: "Servant of the Dark Blood",
					skillPool: 3,
					skills: [
						"Any Wise➞Darkness-wise"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [],
					years: 7
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 1,
					leads: [],
					mentalPool: 0,
					name: "Blood Summoner",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Servant of the Dark Blood➞Master of Blood"
							]
						}
					},
					resources: 12,
					setting: "Servant of the Dark Blood",
					skillPool: 3,
					skills: [
						"Any Wise➞Poison-wise",
						"Any Wise➞Bat-wise",
						"Any Wise➞Troll-wise"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [],
					years: 10
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 2,
					leads: [],
					mentalPool: 1,
					name: "Servant",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "AND",
							items: [
								"Trait➞Orc Lifepath➞Born to Rule Them All",
								{
									type: "OR",
									items: [
										"Orc➞Servant of the Dark Blood➞Dark Summoner",
										"Orc➞Servant of the Dark Blood➞Blood Summoner"
									]
								}
							]
						}
					},
					resources: 30,
					setting: "Servant of the Dark Blood",
					skillPool: 2,
					skills: [
						"Any Wise➞Great and Black-wise",
						"Orc Special➞Name Ritual"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [],
					years: 50
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Master of the Weak",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Orc➞Servant of the Dark Blood➞Knower of Secrets"
							]
						}
					},
					resources: 8,
					setting: "Servant of the Dark Blood",
					skillPool: 5,
					skills: [
						"Human Magical➞Death Art",
						"Any Wise➞Apocalypse-wise",
						"Any Wise➞Graveyard-wise",
						"Any Wise➞Murder-wise"
					],
					stock: "Orc",
					traitPool: 1,
					traits: [
						"Human Special➞Feared"
					],
					years: 7
				}
			]
		}
	}
};
