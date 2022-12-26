import { TraitCategory } from "./_traits";


export const ElfCommon: TraitCategory = {
	allowed: ["bwg"],
	name: "Elf Common",
	traits: [
		{
			allowed: ["bwg"],
			cost: 0,
			description: "To those who look upon the Elves with clear eyes, there shimmers an unmistakable halo, like white light through a gossamer veil, like stars shining at night.",
			name: "Born Under the Silver Stars",
			stock: "Elf",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Elves do not feel the effects of earthly cold and heat as do Men; they do not fall ill; they are ageless and will only pass on when the Earth ends. Elves do not have to take Health tests for illness, and they gain +1D to Health and Forte tests for resisting fatigue and poison. Yet, they are not deathless: Elves may be killed by violence or may waste away due to Grief.",
			name: "Essence of the Earth",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Elves are fair and beautiful to all who look upon them. The Elven form inclines toward tall and slender, rounded by graceful curves.",
			name: "Fair and Statesque",
			stock: "Elf",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Elves are made from the very fabric of nature- wind, air, wood and water. Thus, they know its secrets very well: They know how to preserve much of its power- even when it is taken and shaped into something new. It is this intimate knowledge that allows the Elves to weave their songs. <br> Their unadulterated essence grants them insight into their world unmatched by the races of Men, Dwarves or Ores. Due to this, Elves' Perception maximum is 9 rather than 8.",
			name: "First Born",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Years of emotion and strife take their toll, and eventually all Elves begin to feel Grief tug at their hearts See the Elven Grief section for the mechanics of this trait.",
			name: "Grief",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Like an eagle, Elves may see a great distance with perfect clarity. Add +1D to all Perception-based (or Observation-based) field maneuvers for Range and Cover or any Perception test involving seeing long distances. Elves also may see in starlight as if it were day. They signal suffer no obstacle penalties for dim light. Smoke and haze still bar their vision-normal penalties apply. In complete darkness Elves suffer +4 Ob like Men or Dwarves.",
			name: "Keen Sight",
			stock: "Elf",
			type: "Die"
		}
	]
};

export const ElfLifepath: TraitCategory = {
	allowed: ["bwg"],
	name: "Elf Lifepath",
	traits: [
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Elven Bladesmiths tend to be very sharp—their attention to detail and ability to reason is renowned even among the Elves. It is said that this ability to see a matter to its conclusion comes from centuries of staring at the tip of the blade. Bladesmiths may round up when factoring the roots for any skill that includes Perception in its root stat.",
			name: "Acute",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This trait indicates the Elf is of a rare lineage—those first to walk even among the First Born. Down through the ages, the Aman have most often tread the path of the Etharch—they are the lords and kings of all Elves. This character need not be an Etharch himself, but he is eligible for that rank. In addition, the Elf-folk of the Wilderlands and Citadel treat him with a mixture of fear and adoration.",
			name: "Aman",
			stock: "Elf",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The Elven Attendant learns that an implacable visage is crucial to winning favor and advancement in the Elven court. To portray fear and agitation is to betray oneself. Call-on for Steel in the Duel of Wits.",
			name: "Calm Demeanor",
			stock: "Elf",
			type: "Call-on"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The harried Lieutenant serves his Captain as best he can. If the player purchases a relationship with an important or powerful captain, increase his base Circles by one.",
			name: "Ear to the Ground",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This character is of Elven noble stock. His facial features, bearing, accent, and manners are distinct from those born in the wilds or the citadel. His heritage is recognizable at a glance. Grants a 1D affiliation with Elven Etharchs. This compounds with all other appropriate affiliations.",
			name: "Etharchal",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The Fêa trait denotes that this Elf has been born into a family whose lineage typically holds the rank of prince. This character need not hold the rank of prince himself, but possessing this trait indicates that he is eligible for the rank. This trait is required if the player wishes to take the Prince lifepath for his character.",
			name: "Fêa",
			stock: "Elf",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Sword Singers trained in the palace of the Etharch are traditionally considered the Prince's own bodyguard. They report directly to him in times of peace and war.",
			name: "Fealty to the Fêa",
			stock: "Elf",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "A Second is a Sword Singer in training. One of the rituals of this rigorous regiment is to dissolve the ego entirely. The Second learns to think, act, and be his master—his own psyche is stripped bare. This forms an intense bond between the two Elves, one that typically lasts beyond the Second's elevation to Sword Singer himself. If the player purchases an important relationship with his mentor he gains a 1D reputation as his student; if he purchases a powerful relationship, he gains a 2D reputation.",
			name: "Lesson of One",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Call-on for Power when lifting something that is obviously too heavy, bulky or cumbersome for the chahacter.",
			name: "Lifting Heavy Things",
			stock: "Elf",
			type: "Call-on"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This character is the lord and master of an Elven dominion. He governs the Althings, Princes, Captains, and Lords. He is ancient and powerful—his life spans the ages. The Lord of Ages trait grants +1D to one reputation or affiliation the player chooses for this character.",
			name: "Lord of Ages",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Call-on for Administration, Estate Management, or Accounting.",
			name: "Organized",
			stock: "Elf",
			type: "Call-on"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Among the Fêa, this Elf is a ruling prince and destined to one day be Etharch. By taking the Prince lifepath, the player is creating a character who is directly related to either the ruling Etharch or his forbears. A Prince of the Blood, though not an Etharch himself, is in line for the Elven crown. This trait adds +1D to the Elf's starting base Circles rating. Prince of the Blood requires the Fêa trait as well.",
			name: "Prince of the Blood",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The Althing is the most powerful Elven citizen barring the Lord Protector. He is the ruler of a vast and ancient Citadel—heir to a tradition stretching back nearly to the dawn of time. Such as it is, the Althing tends to take his job pretty seriously. If the player takes it seriously and adds both a Belief and an Instinct relating to the welfare of his city—and these are relevant to the game at hand—the character gets a 2D reputation and 2D major affiliation in and around the citadel. These may be improved with additional resource point allocations.",
			name: "Servant of the Citadel",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Sword Singers are revered among the Elven hosts. Take a 1D affiliation with the Swords of the White Towers—Elven sword singers who have sworn to protect their lands and citadels.",
			name: "Sword of the White Towers",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "If the Lord Protector's player uses one of his Beliefs to describe his vow to defend the citadel/Wilderlands/royalty, and such a vow is relevant to the current game, the Lord Protector receives a 2D reputation (he's the boss) and a 2D major affiliation within the Protectors. These may be further improved upon with resource points.",
			name: "Sworn to Protect",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The Captain has sworn a vow to loyally serve his lord. This trait grants a free relationship with the Lord Protector provided the player writes a Belief about him. If the player decides not to write a Belief or the Belief changes, the trait becomes a character trait. If he later writes a Belief about the Lord Protector, the trait is reactivated.",
			name: "Sworn to the Lord Protector",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Elves are full of pertinent old sayings. Use this as a call-on for Persuasion, Oratory, Interrogation, or Seduction if the player can come up with some appropriately sagacious dialogue to throw into play at the right moment.",
			name: "Wise Aphorisms",
			stock: "Elf",
			type: "Call-on"
		}
	]
};

export const DarkElfLifepath: TraitCategory = {
	allowed: ["bwc"],
	name: "Dark Elf Lifepath",
	traits: [
		{
			allowed: ["bwc"],
			cost: 0,
			description: "In a Duel of Wits where kindness, compassion, Grief or passion are involved, the Eremite may double his Will for the purposes of the body of argument. This effect can be triggered mid-conflict, increasing the Eremite's body of argument immediately.",
			name: "Cold",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "The Deceptive trait acts as a call-on for Sleight of Hand and Falsehood. However this trait so infuses the liar, he has a hard time telling the truth. Deceptive also incurs a +1 Ob penalty to all Oratory, Command tests and +2 Ob to Ugly Truth or Litany of Fools.",
			name: "Deceptive",
			stock: "Elf",
			type: "Call-on and Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Call-on for Seduction.",
			name: "Femme Fatale/Homme Fatal",
			stock: "Elf",
			type: "Call-on"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Wastrels lose themselves to their animal instincts, living for decades at a time without contact with civilization -living as animals do. The Feral trait reduces overall hesitation by one,  but adds +1 Ob to all social skill tests. Also, Feral negates the bonus to Circles from any Elven lifepath trait such as Etharchal, Lord of Ages, etc.",
			name: "Feral",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "",
			name: "Filthy",
			stock: "Elf",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "If any other player attempts to influence a character with the Saturnine trait with passion, motivation, joy or love, the Saturnine Dark Elf player gets a +1D advantage to all tests for one scene when confronting, hunting or poisoning that character.",
			name: "Saturnine",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Dark Elves trade their Grief for a burning Spite. Something has snapped inside the Dark Elf's soul -Grief seems folly to him. Whatever the truth of an immortal life is, Dark Elves know that it does not lay silently grieving with his Elven brothers. ",
			name: "Spite",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "The Thief trait requires that the player note a mandatory theft-related Instinct: 'When visiting home, always steal Mother's valuables.' for example. So long as that Instinct is in play, it acts as a call-on for Sleight of Hand.",
			name: "Thief",
			stock: "Elf",
			type: "Call-on"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "If the Dark Elf character is defeated in a Duel of With or a Fight and lives to tell the tale, he may FoRK his Spite into all rolls bent on avenging himself against his enemy. Humiliating or murdering the enemy -getting revenge upon them- immediately earns the player a bonus persona point, for a total of two: one for a personal goal and one for Vengeful.<br>The Vengeful trait also requires that the Dark Elf have a close relationship with a non-spiteful Elf or a mortal human. It can be familial, romantic or fraternal in nature -but it must be close. It must rankle the Dark Elf that they still live that way.",
			name: "Vengeful",
			stock: "Elf",
			type: "Die"
		}
	]
};

export const ElfSpecial: TraitCategory = {
	allowed: ["bwg"],
	name: "Elf Special",
	traits: [
		{
			allowed: ["bwg"],
			cost: 2,
			description: "This Elf has committed some crime that has nearly earned him the title of enemy among his people. Rather than dishonor him with such a stigma, his people instead sent him into exile. Ultimately, though, it is a death sentence. The Exile cannot journey West. Should his Grief overtake him, he'll have no succor and will simply waste away. This trait adds +1D to starting Grief, and a 1D infamous reputation among all Elves.",
			name: "Exile",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 1,
			description: "",
			name: "Half-Elf",
			stock: "Elf",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 3,
			description: "The Mourner is obsessed with his Grief. He is morose. The player may add any amount to his starting Grief that he sees fit, up to a maximum of exponent 9. In addition, all Laments are made at +2 Ob, and any time the character's Grief is one test from advancing, the next test -regardless of its difficulty- advances him. Grief clings to this character's spirit and cannot be shaken.",
			name: "Mourner",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 4,
			description: "This Elf has been marked as a slayer of his kin. In his past, his rage overcame his Grief and compassion, and he slew one of his own. Now he is marked as enemy and hunted by his own people. +lD to starting Grief, a 2D infamous reputation (all Elven people) as a Slayer, and +lD to Intimidate/Silent Fury any Elf.",
			name: "Slayer",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 5,
			description: "This Elf is possessed of an unbreakable spirit. Grief seems to have no effect on him whatsoever. Subtract -2D from starting Grief. In addition, all Grief tests are taken at -1 Ob.",
			name: "Unbreakable",
			stock: "Elf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 1,
			description: "Certain Elves feel a weariness creep into their bones. The constant trial and tribulation that marks the passing of years begins to drag them down. Reduce hesitation by one but increase Grief by one.",
			name: "World Weary",
			stock: "Elf",
			type: "Die"
		}
	]
};
