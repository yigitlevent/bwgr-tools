import { Stock } from "./_stocks";

export const Dwarf: Stock = {
	agePool: [
		{ max: 20, min: 0, m: 6, p: 13 },
		{ max: 30, min: 21, m: 7, p: 13 },
		{ max: 50, min: 31, m: 7, p: 14 },
		{ max: 76, min: 51, m: 8, p: 15 },
		{ max: 111, min: 77, m: 8, p: 16 },
		{ max: 151, min: 112, m: 9, p: 16 },
		{ max: 199, min: 152, m: 9, p: 17 },
		{ max: 245, min: 200, m: 10, p: 18 },
		{ max: 300, min: 246, m: 11, p: 17 },
		{ max: 345, min: 301, m: 11, p: 16 },
		{ max: 396, min: 346, m: 12, p: 15 },
		{ max: 445, min: 397, m: 11, p: 14 },
		{ max: 525, min: 446, m: 11, p: 13 },
		{ max: 99999, min: 526, m: 10, p: 12 }
	],
	allowed: ["bwg", "bwc", "msc"],
	hasSetting: true,
	hasSubsetting: true,
	name: "Dwarf",
	namePlural: "Dwarves",
	stride: 6,
	settings: {
		"Artificer": {
			allowed: ["bwg", "bwc", "msc"],
			name: "Artificer",
			short: "Artificer",
			stock: "Dwarf",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwg", "bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 3,
					leads: [
						"Dwarf➞Clansman"
					],
					mentalPool: 0,
					name: "Born Artificer",
					physicalPool: 0,
					requirements: {},
					resources: 15,
					setting: "Artificer",
					skillPool: 2,
					skills: [
						"Dwarf Special➞Dwarven Rune Script"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 20
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Noble",
						"Dwarf➞Host",
						"Dwarf➞Guilder"
					],
					mentalPool: 0,
					name: "Ardent",
					physicalPool: 1,
					requirements: {},
					resources: 15,
					setting: "Artificer",
					skillPool: 4,
					skills: [
						"Any General➞Firebuilding",
						"Any General➞Soothing Platitudes",
						"Any Wise➞Soot-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Character➞Humility",
						"Any Character➞Hard Work"
					],
					years: 21
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Host",
						"Dwarf➞Outcast"
					],
					mentalPool: 0,
					name: "Tyro Artificer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Artificer➞Ardent",
								"Dwarf➞Guilder➞Journeyman"
							]
						}
					},
					resources: 20,
					setting: "Artificer",
					skillPool: 5,
					skills: [
						"Dwarf Art➞Black-Metal Artifice",
						"Any General➞Mending",
						"Any Wise➞Dwarven Art-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Determined"
					],
					years: 21
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Outcast",
						"Dwarf➞Host"
					],
					mentalPool: 0,
					name: "Artificer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Artificer➞Tyro Artificer",
								"Dwarf➞Guilder➞Craftsman"
							]
						}
					},
					resources: 35,
					setting: "Artificer",
					skillPool: 8,
					skills: [
						"Dwarf Art➞Stone Artifice",
						"Any General➞Etching",
						"Dwarf Art➞White-Metal Artifice",
						"Dwarf Art➞Gem Artifice"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Stolid"
					],
					years: 30
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Outcast",
						"Dwarf➞Host",
						"Dwarf➞Noble"
					],
					mentalPool: 0,
					name: "Mask Bearer",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Artificer➞Artificer"
							]
						}
					},
					resources: 50,
					setting: "Artificer",
					skillPool: 6,
					skills: [
						"Any General➞Jargon",
						"Any Wise➞Fire and Steel-wise",
						"Dwarf Art➞War Art"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 55
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Outcast",
						"Dwarf➞Host"
					],
					mentalPool: 1,
					name: "Master of Arches",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Artificer➞Artificer"
							]
						}
					},
					resources: 75,
					setting: "Artificer",
					skillPool: 8,
					skills: [
						"Dwarf Art➞Lithography",
						"Any General➞Sculpture",
						"Dwarf Art➞Hallmaster",
						"Any General➞Symbology",
						"Any General➞Etiquette"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Character➞Confident",
						"Any Character➞Patient"
					],
					years: 75
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Outcast",
						"Dwarf➞Host"
					],
					mentalPool: 1,
					name: "Master of Forges",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Artificer➞Mask Bearer"
							]
						}
					},
					resources: 75,
					setting: "Artificer",
					skillPool: 6,
					skills: [
						"Dwarf Art➞Forge Artifice",
						"Any General➞Appraisal",
						"Any General➞Engineering",
						"Any General➞Command",
						"Any Wise➞Maker's Mark-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Call-on➞Meticulous",
						"Dwarf Special➞Estimation"
					],
					years: 75
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 2,
					leads: [
						"Dwarf➞Outcast",
						"Dwarf➞Host"
					],
					mentalPool: 1,
					name: "Master Engraver",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Artificer➞Master of Arches"
							]
						}
					},
					resources: 60,
					setting: "Artificer",
					skillPool: 4,
					skills: [
						"Dwarf Art➞Reason of Old Stone",
						"Any Wise➞Stone-wise",
						"Any Wise➞Mountain-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 100
				}
			]
		},
		"Clansman": {
			allowed: ["bwg", "bwc", "msc"],
			name: "Clansman",
			short: "Clansman",
			stock: "Dwarf",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwg", "bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 3,
					leads: [
						"Dwarf➞Guilder"
					],
					mentalPool: 0,
					name: "Born Clansman",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Clansman",
					skillPool: 0,
					skills: [],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 20
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Host"
					],
					mentalPool: 0,
					name: "Tender",
					physicalPool: 1,
					requirements: {},
					resources: 7,
					setting: "Clansman",
					skillPool: 5,
					skills: [
						"Any General➞Farming",
						"Any Wise➞Crowd-wise",
						"Any Wise➞Hills-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Character➞Cursing"
					],
					years: 20
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Host"
					],
					mentalPool: 0,
					name: "Herder",
					physicalPool: 1,
					requirements: {},
					resources: 9,
					setting: "Clansman",
					skillPool: 5,
					skills: [
						"Any General➞Animal Husbandry",
						"Any Wise➞Flock-wise",
						"Dwarf Special➞Fence Building",
						"Any General➞Climbing"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Call-on➞Booming Voice",
						"Dwarf Lifepath➞Affinity for Sheep and Goats"
					],
					years: 15
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Outcast"
					],
					mentalPool: 1,
					name: "Tinkerer",
					physicalPool: 0,
					requirements: {},
					resources: 15,
					setting: "Clansman",
					skillPool: 4,
					skills: [
						"Dwarf Special➞Stuff-wise",
						"Any General➞Mending",
						"Any General➞Scavenging"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Character➞Curious",
						"Dwarf Lifepath➞Tinkerer"
					],
					years: 35
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Host",
						"Dwarf➞Guilder"
					],
					mentalPool: 0,
					name: "Delver",
					physicalPool: 1,
					requirements: {},
					resources: 10,
					setting: "Clansman",
					skillPool: 4,
					skills: [
						"Any Wise➞Tunnel-wise",
						"Any Wise➞Gas Pocket-wise",
						"Dwarf Art➞Excavation"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Dwarf Lifepath➞Deep Sense"
					],
					years: 20
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Host"
					],
					mentalPool: 1,
					name: "Miller",
					physicalPool: 0,
					requirements: {},
					resources: 30,
					setting: "Clansman",
					skillPool: 6,
					skills: [
						"Dwarf Special➞Grain Appraisal",
						"Any General➞Miller",
						"Any General➞Mending",
						"Any General➞Brewer",
						"Any Wise➞Grain-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 30
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Host",
						"Dwarf➞Outcast"
					],
					mentalPool: 0,
					name: "Brewer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Clansman➞Miller",
								"Dwarf➞Clansman➞Longbeard",
								"Dwarf➞Noble➞Seneschal",
								"Dwarf➞Host➞Captain",
								"Dwarf➞Outcast➞Drunk"
							]
						}
					},
					resources: 40,
					setting: "Clansman",
					skillPool: 5,
					skills: [
						"Dwarf Special➞Beer Appraisal",
						"Dwarf Art➞Nogger",
						"Any General➞Miller",
						"Any Wise➞Beer-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 40
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Host",
						"Dwarf➞Artificer"
					],
					mentalPool: 0,
					name: "Foreman",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Clansman➞Delver",
								"Dwarf➞Artificer➞Ardent",
								"Dwarf➞Host➞Engineer"
							]
						}
					},
					resources: 25,
					setting: "Clansman",
					skillPool: 5,
					skills: [
						"Any Wise➞Ore-wise",
						"Any Wise➞Vein-wise",
						"Any General➞Engineering"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 35
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Host",
						"Dwarf➞Outcast"
					],
					mentalPool: 1,
					name: "Husband/Wife",
					physicalPool: 0,
					requirements: {
						limits: [
							"LP➞MIN➞3"
						]
					},
					resources: 18,
					setting: "Clansman",
					skillPool: 5,
					skills: [
						"Any Wise➞Clan-wise",
						"Any Wise➞Family-wise",
						"Any General➞Haggling",
						"Any General➞Soothing Platitudes"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Dwarf Lifepath➞Dispute-Settler",
						"Any Character➞Pragmatic Outlook"
					],
					years: 70
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Host",
						"Dwarf➞Guilder"
					],
					mentalPool: 1,
					name: "Longbeard",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Clansman➞Foreman",
								"Dwarf➞Host➞Graybeard",
								"Dwarf➞Artificer➞Artificer",
								"Dwarf➞Guilder➞Trader",
								"Dwarf➞Noble➞Seneschal",
								"Dwarf➞Outcast➞Adventurer",
								"Dwarf➞Clansman➞Husband/Wife"
							]
						}
					},
					resources: 30,
					setting: "Clansman",
					skillPool: 6,
					skills: [
						"Dwarf Art➞Coarse Persuasion",
						"Any General➞Ugly Truth",
						"Any Wise➞Guilder-wise",
						"Any Wise➞Host-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Character➞Floksy Wisdom",
						"Dwarf Lifepath➞Oathswearer"
					],
					years: 77
				}
			]
		},
		"Guilder": {
			allowed: ["bwg", "bwc", "msc"],
			name: "Guilder",
			short: "Guilder",
			stock: "Dwarf",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwg", "bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 4,
					leads: [
						"Dwarf➞Clansman"
					],
					mentalPool: 0,
					name: "Born Guilder",
					physicalPool: 0,
					requirements: {},
					resources: 5,
					setting: "Guilder",
					skillPool: 0,
					skills: [],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 21
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Host"
					],
					mentalPool: 0,
					name: "Wordbearer",
					physicalPool: 1,
					requirements: {},
					resources: 10,
					setting: "Guilder",
					skillPool: 5,
					skills: [
						"Any Wise➞Hold-wise",
						"Any Wise➞Rumor-wise",
						"Any General➞Oratory",
						"Dwarf Special➞Clan History"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Quirky",
						"Dwarf Lifepath➞Iron Memory",
						"Dwarf Lifepath➞Quick-Step"
					],
					years: 15
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Host"
					],
					mentalPool: 0,
					name: "Hauler",
					physicalPool: 1,
					requirements: {},
					resources: 7,
					setting: "Guilder",
					skillPool: 5,
					skills: [
						"Any General➞Hauling",
						"Any Wise➞Wagon-wise",
						"Any Wise➞Cargo-wise",
						"Any Wise➞Road-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Dwarf Lifepath➞Lifting Heavy Things"
					],
					years: 10
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Host",
						"Dwarf➞Outcast"
					],
					mentalPool: 0,
					name: "Carter",
					physicalPool: 1,
					requirements: {},
					resources: 10,
					setting: "Guilder",
					skillPool: 5,
					skills: [
						"Any General➞Animal Husbandry",
						"Any General➞Driving",
						"Any General➞Mending",
						"Any Wise➞Mule-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Patient",
						"Dwarf Lifepath➞Iron Nose"
					],
					years: 20
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Outcast",
						"Dwarf➞Host"
					],
					mentalPool: 1,
					name: "Hawker",
					physicalPool: 0,
					requirements: {},
					resources: 15,
					setting: "Guilder",
					skillPool: 6,
					skills: [
						"Any General➞Inconspicuous",
						"Any General➞Conspicuous",
						"Any General➞Streetwise",
						"Any General➞Haggling",
						"Any Wise➞Spiel-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 15
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Artificer"
					],
					mentalPool: 0,
					name: "Apprentice",
					physicalPool: 1,
					requirements: {},
					resources: 20,
					setting: "Guilder",
					skillPool: 4,
					skills: [
						"Any General➞Carving",
						"Any General➞Tanner",
						"Any General➞Carpentry",
						"Any Wise➞Scutwork-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Seen Not Heard"
					],
					years: 15
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Artificer",
						"Dwarf➞Host"
					],
					mentalPool: 0,
					name: "Journeyman",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Guilder➞Apprentice",
								"Dwarf➞Artificer➞Ardent",
								"Dwarf➞Noble➞Ardent"
							]
						}
					},
					resources: 25,
					setting: "Guilder",
					skillPool: 7,
					skills: [
						"Any General➞Haggling",
						"Any Wise➞Reputation-wise",
						"Any General➞Cartwright",
						"Any General➞Mending",
						"Dwarf Art➞Black-Metal Artifice"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Hungry"
					],
					years: 25
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 1,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Artificer"
					],
					mentalPool: 0,
					name: "Craftsman",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Guilder➞Journeyman",
								"Dwarf➞Artificer➞Artificer",
								"Dwarf➞Host➞Artillerist",
								"Dwarf➞Host➞Engineer"
							]
						}
					},
					resources: 45,
					setting: "Guilder",
					skillPool: 4,
					skills: [
						"Any General➞Appraisal",
						"Any General➞Shipwright",
						"Any Wise➞Artificer-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 45
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Outcast"
					],
					mentalPool: 1,
					name: "Trader",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Guilder➞Hawker",
								"Dwarf➞Guilder➞Journeyman",
								"Dwarf➞Outcast➞Adventurer",
								"Dwarf➞Clansman➞Husband/Wife"
							]
						}
					},
					resources: 70,
					setting: "Guilder",
					skillPool: 7,
					skills: [
						"Dwarf Art➞Stentorious Debate",
						"Dwarf Art➞Shrewd Appraisal",
						"Any General➞Haggling",
						"Any General➞Persuasion"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 45
				}
			]
		},
		"Host": {
			allowed: ["bwg", "bwc", "msc"],
			name: "Host",
			short: "Host",
			stock: "Dwarf",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Outcast",
						"Dwarf➞Guilder"
					],
					mentalPool: 0,
					name: "Foot Soldier",
					physicalPool: 1,
					requirements: {},
					resources: 6,
					setting: "Host",
					skillPool: 6,
					skills: [
						"Any General➞Foraging",
						"Any General➞Brawling",
						"Any General➞Hammer",
						"Any General➞Armor Training",
						"Any General➞Shield Training",
						"Any Wise➞Cadence-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Salt of the Earth"
					],
					years: 10
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Outcast",
						"Dwarf➞Guilder"
					],
					mentalPool: 0,
					name: "Arbalester",
					physicalPool: 0,
					requirements: {},
					resources: 12,
					setting: "Host",
					skillPool: 5,
					skills: [
						"Any General➞Crossbow",
						"Any General➞Mending",
						"Any General➞Fletcher",
						"Dwarf Special➞Artillery Hand",
						"Any Wise➞Windage-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Squinty"
					],
					years: 12
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Outcast",
						"Dwarf➞Guilder"
					],
					mentalPool: 0,
					name: "Banner Bearer",
					physicalPool: 1,
					requirements: {},
					resources: 10,
					setting: "Host",
					skillPool: 4,
					skills: [
						"Any General➞Conspicuous",
						"Any Wise➞Banner-wise",
						"Any General➞Intimidation"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Call-on➞Resigned (to Death)",
						"Dwarf Lifepath➞Obsessive"
					],
					years: 7
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Outcast",
						"Dwarf➞Guilder"
					],
					mentalPool: 0,
					name: "Horncaller",
					physicalPool: 1,
					requirements: {},
					resources: 9,
					setting: "Host",
					skillPool: 5,
					skills: [
						"Dwarf Special➞Links",
						"Any General➞Conspicuous",
						"Any Wise➞Cadence-wise",
						"Any Wise➞Suicidal Bravery-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 7
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Outcast",
						"Dwarf➞Noble"
					],
					mentalPool: 0,
					name: "Axe Bearer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Noble➞Ardent",
								"Dwarf➞Host➞Graybeard",
								"Dwarf➞Host➞Banner Bearer"
							]
						}
					},
					resources: 15,
					setting: "Host",
					skillPool: 9,
					skills: [
						"Any General➞Foraging",
						"Any General➞Axe",
						"Any General➞Conspicuous",
						"Any General➞Intimidation",
						"Any General➞Armor Training",
						"Any General➞Shield Training",
						"Any General➞Formation Fighting Training",
						"Any General➞Throwing"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Swaggering"
					],
					years: 15
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Outcast",
						"Dwarf➞Noble"
					],
					mentalPool: 0,
					name: "Graybeard",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Host➞Axe Bearer",
								"Dwarf➞Clansman➞Longbeard",
								"Dwarf➞Host➞3*ANY"
							]
						}
					},
					resources: 20,
					setting: "Host",
					skillPool: 5,
					skills: [
						"Any General➞Intimidation",
						"Any General➞Field Dressing",
						"Any General➞Command",
						"Any Wise➞Campaign-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Character➞Chuffing",
						"Dwarf Lifepath➞Oddly Likeable"
					],
					years: 20
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Outcast",
						"Dwarf➞Noble"
					],
					mentalPool: 1,
					name: "Khirurgeon",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Noble➞Abecedart",
								"Dwarf➞Noble➞Seneschal",
								"Dwarf➞Host➞Graybeard"
							]
						}
					},
					resources: 25,
					setting: "Host",
					skillPool: 6,
					skills: [
						"Dwarf Special➞Khirurgy",
						"Any General➞Soothing Platitudes",
						"Any General➞Cooking",
						"Any Wise➞Infection-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 25
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Outcast",
						"Dwarf➞Noble"
					],
					mentalPool: 1,
					name: "Quartermaster",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Noble➞Seneschal",
								"Dwarf➞Noble➞Treasurer",
								"Dwarf➞Guilder➞Trader",
								"Dwarf➞Host➞Graybeard"
							]
						}
					},
					resources: 35,
					setting: "Host",
					skillPool: 7,
					skills: [
						"Any General➞Logistics",
						"Any General➞Accounting",
						"Any General➞Strategy",
						"Any Wise➞Supply-wise",
						"Any Wise➞Host-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞No Nonsense"
					],
					years: 50
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Outcast",
						"Dwarf➞Noble"
					],
					mentalPool: 1,
					name: "Captain",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Noble➞Prince",
								"Dwarf➞Host➞Graybeard"
							]
						}
					},
					resources: 40,
					setting: "Host",
					skillPool: 7,
					skills: [
						"Any General➞Command",
						"Any General➞Conspicuous",
						"Any General➞Formation Fighting Training",
						"Any General➞Tactics",
						"Any General➞Cartography",
						"Any Wise➞Graybeard-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 55
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Artificer",
						"Dwarf➞Outcast",
						"Dwarf➞Noble"
					],
					mentalPool: 0,
					name: "Artillerist",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Artificer➞Mask Bearer",
								"Dwarf➞Guilder➞Craftsman",
								"Dwarf➞Clansman➞Foreman",
								"Dwarf➞Host➞3*Arbalester"
							]
						}
					},
					resources: 45,
					setting: "Host",
					skillPool: 5,
					skills: [
						"Any General➞Artillerist",
						"Any General➞Mending",
						"Any General➞Carpentry",
						"Any Wise➞Structural Weakness-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Complaining"
					],
					years: 55
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Artificer",
						"Dwarf➞Noble"
					],
					mentalPool: 0,
					name: "Engineer",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Host➞Artillerist",
								"Dwarf➞Artificer➞Mask Bearer"
							]
						}
					},
					resources: 50,
					setting: "Host",
					skillPool: 6,
					skills: [
						"Any General➞Jargon",
						"Dwarf Art➞War Engineer",
						"Any General➞Scavenging",
						"Any Wise➞Leverage-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Dwarf Special➞Estimation"
					],
					years: 60
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Outcast",
						"Dwarf➞Noble"
					],
					mentalPool: 0,
					name: "Warden",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Noble➞Prince",
								"Dwarf➞Host➞Captain",
								"Dwarf➞Noble➞High Captain"
							]
						}
					},
					resources: 65,
					setting: "Host",
					skillPool: 7,
					skills: [
						"Any General➞Conspicuous",
						"Any General➞Oratory",
						"Any General➞Observation",
						"Any General➞Strategy",
						"Any General➞Etiquette",
						"Any Wise➞Champion-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Chuntering",
						"Dwarf Lifepath➞Hard as Nails"
					],
					years: 75
				}
			]
		},
		"Noble": {
			allowed: ["bwg", "bwc", "msc"],
			name: "Noble",
			short: "Noble",
			stock: "Dwarf",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwg", "bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 4,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Artificer"
					],
					mentalPool: 0,
					name: "Born Noble",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Noble",
					skillPool: 2,
					skills: [
						"Dwarf Special➞Dwarven Rune Script"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Dwarf Lifepath➞Dvergar"
					],
					years: 21
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Artificer",
						"Dwarf➞Outcast"
					],
					mentalPool: 1,
					name: "Abecedart",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Noble",
					skillPool: 4,
					skills: [
						"Any General➞Chronology of Kings",
						"Any General➞Etiquette",
						"Any Wise➞Obscure Text-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Know It All"
					],
					years: 20
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Artificer",
						"Dwarf➞Outcast"
					],
					mentalPool: 0,
					name: "Ardent",
					physicalPool: 1,
					requirements: {},
					resources: 15,
					setting: "Noble",
					skillPool: 4,
					skills: [
						"Any General➞Sing",
						"Any General➞Soothing Platitudes",
						"Any General➞Accounting",
						"Any Wise➞Whispered Secrets-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Character➞Humility in the Face of Your Betters"
					],
					years: 25
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Host",
						"Dwarf➞Outcast"
					],
					mentalPool: 0,
					name: "Axe Bearer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Noble➞Ardent",
								"Dwarf➞Host➞Banner Bearer"
							]
						}
					},
					resources: 25,
					setting: "Noble",
					skillPool: 8,
					skills: [
						"Any General➞Axe",
						"Any General➞Armor Training",
						"Any General➞Shield Training",
						"Any General➞Formation Fighting Training",
						"Any General➞Throwing"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Proud"
					],
					years: 20
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Artificer",
						"Dwarf➞Host"
					],
					mentalPool: 1,
					name: "Chronicler",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Noble➞Abecedart",
								"Dwarf➞Host➞Khirurgeon",
								"Dwarf➞Host➞Graybeard"
							]
						}
					},
					resources: 20,
					setting: "Noble",
					skillPool: 9,
					skills: [
						"Any General➞Illuminations",
						"Any General➞Ancient History",
						"Any Wise➞Clan-wise",
						"Any Wise➞Dwarf-wise",
						"Any General➞Poetry",
						"Any General➞Cartography",
						"Any General➞Etiquette",
						"Any General➞Symbology",
						"Any Wise➞Oath-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [],
					years: 50
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Guilder",
						"Dwarf➞Host"
					],
					mentalPool: 1,
					name: "Seneschal",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Guilder➞Trader",
								"Dwarf➞Clansman➞Longbeard",
								"Dwarf➞Host➞Quartermaster",
								"Dwarf➞Noble➞Chronicler",
								"Dwarf➞Host➞Khirurgeon",
								"Dwarf➞Host➞Graybeard"
							]
						}
					},
					resources: 50,
					setting: "Noble",
					skillPool: 5,
					skills: [
						"Any General➞Etiquette",
						"Any General➞Command",
						"Any General➞Estate Management",
						"Any Wise➞Hold-wise"
					],
					stock: "Dwarf",
					traitPool: 1,
					traits: [
						"Any Character➞Practical"
					],
					years: 55
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Outcast",
						"Dwarf➞Host"
					],
					mentalPool: 1,
					name: "Treasurer",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Dwarf➞Noble➞Seneschal",
								"Dwarf➞Artificer➞Artificer",
								"Dwarf➞Host➞Warden"
							]
						}
					},
					resources: 100,
					setting: "Noble",
					skillPool: 6,
					skills: [
						"Any General➞Accounting",
						"Any General➞Etiquette",
						"Any Wise➞Treasure-wise",
						"Any General➞Administration"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Dwarf Lifepath➞Dangerous Obsession",
						"Any Die➞Rainman"
					],
					years: 75
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 2,
					leads: [
						"Dwarf➞Host",
						"Dwarf➞Outcast"
					],
					mentalPool: 0,
					name: "High Captain",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "AND",
							items: [
								"Dwarf➞Noble➞Axe Bearer",
								{
									type: "OR",
									items: [
										"Dwarf➞Host➞Captain",
										"Dwarf➞Host➞Warden"
									]
								}
							]
						}
					},
					resources: 75,
					setting: "Noble",
					skillPool: 5,
					skills: [
						"Any General➞Command",
						"Any General➞Strategy",
						"Any General➞Conspicuous"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Character➞Muttering",
						"Dwarf Lifepath➞Stentorious Voice"
					],
					years: 75
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Host",
						"Dwarf➞Outcast"
					],
					mentalPool: 1,
					name: "Prince",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "AND",
							items: [
								"Dwarf➞Noble➞Born Noble",
								"Dwarf➞Noble➞Axe Bearer"
							]
						}
					},
					resources: 200,
					setting: "Noble",
					skillPool: 8,
					skills: [
						"Any General➞Conspicuous",
						"Any General➞Etiquette",
						"Any General➞Intimidation",
						"Any General➞Oratory",
						"Any General➞Command",
						"Any Wise➞Burden of the Crown-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Character➞Grumbling",
						"Dwarf Lifepath➞Galvanizing Presence",
						"Dwarf Lifepath➞Baleful Stare"
					],
					years: 100
				}
			]
		},
		"Outcast": {
			allowed: ["bwg", "bwc", "msc"],
			name: "Outcast",
			short: "Outcast",
			stock: "Dwarf",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Guilder"
					],
					mentalPool: 0,
					name: "Adventurer",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Outcast",
					skillPool: 12,
					skills: [
						"Any General➞Survival",
						"Any General➞Climbing",
						"Any General➞Knots",
						"Any General➞Herbalism",
						"Any General➞Haggling",
						"Any General➞Firebuilding",
						"Any General➞Brawling",
						"Any General➞Knives",
						"Any General➞Sword",
						"Any General➞Crossbow",
						"Any General➞Lock Pick",
						"Any General➞Appraisal",
						"Any General➞Obscure History",
						"Any General➞Symbology",
						"Any Wise➞Lost Treasures-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Dwarf Lifepath➞Adventurer",
						"Any Character➞Boaster"
					],
					years: 5
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman"
					],
					mentalPool: 1,
					name: "Gambler",
					physicalPool: 0,
					requirements: {},
					resources: 15,
					setting: "Outcast",
					skillPool: 5,
					skills: [
						"Dwarf Special➞Games of Chance",
						"Any General➞Observation",
						"Any General➞Sleight of Hand",
						"Any Wise➞Cheat-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Dwarf Lifepath➞Stone Faced"
					],
					years: 7
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman"
					],
					mentalPool: 1,
					name: "Oathbreaker",
					physicalPool: 0,
					requirements: {},
					resources: 5,
					setting: "Outcast",
					skillPool: 4,
					skills: [
						"Any General➞Ugly Truth",
						"Any General➞Falsehood",
						"Any Wise➞Oath-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Dwarf Lifepath➞Oathbreaker",
						"Any Character➞Bitter"
					],
					years: 20
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman"
					],
					mentalPool: 0,
					name: "Drunk",
					physicalPool: 0,
					requirements: {},
					resources: 5,
					setting: "Outcast",
					skillPool: 5,
					skills: [
						"Dwarf Art➞Stentorious Singing",
						"Dwarf Art➞Drunking",
						"Any Wise➞Tavern Tales-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Any Character➞Drunk",
						"Any Character➞Despondent"
					],
					years: 10
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Coward",
					physicalPool: 0,
					requirements: {},
					resources: 5,
					setting: "Outcast",
					skillPool: 5,
					skills: [
						"Any General➞Inconspicuous",
						"Any General➞Ugly Truth",
						"Any General➞Oratory",
						"Any Wise➞Hypocritical Bastards-wise"
					],
					stock: "Dwarf",
					traitPool: 3,
					traits: [
						"Dwarf Lifepath➞Branded a Coward"
					],
					years: 15
				},
				{
					allowed: ["bwg", "bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Dwarf➞Clansman",
						"Dwarf➞Guilder",
						"Dwarf➞Artificer",
						"Dwarf➞Noble"
					],
					mentalPool: 1,
					name: "Rune Caster",
					physicalPool: 1,
					requirements: {},
					resources: 6,
					setting: "Outcast",
					skillPool: 5,
					skills: [
						"Dwarf Art➞Rune Casting",
						"Any General➞Foraging",
						"Any General➞Scavenging",
						"Any Wise➞Bad End-wise"
					],
					stock: "Dwarf",
					traitPool: 2,
					traits: [
						"Dwarf Lifepath➞Slave to Fate"
					],
					years: 20
				}
			]
		}
	}
};

