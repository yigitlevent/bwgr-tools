import { SkillCategory } from "./_skills";


export const ElfSpecial: SkillCategory = {
	allowed: ["bwg", "bwc", "msc"],
	name: "Elf Special",
	skills: [
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven Script combines disciplines of reading and writing into one literacy skill. Elven culture is more disciplined in educating its youth than nearly any other.",
			magical: false,
			name: "Elven Script",
			noList: false,
			restriction: "Elves only",
			root: "Perception",
			tools: [
				"Tools",
				"Writing only, Expendable"
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven silver trumpets are renowned and fabled throughout the known world. Heralds are taught how to produce wondrous and clear strains from the instrument so that the arrival of the Loremasters, Althings, and Etharchs may be properly heralded.",
			magical: false,
			name: "Silver Trumpet",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"Tools",
				"An Elven silver trumpet"
			],
			training: false,
			type: "Musical"
		}
	]
};

export const ElfSkillSong: SkillCategory = {
	allowed: ["bwg", "bwc", "msc"],
	name: "Elf Skill Song",
	skills: [
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This is a specialized History skill relating to the ages of the Etharchs.",
			magical: true,
			name: "Ages of the Etharch",
			noList: false,
			restriction: "Elves only",
			root: "Will/Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This specialized training allows the Elven artisan to blend his crafts or arts with spell songs. Any of the items or materials he creates via a skill song can be imbued with the power of a spell song. An artisan who wishes to enchant an item, must first create it with a skill song like Jewelcraft, Riddle of Steel, or Weaving Way. Once the item is created, the spell song must be sung. The singer has one chance to transfer his power. The song is sung according to its rules, but the effect generated is imbued into the item, and active whenever the item is used. No enchantment will hold unless the structure is of highest quality. Any item created by any skill song can be used. However, whether it's a shoe or a crown, the base obstacle to create the item is 5. If the obstacle would naturally be higher, use that instead. If the item is cheap or shoddy, it simply will not hold the spell.",
			magical: true,
			name: "Antiphon Union Training",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				"See the Spell Song"
			],
			training: true,
			type: "Artisan"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Archcraft is a comprehensive discipline teaching the principles of both architecture and engineering. Using this broad skill, Elven artisans create halls of sweeping beauty and depth. Combined with Antiphon Union and various spell songs, this skill can be used to create enchanted dwellings for the Elves. The following are but a few examples: Using Song of Arbors, buildings can be constructed to weave in and out of ancient trees; with Alarm, certain gates will warn of intruders; with Weathersong, an atrium can be built so it predicts the coming weather.",
			magical: true,
			name: "Archcraft",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elves learn their history and that of many others in mnemonic songs.",
			magical: true,
			name: "Ballad of History",
			noList: false,
			restriction: "Elves only",
			root: "Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "An Elven bowman learns more than just how to fell an opponent with a shaft. For years he trains to discover the very heart and soul of the bow. When he joins the ranks of his fellow protectors, the Bowyer comes forth with his own personally crafted weapon—a product of a decade of learning and labor. This skill counts as Bowyer and Fletcher.",
			magical: true,
			name: "Bowcraft",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Call of the Wild obeys the same rules as the Hunting skill.",
			magical: true,
			name: "Call of the Wild",
			noList: false,
			restriction: "Elves only",
			root: "Perception/Agility",
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This is a specialized natural magic skill that is similar to Etiquette. The Elves' long years allow them to delve deep into the culture of a place and people. When dealing with any Citadel-born Elf, Code of the Citadels may be used in place of Etiquette.",
			magical: true,
			name: "Code of Citadels",
			noList: false,
			restriction: "Elves only",
			root: "Will/Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Dignity of the Wilderlands is an exploration of the culture and ritual of the Elves of the Wilderlands. This skill song may be used in place of Etiquette when dealing with Wilder-born Elves.",
			magical: true,
			name: "Dignity of the Wilderlands",
			noList: false,
			restriction: "Elves only",
			root: "Will/Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Many Elves delight in the simple and straight-forward art of cutting and polishing gems. Their experience, dedication, and patience in the art shows in the quality of their work. Any gem stone cut by an Elf adds +1D of Resources value compared to what it would normally be. In addition, this skill shares the same flexibility with Antiphon Union as Smithcraft.",
			magical: true,
			name: "Gemcraft",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven Millers grind the finest grain in any land. This skill is similar to the Miller skill",
			magical: true,
			name: "Grain Song",
			noList: false,
			restriction: "Elves only",
			root: "Perception",
			tools: [
				"Workshop",
				"A mill"
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven fishermen sing to the waters and the fish seem to leap into their nets. Functions like the Fishing skill",
			magical: true,
			name: "Hymn of Scales and Fins",
			noList: false,
			restriction: "Elves only",
			root: "Perception/Agility",
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Jewelcrafters manufacture delicate brooches, subtle rings, fine tiaras, and magnificent crowns. Using Antiphon Union, many of these objects can be enchanted: a crown with the Paean of Deeds, a mask with the Ballad of Rage or a tiara imbued with the Strain of Far Sight.",
			magical: true,
			name: "Jewelcraft",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill teaches Elven clothiers how to work leather into supple boots, soft gloves, and sturdy belts. Combining this skill with Antiphon Union and Song of Silence can produce fabled Elven boots (+1D to Stealthy), or with the Doom of Strength, can create a belt of terrible fortitude.",
			magical: true,
			name: "Leathercraft",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven law is a tradition stretching back to the dawn of time. This skill song concerns itself with the nature and application of Elven law.",
			magical: true,
			name: "Lyric of Law",
			noList: false,
			restriction: "Elves only",
			root: "Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Striding forth, full of confidence, the Elven Lieutenant announces himself in rhythm, setting the tenor to which he shall best his foe! This skill song acts like Conspicuous.",
			magical: true,
			name: "Paean of Deeds",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven vintners are possessed with a unique perspective—they are able to literally watch their wines age. A hundred-year vintage is a matter of course for them. This skill is similar to the Vintner skill except that wine made using the Purple Song may be treated with the Antiphon Union and imbued with either the Lyric of Healing or the Doom of Strength. It is by this method that Elven Mirrorwine is created.",
			magical: true,
			name: "Purple Song",
			noList: false,
			restriction: "Elves only",
			root: "Perception/Agility",
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven foragers are wise and know the name and shape of many plants, flowers, herbs, and roots. This skill song acts as Foraging.",
			magical: true,
			name: "Rhyme of the Gatherer",
			noList: false,
			restriction: "Elves only",
			root: "Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "When away aloft, the Seafarers sing playful songs to the wind and cloth. These chanting tunes are meant to please the wind and soothe the rope as the sailors harness their powers to drive their vessel. This skill acts like Rigging.",
			magical: true,
			name: "Rhyme of the Mariner",
			noList: false,
			restriction: "Elves only",
			root: "Agility/Speed",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Seafaring"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Rhyme of the Pathfinder is the skill song that mimics Tracking.",
			magical: true,
			name: "Rhyme of the Pathfinder",
			noList: false,
			restriction: "Elves only",
			root: "Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The first Elven Bladesmiths learned the Riddle of Steel ages ago from their Dwarven allies. The Riddle teaches Elves how to shape metal so it will quickly and efficiently kill a foe. With this skill song, the Bladesmith may create swords and knives of all types, axes if he wishes, and arrowheads for the Bowyers. Spearheads are left to the ancient rites of the Spearbearers. Combining the Riddle of Steel with Antiphon Union and various songs can create some very interesting results.",
			magical: true,
			name: "Riddle of Steel",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This curious song teaches the art of weaving ropes and tying knots. It also grants the Elf a chance at unravelling any knot or tangle, no matter how complex. The skill acts as Knots, with additional abilities as described by the obstacles below. Fabled Elven rope may be created by combining this song with Antiphon Union, Rhyme of Rules, and the Song of Merriment.",
			magical: true,
			name: "Rope Chant",
			noList: false,
			restriction: "Elves only",
			root: "Agility",
			tools: [
				"Traveling Gear",
				"or Elven Rope"
			],
			training: false,
			type: "Seafaring"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elves are attuned to the earth and the seasons in ways that Men and Dwarves are not. This song describes their methods of planting and harvesting. Round of Harvest obeys the same rules as Farming.",
			magical: true,
			name: "Round of Harvest",
			noList: false,
			restriction: "Elves only",
			root: "Perception",
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "With but a glare, the Captain can send shivers down the spine of those who cross him. This skill follows the same rules as Intimidation.",
			magical: true,
			name: "Silent Fury",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "With the Slip of Currents on his tongue, it is very rare an Elf is lost at sea. This skill acts like the Navigation skill.",
			magical: true,
			name: "Slip of Currents",
			noList: false,
			restriction: "Elves only",
			root: "Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Seafaring"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Such is the experience of a life of centuries that an Elven smith learns the techniques for working many types of metals. This skill counts as Blacksmith, Whitesmith, or Coppersmith. With Smithcraft, a forge, and the proper tools, the Elf may fabricate nearly any type of metal item—pots, pins, chains, tools, cups, and horseshoes. Combined with Antiphon Union, Smithcraft becomes immeasurably potent. Add the Gift of Speed to horseshoes, add the Lay of the Horse to a whistle, add the Air of Gates to a headband, or the Voice of Ages to a clasp. The list goes on and on.",
			magical: true,
			name: "Smithcraft",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elves are tremendous cooks and enjoy presenting bounteous feasts to their guests and relatives. This song mimics the art of Cooking. Using this skill song along with Antiphon Union and the Lyrics of Healing or the Doom of Strength allows the Elf to create Elven Bread.",
			magical: true,
			name: "Song of Feasting",
			noList: false,
			restriction: "Elves only",
			root: "Perception/Agility",
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill follows the same rules as Animal Husbandry.",
			magical: true,
			name: "Song of Flocks and Herds",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Using the Song of Form, the Elf may sculpt stone into shapes and curves pleasing to the eye. Combining the Song of Form with Antiphon Union and Alarm will create a warding statue. Combining it with Antiphon Union, Discerner, and Voice of Ages creates a statue that will speak of the lies and deceit before it. Combine the Song of Form, Antiphon Union, Voice of Ages, and the Strain of Farsight and a statue is created that can see far off lands and speak of them.",
			magical: true,
			name: "Song of Form",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Artist"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The rights of rulership of the lord. This is a specialized Etiquette skill for use among characters with the Etharchal, Feâ, and Aman traits.",
			magical: true,
			name: "Song of Lordship",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill song is the Elven version of Orienteering.",
			magical: true,
			name: "Song of Paths and Ways",
			noList: false,
			restriction: "Elves only",
			root: "Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Using this special song, the Elf can attempt to soothe the pain of another injured character. For treating injuries, this skill acts like Herbalism. The Song of Soothing can also cure the effects of poison. See the obstacles below.",
			magical: true,
			name: "Song of Soothing",
			noList: false,
			restriction: "Elves only",
			root: "Will/Perception",
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Medicinal"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The cycles of the stars are of great interest to the wise Elves. This skill acts like Astrology.",
			magical: true,
			name: "Song of the Eldar",
			noList: false,
			restriction: "Elves only",
			root: "Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Spearbearers, like Bowyers, learn more than just the art of killing. They learn to cherish and understand their weapons—they know it from its birth to the first time it sheds blood. For many, their spear is the last piece of this world they hold in their hands before their own life is cut short. Use Spearcraft with Antiphon Union to create magic spears.",
			magical: true,
			name: "Spearcraft",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Certain Elves have a particular fascination with the manufacture of crystalline orbs. About the size of a fist, these 'stars' are typically designed to be vessels for various enchantments. One of the most famous, and perhaps the first, was a star that had Mornsong sung over it. To the amazement of its creator, the vessel then took on the light of the sun—eternally projecting those very first rays which warmed the earth. All crystals produced with Starcraft make suitable vessels for the Enchanting skill.",
			magical: true,
			name: "Starcraft",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven Shapers learned their trade an age ago from the first Dwarves to emerge from their subterranean holds. Over the centuries, Elves have developed their own styles and methods. This skill is similar to the Mason skill—it is used to quarry, cut, move, and place stone.",
			magical: true,
			name: "Stonecraft",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill acts like the Sewing skill.",
			magical: true,
			name: "Threading Chant",
			noList: false,
			restriction: "Elves only",
			root: "Perception/Agility",
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Etharch's voice booms across the battlefield as he issues commands to his Sword Singers and vassals. This skill acts like Command. Also, all soldiers who have a trait, Instinct, or Belief about the commander can hear his voice when he issues commands—no matter how far away they are on the battlefield.",
			magical: true,
			name: "Voice of Thunder",
			noList: false,
			restriction: "Elves only",
			root: "Will/Forte",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elves know a trick or two on the loom. Long have they been playing at Fate's game with their threads and weaves, and their many years serve them well. Combine Weaving Way, Antiphon Union, and the Threne of the Chameleon to create Elven Cloaks.",
			magical: true,
			name: "Weaving Way",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven carpentry is a marvel to behold. The Shapers use no saw, nails, or glue. Simply by warping, bending, shaping, and sculpting living wood, they are able to produce stunning forms and functional designs.",
			magical: true,
			name: "Woodcraft",
			noList: false,
			restriction: "Elves only",
			root: "Will/Agility",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Craftsman"
		}
	]
};

export const DarkElfSkillSong: SkillCategory = {
	allowed: ["bwc", "msc"],
	name: "Dark Elf Skill Song",
	skills: [
		{
			allowed: ["bwc", "msc"],
			description: "The song Litany of Fools speaks gently of the terrible fate of those who don't see the truth in what the Dark Elf is saying. This song counts as Ugly Truth or Intimidation -chose which before testing the skill. The Dark Elf player must incorporate a barbed rhyme of verse into his roleplay.",
			magical: true,
			name: "Litany of Fools",
			noList: false,
			restriction: "Dark Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		}
	]
};

export const ElfSpellSong: SkillCategory = {
	allowed: ["bwg", "bwc", "msc"],
	name: "Elf Spell Song",
	skills: [
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This is a special song an Elf can sing to a door or gate. The singer may ask one gate in his presence, 'What lies beyond? ' and be answered.",
			magical: true,
			name: "Air of Gates",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Alarm is sung when on watch deep in the night. While singing this tune quietly to himself, the character will always shout an alarm if surprised or attacked. The cry rings out. Allies are immediately awakened from sleep with the cry in their ears.",
			magical: true,
			name: "Alarm",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Anthem of Courage is a fierce song of hope that holds Elves steadfast against abominable foes. When properly sung, no Elf in the host will leave his station so long as the lord lives. Extra successes from the song are added as dice to Steel.",
			magical: true,
			name: "Anthem of Courage",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Lord Protector can summon forth his raw Grief and hone it into a fine rage. While he sings of his wrathful sorrow and coming vengeance, Grief dice are added to the Lord Protector's weapon skills.",
			magical: true,
			name: "Ballad of Rage",
			noList: false,
			restriction: "Elves only",
			root: "Grief",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Canticle of Years is typically sung in the baritone and bass range. It is a long and winding song that tells the story of time itself. Its primary effect is wonderment.",
			magical: true,
			name: "Canticle of Years",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This devilish song draws the eyes of customers to the wares of the Elven merchants. lf successful, add +1D to Conspicuous to attract attention for commercial or spectacular endeavors. Extra successes add +1D each. This song can also he sung to aid Haggling when selling Elven goods.",
			magical: true,
			name: "Chant of Offering",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Using this powerful song, the Elven lord sends forth a call to his brothers and cousins—a call heard in the very dreams of those he seeks. Successes over the obstacle are added to the Elf's base Circles exponent when seeking to contact great lords and rulers.",
			magical: true,
			name: "Council-Caller",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This spell song allows the prince to see what lurks in the hearts of Men, Dwarves and Elves. It counts as a bulwark against Falsehood, Soothing Platitudes, Persuasion, Inconspicuous and Seduction. Increase the obstacle by one for these skills if they a1'e used against the Etharch while he is singing Discerner. <br> Add the margin of success from the song to the obstacle penalty. If the test to deceive the Etharch is failed, he is aware of the intentions of the manipulator or deceiver (but not the precise nature of the lie).",
			magical: true,
			name: "Discerner",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "In the throes of battle every soul is needed to assure victory over the enemy. During these desperate times, the Soother will sing the Doom of Strength to revitalize the wounded and send them back into the fray. If successful, the song temporarily reduces the target victim's wounded dice by the margin of success. The effect lasts for minutes equal to Health of the recipient, after which the penalty immediately returns.",
			magical: true,
			name: "Doom of Strength",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Doom Sayer bestows the arrogant power to judge the fate of another. It isn't quite a song; his a powerful pronouncement, spoken in meter and rhyme, that evokes a forceful and binding magic. If a doom is successfully uttered, the Etharch may change one of the target character's Beliefs so that it reflects the destiny. However, the Etharch must also change one of his Beliefs to that very same doom. Playing the Belief earns artha as per normal. Dooms involve exile, punishment, a vow of vengeance, an oath of enmity, etc. Fulfilling the doom earns a deeds point for the doomed character. If the Doom involves the character's death, the artha is transferred to the player's next character.",
			magical: true,
			name: "Doom Sayer",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A festival song sung to greet the Moon on the evening of her first rising of each month. The primary effect of this song is wonderment.",
			magical: true,
			name: "Evensong",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This powerful song lightens the tread of the rider's horse until it seems the steed is galloping on air. Meeting the obstacle grants +1D to the horse's speed. Extra successes increase the Speed of the horse by +1D each. The rider must be mounted on the horse. The gift lasts for the remainder of the day (or night).",
			magical: true,
			name: "The Gift of Speed",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Homesong helps keeps the hearth safe. When sung over a hearth, the master of the house knows everyone who enters (or tries to enter) his dwelling. Homesong is typically sung to greet guests returning home after a long journey",
			magical: true,
			name: "Homesong",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A song sung of all the victories of the Elves--this one included. The Hymn forces the enemy to choose Stand and Drool as a hesitation option from a failed Steel test while this song is being sung. The Hymn of Victory is a fine way to round up and finish off the straggling remnants of the enemy forces.",
			magical: true,
			name: "The Hymn of Victory",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elves must lament their fallen, otherwise Grief will overwhelm them. This lament is sung to alleviate the pain of seeing comrades fall in battle. It obeys the standard rules for laments as described in the Grief section of this chapter.",
			magical: true,
			name: "Lament for the Fallen",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Lament of Mourning is sung to remember both the tragedies and boons of past ages. lt obeys the standard obstacles and rules for laments as described in the Grief section of this chapter.",
			magical: true,
			name: "Lament of Mourning",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Lament of Stars was the first lamen learned by the Elves. As they left their ancestral homeland and crossed the sea to their new home, the bards composed this song to ease the heart pain and homesickness. This lament obeys all the standard rules for laments. See the Grief section for more on that.",
			magical: true,
			name: "Lament of Stars",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "In this lament, the Elves call to the setting sun to purge them of their grief to take it into the sea where the sun sleeps, so that on the new day they might be free and clean of their sadness. This lament obeys all the standard rules for laments. See the Grief section for more.",
			magical: true,
			name: "Lament of the Westering Sun",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Through this lay, an Elf may communicate with his horse and may call to it over great distances. Distance for calling is 100 paces plus 100 paces per extra success.",
			magical: true,
			name: "Lay of the Horse",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Litany is the endless list of duties of the Steward of a11 Elven house. The primary effect of this song is wonderment.",
			magical: true,
			name: "Litany of Responsibilities",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This beautiful and strong song seeps into the blood of the wounded and weary, strengthening body and mind. When sung over an injured character, successes over the obstacle add dice to Health tests for the purposes of recovery.",
			magical: true,
			name: "Lyric of Healing",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A festival song sung to commemorate the dawn of the new year. The primary effect of this song is wonderment.",
			magical: true,
			name: "Monody of the March",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This spell song is both a history lesson and a wondrous show of lights and images. As the ages are recited, the Elf intermingles phrases of memory and power, and scenes of aeons past float before the listeners.",
			magical: true,
			name: "Mornsong",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This spell song is both a history lesson and a wondrous show of lights and images. As the ages are recited, the Elf intermingles phrases of memory and power, and scenes of aeons past float before the listeners.",
			magical: true,
			name: "Recitation of Ages",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Rhyme of Rules is an ever-growing song comprised of all the adages, apothegms, dictums, dietums, maxims, morals, precepts, proverbs, rules, sayings and truisms of the Elves. When sung itself, its primary effect is wonderment. However, Rhyme of Rules is also the only spell song that ca11 be used as a FORK (not a helping die, though). The FORK die can be invoked for any skill song test (not spell song) for which the player can recite a clever bit of folklore obliquely pertinent to the situation.",
			magical: true,
			name: "Rhyme of Rules",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven Loremasters spend many years studying the languages of all things. This simple Rhyme helps them remember what they have learned and allows them to communicate with nearly any creature. Once the the rhyme is successfully sung, the spell lasts for hours equal to the Elf's Will.",
			magical: true,
			name: "Rhyme of Tongues",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Song of Arbors allows the Elves to communicate in the tongue of the leafed ones and learn what news they can from the cryptic mind of the wood. An Elf may sing to any tree in his Presence. If successful, he may communicate with the tree about its well—being and any recent notable events.",
			magical: true,
			name: "Song of Arbors",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Song of Bonding is usually only sung once in each Elf's life—to bind himself into the Master—student relationship with his sword-father. Once successfully sung, the Bonded Second now gains a new trait: Bonded. This counts as a call—on for Steel when his master is in danger. <br> If a player is starting a Second in a game with his Sword Singer, sing this song before the game starts. If the song fails, or the Second's Sword Singer is not part of the game, then the player may choose to bond himself to another master as the game progresses.",
			magical: true,
			name: "Song of Bonding",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Song of Burning Bright evokes the true fire within the Elven heart. Once summoned, it drives the Elf into a blinding fury that strikes terror in the hearts of his enemies. All who look upon him must make a Steel Test. Hesitation is increased by the Elf 's successes over the song obstacle. The Song of Burning Bright negates all hesitation—reducing traits for purposes of the Steel test. The victims must make a Steel test—no matter what—-at 10 minus Will plus extra song successes. The effect of this song supersedes wonderment: Do not test for wonderment.",
			magical: true,
			name: "Song of Burning Bright",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Song of Merrinlent brings joy to all who hear it. Sadness is washed away and fatigue forgotten.",
			magical: true,
			name: "Song of Merriment",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "To voice his displeasure, an Elven Lord will utter the brief syllables of the Song of Silence and then fall into an impenetrable aphony, thinking deeply on all matters at hand. No social skills or 'mind affecting' spells will have any effect on the Lord while he is under the Song of Silence. If sung as an action during a Duel of Wits, the Elf can end the duel. No winner is declared, and no compromise can be made.",
			magical: true,
			name: "Song of Silence",
			noList: false,
			restriction: "Elves only",
			root: "Grief",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This beautiful harmony can be sung in accompaniment to any other spellsong. The Song of Songs may help a Elven spell song as if it were a related skill. Song of Songs may not help skill-songs. <br> For example, the Lord Protector is in dire need; the servants of the Dark have unleashed terrible beasts of shadow, and his war-host quails before them. He calls his Song Singers to aid him as he sings the mighty Anthem of Courage. The Lord has an Anthem of B6. Each Song of Songs singer gives helpind dice according to the standard rules, The Lord Protector's palyer would then cast his song dice plus the helping dice to pass the test",
			magical: true,
			name: "Song of Songs",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Song of the Sword infuses the blade with a dread and vengeful power. The Sword Singer may only sing one blessing at a time, but he may bless any sword in his presence.",
			magical: true,
			name: "Song of the Sword",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This ancient and powerful song amplifies the Lord Protector's vision. Once sung, the effects last for the duration of the scene or conflict.",
			magical: true,
			name: "Strain of Far Sight",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Elven Seafarers are friends to the wind, and in times of need, they may ask her to treat them kindly.",
			magical: true,
			name: "Supplication to the Wind",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This quiet song escapes the lips as barely a whisper. While it is sung, the Ranger is cloaked in shadow and shifting light, invisible to the eyes of his foes. Threne of the Chameleon adds advantage dice to the Stealthy skill. In addition, so long as the player gets one success, his character cannot be seen unless the opposing characters explicitly look for him—either via an applicable Instinct or a trait or by simply stating, 'I look around.' If sung successfully, the character counts as having one additional level of cover in Range and Cover. In Fight, other characters suffer a +1Ob  disadvantage to hit him with any missile or thrown weapon.",
			magical: true,
			name: "Threne of the Chameleon",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "When dire deeds are performed against the houses of the Elves, terrible, undying oaths of vengeance are sung. Once marked as an enemy, the creature is given a new name and thenceforth all Elves know him thusly. Such enemies arouse the passion of Elves: They are relentlessly sought and remorselessly destroyed.",
			magical: true,
			name: "Tract of Enmity",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This potent spell is used when an Elven Elder sets his mind to a task. He can bind himself and another character into a decision that carries the same weight as a Duel of Wits result. Both parties must nominally agree to the terms. The song is sung and the result is binding as if the two had come to the decision via a Duel of Wits. No other test is necessary but the Verse of Decision.",
			magical: true,
			name: "Verse of Decision",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Verse of Friendship is a formidable spell. Once it is sung over a character, henceforth he is known by all Elves as friend. The character gains a 1D reputation when dealing with Elves.",
			magical: true,
			name: "Verse of Friendship",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Announcing his age and wisdom, the Elven lord lends weight and authority to his opinion, such that none can deny him. This effect lasts through the duration of one Duel of Wits.",
			magical: true,
			name: "Voice of Ages",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Seafarers sing to the sky and listen to her reply to learn the coming weather. This spell acts as a linked test with Orienteering, Navigation or any other weather-dependent skill, but add dice equal to the obstacle of the casting. lt°s a powerful spell.",
			magical: true,
			name: "Weathersong",
			noList: false,
			restriction: "Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		}
	]
};

export const DarkElfSpellSong: SkillCategory = {
	allowed: ["bwc", "msc"],
	name: "Dark Elf Spell Song",
	skills: [
		{
			allowed: ["bwc", "msc"],
			description: "It is all but impossible to argue with a Dark Elf. They turn each argument against their interlocutor, proving their point with each denial and reproach.<br>This song allows the Dark Elf to switch the function of social skills. He can switch from a skill he has to one he doesn't: Falsehood becomes Persuasion, Ugly Truth becomes Oratory, etc.",
			magical: true,
			name: "Cut of the Quickened Mind",
			noList: false,
			restriction: "Dark Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Shadows lengthen and deepen to an impossible shade of darkness. This spell counteracts any sight-boosting trait or spell like Keen Sight or Eye of the Engle. In addition anyone searching the shadows or darkness suffers a + 1 Ob penalty. Dirge of Night can only be sung at night or a place or shadows -an ancient forest, indoors, etc.",
			magical: true,
			name: "Dirge of Night",
			noList: false,
			restriction: "Dark Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwc", "msc"],
			description: "When sung this song interrupts spells and songs being cast. It acts as a distraction to any song or spell currently being sustained. The area of effect is the Dark Elf's presence. If a character attempts to sing or cast while a Fugue of Discord is in effect, they must add the Dark Elf's extra successes from the Fugue of Discord to their obstacle.",
			magical: true,
			name: "Fugue of Discord",
			noList: false,
			restriction: "Dark Elves only",
			root: "Spite",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwc", "msc"],
			description: "When this dirge is sung, any character without the Spite or Hatred attribute within the presence of the caster must test his Steel. Extra song successes increase the obstacle for the Steel test. Use the hesitation options as described under Intense Sorrow.",
			magical: true,
			name: "Keen of Terror",
			noList: false,
			restriction: "Dark Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwc", "msc"],
			description: "When sung properly this terrible song shows the singer's true form -a shifting and distorted visage that none can look upon without growing dizzy or faint. At its base level, the spell gives all who look upon the Dark Elf +1 Ob to any act directed against him -attacking him, intimidating him, convincing him, etc. Extra successes over the spell obstacle add to the obstacle penalty.",
			magical: true,
			name: "Paean to the Dark Fire",
			noList: false,
			restriction: "Dark Elves only",
			root: "Spite",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This devilish song causes havoc around the singer: Knots untie, wax cracks, mortar loosens, thread unwinds and seams unravel.",
			magical: true,
			name: "Rhyme of the Unraveler",
			noList: false,
			restriction: "Dark Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This mournful song speaks of leaving sorrow behind, putting it to sleep and waking a new fire within -a flame of spite.<br>Elves who are confronted with this song (if it is successfully sung), may choose to change their Grief to Spite. Their eyes are open to this new truth.",
			magical: true,
			name: "Sorrow of Truth",
			noList: false,
			restriction: "Dark Elves only",
			root: "Spite",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwc", "msc"],
			description: "The shadows hold no secrets or sorrows from us. This supplication adds +1D to Stealthy. Successes over the obstacle count as additinonal advantage dice. It can only be sung and used in an area of shadow or darkness.",
			magical: true,
			name: "Supplication to Shadows",
			noList: false,
			restriction: "Dark Elves only",
			root: "Will",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		},
		{
			allowed: ["bwc", "msc"],
			description: "When singing into the ear of an unwitting victim, the Dark Elf bends him to his will. This song is used to enhance the Dark Elf's social prowess.",
			magical: true,
			name: "Twisted Tongue",
			noList: false,
			restriction: "Dark Elves only",
			root: "Spite",
			tools: [
				"No",
				""
			],
			training: false,
			type: "N/A"
		}
	]
};
