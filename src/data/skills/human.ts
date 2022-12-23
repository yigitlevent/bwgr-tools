import { SkillCategory } from "./_skills";


export const HumanMagical: SkillCategory = {
	allowed: ["bwg", "bwc", "msc"],
	name: "Human Magical",
	skills: [
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Alchemy is the distillation of minerals in order to divine their essence. Alchemists may also create mixtures of arcane substances to generate a specific effect.",
			magical: true,
			name: "Alchemy",
			noList: false,
			restriction: "Men only",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Immortal spirits know the value of ephemeral things like life and a soul. They bring this knowledge to bear against those who wish to strike bargains with them and form pacts. The Bargaining skill is a special social skill designed solely to negotiate pacts between summoner and summoned. It may be used for the bargaining steps described in the Summoning chapter or in a Duel of Wits with an otherworldly entity or another summoner concerning the price or nature of a pact.",
			magical: true,
			name: "Bargaining",
			noList: false,
			restriction: "Men only",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Circination is the art of drawing circles and sigils chat aid the spirit binder and summoner. There are three types of circles that may be drawn: the summoning circle or ga.te, the fortress circle and the prison circle. The summoning circle aids in conjuring and binding spirits. The fortress protects the summoner from spirits. The prison circle traps unruly spirits. Circination is tested like a regular skill: It is not open-ended and dues not get combined with anything special (except help or FoRKs) when tll-sted. Circinution is used to aid Spirit Binding and Summoning. <br> If a circle is physically damaged -erased, marred, smudged- then it loses its powers.",
			magical: true,
			name: "Circination",
			noList: false,
			restriction: "Men only",
			root: ["Perception", "Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Death Art is a black practice that teaches the sorcerer how to animate corpses and turn them into walking abominations.",
			magical: true,
			name: "Death Art",
			noList: false,
			restriction: "Men only",
			root: ["Will", "Forte"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Enchanting is a school of sorcery that focuses on imparting magic to inert, physical things. There are two sides to Enchanting: imbuing and full-blown enchanting. Imbuing allows the mage to temporarily infuse an item with a small amount of power. Enchanting allows the mage to create powerful, enduring artifacts.",
			magical: true,
			name: "Enchanting",
			noList: false,
			restriction: "Men only",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Sorcery is the skill that allows the character to understand written or spoken magical formulae. Should the character have the Gifted trait, he can then translate those formulae into spells and thereby cast magic. He may also use this skill to create new spells. The mechanics of Sorcery are described in detail in the Sorcery section of the Burning Wheel. <br> The Sorcery skill can count for the standard version of the Sorcery or count for Art Magic or Practical Magic. Pick one form that the skill represents in your game. All iterations of the Sorcery skill, no matter whut lifepath they are earned from, cou",
			magical: true,
			name: "Sorcery",
			noList: false,
			restriction: "Men only in character burning",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Spirits abound. They infuse the world around us, and those who know their secrets may call them forth and bind tbem into service. Using this skill, a summoner may call forth a spirit and set it to a task. To summon and bind, the player totals his dice from Spirit Binding, a domain binding, a spirit mark, summoning circles and any offerings. He tests those dice against an obstacle that combines the spirit's Strength, the task, the summoner's own Immanence, the immediate need for the spirit and the scope of the domain affected. If successful, the summoner can name his task and reduce the amount of retribution the spirit will visit upon him. If failed, the summoner has angered the spirit and will suffer the consequences in either retribution or enmity.",
			magical: true,
			name: "Spirit Binding",
			noList: false,
			restriction: "Men only",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Summoning skill allows the character to call spirits of the dead, demons, angels and gods to discuss matters of faith. life and philosophy, aud perhaps to reach a bargain for service.",
			magical: true,
			name: "Summoning",
			noList: false,
			restriction: "Men only",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		}
	]
};

export const HumanSpecial: SkillCategory = {
	allowed: ["bwg", "bwc", "msc"],
	name: "Man Special",
	skills: [
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill allows the character to use common household items to quickly set a building on fire.",
			magical: false,
			name: "Arson",
			noList: false,
			restriction: "Men only in character burning.",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The study of the stars, the planets, and the zodiac—astrology is a deep and ancient science that describes the relations of the celestial sphere to the terrestrial. <br> Astrology may be FoRKed with any skill except those of martial or physical type. However, the Astrology FoRK die is different from other FoRKs: The die is open-ended. But unlike standard open-ended dice, it open-ends both ways. 6s are rerolled as per the normal open-end rules, but 1s are open-ended as well. If a 1 is rolled, reroll the die. If the second roll is a failure, then a success is subtracted from the result. For a less risky roll, use this skill as a linked test toward any endeavor or gambit. In this case, do not use the open-ended die.",
			magical: false,
			name: "Astrology",
			noList: false,
			restriction: "Men only",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill allows a character to manufacture firearms, powder, shot, and bombs. Absolute failure (no successes) while manufacturing powder or explosives indicates a cook-off or misfire. The character takes the Mark result for the device he was building.",
			magical: false,
			name: "Munitions",
			noList: false,
			restriction: "Men only",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		}
	]
};
