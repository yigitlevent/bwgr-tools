import { SkillCategory } from "./_skills";


export const DwarfArt: SkillCategory = {
	allowed: ["bwg"],
	name: "Dwarf Art",
	skills: [
		{
			allowed: ["bwg"],
			description: "This is the skill with which Dwarves create all their mundane and household metals. However, the Artificers know a secret or two and may imbue even their pots and horseshoes with intense quality. Using the obstacles listed below, a Dwarf can create various tool kits. If he so desires, he may increase his obstacles by +2 Ob and grant the final product a special +1D bonus to all skill tests in which the tools are used.",
			magical: true,
			name: "Black-Metal Artifice",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg"],
			description: "This bizarre social art is apparently a method of coercion and persuasion among Dwarvenkind and consists of a lot of backslapping, grinning, and reassurances: 'Come on! You'll love it.' That other folk often find it charming and endearing is one of the wonders of the world.",
			magical: true,
			name: "Coarse Persuasion",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Forte"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg"],
			description: "Dwarves can really put it away. They don't try to hide their inebriation, either. They drink to get roaring drunk. And they let everyone know it. Use this skill when a Dwarf needs to get drunk and loud quickly. The more successes, the faster he gets drunk. This is not meant to imply that he needs less alcohol than another, less skilled drinker. On the contrary, he needs more, in bigger cups, faster!",
			magical: true,
			name: "Drunking",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Forte"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg"],
			description: "For Dwarves, delving into the earth and quickly removing rock, dirt, and stone is a special art.",
			magical: true,
			name: "Excavation",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Perception", "Power"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg"],
			description: "This special skill teaches the secrets of building the sacred fires of Dwarven forges, which burn hotter and cleaner than the forges of Men, Elves, and Orcs. Such heat allows the Artificers to further refine their incredible metalworks. When building a forge, an Artificer may imbue it with runes of everlasting heat and unwavering temperature, which grant advantage dice to the user. To do so, the Artificer must increase his own obstacle by +2 Ob. Each +2 Ob builds +1D into the forge, so long as the final obstacle is met, of course.",
			magical: true,
			name: "Forge Artifice",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Perception"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg"],
			description: "Gem Artifice teaches the secrets of cutting precious stones so they shine like stars in candlelight and shimmer like eldritch fire in the sun. Any gem cut using this skill may be used as a matrix by an enchanter to create an item of power. Secondly, the Resources obstacle of any gem or stone manufactured using Gem Artifice is increased by one automatically. The value may be further increased by one by adding +2 Ob to the test before the dice are rolled.",
			magical: true,
			name: "Gem Artifice",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg"],
			description: "This is the skill that built the sweeping halls of the great delvings. Using this skill, a Dwarven Artificer may reinforce his hall's structure. By adding +2 Ob to his test when building a structure, he may add +1 Ob to any test to alter or destroy the structure.",
			magical: true,
			name: "Hallmaster",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Perception"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg"],
			description: "Dwarven Artificers learn a special art of inscribing runes into stone. These runes can be carved into walls for decorative or instructional purposes or placed onto blocks, dipped in ink, and pressed on paper.",
			magical: true,
			name: "Lithography",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg"],
			description: "Dwarven brew is renowned throughout the known lands. Some say a single mouthful of the finest Dwarven nog is worth the price of the greatest kingdom of Men. For Dwarves, nog has a restorative effect. Downing a full cool draught of the stout brew grants +1D to the next Health test. It also adds +1 Ob to all social skill tests for the scene. No matter how much he drinks, only one bonus/penalty is bestowed. However, if a Dwarf downs a number of steins equal to or greater than his Forte exponent, he becomes drunk—+1 Ob to all tests for hours equal to 10 minus Health. If any other creature so much as sips a mouthful of the powerful beverage, it becomes drunk (+1 Ob to all tests) and receives no benefit.",
			magical: true,
			name: "Nogger",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Perception"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg"],
			description: "This curious skill allows the Master Engraver to extract knowledge from a stone. Merely by seeing, touching, tasting, and smelling the stone—and considering it for a long while—the Dwarf can discern a number of facts: How old it is, how long it has been in this place, and what events have transpired around it.",
			magical: true,
			name: "Reason of Old Stone",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg"],
			description: "Learned Elves, Orcs, and Men would consider Rune Casting an innocent use of the arcane forces at play in the world, but most Dwarves consider its use a mad and profane act. You see, the Rune Caster uses a set of specially designed runes to discern the future. When cast to the ground, their pattern and order reveal to him another's fate.  <br> A successful test of this natural magic skill allows the Rune Caster player to pronounce the target character's fate. The Rune Caster player may look at the target's Beliefs. The fate that he pronounces must tie in to one of the Beliefs—and it must be suitably dire: a rise to power, a tragic death, or a pyrrhic victory, for example.  <br> In order for the pronouncement to even have a chance of coming true, the Rune Caster player must change one of his character's Beliefs to match the fate. (Playing on or against that Belief earns artha as per the standard rules.) If he does not or if the Belief changes, then the fate is rendered invalid.  <br> It is ultimately up to the target whether or not he will embrace his fate or veer from it. If a scene is played out in which the fate is fulfilled, that player earns a deeds point. If the fated character is killed in fulfillment of his pronounced fate, the player's next character in this campaign starts with a deeds point.",
			magical: true,
			name: "Rune Casting",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Perception"],
			tools: [
				"Tools",
				"Rune stones"
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg"],
			description: "The Dwarven eye for detail, especially in regard to craftsmanship, jewel work, or Gemcraft, is legendary. Shrewd Appraisal is the art of noting every single flaw in an item—thereby reducing its price.",
			magical: true,
			name: "Shrewd Appraisal",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg"],
			description: "This skill is a combination of Haggling, Oratory, and Persuasion. It is loud, boisterous, and heated.",
			magical: true,
			name: "Stentorious Debate",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will"],
			tools: [
				"No",
				"a big Dwarvy mouth"
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg"],
			description: "This skill is simply loud, boisterous, and loud. Dwarves love to sing, much to the chagrin of their guests and neighbors.",
			magical: true,
			name: "Stentorious Singing",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Musical"
		},
		{
			allowed: ["bwg"],
			description: "Stone Artifice teaches the proud craft of shaping stone into sturdy material suitable for building. Dwarves are so skilled at cutting and dressing stone that the material becomes more durable and harder to destroy. The artificer may add +2 Ob to any test to build a structure. This adds a +1 Ob penalty to any test to alter or destroy this structure.",
			magical: true,
			name: "Stone Artifice",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Power"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg"],
			description: "Mask Bearers spend much time in the terrible heat of the forges beating out wicked blades and unyielding armor. Using this skill, the Artificer may create weapons or armor.",
			magical: true,
			name: "War Art",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg"],
			description: "This master art contains many secrets of the Dwarven Hosts: how to construct and field terrible war engines, and how to destroy fortifications from below.",
			magical: true,
			name: "War Engineer",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Perception"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg"],
			description: "Dwarves truly love working with gold, silver, platinum, and true silver, all of which they refer to as 'white metal.' This adoration, augmented by their superior skills, allows them to create works of intricate detail and wondrous beauty. Any item made using this skill may be used as a vessel by an enchanter. Second, the Resources obstacle of any item manufactured using White Metal Artifice is increased by one. You may further increase the value: +2 Ob increases the Resources obstacle by one.",
			magical: true,
			name: "White-Metal Artifice",
			noList: false,
			restriction: "ONLY➞Dwarf",
			root: ["Will", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		}
	]
};

export const DwarfSpecial: SkillCategory = {
	allowed: ["bwg"],
	name: "Dwarf Special",
	skills: [
		{
			allowed: ["bwg"],
			description: "Dwarven artillerist and engineers are always in short supply. Therefore, when the Host is on the march, Arbalesters are assigned to crew the army's war engines. This skill allows the characters to assemble and dismantle artillery pieces, as well as fire direct-fire type mechanisms like siege crossbows or ballistae. Effectively operating indirect-fire artillery requires the Artillerist skill.",
			magical: false,
			name: "Artillery Hand",
			noList: false,
			restriction: "ONLYBURN➞Dwarf",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg"],
			description: "Years of training are required to fine-tune the sensitive taste of a discerning Dwarf. But once honed, said taste can determine the type of grain used, the type and length of the brewing, how long it has been in the cask, and even the wood of the barrel.",
			magical: false,
			name: "Beer Appraisal",
			noList: false,
			restriction: "ONLYBURN➞Dwarf",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg"],
			description: "This Dwarf knows the long and sordid past of the various clans—their oaths, grudges, great works of art, and the probable size of their hoards and halls.",
			magical: false,
			name: "Clan History",
			noList: false,
			restriction: "ONLYBURN➞Dwarf",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg"],
			description: "Dwarven Society is a literate one. Dwarven children are taught to decipher and inscribe runes from a very young age. This skill counts as both Read and Write for Dwarves.",
			magical: false,
			name: "Dwarven Rune Script",
			noList: false,
			restriction: "ONLYBURN➞Dwarf",
			root: ["Perception"],
			tools: [
				"Tools",
				"Writing only, Expendable"
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg"],
			description: "Dwarves are very particular about their boundaries. This skill teaches the art of constructing sturdy fences and walls and the etiquette of deciding where they should lie.",
			magical: false,
			name: "Fence Building",
			noList: false,
			restriction: "ONLYBURN➞Dwarf",
			root: ["Perception"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg"],
			description: "There is a certain cult among the Dwarves fascinated by, and very knowledgeable about, games of chance. The games include dice, cards, and keg and mug spinning. To use this skill, first set a Resources obstacle for the prize. Then make a versus test against the other gambler. The winner of the test walks away with the prize. The loser must make a Resources test equal to the prize obstacle. If the loser passes his Resources test, the winner noes the same obstacle test toward advancing his own Resources. If the loser is taxed, those dice are granted to the winner as cash.",
			magical: false,
			name: "Games of Chance",
			noList: false,
			restriction: "ONLYBURN➞Dwarf",
			root: ["Perception"],
			tools: [
				"Traveling Gear",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg"],
			description: "Dwarves are very proud of their ability to discern the fine grain from the chaff; only the finest grains are selected for famous Dwarven nogs.",
			magical: false,
			name: "Grain Appraisal",
			noList: false,
			restriction: "ONLYBURN➞Dwarf",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg"],
			description: "Dwarves are a clean and thorough people in all their crafts, including their medicinal traditions.",
			magical: false,
			name: "Khirurgy",
			noList: false,
			restriction: "ONLYBURN➞Dwarf",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Medicinal"
		},
		{
			allowed: ["bwg"],
			description: "When on the march, Dwarven armies use a complex system of horn signals to transmit information between camps. The system is called 'links' because it connects the Dwarven regiments like links of sausage. The Links skill gives the character the ability to perform and decode the signals.",
			magical: false,
			name: "Links",
			noList: false,
			restriction: "ONLYBURN➞Dwarf",
			root: ["Will", "Forte"],
			tools: [
				"Other",
				"A big brass horn"
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg"],
			description: "This Dwarf knows his stuff! He knows all about it. Where it's from, who made it, what it's made out of. Everything except what it actually does.",
			magical: false,
			name: "Stuff-wise",
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
