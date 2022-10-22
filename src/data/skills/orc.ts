import { SkillCategory } from "./_skills";


export const OrcSpecial: SkillCategory = {
	allowed: ["bwg", "bwc", "msc"],
	name: "Orc Special",
	skills: [
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Channeling his mind-numbing rage, the Gate Forger is able to create terrifying edifices. This skill blends Architect and Engineer for the purpose of creating the looming tower fortresses in which the Orcs dwell. Also, using this skill, Orcs may corrupt or adopt caves or pre-existing towers and turn them into something more suitable to the horde's taste. All tests are open-ended.",
			magical: false,
			name: "Bastions of Hatred",
			noList: false,
			restriction: "Orcs only",
			root: "Hatred",
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Cavernous horns are sounded before the Orcs join battle. The horns strike one note: Despair. If the Despair Shouters exceed the mean Will of their opponents, their margin of success is added to their opponents' hesitation for the duration of the conflict. Brazen Horn tests are open-ended.",
			magical: false,
			name: "Brazen Horn of Despair",
			noList: false,
			restriction: "Orcs only",
			root: "Hatred",
			tools: [
				"Other",
				"The Brazen Horn"
			],
			training: false,
			type: "Musical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The most cunning and brutal of Orcs learn how to channel their own inner fires to cow their brethren. Brutal Intimidation is a special Intimidation skill, rooted from hatred. All tests are open-ended.",
			magical: false,
			name: "Brutal Intimidation",
			noList: false,
			restriction: "Orcs only",
			root: "Hatred",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Doctrine of Night's Blood contains the terrible laws of the Servant's Cult—whom they serve and why.",
			magical: false,
			name: "Doctrine of Night's Blood",
			noList: false,
			restriction: "Orcs only in character burning",
			root: "Will/Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The vast majority of Orcs bear no name—they are too insignificant in their miserable lives to warrant anything more than a grunt or at most an epithet commensurate with their role in the clan. The granting of proper names is an ancient rite and ritual. Name Ritual teaches the requirements and strictures governing the bestowal of such names. A successful Name Ritual test bestows a +1D reputation and a name. Failure indicates the character cannot be named and earns an infamous reputation.",
			magical: false,
			name: "Name Ritual",
			noList: false,
			restriction: "Orcs only in character burning",
			root: "Will/Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Flattery is a rare gift among the Orcs. Whisperers use compliments and ingratiation like an assassin uses knives and poisoned barbs. This skill combines Persuasion and Soothing Platitudes into one unholy mess. Like all Hatred-based skills, Poisonous Platitude tests are open-ended.",
			magical: false,
			name: "Poisonous Platitudes",
			noList: false,
			restriction: "Orcs only",
			root: "Hatred",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Rituals of Blood imitate the Lord of Darkness and Blood's abilities to gather allies, twist minds, and transform himself. Using the obstacles described in the Orc chapter, the Servant can cast a variety of spells with this skill.",
			magical: true,
			name: "Rituals of Blood",
			noList: false,
			restriction: "Orcs only",
			root: "Will",
			tools: [
				"Tools",
				"Ritual knives"
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The ancient Rituals of Night grant the Knower of Secrets power beyond the ken of his brethren. Through this skill, the Orc may cast spells listed under the Rituals of Night.",
			magical: true,
			name: "Rituals of Night",
			noList: false,
			restriction: "Orcs only",
			root: "Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill is similar to carpentry, except that Orcs never bother to finish, smooth, polish, or plane their work. Their products are always rough, warped, and quickly done.",
			magical: false,
			name: "Rude Carpentry",
			noList: false,
			restriction: "Orcs only in character burning",
			root: "Perception/Agility",
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The prime mystery of the Servants is the nature of their own cult. They are part of an internecine hierarchy governed by laws and customs apart from the clan.",
			magical: false,
			name: "Servant-wise",
			noList: false,
			restriction: "Orcs only in character burning",
			root: "Perception",
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Orcs love to construct massive and roaring engines of war that spit fire and shatter stone. Use the skill to build war machines; the war machines then count as tools for destroying structures.",
			magical: false,
			name: "Siege Engineer",
			noList: false,
			restriction: "Orcs only in character burning",
			root: "Perception",
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Master of Eight learns how to raise and train Great Spiders. This rare skill is reserved for the most calmly insane among the Servants. It acts as Instruction and Field Dressing for Spiders.",
			magical: false,
			name: "Spider Husbandry",
			noList: false,
			restriction: "Orcs only in character burning",
			root: "Will",
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Orcs don't merely cut trees down, they uproot them entirely. Using labor and ropes, Orc Woodcutters clear the forests until only tortured ground remains—all the wood is taken to the furnace.",
			magical: false,
			name: "Tree Pulling",
			noList: false,
			restriction: "Orcs only",
			root: "Hatred",
			tools: [
				"Tools",
				"Expendable rope and goblins"
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill teaches the Knower of Secrets how to extract and preserve poisons from venomous and stinging creatures. Using his knowledge, he can create: <br>  A stinging and nettling contact poison, Ob 2. A dose on the skin causes the victim to break out in boils. +2 Ob to all physical, martial, and social tests for one scene. <br>  A debilitating, ingested poison, Ob 4. Victim must test Forte vs Ob 4. Margin of failure is permanently subtracted from Health (and Health maximum). <br>  A deadly poison, Ob 5. The poison must be slathered on a blade or arrowhead and injected into the victim with a Mark result hit. If so injected, the poison delivers one additional B9 wound in a number of exchanges equal to six plus the victim's Forte.",
			magical: false,
			name: "Vile Poisoner",
			noList: false,
			restriction: "Orcs only",
			root: "Perception/Agility",
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Medicinal"
		}
	]
};
