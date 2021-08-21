export const Elf: bwgr.data.Stock = {
	agePool: [
		{ max: 25, min: 0, m: 7, p: 13 },
		{ max: 60, min: 26, m: 8, p: 13 },
		{ max: 100, min: 61, m: 9, p: 14 },
		{ max: 125, min: 101, m: 9, p: 15 },
		{ max: 160, min: 126, m: 10, p: 16 },
		{ max: 225, min: 161, m: 10, p: 17 },
		{ max: 325, min: 226, m: 11, p: 17 },
		{ max: 425, min: 326, m: 12, p: 17 },
		{ max: 525, min: 426, m: 13, p: 18 },
		{ max: 625, min: 526, m: 13, p: 19 },
		{ max: 725, min: 626, m: 14, p: 19 },
		{ max: 825, min: 726, m: 14, p: 20 },
		{ max: 925, min: 826, m: 15, p: 20 },
		{ max: 1025, min: 926, m: 15, p: 21 },
		{ max: 1125, min: 1026, m: 15, p: 22 },
		{ max: 1225, min: 1126, m: 15, p: 23 },
		{ max: 1325, min: 1226, m: 15, p: 24 },
		{ max: 99999, min: 1326, m: 16, p: 24 }
	],
	allowed: [
		"bwg",
		"bwc"
	],
	hasSetting: true,
	hasSubsetting: true,
	name: "Elf",
	stride: 8,
	settings: {
		"Wilderlands": {
			allowed: [
				"bwg",
				"bwc"
			],
			name: "Wilderlands",
			short: "Wilderlands",
			stock: "Elf",
			type: "Setting",
			lifepaths: [
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: true,
					eitherPool: 0,
					generalSkillPool: 4,
					leads: [
						"Elf➞Citadel",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Born Wilder Elf",
					physicalPool: 0,
					requirements: {},
					resources: 5,
					setting: "Wilderlands",
					skillPool: 2,
					skills: [
						"Any General➞Sing",
						"Elf Special➞Elven Script"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 20
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Rider",
					physicalPool: 1,
					requirements: {},
					resources: 3,
					setting: "Wilderlands",
					skillPool: 6,
					skills: [
						"Any General➞Riding",
						"Elf Spell Song➞The Gift of Speed",
						"Elf Spell Song➞Lay of the Horse"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Oikofugic"
					],
					years: 20
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Harvester",
					physicalPool: 1,
					requirements: {},
					resources: 5,
					setting: "Wilderlands",
					skillPool: 5,
					skills: [
						"Elf Skill Song➞Round of Harvest",
						"Any General➞Firebuilding",
						"Any General➞Animal Husbandry",
						"Any General➞Mending"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Seasoned"
					],
					years: 50
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [ 
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Gatherer",
					physicalPool: 0,
					requirements: {},
					resources: 3,
					setting: "Wilderlands",
					skillPool: 5,
					skills: [
						"Elf Skill Song➞Rhyme of the Gatherer",
						"Any Wise➞Herb-wise",
						"Any General➞Orienteering"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Rough Hands"
					],
					years: 40
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Fisherman",
					physicalPool: 0,
					requirements: {},
					resources: 8,
					setting: "Wilderlands",
					skillPool: 9,
					skills: [
						"Elf Skill Song➞Hymn of Scales and Fins",
						"Any General➞Pilot",
						"Any General➞Boatwright",
						"Any General➞Knots",
						"Any General➞Mending",
						"Any General➞Cooking",
						"Any General➞Seamanship",
						"Any General➞Rigging"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Wary"
					],
					years: 50
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Shepherd",
					physicalPool: 0,
					requirements: {},
					resources: 6,
					setting: "Wilderlands",
					skillPool: 4,
					skills: [
						"Elf Skill Song➞Song of Flocks and Herds",
						"Any General➞Climbing",
						"Any Wise➞Wolf-wise"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Never Cry Wolf"
					],
					years: 45
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Wanderer",
					physicalPool: 1,
					requirements: {},
					resources: 5,
					setting: "Wilderlands",
					skillPool: 6,
					skills: [
						"Elf Skill Song➞Song of Paths and Ways",
						"Elf Spell Song➞Air of Gates",
						"Any General➞Foraging",
						"Any Wise➞1*ANY"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 75
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Huntsman",
					physicalPool: 1,
					requirements: {},
					resources: 9,
					setting: "Wilderlands",
					skillPool: 7,
					skills: [
						"Elf Skill Song➞Call of the Wild",
						"Any General➞Javelin",
						"Any General➞Bow",
						"Any General➞Tracking",
						"Any General➞Stealthy",
						"Any General➞Observation"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Watchful"
					],
					years: 45
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Chandler",
					physicalPool: 0,
					requirements: {},
					resources: 15,
					setting: "Wilderlands",
					skillPool: 5,
					skills: [
						"Elf Spell Song➞Chant of Offering",
						"Any General➞Haggling",
						"Any General➞Conspicuous",
						"Any General➞Appraisal"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 50
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Weaver",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Wilderlands",
					skillPool: 5,
					skills: [
						"Elf Skill Song➞Weaving Way",
						"Elf Skill Song➞Threading Chant",
						"Any General➞Mending"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Fateful"
					],
					years: 50
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Forester",
					physicalPool: 1,
					requirements: {},
					resources: 5,
					setting: "Wilderlands",
					skillPool: 6,
					skills: [
						"Elf Spell Song➞Song of Arbors",
						"Any Wise➞Forest-wise",
						"Any Wise➞Tree-wise",
						"Elf Skill Song➞Song of the Eldar"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Any Character➞Stern Demeanor"
					],
					years: 90
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Vintner",
					physicalPool: 0,
					requirements: {},
					resources: 20,
					setting: "Wilderlands",
					skillPool: 7,
					skills: [
						"Elf Skill Song➞Purple Song",
						"Any Wise➞Vine-wise",
						"Any General➞Cooper",
						"Any Wise➞Vintage-wise",
						"Any Wise➞Terroir-wise"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Rarified"
					],
					years: 60
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Miller",
					physicalPool: 0,
					requirements: {},
					resources: 18,
					setting: "Wilderlands",
					skillPool: 6,
					skills: [
						"Elf Skill Song➞Grain Song",
						"Any General➞Mending",
						"Any General➞Carpentry",
						"Any Wise➞Mill-wise",
						"Any Wise➞Grain-wise"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Earthen"
					],
					years: 60
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Song Singer",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Wilderlands",
					skillPool: 6,
					skills: [
						"Elf Spell Song➞Song of Songs",
						"Elf Skill Song➞Song of Soothing",
						"Elf Spell Song➞Lament of the Westering Sun",
						"Any General➞Oratory"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Vocal"
					],
					years: 45
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Spouse",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Wilderlands",
					skillPool: 5,
					skills: [
						"Elf Skill Song➞Song of Soothing",
						"Elf Spell Song➞Rhyme of Rules",
						"Elf Skill Song➞Song of Feasting",
						"Any Wise➞Fealty-wise"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 75
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Patriarch/Matriarch",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Wilderlands➞Spouse"
							]
						}
					},
					resources: 15,
					setting: "Wilderlands",
					skillPool: 6,
					skills: [
						"Elf Spell Song➞Homesong",
						"Elf Spell Song➞Lyric of Healing",
						"Elf Skill Song➞Dignity of the Wilderlands"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Matriarchal/Patriarchal"
					],
					years: 100
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Elder",
					physicalPool: 0,
					requirements: {
						// TODO: second part of this must be turned into a limit maybe
						texts: [
							"The character must be 750 years old after taking this path or the oldest character in the group by 100 years"
						]
					},
					resources: 30,
					setting: "Wilderlands",
					skillPool: 5,
					skills: [
						"Elf Spell Song➞Verse of Decision",
						"Elf Spell Song➞Council-Caller"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Elf Lifepath➞Wise Aphorisms"
					],
					years: 150
				}
			]
		},
		"Citadel": {
			allowed: [
				"bwg",
				"bwc"
			],
			name: "Citadel",
			short: "Citadel",
			stock: "Elf",
			type: "Setting",
			lifepaths: [
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: true,
					eitherPool: 0,
					generalSkillPool: 5,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Citadel Born",
					physicalPool: 0,
					requirements: {},
					resources: 7,
					setting: "Citadel",
					skillPool: 2,
					skills: [
						"Elf Special➞Elven Script",
						"Any General➞Sing"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 20
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Servitor",
					physicalPool: 0,
					requirements: {},
					resources: 5,
					setting: "Citadel",
					skillPool: 5,
					skills: [
						"Any General➞Hauling",
						"Any General➞Observation",
						"Any Wise➞Citadel-wise",
						"Any Wise➞Althing-wise"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Any Character➞Humility",
						"Elf Lifepath➞Lifting Heavy Things"
					],
					years: 20
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Wanderer",
					physicalPool: 1,
					requirements: {},
					resources: 5,
					setting: "Citadel",
					skillPool: 6,
					skills: [
						"Elf Skill Song➞Song of Paths and Ways",
						"Elf Spell Song➞Air of Gates",
						"Any General➞Scavenging",
						"Any General➞Streetwise"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Lonesome"
					],
					years: 75
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Song Singer",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Citadel",
					skillPool: 5,
					skills: [
						"Any General➞Sing",
						"Elf Spell Song➞Song of Songs",
						"Elf Skill Song➞Song of Soothing",
						"Elf Spell Song➞Lament of Stars"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Voice in the Crowd"
					],
					years: 25
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Student",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Citadel",
					skillPool: 6,
					skills: [
						"Elf Skill Song➞Lyric of Law",
						"Elf Skill Song➞Ballad of History",
						"Any General➞Etiquette",
						"Any General➞Oratory"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Educated"
					],
					years: 20
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Clothier",
					physicalPool: 0,
					requirements: {},
					resources: 20,
					setting: "Citadel",
					skillPool: 7,
					skills: [
						"Elf Skill Song➞Threading Chant",
						"Any General➞Embroidery",
						"Elf Skill Song➞Leathercraft",
						"Elf Skill Song➞Weaving Way"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Well Dressed"
					],
					years: 75
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Soldier-Protector",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Citadel➞Wanderer",
								"Elf➞Citadel➞Seafarer",
								"Elf➞Wilderlands➞Spouse",
								"Elf➞Wilderlands➞Rider",
								"Elf➞Wilderlands➞Huntsman",
								"Elf➞Etharch➞1*ANY",
								"Elf➞Protector➞1*ANY"
							]
						}
					},
					resources: 10,
					setting: "Citadel",
					skillPool: 8,
					skills: [
						"Elf Spell Song➞Alarm",
						"Any General➞Armor Training",
						"Any General➞Shield Training",
						"Any General➞Sword",
						"Any General➞Bow",
						"Any General➞Knives",
						"Any General➞Fletcher",
						"Any General➞Mending"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Dutiful"
					],
					years: 5
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Seafarer",
					physicalPool: 1,
					requirements: {},
					resources: 5,
					setting: "Citadel",
					skillPool: 9,
					skills: [
						"Elf Spell Song➞Weathersong",
						"Elf Skill Song➞Rope Chant",
						"Elf Skill Song➞Rhyme of the Mariner",
						"Any General➞Pilot",
						"Any General➞Seamanship",
						"Any General➞Spear"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Call of the Sea",
						"Any Die➞Rower"
					],
					years: 50
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Sea Captain",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Citadel➞Seafarer",
								"Elf➞Citadel➞Adjutant",
								"Elf➞Protector➞Lieutenant",
								"Elf➞Etharch➞Sword Singer",
								"Elf➞Protector➞Sword Singer"
							]
						}
					},
					resources: 15,
					setting: "Citadel",
					skillPool: 8,
					skills: [
						"Elf Skill Song➞Slip of Currents",
						"Elf Spell Song➞Supplication to the Wind",
						"Any General➞Command",
						"Any General➞Oratory",
						"Any General➞Sword"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 100
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Novice",
					physicalPool: 1,
					requirements: {},
					resources: 10,
					setting: "Citadel",
					skillPool: 4,
					skills: [
						"Any General➞Mending",
						"Any Wise➞Craft-wise",
						"Any Wise➞Elven Artifact-wise"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Any Die➞Loyal"
					],
					years: 10
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Shaper",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Citadel➞Novice"
							]
						}
					},
					resources: 15,
					setting: "Citadel",
					skillPool: 6,
					skills: [
						"Elf Skill Song➞Woodcraft",
						"Elf Skill Song➞Stonecraft",
						"Elf Skill Song➞Smithcraft"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Long Fingered"
					],
					years: 35
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Jeweler",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Citadel➞Shaper"
							]
						}
					},
					resources: 20,
					setting: "Citadel",
					skillPool: 5,
					skills: [
						"Elf Skill Song➞Jewelcraft",
						"Elf Skill Song➞Gemcraft",
						"Any General➞Appraisal"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Any Character➞Patient",
						"Any Call-on➞Nimble"
					],
					years: 75
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Artisan",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Citadel➞Shaper"
							]
						}
					},
					resources: 40,
					setting: "Citadel",
					skillPool: 6,
					skills: [
						"Elf Skill Song➞Archcraft",
						"Elf Skill Song➞Starcraft",
						"Elf Spell Song➞Canticle of Years",
						"Elf Skill Song➞Antiphon Union Training"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 150
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Keel Master",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Citadel➞Shaper"
							]
						}
					},
					resources: 25,
					setting: "Citadel",
					skillPool: 6,
					skills: [
						"Any General➞Shipwright",
						"Any Wise➞Ship-wise",
						"Any General➞Carving"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Any Character➞Perfectionist"
					],
					years: 100
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Artist",
					physicalPool: 0,
					requirements: {},
					resources: 12,
					setting: "Citadel",
					skillPool: 5,
					skills: [
						"Elf Skill Song➞Song of Form",
						"Any General➞Painting"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Any Character➞Appreciation for Beauty"
					],
					years: 60
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Bard",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Etharch➞Sword Singer",
								"Elf➞Protector➞Sword Singer"
							]
						}
					},
					resources: 20,
					setting: "Citadel",
					skillPool: 11,
					skills: [
						"Elf Spell Song➞Song of Merriment",
						"Elf Spell Song➞Lament of Mourning",
						"Elf Spell Song➞Verse of Friendship",
						"Elf Spell Song➞Tract of Enmity",
						"Any General➞Oratory",
						"Any General➞Conspicuous",
						"Any General➞Lyre",
						"Any General➞Flute"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 65
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Adjutant",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Protector➞Herald",
								"Elf➞Etharch➞Attendant",
								"Elf➞Etharch➞Student",
								"Elf➞Wilderlands➞Spouse"
							]
						}
					},
					resources: 20,
					setting: "Citadel",
					skillPool: 7,
					skills: [
						"Elf Skill Song➞Code of Citadels",
						"Any General➞Etiquette",
						"Any General➞Administration",
						"Any Wise➞Etharch-wise",
						"Any Wise➞Citadel-wise",
						"Any Wise➞Protector-wise"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Elf Lifepath➞Organized",
						"Any Character➞Patient"
					],
					years: 75
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Loremaster",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Citadel➞Bard",
								"Elf➞Citadel➞Adjutant",
								"Elf➞Etharch➞Steward",
								"Elf➞Wilderlands➞Patriarch/Matriarch"
							]
						}
					},
					resources: 25,
					setting: "Citadel",
					skillPool: 10,
					skills: [
						"Any General➞Ancient and Obscure History",
						"Any General➞Research",
						"Elf Skill Song➞Ballad of History",
						"Elf Skill Song➞Lyric of Law",
						"Elf Spell Song➞Canticle of Years",
						"Elf Spell Song➞Rhyme of Tongues"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 200
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Protector",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Althing",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Wilderlands➞Patriarch/Matriarch",
								"Elf➞Citadel➞Loremaster",
								"Elf➞Etharch➞Steward",
								"Elf➞Citadel➞Bard",
								"Elf➞Citadel➞Artisan",
								"Elf➞Citadel➞Sea Captain",
								"Elf➞Protector➞Captain"
							]
						}
					},
					resources: 100,
					setting: "Citadel",
					skillPool: 10,
					skills: [
						"Elf Spell Song➞Council-Caller",
						"Elf Spell Song➞Song of Silence",
						"Any General➞Persuasion",
						"Any General➞Soothing Platitudes",
						"Any General➞Ugly Truth",
						"Any General➞Administration"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Elf Lifepath➞Servant of the Citadel"
					],
					years: 250
				}
			]
		},
		"Etharch": {
			allowed: [
				"bwg",
				"bwc"
			],
			name: "Etharch",
			short: "Etharch",
			stock: "Elf",
			type: "Setting",
			lifepaths: [
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: true,
					eitherPool: 0,
					generalSkillPool: 5,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Born Etharch",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Etharch",
					skillPool: 2,
					skills: [
						"Elf Special➞Elven Script",
						"Any General➞Etiquette",
						"Any General➞Sing"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Elf Lifepath➞Etharchal",
						"Elf Lifepath➞Fêa",
						"Elf Lifepath➞Aman"
					],
					years: 25
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Student",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Etharch",
					skillPool: 9,
					skills: [
						"Elf Skill Song➞Ages of the Etharch",
						"Elf Skill Song➞Lyric of Law",
						"Elf Skill Song➞Ballad of History",
						"Any General➞Oratory",
						"Any General➞Calligraphy",
						"Elf Skill Song➞Song of the Eldar"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Learned"
					],
					years: 25
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Attendant",
					physicalPool: 1,
					requirements: {},
					resources: 15,
					setting: "Etharch",
					skillPool: 4,
					skills: [
						"Any General➞Etiquette",
						"Any General➞Riding",
						"Any General➞Brawling",
						"Any General➞Sword"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Elf Lifepath➞Calm Demeanor"
					],
					years: 25
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Second",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Etharch➞Attendant",
								"Elf➞Protector➞Bowyer",
								"Elf➞Protector➞Spearbearer",
								"Elf➞Citadel➞Seafarer",
								"Elf➞Citadel➞Soldier-Protector"
							]
						}
					},
					resources: 15,
					setting: "Etharch",
					skillPool: 8,
					skills: [
						"Elf Spell Song➞Song of Bonding",
						"Any General➞Sword",
						"Any General➞Knives",
						"Any General➞Bow",
						"Any General➞Mending",
						"Any General➞Riding",
						"Any General➞Mounted Combat Training"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Elf Lifepath➞Lesson of One",
						"Any Character➞Patient"
					],
					years: 35
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Sword Singer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Etharch➞Second",
								"Elf➞Protector➞Lancer",
								"Elf➞Protector➞Lieutenant"
							]
						}
					},
					resources: 10,
					setting: "Etharch",
					skillPool: 10,
					skills: [
						"Elf Spell Song➞Song of the Sword",
						"Any General➞Sword",
						"Any General➞Armor Training",
						"Any General➞Shield Training",
						"Any General➞Knives",
						"Any General➞Brawling"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Elf Lifepath➞Fealty to the Fêa",
						"Any Die➞Cool Headed"
					],
					years: 40
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Steward",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Protector➞Lieutenant",
								"Elf➞Citadel➞Artisan",
								"Elf➞Citadel➞Bard",
								"Elf➞Citadel➞Loremaster",
								"Elf➞Citadel➞Adjutant",
								"Elf➞Citadel➞Sea Captain",
								"Elf➞Wilderlands➞Patriarch/Matriarch"
							]
						}
					},
					resources: 20,
					setting: "Etharch",
					skillPool: 8,
					skills: [
						"Any General➞Estate Management",
						"Any General➞Accounting",
						"Any General➞Etiquette",
						"Any Wise➞Estate-wise",
						"Any Wise➞Intrigue-wise"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 110
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 1,
					generalSkillPool: 4,
					leads: [
						"Elf➞Citadel",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Prince/Princess",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "AND",
							items: [
								"Trait➞Elf Lifepath➞Fêa",
								{
									type: "OR",
									items: [
										"Elf➞Etharch➞Sword Singer",
										"Elf➞Protector➞Sword Singer"
									]
								}
							]
						}
					},
					resources: 100,
					setting: "Etharch",
					skillPool: 6,
					skills: [
						"Elf Skill Song➞Song of Lordship",
						"Elf Spell Song➞Voice of Ages"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Elf Lifepath➞Prince of the Blood"
					],
					years: 150
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 4,
					leads: [
						"Elf➞Citadel",
						"Elf➞Protector",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Etharch",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "AND",
							items: [
								"Trait➞Elf Lifepath➞Aman",
								{
									type: "OR",
									items: [
										"Elf➞Citadel➞Loremaster",
										"Elf➞Etharch➞Prince/Princess"
									]
								}
							]
						}
					},
					resources: 200,
					setting: "Etharch",
					skillPool: 8,
					skills: [
						"Elf Spell Song➞Council-Caller",
						"Elf Skill Song➞Voice of Thunder",
						"Elf Spell Song➞Doom Sayer",
						"Elf Spell Song➞Discerner"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Elf Lifepath➞Lord of Ages"
					],
					years: 250
				}
			]
		},
		"Protector": {
			allowed: [
				"bwg",
				"bwc"
			],
			name: "Protector",
			short: "Protector",
			stock: "Elf",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Rider",
					physicalPool: 1,
					requirements: {},
					resources: 8,
					setting: "Protector",
					skillPool: 6,
					skills: [
						"Any General➞Riding",
						"Any General➞Animal Husbandry",
						"Elf Spell Song➞The Gift of Speed",
						"Elf Spell Song➞Lay of the Horse"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Smells Like a Horse"
					],
					years: 15
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Herald",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Protector",
					skillPool: 8,
					skills: [
						"Elf Skill Song➞Paean of Deeds",
						"Elf Spell Song➞Mornsong",
						"Elf Spell Song➞Evensong",
						"Elf Spell Song➞Recitation of Ages",
						"Elf Special➞Silver Trumpet"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Any Die➞Stoic"
					],
					years: 35
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Soother",
					physicalPool: 0,
					requirements: {},
					resources: 10,
					setting: "Protector",
					skillPool: 6,
					skills: [
						"Elf Spell Song➞Lyric of Healing",
						"Elf Skill Song➞Song of Soothing",
						"Elf Spell Song➞Doom of Strength",
						"Any General➞Foraging"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 30
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Ranger",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Wilderlands➞Forester",
								"Elf➞Wilderlands➞Wanderer",
								"Elf➞Protector➞Bowyer",
								"Elf➞Etharch➞Second"
							]
						}
					},
					resources: 10,
					setting: "Protector",
					skillPool: 10,
					skills: [
						"Any General➞Observation",
						"Any General➞Stealthy",
						"Any General➞Bow",
						"Any General➞Foraging",
						"Elf Skill Song➞Rhyme of the Pathfinder",
						"Elf Skill Song➞Song of Soothing",
						"Elf Spell Song➞Threne of the Chameleon",
						"Elf Spell Song➞Lyric of Healing"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Grey Mantle",
						"Any Die➞Sprinter"
					],
					years: 45
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Bowyer",
					physicalPool: 1,
					requirements: {},
					resources: 8,
					setting: "Protector",
					skillPool: 5,
					skills: [
						"Elf Skill Song➞Bowcraft",
						"Any General➞Mending",
						"Any General➞Bow",
						"Any Wise➞Bow-wise"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Circumspect"
					],
					years: 20
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Spearbearer",
					physicalPool: 1,
					requirements: {},
					resources: 8,
					setting: "Protector",
					skillPool: 8,
					skills: [
						"Elf Skill Song➞Spearcraft",
						"Any General➞Spear",
						"Any General➞Armor Training",
						"Any General➞Formation Fighting Training"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 20
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Sword Singer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Etharch➞Second",
								"Elf➞Citadel➞Soldier-Protector",
								"Elf➞Protector➞Soother",
								"Elf➞Wilderlands➞Spouse",
								"Elf➞Protector➞Spearbearer"
							]
						}
					},
					resources: 10,
					setting: "Protector",
					skillPool: 10,
					skills: [
						"Any General➞Sword",
						"Any General➞Armor Training",
						"Any General➞Shield Training",
						"Any General➞Knives",
						"Any General➞Brawling",
						"Elf Spell Song➞Song of the Sword"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Elf Lifepath➞Sword of the White Towers"
					],
					years: 30
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Citadel",
						"Elf➞Wilderlands",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Outrider",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Protector➞Rider"
							]
						}
					},
					resources: 10,
					setting: "Protector",
					skillPool: 9,
					skills: [
						"Any General➞Bow",
						"Any General➞Spear",
						"Any General➞Observation",
						"Any Wise➞Trails-wise",
						"Any General➞Mounted Combat Bowman Training",
						"Any General➞Animal Husbandry",
						"Any General➞Mending",
						"Any General➞Stealthy"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Daring"
					],
					years: 20
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Lancer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Protector➞Outrider",
								"Elf➞Etharch➞Second"
							]
						}
					},
					resources: 12,
					setting: "Protector",
					skillPool: 10,
					skills: [
						"Elf Spell Song➞Song of Burning Bright",
						"Elf Spell Song➞Lament for the Fallen",
						"Any General➞Lance",
						"Any General➞Mounted Combat Training",
						"Any General➞Shield Training",
						"Any General➞Armor Training"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [],
					years: 50
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Lieutenant",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Protector➞Sword Singer",
								"Elf➞Etharch➞Sword Singer",
								"Elf➞Protector➞Lancer",
								"Elf➞Citadel➞Sea Captain",
								"Elf➞Protector➞2*Bowyer",
								"Elf➞Protector➞2*Spearbearer"
							]
						}
					},
					resources: 10,
					setting: "Protector",
					skillPool: 7,
					skills: [
						"Elf Skill Song➞Paean of Deeds",
						"Any General➞Command",
						"Any General➞Sword",
						"Any General➞Shield Training",
						"Any General➞Formation Fighting Training"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Elf Lifepath➞Ear to the Ground"
					],
					years: 65
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Captain",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Protector➞Lieutenant",
								"Elf➞Etharch➞Prince/Princess",
								"Elf➞Citadel➞Sea Captain",
								"Elf➞Etharch➞Steward",
								"Elf➞Protector➞2*Sword Singer",
								"Elf➞Etharch➞2*Sword Singer"
							]
						}
					},
					resources: 15,
					setting: "Protector",
					skillPool: 9,
					skills: [
						"Any General➞Oratory",
						"Any General➞Sword",
						"Any General➞Command",
						"Any General➞Tactics",
						"Any General➞Formation Fighting Training",
						"Elf Spell Song➞Monody of the March",
						"Elf Skill Song➞Silent Fury",
						"Elf Spell Song➞The Hymn of Victory"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Elf Lifepath➞Sworn to the Lord Protector"
					],
					years: 85
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Armorer",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Citadel➞Shaper",
								"Elf➞Protector➞Bladesmith"
							]
						}
					},
					resources: 15,
					setting: "Protector",
					skillPool: 7,
					skills: [
						"Any General➞Armorer",
						"Any General➞Etching",
						"Any General➞Sewing",
						"Any General➞Tanner",
						"Elf Skill Song➞Antiphon Union Training"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Patient"
					],
					years: 90
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Path of Spite"
					],
					mentalPool: 0,
					name: "Bladesmith",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Protector➞Armorer",
								"Elf➞Citadel➞Shaper",
								"Elf➞Protector➞Bowyer",
								"Elf➞Protector➞Spearbearer"
							]
						}
					},
					resources: 15,
					setting: "Protector",
					skillPool: 5,
					skills: [
						"Elf Skill Song➞Riddle of Steel",
						"Any General➞Etching",
						"Any Wise➞Elven Blade-wise"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Elf Lifepath➞Acute"
					],
					years: 80
				},
				{
					allowed: [
						"bwg",
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Elf➞Wilderlands",
						"Elf➞Citadel",
						"Elf➞Etharch",
						"Elf➞Path of Spite"
					],
					mentalPool: 1,
					name: "Lord Protector",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Protector➞Captain",
								"Elf➞Etharch➞Prince/Princess"
							]
						}
					},
					resources: 60,
					setting: "Protector",
					skillPool: 10,
					skills: [
						"Elf Spell Song➞Strain of Far Sight",
						"Elf Spell Song➞Anthem of Courage",
						"Elf Spell Song➞Ballad of Rage",
						"Any General➞Command",
						"Any General➞Formation Fighting Training",
						"Any General➞Administration",
						"Any General➞Logistics",
						"Any General➞Strategy"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Elf Lifepath➞Sworn to Protect"
					],
					years: 125
				}
			]
		},
		"Path of Spite": {
			allowed: [
				"bwc"
			],
			name: "Path of Spite",
			short: "Spite",
			stock: "Elf",
			type: "Subsetting",
			lifepaths: [
				{
					allowed: [
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Griever",
					physicalPool: 0,
					requirements: {
						limits: [
							"GRIEF➞MIN➞3"
						]
					},
					resources: 0,
					setting: "Path of Spite",
					skillPool: 3,
					skills: [
						"Dark Elf Spell Song➞Sorrow of Truth",
						"Any Wise➞Dark Elf-wise"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Dark Elf Lifepath➞Spite"
					],
					years: 3
				},
				{
					allowed: [
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Wastrel",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Path of Spite➞Griever"
							]
						}
					},
					resources: 3,
					setting: "Path of Spite",
					skillPool: 6,
					skills: [
						"Any General➞Scavenging",
						"Any General➞Brawling",
						"Any Wise➞Forest-wise",
						"Any Wise➞Wasteland-wise",
						"Any Wise➞Animal-wise"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Dark Elf Lifepath➞Filthy",
						"Dark Elf Lifepath➞Feral"
					],
					years: 25
				},
				{
					allowed: [
						"bwc"
					],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Thief",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Path of Spite➞Griever"
							]
						}
					},
					resources: 6,
					setting: "Path of Spite",
					skillPool: 6,
					skills: [
						"Any General➞Lock Pick",
						"Any General➞Stealthy",
						"Any General➞Climbing",
						"Any General➞Sleight of Hand",
						"Dark Elf Spell Song➞Dirge of Night"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Dark Elf Lifepath➞Thief"
					],
					years: 18
				},
				{
					allowed: [
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Assassin",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Path of Spite➞Griever"
							]
						}
					},
					resources: 6,
					setting: "Path of Spite",
					skillPool: 7,
					skills: [
						"Any General➞Intimidation",
						"Any General➞Poisons",
						"Any General➞Knives",
						"Dark Elf Spell Song➞Keen of Terror"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Murderous",
						"Any Character➞Callous",
						"Any Die➞Cold Blooded"
					],
					years: 15
				},
				{
					allowed: [
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Stalker",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Path of Spite➞Griever"
							]
						}
					},
					resources: 8,
					setting: "Path of Spite",
					skillPool: 8,
					skills: [
						"Any General➞Hunting",
						"Any Wise➞Elf-wise",
						"Any General➞Tracking",
						"Any General➞Trapper",
						"Any General➞Observation",
						"Any General➞Stealthy",
						"Any General➞Throwing",
						"Any General➞Javelin",
						"Dark Elf Spell Song➞Supplication to Shadows"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Dark Elf Lifepath➞Saturnine"
					],
					years: 20
				},
				{
					allowed: [
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Deciever",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Path of Spite➞Griever"
							]
						}
					},
					resources: 10,
					setting: "Path of Spite",
					skillPool: 7,
					skills: [
						"Any General➞Sleight of Hand",
						"Any General➞Disguise",
						"Any General➞Inconspicuous",
						"Dark Elf Spell Song➞Rhyme of the Unraveler"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Dark Elf Lifepath➞Deceptive"
					],
					years: 35
				},
				{
					allowed: [
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 1,
					name: "Liar",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Path of Spite➞Griever"
							]
						}
					},
					resources: 8,
					setting: "Path of Spite",
					skillPool: 6,
					skills: [
						"Any General➞Falsehood",
						"Any General➞Soothing Platitudes",
						"Any General➞Persuasion",
						"Dark Elf Spell Song➞Twisted Tongue"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Any Character➞Compulsive Liar"
					],
					years: 25
				},
				{
					allowed: [
						"bwc"
					],
					born: false,
					eitherPool: 1,
					generalSkillPool: 0,
					leads: [],
					mentalPool: 0,
					name: "Siren",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Path of Spite➞Assassin",
								"Elf➞Path of Spite➞Deciever",
								"Elf➞Path of Spite➞Liar"
							]
						}
					},
					resources: 20,
					setting: "Path of Spite",
					skillPool: 9,
					skills: [
						"Any General➞Seduction",
						"Any General➞Etiquette",
						"Any General➞Persuasion",
						"Any General➞Soothing Platitudes",
						"Any Wise➞Gossip-wise",
						"Dark Elf Spell Song➞Fugue of Discord",
						"Dark Elf Skill Song➞Litany of Fools"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Any Call-on➞Charismatic",
						"Dark Elf Lifepath➞Femme Fatale/Homme Fatal"
					],
					years: 55
				},
				{
					allowed: [
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 0,
					leads: [
						"Orc➞Servant of the Dark Blood"
					],
					mentalPool: 1,
					name: "Eremite",
					physicalPool: 0,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Path of Spite➞Siren",
								"Elf➞Path of Spite➞Wastrel",
								"Elf➞Path of Spite➞Stalker"
							]
						}
					},
					resources: 15,
					setting: "Path of Spite",
					skillPool: 12,
					skills: [
						"Any General➞Philosophy",
						"Any General➞Ugly Truth",
						"Any General➞Obscure History",
						"Any General➞Symbology",
						"Any General➞Strategy",
						"Any Wise➞Elf-wise",
						"Any Wise➞Orc-wise",
						"Any Wise➞Dwarf-wise",
						"Any Wise➞Human-wise",
						"Dark Elf Spell Song➞Paean to the Dark Fire"
					],
					stock: "Elf",
					traitPool: 2,
					traits: [
						"Any Character➞Remote",
						"Dark Elf Lifepath➞Cold"
					],
					years: 150
				},
				{
					allowed: [
						"bwc"
					],
					born: false,
					eitherPool: 0,
					generalSkillPool: 5,
					leads: [],
					mentalPool: 0,
					name: "Recluse",
					physicalPool: 1,
					requirements: {
						conditions: {
							type: "OR",
							items: [
								"Elf➞Path of Spite➞Eremite",
								"Elf➞Path of Spite➞3*ANY"
							]
						}
					},
					resources: 25,
					setting: "Path of Spite",
					skillPool: 2,
					skills: [
						"Any General➞Ancient History",
						"Any Wise➞Dwarf-wise",
						"Any Wise➞Elven Politics-wise",
						"Dark Elf Spell Song➞Cut of the Quickened Mind"
					],
					stock: "Elf",
					traitPool: 1,
					traits: [
						"Dark Elf Lifepath➞Vengeful"
					],
					years: 225
				}
			]
		}
	}
};
