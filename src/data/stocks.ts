export const Stocks: bwgr.data.Stocks = {
	"Dwarf": {
		agePool: [[20, 0, 6, 13], [30, 21, 7, 13], [50, 31, 7, 14], [76, 51, 8, 15], [111, 77, 8, 16], [151, 112, 9, 16], [199, 152, 9, 17], [245, 200, 10, 18], [300, 246, 11, 17], [345, 301, 11, 16], [396, 346, 12, 15], [445, 397, 11, 14], [525, 446, 11, 13], [526, 99999, 10, 12]],
		allowed: ["bwg", "bwc"],
		hasSetting: true,
		hasSubsetting: true,
		name: "Dwarf",
		stride: 6,
		settings: {
			"Artificer": {
				allowed: ["bwg", "bwc"],
				name: "Artificer",
				stock: "Dwarf",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 3,
						leads: ["Dwarf->Clansman"],
						mentalPool: 0,
						name: "Born Artificer",
						physicalPool: 0,
						resources: 15,
						setting: "Artificer",
						skillPool: 2,
						skills: ["Dwarf Special->Dwarven Rune Script"],
						stock: "Dwarf",
						traitPool: 1,
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Noble", "Dwarf->Host", "Dwarf->Guilder"],
						mentalPool: 0,
						name: "Ardent",
						physicalPool: 1,
						resources: 15,
						setting: "Artificer",
						skillPool: 4,
						skills: ["Any General->Firebuilding", "Any General->Soothing Platitudes", "Any Wise->Soot-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Character->Humility", "Any Character->Hard Work"],
						years: 21
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Host", "Dwarf->Outcast"],
						mentalPool: 0,
						name: "Tyro Artificer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Dwarf->Artificer->Ardent",
								"Dwarf->Guilder->Journeyman"
							]
						},
						resources: 20,
						setting: "Artificer",
						skillPool: 5,
						skills: ["Dwarf Art->Black-Metal Artifice", "Any General->Mending", "Any Wise->Dwarven Arts-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Determined"],
						years: 21
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Outcast", "Dwarf->Host"],
						mentalPool: 0,
						name: "Artificer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Dwarf->Artificer->Tyro Artificer",
								"Dwarf->Guilder->Craftsman"
							]
						},
						resources: 35,
						setting: "Artificer",
						skillPool: 8,
						skills: ["Dwarf Art->Stone Artifice", "Any General->Etching", "Dwarf Art->White-Metal Artifice", "Dwarf Art->Gem Artifice"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Stolid"],
						years: 30
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Dwarf->Outcast", "Dwarf->Host", "Dwarf->Noble", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Mask Bearer",
						physicalPool: 0,
						requirements: {
							AND: [
								"Dwarf->Artificer->Artificer"
							]
						},
						resources: 50,
						setting: "Artificer",
						skillPool: 6,
						skills: ["Any General->Jargon", "Any Wise->Fire and Steel-wise", "Dwarf Art->War Art"],
						stock: "Dwarf",
						traitPool: 1,
						years: 55
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Outcast", "Dwarf->Host"],
						mentalPool: 1,
						name: "Master of Arches",
						physicalPool: 0,
						requirements: {
							AND: [
								"Dwarf->Artificer->Artificer"
							]
						},
						resources: 75,
						setting: "Artificer",
						skillPool: 8,
						skills: ["Dwarf Art->Lithography", "Any General->Sculpture", "Dwarf Art->Hallmaster", "Any General->Symbology", "Any General->Etiquette"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Character->Confident", "Any Character->Patient"],
						years: 75
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Outcast", "Dwarf->Host"],
						mentalPool: 1,
						name: "Master of Forges",
						physicalPool: 0,
						requirements: {
							AND: [
								"Dwarf->Artificer->Mask Bearer"
							]
						},
						resources: 75,
						setting: "Artificer",
						skillPool: 6,
						skills: ["Dwarf Art->Forge Artifice", "Any General->Appraisal", "Any General->Engineering", "Any General->Command", "Any Wise->Maker's Mark-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Callon->Meticulous", "Dwarf Special->Estimation"],
						years: 75
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Outcast", "Dwarf->Host"],
						mentalPool: 1,
						name: "Master Engraver",
						physicalPool: 0,
						requirements: {
							AND: [
								"Dwarf->Artificer->Master of Arches"
							]
						},
						resources: 60,
						setting: "Artificer",
						skillPool: 4,
						skills: ["Dwarf Art->Reason of Old Stone", "Any Wise->Stone-wise", "Any Wise->Mountain-wise"],
						stock: "Dwarf",
						traitPool: 1,
						years: 100
					},
				]
			},
			"Clansman": {
				allowed: ["bwg", "bwc"],
				name: "Clansman",
				stock: "Dwarf",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 3,
						leads: ["Dwarf->Guilder"],
						mentalPool: 0,
						name: "Born Clansman",
						physicalPool: 0,
						resources: 10,
						setting: "Clansman",
						skillPool: 0,
						stock: "Dwarf",
						traitPool: 1,
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Host"],
						mentalPool: 0,
						name: "Tender",
						physicalPool: 1,
						resources: 7,
						setting: "Clansman",
						skillPool: 5,
						skills: ["Any General->Farming", "Any Wise->Crowd-wise", "Any Wise->Hold-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Character->Cursing"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Host"],
						mentalPool: 0,
						name: "Herder",
						physicalPool: 1,
						resources: 9,
						setting: "Clansman",
						skillPool: 5,
						skills: ["Any General->Animal Husbandry", "Any Wise->Forest-wise", "Dwarf Special->Fence Building", "Any General->Climbing"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Callon->Booming Voice", "Dwarf Lifepath->Affinity for Sheep and Goats"],
						years: 15
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Outcast", "Dwarf->Templar"],
						mentalPool: 1,
						name: "Tinkerer",
						physicalPool: 0,
						resources: 15,
						setting: "Clansman",
						skillPool: 4,
						skills: ["Dwarf Special->Stuff-wise", "Any General->Mending", "Any General->Scavenging"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Character->Curious", "Dwarf Lifepath->Tinkerer"],
						years: 35
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Host", "Dwarf->Guilder", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Delver",
						physicalPool: 1,
						resources: 10,
						setting: "Clansman",
						skillPool: 4,
						skills: ["Any Wise->Tunnel-wise", "Any Wise->Genius-wise", "Dwarf Art->Excavation"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Dwarf Lifepath->Deep Sense"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Host"],
						mentalPool: 1,
						name: "Miller",
						physicalPool: 0,
						resources: 30,
						setting: "Clansman",
						skillPool: 6,
						skills: ["Dwarf Special->Grain Appraisal", "Any General->Miller", "Any General->Mending", "Any General->Brewer", "Any Wise->Graybeard-wise"],
						stock: "Dwarf",
						traitPool: 1,
						years: 30
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Host", "Dwarf->Outcast"],
						mentalPool: 0,
						name: "Brewer",
						physicalPool: 1,
						requirements: {
							OR:
								[
									"Dwarf->Clansman->Miller",
									"Dwarf->Clansman->Longbeard",
									"Dwarf->Noble->Seneschal",
									"Dwarf->Host->Captain",
									"Dwarf->Outcast->Drunk"
								]
						},
						resources: 40,
						setting: "Clansman",
						skillPool: 5,
						skills: ["Dwarf Special->Beer Appraisal", "Dwarf Art->Nogger", "Any General->Miller", "Any Wise->Beer-wise"],
						stock: "Dwarf",
						traitPool: 1,
						years: 40
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Host", "Dwarf->Artificer", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Foreman",
						physicalPool: 1,
						requirements: {
							OR: [
								"Dwarf->Clansman->Delver",
								"Dwarf->Artificer->Ardent",
								"Dwarf->Host->Engineer"
							]
						},
						resources: 25,
						setting: "Clansman",
						skillPool: 5,
						skills: ["Any Wise->Personal Effects-wise", "Any Wise->Vintage-wise", "Any General->Engineering"],
						stock: "Dwarf",
						traitPool: 1,
						years: 35
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Host", "Dwarf->Outcast"],
						mentalPool: 1,
						name: "Husband/Wife",
						physicalPool: 0,
						resources: 18,
						requirements: {
							LIMIT: [
								"NOT->LP*2"
							]
						},
						setting: "Clansman",
						skillPool: 5,
						skills: ["Any Wise->Contract-wise", "Any Wise->Family Secrets-wise", "Any General->Haggling", "Any General->Soothing Platitudes"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Dwarf Lifepath->Dispute-Settler", "Any Character->Pragmatic Outlook"],
						years: 70
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Host", "Dwarf->Guilder", "Dwarf->Templar"],
						mentalPool: 1,
						name: "Longbeard",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Templar->Palisade",
								"Dwarf->Clansman->Foreman",
								"Dwarf->Host->Graybeard",
								"Dwarf->Artificer->Artificer",
								"Dwarf->Guilder->Trader",
								"Dwarf->Noble->Senechal",
								"Dwarf->Outcast->Adventurer",
								"Dwarf->Clansman->Husband/Wife"
							]
						},
						resources: 30,
						setting: "Clansman",
						skillPool: 6,
						skills: ["Dwarf Art->Coarse Persuasion", "Any General->Ugly Truth", "Any Wise->Handwriting-wise", "Any Wise->Hypocritical Bastards-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Character->Floksy Wisdom", "Dwarf Lifepath->Oathswearer"],
						years: 77
					}
				]
			},
			"Guilder": {
				allowed: ["bwg", "bwc"],
				name: "Guilder",
				stock: "Dwarf",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 4,
						leads: ["Dwarf->Clansman"],
						mentalPool: 0,
						name: "Born Guilder",
						physicalPool: 0,
						resources: 5,
						setting: "Guilder",
						skillPool: 0,
						stock: "Dwarf",
						traitPool: 1,
						years: 21
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Host", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Wordbearer",
						physicalPool: 1,
						resources: 10,
						setting: "Guilder",
						skillPool: 5,
						skills: ["Any Wise->Hoof-wise", "Any Wise->Scutwork-wise", "Any General->Oratory", "Dwarf Special->Clan History"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Quirky", "Dwarf Lifepath->Iron Memory", "Dwarf Lifepath->Quick-Step"],
						years: 15
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Host"],
						mentalPool: 0,
						name: "Hauler",
						physicalPool: 1,
						resources: 7,
						setting: "Guilder",
						skillPool: 5,
						skills: ["Any General->Hauling", "Any Wise->Whip-wise", "Any Wise->Cave-In-wise", "Any Wise->Rumor-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Dwarf Lifepath->Lifting Heavy Things"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Outcast"],
						mentalPool: 0,
						name: "Carter",
						physicalPool: 1,
						resources: 10,
						setting: "Guilder",
						skillPool: 5,
						skills: ["Any General->Animal Husbandry", "Any General->Driving", "Any General->Mending", "Any Wise->Oath-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Patient", "Dwarf Lifepath->Iron Nose"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Outcast", "Dwarf->Host", "Dwarf->Templar"],
						mentalPool: 1,
						name: "Hawker",
						physicalPool: 0,
						resources: 15,
						setting: "Guilder",
						skillPool: 6,
						skills: ["Any General->Inconspicuous", "Any General->Conspicuous", "Any General->Streetwise", "Any General->Haggling", "Any Wise->Suicidal Bravery-wise"],
						stock: "Dwarf",
						traitPool: 1,
						years: 15
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Artificer", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Apprentice",
						physicalPool: 1,
						resources: 20,
						setting: "Guilder",
						skillPool: 4,
						skills: ["Any General->Carving", "Any General->Tanner", "Any General->Carpentry", "Any Wise->Shortcut-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Seen Not Heard"],
						years: 15
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Artificer", "Dwarf->Host", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Journeyman",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Guilder->Apprentice",
								"Dwarf->Artificer->Ardent",
								"Dwarf->Noble->Ardent"
							]
						},
						resources: 25,
						setting: "Guilder",
						skillPool: 7,
						skills: ["Any General->Haggling", "Any General->Cartwright", "Any General->Mending", "Dwarf Art->Black-Metal Artifice"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Hungry"],
						years: 25
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Artificer", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Craftsman",
						physicalPool: 0,
						resources: 45,
						requirements: {
							OR: [
								"Dwarf->Guilder->Journeyman",
								"Dwarf->Artificer->Artificer",
								"Dwarf->Host->Artillerist",
								"Dwarf->Host->Engineer"
							]
						},
						setting: "Guilder",
						skillPool: 4,
						skills: ["Any General->Appraisal", "Any General->Shipwright", "Any General->Wises"],
						stock: "Dwarf",
						traitPool: 1,
						years: 45
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Outcast"],
						mentalPool: 1,
						name: "Trader",
						physicalPool: 0,
						resources: 70,
						requirements: {
							OR: [
								"Dwarf->Guilder->Hawker",
								"Dwarf->Guilder->Journeyman",
								"Dwarf->Outcast->Adventurer",
								"Dwarf->Clansman->Husband/Wife"
							]
						},
						setting: "Guilder",
						skillPool: 7,
						skills: ["Dwarf Art->Stentorious Debate", "Dwarf Art->Shrewd Appraisal", "Any General->Haggling", "Any General->Persuasion"],
						stock: "Dwarf",
						traitPool: 1,
						years: 45
					}
				]
			},
			"Host": {
				allowed: ["bwg", "bwc"],
				name: "Host",
				stock: "Dwarf",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Outcast", "Dwarf->Guilder", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Foot Soldier",
						physicalPool: 1,
						resources: 6,
						setting: "Host",
						skillPool: 6,
						skills: ["Any General->Foraging", "Any General->Brawling", "Any General->Hammer", "Any General->Armor Training", "Any General->Shield Training", "Any Wise->Cadence-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Salt of the Earth"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Outcast", "Dwarf->Guilder", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Arbalester",
						physicalPool: 0,
						resources: 12,
						setting: "Host",
						skillPool: 5,
						skills: ["Any General->Crossbow", "Any General->Mending", "Any General->Fletcher", "Dwarf Special->Artillery Hand", "Any Wise->Windage-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Squinty"],
						years: 12
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Outcast", "Dwarf->Guilder"],
						mentalPool: 0,
						name: "Banner Bearer",
						physicalPool: 1,
						resources: 10,
						setting: "Host",
						skillPool: 4,
						skills: ["Any General->Conspicuous", "Any Wise->Banner-wise", "Any General->Intimidation"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Callon->Resigned (to Death)", "Dwarf Lifepath->Obsessive"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Outcast", "Dwarf->Guilder", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Horncaller",
						physicalPool: 1,
						resources: 9,
						setting: "Host",
						skillPool: 5,
						skills: ["Dwarf Special->Links", "Any General->Conspicuous", "Any Wise->Cadence-wise", "Any Wise->Suicidal Bravery-wise"],
						stock: "Dwarf",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Outcast", "Dwarf->Noble", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Axe Bearer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Dwarf->Noble->Ardent",
								"Dwarf->Host->Graybeard",
								"Dwarf->Host->Banner Bearer"
							]
						},
						resources: 15,
						setting: "Host",
						skillPool: 9,
						skills: ["Any General->Foraging", "Any General->Axe", "Any General->Conspicuous", "Any General->Intimidation", "Any General->Armor Training", "Any General->Shield Training", "Any General->Formation Fighting Training", "Any General->Throwing"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Swaggering"],
						years: 15
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Outcast", "Dwarf->Noble", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Graybeard",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Host->Axe Bearer",
								"Dwarf->Clansman->Longbeard",
								"Dwarf->Host->3*ANY"
							]
						},
						resources: 20,
						setting: "Host",
						skillPool: 5,
						skills: ["Any General->Intimidation", "Any General->Field Dressing", "Any General->Command", "Any Wise->Campaign-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Character->Chuffing", "Dwarf Lifepath->Oddly Likeable"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Outcast", "Dwarf->Noble"],
						mentalPool: 1,
						name: "Khirurgeon",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Noble->Abecedart",
								"Dwarf->Noble->Seneschal",
								"Dwarf->Host->Graybeard"
							]
						},
						resources: 25,
						setting: "Host",
						skillPool: 6,
						skills: ["Dwarf Special->Khirurgy", "Any General->Soothing Platitudes", "Any General->Cooking", "Any Wise->Infection-wise"],
						stock: "Dwarf",
						traitPool: 1,
						years: 25
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Outcast", "Dwarf->Noble"],
						mentalPool: 1,
						name: "Quartermaster",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Noble->Seneschal",
								"Dwarf->Noble->Treasurer",
								"Dwarf->Guilder->Trader",
								"Dwarf->Host->Graybeard"
							]
						},
						resources: 35,
						setting: "Host",
						skillPool: 7,
						skills: ["Any General->Logistics", "Any General->Accounting", "Any General->Strategy", "Any Wise->Supply-wise", "Any Wise->Host-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->No Nonsense"],
						years: 50
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Outcast", "Dwarf->Noble", "Dwarf->Templar"],
						mentalPool: 1,
						name: "Captain",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Noble->Prince",
								"Dwarf->Host->Graybeard"
							]
						},
						resources: 40,
						setting: "Host",
						skillPool: 7,
						skills: ["Any General->Command", "Any General->Conspicuous", "Any General->Formation Fighting Training", "Any General->Strategy", "Any General->Cartography", "Any Wise->Graybeard-wise"],
						stock: "Dwarf",
						traitPool: 1,
						years: 55
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Dwarf->Artificer", "Dwarf->Outcast", "Dwarf->Noble"],
						mentalPool: 0,
						name: "Artillerist",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Artificer->Mask Bearer",
								"Dwarf->Guilder->Craftsman",
								"Dwarf->Clansman->Foreman",
								"Dwarf->Host->3*Arbalester"
							]
						},
						resources: 45,
						setting: "Host",
						skillPool: 5,
						skills: ["Any General->Artillerist", "Any General->Mending", "Any General->Carpentry", "Any Wise->Structural Weakness-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Complaining"],
						years: 55
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Dwarf->Artificer", "Dwarf->Noble"],
						mentalPool: 0,
						name: "Engineer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Host->Artillerist",
								"Dwarf->Artificer->Mask Bearer"
							]
						},
						resources: 50,
						setting: "Host",
						skillPool: 6,
						skills: ["Any General->Jargon", "Dwarf Art->War Engineer", "Any General->Scavenging", "Any Wise->Leverage-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Dwarf Special->Estimation"],
						years: 60
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Dwarf->Outcast", "Dwarf->Noble", "Dwarf->Templar"],
						mentalPool: 0,
						name: "Warden",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Noble->Prince",
								"Dwarf->Host->Captain",
								"Dwarf->Noble->High Captain"
							]
						},
						resources: 65,
						setting: "Host",
						skillPool: 7,
						skills: ["Any General->Conspicuous", "Any General->Oratory", "Any General->Observation", "Any General->Strategy", "Any General->Etiquette", "Any Wise->Champion-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Chuntering", "Dwarf Lifepath->Hard as Nails"],
						years: 75
					}
				]
			},
			"Noble": {
				allowed: ["bwg", "bwc"],
				name: "Noble",
				stock: "Dwarf",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 4,
						leads: ["Dwarf->Guilder", "Dwarf->Artificer"],
						mentalPool: 0,
						name: "Born Noble",
						physicalPool: 0,
						resources: 10,
						setting: "Noble",
						skillPool: 2,
						skills: ["Dwarf Special->Dwarven Rune Script"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Dwarf Lifepath->Dvergar"],
						years: 21
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Artificer", "Dwarf->Outcast"],
						mentalPool: 1,
						name: "Abecedart",
						physicalPool: 0,
						resources: 10,
						setting: "Noble",
						skillPool: 4,
						skills: ["Any General->Chronology of Kings", "Any General->Etiquette", "Any Wise->Obscure Text-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Know It All"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Artificer", "Dwarf->Outcast"],
						mentalPool: 0,
						name: "Ardent",
						physicalPool: 1,
						resources: 15,
						setting: "Noble",
						skillPool: 4,
						skills: ["Any General->Sing", "Any General->Soothing Platitudes", "Any General->Accounting", "Any Wise->Whispered Secrets-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Character->Humility in the Face of Your Betters"],
						years: 25
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Host", "Dwarf->Outcast"],
						mentalPool: 0,
						name: "Axe Bearer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Dwarf->Noble->Ardent",
								"Dwarf->Host->Banner Bearer"
							]
						},
						resources: 25,
						setting: "Noble",
						skillPool: 8,
						skills: ["Any General->Axe", "Any General->Armor Training", "Any General->Shield Training", "Any General->Formation Fighting Training", "Any General->Throwing"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Proud"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Artificer", "Dwarf->Host"],
						mentalPool: 1,
						name: "Chronicler",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Noble->Abecedart",
								"Dwarf->Host->Khiurgeon",
								"Dwarf->Host->Graybeard"
							]
						},
						resources: 20,
						setting: "Noble",
						skillPool: 9,
						skills: ["Any General->Illuminations", "Any General->Ancient History", "Any Wise->Clan-wise", "Any Wise->Dwarf-wise", "Any General->Poetry", "Any General->Cartography", "Any General->Etiquette", "Any General->Symbology", "Any Wise->Oath-wise"],
						stock: "Dwarf",
						traitPool: 1,
						years: 50
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Guilder", "Dwarf->Host"],
						mentalPool: 1,
						name: "Seneschal",
						physicalPool: 0,
						requirements: {
							OR: ["Dwarf->Guilder->Trader",
								"Dwarf->Clansman->Longbeard",
								"Dwarf->Host->Quartermaster",
								"Dwarf->Noble->Chronicler",
								"Dwarf->Host->Khiurgeon",
								"Dwarf->Host->Graybeard"
							]
						},
						resources: 50,
						setting: "Noble",
						skillPool: 5,
						skills: ["Any General->Etiquette", "Any General->Command", "Any General->Estate Management", "Any Wise->Hold-wise"],
						stock: "Dwarf",
						traitPool: 1,
						traits: ["Any Character->Practical"],
						years: 55
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Outcast", "Dwarf->Host"],
						mentalPool: 1,
						name: "Treasurer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Dwarf->Noble->Seneschal",
								"Dwarf->Artificer->Artificer",
								"Dwarf->Host->Warden"
							]
						},
						resources: 100,
						setting: "Noble",
						skillPool: 6,
						skills: ["Any General->Accounting", "Any General->Etiquette", "Any Wise->Treasure-wise", "Any General->Administration"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Dwarf Lifepath->Dangerous Obsession", "Any Die->Rainman"],
						years: 75
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Host", "Dwarf->Outcast"],
						mentalPool: 0,
						name: "High Captain",
						physicalPool: 1,
						requirements: {
							OR: [
								"Dwarf->Host->Captain",
								"Dwarf->Host->Warden"
							],
							AND: [
								"Dwarf->Noble->Axe Bearer"
							]
						},
						resources: 75,
						setting: "Noble",
						skillPool: 5,
						skills: ["Any General->Command", "Any General->Strategy", "Any General->Conspicuous"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Character->Muttering", "Dwarf Lifepath->Stentorious Voice"],
						years: 75
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Host", "Dwarf->Outcast"],
						mentalPool: 1,
						name: "Prince",
						physicalPool: 0,
						requirements: {
							AND: [
								"Dwarf->Noble->Born Noble",
								"Dwarf->Noble->Axe Bearer"
							]
						},
						resources: 200,
						setting: "Noble",
						skillPool: 8,
						skills: ["Any General->Conspicuous", "Any General->Etiquette", "Any General->Intimidation", "Any General->Oratory", "Any General->Command", "Any Wise->Burden of the Crown-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Character->Grumbling", "Dwarf Lifepath->Galvanizing Presence", "Dwarf Lifepath->Baleful Stare"],
						years: 100
					}
				]
			},
			"Outcast": {
				allowed: ["bwg", "bwc"],
				name: "Outcast",
				stock: "Dwarf",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Guilder"],
						mentalPool: 0,
						name: "Adventurer",
						physicalPool: 0,
						resources: 10,
						setting: "Outcast",
						skillPool: 12,
						skills: ["Any General->Survival", "Any General->Climbing", "Any General->Knots", "Any General->Herbalism", "Any General->Haggling", "Any General->Firebuilding", "Any General->Brawling", "Any General->Knives", "Any General->Sword", "Any General->Crossbow", "Any General->Lock Pick", "Any General->Appraisal", "Any General->Obscure History", "Any General->Symbology", "Any Wise->Lost Treasure-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Dwarf Lifepath->Adventurer", "Any Character->Boaster"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman"],
						mentalPool: 1,
						name: "Gambler",
						physicalPool: 0,
						resources: 15,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Dwarf Special->Games of Chance", "Any General->Observation", "Any General->Sleight of Hand", "Any Wise->Cheating-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Dwarf Lifepath->Stone Faced"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman"],
						mentalPool: 1,
						name: "Oathbreaker",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Any General->Ugly Truth", "Any General->Falsehood", "Any Wise->Oath-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Dwarf Lifepath->Oathbreaker", "Any Character->Bitter"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman"],
						mentalPool: 0,
						name: "Drunk",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Dwarf Art->Stentorious Singing", "Dwarf Art->Drunking", "Any Wise->Tavern Tales-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Any Character->Drunk", "Any Character->Despondent"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Guilder", "Dwarf->Artificer", "Dwarf->Noble", "Dwarf->Host"],
						mentalPool: 0,
						name: "Coward",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Any General->Inconspicuous", "Any General->Ugly Truth", "Any General->Oratory", "Any Wise->Hypocritical Bastards-wise"],
						stock: "Dwarf",
						traitPool: 3,
						traits: ["Dwarf Lifepath->Branded a Coward"],
						years: 15
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Dwarf->Clansman", "Dwarf->Guilder", "Dwarf->Artificer", "Dwarf->Noble", "Dwarf->Templar"],
						mentalPool: 1,
						name: "Rune Caster",
						physicalPool: 1,
						resources: 6,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Dwarf Art->Rune Casting", "Any General->Foraging", "Any General->Scavenging", "Any Wise->Bad End-wise"],
						stock: "Dwarf",
						traitPool: 2,
						traits: ["Dwarf Lifepath->Slave to Fate"],
						years: 20
					},
				]
			}
		}
	},
	"Elf": {
		agePool: [[25, 0, 7, 13], [60, 26, 8, 13], [100, 61, 9, 14], [125, 101, 9, 15], [160, 126, 10, 16], [225, 161, 10, 17], [325, 226, 11, 17], [425, 326, 12, 17], [525, 426, 13, 18], [625, 526, 13, 19], [725, 626, 14, 19], [825, 726, 14, 20], [925, 826, 15, 20], [1025, 926, 15, 21], [1125, 1026, 15, 22], [1225, 1126, 15, 23], [1325, 1226, 15, 24], [1326, 99999, 16, 24]],
		allowed: ["bwg", "bwc"],
		hasSetting: true,
		hasSubsetting: true,
		name: "Elf",
		stride: 8,
		settings: {
			"Wilderlands": {
				allowed: ["bwg", "bwc"],
				name: "Wilderlands",
				stock: "Elf",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 4,
						leads: ["Elf->Citadel"],
						mentalPool: 0,
						name: "Born Wilder Elf",
						physicalPool: 0,
						resources: 5,
						setting: "Wilderlands",
						skillPool: 2,
						skills: ["Any General->Sing", "Elf Special->Elven Script"],
						stock: "Elf",
						traitPool: 1,
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel", "Elf->Protector"],
						mentalPool: 0,
						name: "Rider",
						physicalPool: 1,
						resources: 3,
						setting: "Wilderlands",
						skillPool: 6,
						skills: ["Any General->Riding", "Elf Spell Song->Gift of Speed", "Elf Spell Song->Lay of the Horse"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Oikofugic"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Protector"],
						mentalPool: 0,
						name: "Harvester",
						physicalPool: 1,
						resources: 5,
						setting: "Wilderlands",
						skillPool: 5,
						skills: ["Elf Skill Song->Round of Harvest", "Any General->Farming", "Any General->Firebuilding", "Any General->Animal Husbandry", "Any General->Mending"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Seasoned"],
						years: 50
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Gatherer",
						physicalPool: 0,
						resources: 3,
						setting: "Wilderlands",
						skillPool: 5,
						skills: ["Elf Skill Song->Rhyme of the Gatherer", "Any Wise->Herb-wise", "Any General->Orienteering"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Rough Hands"],
						years: 40
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel"],
						mentalPool: 0,
						name: "Fisherman",
						physicalPool: 0,
						resources: 8,
						setting: "Wilderlands",
						skillPool: 9,
						skills: ["Elf Skill Song->Hymn of Scales and Fins", "Any General->Pilot", "Any General->Boatwright", "Any General->Knots", "Any General->Mending", "Any General->Cooking", "Any General->Seamanship", "Any General->Rigging"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Wary"],
						years: 50
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel"],
						mentalPool: 0,
						name: "Shepherd",
						physicalPool: 0,
						resources: 6,
						setting: "Wilderlands",
						skillPool: 4,
						skills: ["Elf Skill Song->Song of Flocks and Herds", "Any General->Climbing", "Any Wise->Wolf-wise"],
						stock: "Elf",
						traitPool: 1,
						years: 45
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel"],
						mentalPool: 0,
						name: "Wanderer",
						physicalPool: 1,
						resources: 5,
						setting: "Wilderlands",
						skillPool: 6,
						skills: ["Elf Skill Song->Song of Paths and Ways", "Elf Spell Song->Air of Gates", "Any General->Foraging"],
						stock: "Elf",
						traitPool: 1,
						years: 75
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel", "Elf->Protector"],
						mentalPool: 0,
						name: "Huntsman",
						physicalPool: 1,
						resources: 9,
						setting: "Wilderlands",
						skillPool: 7,
						skills: ["Elf Skill Song->Call of the Wild", "Any General->Javelin", "Any General->Bow", "Any General->Tracking", "Any General->Stealthy", "Any General->Observation"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Watchful"],
						years: 45
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel", "Elf->Protector"],
						mentalPool: 1,
						name: "Chandler",
						physicalPool: 0,
						resources: 15,
						setting: "Wilderlands",
						skillPool: 5,
						skills: ["Elf Spell Song->Chant of Offering", "Any General->Haggling", "Any General->Conspicuous", "Any General->Appraisal"],
						stock: "Elf",
						traitPool: 1,
						years: 50
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel"],
						mentalPool: 1,
						name: "Weaver",
						physicalPool: 0,
						resources: 10,
						setting: "Wilderlands",
						skillPool: 5,
						skills: ["Elf Skill Song->Weaving Way", "Elf Skill Song->Threading Chant", "Any General->Mending"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Fateful"],
						years: 50
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 0,
						name: "Forester",
						physicalPool: 1,
						resources: 5,
						setting: "Wilderlands",
						skillPool: 6,
						skills: ["Elf Spell Song->Song of Arbors", "Any Wise->Forest-wise", "Any Wise->Tree-wise", "Elf Skill Song->Song of the Eldar"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Any Character->Stern Demeanor"],
						years: 90
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands"],
						mentalPool: 1,
						name: "Vintner",
						physicalPool: 0,
						resources: 20,
						setting: "Wilderlands",
						skillPool: 7,
						skills: ["Elf Skill Song->Purple Song", "Any Wise->Vine-wise", "Any General->Cooper", "Any Wise->Vintage-wise", "Any Wise->Terroir-wise"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Rarified"],
						years: 60
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands"],
						mentalPool: 1,
						name: "Miller",
						physicalPool: 0,
						resources: 18,
						setting: "Wilderlands",
						skillPool: 6,
						skills: ["Elf Skill Song->Grain Song", "Any General->Mending", "Any General->Carpentry", "Any Wise->Mill-wise", "Any Wise->Grain-wise"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Earthen"],
						years: 60
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 1,
						name: "Song Singer",
						physicalPool: 0,
						resources: 10,
						setting: "Wilderlands",
						skillPool: 6,
						skills: ["Elf Spell Song->Song of Songs", "Elf Skill Song->Song of Soothing", "Elf Spell Song->Lament of the Westering Sun", "Any General->Oratory"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Vocal"],
						years: 45
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 1,
						name: "Spouse",
						physicalPool: 0,
						resources: 10,
						setting: "Wilderlands",
						skillPool: 5,
						skills: ["Elf Skill Song->Song of Soothing", "Elf Spell Song->Rhyme of Rules", "Elf Skill Song->Song of Feasting", "Any Wise->Fealty-wise"],
						stock: "Elf",
						traitPool: 1,
						years: 75
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands"],
						mentalPool: 1,
						name: "Patriarch/Matriarch",
						physicalPool: 0,
						requirements: {
							AND: [
								"Elf->Wilderness->Spouse"
							]
						},
						resources: 15,
						setting: "Wilderlands",
						skillPool: 6,
						skills: ["Elf Spell Song->Homesong", "Elf Spell Song->Lyric of Healing", "Elf Skill Song->Dignity of the Wilderlands"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Matriarchal/Patriarchal"],
						years: 100
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Etharch"],
						mentalPool: 1,
						name: "Elder",
						physicalPool: 0,
						requirements: {
							TEXT: [
								"The character must be 750 years old after taking this path or the oldest character in the group by 100 years"
							]
						},
						resources: 30,
						setting: "Wilderlands",
						skillPool: 5,
						skills: ["Elf Spell Song->Verse of Decision", "Elf Spell Song->Council-Caller"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Elf Lifepath->Wise Aphorisms"],
						years: 150
					}
				]
			},
			"Citadel": {
				allowed: ["bwg", "bwc"],
				name: "Citadel",
				stock: "Elf",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 5,
						leads: ["Elf->Wilderlands"],
						mentalPool: 0,
						name: "Citadel Born",
						physicalPool: 0,
						resources: 7,
						setting: "Citadel",
						skillPool: 2,
						skills: ["Elf Special->Elven Script", "Any General->Sing"],
						stock: "Elf",
						traitPool: 1,
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 0,
						name: "Servitor",
						physicalPool: 0,
						resources: 5,
						setting: "Citadel",
						skillPool: 5,
						skills: ["Any General->Hauling", "Any General->Observation", "Any Wise->Citadel-wise", "Any Wise->Althing-wise"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Any Character->Humility", "Dwarf Lifepath->Lifting Heavy Things"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands"],
						mentalPool: 0,
						name: "Wanderer",
						physicalPool: 1,
						resources: 5,
						setting: "Citadel",
						skillPool: 6,
						skills: ["Elf Skill Song->Song of Paths and Ways", "Elf Spell Song->Air of Gates", "Any General->Scavenging", "Any General->Streetwise"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Lonesome"],
						years: 75
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 1,
						name: "Song Singer",
						physicalPool: 0,
						resources: 10,
						setting: "Citadel",
						skillPool: 5,
						skills: ["Any General->Sing", "Elf Spell Song->Song of Songs", "Elf Skill Song->Song of Soothing", "Elf Spell Song->Lament of Stars"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Voice in the Crowd"],
						years: 25
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 1,
						name: "Student",
						physicalPool: 0,
						resources: 10,
						setting: "Citadel",
						skillPool: 6,
						skills: ["Elf Skill Song->Lyric of Law", "Elf Skill Song->Ballad of History", "Elf Special->Elven Script", "Any General->Etiquette", "Any General->Oratory"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Educated"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 0,
						name: "Clothier",
						physicalPool: 0,
						resources: 20,
						setting: "Citadel",
						skillPool: 7,
						skills: ["Elf Skill Song->Threading Chant", "Any General->Embroidery", "Elf Skill Song->Leathercraft", "Elf Skill Song->Weaving Way"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Well Dressed"],
						years: 75
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector", "Elf->Etharch"],
						mentalPool: 0,
						name: "Soldier-Protector",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Citadel->Wanderer",
								"Elf->Citadel->Seafarer",
								"Elf->Wilderness->Spouse",
								"Elf->Wilderness->Rider",
								"Elf->Wilderness->Huntsman",
								"Elf->Etharch->1*ANY",
								"Elf->Protector->1*ANY"
							]
						},
						resources: 10,
						setting: "Citadel",
						skillPool: 8,
						skills: ["Elf Spell Song->Alarm", "Any General->Armor Training", "Any General->Shield Training", "Any General->Sword", "Any General->Bow", "Any General->Knives", "Any General->Fletcher", "Any General->Mending"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Dutiful"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 0,
						name: "Seafarer",
						physicalPool: 1,
						resources: 5,
						setting: "Citadel",
						skillPool: 9,
						skills: ["Elf Spell Song->Weathersong", "Elf Skill Song->Rope Chant", "Elf Skill Song->Rhyme of the Mariner", "Any General->Pilot", "Any General->Seamanship", "Any General->Spear"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Call of the Sea", "Any Die->Rower"],
						years: 50
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector", "Elf->Etharch"],
						mentalPool: 1,
						name: "Sea Captain",
						physicalPool: 0,
						requirements: {
							OR: [
								"Elf->Citadel->Seafarer",
								"Elf->Citadel->Adjutant",
								"Elf->Protector->Lieutenant",
								"Elf->Etharch->Sword Singer",
								"Elf->Protector->Sword Singer"
							]
						},
						resources: 15,
						setting: "Citadel",
						skillPool: 8,
						skills: ["Elf Skill Song->Slip of Currents", "Elf Spell Song->Supplication to the Wind", "Any General->Command", "Any General->Oratory", "Any General->Sword"],
						stock: "Elf",
						traitPool: 1,
						years: 100
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands"],
						mentalPool: 0,
						name: "Novice",
						physicalPool: 1,
						resources: 10,
						setting: "Citadel",
						skillPool: 4,
						skills: ["Any General->Mending", "Any Wise->Craft-wise", "Any Wise->Elven Artifact-wise"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Any Die->Loyal"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 0,
						name: "Shaper",
						physicalPool: 1,
						requirements: {
							AND: [
								"Elf->Citadel->Novice"
							]
						},
						resources: 15,
						setting: "Citadel",
						skillPool: 6,
						skills: ["Elf Skill Song->Woodcraft", "Elf Skill Song->Stonecraft", "Elf Skill Song->Smithcraft"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Long Fingered"],
						years: 35
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 0,
						name: "Jeweler",
						physicalPool: 0,
						requirements: {
							AND: [
								"Elf->Citadel->Shaper"
							]
						},
						resources: 20,
						setting: "Citadel",
						skillPool: 5,
						skills: ["Elf Skill Song->Jewelcraft", "Elf Skill Song->Gemcraft", "Any General->Appraisal"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Any Character->Patient", "Any Callon->Nimble"],
						years: 75
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector", "Elf->Etharch"],
						mentalPool: 1,
						name: "Artisan",
						physicalPool: 0,
						requirements: {
							AND: [
								"Elf->Citadel->Shaper"
							]
						},
						resources: 40,
						setting: "Citadel",
						skillPool: 6,
						skills: ["Elf Skill Song->Archcraft", "Elf Skill Song->Starcraft", "Elf Spell Song->Canticle of Years", "Elf Skill Song->Antiphon Union Training"],
						stock: "Elf",
						traitPool: 1,
						years: 150
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 0,
						name: "Keel Master",
						physicalPool: 0,
						requirements: {
							AND: [
								"Elf->Citadel->Shaper"
							]
						},
						resources: 25,
						setting: "Citadel",
						skillPool: 6,
						skills: ["Any General->Shipwright", "Any Wise->Ship-wise", "Any General->Carving"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Any Character->Perfectionist"],
						years: 100
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands"],
						mentalPool: 1,
						name: "Artist",
						physicalPool: 0,
						resources: 12,
						setting: "Citadel",
						skillPool: 5,
						skills: ["Elf Skill Song->Song of Form", "Any General->Painting"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Any Character->Appreciation for Beauty"],
						years: 60
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 0,
						name: "Bard",
						physicalPool: 0,
						requirements: {
							OR: [
								"Elf->Etharch->Sword Singer",
								"Elf->Protector->Sword Singer"
							]
						},
						resources: 20,
						setting: "Citadel",
						skillPool: 11,
						skills: ["Elf Spell Song->Song of Merriment", "Elf Spell Song->Lament of Mourning", "Elf Spell Song->Verse of Friendship", "Elf Spell Song->Tract of Enmity", "Any General->Oratory", "Any General->Conspicuous", "Any General->Lyre", "Any General->Flute"],
						stock: "Elf",
						traitPool: 1,
						years: 65
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector"],
						mentalPool: 1,
						name: "Adjutant",
						physicalPool: 0,
						requirements: {
							OR: [
								"Elf->Protector->Herald",
								"Elf->Etharch->Attendant",
								"Elf->Etharch->Student",
								"Elf->Wilderness->Spouse"
							]
						},
						resources: 20,
						setting: "Citadel",
						skillPool: 7,
						skills: ["Elf Skill Song->Code of Citadels", "Any General->Etiquette", "Any General->Administration", "Any Wise->Etharch-wise", "Any Wise->Citadel-wise", "Any Wise->Protector-wise"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Elf Lifepath->Organized", "Any Character->Patient"],
						years: 75
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Etharch"],
						mentalPool: 1,
						name: "Loremaster",
						physicalPool: 0,
						requirements: {
							OR: [
								"Elf->Citadel->Bard",
								"Elf->Citadel->Adjutant",
								"Elf->Etharch->Steward",
								"Elf->Wilderness->Patriarch/Matriarch"
							]
						},
						resources: 25,
						setting: "Citadel",
						skillPool: 10,
						skills: ["Any General->Ancient and Obscure History", "Any General->Research", "Elf Skill Song->Ballad of History", "Elf Skill Song->Lyric of Law", "Elf Spell Song->Canticle of Years", "Elf Spell Song->Rhyme of Tongues"],
						stock: "Elf",
						traitPool: 1,
						years: 200
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Protector", "Elf->Etharch"],
						mentalPool: 1,
						name: "Althing",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Wilderness->Patriarch/Matriarch",
								"Elf->Citadel->Loremaster",
								"Elf->Etharch->Steward",
								"Elf->Citadel->Bard",
								"Elf->Citadel->Artisan",
								"Elf->Protector->Sea Captain",
								"Elf->Protector->Captain"
							]
						},
						resources: 100,
						setting: "Citadel",
						skillPool: 10,
						skills: ["Elf Spell Song->Council-Caller", "Elf Spell Song->Song of Silence", "Any General->Persuasion", "Any General->Soothing Platitudes", "Any General->Ugly Truth", "Any General->Administration"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Elf Lifepath->Servant of the Citadel"],
						years: 250
					}
				]
			},
			"Etharch": {
				allowed: ["bwg", "bwc"],
				name: "Etharch",
				stock: "Elf",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 5,
						leads: ["Elf->Wilderlands", "Elf->Citadel"],
						mentalPool: 0,
						name: "Born Etharch",
						physicalPool: 0,
						resources: 10,
						setting: "Etharch",
						skillPool: 2,
						skills: ["Elf Special->Elven Script", "Any General->Etiquette", "Any General->Sing"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Elf Lifepath->Etharchal", "Elf Lifepath->Fêa", "Elf Lifepath->Aman"],
						years: 25
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel"],
						mentalPool: 1,
						name: "Student",
						physicalPool: 0,
						resources: 10,
						setting: "Etharch",
						skillPool: 9,
						skills: ["Elf Skill Song->Ages of the Etharch", "Elf Skill Song->Lyric of Law", "Elf Skill Song->Ballad of History", "Any General->Oratory", "Any General->Calligraphy", "Elf Skill Song->Song of the Eldar"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Learned"],
						years: 25
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel", "Elf->Protector"],
						mentalPool: 0,
						name: "Attendant",
						physicalPool: 1,
						resources: 15,
						setting: "Etharch",
						skillPool: 4,
						skills: ["Any General->Etiquette", "Any General->Riding", "Any General->Brawling", "Any General->Sword"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Elf Lifepath->Calm Demeanor"],
						years: 25
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel", "Elf->Protector"],
						mentalPool: 0,
						name: "Second",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Etharch->Attendant",
								"Elf->Protector->Bowyer",
								"Elf->Protector->Spearbearer",
								"Elf->Citadel->Seafarer",
								"Elf->Protector->Soldier-Protector"
							]
						},
						resources: 15,
						setting: "Etharch",
						skillPool: 8,
						skills: ["Elf Spell Song->Song of Bonding", "Any General->Sword", "Any General->Knives", "Any General->Bow", "Any General->Mending", "Any General->Riding", "Any General->Mounted Combat Training"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Elf Lifepath->Lesson of One", "Any Character->Patient"],
						years: 35
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel", "Elf->Protector"],
						mentalPool: 0,
						name: "Sword Singer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Etharch->Second",
								"Elf->Protector->Lancer",
								"Elf->Protector->Lieutenant"
							]
						},
						resources: 10,
						setting: "Etharch",
						skillPool: 10,
						skills: ["Elf Spell Song->Song of the Sword", "Any General->Sword", "Any General->Armor Training", "Any General->Shield Training", "Any General->Knives", "Any General->Brawling"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Elf Lifepath->Fealty to the Fêa", "Any Die->Cool Headed"],
						years: 40
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel", "Elf->Protector"],
						mentalPool: 1,
						name: "Steward",
						physicalPool: 0,
						requirements: {
							OR: [
								"Elf->Protector->Lieutenant",
								"Elf->Citadel->Artisan",
								"Elf->Citadel->Bard",
								"Elf->Citadel->Loremaster",
								"Elf->Citadel->Adjutant",
								"Elf->Protector->Sea Captain",
								"Elf->Wilderness->Patriarch/Matriarch"
							]
						},
						resources: 20,
						setting: "Etharch",
						skillPool: 8,
						skills: ["Any General->Estate Management", "Any General->Accounting", "Any General->Etiquette", "Any Wise->Estate-wise", "Any Wise->Intrigue-wise"],
						stock: "Elf",
						traitPool: 1,
						years: 110
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 4,
						leads: ["Elf->Citadel", "Elf->Protector"],
						mentalPool: 0,
						name: "Prince/Princess",
						physicalPool: 0,
						requirements: {
							OR: [
								"Elf->Etharch->Sword Singer",
								"Elf->Protector->Sword Singer"
							],
							AND: [
								"Trait->Elf Lifepath->Fêa"
							]
						},
						resources: 100,
						setting: "Etharch",
						skillPool: 6,
						skills: ["Elf Skill Song->Song of Lordship", "Elf Spell Song->Voice of Ages"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Elf Lifepath->Prince of the Blood"],
						years: 150
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 4,
						leads: ["Elf->Citadel", "Elf->Protector"],
						mentalPool: 1,
						name: "Etharch",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Citadel->Loremaster",
								"Elf->Etharch->Prince/Princess"
							],
							AND: [
								"Trait->Elf Lifepath->Aman"
							]
						},
						resources: 200,
						setting: "Etharch",
						skillPool: 8,
						skills: ["Elf Spell Song->Council-Caller", "Elf Skill Song->Voice of Thunder", "Elf Spell Song->Doom Sayer", "Elf Spell Song->Discerner"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Elf Lifepath->Lord of Ages"],
						years: 250
					}
				]
			},
			"Protector": {
				allowed: ["bwg", "bwc"],
				name: "Protector",
				stock: "Elf",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel", "Elf->Wilderlands"],
						mentalPool: 0,
						name: "Rider",
						physicalPool: 1,
						resources: 8,
						setting: "Protector",
						skillPool: 6,
						skills: ["Any General->Riding", "Any General->Animal Husbandry", "Elf Spell Song->Gift of Speed", "Elf Spell Song->Lay of the Horse"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Smells Like a Horse"],
						years: 15
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Elf->Citadel", "Elf->Wilderlands"],
						mentalPool: 0,
						name: "Herald",
						physicalPool: 0,
						resources: 10,
						setting: "Protector",
						skillPool: 8,
						skills: ["Elf Skill Song->Paean of Deeds", "Elf Spell Song->Mornsong", "Elf Spell Song->Evensong", "Elf Spell Song->Recitation of Ages", "Elf Special->Silver Trumpet"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Any Die->Stoic"],
						years: 35
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel", "Elf->Wilderlands"],
						mentalPool: 1,
						name: "Soother",
						physicalPool: 0,
						resources: 10,
						setting: "Protector",
						skillPool: 6,
						skills: ["Elf Spell Song->Lyric of Healing", "Elf Skill Song->Song of Soothing", "Elf Spell Song->Doom of Strength", "Any General->Foraging"],
						stock: "Elf",
						traitPool: 1,
						years: 30
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands"],
						mentalPool: 0,
						name: "Ranger",
						physicalPool: 0,
						requirements: {
							OR: [
								"Elf->Wilderness->Forester",
								"Elf->Wilderness->Wanderer",
								"Elf->Protector->Bowyer",
								"Elf->Etharch->Second"
							]
						},
						resources: 10,
						setting: "Protector",
						skillPool: 10,
						skills: ["Any General->Observation", "Any General->Stealthy", "Any General->Bow", "Any General->Foraging", "Elf Skill Song->Rhyme of the Pathfinder", "Elf Skill Song->Song of Soothing", "Elf Spell Song->Threne of the Chameleon", "Elf Spell Song->Lyric of Healing"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Grey Mantle", "Any Die->Sprinter"],
						years: 45
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel", "Elf->Wilderlands"],
						mentalPool: 0,
						name: "Bowyer",
						physicalPool: 1,
						resources: 8,
						setting: "Protector",
						skillPool: 5,
						skills: ["Elf Skill Song->Bowcraft", "Any General->Mending", "Any General->Bow", "Any Wise->Bow-wise"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Circumspect"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel", "Elf->Wilderlands"],
						mentalPool: 0,
						name: "Spearbearer",
						physicalPool: 1,
						resources: 8,
						setting: "Protector",
						skillPool: 8,
						skills: ["Elf Skill Song->Spearcraft", "Any General->Spear", "Any General->Armor Training", "Any General->Formation Fighting Training"],
						stock: "Elf",
						traitPool: 1,
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel", "Elf->Etharch"],
						mentalPool: 0,
						name: "Sword Singer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Etharch->Second",
								"Elf->Citadel->Soldier-Protector",
								"Elf->Protector->Soother",
								"Elf->Wilderness->Spouse",
								"Elf->Protector->Spearbearer"
							]
						},
						resources: 10,
						setting: "Protector",
						skillPool: 10,
						skills: ["Any General->Sword", "Any General->Armor Training", "Any General->Shield Training", "Any General->Knives", "Any General->Brawling", "Elf Spell Song->Song of the Sword"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Elf Lifepath->Sword of the White Towers"],
						years: 30
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Citadel", "Elf->Wilderlands"],
						mentalPool: 0,
						name: "Outrider",
						physicalPool: 1,
						requirements: {
							AND: [
								"Elf->Protector->Rider"
							]
						},
						resources: 10,
						setting: "Protector",
						skillPool: 9,
						skills: ["Any General->Bow", "Any General->Spear", "Any General->Observation", "Any Wise->Trails-wise", "Any General->Mounted Combat Training", "Any General->Animal Husbandry", "Any General->Mending", "Any General->Stealthy"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Daring"],
						years: 20
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel", "Elf->Etharch"],
						mentalPool: 0,
						name: "Lancer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Protector->Outrider",
								"Elf->Etharch->Second"
							]
						},
						resources: 12,
						setting: "Protector",
						skillPool: 10,
						skills: ["Elf Spell Song->Song of Burning Bright", "Elf Spell Song->Lament for the Fallen", "Any General->Lance", "Any General->Mounted Combat Training", "Any General->Shield Training", "Any General->Armor Training"],
						stock: "Elf",
						traitPool: 1,
						years: 50
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel", "Elf->Etharch"],
						mentalPool: 1,
						name: "Lieutenant",
						physicalPool: 0,
						requirements: {
							OR: [
								"Elf->Protector->Sword Singer",
								"Elf->Etharch->Sword Singer",
								"Elf->Protector->Lancer",
								"Elf->Citadel->Sea Captain",
								"Elf->Protector->2*Bowyer",
								"Elf->Protector->2*Spearbearer"
							]
						},
						resources: 10,
						setting: "Protector",
						skillPool: 7,
						skills: ["Elf Skill Song->Paean of Deeds", "Any General->Command", "Any General->Sword", "Any General->Shield Training", "Any General->Formation Fighting Training"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Elf Lifepath->Ear to the Ground"],
						years: 65
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel", "Elf->Etharch"],
						mentalPool: 1,
						name: "Captain",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Protector->Lieutenant",
								"Elf->Etharch->Prince/Princess",
								"Elf->Citadel->Sea Captain",
								"Elf->Etharch->Steward",
								"Elf->Protector->2*Sword Singer",
								"Elf->Etharch->2*Sword Singer"
							]
						},
						resources: 15,
						setting: "Protector",
						skillPool: 9,
						skills: ["Any General->Oratory", "Any General->Sword", "Any General->Command", "Any General->Tactics", "Any General->Formation Fighting Training", "Elf Spell Song->Monody of the March", "Elf Skill Song->Silent Fury", "Elf Spell Song->Hymn of Victory"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Elf Lifepath->Sworn to the Lord Protector"],
						years: 85
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel"],
						mentalPool: 0,
						name: "Armorer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Citadel->Shaper",
								"Elf->Protector->Bladesmith"
							]
						},
						resources: 15,
						setting: "Protector",
						skillPool: 7,
						skills: ["Any General->Armorer", "Any General->Etching", "Any General->Sewing", "Any General->Tanner", "Elf Skill Song->Antiphon Union Training"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Patient"],
						years: 90
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel"],
						mentalPool: 0,
						name: "Bladesmith",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Protector->Armorer",
								"Elf->Citadel->Shaper",
								"Elf->Protector->Bowyer",
								"Elf->Protector->Spearbearer"
							]
						},
						resources: 15,
						setting: "Protector",
						skillPool: 5,
						skills: ["Elf Skill Song->Riddle of Steel", "Any General->Etching", "Any Wise->Elven Blade-wise"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Elf Lifepath->Acute"],
						years: 80
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Elf->Wilderlands", "Elf->Citadel", "Elf->Etharch"],
						mentalPool: 1,
						name: "Lord Protector",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Protector->Captain",
								"Elf->Etharch->Prince/Princess"
							]
						},
						resources: 60,
						setting: "Protector",
						skillPool: 10,
						skills: ["Elf Spell Song->Strain of Far Sight", "Elf Spell Song->Anthem of Courage", "Elf Spell Song->Ballad of Rage", "Any General->Command", "Any General->Formation Fighting Training", "Any General->Administration", "Any General->Logistics", "Any General->Strategy"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Elf Lifepath->Sworn to Protect"],
						years: 125
					}
				]
			},
			"Path of Spite": {
				allowed: ["bwc"],
				name: "Path of Spite",
				stock: "Elf",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Griever",
						physicalPool: 0,
						resources: 0,
						setting: "Path of Spite",
						skillPool: 3,
						skills: ["Dark Elf Spell Song->Sorrow of Truth", "Any Wise->Dark Elf-wise"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Dark Elf Lifepath->Spite"],
						years: 3
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Wastrel",
						physicalPool: 0,
						requirements: {
							AND: [
								"Elf->Path of Spite->Griever"
							]
						},
						resources: 3,
						setting: "Path of Spite",
						skillPool: 6,
						skills: ["Any General->Scavenging", "Any General->Brawling", "Any Wise->Forest-wise", "Any Wise->Wasteland-wise", "Any Wise->Animal-wise"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Dark Elf Lifepath->Filthy", "Dark Elf Lifepath->Feral"],
						years: 25
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Thief",
						physicalPool: 0,
						requirements: {
							AND: [
								"Elf->Path of Spite->Griever"
							]
						},
						resources: 6,
						setting: "Path of Spite",
						skillPool: 6,
						skills: ["Any General->Lock Pick", "Any General->Stealthy", "Any General->Climbing", "Any General->Sleight of Hand", "Dark Elf Spell Song->Dirge of Night"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Dark Elf Lifepath->Thief"],
						years: 18
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Assassin",
						physicalPool: 1,
						requirements: {
							AND: [
								"Elf->Path of Spite->Griever"
							]
						},
						resources: 6,
						setting: "Path of Spite",
						skillPool: 7,
						skills: ["Any General->Intimidation", "Any General->Poisons", "Any General->Knives", "Dark Elf Spell Song->Keen of Terror"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Murderous", "Any Character->Callous", "Any Die->Cold Blooded"],
						years: 15
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Stalker",
						physicalPool: 0,
						requirements: {
							AND: [
								"Elf->Path of Spite->Griever"
							]
						},
						resources: 8,
						setting: "Path of Spite",
						skillPool: 8,
						skills: ["Any General->Hunting", "Any Wise->Elf-wise", "Any General->Tracking", "Any General->Trapper", "Any General->Observation", "Any General->Stealthy", "Any General->Throwing", "Any General->Javelin", "Dark Elf Spell Song->Supplication to Shadows"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Dark Elf Lifepath->Saturnine"],
						years: 20
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Deciever",
						physicalPool: 0,
						requirements: {
							AND: [
								"Elf->Path of Spite->Griever"
							]
						},
						resources: 10,
						setting: "Path of Spite",
						skillPool: 7,
						skills: ["Any General->Sleight of Hand", "Any General->Disguise", "Any General->Inconspicuous", "Dark Elf Spell Song->Rhyme of the Unraveler"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Dark Elf Lifepath->Deceptive"],
						years: 35
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Liar",
						physicalPool: 0,
						requirements: {
							AND: [
								"Elf->Path of Spite->Griever"
							]
						},
						resources: 8,
						setting: "Path of Spite",
						skillPool: 6,
						skills: ["Any General->Falsehood", "Any General->Soothing Platitudes", "Any General->Persuasion", "Dark Elf Spell Song->Twisted Tongue"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Any Character->Compulsive Liar"],
						years: 25
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Siren",
						physicalPool: 0,
						requirements: {
							OR: [
								"Elf->Path of Spite->Assassin",
								"Elf->Path of Spite->Deciever",
								"Elf->Path of Spite->Liar"
							]
						},
						resources: 20,
						setting: "Path of Spite",
						skillPool: 9,
						skills: ["Any General->Seduction", "Any General->Etiquette", "Any General->Persuasion", "Any General->Soothing Platitudes", "Any Wise->Gossip-wise", "Dark Elf Spell Song->Fugue of Discord", "Dark Elf Skill Song->Litany of Fools"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Any Callon->Charismatic", "Dark Elf Lifepath->Femme Fatale/Homme Fatal"],
						years: 55
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Servant of the Dark Blood"],
						mentalPool: 1,
						name: "Eremite",
						physicalPool: 0,
						requirements: {
							OR: [
								"Elf->Path of Spite->Siren",
								"Elf->Path of Spite->Wastrel",
								"Elf->Path of Spite->Stalker"
							]
						},
						resources: 15,
						setting: "Path of Spite",
						skillPool: 12,
						skills: ["Any General->Philosophy", "Any General->Ugly Truth", "Any General->Obscure History", "Any General->Symbology", "Any General->Strategy", "Any Wise->Elf-wise", "Any Wise->Orc-wise", "Any Wise->Dwarf-wise", "Any Wise->Man-wise", "Dark Elf Spell Song->Paean to the Dark Fire"],
						stock: "Elf",
						traitPool: 2,
						traits: ["Any Character->Remote", "Dark Elf Lifepath->Cold"],
						years: 150
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 5,
						mentalPool: 0,
						name: "Recluse",
						physicalPool: 1,
						requirements: {
							OR: [
								"Elf->Path of Spite->Eremite",
								"Elf->Path of Spite->3*ANY"
							]
						},
						resources: 25,
						setting: "Path of Spite",
						skillPool: 2,
						skills: ["Any General->Ancient History", "Any Wise->Dwarf-wise", "Any Wise->Elven Politics-wise", "Dark Elf Spell Song->Cut of the Quickened Mind"],
						stock: "Elf",
						traitPool: 1,
						traits: ["Dark Elf Lifepath->Vengeful"],
						years: 225
					}
				]
			}
		}
	},
	"Man": {
		agePool: [[10, 0, 5, 10], [14, 11, 6, 13], [16, 15, 6, 16], [25, 17, 7, 16], [29, 26, 7, 15], [35, 30, 7, 14], [40, 36, 7, 13], [55, 41, 7, 12], [65, 56, 7, 11], [79, 66, 7, 10], [80, 99999, 6, 9]],
		allowed: ["bwg", "bwc"],
		hasSetting: true,
		hasSubsetting: true,
		name: "Man",
		stride: 7,
		settings: {
			"City Dweller": {
				allowed: ["bwg", "bwc"],
				name: "City Dweller",
				stock: "Human",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 4,
						leads: ["Man->Servitude", "Man->Noble Court", "Man->Noble", "Man->Outcast", "Man->College of Magic"],
						mentalPool: 0,
						name: "City Born",
						physicalPool: 0,
						resources: 10,
						setting: "City Dweller",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						years: 12
					},
					{
						allowed: ["bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Man->Outcast", "Man->Noble Court", "Man->Religious"],
						mentalPool: 0,
						name: "Gifted Child",
						physicalPool: 0,
						resources: 4,
						setting: "City Dweller",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Misunderstood", "Man Special->Gifted", "Any Character->Abused", "Man Special->Spirit Familiar"],
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Runner",
						physicalPool: 1,
						resources: 7,
						setting: "City Dweller",
						skillPool: 3,
						skills: ["Any General->Streetwise", "Any General->Inconspicuous"],
						stock: "Human",
						traitPool: 1,
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude", "Man->Villager"],
						mentalPool: 0,
						name: "Urchin",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2/3"
							]
						},
						resources: 4,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Inconspicuous", "Any General->Falsehood", "Any General->Streetwise", "Any General->Stealthy"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Die->Sickly", "Any Callon->Fleet of Foot", "Man Lifepath->Unheeded"],
						years: 2
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude", "Man->Villager"],
						mentalPool: 0,
						name: "Beggar",
						physicalPool: 0,
						resources: 4,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any Wise->City-wise", "Any Wise->City Guard-wise", "Any Wise->Wealth-wise", "Any General->Inconspicuous", "Any General->Persuasion", "Any General->Falsehood"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Die->Lame", "Any Character->Downtrodden", "Any Character->Hurt", "Man Lifepath->Broken"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Professional Soldier"],
						mentalPool: 1,
						name: "Courier",
						physicalPool: 0,
						resources: 8,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Riding", "Any General->Streetwise", "Any Wise->Countryside-wise"],
						stock: "Human",
						traitPool: 1,
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Outcast", "Man->Servitude", "Man->Peasant"],
						mentalPool: 0,
						name: "Laborer",
						physicalPool: 1,
						resources: 4,
						setting: "City Dweller",
						skillPool: 2,
						skills: ["Any General->Ditch Digging", "Any General->Hauling"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Drunk", "Man Lifepath->Mind-Numbing Work"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Religious", "Man->Servitude", "Man->Villager", "Man->Nomad"],
						mentalPool: 1,
						name: "Pilgrim",
						physicalPool: 0,
						resources: 3,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Religious Diatribe", "Any Wise->City-wise", "Any Wise->Shrine-wise", "Any General->Doctrine"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Tall Tale Teller", "Any Character->Stinky"],
						years: 2
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Villager", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Groom",
						physicalPool: 1,
						resources: 5,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any Wise->Road-wise", "Any General->Driving", "Any General->Riding", "Any General->Animal Husbandry", "Any General->Mending", "Any Wise->City-wise", "Any Wise->Traveler-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Peripatetic"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Outcast", "Man->Servitude"],
						mentalPool: 0,
						name: "Duelist",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Noble->Squire",
								"Man->Noble Court->Squire",
								"Man->Outcast->1*ANY",
								"Man->Professional->1*ANY",
								"Man->Villager->Village Guard",
								"Man->City Dweller->City Guard",
								"Man->City Dweller->Guard Captain"
							]
						},
						resources: 8,
						setting: "City Dweller",
						skillPool: 7,
						skills: ["Any General->Sword", "Any General->Brawling", "Any General->Two-Fisted Fighting Training", "Any General->Streetwise", "Any General->Haggling", "Any General->Conspicuous", "Any Wise->Trial by Combat-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Mercenary", "Any Die->Cold Blooded", "Any Die->Fearless"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Noble Court"],
						mentalPool: 1,
						name: "Coin Clipper",
						physicalPool: 0,
						resources: 15,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Streetwise", "Any General->Forgery", "Any General->Falsehood", "Any General->Intimidation", "Any General->Counterfeiting", "Any Wise->Coin-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Die->Light Sleeper"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Villager", "Man->Servitude", "Man->Merchant House"],
						mentalPool: 0,
						name: "Pickpocket",
						physicalPool: 1,
						resources: 8,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Inconspicuous", "Any General->Streetwise", "Any General->Sleight of Hand", "Any Wise->Crowd-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Callon->Plain Faced"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Street Thug",
						physicalPool: 1,
						resources: 5,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Brawling", "Any General->Intimidation", "Any General->Streetwise", "Any Wise->Darkened Streets-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Cruel", "Any Callon->Street Smart"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Villager", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Criminal",
						physicalPool: 0,
						resources: 10,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Inconspicuous", "Any General->Streetwise", "Any General->Intimidation", "Any General->Knives", "Any General->Climbing"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Cynical", "Any Callon->Poker Face", "Any Die->Rainman", "Any Die->Alert"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->Villager"],
						mentalPool: 0,
						name: "Confidence Man",
						physicalPool: 0,
						resources: 12,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Falsehood", "Any General->Inconspicuous", "Any General->Disguise", "Any General->Persuasion", "Any Wise->Grift-wise"],
						stock: "Human",
						traitPool: 1,
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Servitude", "Man->Peasant", "Man->Outcast", "Man->Merchant House"],
						mentalPool: 0,
						name: "City Peddler",
						physicalPool: 0,
						resources: 10,
						setting: "City Dweller",
						skillPool: 7,
						skills: ["Any General->Mending", "Any General->Sing", "Any General->Haggling", "Any General->Chandler", "Any General->Persuasion", "Any General->Inconspicuous", "Any General->Falsehood"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->The Story"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Seafaring", "Man->Peasant", "Man->Servitude"],
						mentalPool: 0,
						name: "Sailor",
						physicalPool: 1,
						resources: 5,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Rigging", "Any General->Knots", "Any General->Brawling", "Any General->Mending", "Any General->Sing", "Any General->Gambling"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Superstitious", "Any Callon->Sea Legs"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Villager", "Man->Seafaring", "Man->Servitude", "Man->Noble Court", "Man->Religious", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 1,
						name: "Student",
						physicalPool: 0,
						resources: 5,
						setting: "City Dweller",
						skillPool: 11,
						skills: ["Any General->Write", "Any General->Read", "Any General->Philosophy", "Any General->Rule of Law", "Any General->History", "Any General->Symbology", "Any General->Anatomy", "Man Special->Astrology", "Any General->Inconspicuous", "Any General->Streetwise", "Any Wise->City-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Rabble-Rouser", "Any Character->Drunk", "Any Die->Geometric"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude", "Man->Noble Court"],
						mentalPool: 0,
						name: "Ganymede",
						physicalPool: 0,
						resources: 15,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any Wise->Fashion-wise", "Any General->Inconspicuous", "Any General->Conspicuous", "Any General->Soothing Platitudes"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Special->Catamite", "Any Character->Flamboyant", "Any Character->Comely", "Any Character->Sharp Dresser"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Noble Court", "Man->Outcast"],
						mentalPool: 1,
						name: "Dilettante",
						physicalPool: 0,
						resources: 8,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any Wise->Sorcery-wise", "Any General->Obscure History", "Any General->Falsehood"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Superstitious", "Any Die->Entropic", "Any Die->Cipher"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant", "Man->Outcast", "Man->Servitude", "Man->College of Magic"],
						mentalPool: 1,
						name: "Neophyte Sorcerer",
						physicalPool: 0,
						resources: 12,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Write", "Any General->Read", "Any General->Research", "Any General->Symbology", "Any Wise->Great Masters-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Extremely Respectful of One's Betters", "Any Character->Bitter", "Man Special->Gifted"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Outcast", "Man->Servitude", "Man->Religious"],
						mentalPool: 1,
						name: "Temple Acolyte",
						physicalPool: 0,
						resources: 10,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Doctrine", "Any General->Bureaucracy", "Any General->Read", "Any General->Write", "Any Wise->Temple-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Believer", "Man Lifepath->Tonsured", "Man Special->Faithful"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Peasant", "Man->Noble Court"],
						mentalPool: 0,
						name: "Sculptor",
						physicalPool: 0,
						resources: 8,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Sculpture", "Any General->Mason", "Any General->Blacksmith", "Any General->Carpentry", "Any Wise->Stone-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Passionate"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Peasant", "Man->Noble Court"],
						mentalPool: 0,
						name: "Painter",
						physicalPool: 0,
						resources: 5,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Painting", "Any General->Illuminations", "Any General->Anatomy", "Any Wise->Paint-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Odd", "Any Callon->Perspective", "Any Die->Greater Muse"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Peasant", "Man->Noble Court"],
						mentalPool: 1,
						name: "Composer",
						physicalPool: 0,
						resources: 5,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Music Composition", "Any General->Poetry", "Any General->Sing", "Any General->Musical Instrument"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Esoteric", "Any Character->Remote"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Peasant", "Man->Noble Court"],
						mentalPool: 1,
						name: "Dramaturge",
						physicalPool: 0,
						resources: 5,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Playwright", "Any General->Composition", "Any General->Write", "Any Wise->Drama-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Other Life"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Outcast", "Man->Professional Soldier"],
						mentalPool: 1,
						name: "Performer",
						physicalPool: 0,
						resources: 5,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Acting", "Any General->Persuasion", "Any General->Sing", "Any General->Falsehood", "Any General->Conspicuous", "Any General->Sleight of Hand", "Any General->Musical Instrument"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Colorful"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant", "Man->Outcast"],
						mentalPool: 1,
						name: "Tinkerer",
						physicalPool: 0,
						resources: 8,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Mending", "Any General->Scavenging", "Any Wise->Junk-wise"],
						stock: "Human",
						traitPool: 2,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Peasant", "Man->Outcast", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Coal Man",
						physicalPool: 0,
						resources: 5,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Firebuilding", "Any General->Streetwise", "Any Wise->Charcoal-wise", "Any General->Haggling"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Hacking Cough"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant"],
						mentalPool: 0,
						name: "Seamstress",
						physicalPool: 0,
						resources: 10,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Sewing", "Any General->Embroidery", "Any Wise->Clothing-wise", "Any Wise->Fashion-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Fretful", "Any Character->Sharp Dresser"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant", "Man->Merchant House"],
						mentalPool: 0,
						name: "Barkeep",
						physicalPool: 0,
						resources: 15,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any Wise->Drink-wise", "Any Wise->Drunk-wise", "Any General->Persuasion"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Good Listener"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant", "Man->Merchant House"],
						mentalPool: 1,
						name: "Shopkeeper",
						physicalPool: 0,
						resources: 16,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any Wise->Merchant-wise", "Any General->Haggling", "Any General->Accounting", "Any General->Observation"],
						stock: "Human",
						traitPool: 0,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant"],
						mentalPool: 0,
						name: "Baker",
						physicalPool: 0,
						resources: 10,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Baking", "Any General->Cooking", "Any Wise->Daily Bread-wise", "Any Wise->Sweet Tooth-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Floury"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->Peasant", "Man->Villager"],
						mentalPool: 0,
						name: "Alewife",
						physicalPool: 1,
						requirements: {
							LIMIT: [
								"GENDER->FEMALE"
							]
						},
						resources: 12,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Brewer", "Any General->Mending", "Any General->Drinking", "Any General->Administration", "Any Wise->Drunk Husband-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Domineering Presence"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->Peasant", "Man->Villager"],
						mentalPool: 0,
						name: "Conner",
						physicalPool: 0,
						resources: 12,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Brewer", "Any General->Mending", "Any General->Drinking", "Any General->Cooper", "Any Wise->Beer-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Red Cheeks", "Any Character->Drunk"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Outcast", "Man->Professional Soldier", "Man->Merchant House"],
						mentalPool: 1,
						name: "Clerk",
						physicalPool: 0,
						resources: 9,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Bureaucracy", "Any General->Read", "Any General->Write", "Any General->Accounting", "Any Wise->Bribe-wise", "Any Wise->Paperwork-wise"],
						stock: "Human",
						traitPool: 1,
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant"],
						mentalPool: 1,
						name: "Scribe",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->Religious->Acolyte",
								"Man->Villager->Acolyte",
								"Man->City Dweller->Clerk",
								"Man->Religious->Clerk",
								"Man->Villager->Clerk"
							]
						},
						resources: 10,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Write", "Any General->Illuminations", "Any General->Read", "Any Wise->Handwriting-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Near-Sighted", "Any Character->Cramped Hands"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant", "Man->Merchant House"],
						mentalPool: 1,
						name: "Accountant",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Clerk",
								"Man->Religious->Clerk",
								"Man->Villager->Clerk",
								"Man->Noble->Young Lady",
								"Man->Noble Court->Young Lady",
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student"
							]
						},
						resources: 15,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Accounting", "Any General->Bureaucracy", "Any General->Read", "Any General->Write", "Any Wise->Ledger-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Bored"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Outcast", "Man->Noble Court", "Man->College of Magic"],
						mentalPool: 1,
						name: "Scholar",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Scribe",
								"Man->Religious->Scribe",
								"Man->Outcast->Thinker",
								"Man->Religious->Archivist",
								"Man->Religious->Interpreter",
								"Man->Religious->Custodian",
								"Man->City Dweller->Bishop",
								"Man->Religious->Bishop",
								"Skill->Man Sorcerous->Sorcery",
								"Skill->Man Sorcerous->Enchanting",
								"Skill->Man Sorcerous->Summoning"
							]
						},
						resources: 15,
						setting: "City Dweller",
						skillPool: 11,
						skills: ["Any General->Read", "Any General->Research", "Any General->History", "Any General->Philosophy", "Any General->Symbology", "Any General->Instruction", "Any General->Illuminations", "Any General->Foreign Languages", "Any General->Ancient Languages"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Know It All", "Any Die->Bookworm"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant", "Man->Outcast", "Man->Merchant House"],
						mentalPool: 0,
						name: "Moneylender",
						physicalPool: 0,
						resources: 20,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any Wise->Currency-wise", "Any General->Haggling", "Any General->Accounting"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Penny-wise"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant", "Man->Outcast", "Man->Merchant House"],
						mentalPool: 1,
						name: "Tax Collector",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"NOT->LP*2"
							]
						},
						resources: 18,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Intimidation", "Any General->Accounting", "Any General->Haggling", "Any General->Interrogation"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Hard-Hearted"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Outcast", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Taskmaster",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"NOT->LP*2"
							]
						},
						resources: 15,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Intimidation", "Any General->Brawling", "Any General->Sing", "Any General->Conspicuous", "Any Wise->Laborer-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Intimidating", "Any Callon->Dreadful"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Seafaring", "Man->Outcast"],
						mentalPool: 0,
						name: "Mercenary Captain",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Sailor",
								"Man->Professional Soldier->Sailor",
								"Man->Seafaring->Sailor",
								"Man->Villager->Sailor",
								"Man->Outcast->Pirate",
								"Man->Noble->Knight",
								"Man->Noble Court->Knight"
							]
						},
						resources: 15,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Pilot", "Any Wise->Fat Merchant-wise", "Any General->Sword", "Any General->Climbing", "Any General->Intimidation"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Predatory"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "City Guard",
						physicalPool: 1,
						resources: 9,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Brawling", "Any General->Intimidation", "Any General->Drinking", "Any General->Appropriate Weapons", "Any General->Armor Training"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Drunk"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Sergeant-at-Arms",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Villager->Village Guard",
								"Man->City Dweller->City Guard",
								"Man->City Dweller->Guard Captain",
								"Man->Seafaring->Marine",
								"Man->Seafaring->First Mate",
								"Man->Professional Soldier->Foot Soldier",
								"Man->Outcast->Freebooter",
								"Man->Noble->Squire",
								"Man->Noble Court->Squire",
								"Man->Noble Court->Man-at-Arms",
								"Man->Professional Soldier->Cavalryman"
							]
						},
						resources: 11,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Intimidation", "Any General->Appropriate Weapons", "Any General->Armor Training", "Any General->Field Dressing"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Overworked"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Outcast", "Man->Noble Court"],
						mentalPool: 1,
						name: "Guard Captain",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Man->Professional Soldier->Captain",
								"Man->Villager->Village Sergeant",
								"Man->Villager->Corrupt Sergeant",
								"Man->Professional Soldier->Sergeant"
							]
						},
						resources: 15,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Etiquette", "Any General->Riding", "Any General->Intimidation", "Any General->Command", "Any General->Appropriate Weapons"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Exasperated"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant", "Man->Professional Soldier", "Man->Seafaring"],
						mentalPool: 0,
						name: "Apprentice",
						physicalPool: 1,
						resources: 8,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Mending", "Any General->Write", "Any General->Read", "Any General->Hauling", "Any General->Driving", "Any General->Ditch Digging"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Broken In", "Man Lifepath->Back-Breaking Labor"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Apprentice Artisan",
						physicalPool: 1,
						resources: 10,
						setting: "City Dweller",
						skillPool: 8,
						skills: ["Any Wise->Artisan-wise", "Any General->Mason", "Any General->Blacksmith", "Any General->Coppersmith", "Any General->Locksmith", "Any General->Weaponsmith", "Any General->Whitesmith", "Any General->Carpentry", "Any General->Read", "Any General->Write", "Any General->Jargon"],
						stock: "Human",
						traitPool: 1,
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant", "Man->Professional Soldier", "Man->Seafaring", "Man->Merchant House"],
						mentalPool: 0,
						name: "Journeyman",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Apprentice",
								"Man->Nomad->Apprentice",
								"Man->Professional Soldier->Apprentice",
								"Man->Villager->Apprentice"
							]
						},
						resources: 15,
						setting: "City Dweller",
						skillPool: 7,
						skills: ["Any General->Haggling", "Any General->Appraisal", "Any General->Blacksmith", "Any General->Carpentry", "Any General->Tanner", "Any General->Potter", "Any General->Cooper"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Made Man", "Any Die->Geometric"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Noble Court"],
						mentalPool: 0,
						name: "Engraver",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 15,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Engraving", "Any General->Etching", "Any General->Jargon"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Gentle but Firm"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Professional Soldier", "Man->Noble Court", "Man->Nomad"],
						mentalPool: 0,
						name: "Saddler",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 25,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Saddlery", "Any General->Tanner", "Any General->Sewing", "Any General->Embroidery", "Any General->Mending", "Any Wise->Mount-wise"],
						stock: "Human",
						traitPool: 1,
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Noble Court", "Man->Outcast", "Man->Merchant House"],
						mentalPool: 0,
						name: "Armorer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 25,
						setting: "City Dweller",
						skillPool: 7,
						skills: ["Any Wise->Swordsman-wise", "Any General->Blacksmith", "Any General->Tanner", "Any General->Armorer", "Any General->Weaponsmith"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Diligent"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->Outcast"],
						mentalPool: 1,
						name: "Plumber",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 20,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Plumbing", "Any General->Engineering", "Any General->Coppersmith", "Any Wise->Waterworks-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Touch of Madness"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Villager"],
						mentalPool: 1,
						name: "Locksmith",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 13,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Locksmith", "Any General->Haggling", "Any Wise->Lock-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Steady Hands"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Villager", "Man->Merchant House"],
						mentalPool: 0,
						name: "Jeweler",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 20,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Jeweler", "Any General->Lapidary", "Any General->Appraisal", "Any General->Haggling", "Any General->Falsehood"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Guarded"],
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Noble Court", "Man->Professional Soldier", "Man->Villager"],
						mentalPool: 0,
						name: "Gaol Warden",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Born Noble",
								"Man->City Dweller->Merchant",
								"Man->Villager->Merchant",
								"Man->Professional Soldier->Sergeant",
								"Man->Noble Court->Man-at-Arms",
								"Man->City Dweller->Judge"
							]
						},
						resources: 15,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Administration", "Any General->Etiquette", "Any Wise->Gaol-wise", "Any Wise->Everybody's Innocent-wise"],
						stock: "Human",
						traitPool: 1,
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Noble Court", "Man->Villager"],
						mentalPool: 1,
						name: "Advocate",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->Noble->Young Lady",
								"Man->Noble Court->Young Lady"
							]
						},
						resources: 25,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Rule of Law", "Any General->Bureaucracy", "Any General->Persuasion", "Any General->History", "Any General->Rhetoric"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Shrewd"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Noble Court", "Man->Villager"],
						mentalPool: 1,
						name: "Doctor",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->Noble->Young Lady",
								"Man->Noble Court->Young Lady"
							]
						},
						resources: 20,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Anatomy", "Any General->Apothecary", "Any General->Bloodletting", "Any General->Surgery", "Any General->Soothing Platitudes"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Frustrated"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->Professional Soldier"],
						mentalPool: 1,
						name: "Physician",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Peasant->Midwife",
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->Noble->Young Lady",
								"Man->Noble Court->Young Lady"
							]
						},
						resources: 15,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Herbalism", "Any General->Apothecary", "Any General->Anatomy", "Any General->Research", "Any Wise->Herbalist-wise"],
						stock: "Human",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude", "Man->Religious"],
						mentalPool: 0,
						name: "Hospital Warden",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble,->1*ANY",
								"Man->Noble Court->1*ANY",
								"Man->Religious->1*ANY"
							]
						},
						resources: 15,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Administration", "Any Wise->Beggar-wise", "Any Wise->Vagrant-wise", "Any Wise->Leper-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Overworked", "Any Character->Generous", "Any Character->Venal", "Any Character->Hypochondriac"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Man->Noble Court", "Man->Noble", "Man->Merchant House"],
						mentalPool: 0,
						name: "Banker",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Merchant",
								"Man->Villager->Merchant",
								"Man->City Dweller->Moneylender",
								"Man->Noble Court->Steward",
								"Man->Seafaring->Steward",
								"Man->City Dweller->Accountant",
								"Man->Noble Court->Chamberlain"
							]
						},
						resources: 60,
						setting: "City Dweller",
						skillPool: 4,
						skills: ["Any General->Accounting", "Any General->Administration", "Any Wise->Currency-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Intense"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Peasant", "Man->Noble Court", "Man->Merchant House", "Man->Nomad"],
						mentalPool: 1,
						name: "Merchant",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Master Craftsman",
								"Man->Villager->Master Craftsman",
								"Man->Noble Court->Master of Horses",
								"Man->Noble Court->Master of Hounds",
								"Man->City Dweller->Moneylender",
								"Man->Noble Court->Steward",
								"Man->Seafaring->Steward",
								"Man->City Dweller->Jeweler",
								"Man->City Dweller->Saddler",
								"Man->City Dweller->Armorer",
								"Man->Noble Court->Armorer",
								"Man->Professional Soldier->Armorer",
								"Man->Villager->Cobbler",
								"Man->Noble Court->Courtier",
								"Man->Noble Court->Chamberlain"
							]
						},
						resources: 30,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Accounting", "Any General->Haggling", "Any Wise->Supplier-wise", "Any Wise->Lord-wise", "Any Wise->Peasant-wise"],
						stock: "Human",
						traitPool: 0,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Outcast", "Man->Noble Court", "Man->College of Magic"],
						mentalPool: 1,
						name: "Sorcerer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->City Dweller->Neophyte Sorcerer",
								"Man->Outcast->Neophyte Sorcerer",
								"Man->Noble->Arcane Devotee",
								"Man->Seafaring->Weather Witch"
							]
						},
						resources: 32,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Man Magical->Sorcery", "Man Magical->Enchanting", "Any General->Calligraphy"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Villager", "Man->Seafaring", "Man->Servitude", "Man->Noble Court", "Man->Religious", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Temple Priest",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Religious Acolyte",
								"Man->City Dweller->Temple Acolyte",
								"Man->Religious->Temple Acolyte",
								"Man->Religious->Military Order"
							]
						},
						resources: 20,
						setting: "City Dweller",
						skillPool: 8,
						skills: ["Any Wise->Church Politics-wise", "Any General->Doctrine", "Any General->Oratory", "Any General->Suasion", "Any General->Symbology"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Vested", "Any Character->Aloof", "Any Character->Imperious", "Any Character->Strong-Willed"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->Villager", "Man->Merchant House"],
						mentalPool: 1,
						name: "Judge",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Villager->Town Official",
								"Man->City Dweller->Tax Collector",
								"Man->Villager->Tax Collector",
								"Man->Noble Court->Bailiff",
								"Man->Noble Court->Justiciar"
							]
						},
						resources: 30,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Rule of Law", "Any General->Amercement", "Any Wise->Criminal-wise", "Any General->Interrogation"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Ornery", "Any Die->Quick-Witted"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Noble Court", "Man->Outcast", "Man->Merchant House"],
						mentalPool: 1,
						name: "Municipal Minister",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Villager->Town Official",
								"Man->City Dweller->Scholar",
								"Man->Religious->Priest",
								"Man->City Dweller->Bishop",
								"Man->Religious->Bishop",
								"Man->Professional Soldier->Captain",
								"Man->Seafaring->Ship's Captain",
								"Man->City Dweller->Artisan",
								"Man->Nomad->Artisan",
								"Man->City Dweller->Master Craftsman",
								"Man->Villager->Master Craftsman",
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Man->Noble Court->Courtier",
								"Man->Noble Court->Master of Horses"
							]
						},
						resources: 30,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Persuasion", "Any General->Rule of Law", "Any General->Administration", "Any General->Oratory", "Any Wise->Law-wise", "Any Wise->Minister-wise"],
						stock: "Human",
						traitPool: 0,
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Noble Court", "Man->Merchant House"],
						mentalPool: 1,
						name: "Artisan",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Apprentice Artisan",
								"Man->Professional Soldier->Engineer",
								"Man->Seafaring->Engineer",
								"Man->City Dweller->Master Craftsman",
								"Man->Villager->Master Craftsman"
							]
						},
						resources: 45,
						setting: "City Dweller",
						skillPool: 9,
						skills: ["Any General->Jargon", "Any General->Mason", "Any General->Engineering", "Any General->Architect"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Self-Confident"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 3,
						leads: ["Man->Villager", "Man->Noble Court", "Man->Professional Soldier", "Man->Merchant House"],
						mentalPool: 1,
						name: "Master Craftsman",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->City Dweller->Locksmith",
								"Man->City Dweller->Plumber",
								"Man->City Dweller->Engraver",
								"Man->City Dweller->Saddler",
								"Man->City Dweller->Armorer",
								"Man->Noble Court->Armorer",
								"Man->Professional Soldier->Armorer",
								"Man->Noble Court->Atilliator",
								"Man->Professional Soldier->Atilliator",
								"Man->Villager->Cobbler",
								"Man->Villager->Bowyer",
								"Man->City Dweller->Taskmaster",
								"Man->Servitude->Taskmaster",
								"Man->Slave Raider->Taskmaster",
								"Man->Villager->Taskmaster"
							],
							AND: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 45,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any Wise->Craftsman-wise", "Any Wise->Artisan-wise", "Any Wise->Materials-wise", "Any Wise->Tools-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Ambitious", "Any Callon->Charismatic"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->Religious"],
						mentalPool: 1,
						name: "Bishop",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Religious->Archpriest",
								"Man->Religious->Canon",
								"Man->Noble Court->Steward",
								"Man->Seafaring->Steward",
								"Man->Noble Court->Chamberlain",
								"Trait->Man Lifepath->Your Grace"
							]
						},
						resources: 60,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Etiquette", "Any General->Bureaucracy", "Any General->Ritual", "Any Wise->Church-wise", "Any Wise->City-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Holier"],
						years: 12
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						leads: ["Man->Peasant", "Man->Villager", "Man->Noble", "Man->Seafaring", "Man->Servitude", "Man->Noble Court", "Man->Religious", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 1,
						name: "Magnate",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Merchant",
								"Man->Villager->Merchant",
								"Man->Noble Court->Master of Horses"
							]
						},
						resources: 75,
						setting: "City Dweller",
						skillPool: 6,
						skills: ["Any General->Administration", "Any Wise->Merchant-wise", "Any Wise->Court-wise", "Any Wise->Commodities-wise", "Any Wise->Pirates-wise", "Any Wise->Bandit-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Self-Satisfied", "Any Character->Greedy", "Man Lifepath->Affinity for Business"],
						years: 12
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Religious"],
						mentalPool: 1,
						name: "City Wife",
						physicalPool: 0,
						requirements: {
							TEXT: [
								"Players who take the Village Wife lifepath may also choose their husban's lifepath from the Villager setting. The Village Wife may choose from her husband's skills -she gets half of his skill points, rounded down- and she gets half of her husband's Resources."]
						},
						resources: 5,
						setting: "City Dweller",
						skillPool: 2,
						skills: ["Any General->Child-Rearing", "Any Wise->Husband-wise"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Noble Court", "Man->Religious", "Man->Death Cult"],
						mentalPool: 0,
						name: "Evangelist",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Dilettante",
								"Man->Religious->1*ANY",
								"Man->Noble Court->Court Summoner",
								"Man->College of Magic->Master Summoner",
								"Man->Outcast->Mad Summoner",
								"Man->Outcast->Crazy Witch",
								"Man->Seafaring->Weather Witch"
							]
						},
						resources: 6,
						setting: "City Dweller",
						skillPool: 5,
						skills: ["Any General->Empyrealia", "Any General->Demonology", "Any General->Oratory", "Any Wise->Cultist-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Believer", "Man Special->Fiery"],
						years: 3
					}
				]
			},
			"College of Magic": {
				allowed: ["bwc"],
				name: "College of Magic",
				stock: "Human",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Professional Soldier", "Man->Servitude"],
						mentalPool: 0,
						name: "Supplicant",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2",
								"IS->UNIQUE"
							]
						},
						resources: 3,
						setting: "College of Magic",
						skillPool: 2,
						skills: ["Any General->Animal Husbandry", "Any General->Firebuilding"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Broken In", "Man Special->Gifted", "Any Die->Second Sight", "Any Die->Fey Blood"],
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 0,
						name: "Junior Student",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->College of Magic->Supplicant",
								"Man->Noble->Arcane Devotee",
								"Man->Noble Court->Apt Pupil",
								"Man->Outcast->Apt Pupil",
								"Man->Professional Soldier->Apt Pupil",
								"Man->Religious->Apt Pupil",
								"Man->City Dweller->Neophyte Sorcerer",
								"Man->Outcast->Neophyte Sorcerer"
							],
							LIMIT: [
								"IS->UNIQUE"
							]
						},
						resources: 5,
						setting: "College of Magic",
						skillPool: 8,
						skills: ["Any General->Read", "Any General->Write", "Any General->Ancient History", "Man Magical->Circination", "Any General->Illuminations", "Man Special->Astrology", "Any General->Symbology"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Hazed"],
						years: 2
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 1,
						name: "Senior Student",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->College of Magic->Junior Student",
								"Man->City Dweller->Sorcerer"
							],
							LIMIT: [
								"IS->UNIQUE"
							]
						},
						resources: 10,
						setting: "College of Magic",
						skillPool: 8,
						skills: ["Any General->Calligraphy", "Any General->Rhetoric", "Any General->Aura Reading", "Any General->Empyrealia", "Any General->Demonology", "Any General->Doctrine", "Any Wise->School of Magic-wise", "Any Wise->Junior Student-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Graduate", "Man Special->Bully"],
						years: 2
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Religious", "Man->Outcast", "Man->City Dweller"],
						mentalPool: 1,
						name: "Adjunct",
						physicalPool: 0,
						requirements: {
							AND: [
								"Man->College of Magic->Senior Student"
							]
						},
						resources: 10,
						setting: "College of Magic",
						skillPool: 7,
						skills: ["Any General->Research", "Any General->Folklore", "Man Magical->Alchemy", "Any General->Taxidermy", "Any Wise->Library-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Overworked", "Any Callon->Familiar Face"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->City Dweller", "Man->Outcast", "Man->Seafaring"],
						mentalPool: 1,
						name: "Master Sorcerer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->College of Magic->Adjunct",
								"Man->Noble Court->Court Sorcerer"
							]
						},
						resources: 30,
						setting: "College of Magic",
						skillPool: 6,
						skills: ["Man Magical->Sorcery", "Any General->Instruction", "Any Wise->Facet-wise", "Any Wise->Aura-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Versatile", "Any Die->Sixth Sense"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 1,
						name: "Master Enchanter",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->College of Magic->Adjunct",
								"Man->Noble Court->Court Enchanter"
							]
						},
						resources: 30,
						setting: "College of Magic",
						skillPool: 6,
						skills: ["Man Magical->Enchanting", "Any General->Instruction", "Any General->Carving", "Any General->Etching", "Any General->Herbalism", "Any General->Jeweler", "Any Wise->Vessel-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Callon->Nimble", "Any Die->Practiced Precision"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 1,
						name: "Master Summoner",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->College of Magic->Adjunct",
								"Man->Noble Court->Court Summoner"
							]
						},
						resources: 20,
						setting: "College of Magic",
						skillPool: 8,
						skills: ["Man Magical->Summoning", "Any General->Instruction", "Man Magical->Bargaining", "Any General->Ugly Truth", "Any General->Soothing Platitudes", "Any General->Rule of Law", "Any General->Philosophy", "Any Wise->Scheme-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Die->Extrovert", "Any Die->Fearless", "Any Die->Obscure Aura"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->Religious", "Man->Outcast"],
						mentalPool: 0,
						name: "Researcher",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->College of Magic->Adjunct",
								"Man->City Dweller->Scholar"
							],
							LIMIT: [
								"IS->UNIQUE"
							]
						},
						resources: 15,
						setting: "College of Magic",
						skillPool: 12,
						skills: ["Any General->Research", "Any General->Composition", "Any General->Cartography", "Any General->Cryptography", "Any General->Doctrine", "Any General->Apothecary", "Any General->Ritual", "Man Magical->Death Art", "Any General->Foreign Languages", "Any Wise->Dark Arts-wise", "Any Wise->Elven Songs-wise", "Any Wise->Orc Rituals-wise", "Any Wise->Dwarven Arts-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Myopic", "Any Die->Bookworm", "Any Character->Speaker of the Secret Language"],
						years: 10
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Noble Court", "Man->City Dweller"],
						mentalPool: 1,
						name: "Councillor",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->College of Magic->Master Sorcerer",
								"Man->College of Magic->Master Enchanter",
								"Man->College of Magic->Master Summoner"
							]
						},
						resources: 45,
						setting: "College of Magic",
						skillPool: 6,
						skills: ["Any General->Administration", "Any General->Rhetoric", "Any General->Wine Tasting", "Any Wise->Troubled Student-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Council of Mages ", "Man Lifepath->Imperious Demeanor"],
						years: 5
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						leads: ["Man->Noble Court", "Man->Religious"],
						mentalPool: 0,
						name: "Headmaster",
						physicalPool: 0,
						requirements: {
							AND: [
								"Man->College of Magic->Councillor"
							]
						},
						resources: 50,
						setting: "College of Magic",
						skillPool: 7,
						skills: ["Any General->Oratory", "Any General->Etiquette", "Any General->Poetry", "Any General->Strategy Games", "Any General->Vintner", "Any Wise->Dark Secret-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Die->Stoic", "Man Special->Master of Mages", "Man Lifepath->Domineering Presence"],
						years: 12
					}
				]
			},
			"Death Cult": {
				allowed: ["bwc"],
				name: "Death Cult",
				stock: "Human",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude"],
						mentalPool: 0,
						name: "Harem Slave",
						physicalPool: 0,
						resources: 3,
						setting: "Death Cult",
						skillPool: 4,
						skills: ["Any Wise->Creepy Priest-wise", "Any Wise->Disgusting Necromancer-wise", "Any Wise->Death Cult-wise", "Any Monstrous->Escape Artist"],
						stock: "Human",
						traitPool: 2,
						traits: ["Orc Lifepath->Numb"],
						years: 3
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->Servitude"],
						mentalPool: 0,
						name: "Death Cultist",
						physicalPool: 0,
						resources: 5,
						setting: "Death Cult",
						skillPool: 3,
						skills: ["Any Wise->Death-wise", "Any Wise->Riot-wise", "Any Wise->Secret Cult Worship-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Zealot", "Man Special->Suicidal"],
						years: 2
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->Servitude"],
						mentalPool: 0,
						name: "Grave Robber",
						physicalPool: 0,
						resources: 7,
						setting: "Death Cult",
						skillPool: 4,
						skills: ["Any General->Ditch Digging", "Any Wise->Graveyard-wise", "Any Wise->Night Watch-wise", "Any Wise->Shovel-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Lunatic"],
						years: 3
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->City Dweller"],
						mentalPool: 1,
						name: "Spy",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Outcast->Cultist",
								"Man->Outcast->Insurrectionist"
							]
						},
						resources: 10,
						setting: "Death Cult",
						skillPool: 7,
						skills: ["Any General->Inconspicuous", "Any General->Stealthy", "Any General->Falsehood", "Any General->Forgery", "Any General->Observation", "Any Wise->Righteous Priest-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Monstrous->Furtive", "Any Die->Manhunter"],
						years: 4
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->Servitude", "Man->City Dweller"],
						mentalPool: 0,
						name: "Factotum",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Death Cult->Spy",
								"Man->Professional Soldier->Spy",
								"Man->Death Cult->Tomb Guard",
								"Man->Outcast->Deranged",
								"Man->City Dweller->Evangelist",
								"Man->Outcast->Insurrectionist"
							]
						},
						resources: 15,
						setting: "Death Cult",
						skillPool: 7,
						skills: ["Any General->Haggling", "Any General->Persuasion", "Any General->Hauling", "Any General->Appraisal", "Any General->Taxidermy", "Any Wise->Local Law-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Polite", "Man Special->Efficient", "Any Die->Stoic"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->Servitude"],
						mentalPool: 0,
						name: "Tomb Guard",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Outcast->Cultist",
								"Man->Outcast->Gravedigger",
								"Man->Outcast->Freebooter",
								"Man->Professional Soldier->1*ANY"
							]
						},
						resources: 10,
						setting: "Death Cult",
						skillPool: 5,
						skills: ["Any General->Spear", "Any General->Knives", "Any General->Brawling", "Any Wise->Walking Corpse-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Disfigured", "Any Die->Loyal"],
						years: 4
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->Religious"],
						mentalPool: 1,
						name: "Death Priest",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Villager->Venal Priest",
								"Man->Outcast->Heretic Priest"
							]
						},
						resources: 25,
						setting: "Death Cult",
						skillPool: 6,
						skills: ["Any General->Command", "Any General->Ritual", "Any Wise->God of Death-wise", "Any Wise->Death Cult-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Special->Creepy", "Man Special->Invocations of the Damned", "Any Die->Iron Will", "Man Special->Cult Leader"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude"],
						mentalPool: 0,
						name: "Death Artist",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Outcast->Evil Necromancer",
								"Man->Noble Court->Apt Pupil",
								"Man->Outcast->Apt Pupil",
								"Man->Professional Soldier->Apt Pupil",
								"Man->Religious->Apt Pupil",
								"Man->Outcast->Rogue Wizard"
							]
						},
						resources: 20,
						setting: "Death Cult",
						skillPool: 8,
						skills: ["Man Magical->Death Art", "Any Wise->Tomb-wise", "Any Wise->Orc Servant-wise", "Any Wise->Evil Necromancer-wise", "Any Wise->Death Cult-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Cynical", "Any Die->Mind over Matter", "Any Die->Missing Limb", "Any Die->Paranoid Ear", "Any Callon->Meticulous", "Man Special->Corrupted"],
						years: 10
					}
				]
			},
			"Noble": {
				allowed: ["bwg", "bwc"],
				name: "Noble",
				stock: "Human",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 5,
						leads: ["Man->Peasant", "Man->Villager", "Man->City Dweller", "Man->Seafaring", "Man->Servitude", "Man->Religious", "Man->Professional Soldier", "Man->Outcast", "Man->College of Magic"],
						mentalPool: 0,
						name: "Born Noble",
						physicalPool: 0,
						resources: 15,
						setting: "Noble",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Mark of Privilage", "Man Lifepath->Your Lordship", "Man Lifepath->Your Eminence", "Man Lifepath->Your Grace"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->City Dweller", "Man->Religious"],
						mentalPool: 0,
						name: "Bastard",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2"
							]
						},
						resources: 15,
						setting: "Noble",
						skillPool: 4,
						skills: ["Any Wise->Family Secret-wise", "Any General->Etiquette", "Any General->Extortion"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Special->Bastard", "Any Character->Bitter", "Any Character->Cynical", "Any Character->Happy-Go-Lucky"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Servitude"],
						mentalPool: 0,
						name: "Page",
						physicalPool: 1,
						requirements: {
							LIMIT: [
								"IS->LP*2"
							]
						},
						resources: 15,
						setting: "Noble",
						skillPool: 7,
						skills: ["Any General->Riding", "Any General->Brawling", "Any General->Read", "Any General->Write", "Any General->Sword", "Any General->Etiquette"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Noble Court"],
						mentalPool: 1,
						name: "Student",
						physicalPool: 0,
						resources: 10,
						setting: "Noble",
						skillPool: 8,
						skills: ["Any General->Write", "Any General->Read", "Any General->Rule of Law", "Any General->Oratory", "Any General->Doctrine", "Any General->Etiquette"],
						stock: "Human",
						traitPool: 1,
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Servitude", "Man->Outcast"],
						mentalPool: 1,
						name: "Squire",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Noble->Page",
								"Man->Noble Court->Page",
								"Man->Professional Soldier->1*ANY"
							]
						},
						resources: 15,
						setting: "Noble",
						skillPool: 9,
						skills: ["Any General->Sword", "Any General->Mounted Combat Training", "Any General->Shield Training", "Any General->Armor Training", "Any General->Lance", "Any General->Knives", "Any General->Crossbow"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Noble Court", "Man->Outcast", "Man->College of Magic"],
						mentalPool: 1,
						name: "Arcane Devotee",
						physicalPool: 0,
						resources: 10,
						setting: "Noble",
						skillPool: 6,
						skills: ["Any General->Calligraphy", "Any General->Read", "Any General->Write", "Any General->Research", "Any General->Symbology"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Base Humility", "Man Special->Gifted"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Religious", "Man->Noble Court"],
						mentalPool: 1,
						name: "Religious Acolyte",
						physicalPool: 0,
						resources: 10,
						setting: "Noble",
						skillPool: 6,
						skills: ["Any General->Doctrine", "Any General->Bureaucracy", "Any General->Read", "Any General->Write", "Any General->Etiquette"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Tonsured", "Man Special->Faithful"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Noble Court", "Man->Religious"],
						mentalPool: 1,
						name: "Young Lady",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2/3",
								"IS->UNIQUE"
							]
						},
						resources: 20,
						setting: "Noble",
						skillPool: 11,
						skills: ["Any General->Write", "Any General->Read", "Any General->Etiquette", "Man Special->Astrology", "Any General->Musical Instrument", "Any General->Composition", "Any General->Field Dressing", "Any General->Apothecary", "Any General->Doctrine"],
						stock: "Human",
						traitPool: 2,
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Outcast", "Man->Religious"],
						mentalPool: 0,
						name: "Knight",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Noble->Squire",
								"Man->Noble Court->Squire",
								"Man->Professional Soldier->Cavalryman"
							]
						},
						resources: 20,
						setting: "Noble",
						skillPool: 10,
						skills: ["Any General->Mounted Combat Training", "Any General->Shield Training", "Any General->Armor Training", "Any General->Appropriate Weapons", "Any General->Intimidation", "Any General->Hunting", "Any General->Conspicuous"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Sworn Homage"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Religious", "Man->Noble Court"],
						mentalPool: 1,
						name: "Lady",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Young Lady",
								"Man->Noble Court->Young Lady",
								"Man->Noble Court->Courtier",
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Man->City Dweller->City Wife"
							],
							TEXT: [
								"If City Wife is chosen, Magnate or Bishop must be the Husband's lifepath."
							]
						},
						resources: 25,
						setting: "Noble",
						skillPool: 11,
						skills: ["Any General->Etiquette", "Any General->Estate Management", "Any General->Persuasion", "Any General->Seduction", "Any General->Inconspicuous", "Any General->Doctrine", "Any Wise->Husband-wise", "Any Wise->Estate-wise", "Any Wise->Staff-wise", "Any Wise->Court-wise"],
						stock: "Human",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						leads: ["Man->Professional Soldier", "Man->Noble Court", "Man->City Dweller"],
						mentalPool: 1,
						name: "Lord",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Trait->Man Lifepath->Your Lordship"
							]
						},
						resources: 50,
						setting: "Noble",
						skillPool: 6,
						skills: ["Any General->Hunting", "Any General->Dance", "Any General->Sing", "Any General->Falconry", "Any General->Estate Management"],
						stock: "Human",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Man->City Dweller", "Man->Noble Court", "Man->Outcast", "Man->Religious"],
						mentalPool: 1,
						name: "Dame",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Lady",
								"Trait->Man Lifepath->Your Lordship",
								"Man->City Dweller->City Wife"
							],
							TEXT: ["If City Wife is chosen, Magnate or Bishop must be the Husband's lifepath."]
						},
						resources: 40,
						setting: "Noble",
						skillPool: 3,
						skills: ["Any General->Estate Management", "Any Wise->Noble-wise"],
						stock: "Human",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 1,
						leads: ["Man->Noble Court", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Baron",
						physicalPool: 0,
						requirements: {
							OR: [
								["Man->Noble->Knight", "Trait->Man Lifepath->Your Lordship"],
								["Man->Noble Court->Knight", "Trait->Man Lifepath->Your Lordship"],
								"Man->City Dweller->Magnate",
								"Man->Noble Court->Master of Horses",
								"Man->Noble Court->Steward",
								"Man->Seafaring->Steward",
								"Man->Noble->Lord",
								"Man->Noble Court->Constable",
								"Man->Noble Court->Justiciar"
							]
						},
						resources: 60,
						setting: "Noble",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Noblesse Oblige", "Any Character->Regal Bearing", "Any Character->Pompous", "Any Character->Sharp Dresser", "Any Character->Callous"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 2,
						leads: ["Man->Noble Court", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Viscount",
						physicalPool: 0,
						requirements: {
							OR: [
								["Man->Noble->Knight", "Trait->Man Lifepath->Your Eminence"],
								["Man->Noble Court->Knight", "Trait->Man Lifepath->Your Eminence"],
								"Man->City Dweller->Magnate",
								"Man->Noble Court->Constable",
								"Man->Noble Court->Justiciar",
								"Man->Noble->Baron"
							]
						},
						resources: 65,
						setting: "Noble",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Noblesse Oblige", "Any Character->Regal Bearing", "Any Character->Pompous", "Any Character->Sharp Dresser", "Any Character->Callous"],
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 3,
						leads: ["Man->Noble Court", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Count",
						physicalPool: 0,
						requirements: {
							OR: [
								["Man->Noble->Knight", "Trait->Man Lifepath->Your Eminence"],
								["Man->Noble Court->Knight", "Trait->Man Lifepath->Your Eminence"],
								"Man->City Dweller->Magnate",
								"Man->Noble Court->Constable",
								"Man->Noble Court->Justiciar"
							]
						},
						resources: 70,
						setting: "Noble",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Noblesse Oblige", "Any Character->Regal Bearing", "Any Character->Pompous", "Any Character->Sharp Dresser", "Any Character->Callous"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 3,
						leads: ["Man->Noble Court", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Duke",
						physicalPool: 0,
						requirements: {
							OR: [
								["Man->Noble->Knight", "Trait->Man Lifepath->Your Grace"],
								["Man->Noble Court->Knight", "Trait->Man Lifepath->Your Grace"],
								["Man->Noble->Count", "Trait->Man Lifepath->Your Grace"]
							]
						},
						resources: 90,
						setting: "Noble",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Noblesse Oblige", "Any Character->Regal Bearing", "Any Character->Pompous", "Any Character->Sharp Dresser", "Any Character->Callous"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 4,
						leads: ["Man->Noble Court", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Noble Prince",
						physicalPool: 0,
						requirements: {
							OR: [
								["Man->Noble->Knight", "Trait->Man Lifepath->Your Grace"],
								["Man->Noble Court->Knight", "Trait->Man Lifepath->Your Grace"],
								["Man->Noble->Duke", "Trait->Man Lifepath->Your Grace"]
							]
						},
						resources: 100,
						setting: "Noble",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Noblesse Oblige", "Any Character->Regal Bearing", "Any Character->Pompous", "Any Character->Sharp Dresser", "Any Character->Callous"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Man->Noble Court", "Man->Professional Soldier", "Man->Religious"],
						mentalPool: 0,
						name: "Prince of Blood",
						physicalPool: 0,
						requirements: {
							AND: [
								"Trait->Man Lifepath->Your Grace"
							],
							TEXT: ["Requires express permission from the GM and all players in the current game. Players may take the Prince of the Blood lifepath for any appropriate length of time, from 2 years to 20. Subject to GM approval, of course."]
						},
						resources: 60,
						setting: "Noble",
						skillPool: 0,
						stock: "Human",
						traitPool: 2,
						traits: ["Man Special->Born to be King", "Man Lifepath->Noblesse Oblige", "Any Character->Regal Bearing", "Any Character->Pompous", "Any Character->Sharp Dresser", "Any Character->Callous"],
						years: "*"
					}
				]
			},
			"Noble Court": {
				allowed: ["bwg", "bwc"],
				name: "Noble Court",
				stock: "Human",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->Servitude", "Man->College of Magic", "Man->Death Cult"],
						mentalPool: 0,
						name: "Apt Pupil",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2/3",
								"IS->UNIQUE"
							]
						},
						resources: 8,
						setting: "Noble Court",
						skillPool: 3,
						skills: ["Any General->Obscure History", "Any General->Ugly Truth", "Any General->Intimidation"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Believer", "Man Special->Gifted", "Any Die->Tainted Legacy"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Villager"],
						mentalPool: 1,
						name: "Minstrel",
						physicalPool: 0,
						resources: 10,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Poetry", "Any General->Sing", "Any General->Musical Instrument"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Recondite"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude"],
						mentalPool: 0,
						name: "Court Jester",
						physicalPool: 0,
						resources: 10,
						setting: "Noble Court",
						skillPool: 7,
						skills: ["Any General->Sing", "Any General->Sleight of Hand", "Any General->Climbing", "Any General->Conspicuous", "Any General->Throwing", "Any General->Ugly Truth"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Scapegoat", "Any Callon->Aura of Innocence"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast"],
						mentalPool: 0,
						name: "Court Artist",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble Court->Court Jester",
								"Man->City Dweller->Painter",
								"Man->Outcast->Thinker",
								"Man->City Dweller->Scholar",
								"Man->City Dweller->Sculptor"
							]
						},
						resources: 15,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Sculpture", "Any General->Painting", "Any General->Engraving", "Any General->Seduction", "Any Wise->Genius-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Romantic"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude"],
						mentalPool: 0,
						name: "Servant",
						physicalPool: 0,
						resources: 7,
						setting: "Noble Court",
						skillPool: 4,
						skills: ["Any General->Inconspicuous", "Any General->Etiquette", "Any Wise->Court Gossip-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Veneer of Obedience", "Dwarf Lifepath->Lifting Heavy Things", "Any Character->Bored"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude", "Man->Villager"],
						mentalPool: 0,
						name: "Nurse",
						physicalPool: 0,
						resources: 7,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Child-Rearing", "Any General->Etiquette", "Any Wise->Court Gossip-wise", "Any General->Field Dressing", "Any Wise->Child-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Maternal"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Villager", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Groom",
						physicalPool: 1,
						resources: 5,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Animal Husbandry", "Any General->Riding", "Any General->Mending", "Any Wise->Border-wise", "Any Wise->Road-wise"],
						stock: "Human",
						traitPool: 1,
						traits: [],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Servitude"],
						mentalPool: 0,
						name: "Gardener",
						physicalPool: 1,
						resources: 10,
						setting: "Noble Court",
						skillPool: 7,
						skills: ["Any Wise->Plant-wise", "Any Wise->Flower-wise", "Any Wise->Tree-wise", "Any Wise->Pest-wise", "Any General->Herbalism", "Any General->Farming", "Any General->Almanac"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Earthy Smell", "Any Character->Salt of the Earth", "Man Lifepath->Down to Earth", "Any Die->Affinity for Plants"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude", "Man->Professional Soldier"],
						mentalPool: 1,
						name: "Torturer",
						physicalPool: 0,
						resources: 10,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Interrogation", "Any General->Torture", "Any General->Anatomy", "Any Wise->Torture Devices-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Unsavory Madman"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Noble Court", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Forester",
						physicalPool: 0,
						resources: 9,
						setting: "Noble Court",
						skillPool: 8,
						skills: ["Any General->Observation", "Any General->Orienteering", "Any General->Foraging", "Any General->Survival", "Any General->Tracking", "Any General->Trapper", "Any General->Cudgel", "Any General->Staff", "Any General->Bow", "Any Wise->Poacher-wise", "Any Wise->Park-wise"],
						stock: "Human",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Noble", "Man->Religious"],
						mentalPool: 1,
						name: "Student",
						physicalPool: 0,
						resources: 10,
						setting: "Noble Court",
						skillPool: 9,
						skills: ["Any General->Write", "Any General->Read", "Any General->Rule of Law", "Any General->Oratory", "Any General->Doctrine", "Any General->Etiquette"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Dangerous", "Any Die->Geometric"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 0,
						name: "Page",
						physicalPool: 1,
						requirements: {
							LIMIT: [
								"IS->LP*2",
								"IS->UNIQUE"
							]
						},
						resources: 15,
						setting: "Noble Court",
						skillPool: 6,
						skills: ["Any General->Riding", "Any General->Brawling", "Any General->Read", "Any General->Write", "Any General->Sword"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Man-at-Arms",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Noble->Page",
								"Man->Noble Court->Page",
								"Man->Noble->Squire",
								"Man->Noble Court->Squire",
								"Man->Professional Soldier->1*ANY"
							]
						},
						resources: 12,
						setting: "Noble Court",
						skillPool: 8,
						skills: ["Any General->Mounted Combat Training", "Any General->Shield Training", "Any General->Armor Training", "Any General->Brawling", "Any General->Intimidation", "Any General->Etiquette", "Any General->Appropriate Weapons"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Professional Soldier", "Man->City Dweller"],
						mentalPool: 0,
						name: "Falconer",
						physicalPool: 0,
						resources: 10,
						setting: "Noble Court",
						skillPool: 4,
						skills: ["Any General->Falconry", "Any General->Animal Husbandry", "Any General->Hunting"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Boaster", "Any Character->Weird", "Man Lifepath->Birdie Talk"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Huntsman",
						physicalPool: 0,
						resources: 12,
						setting: "Noble Court",
						skillPool: 8,
						skills: ["Any General->Hunting", "Any General->Animal Husbandry", "Any Wise->Forest-wise", "Any General->Stealthy", "Any General->Cooking", "Any General->Tracking", "Any General->Orienteering", "Any General->Crossbow"],
						stock: "Human",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Servitude", "Man->City Dweller"],
						mentalPool: 0,
						name: "Herald",
						physicalPool: 0,
						resources: 10,
						setting: "Noble Court",
						skillPool: 4,
						skills: ["Any General->Heraldry", "Any Wise->Noble-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Formalist", "Any Die->Rainman", "Any Die->Eidetic Memory"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->City Dweller"],
						mentalPool: 1,
						name: "Court Chef",
						physicalPool: 0,
						resources: 14,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Cooking", "Any General->Sing", "Any General->Herbalism", "Any General->Falsehood"],
						stock: "Human",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Servitude", "Man->Outcast", "Man->Noble Court"],
						mentalPool: 1,
						name: "Squire",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Villager->Corrupt Sergeant",
								"Man->Villager->Village Sergeant",
								"Man->Professional Soldier->Sergeant",
								"Man->Nomad->Veteran",
								"Man->Professional Soldier->Veteran",
								"Man->Noble->Page",
								"Man->Noble Court->Page",
								"Man->Noble Court->Man-at-Arms"
							]
						},
						resources: 14,
						setting: "Noble Court",
						skillPool: 9,
						skills: ["Any General->Sword", "Any General->Shield Training", "Any General->Armor Training", "Any General->Lance", "Any General->Brawling", "Any General->Mounted Combat Training", "Any General->Etiquette"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Pragmatic", "Any Die->Tough", "Any Character->Determined"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Noble Court", "Man->Religious"],
						mentalPool: 1,
						name: "Young Lady",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2/3",
								"IS->UNIQUE"
							]
						},
						resources: 25,
						setting: "Noble Court",
						skillPool: 10,
						skills: ["Any General->Write", "Any General->Read", "Any General->Etiquette", "Any General->Poetry", "Man Special->Astrology", "Any General->Musical Instrument", "Any General->Composition", "Any General->Field Dressing", "Any General->Apothecary", "Any Wise->Court Gossip-wise"],
						stock: "Human",
						traitPool: 1,
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Noble Court", "Man->Outcast"],
						mentalPool: 0,
						name: "Knight",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Noble->Squire",
								"Man->Noble Court->Squire",
								"Man->Professional Soldier->Cavalryman"
							]
						},
						resources: 20,
						setting: "Noble Court",
						skillPool: 11,
						skills: ["Any General->Conspicuous", "Any General->Intimidation", "Any General->Falconry", "Any General->Mounted Combat Training", "Any General->Shield Training", "Any General->Armor Training", "Any General->Appropriate Weapons"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Sworn Homage", "Any Character->Sense of Entitlement"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Noble Court"],
						mentalPool: 1,
						name: "Courtier",
						physicalPool: 0,
						resources: 15,
						setting: "Noble Court",
						skillPool: 8,
						skills: ["Any General->Etiquette", "Any General->Observation", "Any General->Persuasion", "Any General->Seduction", "Any General->Inconspicuous", "Any Wise->Court Gossip-wise", "Any Wise->Noble-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Rapier Wit"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude", "Man->Villager"],
						mentalPool: 0,
						name: "Governess",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble Court->Nurse",
								"Man->Peasant->Midwife",
								"Man->Noble->Lady",
								"Man->Villager->Village Wife",
								"Man->Peasant->Country Wife",
								"Man->City Dweller->City Wife"
							]
						},
						resources: 12,
						setting: "Noble Court",
						skillPool: 7,
						skills: ["Any Wise->Family-wise", "Any General->Administration", "Any General->Intimidation", "Any General->Etiquette", "Any General->Persuasion", "Any General->Ugly Truth"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Dismissive", "Any Character->You Should Know Better than That!", "Any Character->Bitter"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Religious", "Man->Servitude"],
						mentalPool: 0,
						name: "Chaplain",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Religious->Military Order",
								"Man->Religious->Priest",
								"Man->City Dweller->Temple Priest"
							]
						},
						resources: 18,
						setting: "Noble Court",
						skillPool: 8,
						skills: ["Any General->Oratory", "Any General->Doctrine", "Any General->Riding", "Any General->Armor Training", "Any General->Mounted Combat Training", "Any General->Shield Training", "Any General->Appropriate Weapons"],
						stock: "Human",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->City Dweller"],
						mentalPool: 1,
						name: "Court Sorcerer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Arcane Devotee",
								"Man->Outcast->Rogue Wizard",
								"Man->City Dweller->Sorcerer"
							]
						},
						resources: 32,
						setting: "Noble Court",
						skillPool: 7,
						skills: ["Any General->Etiquette", "Any General->Falsehood", "Man Special->Astrology", "Man Magical->Alchemy", "Man Magical->Sorcery"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Inscrutable", "Man Special->Gifted", "Any Die->Second Sight"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Religious"],
						mentalPool: 1,
						name: "Court Lawyer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->City Dweller->Advocate"
							]
						},
						resources: 25,
						setting: "Noble Court",
						skillPool: 6,
						skills: ["Any General->Etiquette", "Any General->Oratory", "Any General->Persuasion", "Any General->Rule of Law", "Any General->History"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Rhetorical", "Any Character->Evasive"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast"],
						mentalPool: 1,
						name: "Court Doctor",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->Religious->Itinerant Monk",
								"Man->Religious->Cloistered Nun",
								"Man->Religious->Priest"
							]
						},
						resources: 20,
						setting: "Noble Court",
						skillPool: 7,
						skills: ["Any General->Etiquette", "Any General->Apothecary", "Any General->Bloodletting", "Any General->Surgery", "Any General->Anatomy", "Man Special->Astrology", "Any General->Falsehood"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Incomprehensible Diagnosis"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Villager"],
						mentalPool: 1,
						name: "Chronicler",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->Religious->Custodian",
								"Man->Religious->Interpreter",
								"Man->Religious->Archivist",
								"Man->Noble->Young Lady",
								"Man->Noble Court->Young Lady"
							]
						},
						resources: 15,
						setting: "Noble Court",
						skillPool: 6,
						skills: ["Any General->Composition", "Any General->History", "Any General->Etiquette", "Any General->Illuminations", "Any General->Obscure History"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Prone to Exaggeration", "Any Character->Flatterer", "Any Character->Denouncer", "Any Character->Cynical", "Any Character->Righteous"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Armorer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 25,
						setting: "Noble Court",
						skillPool: 9,
						skills: ["Any General->Etching", "Any General->Armorer", "Any General->Blacksmith", "Any General->Tanner", "Any General->Sewing", "Any General->Weaponsmith"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Proud"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller"],
						mentalPool: 0,
						name: "Atilliator",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 30,
						setting: "Noble Court",
						skillPool: 6,
						skills: ["Any General->Atilliator", "Any General->Carpentry", "Any General->Carving"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Professionally Diligent"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->City Dweller", "Man->Religious"],
						mentalPool: 1,
						name: "Court Priest",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble Court->Chaplain",
								"Man->Professional Soldier->Chaplain",
								"Man->Religious->Priest",
								"Man->Noble->Religious Acolyte"
							]
						},
						resources: 20,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Etiquette", "Any General->History", "Any General->Symbology", "Any General->Doctrine", "Any General->Persuasion"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Royal Favorite", "Man Special->Faithful"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Noble Court", "Man->Outcast", "Man->Religious"],
						mentalPool: 1,
						name: "Steward",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Villager->Town Official",
								"Man->City Dweller->Municipal Minister",
								"Man->City Dweller->Judge",
								"Man->Noble Court->Court Lawyer",
								"Man->Noble Court->Court Doctor",
								"Man->Noble Court->Governess",
								"Man->Noble->Young Lady",
								"Man->Noble Court->Young Lady",
								"Man->City Dweller->Magnate",
								"Man->Noble->Lord"
							]
						},
						resources: 15,
						setting: "Noble Court",
						skillPool: 6,
						skills: ["Any General->Estate Management", "Any General->Accounting", "Any General->Observation", "Any Wise->Manor-wise"],
						stock: "Human",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Master of Horses",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Professional Soldier->Captain",
								"Man->Noble->Baron",
								"Man->City Dweller->Saddler",
								"Man->City Dweller->Merchant",
								"Man->Villager->Merchant",
								"Man->City Dweller->Magnate"
							]
						},
						resources: 40,
						setting: "Noble Court",
						skillPool: 4,
						skills: ["Any General->Horse Husbandry", "Any General->Appraisal", "Any Wise->Horse-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Love of the Horse", "Any Die->Low Speech", "Man Lifepath->Affinity for Horses"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Master of Hounds",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Professional Soldier->Captain",
								"Man->Noble->Baron",
								"Man->City Dweller->Saddler",
								"Man->City Dweller->Merchant",
								"Man->Villager->Merchant",
								"Man->City Dweller->Magnate"
							]
						},
						resources: 20,
						setting: "Noble Court",
						skillPool: 7,
						skills: ["Any General->Dog Husbandry", "Any Wise->Dog-wise", "Any General->Hunting", "Any General->Instruction", "Any General->Mimicry"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Dog Lover", "Any Character->Pigpen", "Any Character->Emotional", "Any Callon->Iron Stomach"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Noble Court", "Man->Professional Soldier", "Man->Religious"],
						mentalPool: 0,
						name: "Hostage",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->1*ANY"
							],
							TEXT: ["Hostage gives resources points equal to half ot the character's previous lifepath."]
						},
						resources: "*",
						setting: "Noble Court",
						skillPool: 4,
						skills: ["Any General->Etiquette", "Any Wise->Court-wise", "Any General->Foreign Languages", "Any General->Foreign History"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Homesick", "Any Character->Bored", "Any Die->Darling of the Court"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Bailiff",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Trait->Man Lifepath->Your Lordship"
							]
						},
						resources: 15,
						setting: "Noble Court",
						skillPool: 7,
						skills: ["Any General->Intimidation", "Any General->Interrogation", "Any General->Rule of Law", "Any Wise->Outlaw-wise", "Any Wise->Village-wise", "Any Wise->City-wise", "Any Wise->Tax-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Nose for Trouble"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier", "Man->Religious", "Man->Outcast"],
						mentalPool: 0,
						name: "Justiciar",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Judge",
								"Man->Professional Soldier->Captain",
								"Man->Noble Court->Bailiff",
								"Man->Noble->Lord"
							]
						},
						resources: 15,
						setting: "Noble Court",
						skillPool: 6,
						skills: ["Any General->Rule of Law", "Any General->Amercement", "Any General->Interrogation", "Any Wise->Criminal-wise", "Any Wise->Circuit-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Stern Demeanor", "Any Character->Amenable to Other Options"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Coroner",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble Court->Steward",
								"Man->Seafaring->Steward",
								"Man->Villager->Town Official",
								"Man->City Dweller->Municipal Minister",
								"Man->City Dweller->Judge",
								"Man->Noble Court->Court Lawyer",
								"Man->Noble Court->Court Doctor",
								"Man->City Dweller->Magnate",
								"Man->Noble->Lord"
							]
						},
						resources: 15,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Rule of Law", "Any General->Anatomy", "Any Wise->Writ-wise", "Any General->Observation"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Hard-Hearted", "Any Character->Seen It All"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 1,
						name: "Constable",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Professional Soldier->Captain",
								"Man->Noble->Baron",
								"Man->Noble->Viscount",
								"Man->Noble->Count",
								"Man->Noble->Duke"
							]
						},
						resources: 50,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Command", "Any General->Heraldry", "Any General->Logistics", "Any Wise->Kingdom-wise", "Any Wise->Obligation-wise", "Any Wise->Soldier-wise", "Any Wise->Cavalry-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Weight of the World"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier", "Man->Religious"],
						mentalPool: 0,
						name: "Treasurer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble Court->Steward",
								"Man->Seafaring->Steward",
								"Man->Villager->Town Official",
								"Man->City Dweller->Municipal Minister",
								"Man->City Dweller->Judge",
								"Man->Noble Court->Court Lawyer",
								"Man->Noble Court->Court Doctor",
								"Man->City Dweller->Magnate",
								"Man->Noble->Baron",
								"Man->City Dweller->Bishop",
								"Man->Religious->Bishop",
								"Man->Noble->Viscount",
								"Man->Noble->Count",
								"Man->Noble->Duke"
							]
						},
						resources: 45,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Accounting", "Any General->Estate Management", "Any Wise->Tax-wise", "Any Wise->Debt-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Pecunious", "Any Character->Lavish Taste"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						leads: ["Man->City Dweller", "Man->Professional Soldier", "Man->Religious"],
						mentalPool: 1,
						name: "Chamberlain",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Scholar",
								"Man->Noble Court->Steward",
								"Man->Seafaring->Steward",
								"Man->Villager->Town Official",
								"Man->City Dweller->Municipal Minister",
								"Man->City Dweller->Judge",
								"Man->Noble Court->Court Lawyer",
								"Man->Noble Court->Court Doctor",
								"Man->City Dweller->Magnate",
								"Man->Noble->Baron",
								"Man->City Dweller->Bishop",
								"Man->Religious->Bishop",
								"Man->Noble->Viscount",
								"Man->Noble->Count",
								"Man->Noble->Duke"
							]
						},
						resources: 30,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Soothing Platitudes", "Any General->Persuasion", "Any General->Ugly Truth"],
						stock: "Human",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: "1/yr",
						leads: ["Man->Peasant", "Man->Villager", "Man->City Dweller", "Man->Noble", "Man->Seafaring", "Man->Servitude", "Man->Religious", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Advisor to the Court",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Outcast->Thinker",
								"Man->Professional Soldier->Captain",
								"Man->City Dweller->Magnate",
								"Man->City Dweller->Master Craftsman",
								"Man->Villager->Master Craftsman",
								"Man->City Dweller->Artisan",
								"Man->Nomad->Artisan",
								"Man->City Dweller->Bishop",
								"Man->Religious->Bishop",
								"Man->Outcast->Rogue Wizard",
								"Man->Outcast->Mad Summoner",
								"Man->Outcast->Heretic Priest",
								"Man->Noble->Dame",
								"Man->Noble->Baron",
								"Man->Noble->Viscount", "Man->Noble->Count",
								"Man->Noble->Duke",
								"Man->Noble->Prince of Blood",
								"Man->Noble->Noble Prince"
							],
							TEXT: ["This lifepath can be one to three years long, player chooses tenure. Character gains 1 general skill point and 10 resource points per year. The Stat and trait points are earned once."]
						},
						resources: "10/yr",
						setting: "Noble Court",
						skillPool: 1,
						stock: "Human",
						traitPool: 1,
						years: "*"
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->City Dweller", "Man->College of Magic"],
						mentalPool: 1,
						name: "Court Enchanter",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->College of Magic->Senior Student",
								"Man->City Dweller->Neophyte Sorcerer",
								"Man->Outcast->Neophyte Sorcerer",
								"Man->Noble Court->Apt Pupil",
								"Man->Outcast->Apt Pupil",
								"Man->Professional Soldier->Apt Pupil",
								"Man->Religious->Apt Pupil",
								"Man->Villager->Wizard's Apprentice"
							]
						},
						resources: 20,
						setting: "Noble Court",
						skillPool: 5,
						skills: ["Any General->Etiquette", "Man Special->Astrology", "Man Magical->Alchemy", "Man Magical->Enchanting", "Any Wise->Excuses-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Special->Late", "Man Special->Harried"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Peasant", "Man->Villager", "Man->College of Magic"],
						mentalPool: 0,
						name: "Court Summoner",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->College of Magic->Senior Student",
								"Man->Outcast->Mad Summoner",
								"Man->Noble Court->Apt Pupil",
								"Man->Outcast->Apt Pupil",
								"Man->Professional Soldier->Apt Pupil",
								"Man->Religious->Apt Pupil",
								"Man->Villager->Wizard's Apprentice"
							]
						},
						resources: 30,
						setting: "Noble Court",
						skillPool: 6,
						skills: ["Any General->Etiquette", "Man Special->Astrology", "Man Magical->Summoning", "Man Magical->Circination", "Man Magical->Bargaining", "Any Wise->Inane Requst-wise", "Any Wise->Promise-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Dismissive", "Man Special->Polite", "Any Character->Arrogant", "Any Character->Frustrated", "Man Special->Faust"],
						years: 8
					}
				]
			},
			"Outcast": {
				allowed: ["bwg", "bwc"],
				name: "Outcast",
				stock: "Human",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Servitude", "Man->College of Magic", "Man->Death Cult"],
						mentalPool: 0,
						name: "Apt Pupil",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2/3",
								"IS->UNIQUE"
							]
						},
						resources: 8,
						setting: "Outcast",
						skillPool: 3,
						skills: ["Any General->Obscure History", "Any General->Ugly Truth", "Any General->Intimidation"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Believer", "Man Special->Gifted", "Any Die->Tainted Legacy"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Professional Soldier", "Man->Servitude"],
						mentalPool: 0,
						name: "Urchin",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2",
								"IS->UNIQUE"
							]
						},
						resources: 3,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Any General->Inconspicuous", "Any General->Streetwise", "Any General->Sleight of Hand"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Addicted", "Man Lifepath->The Story"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier", "Man->Religious"],
						mentalPool: 0,
						name: "Apostate",
						physicalPool: 0,
						resources: 6,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Any General->Doctrine", "Any General->Heretical Doctrine", "Any General->Foreign Doctrine"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Apostate"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier", "Man->Villager", "Man->Seafaring"],
						mentalPool: 1,
						name: "Blackmailer",
						physicalPool: 0,
						resources: 10,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Any General->Extortion", "Any General->Forgery", "Any General->Ugly Truth", "Any General->Falsehood", "Any Wise->Bribe-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Cold Hearted"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier", "Man->Villager", "Man->Seafaring"],
						mentalPool: 1,
						name: "Kidnapper",
						physicalPool: 0,
						resources: 10,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Any General->Interrogation", "Any General->Torture", "Any General->Intimidation", "Any Wise->Ransom-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Hard-Hearted"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Servitude", "Man->Seafaring", "Man->Death Cult"],
						mentalPool: 0,
						name: "Pillager",
						physicalPool: 0,
						resources: 7,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Any General->Scavenging", "Any General->Foraging", "Any Wise->Army-wise", "Any Wise->Battle-wise", "Any General->Haggling"],
						stock: "Human",
						traitPool: 1,
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier", "Man->Servitude"],
						mentalPool: 0,
						name: "Vagrant",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Any Wise->Road-wise", "Any Wise->Hostel-wise", "Any Wise->Hospital-wise", "Any General->Inconspicuous"],
						stock: "Human",
						traitPool: 2,
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->City Dweller", "Man->Death Cult"],
						mentalPool: 0,
						name: "Cripple",
						physicalPool: 0,
						resources: 3,
						setting: "Outcast",
						skillPool: 6,
						skills: ["Any General->Begging", "Any General->Inconspicuous", "Any General->Conspicuous"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Die->Lame", "Any Die->Missing Limb"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Professional Soldier", "Man->Villager"],
						mentalPool: 0,
						name: "Poacher",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 6,
						skills: ["Any Wise->Royal Parks-wise", "Any General->Hunting", "Any General->Stealthy", "Any General->Tracking", "Any General->Orienteering"],
						stock: "Human",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Death Cult"],
						mentalPool: 0,
						name: "Deranged",
						physicalPool: 0,
						resources: 3,
						setting: "Outcast",
						skillPool: 3,
						skills: ["Any General->Inconspicuous", "Any Wise->Quack-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Sick", "Any Die->Phobia", "Any Character->Lunatic", "Any Callon->Linguist", "Man Lifepath->Possessed"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Villager", "Man->Peasant", "Man->Seafaring"],
						mentalPool: 0,
						name: "Outlaw",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Any Wise->Authority-wise", "Any General->Inconspicuous", "Any General->Conspicuous"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Outlaw"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->City Dweller", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Fence",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Shopkeeper",
								"Man->Villager->Shopkeeper",
								"Man->City Dweller->Barkeep",
								"Man->City Dweller->Moneylender",
								"Man->Outcast->1*ANY",
								"Man->City Dweller->Street Thug",
								"Man->City Dweller->Criminal"
							]
						},
						resources: 15,
						setting: "Outcast",
						skillPool: 6,
						skills: ["Any General->Appraisal", "Any General->Haggling", "Any General->Inconspicuous", "Any General->Streetwise", "Any Wise->Guard-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Shrewd"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Servitude", "Man->Death Cult"],
						mentalPool: 0,
						name: "Gravedigger",
						physicalPool: 0,
						resources: 4,
						setting: "Outcast",
						skillPool: 6,
						skills: ["Any General->Ditch Digging", "Any General->Philosophy", "Any Wise->Grave-wise", "Any Wise->Cemetary-wise", "Any Wise->Bone-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Bitter"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Ratcatcher",
						physicalPool: 0,
						resources: 4,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Any General->Trapper", "Any General->Poisons", "Any General->Ratiquette"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Diseased", "Man Lifepath->Rat-Speak"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Professional Soldier", "Man->Villager"],
						mentalPool: 0,
						name: "Beggar",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Any General->Inconspicuous", "Any General->Conspicuous", "Any General->Streetwise", "Any General->Falsehood"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->The Story"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: -1,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Peasant", "Man->Death Cult"],
						mentalPool: 0,
						name: "Leper",
						physicalPool: 0,
						resources: 3,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Any General->Inconspicuous", "Any Wise->Hospital-wise", "Any Wise->Priest-wise", "Any Wise->Pilgrim-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Leprosy", "Any Character->Unbeliever", "Any Character->White-Gold Wielder"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Villager", "Man->City Dweller", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Prostitute",
						physicalPool: 0,
						resources: 6,
						setting: "Outcast",
						skillPool: 3,
						skills: ["Any General->Conspicuous", "Any General->Inconspicuous", "Any General->Persuasion", "Any General->Falsehood", "Any General->Haggling", "Any General->Soothing Platitudes"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Tolerant"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->City Dweller", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Whoremonger",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Villager->Venal Priest",
								"Man->City Dweller->Shopkeeper",
								"Man->Villager->Shopkeeper",
								"Man->City Dweller->Barkeep",
								"Man->City Dweller->Moneylender",
								"Man->Outcast->1*ANY",
								"Man->City Dweller->Street Thug",
								"Man->City Dweller->Criminal"
							]
						},
						resources: 12,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Any General->Intimidation", "Any General->Haggling", "Any Wise->Prostitute-wise", "Any Wise->City-wise", "Any Wise->Guard-wise"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Villager", "Man->City Dweller", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Itinerant Performer",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 8,
						skills: ["Any General->Cooking", "Any General->Sewing", "Any General->Acting", "Any General->Sleight of Hand", "Any General->Haggling", "Any General->Mending", "Any General->Disguise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Odd"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Professional Soldier", "Man->Death Cult"],
						mentalPool: 0,
						name: "Insurrectionist",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Any General->Philosophy", "Any General->Rule of Law", "Any General->Doctrine", "Any General->Oratory", "Man Special->Arson"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Zealot"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Servitude", "Man->Professional Soldier", "Man->Death Cult"],
						mentalPool: 0,
						name: "Cultist",
						physicalPool: 0,
						resources: 8,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Any General->Cult Doctrine", "Any General->Inconspicuous", "Any General->Conspicuous", "Any General->Falsehood", "Any General->Persuasion"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Zealot", "Any Character->Rabble-Rouser", "Any Character->Speaker of the Secret Language"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Villager", "Man->Noble Court"],
						mentalPool: 1,
						name: "Poisoner",
						physicalPool: 0,
						resources: 8,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Any General->Poisons", "Any General->Cooking", "Any General->Inconspicuous", "Any General->Disguise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Off-Kilter"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Professional Soldier", "Man->City Dweller"],
						mentalPool: 0,
						name: "Thug",
						physicalPool: 0,
						resources: 7,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Any General->Streetwise", "Any Wise->Murder-wise", "Any Wise->Guard-wise", "Any General->Brawling"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Die->Cold Blooded", "Any Die->Jaded"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Servitude"],
						mentalPool: 0,
						name: "Desperate Killer",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Any General->Appropriate Weapons", "Any General->Inconspicuous", "Any Wise->Assassination-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Desperate", "Any Character->Murderous", "Man Lifepath->Cold Hearted", "Man Lifepath->Hard-Hearted"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Peasant"],
						mentalPool: 0,
						name: "Bandit",
						physicalPool: 1,
						resources: 7,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Any General->Appropriate Weapons", "Any General->Intimidation", "Any General->Stealthy", "Any Wise->Caravan-wise"],
						stock: "Human",
						traitPool: 1,
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Seafaring", "Man->City Dweller", "Man->Villager"],
						mentalPool: 0,
						name: "Pirate",
						physicalPool: 0,
						resources: 5,
						setting: "Outcast",
						skillPool: 6,
						skills: ["Any Wise->Pirate Cove-wise", "Any General->Rigging", "Any General->Knots", "Any General->Knives", "Any Wise->Sea-wise", "Any Wise->Map-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Problem with Authority", "Any Character->Scurvy", "Man Lifepath->Maimed", "Man Lifepath->Crippled", "Any Die->Lame"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Professional Soldier", "Man->City Dweller", "Man->Villager"],
						mentalPool: 1,
						name: "Smuggler",
						physicalPool: 0,
						resources: 15,
						setting: "Outcast",
						skillPool: 6,
						skills: ["Any General->Persuasion", "Any General->Falsehood", "Any General->Appraisal", "Any Wise->Law-wise", "Any General->Forgery", "Any General->Stealthy", "Any General->Inconspicuous"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Paranoid"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Peasant", "Man->Servitude", "Man->Death Cult"],
						mentalPool: 0,
						name: "Freebooter",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Nomad->Bandit",
								"Man->Outcast->Bandit",
								"Man->Outcast->Smuggler",
								"Man->Noble->Squire",
								"Man->Noble Court->Squire",
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Man->City Dweller->City Guard",
								"Man->Villager->Village Guard",
								"Man->Seafaring->Marine",
								"Man->Professional Soldier->1*ANY"
							]
						},
						resources: 10,
						setting: "Outcast",
						skillPool: 8,
						skills: ["Any General->Intimidation", "Any General->Appropriate Weapons", "Any Wise->Countryside-wise", "Any Wise->Fortress-wise", "Any Wise->Mercenary Company-wise", "Any General->Foreign Languages", "Any Wise->War-wise", "Any Wise->Loot-wise", "Any Wise->Extortion-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Die->Cold Blooded", "Any Character->Merciless"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Peasant", "Man->Servitude"],
						mentalPool: 0,
						name: "Strider",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Noble->Born Noble",
								"Man->Nomad->Hunter",
								"Man->Peasant->Hunter",
								"Man->Peasant->Trapper",
								"Man->Noble Court->Huntsman",
								"Man->Professional Soldier->Scout"
							]
						},
						resources: 6,
						setting: "Outcast",
						skillPool: 9,
						skills: ["Any Wise->Forest-wise", "Any General->Orienteering", "Any General->Foraging", "Any General->Tracking", "Any General->Firebuilding", "Any General->Riding", "Any General->Stealthy", "Any General->Appropriate Weapons"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Loner"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->City Dweller", "Man->Seafaring"],
						mentalPool: 0,
						name: "Mad Summoner",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Outcast->Cultist",
								"Man->Peasant->Augur",
								"Man->City Dweller->Neophyte Sorcerer",
								"Man->Outcast->Neophyte Sorcerer",
								"Man->Noble->Arcane Devotee"
							]
						},
						resources: 20,
						setting: "Outcast",
						skillPool: 6,
						skills: ["Man Magical->Summoning", "Man Magical->Enchanting", "Any General->Demonology", "Any General->Empyrealia"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Mad", "Any Character->Fear of Cheese", "Any Character->Fear of Wet Noises", "Any Character->Alarming"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Seafaring", "Man->Religious", "Man->Death Cult"],
						mentalPool: 1,
						name: "Rogue Wizard",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Outcast->Cultist",
								"Man->Peasant->Augur",
								"Man->City Dweller->Neophyte Sorcerer",
								"Man->Outcast->Neophyte Sorcerer",
								"Man->Noble->Arcane Devotee"
							]
						},
						resources: 24,
						setting: "Outcast",
						skillPool: 8,
						skills: ["Man Magical->Sorcery", "Any General->Inconspicuous", "Any Wise->Graveyard-wise", "Man Special->Astrology", "Any General->Bloodletting", "Any General->Ugly Truth", "Any Wise->Apocalypse-wise", "Man Magical->Enchanting", "Man Magical->Alchemy"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Spooky", "Any Die->Aura of Fear", "Any Die->Obscure Aura"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Servitude", "Man->Villager"],
						mentalPool: 0,
						name: "Crazy Witch",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Seafaring->Weather Witch",
								"Man->Noble->Young Lady",
								"Man->Noble Court->Young Lady",
								"Man->Peasant->Augur",
								"Man->Peasant->Midwife"
							]
						},
						resources: 6,
						setting: "Outcast",
						skillPool: 5,
						skills: ["Any General->Folklore", "Any General->Herbalism", "Any General->Poisons", "Man Magical->Summoning", "Any Wise->Profanity-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->A Little Crazy", "Man Special->Gifted", "Any Character->Mark of the Beast"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Servitude", "Man->Death Cult"],
						mentalPool: 0,
						name: "Heretic Priest",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Religious->Acolyte",
								"Man->Villager->Acolyte",
								"Man->Outcast->Cultist",
								"Man->Outcast->Apostate",
								"Man->Religious->Theologian",
								"Man->Villager->Venal Priest", "Man->Religious->Interpreter",
								"Man->Religious->Archivist"
							]
						},
						resources: 6,
						setting: "Outcast",
						skillPool: 7,
						skills: ["Any General->Heretical Doctrine", "Any General->Oratory", "Any Wise->Apostate-wise", "Any General->Demonology", "Any Wise->Summoner-wise", "Any Wise->Cultist-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Lunatic", "Any Character->Overbearing Loony", "Man Lifepath->Faith in Dead Gods"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						leads: ["Man->Peasant", "Man->Villager", "Man->City Dweller", "Man->Noble", "Man->Seafaring", "Man->Servitude", "Man->Noble Court", "Man->Religious", "Man->Professional Soldier"],
						mentalPool: 1,
						name: "Thinker",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"YEARS->36"
							]
						},
						resources: 5,
						setting: "Outcast",
						skillPool: 6,
						skills: ["Any General->Philosophy", "Any General->Strategy", "Any General->Strategy Games", "Any General->Calligraphy", "Any General->History", "Any General->Painting"],
						stock: "Human",
						traitPool: 2,
						years: 15
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Villager"],
						mentalPool: 1,
						name: "Demented Inventor",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Outcast->Rogue Wizard",
								"Man->Noble Court->Apt Pupil",
								"Man->Outcast->Apt Pupil",
								"Man->Professional Soldier->Apt Pupil",
								"Man->Religious->Apt Pupil",
								"Man->Villager->Wizard's Apprentice"
							]
						},
						resources: 15,
						setting: "Outcast",
						skillPool: 6,
						skills: ["Any Wise->Mad Invention-wise", "Any General->Mending", "Man Magical->Enchanting", "Any General->Blacksmith", "Any General->Whitesmith"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Special->Demented", "Dwarf Lifepath->Tinkerer"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Death Cult"],
						mentalPool: 1,
						name: "Evil Necromancer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Noble Court->Coroner",
								"Man->Death Cult->Death Cultist",
								"Man->Outcast->Cultist",
								"Man->Noble Court->Apt Pupil",
								"Man->Outcast->Apt Pupil",
								"Man->Professional Soldier->Apt Pupil",
								"Man->Religious->Apt Pupil"
							]
						},
						resources: 20,
						setting: "Outcast",
						skillPool: 4,
						skills: ["Man Magical->Death Art", "Any General->Anatomy", "Any Wise->Graveyard-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Special->Corrupted", "Man Special->Evil"],
						years: 10
					}
				]
			},
			"Peasant": {
				allowed: ["bwg", "bwc"],
				name: "Peasant",
				stock: "Human",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 3,
						leads: ["Man->Slave Raider", "Man->Servitude", "Man->Professional Soldier", "Man->Seafaring", "Man->Religious", "Man->College of Magic", "Man->Black Barbarian"],
						mentalPool: 0,
						name: "Born Peasant",
						physicalPool: 0,
						resources: 3,
						setting: "Peasant",
						skillPool: 0,
						stock: "Human",
						traitPool: 2,
						years: 8
					},
					{
						allowed: ["bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Noble Court", "Man->Religious"],
						mentalPool: 0,
						name: "Gifted Child",
						physicalPool: 0,
						resources: 4,
						setting: "Peasant",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Misunderstood", "Man Special->Gifted", "Any Character->Abused", "Man Special->Spirit Familiar"],
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Professional Soldier", "Man->Servitude"],
						mentalPool: 0,
						name: "Farmer",
						physicalPool: 1,
						requirements: {
							LIMIT: [
								"NOT->LP*2"
							]
						},
						resources: 5,
						setting: "Peasant",
						skillPool: 8,
						skills: ["Any General->Farming", "Any General->Mending", "Any General->Animal Husbandry", "Any General->Weaving", "Any General->Cooking", "Any General->Sewing", "Any General->Firebuilding", "Any General->Sing"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Hoarding"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Professional Soldier"],
						mentalPool: 1,
						name: "Head of Household",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Peasant->Farmer",
								"Men->Peasant->Itinerant Priest"
							],
							TEXT: ["Otherwise requires a female lifepath."]
						},
						resources: 20,
						setting: "Peasant",
						skillPool: 8,
						skills: ["Any General->Carpentry", "Any General->Hunting", "Any General->Haggling", "Any General->Almanac"],
						stock: "Human",
						traitPool: 2,
						years: 15
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Outcast"],
						mentalPool: 1,
						name: "Midwife",
						physicalPool: 0,
						resources: 15,
						setting: "Peasant",
						skillPool: 7,
						skills: ["Any General->Animal Husbandry", "Any General->Herbalism", "Any General->Midwifery", "Any Wise->Omen-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Bedside Manner"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Servitude", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Lazy Stayabout",
						physicalPool: 0,
						resources: 3,
						setting: "Peasant",
						skillPool: 3,
						skills: ["Any Wise->Lazy-wise", "Any Wise->Peasant-wise", "Any Wise->Wife-wise", "Any Wise->Work-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->A Little Fat"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Servitude", "Man->Professional Soldier", "Man->Outcast", "Man->Nomad"],
						mentalPool: 0,
						name: "Conscript",
						physicalPool: 0,
						resources: 4,
						setting: "Peasant",
						skillPool: 2,
						skills: ["Any General->Foraging", "Any Wise->Battle-wise", "Any Wise->Rumor-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Flee from Battle"],
						years: 1
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Servitude", "Man->Villager", "Man->Nomad"],
						mentalPool: 0,
						name: "Peasant Pilgrim",
						physicalPool: 0,
						resources: 4,
						setting: "Peasant",
						skillPool: 3,
						skills: ["Any General->Doctrine", "Any Wise->Pilgrimage-wise", "Any Wise->Saint-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Road Weary", "Any Character->Alms-Taker"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager"],
						mentalPool: 0,
						name: "Miller",
						physicalPool: 0,
						resources: 15,
						setting: "Peasant",
						skillPool: 5,
						skills: ["Any General->Miller", "Any General->Brewer", "Any General->Mending", "Any General->Carpentry"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Lord's Favorite"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Professional Soldier", "Man->Seafaring"],
						mentalPool: 0,
						name: "Fisherman",
						physicalPool: 1,
						resources: 5,
						setting: "Peasant",
						skillPool: 6,
						skills: ["Any General->Fishing", "Any General->Rigging", "Any General->Knots", "Any General->Mending", "Any General->Cooking", "Any General->Boatwright"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Superstitious"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Professional Soldier", "Man->Nomad"],
						mentalPool: 0,
						name: "Shepherd",
						physicalPool: 1,
						resources: 4,
						setting: "Peasant",
						skillPool: 5,
						skills: ["Any General->Animal Husbandry", "Any General->Sing", "Any General->Climbing", "Any General->Flute"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Cry Wolf"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Woodcutter",
						physicalPool: 1,
						resources: 5,
						setting: "Peasant",
						skillPool: 5,
						skills: ["Any General->Firebuilding", "Any General->Mending", "Any General->Foraging", "Any General->Orienteering", "Any Wise->Tree-wise", "Any General->Tree Cutting"],
						stock: "Human",
						traitPool: 1,
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Outcast", "Man->Professional Soldier", "Man->Nomad"],
						mentalPool: 1,
						name: "Hunter",
						physicalPool: 1,
						resources: 6,
						setting: "Peasant",
						skillPool: 7,
						skills: ["Any General->Hunting", "Any General->Tracking", "Any General->Stealthy", "Any General->Cooking", "Any General->Orienteering", "Any General->Javelin or Any General->Bow"],
						stock: "Human",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Outcast", "Man->Professional Soldier", "Man->Nomad"],
						mentalPool: 1,
						name: "Trapper",
						physicalPool: 1,
						resources: 8,
						setting: "Peasant",
						skillPool: 6,
						skills: ["Any General->Trapper", "Any General->Stealthy", "Any General->Tracking", "Any General->Cooking", "Any General->Haggling", "Any General->Taxidermy"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Foul Smelling"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Servitude", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 1,
						name: "Peddler",
						physicalPool: 0,
						resources: 10,
						setting: "Peasant",
						skillPool: 7,
						skills: ["Any General->Mending", "Any General->Sing", "Any General->Haggling", "Any General->Chandler", "Any General->Persuasion", "Any General->Inconspicuous", "Any General->Falsehood"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Die->Blank Stare", "Any Callon->Glib", "Any Die->Eidetic Memory"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Outcast", "Man->Nomad"],
						mentalPool: 1,
						name: "Elder",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"NOT->LP*1/2/3/4",
								"YEARS->50"
							]
						},
						resources: 5,
						setting: "Peasant",
						skillPool: 6,
						skills: ["Any General->Observation", "Any General->Persuasion", "Any General->Ugly Truth", "Any Wise->Peasant-wise", "Any General->Local History"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Crotchety"],
						years: 15
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Servitude", "Man->Outcast"],
						mentalPool: 1,
						name: "Augur",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Peasant->Midwife",
								"Men->Peasant->Country Wife"
							],
							TEXT: ["Otherwise must be female and no more than three lifepaths."]
						},
						resources: 10,
						setting: "Peasant",
						skillPool: 4,
						skills: ["Man Special->Astrology", "Man Magical->Sorcery", "Any General->Falsehood", "Any General->Ugly Truth", "Any Wise->Omen-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Disturbed", "Any Die->Dreamer", "Any Character->Cassandra", "Any Die->Touch of Ages"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Outcast", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 1,
						name: "Itinerant Priest",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Villager->Acolyte",
								"Men->Villager->Failed Acolyte",
								"Men->City Dweller->Temple Acolyte",
								"Men->Noble->Religious Acolyte",
								"Men->Religious->Temple Acolyte",
								"Men->Death Cult->Religious Acolyte"
							]
						},
						resources: 8,
						setting: "Peasant",
						skillPool: 7,
						skills: ["Any General->Oratory", "Any General->Suasion", "Any General->Chandler", "Any General->Riding", "Any General->Read", "Any General->Write", "Any General->Doctrine"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Dusty", "Man Special->Faithful"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Villager", "Man->City Dweller", "Man->Noble Court"],
						mentalPool: 1,
						name: "Recluse Wizard",
						physicalPool: 0,
						requirements: {
							AND: [
								"Skill->Men Sorcerous->Sorcery"
							]
						},
						resources: 28,
						setting: "Peasant",
						skillPool: 7,
						skills: ["Man Special->Astrology", "Man Magical->Alchemy", "Man Magical->Enchanting", "Any General->Illuminations", "Any General->Ancient History", "Any General->Obscure History"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Batshit", "Man Special->Gifted"],
						years: 15
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Religious"],
						mentalPool: 1,
						name: "Country Wife",
						physicalPool: 1,
						requirements: {
							TEXT: ["A player who takes the Country Wife lifepath may also choose her husband's lifepath from the Peasant setting and may choose from his skills. She gets half of his skill points,rounded down. She also recieves half of her husband's resource points."]
						},
						resources: 5,
						setting: "Peasant",
						skillPool: 2,
						skills: ["Any General->Child-Rearing", "Any General->Cooking"],
						stock: "Human",
						traitPool: 1,
						years: 10
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Villager"],
						mentalPool: 1,
						name: "Speaker of Names",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Peasant->Augur",
								"Men->Outcast->Crazy Witch",
								"Men->City Dweller->Neophyte Sorcerer",
								"Men->Outcast->Neophyte Sorcerer",
								"Men->Villager->Wizard's Apprentice",
								"Men->Peasant->Elder"
							]
						},
						resources: 20,
						setting: "Peasant",
						skillPool: 6,
						skills: ["Man Magical->Spirit Binding", "Man Magical->Circination", "Any Wise->Paths-wise", "Any Wise->Spirit-wise", "Any Wise->Domain-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Special->Well Traveled", "Man Special->Brook No Fools", "Any Die->Fey Blood"],
						years: 7
					}
				]
			},
			"Professional Soldier": {
				allowed: ["bwg", "bwc"],
				name: "Professional Soldier",
				stock: "Human",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Servitude", "Man->College of Magic", "Man->Death Cult"],
						mentalPool: 0,
						name: "Apt Pupil",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2/3",
								"IS->UNIQUE"
							]
						},
						resources: 8,
						setting: "Professional Soldier",
						skillPool: 3,
						skills: ["Any General->Obscure History", "Any General->Ugly Truth", "Any General->Intimidation"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Believer", "Man Special->Gifted", "Any Die->Tainted Legacy"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Peasant", "Man->Servitude", "Man->Outcast"],
						mentalPool: 0,
						name: "Runner",
						physicalPool: 1,
						resources: 5,
						setting: "Professional Soldier",
						skillPool: 4,
						skills: ["Any General->Inconspicuous", "Any General->Stealthy", "Any General->Sing"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Skinny", "Any Callon->Fleet of Foot", "Any Die->Sprinter"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Villager"],
						mentalPool: 0,
						name: "Apprentice",
						physicalPool: 1,
						resources: 6,
						setting: "Professional Soldier",
						skillPool: 6,
						skills: ["Any General->Mending", "Any General->Write", "Any General->Read", "Any General->Hauling", "Any General->Driving", "Any General->Ditch Digging"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Exhausted", "Man Lifepath->Back-Breaking Labor"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Peasant", "Man->Servitude"],
						mentalPool: 1,
						name: "Musician",
						physicalPool: 0,
						resources: 5,
						setting: "Professional Soldier",
						skillPool: 4,
						skills: ["Any General->Musical Instrument", "Any General->Conspicuous", "Any General->Riding"],
						stock: "Human",
						traitPool: 1,
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Villager", "Man->Servitude"],
						mentalPool: 0,
						name: "Foot Soldier",
						physicalPool: 1,
						resources: 6,
						setting: "Professional Soldier",
						skillPool: 6,
						skills: ["Any General->Soldiering", "Any General->Appropriate Weapons", "Any General->Shield Training", "Any General->Brawling", "Any General->Foraging", "Any General->Firebuilding"],
						stock: "Human",
						traitPool: 1,
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Villager", "Man->Servitude"],
						mentalPool: 0,
						name: "Archer",
						physicalPool: 1,
						resources: 5,
						setting: "Professional Soldier",
						skillPool: 5,
						skills: ["Any General->Bow", "Any General->Fletcher", "Any General->Brawling", "Any General->Foraging", "Any General->Firebuilding"],
						stock: "Human",
						traitPool: 1,
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Villager", "Man->Servitude"],
						mentalPool: 0,
						name: "Crossbowman",
						physicalPool: 1,
						resources: 7,
						setting: "Professional Soldier",
						skillPool: 5,
						skills: ["Any General->Crossbow", "Any General->Fletcher", "Any General->Brawling", "Any General->Foraging", "Any General->Firebuilding"],
						stock: "Human",
						traitPool: 1,
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Seafaring", "Man->Outcast", "Man->Villager", "Man->Servitude"],
						mentalPool: 0,
						name: "Sailor",
						physicalPool: 1,
						resources: 5,
						setting: "Professional Soldier",
						skillPool: 6,
						skills: ["Any General->Seamanship", "Any General->Rigging", "Any General->Knots", "Any General->Mending", "Any General->Navigation", "Any General->Knives", "Any General->Sword"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Callon->Iron Stomach", "Any Callon->Sea Legs", "Any Die->Affinity for Rope"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Servitude", "Man->Noble Court"],
						mentalPool: 1,
						name: "Herald",
						physicalPool: 0,
						resources: 7,
						setting: "Professional Soldier",
						skillPool: 4,
						skills: ["Any General->Oratory", "Any General->Conspicuous", "Any General->Riding", "Any General->Heraldry", "Any Wise->Bannerman-wise"],
						stock: "Human",
						traitPool: 1,
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Servitude", "Man->Noble Court"],
						mentalPool: 0,
						name: "Bannerman",
						physicalPool: 1,
						resources: 7,
						setting: "Professional Soldier",
						skillPool: 5,
						skills: ["Any General->Conspicuous", "Any General->Riding", "Any General->Appropriate Weapons", "Any General->Armor Training"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Honored", "Any Character->Brutal", "Any Character->Aggressive"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->Servitude", "Man->Outcast"],
						mentalPool: 0,
						name: "Scout",
						physicalPool: 1,
						resources: 4,
						setting: "Professional Soldier",
						skillPool: 5,
						skills: ["Any General->Stealthy", "Any General->Foraging", "Any General->Orienteering", "Any General->Appropriate Weapons", "Any General->Observation"],
						stock: "Human",
						traitPool: 1,
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Servitude", "Man->Noble Court"],
						mentalPool: 0,
						name: "Sergeant",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Squire",
								"Man->Noble Court->Squire",
								"Man->Villager->Village Guard",
								"Man->City Dweller->City Guard",
								"Man->Professional Soldier->Foot Soldier"
							]
						},
						resources: 8,
						setting: "Professional Soldier",
						skillPool: 6,
						skills: ["Any General->Intimidation", "Any General->Command", "Any General->Field Dressing", "Any General->Appropriate Weapons"],
						stock: "Human",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Noble Court"],
						mentalPool: 0,
						name: "Veteran",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Professional Soldier->Sergeant",
								"Man->City Dweller->Sergeant-at-Arms",
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Man->Religious->Military Order",
								"Man->Outcast->Freebooter"
							]
						},
						resources: 20,
						setting: "Professional Soldier",
						skillPool: 5,
						skills: ["Any Wise->Soldier-wise", "Any General->Soldiering", "Any General->Campaign History", "Any General->Tactics"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Die->Stubborn", "Man Lifepath->Maimed"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Servitude", "Man->Noble Court"],
						mentalPool: 0,
						name: "Cavalryman",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Man->Noble->Squire",
								"Man->Noble Court->Squire",
								"Man->City Dweller->Groom",
								"Man->Noble Court->Groom",
								"Man->Villager->Groom",
								"Man->Noble Court->Master of Horses"
							],
							TEXT: ["a prior lifepath having to do with horses"]
						},
						resources: 9,
						setting: "Professional Soldier",
						skillPool: 10,
						skills: ["Any General->Riding", "Any General->Mounted Combat Training", "Any General->Armor Training", "Any General->Shield Training", "Any General->Appropriate Weapons", "Any Wise->Horse-wise", "Any General->Haggling"],
						stock: "Human",
						traitPool: 1,
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->Peasant", "Man->Outcast"],
						mentalPool: 0,
						name: "Journeyman",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Apprentice",
								"Man->Nomad->Apprentice",
								"Man->Professional Soldier->Apprentice", "Man->Villager->Apprentice"
							]
						},
						resources: 15,
						setting: "Professional Soldier",
						skillPool: 5,
						skills: ["Any General->Blacksmith", "Any General->Appraisal", "Any General->Haggling", "Any Wise->Ridiculous Request-wise"],
						stock: "Human",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Villager", "Man->Outcast"],
						mentalPool: 1,
						name: "Armorer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 20,
						setting: "Professional Soldier",
						skillPool: 9,
						skills: ["Any General->Mending", "Any General->Blacksmith", "Any General->Armorer", "Any General->Weaponsmith", "Any General->Etching", "Any General->Tanner"],
						stock: "Human",
						traitPool: 1,
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Noble Court", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 0,
						name: "Atilliator",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 22,
						setting: "Professional Soldier",
						skillPool: 6,
						skills: ["Any General->Atilliator", "Any General->Carpentry", "Any General->Carving", "Any General->Blacksmith", "Any General->Tanner"],
						stock: "Human",
						traitPool: 1,
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->City Dweller", "Man->Seafaring", "Man->Noble Court", "Man->Religious"],
						mentalPool: 0,
						name: "Chaplain",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Temple Priest",
								"Man->Noble Court->Court Priest",
								"Man->Religious->Priest",
								"Man->Religious->Archpriest",
								"Man->Outcast->Heretic Priest",
								"Man->City Dweller->Temple Priest",
								"Man->Religious->Military Order"
							]
						},
						resources: 15,
						setting: "Professional Soldier",
						skillPool: 6,
						skills: ["Any General->Oratory", "Any General->Riding", "Any General->Armor Training", "Any General->Mounted Combat Training", "Any General->Appropriate Weapons"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Ideologue", "Any Character->Psychotic"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Noble Court", "Man->Outcast"],
						mentalPool: 1,
						name: "Engineer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->Professional Soldier->Engineer",
								"Man->Seafaring->Engineer",
								"Man->Villager->Mining Engineer"
							]
						},
						resources: 18,
						setting: "Professional Soldier",
						skillPool: 6,
						skills: ["Any General->Artillerist", "Any General->Engineering", "Any General->Fortifications"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Smart", "Man Lifepath->Sense of Distance"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Noble Court", "Man->Outcast"],
						mentalPool: 1,
						name: "Wizard of War",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Neophyte Sorcerer",
								"Man->Outcast->Neophyte Sorcerer",
								"Man->Noble->Arcane Devotee",
								"Man->Seafaring->Weather Witch",
								"Man->Outcast->Rogue Wizard",
								"Man->Outcast->Mad Summoner"
							]
						},
						resources: 20,
						setting: "Professional Soldier",
						skillPool: 7,
						skills: ["Man Magical->Sorcery", "Any General->Strategy Games", "Any Wise->Soldier-wise", "Any Wise->War-wise", "Any General->Haggling", "Any General->Cartography"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Arrogant"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Villager", "Man->City Dweller", "Man->Noble Court"],
						mentalPool: 1,
						name: "Quartermaster",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Professional Soldier->Sergeant",
								"Man->Nomad->Veteran",
								"Man->Professional Soldier->Veteran",
								"Man->Noble Court->Steward",
								"Man->Seafaring->Steward",
								"Man->Seafaring->Ship's Captain",
								"Man->City Dweller->Merchant",
								"Man->Villager->Merchant",
								"Man->Noble Court->Man-at-Arms",
								"Man->Outcast->Smuggler",
								"Man->Noble Court->Constable",
								"Man->Noble->Lord"
							]
						},
						resources: 17,
						setting: "Professional Soldier",
						skillPool: 6,
						skills: ["Any General->Administration", "Any General->Accounting", "Any General->Haggling", "Any General->Logistics"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Die->Light Sleeper"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->Villager", "Man->City Dweller", "Man->Seafaring", "Man->Servitude", "Man->Noble Court", "Man->Religious", "Man->Outcast"],
						mentalPool: 1,
						name: "Captain",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Man->Noble->Lord",
								"Man->Noble Court->Constable",
								"Man->Outcast->2*Freebooter"
							]
						},
						resources: 35,
						setting: "Professional Soldier",
						skillPool: 9,
						skills: ["Any General->Command", "Any Wise->Contract-wise", "Any General->Haggling", "Any General->Oratory", "Any General->Appropriate Weapons", "Any General->Field Dressing", "Any General->Riding", "Any General->Strategy"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Savvy"],
						years: 6
					}
				]
			},
			"Religious": {
				allowed: ["bwg", "bwc"],
				name: "Religious",
				stock: "Human",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->Servitude", "Man->College of Magic", "Man->Death Cult"],
						mentalPool: 0,
						name: "Apt Pupil",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2/3",
								"IS->UNIQUE"
							]
						},
						resources: 8,
						setting: "Religious",
						skillPool: 3,
						skills: ["Any General->Obscure History", "Any General->Ugly Truth", "Any General->Intimidation"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Believer", "Man Special->Gifted", "Any Die->Tainted Legacy"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Noble Court"],
						mentalPool: 1,
						name: "Castrati",
						physicalPool: 0,
						resources: 15,
						setting: "Religious",
						skillPool: 7,
						skills: ["Any General->Sing", "Any General->Persuasion", "Any General->Falsehood", "Any General->Etiquette", "Any General->Administration", "Any General->Rule of Law"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Eunuch", "Any Die->Scheming"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->City Dweller", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Pardoner",
						physicalPool: 0,
						resources: 12,
						setting: "Religious",
						skillPool: 5,
						skills: ["Any General->Persuasion", "Any General->Falsehood", "Any General->Intimidation", "Any General->Doctrine"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Pardoner", "Any Character->Corrupt"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Peasant", "Man->Servitude", "Man->Noble Court"],
						mentalPool: 0,
						name: "Zealous Convert",
						physicalPool: 0,
						resources: 10,
						setting: "Religious",
						skillPool: 4,
						skills: ["Any General->Religious Diatribe", "Any General->Doctrine", "Any General->Rhetoric"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Infallible Religious Logic", "Any Character->Righteous", "Any Character->Firm", "Any Character->Demagogue"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->City Dweller", "Man->Noble", "Man->Seafaring", "Man->Servitude", "Man->Noble Court", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 1,
						name: "Military Order",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Noble->Squire",
								"Man->Noble Court->Squire",
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Man->Professional Soldier->1*ANY"
							]
						},
						resources: 7,
						setting: "Religious",
						skillPool: 5,
						skills: ["Any General->Doctrine", "Any General->Riding", "Any General->Armor Training", "Any General->Appropriate Weapons"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Disciplined", "Any Character->Fanatical Devotion", "Man Lifepath->Sworn to the Order"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude", "Man->City Dweller", "Man->Villager", "Man->Nomad", "Man->Merchant House"],
						mentalPool: 0,
						name: "Grave Digger",
						physicalPool: 0,
						resources: 6,
						setting: "Religious",
						skillPool: 4,
						skills: ["Any General->Ditch Digging", "Any Wise->Grave-wise", "Any Wise->Cemetery-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Superstitious", "Man Lifepath->Burial Rites"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Villager", "Man->Peasant"],
						mentalPool: 0,
						name: "Porter",
						physicalPool: 0,
						resources: 5,
						setting: "Religious",
						skillPool: 4,
						skills: ["Any Wise->Temple-wise", "Any Wise->Priest-wise", "Any Wise->Worshipper-wise", "Any Wise->Church Treasure-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Keys to the Church", "Any Callon->Familiar Face"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Noble Court", "Man->Merchant House"],
						mentalPool: 0,
						name: "Notary",
						physicalPool: 0,
						resources: 15,
						setting: "Religious",
						skillPool: 4,
						skills: ["Any General->Rule of Law", "Any General->Bureaucracy", "Any General->Church Law", "Any Wise->Bribe-wise"],
						stock: "Human",
						traitPool: 1,
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast"],
						mentalPool: 1,
						name: "Custodian",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->Noble->Young Lady",
								"Man->Noble Court->Young Lady",
								"Man->Religious->Itinerant Monk",
								"Man->Religious->Cloistered Nun",
								"Man->City Dweller->Temple Acolyte",
								"Man->Religious->Temple Acolyte",
								"Man->Religious->Inquisitor",
								"Man->Religious->Exorcist",
								"Man->Religious->Theologian"
							]
						},
						resources: 10,
						setting: "Religious",
						skillPool: 7,
						skills: ["Any Wise->Relic-wise", "Any General->Observation", "Any General->Obscure History", "Any General->Religious History", "Any General->Folklore", "Any Wise->Saint-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Strange", "Any Character->Erudite", "Any Character->Obsessed", "Any Character->Arcane"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Noble Court", "Man->Villager"],
						mentalPool: 0,
						name: "Interpreter",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->Noble->Young Lady",
								"Man->Noble Court->Young Lady",
								"Man->City Dweller->Temple Acolyte",
								"Man->Religious->Temple Acolyte",
								"Man->Religious->Exorcist",
								"Man->Religious->Theologian"
							]
						},
						resources: 10,
						setting: "Religious",
						skillPool: 7,
						skills: ["Any General->Read", "Any General->Ancient Languages", "Any General->Instruction", "Any General->Write", "Any General->Doctrine", "Any General->Foreign Languages"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Ink-Stained Hands", "Any Character->Condescending"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Villager", "Man->Noble Court"],
						mentalPool: 1,
						name: "Archivist",
						physicalPool: 0,
						resources: 8,
						setting: "Religious",
						skillPool: 5,
						skills: ["Any General->Research", "Any Wise->Library-wise", "Any General->Ancient History", "Any General->Symbology"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Myopic", "Any Die->Affinity for Books and Scrolls"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Itinerant Monk",
						physicalPool: 0,
						resources: 6,
						setting: "Religious",
						skillPool: 7,
						skills: ["Any General->Doctrine", "Any General->Suasion", "Any General->Meditation", "Any General->Begging", "Any Wise->Alms-wise", "Any General->Streetwise", "Any Wise->Road-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Tonsured"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Outcast", "Man->Noble Court", "Man->Nomad"],
						mentalPool: 0,
						name: "Cloistered Nun",
						physicalPool: 0,
						resources: 12,
						setting: "Religious",
						skillPool: 6,
						skills: ["Any General->Research", "Any General->History", "Any General->Meditation", "Any General->Vintner", "Any General->Symbology"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Tonsured", "Any Character->Restless", "Any Character->Bored", "Man Lifepath->Monastic"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Professional Soldier"],
						mentalPool: 1,
						name: "Temple Acolyte",
						physicalPool: 0,
						resources: 5,
						setting: "Religious",
						skillPool: 4,
						skills: ["Any General->Write", "Any General->Read", "Any General->Doctrine", "Any Wise->Temple-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Tonsured", "Any Character->Obedient", "Man Special->Faithful"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->Outcast", "Man->Professional Soldier", "Man->Noble Court"],
						mentalPool: 1,
						name: "Priest",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Temple Acolyte",
								"Man->Religious->Temple Acolyte",
								"Man->Noble->Religious Acolyte"
							]
						},
						resources: 18,
						setting: "Religious",
						skillPool: 7,
						skills: ["Any General->Oratory", "Any General->Suasion", "Any General->Read", "Any General->Write", "Any General->Doctrine", "Any General->Ritual", "Any General->Symbology", "Any General->Religious History"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Vested"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->City Dweller", "Man->Noble Court"],
						mentalPool: 1,
						name: "Exorcist",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Temple Priest",
								"Man->Peasant->Itinerant Priest",
								"Man->Religious->Priest",
								"Man->Noble Court->Court Priest",
								"Man->Religious->Archivist"
							]
						},
						resources: 10,
						setting: "Religious",
						skillPool: 9,
						skills: ["Any General->Doctrine", "Any General->Obscure History", "Any General->Observation", "Any General->Church Law", "Any General->Symbology", "Any General->Demonology", "Any General->Ancient Languages"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Skeptical", "Any Character->Haunted", "Man Lifepath->Possessed", "Man Lifepath->Lost Faith", "Man Special->Faithful", "Man Lifepath->Exorcism Ritualist"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Professional Soldier", "Man->City Dweller", "Man->Noble Court"],
						mentalPool: 0,
						name: "Inquisitor",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Temple Priest",
								"Man->Peasant->Itinerant Priest",
								"Man->Religious->Priest",
								"Man->Noble Court->Court Priest",
								"Man->City Dweller->Judge",
								"Man->Noble Court->Justiciar"
							]
						},
						resources: 15,
						setting: "Religious",
						skillPool: 6,
						skills: ["Any General->Doctrine", "Any General->Interrogation", "Any General->Torture", "Any Wise->Heresy-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Suspicious", "Any Character->Merciless", "Any Die->Cold Blooded", "Any Character->Righteous"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Villager", "Man->Noble Court"],
						mentalPool: 1,
						name: "Theologian",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Scribe",
								"Man->Religious->Scribe",
								"Man->Religious->Archivist",
								"Man->Noble Court->Court Lawyer",
								"Man->City Dweller->Advocate",
								"Man->Religious->Custodian",
								"Man->Religious->Interpreter",
								"Man->Religious->Priest",
								"Man->City Dweller->Bishop",
								"Man->Religious->Bishop"
							]
						},
						resources: 9,
						setting: "Religious",
						skillPool: 10,
						skills: ["Any General->Doctrine", "Any General->Rhetoric", "Any General->Philosophy", "Any General->History", "Any General->Religious History", "Any General->Church Law", "Any General->Obscure History", "Any General->Read", "Any General->Write"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Learned", "Any Character->Insightful", "Any Die->Bookworm", "Any Character->Academic"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Noble Court"],
						mentalPool: 0,
						name: "Archpriest",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Temple Priest",
								"Man->Peasant->Itinerant Priest",
								"Man->Religious->Priest",
								"Man->Noble Court->Court Priest",
								"Man->Noble Court->Chaplain",
								"Man->Professional Soldier->Chaplain"
							]
						},
						resources: 25,
						setting: "Religious",
						skillPool: 10,
						skills: ["Any General->Oratory", "Any General->Suasion", "Any General->Read", "Any General->Write", "Any General->Doctrine", "Any General->History", "Any General->Religious History", "Any General->Ritual", "Any Wise->Church-wise", "Any Wise->Parish-wise", "Any Wise->Tithe-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Imperious Demeanor"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Noble Court"],
						mentalPool: 0,
						name: "Canon",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Religious->Archpriest",
								"Man->Religious->Theologian",
								"Man->Religious->Abbot/Abbess"
							]
						},
						resources: 45,
						setting: "Religious",
						skillPool: 6,
						skills: ["Any General->Rule of Law", "Any General->Church Law", "Any General->Administration", "Any General->Doctrine", "Any Wise->Church-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Authoritative"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Noble Court"],
						mentalPool: 1,
						name: "Abbot/Abbess",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Religious->Itinerant Monk",
								"Man->Religious->Cloistered Nun",
								"Man->Religious->Theologian",
								"Man->Villager->Vintner"
							]
						},
						resources: 45,
						setting: "Religious",
						skillPool: 6,
						skills: ["Any General->Administration", "Any General->Accounting", "Any General->Vintner", "Any General->Wine Tasting", "Any Wise->Royal Secret-wise", "Any Wise->Abbey-wise"],
						stock: "Human",
						traitPool: 1,
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Outcast", "Man->Noble Court"],
						mentalPool: 0,
						name: "Bishop",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Religious->Archpriest",
								"Man->Noble->Baron",
								"Man->Noble->Viscount",
								"Man->Noble->Count",
								"Man->Noble->Duke"
							],
							AND: [
								"Trait->Man Lifepath->Your Grace"
							]
						},
						resources: 45,
						setting: "Religious",
						skillPool: 7,
						skills: ["Any General->Religious History", "Any General->Intimidation", "Any General->Ritual", "Any General->Symbology", "Any General->History", "Any General->Obscure History"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Domineering Presence"],
						years: 8
					}
				]
			},
			"Seafaring": {
				allowed: ["bwg", "bwc"],
				name: "Seafaring",
				stock: "Human",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 3,
						leads: ["Man->Servitude", "Man->Professional Soldier", "Man->Outcast", "Man->College of Magic"],
						mentalPool: 0,
						name: "Son of a Gun",
						physicalPool: 0,
						resources: 3,
						setting: "Seafaring",
						skillPool: 0,
						stock: "Human",
						traitPool: 2,
						traits: ["Any Callon->Sea Legs"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Man->Outcast", "Man->Noble Court", "Man->Religious"],
						mentalPool: 0,
						name: "Gifted Child",
						physicalPool: 0,
						resources: 4,
						setting: "Seafaring",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Misunderstood", "Man Special->Gifted", "Any Character->Abused", "Man Special->Spirit Familiar"],
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->City Dweller", "Man->Servitude", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Boy",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"IS->LP*2",
								"IS->UNIQUE"
							]
						},
						resources: 8,
						setting: "Seafaring",
						skillPool: 4,
						skills: ["Any Wise->Sailor-wise", "Any Wise->Ship-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Veneer of Obedience", "Any Character->Curses like a Sailor", "Any Die->Sprinter"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Galley Slave",
						physicalPool: 0,
						resources: 3,
						setting: "Seafaring",
						skillPool: 3,
						skills: ["Any Wise->Slave Deck-wise", "Any Wise->Taskmaster-wise", "Any General->Sing", "Any General->Seamanship", "Any General->Knots"],
						stock: "Human",
						traitPool: 3,
						traits: ["Man Lifepath->Tasting the Lash", "Any Character->Eating Maggots", "Any Character->Following the Beat", "Any Callon->Iron Stomach", "Any Die->Bottomless Stomach", "Any Character->Gnawing Hunger"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Servitude", "Man->City Dweller"],
						mentalPool: 0,
						name: "Ratcatcher",
						physicalPool: 0,
						resources: 4,
						setting: "Seafaring",
						skillPool: 5,
						skills: ["Any General->Trapper", "Any General->Poisons", "Any General->Ratiquette"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Bilge-Drinker", "Man Lifepath->Rat-Speak", "Any Character->Feral"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Landsman",
						physicalPool: 0,
						resources: 5,
						setting: "Seafaring",
						skillPool: 3,
						skills: ["Any General->Seamanship", "Any General->Knots", "Any General->Brawling", "Any Wise->Rope-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Cursing", "Any Character->Aches and Pains"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Drummer",
						physicalPool: 0,
						resources: 6,
						setting: "Seafaring",
						skillPool: 3,
						skills: ["Any General->Drum", "Any General->Sing", "Any General->Drum Maker"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Incessant Tapping"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Professional Soldier", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 0,
						name: "Sailor",
						physicalPool: 1,
						resources: 7,
						setting: "Seafaring",
						skillPool: 6,
						skills: ["Any General->Seamanship", "Any General->Rigging", "Any General->Knots", "Any General->Brawling", "Any General->Sing", "Any Wise->Sea-wise", "Any General->Gambling"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Drunk"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Outcast"],
						mentalPool: 1,
						name: "Crazy Old Sailor",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Sailor",
								"Man->Professional Soldier->Sailor",
								"Man->Seafaring->Sailor",
								"Man->Villager->Sailor",
								"Man->Outcast->Pirate",
								"Man->Black Barbarian->Mercenary Captain",
								"Man->City Dweller->Mercenary Captain"
							],
							LIMIT: [
								"YEARS->40"
							]
						},
						resources: 8,
						setting: "Seafaring",
						skillPool: 3,
						skills: ["Any General->Ugly Truth", "Any General->Intimidation", "Any Wise->Omen-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Superstitious", "Any Character->Metal Plate in the Skull", "Any Character->He's a Jonah That One"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Purser",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Clerk",
								"Man->Religious->Clerk",
								"Man->Villager->Clerk",
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->City Dweller->Sailor",
								"Man->Professional Soldier->Sailor",
								"Man->Seafaring->Sailor",
								"Man->Villager->Sailor"
							]
						},
						resources: 9,
						setting: "Seafaring",
						skillPool: 4,
						skills: ["Any General->Accounting", "Any Wise->Crew-wise", "Any Wise->Supply-wise", "Any Wise->Ship-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Gnawing Hunger", "Any Character->Bitter"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Professional Soldier"],
						mentalPool: 1,
						name: "Signalman",
						physicalPool: 0,
						resources: 8,
						setting: "Seafaring",
						skillPool: 5,
						skills: ["Any General->Signaling", "Any General->Observation", "Any General->Cryptography"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Cryptic"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Pilot",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Sailor",
								"Man->Professional Soldier->Sailor",
								"Man->Seafaring->Sailor",
								"Man->Villager->Sailor",
								"Man->Outcast->Pirate",
								"Man->Black Barbarian->Mercenary Captain",
								"Man->City Dweller->Mercenary Captain"
							]
						},
						resources: 8,
						setting: "Seafaring",
						skillPool: 5,
						skills: ["Any General->Pilot", "Any Wise->Ship-wise", "Any General->Observation", "Any Wise->Shoal-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Blisters", "Any Die->Light Sleeper", "Any Character->Bored", "Any Character->Paranoid About the Ship"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Marine",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->City Dweller->Sailor",
								"Man->Professional Soldier->Sailor",
								"Man->Seafaring->Sailor",
								"Man->Villager->Sailor",
								"Man->Outcast->Pirate",
								"Man->Black Barbarian->Mercenary Captain",
								"Man->City Dweller->Mercenary Captain"
							]
						},
						resources: 10,
						setting: "Seafaring",
						skillPool: 4,
						skills: ["Any General->Appropriate Weapons", "Any General->Knots", "Any General->Intimidation"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Bruiser", "Any Callon->Sea Legs"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Bosun",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Sailor",
								"Man->Professional Soldier->Sailor",
								"Man->Seafaring->Sailor",
								"Man->Villager->Sailor",
								"Man->Outcast->Pirate",
								"Man->Black Barbarian->Mercenary Captain",
								"Man->City Dweller->Mercenary Captain"
							]
						},
						resources: 8,
						setting: "Seafaring",
						skillPool: 3,
						skills: ["Any General->Intimidation", "Any General->Brawling", "Any Wise->Sailor-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Mean", "Any Character->Obedient"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Sailmaker",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->City Dweller->Sailor",
								"Man->Professional Soldier->Sailor",
								"Man->Seafaring->Sailor",
								"Man->Villager->Sailor",
								"Man->Outcast->Pirate",
								"Man->City Dweller->Seamstress"
							]
						},
						resources: 9,
						setting: "Seafaring",
						skillPool: 5,
						skills: ["Any General->Sewing", "Any General->Weaving", "Any General->Mending", "Any Wise->Sail-wise"],
						stock: "Human",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Villager", "Man->Outcast"],
						mentalPool: 1,
						name: "Ship's Doctor",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Doctor",
								"Man->Noble Court->Court Doctor",
								"Man->City Dweller->Physician",
								"Man->Villager->Barber",
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student"
							]
						},
						resources: 15,
						setting: "Seafaring",
						skillPool: 8,
						skills: ["Any General->Apothecary", "Any General->Bloodletting", "Any General->Surgery", "Any General->Anatomy", "Man Special->Astrology", "Any General->Falsehood", "Any Wise->Tar-wise", "Any Wise->Scurvy-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Man Lifepath->Incomprehensible Diagnosis", "Man Lifepath->Ugly Reputation"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Villager", "Man->Outcast"],
						mentalPool: 1,
						name: "Ship's Cook",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Sailor",
								"Man->Professional Soldier->Sailor",
								"Man->Seafaring->Sailor",
								"Man->Villager->Sailor",
								"Man->Outcast->Pirate"
							]
						},
						resources: 10,
						setting: "Seafaring",
						skillPool: 6,
						skills: ["Any General->Cooking", "Any General->Firebuilding", "Any General->Sing", "Any General->Falsehood", "Any Wise->Mystery Meat-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Man Lifepath->Crippled", "Any Character->Cookie", "Any Character->Maggot Connoisseur"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Villager", "Man->City Dweller", "Man->Religious", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Ship's Chaplain",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble Court->Chaplain",
								"Man->Professional Soldier->Chaplain",
								"Man->Religious->Military Order",
								"Man->City Dweller->Temple Acolyte",
								"Man->Religious->Temple Acolyte",
								"Man->Noble->Religious Acolyte"
							]
						},
						resources: 15,
						setting: "Seafaring",
						skillPool: 4,
						skills: ["Any General->Oratory", "Any General->Doctrine", "Any Wise->Ship-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Dark Elf Lifepath->Saturnine", "Man Lifepath->Burial at Sea", "Any Character->Secretly Worships the Black Sea God"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->City Dweller", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Weather Witch",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Peasant->Augur",
								"Man->City Dweller->Neophyte Sorcerer",
								"Man->Outcast->Neophyte Sorcerer",
								"Man->Noble->Arcane Devotee",
								"Man->Outcast->Rogue Wizard"
							]
						},
						resources: 20,
						setting: "Seafaring",
						skillPool: 6,
						skills: ["Any Wise->Sea-wise", "Man Magical->Summoning", "Any Wise->Superstition-wise", "Any General->Navigation", "Man Special->Astrology"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Die->Weather Sense"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Servitude", "Man->Outcast"],
						mentalPool: 1,
						name: "Navigator",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Seafaring->Pilot",
								"Man->Black Barbarian->Mercenary Captain",
								"Man->City Dweller->Mercenary Captain",
								"Man->City Dweller->Sailor",
								"Man->Professional Soldier->Sailor",
								"Man->Seafaring->Sailor",
								"Man->Villager->Sailor",
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student"
							]
						},
						resources: 15,
						setting: "Seafaring",
						skillPool: 6,
						skills: ["Any General->Navigation", "Any Wise->Sea-wise", "Any General->Cartography", "Man Special->Astrology", "Any Wise->Current-wise"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Servitude", "Man->Villager", "Man->Outcast"],
						mentalPool: 0,
						name: "Carpenter's Mate",
						physicalPool: 1,
						resources: 8,
						setting: "Seafaring",
						skillPool: 3,
						skills: ["Any General->Mending", "Any General->Gambling", "Any Wise->Wood-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Cursing", "Man Lifepath->Bull's-eye Spitter"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Servitude", "Man->Outcast"],
						mentalPool: 0,
						name: "Ship's Carpenter",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->City Dweller->Apprentice",
								"Man->Nomad->Apprentice",
								"Man->Professional Soldier->Apprentice",
								"Man->Villager->Apprentice",
								"Man->Seafaring->Carpenter's Mate"
							]
						},
						resources: 16,
						setting: "Seafaring",
						skillPool: 5,
						skills: ["Any General->Carpentry", "Any General->Shipwright", "Any General->Boatwright", "Any Wise->Ship-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->I Know This Ship Like My Own Hands"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Servitude", "Man->Outcast"],
						mentalPool: 1,
						name: "Artillerist's Mate",
						physicalPool: 0,
						resources: 8,
						setting: "Seafaring",
						skillPool: 4,
						skills: ["Any General->Mending", "Any General->Carpentry", "Any General->Artillerist"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Disturbingly Confident"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->City Dweller", "Man->Servitude", "Man->Outcast"],
						mentalPool: 1,
						name: "Engineer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Seafaring->Artillerist's Mate",
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->Seafaring->Ship's Carpenter",
								"Man->Professional Soldier->Engineer",
								"Man->Seafaring->Engineer",
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 25,
						setting: "Seafaring",
						skillPool: 6,
						skills: ["Any General->Engineering", "Man Special->Munitions", "Any General->Artillerist", "Any General->Carpentry", "Any General->Mending"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->It Just Might Work!"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Outcast", "Man->Professional Soldier", "Man->City Dweller"],
						mentalPool: 0,
						name: "Officer's Mate",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Born Noble",
								"Man->Noble->Page",
								"Man->Noble Court->Page",
								"Man->Seafaring->Son of a Gun"
							],
							LIMIT: [
								"IS->LP*2/3"
							]
						},
						resources: 10,
						setting: "Seafaring",
						skillPool: 4,
						skills: ["Any General->Etiquette", "Any Wise->Captain-wise", "Any General->Seamanship"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Pegboy"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Outcast", "Man->Professional Soldier", "Man->City Dweller"],
						mentalPool: 1,
						name: "Steward",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Seafaring->Purser",
								"Man->City Dweller->Merchant",
								"Man->Villager->Merchant",
								"Man->Noble Court->Steward",
								"Man->Seafaring->Steward",
								"Man->City Dweller->Accountant"
							]
						},
						resources: 20,
						setting: "Seafaring",
						skillPool: 5,
						skills: ["Any General->Accounting", "Any General->Ship Management", "Any General->Haggling", "Any Wise->Merchant-wise", "Any General->Appraisal"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Servitude", "Man->Outcast", "Man->Professional Soldier", "Man->City Dweller"],
						mentalPool: 1,
						name: "First Mate",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Man->City Dweller->2*Sailor",
								"Man->Professional Soldier->2*Sailor",
								"Man->Villager->2*Sailor",
								"Man->Seafaring->2*ANY"
							]
						},
						resources: 18,
						setting: "Seafaring",
						skillPool: 6,
						skills: ["Any General->Intimidation", "Any General->Command", "Any General->Conspicuous", "Any Wise->Seaman-wise", "Any General->Sword"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Man->Peasant", "Man->Villager", "Man->City Dweller", "Man->Servitude", "Man->Noble Court", "Man->Religious", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 1,
						name: "Ship's Captain",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->Seafaring->First Mate",
								"Man->Noble->Knight",
								"Man->Noble Court->Knight",
								"Man->Black Barbarian->2*Mercenary Captain",
								"Man->City Dweller->2*Mercenary Captain"
							]
						},
						resources: 30,
						setting: "Seafaring",
						skillPool: 6,
						skills: ["Any General->Command", "Any General->Oratory", "Any Wise->Ship-wise", "Any Wise->Sea-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Stern Demeanor"],
						years: 7
					}
				]
			},
			"Servitude": {
				allowed: ["bwg", "bwc"],
				name: "Servitude",
				stock: "Human",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: -1,
						generalSkillPool: 2,
						leads: ["Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Born Slave",
						physicalPool: 0,
						resources: 5,
						setting: "Servitude",
						skillPool: 1,
						skills: ["Any Wise->Slavery-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Man Lifepath->Broken", "Any Character->Scarred", "Man Lifepath->Maimed", "Any Die->Lame"],
						years: 12
					},
					{
						allowed: ["bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Man->Outcast", "Man->Noble Court", "Man->Religious"],
						mentalPool: 0,
						name: "Gifted Child",
						physicalPool: 0,
						resources: 4,
						setting: "Servitude",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Misunderstood", "Man Special->Gifted", "Any Character->Abused", "Man Special->Spirit Familiar"],
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Ditch Digger",
						physicalPool: 0,
						resources: 4,
						setting: "Servitude",
						skillPool: 3,
						skills: ["Any General->Ditch Digging", "Any General->Sing", "Any Wise->Boss-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Blisters", "Man Lifepath->Back-Breaking Labor"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Outcast", "Man->City Dweller", "Man->Noble Court", "Man->Merchant House"],
						mentalPool: 0,
						name: "Servant",
						physicalPool: 0,
						resources: 6,
						setting: "Servitude",
						skillPool: 2,
						skills: ["Any General->Soothing Platitudes", "Any Wise->Gossip-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Mind-Numbing Work", "Any Character->Obsequious"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Outcast", "Man->Merchant House"],
						mentalPool: 0,
						name: "Field Laborer",
						physicalPool: 0,
						resources: 5,
						setting: "Servitude",
						skillPool: 7,
						skills: ["Any General->Farming", "Any General->Mending", "Any General->Sing", "Any General->Hauling", "Any General->Driving", "Any Wise->Fall Grass-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Any Character->Hope"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Outcast", "Man->City Dweller", "Man->Nomad", "Man->Death Cult"],
						mentalPool: 0,
						name: "Captive of War",
						physicalPool: 0,
						resources: 4,
						setting: "Servitude",
						skillPool: 2,
						skills: ["Any Wise->Cell-wise", "Any Wise->Chain-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Die->Claustrophobic", "Any Character->Resigned to Fate"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Professional Soldier", "Man->Outcast", "Man->City Dweller", "Man->Nomad", "Man->Death Cult"],
						mentalPool: 0,
						name: "Gaol",
						physicalPool: 0,
						resources: 3,
						setting: "Servitude",
						skillPool: 3,
						skills: ["Any Wise->Gaol-wise", "Any General->Ratiquette"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Involuntary Shudders"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Outcast", "Man->Merchant House", "Man->Death Cult"],
						mentalPool: 0,
						name: "Harem Slave",
						physicalPool: 0,
						resources: 4,
						setting: "Servitude",
						skillPool: 3,
						skills: ["Any General->Falsehood", "Any General->Seduction"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Numb", "Any Character->Worldly"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Peasant", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 0,
						name: "Bondsman",
						physicalPool: 0,
						resources: 7,
						setting: "Servitude",
						skillPool: "*",
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Lucky"],
						years: 7
					}
				]
			},
			"Villager": {
				allowed: ["bwg", "bwc"],
				name: "Villager",
				stock: "Human",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 3,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->Servitude", "Man->Seafaring", "Man->Religious", "Man->College of Magic", "Man->Black Barbarian"],
						mentalPool: 0,
						name: "Village Born",
						physicalPool: 0,
						resources: 4,
						setting: "Villager",
						skillPool: 0,
						stock: "Human",
						traitPool: 2,
						years: 10
					},
					{
						allowed: ["bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Noble Court", "Man->Religious"],
						mentalPool: 0,
						name: "Gifted Child",
						physicalPool: 0,
						resources: 4,
						setting: "Villager",
						skillPool: 0,
						stock: "Human",
						traitPool: 1,
						traits: ["Man Special->Misunderstood", "Man Special->Gifted", "Any Character->Abused", "Man Special->Spirit Familiar"],
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->City Dweller", "Man->Seafaring", "Man->Servitude", "Man->Religious", "Man->Professional Soldier", "Man->Outcast", "Man->Nomad"],
						mentalPool: 0,
						name: "Kid",
						physicalPool: 1,
						requirements: {
							LIMIT: [
								"IS->LP*2",
								"IS->UNIQUE"
							]
						},
						resources: 3,
						setting: "Villager",
						skillPool: 3,
						skills: ["Any Wise->Trouble-wise", "Any General->Throwing", "Any General->Inconspicuous"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Bad Egg", "Any Character->Good for Nothing", "Any Callon->Fleet of Foot"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Peasant"],
						mentalPool: 0,
						name: "Idiot",
						physicalPool: 0,
						resources: 4,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Inconspicuous", "Any General->Conspicuous", "Any General->Ugly Truth", "Any Wise->Village Secrets-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Problems", "Any Character->Alcoholic", "Any Character->Abused", "Any Character->Handicapped"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Religious", "Man->Servitude", "Man->City Dweller", "Man->Nomad"],
						mentalPool: 0,
						name: "Pilgrim",
						physicalPool: 0,
						resources: 4,
						setting: "Villager",
						skillPool: 5,
						skills: ["Any Wise->Religious Rumor-wise", "Any Wise->Road-wise", "Any Wise->Shrine-wise", "Any Wise->Alms-wise", "Any Wise->Relic-wise", "Any General->Doctrine"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Collector"],
						years: 2
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Servitude", "Man->Outcast", "Man->Outcast", "Man->Nomad"],
						mentalPool: 0,
						name: "Conscript",
						physicalPool: 0,
						resources: 5,
						setting: "Villager",
						skillPool: 2,
						skills: ["Any General->Foraging", "Any Wise->Baggage Train-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Hide Before Battle"],
						years: 1
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->City Dweller", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Groom",
						physicalPool: 0,
						resources: 7,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Animal Husbandry", "Any General->Riding", "Any General->Mending", "Any Wise->Horse-wise", "Any Wise->Road-wise"],
						stock: "Human",
						traitPool: 1,
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Professional Soldier", "Man->Merchant House"],
						mentalPool: 0,
						name: "Runner",
						physicalPool: 1,
						resources: 6,
						setting: "Villager",
						skillPool: 3,
						skills: ["Any General->Streetwise", "Any General->Inconspicuous", "Any Wise->Shortcut-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Skinny", "Any Callon->Fleet of Foot"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->Servitude", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 1,
						name: "Village Peddler",
						physicalPool: 0,
						resources: 10,
						setting: "Villager",
						skillPool: 7,
						skills: ["Any General->Mending", "Any General->Sing", "Any General->Haggling", "Any General->Chandler", "Any General->Persuasion", "Any General->Inconspicuous", "Any General->Falsehood"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Odd"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Merchant House"],
						mentalPool: 0,
						name: "Shopkeeper",
						physicalPool: 0,
						resources: 15,
						setting: "Villager",
						skillPool: 5,
						skills: ["Any General->Haggling", "Any General->Accounting", "Any General->Observation", "Any Wise->Merchant-wise"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Outcast", "Man->Professional Soldier", "Man->Merchant House"],
						mentalPool: 0,
						name: "Clerk",
						physicalPool: 0,
						resources: 9,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Bureaucracy", "Any General->Write", "Any General->Read", "Any Wise->Contract-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Cramped Hands", "Any Character->Mind for Small Details"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Professional Soldier", "Man->City Dweller", "Man->Peasant", "Man->Servitude", "Man->Seafaring"],
						mentalPool: 0,
						name: "Sailor",
						physicalPool: 1,
						resources: 5,
						setting: "Villager",
						skillPool: 6,
						skills: ["Any General->Rigging", "Any General->Knots", "Any General->Brawling", "Any General->Mending", "Any General->Sing", "Any General->Fishing"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Superstitious", "Any Callon->Sea Legs"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Professional Soldier", "Man->Outcast", "Man->Servitude", "Man->Peasant"],
						mentalPool: 0,
						name: "Laborer",
						physicalPool: 1,
						resources: 4,
						setting: "Villager",
						skillPool: 2,
						skills: ["Any General->Ditch Digging", "Any Wise->Latrine-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Calloused", "Any Character->Starved", "Man Lifepath->Broken", "Man Lifepath->Hardened", "Man Lifepath->Numb"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Professional Soldier", "Man->Outcast", "Man->Servitude", "Man->Peasant"],
						mentalPool: 0,
						name: "Miner",
						physicalPool: 1,
						requirements: {
							OR: [
								"Men->City Dweller->Laborer",
								"Men->Villager->Laborer",
								"Men->Servitude->Laborer",
								"Men->Peasant->Conscript",
								"Men->Villager->Conscript",
								"Men->Peasant->Farmer",
								"Men->Servitude->Farmer",
								"Men->Professional Soldier->Foot Soldier"
							]
						},
						resources: 7,
						setting: "Villager",
						skillPool: 2,
						skills: ["Any General->Mining", "Any Wise->Cave-In-wise"],
						stock: "Human",
						traitPool: 3,
						traits: ["Orc Lifepath->Black Lung", "Any Character->Drunk", "Any Character->Superstitious"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Outcast", "Man->Professional Soldier"],
						mentalPool: 0,
						name: "Taskmaster",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Villager->Village Sergeant",
								"Men->Professional Soldier->1*ANY"
							]
						},
						resources: 15,
						setting: "Villager",
						skillPool: 5,
						skills: ["Any General->Intimidation", "Any General->Brawling", "Any General->Sing", "Any General->Conspicuous", "Any Wise->Lazy Bastard-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Hard-Hearted", "Any Character->Mean", "Any Character->Barker", "Any Callon->Booming Voice"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->City Dweller", "Man->Seafaring", "Man->Servitude", "Man->Noble Court", "Man->Religious", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 1,
						name: "Serving Wench",
						physicalPool: 0,
						resources: 5,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Soothing Platitudes", "Any General->Ugly Truth", "Any Wise->Customer-wise", "Any General->Sleight of Hand"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Extremely Bitter", "Any Character->Ugly", "Any Character->Drop-Dead Gorgeous", "Any Character->Buxom"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Merchant House"],
						mentalPool: 0,
						name: "Hosteller",
						physicalPool: 0,
						requirements: { LIMIT: ["NOT->LP*2"] },
						resources: 15,
						setting: "Villager",
						skillPool: 5,
						skills: ["Any General->Cooking", "Any General->Mending", "Any General->Accounting", "Any General->Soothing Platitudes", "Any Wise->Guest-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Fixed Smile", "Any Character->Gossip"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Professional Soldier", "Man->City Dweller", "Man->Peasant", "Man->Servitude"],
						mentalPool: 0,
						name: "Village Guard",
						physicalPool: 1,
						resources: 7,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Appropriate Weapons", "Any General->Intimidation", "Any General->Brawling", "Any Wise->Graft-wise", "Any Wise->Village-wise", "Any Wise->Guard-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Thug"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Professional Soldier", "Man->Servitude", "Man->Noble Court"],
						mentalPool: 0,
						name: "Village Sergeant",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Villager->Village Guard",
								"Men->Noble->Squire",
								"Men->Noble Court->Squire",
								"Men->Outcast->Freebooter",
								"Men->City->Sergeant-at-Arms",
								"Men->Noble Court->Man-at-Arms"
							]
						},
						resources: 9,
						setting: "Villager",
						skillPool: 6,
						skills: ["Any General->Command", "Any General->Intimidation", "Any General->Field Dressing", "Any General->Appropriate Weapons", "Any General->Shield Training", "Any General->Armor Training", "Any Wise->Bribe-wise", "Any Wise->Wealthy-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Overworked", "Any Character->Underpaid"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Professional Soldier", "Man->Servitude", "Man->Noble Court"],
						mentalPool: 0,
						name: "Corrupt Sergeant",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Villager->Village Guard",
								"Men->Noble->Squire",
								"Men->Noble Court->Squire",
								"Men->Outcast->Freebooter",
								"Men->City->Sergeant-at-Arms",
								"Men->Noble Court->Man-at-Arms"
							]
						},
						resources: 12,
						setting: "Villager",
						skillPool: 6,
						skills: ["Any General->Intimidation", "Any General->Appropriate Weapons", "Any General->Shield Training", "Any General->Armor Training", "Any Wise->Bribe-wise", "Any Wise->Wealthy-wise", "Any Wise->Criminal-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Predatory"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant"],
						mentalPool: 0,
						name: "Tailor",
						physicalPool: 0,
						resources: 12,
						setting: "Villager",
						skillPool: 5,
						skills: ["Any General->Sewing", "Any General->Embroidery", "Any Wise->Clothing-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Frippery"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Outcast", "Man->Merchant House"],
						mentalPool: 1,
						name: "Tax Collector",
						physicalPool: 0,
						requirements: {
							LIMIT:
								[
									"NOT->LP*2"
								]
						},
						resources: 15,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Intimidation", "Any General->Accounting", "Any General->Haggling", "Any General->Persuasion"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Hard-Hearted", "Any Die->Manhunter"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->Professional Soldier", "Man->City Dweller"],
						mentalPool: 0,
						name: "Cobbler",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Villager->Apprentice",
								"Men->Nomad->Apprentice",
								"Men->Professional Soldier->Apprentice"
							]
						},
						resources: 20,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Cobbler", "Any Wise->Shoe-wise", "Any Wise->Feet-wise", "Any Wise->Leather-wise", "Any Wise->Nail-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Comfortable Shoes"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->Professional Soldier", "Man->City Dweller"],
						mentalPool: 0,
						name: "Farrier",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Villager->Apprentice",
								"Men->Nomad->Apprentice",
								"Men->Professional Soldier->Apprentice"
							]
						},
						resources: 12,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Blacksmith", "Any General->Animal Husbandry", "Any Wise->Horse-wise", "Any General->Haggling"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->A Bit Deaf"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Outcast"],
						mentalPool: 0,
						name: "Butcher",
						physicalPool: 0,
						resources: 15,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Butchery", "Any General->Cooking", "Any Wise->Guts-wise", "Any General->Anatomy"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Prominent Scar", "Any Die->Thick Skin", "Any Character->Stinky", "Any Character->Muttering"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Outcast"],
						mentalPool: 0,
						name: "Barber",
						physicalPool: 0,
						resources: 10,
						setting: "Villager",
						skillPool: 5,
						skills: ["Any General->Bloodletting", "Any General->Anatomy", "Any General->Apothecary", "Any Wise->Village-wise", "Any Wise->Gossip-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Agreeable", "Any Character->Seemingly Concerned"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Noble Court"],
						mentalPool: 0,
						name: "Brewer",
						physicalPool: 0,
						resources: 15,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Brewer", "Any General->Miller", "Any Wise->Grain-wise", "Any Wise->Brew-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Reeks of Alcohol", "Any Character->Ruddy Complexion"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->Servitude", "Man->City Dweller", "Man->Outcast"],
						mentalPool: 1,
						name: "Acolyte",
						physicalPool: 0,
						resources: 10,
						setting: "Villager",
						skillPool: 6,
						skills: ["Any General->Doctrine", "Any General->Bureaucracy", "Any General->Read", "Any General->Write", "Any General->Ritual", "Any General->Religious History", "Any Wise->Temple-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Tonsured", "Any Character->Early Riser", "Man Lifepath->Broken", "Any Callon->Perfect Pitch"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Outcast", "Man->Professional Soldier", "Man->Peasant"],
						mentalPool: 0,
						name: "Failed Acolyte",
						physicalPool: 0,
						resources: 8,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any Wise->Temple-wise", "Any Wise->Dirty Secrets-wise", "Any General->Doctrine", "Any General->Religious History"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Bitter"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->City Dweller", "Man->Seafaring", "Man->Servitude", "Man->Religious", "Man->Professional Soldier", "Man->Outcast"],
						mentalPool: 1,
						name: "Village Priest",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Religious->Acolyte",
								"Men->Villager->Acolyte"
							]
						},
						resources: 15,
						setting: "Villager",
						skillPool: 5,
						skills: ["Any General->Oratory", "Any General->Suasion", "Any General->Symbology"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Vested", "Any Character->Devout", "Man Special->Faithful"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->City Dweller", "Man->Seafaring", "Man->Servitude", "Man->Religious", "Man->Professional Soldier", "Man->Outcast", "Man->Death Cult"],
						mentalPool: 1,
						name: "Venal Priest",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Religious->Acolyte",
								"Men->Villager->Acolyte",
								"Men->Religious->Clerk",
								"Men->Villager->Clerk",
								"Men->City Dweller->Clerk",
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Men->Religious->1*ANY"
							]
						},
						resources: 20,
						setting: "Villager",
						skillPool: 6,
						skills: ["Any General->Persuasion", "Any General->Soothing Platitudes", "Any General->Falsehood"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Venal", "Man Lifepath->Vested"],
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Professional Soldier", "Man->Seafaring", "Man->Merchant House"],
						mentalPool: 0,
						name: "Apprentice",
						physicalPool: 1,
						resources: 7,
						setting: "Villager",
						skillPool: 6,
						skills: ["Any General->Mending", "Any General->Blacksmith", "Any General->Carpentry", "Any General->Tanner", "Any General->Potter", "Any General->Cooper"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Lifepath->Broken In", "Man Lifepath->Back-Breaking Labor"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Professional Soldier", "Man->Seafaring"],
						mentalPool: 0,
						name: "Journeyman",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Villager->Apprentice",
								"Men->Nomad->Apprentice",
								"Men->Professional Soldier->Apprentice"
							]
						},
						resources: 15,
						setting: "Villager",
						skillPool: 5,
						skills: ["Any General->Haggling", "Any General->Appraisal", "Any General->Read", "Any General->Write"],
						stock: "Human",
						traitPool: 1,
						traits: ["Man Lifepath->Made Man", "Any Die->Geometric"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant"],
						mentalPool: 1,
						name: "Cloth Dyer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Villager->Apprentice",
								"Men->Nomad->Apprentice",
								"Men->Professional Soldier->Apprentice"
							]
						},
						resources: 20,
						setting: "Villager",
						skillPool: 6,
						skills: ["Any General->Cloth Dyeing", "Any General->Dye Manufacture", "Any General->Accounting", "Any General->Haggling", "Any Wise->Fabric-wise", "Any Wise->Mineral-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Many-Colored Hands"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Professional Soldier", "Man->Outcast", "Man->Peasant"],
						mentalPool: 0,
						name: "Bowyer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Villager->Apprentice",
								"Men->Nomad->Apprentice",
								"Men->Professional Soldier->Apprentice",
								"Man->Noble Court->Huntsman",
								"Man->Noble Court->Forester",
								"Man->Professional Soldier->Archer"
							]
						},
						resources: 15,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Bowyer", "Any General->Fletcher", "Any General->Mending", "Any General->Bow", "Any Wise->Bow-wise"],
						stock: "Human",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Professional Soldier"],
						mentalPool: 1,
						name: "Master Craftsman",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 30,
						setting: "Villager",
						skillPool: 6,
						skills: ["Any Wise->Craftsman-wise", "Any Wise->Artisan-wise", "Any Wise->Materials-wise", "Any Wise->Tools-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Perfectionist", "Any Character->Early Riser", "Any Die->Stubborn", "Any Callon->Healthy"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Noble Court", "Man->Peasant"],
						mentalPool: 1,
						name: "Vintner",
						physicalPool: 0,
						requirements: {
							LIMIT:
								[
									"NOT->LP*2"
								]
						},
						resources: 40,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Vintner", "Any General->Wine Tasting", "Any General->Estate Management", "Any Wise->Grape-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Patient", "Any Character->Lugubrious"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Peasant", "Man->Noble Court"],
						mentalPool: 1,
						name: "Apiarist",
						physicalPool: 0,
						resources: 20,
						setting: "Villager",
						skillPool: 4,
						skills: ["Any General->Insect Husbandry", "Any General->Carpentry", "Any General->Firebuilding", "Any Wise->Honey-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Any Character->Stung Once Once", "Man Lifepath->Beespeaker"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Noble Court", "Man->Professional Soldier"],
						mentalPool: 1,
						name: "Mining Engineer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Men->Villager->Apprentice",
								"Men->Nomad->Apprentice",
								"Men->Professional Soldier->Apprentice",
								"Man->Villager->Miner",
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student",
								"Man->City Dweller->Journeyman",
								"Man->Professional Soldier->Journeyman",
								"Man->Villager->Journeyman"
							]
						},
						resources: 15,
						setting: "Villager",
						skillPool: 5,
						skills: ["Any General->Prospecting", "Any General->Engineering", "Any Wise->Ore-wise", "Any Wise->Rock-wise", "Any General->Command"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Grim", "Any Character->Agoraphobic", "Dwarf Lifepath->Deep Sense"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Outcast", "Man->Professional Soldier", "Man->Merchant House"],
						mentalPool: 1,
						name: "Town Official",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Clerk",
								"Man->Religious->Clerk",
								"Man->Villager->Clerk",
								"Man->Religious->Priest",
								"Man->City Dweller->Student",
								"Man->Noble->Student",
								"Man->Noble Court->Student"
							]
						},
						resources: 25,
						setting: "Villager",
						skillPool: 8,
						skills: ["Any General->Rule of Law", "Any General->Persuasion", "Any General->Etiquette", "Any General->Interrogation", "Any General->Falsehood", "Any Wise->Town-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Pragmatic"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->City Dweller", "Man->Outcast", "Man->Seafaring", "Man->Nomad", "Man->Merchant House"],
						mentalPool: 1,
						name: "Merchant",
						physicalPool: 0,
						requirements: {
							OR: [
								"Man->City Dweller->Accountant",
								"Man->Seafaring->Ship's Captain",
								"Man->City Dweller->Shopkeeper",
								"Man->Villager->Shopkeeper",
								"Man->Outcast->Smuggler",
								"Man->Outcast->Fence",
								"Man->Villager->Vintner"
							]
						},
						resources: 30,
						setting: "Villager",
						skillPool: 6,
						skills: ["Any General->Accounting", "Any General->Persuasion", "Any General->Falsehood", "Any Wise->Wholesale-wise", "Any Wise->Landlord-wise"],
						stock: "Human",
						traitPool: 1,
						traits: ["Any Character->Distracted"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Religious", "Man->City Dweller", "Man->Servitude"],
						mentalPool: 1,
						name: "Village Wife",
						physicalPool: 1,
						requirements: {
							TEXT: ["Players who take the Village Wife lifepath may also choose their husban's lifepath from the Villager setting. The Village Wife may choose from her husband's skills -she gets half of his skill points, rounded down- and she gets half of her husband's Resources."]
						},
						resources: 5,
						setting: "Villager",
						skillPool: 2,
						skills: ["Any General->Child-Rearing", "Any General->Cooking"],
						stock: "Human",
						traitPool: 1,
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->Noble", "Man->Outcast", "Man->Servitude"],
						mentalPool: 1,
						name: "Wizard's Apprentice",
						physicalPool: 0,
						resources: 10,
						setting: "Villager",
						skillPool: 6,
						skills: ["Any General->Read", "Any General->Foraging", "Any General->Symbology", "Man Magical->Circination", "Any Wise->Pig-wise", "Any Wise->Bone Headed-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Special->Always in the Way", "Any Die->Atravieso", "Man Special->Gifted", "Man Special->Assistant Pig-Keeper"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Man->Slave Raider", "Man->Peasant", "Man->Noble", "Man->Outcast"],
						mentalPool: 1,
						name: "Hedge Wizard",
						physicalPool: 1,
						requirements: {
							OR: [
								"Man->Villager->Wizard's Apprentice",
								"Man->City Dweller->Neophyte Sorcerer",
								"Man->Outcast->Neophyte Sorcerer",
								"Man->Noble Court->Apt Pupil",
								"Man->Outcast->Apt Pupil",
								"Man->Professional Soldier->Apt Pupil",
								"Man->Religious->Apt Pupil",
								"Man->College of Magic->Junior Student"
							],
							NOTAND: [
								"Trait->Man Lifepath->Mark of Privilege"
							]
						},
						resources: 24,
						setting: "Villager",
						skillPool: 7,
						skills: ["Man Magical->Sorcery", "Man Magical->Enchanting", "Man Magical->Alchemy", "Any General->Obscure History", "Any Wise->Pest-wise", "Any Wise->Fool-wise"],
						stock: "Human",
						traitPool: 2,
						traits: ["Man Special->Low Born", "Man Special->Impressive Hat", "Man Special->Never a Moment of Peace"],
						years: 8
					}
				]
			}
		}
	},
	"Orc": {
		agePool: [[10, 0, 3, 10], [16, 11, 4, 11], [22, 17, 5, 12], [30, 23, 5, 13], [40, 31, 6, 14], [50, 41, 6, 15], [60, 51, 7, 16], [80, 61, 7, 17], [99, 81, 8, 17], [125, 100, 8, 18], [150, 126, 9, 18], [151, 99999, 9, 19]],
		allowed: ["bwg", "bwc"],
		hasSetting: true,
		hasSubsetting: true,
		name: "Orc",
		stride: 7,
		settings: {
			"Black Legion": {
				allowed: ["bwg", "bwc"],
				name: "Black Legion",
				stock: "Orc",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 0,
						name: "Goblin",
						physicalPool: 1,
						requirements: {
							NOTAND: [
								"Orc->Great and Black->Born Great"
							]
						},
						resources: 2,
						setting: "Black Legion",
						skillPool: 2,
						skills: ["Any General->Foraging", "Any General->Brawling"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Man Lifepath->Tasting the Lash", "Man Lifepath->Exhausted", "Orc Lifepath->Running (Away)", "Orc Lifepath->Charging Blindly", "Orc Lifepath->Marching"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 0,
						name: "Sun Blotter",
						physicalPool: 1,
						requirements: {
							NOTAND: [
								"Orc->Great and Black->Born Great"
							]
						},
						resources: 3,
						setting: "Black Legion",
						skillPool: 2,
						skills: ["Any General->Bow", "Any General->Mending", "Any General->Fletcher"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Orc Lifepath->Hiding", "Orc Lifepath->Running (Away)"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 1,
						name: "Nightseeker",
						physicalPool: 1,
						requirements: {
							NOTAND: [
								"Orc->Great and Black->Born Great"
							]
						},
						resources: 4,
						setting: "Black Legion",
						skillPool: 5,
						skills: ["Any General->Orienteering", "Any General->Tracking", "Any General->Trapper", "Any General->Stealthy", "Any General->Climbing"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Man Lifepath->Tasting the Lash"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 0,
						name: "Legioner",
						physicalPool: 1,
						requirements: {
							NOTAND: [
								"Orc->Great and Black->Born Great"
							]
						},
						resources: 5,
						setting: "Black Legion",
						skillPool: 4,
						skills: ["Any General->Spear", "Any General->Shield Training", "Any General->Brawling", "Any General->Foraging"],
						stock: "Orc",
						traitPool: 1,
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 1,
						name: "Hatred Bearer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Orc->Great and Black->The Rites",
								"Orc->Black Legion->Legioner",
								"Orc->Chattel->Whipmaster"
							]
						},
						resources: 15,
						setting: "Black Legion",
						skillPool: 3,
						skills: ["Any General->Conspicuous", "Any Wise->Black Legion-wise"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Any Character->Psychotic", "Any Character->Paranoid", "Any Callon->Booming Voice"],
						years: 1
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 0,
						name: "Despair Shouter",
						physicalPool: 1,
						requirements: {
							OR: [
								"Orc->Great and Black->The Rites",
								"Orc->Black Legion->Legioner",
								"Orc->Chattel->Whipmaster"
							]
						},
						resources: 10,
						setting: "Black Legion",
						skillPool: 3,
						skills: ["Orc Special->Brazen Horn of Despair", "Any General->Intimidation", "Any General->Brawling"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Any Character->Reviled"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 0,
						name: "Black Hunter",
						physicalPool: 1,
						requirements: {
							OR: [
								"Orc->Great and Black->Follower",
								"Orc->Chattel->Ravager",
								"Orc->Black Legion->Nightseeker"
							]
						},
						resources: 5,
						setting: "Black Legion",
						skillPool: 5,
						skills: ["Any General->Bow", "Any General->Hunting", "Any General->Field Dressing", "Any General->Stealthy"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Orc Special->Black Bile Poison"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel", "Orc->Great and Black"],
						mentalPool: 0,
						name: "Astride the Beast",
						physicalPool: 1,
						requirements: {
							OR: [
								"Orc->Black Legion->Black Hunter",
								"Orc->Great and Black->Follower"
							]
						},
						resources: 6,
						setting: "Black Legion",
						skillPool: 9,
						skills: ["Any General->Mounted Combat Training", "Any General->Riding", "Any General->Great Wolf Husbandry", "Any General->Intimidation", "Any General->Spear", "Any General->Armor Training"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Any Character->Brash", "Orc Lifepath->Cry of Doom"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel", "Orc->Great and Black"],
						mentalPool: 1,
						name: "Bears the Lash",
						physicalPool: 0,
						requirements: {
							OR: [
								"Orc->Chattel->Whipmaster",
								"Orc->Black Legion->Black Hunter",
								"Orc->Black Legion->Astride the Beast",
								"Orc->Great and Black->The Rites"
							]
						},
						resources: 9,
						setting: "Black Legion",
						skillPool: 6,
						skills: ["Any Wise->Whip-wise", "Any General->Intimidation", "Any General->Torture", "Any General->Command", "Any General->Sword", "Any General->Brawling"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Orc Lifepath->Where There's a Whip There's a Way"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Orc->Chattel", "Orc->Great and Black"],
						mentalPool: 0,
						name: "Packmaster",
						physicalPool: 0,
						requirements: {
							OR: [
								"Orc->Black Legion->Bears the Lash",
								"Orc->Great and Black->Follower",
								"Orc->Chattel->Whipmaster",
								"Orc->Servant of the Dark Blood->Master of Eight",
								"Orc->Servant of the Dark Blood->Knower of Secrets"
							]
						},
						resources: 10,
						setting: "Black Legion",
						skillPool: 5,
						skills: ["Any General->Great Wolf Husbandry", "Any General->Great Wolf Husbandry", "Any Wise->Landlord-wise", "Any General->Mending"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Any Character->Flea-Bitten", "Orc Lifepath->Where There's a Whip There's a Way", "Any Callon->Show No Fear"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel", "Orc->Great and Black"],
						mentalPool: 1,
						name: "Head Taker",
						physicalPool: 1,
						requirements: {
							OR: [
								"Orc->Black Legion->Bears the Lash",
								"Orc->Great and Black->Black Destroyer",
								"Orc->Great and Black->Named"
							]
						},
						resources: 15,
						setting: "Black Legion",
						skillPool: 5,
						skills: ["Any General->Command", "Orc Special->Brutal Intimidation", "Any General->Axe", "Any General->Brawling"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Orc Lifepath->Unrelenting Savagery", "Any Character->Fondness for Elven Blood", "Any Character->Taste for Man-Flesh"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Great and Black", "Orc->Servant of the Dark Blood"],
						mentalPool: 1,
						name: "Troll Lord",
						physicalPool: 1,
						requirements: {
							OR: [
								// TODO: Missing "pack master" lifepath?
								"Orc->Black Legion->Bears the Lash",
								"Orc->Great and Black->Named"
							]
						},
						resources: 20,
						setting: "Black Legion",
						skillPool: 6,
						skills: ["Any Wise->Troll-wise", "Any General->Troll Etiquette", "Any General->Hammer", "Any General->Shield Training"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Any Character->Arrogant", "Orc Lifepath->Troll Speak"],
						years: 5
					}
				]
			},
			"Chattel": {
				allowed: ["bwg", "bwc"],
				name: "Chattel",
				stock: "Orc",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Orc->Black Legion", "Orc->Servant of the Dark Blood"],
						mentalPool: 0,
						name: "Born Chattel",
						physicalPool: 1,
						resources: 5,
						setting: "Chattel",
						skillPool: 0,
						stock: "Orc",
						traitPool: 1,
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Cattle Slave",
						physicalPool: 1,
						resources: 3,
						setting: "Chattel",
						skillPool: 2,
						skills: ["Any General->Animal Husbandry"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Man Lifepath->Tasting the Lash", "Any Character->Screaming", "Any Character->Shouting", "Orc Lifepath->Kicking the Beast"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Black Legion"],
						mentalPool: 0,
						name: "Scavenger",
						physicalPool: 1,
						resources: 6,
						setting: "Chattel",
						skillPool: 3,
						skills: ["Any General->Foraging", "Any General->Inconspicuous"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Man Lifepath->Tasting the Lash", "Orc Lifepath->Running (Away)", "Orc Lifepath->Hiding", "Orc Lifepath->Stealing", "Any Character->Scavenger"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Forge Slave",
						physicalPool: 1,
						resources: 3,
						setting: "Chattel",
						skillPool: 2,
						skills: ["Any General->Ditch Digging"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Man Lifepath->Tasting the Lash", "Orc Lifepath->Pain Life", "Man Lifepath->Back-Breaking Labor", "Man Lifepath->Numb"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Hauler",
						physicalPool: 1,
						resources: 3,
						setting: "Chattel",
						skillPool: 2,
						skills: ["Any General->Driving", "Any Wise->Beast of Burden-wise"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Man Lifepath->Tasting the Lash", "Man Lifepath->Back-Breaking Labor", "Any Character->Cursing", "Any Character->Spitting", "Any Character->Yowling"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Cutter Slave",
						physicalPool: 1,
						resources: 3,
						setting: "Chattel",
						skillPool: 2,
						skills: ["Orc Special->Tree Pulling", "Any General->Ditch Digging"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Man Lifepath->Tasting the Lash", "Any Character->Hatred of Forests", "Man Lifepath->Back-Breaking Labor"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Tunneler",
						physicalPool: 1,
						resources: 3,
						setting: "Chattel",
						skillPool: 2,
						skills: ["Any General->Ditch Digging", "Any Wise->Tunnel-wise"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Man Lifepath->Tasting the Lash", "Man Lifepath->Back-Breaking Labor", "Orc Lifepath->Black Lung"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Black Legion"],
						mentalPool: 0,
						name: "Ravager",
						physicalPool: 1,
						resources: 4,
						setting: "Chattel",
						skillPool: 4,
						skills: ["Any General->Brawling", "Any General->Cudgel", "Any General->Intimidation"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Orc Lifepath->Pack Hunter"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Woodcutter",
						physicalPool: 0,
						requirements: {
							OR: [
								"Orc->Chattel->Cutter Slave"
							]
						},
						resources: 9,
						setting: "Chattel",
						skillPool: 4,
						skills: ["Orc Special->Rude Carpentry", "Any General->Mending", "Any General->Intimidation"],
						stock: "Orc",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Butcher",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Chattel->Cattle Slave"
							]
						},
						resources: 9,
						setting: "Chattel",
						skillPool: 4,
						skills: ["Any General->Butchery", "Any General->Tanner", "Any General->Intimidation"],
						stock: "Orc",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Forger",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Chattel->Forge Slave"
							]
						},
						resources: 9,
						setting: "Chattel",
						skillPool: 5,
						skills: ["Any General->Blacksmith", "Any General->Intimidation"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Any Character->Singed"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Pitwright",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Chattel->Tunneler"
							]
						},
						resources: 10,
						setting: "Chattel",
						skillPool: 4,
						skills: ["Any General->Mining", "Any General->Intimidation"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Dwarf Lifepath->Deep Sense"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Orc->Black Legion"],
						mentalPool: 0,
						name: "Edge Grinder",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Chattel->Forger"
							]
						},
						resources: 15,
						setting: "Chattel",
						skillPool: 6,
						skills: ["Any General->Mending", "Any General->Weaponsmith", "Any General->Armorer", "Any General->Tanner"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Any Character->Suspicious"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Black Legion"],
						mentalPool: 1,
						name: "Whipmaster",
						physicalPool: 0,
						requirements: {
							OR: [
								"Orc->Chattel->Pitwright",
								"Orc->Chattel->Forger",
								"Orc->Great and Black->1*ANY",
								"Orc->Black Legion->1*ANY",
								// TODO: this is wrong, it is actually "four slave lifepaths"
								"Orc->Chattel->4*Cutter Slave",
								"Orc->Chattel->4*Forge Slave",
								"Orc->Chattel->4*Cattle Slave"
							]
						},
						resources: 15,
						setting: "Chattel",
						skillPool: 4,
						skills: ["Any General->Interrogation", "Any General->Intimidation", "Any General->Brawling", "Any General->Torture"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Orc Lifepath->Where There's a Whip There's a Way"],
						years: 9
					}
				]
			},
			"Great and Black": {
				allowed: ["bwg", "bwc"],
				name: "Great and Black",
				stock: "Orc",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 3,
						leads: ["Orc->Servant of the Dark Blood"],
						mentalPool: 0,
						name: "Born Great",
						physicalPool: 0,
						resources: 5,
						setting: "Great and Black",
						skillPool: 0,
						stock: "Orc",
						traitPool: 2,
						traits: ["Orc Lifepath->Born to Rule Them All", "Orc Special->Enemy of the Sun"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Black Legion", "Orc->Servant of the Dark Blood"],
						mentalPool: 1,
						name: "The Rites",
						physicalPool: 1,
						requirements: {
							LIMIT: [
								"IS->LP*2",
								"IS->UNIQUE"
							]
						},
						resources: 3,
						setting: "Great and Black",
						skillPool: 5,
						skills: ["Any General->Brawling", "Any General->Intimidation", "Any General->Torture"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Orc Lifepath->Life is Death", "Any Die->Sprinter"],
						years: 3
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Black Legion", "Orc->Chattel"],
						mentalPool: 0,
						name: "Servant of the Gate",
						physicalPool: 1,
						resources: 7,
						setting: "Great and Black",
						skillPool: 2,
						skills: ["Any General->Soothing Platitudes", "Any General->Ditch Digging", "Any General->Hauling"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Any Character->Humble Before My Master", "Man Lifepath->Back-Breaking Labor"],
						years: 4
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Black Legion", "Orc->Chattel"],
						mentalPool: 1,
						name: "Follower",
						physicalPool: 1,
						requirements: {
							OR: [
								"Orc->Great and Black->The Rites",
								"Orc->Black Legion->Astride the Beast"
							]
						},
						resources: 9,
						setting: "Great and Black",
						skillPool: 8,
						skills: ["Any General->Armor Training", "Any General->Axe", "Any General->Bow", "Any General->Knives", "Any General->Mace", "Any General->Riding", "Any General->Shield Training", "Any Wise->Clan-wise"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Any Character->Silent Hatred"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 1,
						name: "Black Destroyer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Orc->Great and Black->Follower",
								"Orc->Black Legion->Astride the Beast",
								"Orc->Black Legion->Head Taker"
							]
						},
						resources: 12,
						setting: "Great and Black",
						skillPool: 7,
						skills: ["Any General->Mounted Combat Training", "Any General->Great Wolf Husbandry", "Any General->Riding", "Any General->Axe", "Any General->Spear"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Any Character->Intense Hatred", "Orc Special->Low Cunning"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 1,
						name: "Named",
						physicalPool: 1,
						requirements: {
							OR: [
								"Orc->Great and Black->Black Destroyer",
								"Orc->Black Legion->Troll Lord",
								"Orc->Black Legion->Head Taker"
							]
						},
						resources: 25,
						setting: "Great and Black",
						skillPool: 5,
						skills: ["Any General->Command", "Orc Special->Brutal Intimidation", "Any General->Torture"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Orc Lifepath->Savage Consequences"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 1,
						name: "Siege Master",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Great and Black->Servant of the Gate"
							]
						},
						resources: 30,
						setting: "Great and Black",
						skillPool: 5,
						skills: ["Orc Special->Siege Engineer", "Any General->Artillerist", "Any General->Mending"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Orc Lifepath->The Bigger They Come…", "Orc Lifepath->Brutish Efficiency"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 1,
						name: "Gate Forger",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Great and Black->Siege Master"
							]
						},
						resources: 30,
						setting: "Great and Black",
						skillPool: 5,
						skills: ["Any General->Mason", "Orc Special->Bastions of Hatred", "Any General->Mining"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Orc Lifepath->Rare Talent"],
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Servant of the Dark Blood"],
						mentalPool: 1,
						name: "Whisperer",
						physicalPool: 0,
						requirements: {
							OR: [
								"Orc->Servant of the Dark Blood->Slave to the Dark",
								"Orc->Chattel->Whipmaster",
								"Orc->Great and Black->Gate Forger",
								"Orc->Black Legion->Bears the Lash"
							]
						},
						resources: 40,
						setting: "Great and Black",
						skillPool: 5,
						skills: ["Orc Special->Poisonous Platitudes", "Any General->Falsehood", "Any General->Persuasion", "Any Wise->Clan-wise", "Any Wise->Ambition-wise"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Orc Lifepath->Forked Tongue", "Any Character->Poisonous Ambition"],
						years: 9
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						mentalPool: 2,
						name: "Great One",
						physicalPool: 2,
						requirements: {
							AND: [
								"Orc->Great and Black->Named",
								"Trait->Orc Lifepath->Born to Rule Them All"
							]
						},
						resources: 60,
						setting: "Great and Black",
						skillPool: 5,
						skills: ["Any General->Command", "Any General->Strategy", "Orc Special->Name Ritual"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Orc Lifepath->Brooding", "Orc Lifepath->Flights of Murderous Fancy", "Any Character->Unrelenting Hatred"],
						years: 20
					}
				]
			},
			"Servant of the Dark Blood": {
				allowed: ["bwg", "bwc"],
				name: "Servant of the Dark Blood",
				stock: "Orc",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 0,
						name: "Slave to the Dark",
						physicalPool: 0,
						resources: 3,
						setting: "Servant of the Dark Blood",
						skillPool: 2,
						skills: ["Orc Special->Servant-wise"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Any Character->Fearful Respect of the Servants", "Any Character->Naked Hatred"],
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 1,
						name: "Drinker of the Dark",
						physicalPool: 1,
						requirements: {
							AND: [
								"Orc->Servant of the Dark Blood->Slave to the Dark"
							]
						},
						resources: 6,
						setting: "Servant of the Dark Blood",
						skillPool: 3,
						skills: ["Orc Special->Doctrine of Night's Blood"],
						stock: "Orc",
						traitPool: 3,
						traits: ["Orc Lifepath->Stark Madness", "Any Character->Blasphemer", "Orc Special->Void Embrace"],
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Orc->Chattel"],
						mentalPool: 1,
						name: "Bloodletter",
						physicalPool: 1,
						requirements: {
							AND: [
								"Orc->Servant of the Dark Blood->Drinker of the Dark"
							]
						},
						resources: 6,
						setting: "Servant of the Dark Blood",
						skillPool: 5,
						skills: ["Orc Special->Rituals of Blood", "Any General->Torture", "Any General->Intimidation", "Any General->Knives"],
						stock: "Orc",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Orc->Chattel", "Orc->Black Legion"],
						mentalPool: 0,
						name: "Knower of Secrets",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Servant of the Dark Blood->Drinker of the Dark"
							]
						},
						resources: 7,
						setting: "Servant of the Dark Blood",
						skillPool: 4,
						skills: ["Orc Special->Rituals of Night", "Orc Special->Vile Poisoner", "Any General->Foraging"],
						stock: "Orc",
						traitPool: 1,
						years: 6
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Orc->Chattel", "Orc->Black Legion"],
						mentalPool: 0,
						name: "Master of Eight",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Servant of the Dark Blood->Knower of Secrets"
							]
						},
						resources: 8,
						setting: "Servant of the Dark Blood",
						skillPool: 7,
						skills: ["Orc Special->Spider Husbandry", "Any General->Riding", "Any General->Mounted Combat Training", "Any Wise->Web-wise", "Any General->Climbing"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Any Character->Batshit", "Orc Lifepath->Affinity for Spiders"],
						years: 8
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Master of Blood",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Servant of the Dark Blood->Bloodletter"
							]
						},
						resources: 8,
						setting: "Servant of the Dark Blood",
						skillPool: 4,
						skills: ["Any Wise->Rituals-wise", "Any General->Animal Husbandry", "Any Wise->Orc-wise", "Any Wise->Elf-wise", "Any Wise->Wolf-wise"],
						stock: "Orc",
						traitPool: 2,
						traits: ["Orc Lifepath->Where There's a Whip There's a Way"],
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Master of Darkness",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Servant of the Dark Blood->Knower of Secrets"
							]
						},
						resources: 8,
						setting: "Servant of the Dark Blood",
						skillPool: 3,
						skills: ["Any Wise->Cave-wise", "Any Wise->Tunnel-wise"],
						stock: "Orc",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 1,
						mentalPool: 0,
						name: "Dark Summoner",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Servant of the Dark Blood->Master of Darkness"
							]
						},
						resources: 12,
						setting: "Servant of the Dark Blood",
						skillPool: 3,
						skills: ["Any Wise->Darkness-wise"],
						stock: "Orc",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 1,
						mentalPool: 0,
						name: "Blood Summoner",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Servant of the Dark Blood->Master of Blood"
							]
						},
						resources: 12,
						setting: "Servant of the Dark Blood",
						skillPool: 3,
						skills: ["Any Wise->Poison-wise", "Any Wise->Bat-wise", "Any Wise->Troll-wise"],
						stock: "Orc",
						traitPool: 1,
						years: 10
					},
					{
						allowed: ["bwg", "bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 2,
						mentalPool: 1,
						name: "Servant",
						physicalPool: 0,
						requirements: {
							OR: [
								"Orc->Servant of the Dark Blood->Dark Summoner",
								"Orc->Servant of the Dark Blood->Blood Summoner"
							],
							AND: [
								"Trait->Orc Lifepath->Born to Rule Them All"
							]
						},
						resources: 30,
						setting: "Servant of the Dark Blood",
						skillPool: 2,
						skills: ["Any Wise->Great and Black-wise", "Orc Special->Name Ritual"],
						stock: "Orc",
						traitPool: 1,
						years: 50
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Master of the Weak",
						physicalPool: 0,
						requirements: {
							AND: [
								"Orc->Servant of the Dark Blood->Knower of Secrets"
							]
						},
						resources: 8,
						setting: "Servant of the Dark Blood",
						skillPool: 5,
						skills: ["Man Magical->Death Art", "Any Wise->Apocalypse-wise", "Any Wise->Graveyard-wise", "Any Wise->Murder-wise"],
						stock: "Orc",
						traitPool: 1,
						traits: ["Man Special->Feared"],
						years: 7
					}
				]
			}
		}
	},
	"Roden": {
		agePool: [[5, 0, 6, 10], [9, 6, 7, 13], [15, 10, 7, 14], [24, 16, 8, 15], [30, 25, 8, 14], [36, 31, 7, 13], [40, 37, 7, 12], [45, 41, 7, 11], [49, 46, 6, 10]],
		allowed: ["bwc"],
		hasSetting: true,
		hasSubsetting: true,
		name: "Roden",
		stride: 8,
		settings: {
			"Below": {
				allowed: ["bwc"],
				name: "Below",
				stock: "Roden",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 3,
						leads: ["Roden->Society"],
						mentalPool: 0,
						name: "Born Below",
						physicalPool: 0,
						resources: 0,
						setting: "Below",
						skillPool: 0,
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Tunnel Vision"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: -1,
						name: "Pinky",
						physicalPool: 0,
						resources: 2,
						setting: "Below",
						skillPool: 3,
						skills: ["Any General->Soothing Platitudes", "Any Wise->Below-wise"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Confusing Rant", "Roden Lifepath->Distracted", "Roden Lifepath->Clumsy", "Roden Lifepath->Lucky"],
						years: 2
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Society"],
						mentalPool: 0,
						name: "Scavenger",
						physicalPool: 0,
						resources: 3,
						setting: "Below",
						skillPool: 5,
						skills: ["Any General->Inconspicuous", "Any General->Scavenging", "Any General->Survival", "Any General->Appraisal", "Any Wise->Junk-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Acquisitive"],
						years: 4
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Scratcher",
						physicalPool: 1,
						resources: 4,
						setting: "Below",
						skillPool: 4,
						skills: ["Any General->Ditch Digging", "Any Wise->Tunnel-wise", "Any General->Mending"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Hacking Cough", "Roden Lifepath->Deep Sense"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Society"],
						mentalPool: 0,
						name: "Snitch",
						physicalPool: 0,
						resources: 3,
						setting: "Below",
						skillPool: 4,
						skills: ["Any General->Inconspicuous", "Any General->Falsehood", "Any General->Haggling", "Any Wise->Secret-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Cowardly"],
						years: 4
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Society"],
						mentalPool: 0,
						name: "The Gauntlet",
						physicalPool: 1,
						resources: 4,
						setting: "Below",
						skillPool: 1,
						skills: ["Any General->Brawling", "Any General->Soothing Platitudes", "Any Wise->Hazing-wise", "Any Wise->Pecking Order-wise"],
						stock: "Roden",
						traitPool: 5,
						traits: ["Roden Lifepath->Victim"],
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Society"],
						mentalPool: 0,
						name: "Apprentice",
						physicalPool: 1,
						requirements: {
							AND: [
								"Roden->Below->The Gauntlet"
							]
						},
						resources: 5,
						setting: "Below",
						skillPool: 3,
						skills: ["Any General->Mending", "Any General->Blacksmith", "Any Wise->Bribe-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Gopher"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Society"],
						mentalPool: 1,
						name: "Kidnapper",
						physicalPool: 0,
						requirements: {
							AND: [
								"Roden->Below->The Gauntlet"
							]
						},
						resources: 10,
						setting: "Below",
						skillPool: 7,
						skills: ["Any General->Inconspicuous", "Any General->Knots", "Any General->Haggling", "Any General->Cudgel", "Any General->Intimidation", "Any Wise->Child-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Ruthless"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Society"],
						mentalPool: 0,
						name: "Fingers",
						physicalPool: 1,
						requirements: {
							AND: [
								"Roden->Below->The Gauntlet"
							]
						},
						resources: 5,
						setting: "Below",
						skillPool: 4,
						skills: ["Any General->Sleight of Hand", "Any General->Inconspicuous", "Any General->Knives", "Any General->Streetwise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Light Touch", "Roden Lifepath->Cocky"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Sneak Thief",
						physicalPool: 0,
						requirements: {
							AND: [
								"Roden->Below->The Gauntlet"
							]
						},
						resources: 6,
						setting: "Below",
						skillPool: 5,
						skills: ["Any General->Stealthy", "Any General->Lock Pick", "Any General->Knives", "Any Wise->Roof-wise", "Any Wise->Window-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Cool Headed", "Roden Lifepath->Soft Step"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Roden->Society"],
						mentalPool: 0,
						name: "Bladesmith",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Below->Apprentice",
								"Roden->Field->Apprentice"
							]
						},
						resources: 20,
						setting: "Below",
						skillPool: 7,
						skills: ["Any General->Haggling", "Any General->Instruction", "Any General->Weaponsmith", "Any Wise->Knife-wise", "Any Wise->Sword-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Secretive"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Burglar",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Below->Fingers",
								"Roden->Below->Sneak Thief",
								"Roden->Society->Shadow",
								"Roden->Exile->Corsair",
								"Roden->Exile->Bushwhacker"
							]
						},
						resources: 10,
						setting: "Below",
						skillPool: 7,
						skills: ["Any General->Observation", "Any General->Climbing", "Any General->Throwing", "Any General->Locksmith", "Any Wise->Loot-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Quiet", "Roden Lifepath->Confident"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Society"],
						mentalPool: 0,
						name: "Bruiser",
						physicalPool: 1,
						requirements: {
							AND: [
								"Roden->Below->The Gauntlet"
							]
						},
						resources: 8,
						setting: "Below",
						skillPool: 7,
						skills: ["Any General->Appropriate Weapons", "Any General->Intimidation", "Any General->Extortion", "Any General->Shield Training"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Mean", "Roden Lifepath->Dumb"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Fence",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Below->Scavenger",
								"Roden->Below->Snitch",
								"Roden->Below->Sneak Thief"
							]
						},
						resources: 20,
						setting: "Below",
						skillPool: 7,
						skills: ["Any General->Appraisal", "Any General->Haggling", "Any General->Falsehood", "Any Wise->Antique-wise", "Any Wise->Fake-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Poker Face"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile"],
						mentalPool: 0,
						name: "Sawbones",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Society->Poisoner",
								"Roden->Exile->Albino",
								"Roden->Field->Healer",
								"Roden->Below->Pinky"
							]
						},
						resources: 15,
						setting: "Below",
						skillPool: 5,
						skills: ["Any General->Field Dressing", "Any General->Apothecary", "Any General->Poisons", "Any General->Haggling"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Practical", "Roden Lifepath->Impersonal"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Society"],
						mentalPool: 1,
						name: "Negotiator",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Below->Kidnapper",
								"Roden->Field->Deputy",
								"Roden->Exile->Corsair",
								"Roden->Field->Missionary",
								"Roden->Below->Fence",
								"Roden->Society->Perverter"
							]
						},
						resources: 15,
						setting: "Below",
						skillPool: 6,
						skills: ["Any General->Persuasion", "Any Wise->Deal-wise", "Any General->Haggling", "Any General->Intimidation", "Any General->Ugly Truth"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Calm Demeanor", "Roden Lifepath->Good Listener"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Society"],
						mentalPool: 1,
						name: "The Brain",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Exile->Hermit",
								"Roden->Field->Mayor",
								"Roden->Below->Scratcher"
							]
						},
						resources: 13,
						setting: "Below",
						skillPool: 13,
						skills: ["Any General->Soothing Platitudes", "Any General->Read", "Any General->Write", "Any General->Research", "Man Special->Astrology", "Any General->Strategy", "Any General->Logistics", "Any General->Falsehood", "Any General->History", "Any General->Obscure History", "Any Wise->World Domination-wise"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Genius", "Roden Lifepath->Condescending", "Roden Lifepath->Frustrated"],
						years: 9
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Mastermind",
						physicalPool: 1,
						requirements: {
							OR: [
								"Roden->Below->Negotiator",
								"Roden->Below->The Brain",
								"Roden->Exile->Bandit King",
								"Roden->Field->Abbot/Abbess"
							]
						},
						resources: 30,
						setting: "Below",
						skillPool: 11,
						skills: ["Any General->Intimidation", "Any General->Persuasion", "Any General->Oratory", "Any General->Falsehood", "Any General->Command", "Any Wise->Below-wise", "Any General->Sword", "Any Wise->Clique-wise", "Any Wise->Nest-wise", "Any Wise->Traitor-wise"],
						stock: "Roden",
						traitPool: 3,
						traits: ["Roden Lifepath->Ambitious", "Roden Lifepath->Ruthless"],
						years: 10
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "The Pope",
						physicalPool: 1,
						requirements: {
							OR: [
								"Roden->Field->Father/Mother",
								"Roden->Society->Visionary"
							]
						},
						resources: 75,
						setting: "Below",
						skillPool: 9,
						skills: ["Any General->Extortion", "Any General->Intimidation", "Any General->Read", "Any General->Write", "Any General->Composition", "Any Wise->Church-wise", "Any Wise->Papal Bull-wise", "Any Wise->Pope Joke-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Most Holy", "Roden Lifepath->Faithful"],
						years: 11
					}
				]
			},
			"Exile": {
				allowed: ["bwc"],
				name: "Exile",
				stock: "Roden",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Below", "Roden->Society"],
						mentalPool: 0,
						name: "Carnivore",
						physicalPool: 1,
						requirements: {
							AND: [
								"Roden->Field->Born to the Fields"
							]
						},
						resources: 5,
						setting: "Exile",
						skillPool: 5,
						skills: ["Any General->Hunting", "Any General->Tracking", "Any General->Trapper", "Any General->Bow", "Any Wise->Forest-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Gnawing Hunger", "Roden Lifepath->Blood Thirsty"],
						years: 4
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Field", "Roden->Society"],
						mentalPool: -1,
						name: "Serub",
						physicalPool: -1,
						requirements: {
							AND: [
								"Roden->Below->Born Below"
							]
						},
						resources: 3,
						setting: "Exile",
						skillPool: 5,
						skills: ["Any General->Inconspicuous", "Any General->Soothing Platitudes", "Any Wise->Kick Me-wise", "Any Wise->Bully-wise", "Any Wise->Nest-wise", "Any Wise->Below-wise", "Any Wise->Village-wise", "Any Wise->Cat-wise"],
						stock: "Roden",
						traitPool: 3,
						traits: ["Roden Lifepath->Abused", "Roden Lifepath->Pack Rat"],
						years: 3
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Field", "Roden->Society"],
						mentalPool: 0,
						name: "Hermit",
						physicalPool: 0,
						resources: 2,
						setting: "Exile",
						skillPool: 8,
						skills: ["Any General->Philosophy", "Man Special->Astrology", "Any General->Rhetoric", "Any General->Oratory", "Any General->Foraging", "Any Wise->Books-wise", "Any Wise->Lost Secret-wise"],
						stock: "Roden",
						traitPool: 3,
						traits: ["Roden Lifepath->Toughtful", "Roden Lifepath->Pack Rat", "Roden Lifepath->Boring", "Roden Lifepath->Farts"],
						years: 10
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Field", "Roden->Below", "Roden->Society"],
						mentalPool: 0,
						name: "Bushwhacker",
						physicalPool: 1,
						resources: 5,
						setting: "Exile",
						skillPool: 4,
						skills: ["Any General->Appropriate Weapons", "Any General->Intimidation", "Any General->Stealthy", "Any Wise->Ambush-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Desperate"],
						years: 5
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Roden->Field", "Roden->Below", "Roden->Society"],
						mentalPool: 0,
						name: "Corsair",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Exile->Bushwhacker",
								"Roden->Field->Sheriff",
								"Roden->Exile->Bandit King",
								"Roden->Field->Trader",
								"Roden->Below->Negotiator",
								"Roden->Below->Bruiser"
							]
						},
						resources: 15,
						setting: "Exile",
						skillPool: 8,
						skills: ["Any General->Pilot", "Any General->Rigging", "Any General->Knots", "Any General->Navigation", "Any General->Mending", "Any Wise->Ship-wise", "Any Wise->Bay-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Ruthless", "Roden Lifepath->Sea Legs"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Roden->Field", "Roden->Below", "Roden->Society"],
						mentalPool: 0,
						name: "Bandit King",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Exile->Bushwhacker",
								"Roden->Field->Sheriff",
								"Roden->Below->Bruiser"
							]
						},
						resources: 15,
						setting: "Exile",
						skillPool: 6,
						skills: ["Any General->Intimidation", "Any General->Command", "Any General->Sword", "Any Wise->Bandit-wise", "Any Wise->Caravan-wise"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Scheming", "Roden Lifepath->Daring"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Albino",
						physicalPool: 0,
						resources: 25,
						setting: "Exile",
						skillPool: 7,
						skills: ["Man Special->Astrology", "Any General->Ugly Truth", "Any General->Read", "Any General->Write", "Man Magical->Sorcery", "Man Magical->Spirit Binding"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Albino", "Man Special->Gifted", "Roden Lifepath->Misunderstood"],
						years: 10
					}
				]
			},
			"Field": {
				allowed: ["bwc"],
				name: "Field",
				stock: "Roden",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 3,
						leads: ["Roden->Society"],
						mentalPool: 0,
						name: "Born to the Fields",
						physicalPool: 0,
						resources: 0,
						setting: "Field",
						skillPool: 0,
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Vegetarian"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile"],
						mentalPool: 0,
						name: "Hand",
						physicalPool: 1,
						resources: 3,
						setting: "Field",
						skillPool: 4,
						skills: ["Any General->Sing", "Any Wise->Work-wise", "Any General->Ditch Digging"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Back-Breaking Labor"],
						years: 3
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile"],
						mentalPool: 0,
						name: "Woodsen",
						physicalPool: 1,
						resources: 6,
						setting: "Field",
						skillPool: 4,
						skills: ["Any General->Tree Cutting", "Any Wise->Tree-wise", "Any General->Mending", "Any General->Orienteering"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Independent"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Society"],
						mentalPool: 0,
						name: "Apprentice",
						physicalPool: 1,
						resources: 9,
						setting: "Field",
						skillPool: 3,
						skills: ["Any General->Mending", "Any General->Haggling", "Any Wise->Materials-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Gopher"],
						years: 4
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile"],
						mentalPool: 0,
						name: "Gatherer",
						physicalPool: 0,
						resources: 10,
						setting: "Field",
						skillPool: 3,
						skills: ["Any General->Foraging", "Any General->Herbalism", "Any Wise->Nut and Berry-wise"],
						stock: "Roden",
						traitPool: 1,
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Farmer",
						physicalPool: 1,
						resources: 10,
						setting: "Field",
						skillPool: 3,
						skills: ["Any General->Farming", "Any General->Mending", "Any Wise->Seed-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Hoarder"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Beekeeper",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Field->Woodsen",
								"Roden->Field->Gatherer",
								"Roden->Field->Farmer",
								"Roden->Below->Apprentice",
								"Roden->Field->Apprentice",
								"Roden->Field->Hand"
							]
						},
						resources: 9,
						setting: "Field",
						skillPool: 5,
						skills: ["Any General->Bird Husbandry", "Any General->Firebuilding", "Any Wise->Bee-wise", "Any Wise->Flower-wise", "Any Wise->Honey-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Thick Skin", "Roden Lifepath->Beespeaker"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Miller",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Field->Woodsen",
								"Roden->Field->Gatherer",
								"Roden->Field->Farmer",
								"Roden->Below->Apprentice",
								"Roden->Field->Apprentice",
								"Roden->Field->Hand"
							]
						},
						resources: 15,
						setting: "Field",
						skillPool: 5,
						skills: ["Any General->Miller", "Any Wise->Grain-wise", "Any General->Haggling"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Industrious"],
						years: 9
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Meadmaker",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Field->Beekeeper"
							]
						},
						resources: 14,
						setting: "Field",
						skillPool: 5,
						skills: ["Any General->Brewer", "Any Wise->Mead-wise", "Any General->Haggling", "Any General->Cooper"],
						stock: "Roden",
						traitPool: 1,
						years: 9
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Baker",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Field->Hand",
								"Roden->Field->Miller",
								"Roden->Field->Beekeeper"
							]
						},
						resources: 12,
						setting: "Field",
						skillPool: 4,
						skills: ["Any General->Baking", "Any General->Firebuilding", "Any Wise->Bread-wise", "Any General->Cooking"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Fragrant", "Roden Lifepath->Sweet Tooth"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Weaver",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Below->Apprentice",
								"Roden->Field->Apprentice"
							]
						},
						resources: 15,
						setting: "Field",
						skillPool: 6,
						skills: ["Any General->Weaving", "Any General->Sewing", "Any General->Embroidery", "Any General->Soothing Platitudes", "Any General->Sing"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Calloused"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Crafter",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Below->Apprentice",
								"Roden->Field->Apprentice"
							]
						},
						resources: 20,
						setting: "Field",
						skillPool: 5,
						skills: ["Any General->Jargon", "Any General->Instruction", "Any Wise->Apprentice-wise", "Any General->Blacksmith", "Any General->Carpentry", "Any General->Potter", "Any General->Mason"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Diligent"],
						years: 10
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Healer",
						physicalPool: 0,
						requirements: {
							OR: [
								// TODO: Missing "Philosopher" lifepath, added hermit instead
								"Roden->Exile->Hermit",
								"Roden->Exile->Albino",
								"Roden->Below->Sawbones",
								"Roden->Field->Hand",
								"Roden->Field->Woodsen",
								"Roden->Field->Farmer",
								"Roden->Field->Beekeeper"
							]
						},
						resources: 10,
						setting: "Field",
						skillPool: 6,
						skills: ["Any General->Herbalism", "Any General->Field Dressing", "Any General->Apothecary", "Any General->Ugly Truth", "Any Wise->Hurt-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Compassionate", "Roden Lifepath->Bedside Manner"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile"],
						mentalPool: 0,
						name: "Trader",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"NOT->LP*2"
							]
						},
						resources: 16,
						setting: "Field",
						skillPool: 6,
						skills: ["Any General->Haggling", "Any General->Appraisal", "Any General->Accounting", "Any General->Conspicuous", "Any Wise->Village-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Opportunist"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Society"],
						mentalPool: 0,
						name: "Deputy",
						physicalPool: 1,
						requirements: {
							LIMIT: [
								"NOT->LP*2"
							]
						},
						resources: 6,
						setting: "Field",
						skillPool: 6,
						skills: ["Any General->Conspicuous", "Any General->Spear", "Any General->Bow", "Any General->Brawling", "Any General->Shield Training"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Alarmist"],
						years: 4
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Sheriff",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Field->Deputy",
								"Roden->Exile->Bandit King",
								"Roden->Below->Bruiser",
								"Roden->Below->Mastermind"
							]
						},
						resources: 8,
						setting: "Field",
						skillPool: 6,
						skills: ["Any General->Command", "Any General->Intimidation", "Any General->Interrogation", "Any General->Sword"],
						stock: "Roden",
						traitPool: 1,
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Mayor",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Field->Sheriff",
								"Roden->Field->Healer",
								"Roden->Field->Baker",
								"Roden->Field->Meadmaker",
								"Roden->Below->Negotiator",
								// TODO: No philosopher so added hermit
								"Roden->Exile->Hermit"
							]
						},
						resources: 20,
						setting: "Field",
						skillPool: 7,
						skills: ["Any General->Oratory", "Any General->Persuasion", "Any General->Rule of Law", "Any General->Etiquette", "Any General->Haggling", "Any Wise->Petitioner-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Practiced Smile"],
						years: 10
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Society"],
						mentalPool: 1,
						name: "Brother/Sister",
						physicalPool: 0,
						resources: 14,
						setting: "Field",
						skillPool: 6,
						skills: ["Any General->Doctrine", "Any General->Read", "Any General->Write", "Any General->Meditation", "Any Wise->Shrine-wise", "Any Wise->Prayer-wise"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Ordained", "Roden Lifepath->Faithful"],
						years: 5
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Society"],
						mentalPool: 1,
						name: "Missionary",
						physicalPool: 1,
						requirements: {
							AND: [
								"Roden->Field->Brother/Sister"
							]
						},
						resources: 5,
						setting: "Field",
						skillPool: 5,
						skills: ["Any General->Suasion", "Roden Special->Preaching", "Any General->Foreign Languages", "Any General->Intimidation", "Any Wise->Below-wise", "Any General->Brawling", "Any Wise->Man-wise"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Zealot", "Roden Lifepath->Righteous"],
						years: 5
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Father/Mother",
						physicalPool: 0,
						requirements: {
							AND: [
								"Roden->Field->Brother/Sister"
							]
						},
						resources: 15,
						setting: "Field",
						skillPool: 6,
						skills: ["Any Wise->Aecer-wise", "Any General->Oratory", "Any General->Illuminations", "Any General->Calligraphy", "Any General->Sing", "Any General->History", "Any General->Research", "Any General->Cartography", "Any General->Poetry"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Portly", "Roden Lifepath->Patient"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Abbot/Abbess",
						physicalPool: 0,
						requirements: {
							AND: [
								"Roden->Field->Father/Mother"
							]
						},
						resources: 30,
						setting: "Field",
						skillPool: 5,
						skills: ["Any General->Administration", "Any General->Accounting", "Any General->Conspicuous", "Any General->Etiquette"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Revered"],
						years: 10
					}
				]
			},
			"Society": {
				allowed: ["bwc"],
				name: "Society",
				stock: "Roden",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile"],
						mentalPool: 0,
						name: "Initiate",
						physicalPool: 0,
						resources: 2,
						setting: "Society",
						skillPool: 3,
						skills: ["Any General->Doctrine", "Any Wise->Society-wise"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Broken"],
						years: 3
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Cultist",
						physicalPool: 0,
						requirements: {
							AND: [
								"Roden->Society->Initiate"
							]
						},
						resources: 4,
						setting: "Society",
						skillPool: 5,
						skills: ["Any General->Rhetoric", "Any General->Suasion", "Any General->Cudgel", "Any Wise->Tail-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Zealot", "Roden Lifepath->Defensive"],
						years: 4
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Shadow",
						physicalPool: 1,
						requirements: {
							AND: [
								"Roden->Society->Initiate"
							]
						},
						resources: 6,
						setting: "Society",
						skillPool: 6,
						skills: ["Any General->Stealthy", "Any General->Observation", "Any General->Inconspicuous", "Any General->Climbing", "Any Wise->Tail-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Cautious"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Arsonist",
						physicalPool: 0,
						requirements: {
							AND: [
								"Roden->Society->Initiate"
							]
						},
						resources: 6,
						setting: "Society",
						skillPool: 6,
						skills: ["Man Special->Arson", "Any General->Firebuilding", "Any General->Inconspicuous", "Roden Special->Firebombs", "Any Wise->Arson-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Pyromaniac"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Murderer",
						physicalPool: 1,
						requirements: {
							AND: [
								"Roden->Society->Initiate"
							]
						},
						resources: 7,
						setting: "Society",
						skillPool: 5,
						skills: ["Any General->Knives", "Any General->Stealthy", "Any General->Intimidation", "Any General->Inconspicuous", "Roden Special->Garrote"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Murderous", "Roden Lifepath->Single-Minded"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Willard",
						physicalPool: 0,
						requirements: {
							AND: [
								"Roden->Society->Initiate"
							]
						},
						resources: 5,
						setting: "Society",
						skillPool: 4,
						skills: ["Any General->Animal Husbandry", "Any General->Inconspicuous", "Any General->Rattiquette"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Rat Speak", "Roden Lifepath->Bitter", "Roden Lifepath->Weird"],
						years: 5
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Field", "Roden->Below", "Roden->Exile"],
						mentalPool: 1,
						name: "Perverter",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Below->The Brain",
								"Roden->Society->Cultist",
								"Roden->Field->Missionary"
							]
						},
						resources: 10,
						setting: "Society",
						skillPool: 6,
						skills: ["Any General->Disguise", "Roden Special->Preaching", "Any General->Inconspicuous", "Any General->Falsehood", "Any Wise->Dupe-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Scheming"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Poisoner",
						physicalPool: 0,
						requirements: {
							AND: [
								"Roden->Society->Initiate"
							]
						},
						resources: 7,
						setting: "Society",
						skillPool: 5,
						skills: ["Any General->Poisons", "Any General->Inconspicuous", "Any General->Apothecary", "Any Wise->Toxin-wise"],
						stock: "Roden",
						traitPool: 1,
						traits: ["Roden Lifepath->Nauseous"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Guardian",
						physicalPool: 1,
						requirements: {
							OR: [
								"Roden->Society->Murderer",
								"Roden->Society->Willard",
								"Roden->Society->Perverter"
							]
						},
						resources: 9,
						setting: "Society",
						skillPool: 8,
						skills: ["Any General->Appropriate Weapons", "Any General->Brawling", "Any General->Armor Training", "Any General->Shield Training", "Any General->Intimidation"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Merciless", "Roden Lifepath->Loyal"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Preacher",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Society->Cultist",
								"Roden->Field->Missionary",
								// TODO: NO philosopher so added hermit
								"Roden->Exile->Hermit"
							]
						},
						resources: 15,
						setting: "Society",
						skillPool: 6,
						skills: ["Roden Special->Preaching", "Any General->Conspicuous", "Any General->Symbology", "Any General->Obscure History"],
						stock: "Roden",
						traitPool: 2,
						traits: ["Roden Lifepath->Obsessed", "Roden Lifepath->Righteous"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Roden->Exile", "Roden->Below"],
						mentalPool: 1,
						name: "Visionary",
						physicalPool: 0,
						requirements: {
							OR: [
								"Roden->Exile->Albino",
								"Roden->Society->Preacher",
								"Roden->Field->Abbot/Abbess",
								"Roden->Below->Mastermind"
							]
						},
						resources: 30,
						setting: "Society",
						skillPool: 11,
						skills: ["Any General->Oratory", "Any General->Command", "Man Special->Astrology", "Any General->Research", "Any General->Interrogation", "Any General->Torture", "Any General->Observation", "Any General->Poetry", "Any Wise->Cult-wise", "Any Wise->Inner Workings-wise", "Any Wise->Undermining-wise"],
						stock: "Roden",
						traitPool: 4,
						traits: ["Roden Lifepath->Megalomaniac", "Roden Lifepath->Imperious Demeanor", "Roden Special->Visionary Faith", "Roden Lifepath->Dreamer"],
						years: 10
					}
				]
			}
		}
	},
	"Troll": {
		agePool: [[5, 0, 3, 11], [10, 6, 4, 14], [19, 13, 4, 17], [27, 20, 4, 19], [57, 28, 4, 20], [80, 58, 4, 19], [124, 81, 4, 18], [213, 125, 5, 17], [390, 214, 5, 16], [712, 391, 6, 15]],
		allowed: ["bwc"],
		hasSetting: true,
		hasSubsetting: false,
		name: "Troll",
		stride: 7,
		settings: {
			"Cavedweller": {
				allowed: ["bwc"],
				name: "Cavedweller",
				stock: "Troll",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Troll->Pit"],
						mentalPool: 0,
						name: "Born to Dark Caves",
						physicalPool: 0,
						resources: 2,
						setting: "Cavedweller",
						skillPool: 0,
						stock: "Troll",
						traitPool: 2,
						years: 5
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Troll->Wild"],
						mentalPool: 0,
						name: "Dweller",
						physicalPool: 1,
						resources: 1,
						setting: "Cavedweller",
						skillPool: 2,
						skills: ["Any General->Climbing", "Any Wise->Rock-wise", "Any General->Brawling"],
						stock: "Troll",
						traitPool: 2,
						years: 4
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Troll->Pit", "Troll->Wild"],
						mentalPool: 0,
						name: "Mine Haunt",
						physicalPool: 0,
						resources: 1,
						setting: "Cavedweller",
						skillPool: 2,
						skills: ["Troll Special->Mine-wise", "Any General->Brawling"],
						stock: "Troll",
						traitPool: 1,
						years: 12
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Troll->Pit"],
						mentalPool: 1,
						name: "Dwarf Hunter",
						physicalPool: 1,
						resources: 3,
						setting: "Cavedweller",
						skillPool: 3,
						skills: ["Any Wise->Dwarf-wise", "Any General->Throwing"],
						stock: "Troll",
						traitPool: 1,
						traits: ["Troll Lifepath->Stubborn"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Dread Stone",
						physicalPool: 2,
						requirements: {
							OR: [
								"Troll->Cavedweller->Mine Haunt",
								"Troll->Cavedweller->Dwarf Hunter"
							]
						},
						resources: 4,
						setting: "Cavedweller",
						skillPool: 3,
						skills: ["Troll Special->Camouflage", "Any General->Stealthy"],
						stock: "Troll",
						traitPool: 3,
						years: 30
					}
				]
			},
			"Pit": {
				allowed: ["bwc"],
				name: "Pit",
				stock: "Troll",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 1,
						leads: ["Troll->Cavedweller"],
						mentalPool: 0,
						name: "Born to the Pit",
						physicalPool: 0,
						resources: 1,
						setting: "Pit",
						skillPool: 0,
						stock: "Troll",
						traitPool: 2,
						traits: ["Troll Lifepath->Vile Language"],
						years: 4
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Tortured",
						physicalPool: 0,
						resources: 0,
						setting: "Pit",
						skillPool: 1,
						stock: "Troll",
						traitPool: 3,
						traits: ["Troll Lifepath->Tasting the Lash", "Troll Lifepath->Numb"],
						years: 3
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Ox",
						physicalPool: 1,
						resources: 1,
						setting: "Pit",
						skillPool: 2,
						skills: ["Any General->Ditch Digging", "Any General->Hauling", "Any General->Mining"],
						stock: "Troll",
						traitPool: 1,
						traits: ["Troll Lifepath->Back-Breaking Labor", "Troll Lifepath->Tasting the Lash"],
						years: 9
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Troll->Wild"],
						mentalPool: 0,
						name: "Battering Ram",
						physicalPool: 1,
						resources: 1,
						setting: "Pit",
						skillPool: 2,
						skills: ["Any General->Brawling", "Any General->Throwing"],
						stock: "Troll",
						traitPool: 1,
						traits: ["Troll Lifepath->Hardened"],
						years: 6
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Troll->Wild"],
						mentalPool: 0,
						name: "Mattock",
						physicalPool: 1,
						requirements: {
							OR: [
								"Troll->Pit->Ox",
								"Troll->Pit->Battering Ram",
								"Troll->Cavedweller->Dwarf Hunter",
								"Troll->Wild->Manhunter",
								"Troll->Wild->Brute"
							]
						},
						resources: 7,
						setting: "Pit",
						skillPool: 3,
						skills: ["Any General->Hammer", "Any General->Formation Fighting"],
						stock: "Troll",
						traitPool: 1,
						traits: ["Troll Lifepath->Brutal"],
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Troll->Wild"],
						mentalPool: 0,
						name: "Ironshield",
						physicalPool: 0,
						requirements: {
							OR: [
								"Troll->Pit->Mattock",
								"Troll->Wild->Brute"
							]
						},
						resources: 6,
						setting: "Pit",
						skillPool: 3,
						skills: ["Any General->Shield Training", "Any General->Intimidation"],
						stock: "Troll",
						traitPool: 1,
						traits: ["Troll Lifepath->Unflinching"],
						years: 8
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Bellower",
						physicalPool: 1,
						requirements: {
							OR: [
								"Troll->Wild->Bull",
								"Troll->Pit->Ironshield"
							]
						},
						resources: 4,
						setting: "Pit",
						skillPool: 3,
						skills: ["Any General->Torture", "Troll Special->Lash"],
						stock: "Troll",
						traitPool: 1,
						traits: ["Troll Lifepath->Where There's a Whip There is a Way", "Troll Lifepath->Tough as Nails", "Troll Lifepath->Bellowing"],
						years: 16
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						mentalPool: 1,
						name: "Warlord",
						physicalPool: 1,
						requirements: {
							OR: [
								"Troll->Pit->Bellower"
							]
						},
						resources: 10,
						setting: "Pit",
						skillPool: 3,
						skills: ["Any General->Command", "Any General->Strategy"],
						stock: "Troll",
						traitPool: 2,
						traits: ["Troll Lifepath->Insidious Cruelty", "Troll Lifepath->Wickedly Clever"],
						years: 56
					}
				]
			},
			"Wild": {
				allowed: ["bwc"],
				name: "Wild",
				stock: "Troll",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Troll->Pit"],
						mentalPool: 0,
						name: "Born Wild",
						physicalPool: 0,
						resources: 2,
						setting: "Wild",
						skillPool: 0,
						stock: "Troll",
						traitPool: 1,
						years: 5
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Troll->Cavedweller"],
						mentalPool: 0,
						name: "Bogey",
						physicalPool: 1,
						resources: 1,
						setting: "Wild",
						skillPool: 3,
						skills: ["Any General->Brawling", "Any Wise->Forest-wise", "Any General->Stealthy"],
						stock: "Troll",
						traitPool: 2,
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Bridgehaunt",
						physicalPool: 1,
						resources: 2,
						setting: "Wild",
						skillPool: 2,
						skills: ["Any Wise->Bridge-wise", "Any General->Intimidation"],
						stock: "Troll",
						traitPool: 1,
						traits: ["Troll Lifepath->Stubborn"],
						years: 10
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Troll->Pit"],
						mentalPool: 0,
						name: "Manhunter",
						physicalPool: 0,
						resources: 2,
						setting: "Wild",
						skillPool: 2,
						skills: ["Any Wise->Man-wise", "Any Wise->Village-wise"],
						stock: "Troll",
						traitPool: 1,
						years: 7
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						mentalPool: 1,
						name: "Forlorn",
						physicalPool: 0,
						resources: 1,
						setting: "Wild",
						skillPool: 0,
						stock: "Troll",
						traitPool: 2,
						traits: ["Troll Lifepath->Solitary", "Troll Lifepath->Addled", "Troll Lifepath->Slow"],
						years: 13
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Troll->Pit"],
						mentalPool: 0,
						name: "Brute",
						physicalPool: 2,
						requirements: {
							OR: [
								"Troll->Wild->Bridgehaunt",
								"Troll->Cavedweller->Mine Haunt",
								"Troll->Wild->Manhunter",
								"Troll->Cavedweller->Dwarf Hunter",
								"Troll->Pit->Battering Ram",
								"Troll->Pit->Mattock"
							]
						},
						resources: 2,
						setting: "Wild",
						skillPool: 2,
						skills: ["Any General->Intimidation", "Any General->Brawling"],
						stock: "Troll",
						traitPool: 1,
						traits: ["Troll Lifepath->Brute"],
						years: 15
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Troll->Cavedweller", "Troll->Pit"],
						mentalPool: 1,
						name: "Brood Mother",
						physicalPool: 1,
						requirements: {
							OR: [
								"Troll->Wild->Brute",
								"Troll->Cavedweller->Dread Stone",
								"Troll->Pit->Bellower"
							]
						},
						resources: 10,
						setting: "Wild",
						skillPool: 3,
						skills: ["Any General->Nursing", "Any General->Ugly Truth"],
						stock: "Troll",
						traitPool: 2,
						traits: ["Troll Lifepath->Misshapen", "Troll Lifepath->Grotesque", "Troll Lifepath->Witch Flesh"],
						years: 33
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Troll->Pit"],
						mentalPool: 1,
						name: "Bull",
						physicalPool: 1,
						requirements: {
							OR: [
								"Troll->Wild->Brute",
								"Troll->Pit->Ironshield"
							]
						},
						resources: 5,
						setting: "Wild",
						skillPool: 3,
						skills: ["Any General->Torture", "Troll Special->Extortion"],
						stock: "Troll",
						traitPool: 2,
						traits: ["Troll Lifepath->Boor"],
						years: 45
					}
				]
			}
		}
	},
	"Great Wolf": {
		agePool: [[1, 0, 6, 12], [3, 2, 7, 16], [5, 4, 7, 17], [7, 6, 7, 16], [9, 8, 6, 14], [11, 10, 6, 12], [15, 12, 5, 10]],
		allowed: ["bwc"],
		hasSetting: true,
		hasSubsetting: true,
		name: "Great Wolf",
		stride: 11,
		settings: {
			"Captive": {
				allowed: ["bwc"],
				name: "Captive",
				stock: "Great Wolf",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Slave to the Legion", "Great Wolf->Outcast Wolf"],
						mentalPool: 0,
						name: "Captive",
						physicalPool: 0,
						resources: 1,
						setting: "Captive",
						skillPool: 3,
						skills: ["Great Wolf Special->Begging", "Great Wolf Special->Cage-wise", "Great Wolf Special->Man-wise"],
						stock: "Great Wolf",
						traitPool: 3,
						traits: ["Great Wolf Lifepath->Broken", "Great Wolf Lifepath->Submissive"],
						years: 0
					}
				]
			},
			"Ghost of the Deeping Wood": {
				allowed: ["bwc"],
				name: "Ghost of the Deeping Wood",
				stock: "Great Wolf",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Spirit Hunter", "Great Wolf->Outcast Wolf"],
						mentalPool: 1,
						name: "Wandering Lost",
						physicalPool: 0,
						requirements: {
							AND: [
								"Great Wolf->Wild Pack->Last Wolf",
								"Great Wolf->Outcast Wolf->Lone Wolf"
							]
						},
						resources: 0,
						setting: "Ghost of the Deeping Wood",
						skillPool: 2,
						skills: ["Great Wolf Special->Nature of All Things"],
						stock: "Great Wolf",
						traitPool: 1,
						years: 0
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Dire Haunt",
						physicalPool: 1,
						requirements: {
							AND: [
								"Great Wolf->Ghost of the Deeping Wood->Wandering Lost"
							]
						},
						resources: 10,
						setting: "Ghost of the Deeping Wood",
						skillPool: 3,
						skills: ["Great Wolf Special->Tongue of the Ancient One"],
						stock: "Great Wolf",
						traitPool: 2,
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Spirit Hunter", "Great Wolf->Outcast Wolf"],
						mentalPool: 1,
						name: "Ancient Journeyer",
						physicalPool: 0,
						requirements: {
							AND: [
								"Great Wolf->Ghost of the Deeping Wood->Wandering Lost"
							]
						},
						resources: 0,
						setting: "Ghost of the Deeping Wood",
						skillPool: 2,
						skills: ["Great Wolf Special->Old World-wise"],
						stock: "Great Wolf",
						traitPool: 1,
						years: 0
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Fell Ancient",
						physicalPool: 1,
						requirements: {
							AND: [
								"Great Wolf->Ghost of the Deeping Wood->Ancient Journeyer"
							]
						},
						resources: 15,
						setting: "Ghost of the Deeping Wood",
						skillPool: 3,
						skills: ["Great Wolf Special->Ancient Ways"],
						stock: "Great Wolf",
						traitPool: 2,
						traits: ["Great Wolf Lifepath->Reclusive", "Great Wolf Lifepath->Paranoid", "Great Wolf Lifepath->Odor of Spirits"],
						years: 2
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						mentalPool: 2,
						name: "Ghost of the Wood",
						physicalPool: 0,
						requirements: {
							AND: [
								"Great Wolf->Ghost of the Deeping Wood->Dire Haunt",
								"Great Wolf->Ghost of the Deeping Wood->Fell Ancient"
							]
						},
						resources: 10,
						setting: "Ghost of the Deeping Wood",
						skillPool: 6,
						skills: ["Great Wolf Special->Wolf-wise", "Great Wolf Special->Spirit Hunter-wise", "Great Wolf Special->Legion-wise", "Great Wolf Special->Path-wise", "Great Wolf Special->River-wise", "Great Wolf Special->Pack-wise"],
						stock: "Great Wolf",
						traitPool: 3,
						traits: ["Great Wolf Lifepath->Prenaturally Calm", "Great Wolf Lifepath->Watchful", "Great Wolf Lifepath->Piercing Gaze", "Great Wolf Lifepath->Stink of the Ancient"],
						years: 2
					}
				]
			},
			"Outcast Wolf": {
				allowed: ["bwc"],
				name: "Outcast Wolf",
				stock: "Great Wolf",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Wild Pack", "Great Wolf->Slave to the Legion", "Great Wolf->Captive", "Great Wolf->Spirit Hunter", "Great Wolf->Ghost of the Deeping Wood"],
						mentalPool: 1,
						name: "Lone Wolf",
						physicalPool: 0,
						requirements: {
							OR: [
								"Great Wolf->Wild Pack->Yearling",
								"Great Wolf->Wild Pack->Last Wolf",
								"Great Wolf->Captive->Captive",
								"Great Wolf->Ghost of the Deeping Wood->Wandering Lost",
								"Great Wolf->Ghost of the Deeping Wood->Ancient Journeyer",
								"Great Wolf->Slave to the Legion->Wayward",
								"Great Wolf->Slave to the Legion->Dark Friend"
							]
						},
						resources: 1,
						setting: "Outcast Wolf",
						skillPool: 4,
						skills: ["Great Wolf Special->Territory-wise", "Great Wolf Special->Pack-wise", "Any General->Scavenging"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Wanderlust", "Great Wolf Lifepath->Spirit Marked"],
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Wild Pack", "Great Wolf->Slave to the Legion", "Great Wolf->Captive"],
						mentalPool: 0,
						name: "Scavenger",
						physicalPool: 0,
						requirements: {
							OR: [
								"Great Wolf->Outcast Wolf->Lone Wolf",
								"Great Wolf->Captive->Captive",
								"Great Wolf->Slave to the Legion->Caged and Beaten"
							]
						},
						resources: 2,
						setting: "Outcast Wolf",
						skillPool: 3,
						skills: ["Great Wolf Special->Scent-wise", "Great Wolf Special->Village-wise", "Great Wolf Special->Dog-wise", "Any General->Scavenging"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Scavenger"],
						years: 1
					}
				]
			},
			"Slave to the Legion": {
				allowed: ["bwc"],
				name: "Slave to the Legion",
				stock: "Great Wolf",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Great Wolf->Captive"],
						mentalPool: 0,
						name: "Born to the Legion",
						physicalPool: 0,
						resources: 0,
						setting: "Slave to the Legion",
						skillPool: 2,
						skills: ["Great Wolf Special->Howling"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Vile Language", "Great Wolf Lifepath->Demented"],
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Captive"],
						mentalPool: 0,
						name: "Caged and Beaten",
						physicalPool: 0,
						resources: 1,
						setting: "Slave to the Legion",
						skillPool: 3,
						skills: ["Great Wolf Special->Pack Etiquette", "Great Wolf Special->Begging", "Great Wolf Special->Cage-wise"],
						stock: "Great Wolf",
						traitPool: 2,
						traits: ["Great Wolf Lifepath->Submissive", "Great Wolf Lifepath->Tasting the Lash", "Great Wolf Lifepath->Deranged"],
						years: 0
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Shadow Chaser",
						physicalPool: 1,
						resources: 2,
						setting: "Slave to the Legion",
						skillPool: 8,
						skills: ["Any General->Stealthy", "Great Wolf Special->Scent Tracking", "Great Wolf Special->Trail-wise", "Great Wolf Special->Orc-wise", "Any General->Scavenging", "Any General->Intimidation", "Great Wolf Special->Rider Training", "Great Wolf Special->Begging"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Submissive", "Great Wolf Lifepath->Tasting the Lash"],
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Outcast Wolf"],
						mentalPool: 1,
						name: "Wayward",
						physicalPool: 0,
						requirements: {
							OR: [
								"Great Wolf->Slave to the Legion->Shadow Chaser",
								"Great Wolf->Slave to the Legion->Caged and Beaten"
							]
						},
						resources: 2,
						setting: "Slave to the Legion",
						skillPool: 6,
						skills: ["Great Wolf Special->Pack Hunting", "Any General->Foraging", "Any General->Brawling", "Any General->Stealthy", "Great Wolf Special->Howling", "Great Wolf Special->Escape Artist"],
						stock: "Great Wolf",
						traitPool: 1,
						years: 0
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Bitch",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"YEARS->2"
							]
						},
						resources: 4,
						setting: "Slave to the Legion",
						skillPool: 5,
						skills: ["Great Wolf Special->Nursing", "Great Wolf Special->Rearing", "Great Wolf Special->Pup-wise", "Any General->Scavenging", "Great Wolf Special->Begging"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Submissive"],
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Howling Beast",
						physicalPool: 1,
						requirements: {
							AND: [
								"Great Wolf->Slave to the Legion->Shadow Chaser"
							]
						},
						resources: 1,
						setting: "Slave to the Legion",
						skillPool: 7,
						skills: ["Great Wolf Special->Rider Training", "Great Wolf Special->Combat Mount Training", "Great Wolf Special->Savage Attack", "Any General->Intimidation"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Howl of Doom"],
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Black Destroyer",
						physicalPool: 1,
						requirements: {
							OR: [
								"Great Wolf->Slave to the Legion->Howling Beast",
								"Great Wolf->Slave to the Legion->Ebon Tyrant"
							]
						},
						resources: 2,
						setting: "Slave to the Legion",
						skillPool: 4,
						skills: ["Great Wolf Special->Rider Training", "Great Wolf Special->Combat Mount Training", "Great Wolf Special->Savage Attack"],
						stock: "Great Wolf",
						traitPool: 2,
						traits: ["Great Wolf Lifepath->Fearsome Beast", "Great Wolf Lifepath->Intense Hatred", "Great Wolf Lifepath->Fearless", "Great Wolf Lifepath->Dominant", "Great Wolf Lifepath->Submissive"],
						years: 2
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 1,
						name: "Ebon Tyrant",
						physicalPool: 1,
						requirements: {
							OR: [
								"Great Wolf->Slave to the Legion->Shadow Chaser",
								"Great Wolf->Slave to the Legion->Black Destroyer"
							]
						},
						resources: 5,
						setting: "Slave to the Legion",
						skillPool: 5,
						skills: ["Any General->Conspicuous", "Any General->Command", "Any General->Skirmish Tactics", "Any General->Strategy"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Dominant", "Great Wolf Lifepath->Great Cunning"],
						years: 2
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						leads: ["Great Wolf->Outcast Wolf"],
						mentalPool: 1,
						name: "Dark Friend",
						physicalPool: 0,
						requirements: {
							AND: [
								"Great Wolf->Slave to the Legion->Caged and Beaten"
							]
						},
						resources: 3,
						setting: "Slave to the Legion",
						skillPool: 5,
						skills: ["Any General->Stealthy", "Great Wolf Special->Scent Tracking", "Any General->Brawling", "Great Wolf Special->Rituals-wise", "Great Wolf Special->Poisons-wise"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Obedient", "Great Wolf Lifepath->Loyal", "Great Wolf Lifepath->Fearless"],
						years: 3
					}
				]
			},
			"Spirit Hunter": {
				allowed: ["bwc"],
				name: "Spirit Hunter",
				stock: "Great Wolf",
				type: "Subsetting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Outcast Wolf", "Great Wolf->Captive"],
						mentalPool: 0,
						name: "Spirit Chaser",
						physicalPool: 1,
						requirements: {
							AND: [
								"Great Wolf->Outcast Wolf->Lone Wolf",
								"Trait->Great Wolf Lifepath->Spirit Marked"
							]
						},
						resources: 1,
						setting: "Spirit Hunter",
						skillPool: 5,
						skills: ["Great Wolf Spirit Hunter Songs->Primal Bark", "Great Wolf Special->Pack Hunting", "Great Wolf Special->The Way of the First Hunter"],
						stock: "Great Wolf",
						traitPool: 1,
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						mentalPool: 0,
						name: "Spirit Howler",
						physicalPool: 0,
						requirements: {
							AND: [
								"Great Wolf->Spirit Hunter->Spirit Chaser"
							]
						},
						resources: 2,
						setting: "Spirit Hunter",
						skillPool: 3,
						skills: ["Great Wolf Spirit Hunter Songs->Ancestral Jaw"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Ancestral Taint", "Great Wolf Lifepath->Spirit Ears"],
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Ghost of the Deeping Wood"],
						mentalPool: 1,
						name: "Spirit Hunter",
						physicalPool: 1,
						requirements: {
							AND: [
								"Great Wolf->Spirit Hunter->Spirit Howler"
							]
						},
						resources: 3,
						setting: "Spirit Hunter",
						skillPool: 3,
						skills: ["Great Wolf Spirit Hunter Songs->Grandfather's Song"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Spirit Nose"],
						years: 2
					}
				]
			},
			"Wild Pack": {
				allowed: ["bwc"],
				name: "Wild Pack",
				stock: "Great Wolf",
				type: "Setting",
				lifepaths: [
					{
						allowed: ["bwc"],
						born: true,
						eitherPool: 0,
						generalSkillPool: 2,
						leads: ["Great Wolf->Captive"],
						mentalPool: 0,
						name: "Born to the Pack",
						physicalPool: 0,
						resources: 0,
						setting: "Wild Pack",
						skillPool: 2,
						skills: ["Great Wolf Special->Howling"],
						stock: "Great Wolf",
						traitPool: 2,
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Captive", "Great Wolf->Outcast Wolf"],
						mentalPool: 0,
						name: "Yearling",
						physicalPool: 1,
						requirements: {
							LIMIT: [
								"IS->LP*2",
								"IS->UNIQUE"
							]
						},
						resources: 1,
						setting: "Wild Pack",
						skillPool: 8,
						skills: ["Great Wolf Special->Pack Etiquette", "Any General->Stealthy", "Great Wolf Special->Pack Hunting", "Great Wolf Special->Scent Tracking", "Any General->Foraging", "Any General->Brawling"],
						stock: "Great Wolf",
						traitPool: 1,
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Captive", "Great Wolf->Outcast Wolf"],
						mentalPool: 0,
						name: "Hunter",
						physicalPool: 1,
						resources: 2,
						setting: "Wild Pack",
						skillPool: 7,
						skills: ["Great Wolf Special->Pack Hunting", "Great Wolf Special->Hoof-wise", "Any General->Intimidation", "Any General->Brawling", "Great Wolf Special->Begging", "Great Wolf Special->Scent-wise"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Submissive"],
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Captive", "Great Wolf->Outcast Wolf"],
						mentalPool: 1,
						name: "Dominant",
						physicalPool: 1,
						requirements: {
							OR: [
								"Great Wolf->Wild Pack->Yearling",
								"Great Wolf->Wild Pack->Aunt",
								"Great Wolf->Wild Pack->Uncle",
								"Great Wolf->Wild Pack->Last Wolf"
							],
							TEXT: ["Dominant wolves are the pack leaders."]
						},
						resources: 3,
						setting: "Wild Pack",
						skillPool: 5,
						skills: ["Any General->Intimidation", "Any General->Command", "Great Wolf Special->Nursing", "Any General->Brawling"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Dominant"],
						years: 1
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Great Wolf->Captive", "Great Wolf->Outcast Wolf"],
						mentalPool: 0,
						name: "Aunt",
						physicalPool: 0,
						resources: 2,
						setting: "Wild Pack",
						skillPool: 4,
						skills: ["Great Wolf Special->Nursing", "Great Wolf Special->Pup-wise", "Any General->Scavenging", "Any General->Begging"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Submissive"],
						years: 0
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 1,
						generalSkillPool: 0,
						leads: ["Great Wolf->Captive", "Great Wolf->Outcast Wolf"],
						mentalPool: 0,
						name: "Uncle",
						physicalPool: 0,
						resources: 2,
						setting: "Wild Pack",
						skillPool: 4,
						skills: ["Great Wolf Special->Rearing", "Great Wolf Special->Pup-wise", "Any General->Scavenging", "Any General->Begging"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Submissive"],
						years: 0
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 1,
						leads: ["Great Wolf->Outcast Wolf"],
						mentalPool: 1,
						name: "Elder",
						physicalPool: 0,
						requirements: {
							LIMIT: [
								"YEARS->7"
							]
						},
						resources: 1,
						setting: "Wild Pack",
						skillPool: 7,
						skills: ["Great Wolf Special->Begging", "Great Wolf Special->Man-wise", "Great Wolf Special->Orc-wise", "Great Wolf Special->Forest-wise"],
						stock: "Great Wolf",
						traitPool: 1,
						traits: ["Great Wolf Lifepath->Submissive"],
						years: 2
					},
					{
						allowed: ["bwc"],
						born: false,
						eitherPool: 0,
						generalSkillPool: 0,
						leads: ["Great Wolf->Captive", "Great Wolf->Outcast Wolf"],
						mentalPool: 1,
						name: "Last Wolf",
						physicalPool: 0,
						resources: 1,
						setting: "Wild Pack",
						skillPool: 2,
						skills: ["Great Wolf Special->Begging", "Great Wolf Special->Pack Etiquette"],
						stock: "Great Wolf",
						traitPool: 2,
						traits: ["Great Wolf Lifepath->Submissive", "Great Wolf Lifepath->Stained"],
						years: 0
					}
				]
			}
		}
	}
};
