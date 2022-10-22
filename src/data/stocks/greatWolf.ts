import { Stock } from "./_stocks";

export const GreatWolf: Stock = {
	agePool: [
		{ max: 1, min: 0, m: 6, p: 12 },
		{ max: 3, min: 2, m: 7, p: 16 },
		{ max: 5, min: 4, m: 7, p: 17 },
		{ max: 7, min: 6, m: 7, p: 16 },
		{ max: 9, min: 8, m: 6, p: 14 },
		{ max: 11, min: 10, m: 6, p: 12 },
		{ max: 99999, min: 12, m: 5, p: 10 }
	],
	allowed: ["bwc", "msc"],
	hasSetting: true,
	hasSubsetting: true,
	name: "Great Wolf",
	stride: 11,
	settings: {
		"Captive": {
			allowed: ["bwc", "msc"],
			name: "Captive",
			short: "Captive",
			stock: "Great Wolf",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Slave to the Legion",
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 0,
					name: "Captive",
					physicalPool: 0,
					requirements: {},
					resources: 1,
					setting: "Captive",
					skillPool: 3,
					skills: [
						"Great Wolf Special➞Begging",
						"Great Wolf Special➞Cage-wise",
						"Any Wise➞Human-wise"
					],
					stock: "Great Wolf",
					traitPool: 3,
					traits: [
						"Great Wolf Lifepath➞Broken",
						"Great Wolf Lifepath➞Submissive"
					],
					years: 0
				}
			]
		},
		"Ghost of the Deeping Wood": {
			allowed: ["bwc", "msc"],
			name: "Ghost of the Deeping Wood",
			short: "Ghost",
			stock: "Great Wolf",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Spirit Hunter",
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 1,
					name: "Wandering Lost",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "AND",
							items: [
								"Great Wolf➞Wild Pack➞Last Wolf",
								"Great Wolf➞Outcast Wolf➞Lone Wolf"
							]
						}
					},
					resources: 0,
					setting: "Ghost of the Deeping Wood",
					skillPool: 2,
					skills: [
						"Great Wolf Special➞Nature of All Things"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [],
					years: 0
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Dire Haunt",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Ghost of the Deeping Wood➞Wandering Lost"
							]
						}
					},
					resources: 10,
					setting: "Ghost of the Deeping Wood",
					skillPool: 3,
					skills: [
						"Great Wolf Special➞Tongue of the Ancient One"
					],
					stock: "Great Wolf",
					traitPool: 2,
					traits: [],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Spirit Hunter",
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 1,
					name: "Ancient Journeyer",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Ghost of the Deeping Wood➞Wandering Lost"
							]
						}
					},
					resources: 0,
					setting: "Ghost of the Deeping Wood",
					skillPool: 2,
					skills: [
						"Great Wolf Special➞Old World-wise"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [],
					years: 0
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Fell Ancient",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Ghost of the Deeping Wood➞Ancient Journeyer"
							]
						}
					},
					resources: 15,
					setting: "Ghost of the Deeping Wood",
					skillPool: 3,
					skills: [
						"Great Wolf Special➞Ancient Ways"
					],
					stock: "Great Wolf",
					traitPool: 2,
					traits: [
						"Great Wolf Lifepath➞Reclusive",
						"Great Wolf Lifepath➞Paranoid",
						"Great Wolf Lifepath➞Odor of Spirits"
					],
					years: 2
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 1,
					leads: [],
					mentalPool: 2,
					name: "Ghost of the Wood",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "AND",
							items: [
								"Great Wolf➞Ghost of the Deeping Wood➞Dire Haunt",
								"Great Wolf➞Ghost of the Deeping Wood➞Fell Ancient"
							]
						}
					},
					resources: 10,
					setting: "Ghost of the Deeping Wood",
					skillPool: 6,
					skills: [
						"Great Wolf Special➞Wolf-wise",
						"Great Wolf Special➞Spirit Hunter-wise",
						"Great Wolf Special➞Legion-wise",
						"Great Wolf Special➞Path-wise",
						"Great Wolf Special➞River-wise",
						"Great Wolf Special➞Pack-wise"
					],
					stock: "Great Wolf",
					traitPool: 3,
					traits: [
						"Great Wolf Lifepath➞Prenaturally Calm",
						"Great Wolf Lifepath➞Watchful",
						"Great Wolf Lifepath➞Piercing Gaze",
						"Great Wolf Lifepath➞Stink of the Ancient"
					],
					years: 2
				}
			]
		},
		"Outcast Wolf": {
			allowed: ["bwc", "msc"],
			name: "Outcast Wolf",
			short: "Outcast",
			stock: "Great Wolf",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Wild Pack",
						"Great Wolf➞Slave to the Legion",
						"Great Wolf➞Captive",
						"Great Wolf➞Spirit Hunter",
						"Great Wolf➞Ghost of the Deeping Wood"
					],
					mentalPool: 1,
					name: "Lone Wolf",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Wild Pack➞Yearling",
								"Great Wolf➞Wild Pack➞Last Wolf",
								"Great Wolf➞Captive➞Captive",
								"Great Wolf➞Ghost of the Deeping Wood➞Wandering Lost",
								"Great Wolf➞Ghost of the Deeping Wood➞Ancient Journeyer",
								"Great Wolf➞Slave to the Legion➞Wayward",
								"Great Wolf➞Slave to the Legion➞Dark Friend"
							]
						}
					},
					resources: 1,
					setting: "Outcast Wolf",
					skillPool: 4,
					skills: [
						"Any Wise➞Territory-wise",
						"Great Wolf Special➞Pack-wise",
						"Any General➞Scavenging"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Wanderlust",
						"Great Wolf Lifepath➞Spirit Marked"
					],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Wild Pack",
						"Great Wolf➞Slave to the Legion",
						"Great Wolf➞Captive"
					],
					mentalPool: 0,
					name: "Scavenger",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Outcast Wolf➞Lone Wolf",
								"Great Wolf➞Captive➞Captive",
								"Great Wolf➞Slave to the Legion➞Caged and Beaten"
							]
						}
					},
					resources: 2,
					setting: "Outcast Wolf",
					skillPool: 3,
					skills: [
						"Great Wolf Special➞Scent-wise",
						"Great Wolf Special➞Village-wise",
						"Great Wolf Special➞Dog-wise",
						"Any General➞Scavenging"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Scavenger"
					],
					years: 1
				}
			]
		},
		"Slave to the Legion": {
			allowed: ["bwc", "msc"],
			name: "Slave to the Legion",
			short: "Slave",
			stock: "Great Wolf",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 2,
					leads: [
						"Great Wolf➞Captive"
					],
					mentalPool: 0,
					name: "Born to the Legion",
					physicalPool: 0,
					requirements: {},
					resources: 0,
					setting: "Slave to the Legion",
					skillPool: 2,
					skills: [
						"Great Wolf Special➞Howling"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Vile Language",
						"Great Wolf Lifepath➞Demented"
					],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Captive"
					],
					mentalPool: 0,
					name: "Caged and Beaten",
					physicalPool: 0,
					requirements: {
						texts: [
							"Wolves entering the legion from other settings must take Caged and Beaten as their first lifepath in this setting."
						]
					},
					resources: 1,
					setting: "Slave to the Legion",
					skillPool: 3,
					skills: [
						"Great Wolf Special➞Pack Etiquette",
						"Great Wolf Special➞Begging",
						"Great Wolf Special➞Cage-wise"
					],
					stock: "Great Wolf",
					traitPool: 2,
					traits: [
						"Great Wolf Lifepath➞Submissive",
						"Great Wolf Lifepath➞Tasting the Lash",
						"Great Wolf Lifepath➞Demented"
					],
					years: 0
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Shadow Chaser",
					physicalPool: 1,
					requirements: {},
					resources: 2,
					setting: "Slave to the Legion",
					skillPool: 8,
					skills: [
						"Any General➞Stealthy",
						"Great Wolf Special➞Scent Tracking",
						"Any Wise➞Trail-wise",
						"Great Wolf Special➞Orc-wise",
						"Any General➞Scavenging",
						"Any General➞Intimidation",
						"Great Wolf Special➞Rider Training",
						"Great Wolf Special➞Begging"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Submissive",
						"Great Wolf Lifepath➞Tasting the Lash"
					],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 1,
					name: "Wayward",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Slave to the Legion➞Shadow Chaser",
								"Great Wolf➞Slave to the Legion➞Caged and Beaten"
							]
						}
					},
					resources: 2,
					setting: "Slave to the Legion",
					skillPool: 6,
					skills: [
						"Great Wolf Special➞Pack Hunting",
						"Any General➞Foraging",
						"Any General➞Brawling",
						"Any General➞Stealthy",
						"Great Wolf Special➞Howling",
						"Great Wolf Special➞Escape Artist"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [],
					years: 0
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Bitch",
					physicalPool: 0,
					requirements: {
						limits: [
							"YEARS➞MIN➞2"
						]
					},
					resources: 4,
					setting: "Slave to the Legion",
					skillPool: 5,
					skills: [
						"Great Wolf Special➞Nursing",
						"Great Wolf Special➞Rearing",
						"Great Wolf Special➞Pup-wise",
						"Any General➞Scavenging",
						"Great Wolf Special➞Begging"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Submissive"
					],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Howling Beast",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Slave to the Legion➞Shadow Chaser"
							]
						}
					},
					resources: 1,
					setting: "Slave to the Legion",
					skillPool: 7,
					skills: [
						"Great Wolf Special➞Rider Training",
						"Great Wolf Special➞Combat Mount Training",
						"Great Wolf Special➞Savage Attack",
						"Any General➞Intimidation"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Howl of Doom"
					],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Black Destroyer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Slave to the Legion➞Howling Beast",
								"Great Wolf➞Slave to the Legion➞Ebon Tyrant"
							]
						}
					},
					resources: 2,
					setting: "Slave to the Legion",
					skillPool: 4,
					skills: [
						"Great Wolf Special➞Rider Training",
						"Great Wolf Special➞Combat Mount Training",
						"Great Wolf Special➞Savage Attack"
					],
					stock: "Great Wolf",
					traitPool: 2,
					traits: [
						"Great Wolf Special➞Fearsome Beast",
						"Great Wolf Lifepath➞Intense Hatred",
						"Great Wolf Lifepath➞Fearless",
						"Great Wolf Lifepath➞Dominant",
						"Great Wolf Lifepath➞Submissive"
					],
					years: 2
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Ebon Tyrant",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Slave to the Legion➞Shadow Chaser",
								"Great Wolf➞Slave to the Legion➞Black Destroyer"
							]
						}
					},
					resources: 5,
					setting: "Slave to the Legion",
					skillPool: 5,
					skills: [
						"Any General➞Conspicuous",
						"Any General➞Command",
						"Any General➞Skirmish Tactics Training",
						"Any General➞Strategy"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Dominant",
						"Great Wolf Lifepath➞Great Cunning"
					],
					years: 2
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 1,
					leads: [
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 1,
					name: "Dark Friend",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Slave to the Legion➞Caged and Beaten"
							]
						}
					},
					resources: 3,
					setting: "Slave to the Legion",
					skillPool: 5,
					skills: [
						"Any General➞Stealthy",
						"Great Wolf Special➞Scent Tracking",
						"Any General➞Brawling",
						"Great Wolf Special➞Rituals-wise",
						"Great Wolf Special➞Poisons-wise"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Obedient",
						"Great Wolf Lifepath➞Loyal",
						"Great Wolf Lifepath➞Fearless"
					],
					years: 3
				}
			]
		},
		"Spirit Hunter": {
			allowed: ["bwc", "msc"],
			name: "Spirit Hunter",
			short: "Hunter",
			stock: "Great Wolf",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Outcast Wolf",
						"Great Wolf➞Captive"
					],
					mentalPool: 0,
					name: "Spirit Chaser",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "AND",
							items: [
								"Great Wolf➞Outcast Wolf➞Lone Wolf",
								"Trait➞Great Wolf Lifepath➞Spirit Marked"
							]
						}
					},
					resources: 1,
					setting: "Spirit Hunter",
					skillPool: 5,
					skills: [
						"Great Wolf Spirit Hunter Song➞Primal Bark",
						"Great Wolf Special➞Pack Hunting",
						"Great Wolf Special➞Way of the First Hunter"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Spirit Howler",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Spirit Hunter➞Spirit Chaser"
							]
						}
					},
					resources: 2,
					setting: "Spirit Hunter",
					skillPool: 3,
					skills: [
						"Great Wolf Spirit Hunter Song➞Ancestral Jaw"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Ancestral Taint",
						"Great Wolf Lifepath➞Spirit Ears"
					],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Ghost of the Deeping Wood"
					],
					mentalPool: 1,
					name: "Spirit Hunter",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Spirit Hunter➞Spirit Howler"
							]
						}
					},
					resources: 3,
					setting: "Spirit Hunter",
					skillPool: 3,
					skills: [
						"Great Wolf Spirit Hunter Song➞Grandfather's Song"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Spirit Nose"
					],
					years: 2
				}
			]
		},
		"Wild Pack": {
			allowed: ["bwc", "msc"],
			name: "Wild Pack",
			short: "Pack",
			stock: "Great Wolf",
			type: "Setting",
			lifepaths: [
				{
					allowed: ["bwc", "msc"],
					born: true,
					eitherPool: 0,
					generalSkillPool: 2,
					leads: [
						"Great Wolf➞Captive"
					],
					mentalPool: 0,
					name: "Born to the Pack",
					physicalPool: 0,
					requirements: {},
					resources: 0,
					setting: "Wild Pack",
					skillPool: 2,
					skills: [
						"Great Wolf Special➞Howling"
					],
					stock: "Great Wolf",
					traitPool: 2,
					traits: [],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Captive",
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 0,
					name: "Yearling",
					physicalPool: 1,
					requirements: {
						limits: [
							"LP➞MAX➞2",
							"LP➞UNIQUE"
						]
					},
					resources: 1,
					setting: "Wild Pack",
					skillPool: 8,
					skills: [
						"Great Wolf Special➞Pack Etiquette",
						"Any General➞Stealthy",
						"Great Wolf Special➞Pack Hunting",
						"Great Wolf Special➞Scent Tracking",
						"Any General➞Foraging",
						"Any General➞Brawling"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Captive",
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 0,
					name: "Hunter",
					physicalPool: 1,
					requirements: {},
					resources: 2,
					setting: "Wild Pack",
					skillPool: 7,
					skills: [
						"Great Wolf Special➞Pack Hunting",
						"Great Wolf Special➞Hoof-wise",
						"Any General➞Intimidation",
						"Any General➞Brawling",
						"Great Wolf Special➞Begging",
						"Great Wolf Special➞Scent-wise"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Submissive"
					],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Captive",
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 1,
					name: "Dominant",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Great Wolf➞Wild Pack➞Yearling",
								"Great Wolf➞Wild Pack➞Aunt",
								"Great Wolf➞Wild Pack➞Uncle",
								"Great Wolf➞Wild Pack➞Last Wolf"
							]
						},
						texts: [
							"Dominant wolves are the pack leaders.",
							"Female Dominants of three years or older may take the Nursing skill. Males may not take this skill at all."
						]
					},
					resources: 3,
					setting: "Wild Pack",
					skillPool: 5,
					skills: [
						"Any General➞Intimidation",
						"Any General➞Command",
						"Great Wolf Special➞Nursing",
						"Any General➞Brawling"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Dominant"
					],
					years: 1
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Captive",
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 0,
					name: "Aunt",
					physicalPool: 0,
					requirements: {},
					resources: 2,
					setting: "Wild Pack",
					skillPool: 4,
					skills: [
						"Great Wolf Special➞Nursing",
						"Great Wolf Special➞Pup-wise",
						"Any General➞Scavenging",
						"Great Wolf Special➞Begging"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Submissive"
					],
					years: 0
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Captive",
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 0,
					name: "Uncle",
					physicalPool: 0,
					requirements: {},
					resources: 2,
					setting: "Wild Pack",
					skillPool: 4,
					skills: [
						"Great Wolf Special➞Rearing",
						"Great Wolf Special➞Pup-wise",
						"Any General➞Scavenging",
						"Great Wolf Special➞Begging"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Submissive"
					],
					years: 0
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 1,
					leads: [
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 1,
					name: "Elder",
					physicalPool: 0,
					requirements: {
						limits: [
							"YEARS➞MIN➞7"
						]
					},
					resources: 1,
					setting: "Wild Pack",
					skillPool: 7,
					skills: [
						"Great Wolf Special➞Begging",
						"Any Wise➞Human-wise",
						"Great Wolf Special➞Orc-wise",
						"Great Wolf Special➞Forest-wise"
					],
					stock: "Great Wolf",
					traitPool: 1,
					traits: [
						"Great Wolf Lifepath➞Submissive"
					],
					years: 2
				},
				{
					allowed: ["bwc", "msc"],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Great Wolf➞Captive",
						"Great Wolf➞Outcast Wolf"
					],
					mentalPool: 1,
					name: "Last Wolf",
					physicalPool: 0,
					requirements: {
						texts: [
							"Any wolf entering the Wild Pack setting from another setting must take Last Wolf as their first lifepath in the Wild Pack."
						]
					},
					resources: 1,
					setting: "Wild Pack",
					skillPool: 2,
					skills: [
						"Great Wolf Special➞Begging",
						"Great Wolf Special➞Pack Etiquette"
					],
					stock: "Great Wolf",
					traitPool: 2,
					traits: [
						"Great Wolf Lifepath➞Submissive",
						"Great Wolf Lifepath➞Stained"
					],
					years: 0
				}
			]
		}
	}
};
