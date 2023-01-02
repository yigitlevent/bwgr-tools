import { TraitCategory } from "./_traits";


export const DwarfCommon: TraitCategory = {
	allowed: ["bwg"],
	name: "Dwarf Common",
	traits: [
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Contrary to popular belief, Dwarves cannot see in pitch dark. However, because they have lived many ages in halls lit by firelight and reflected sunlight, Dwarves do not suffer any penalty for twilight, starlight, candlelight, lanrplight or torchlight. They do suffer from complete darkness as Men and Elves do.",
			name: "Accustomed to the Dark",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "No penalty for twilight, starlight, candlelight, lanrplight or torchlight." }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "A Dwarf's beard is a sign of rank and maturity. No male Dwarf would dare go about with a bald face.",
			name: "Bearded",
			stock: "Dwarf",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Deep in the heart of every Dwarf lies a terrible seed, a lust for wealth and beauty. Some Dwarves master it; others succumb. It is a powerful emotion that drives many a Dwarf from his comfortable life and compels him to zealously create works of inestimable craft or perform terrible acts. See the Dwarven Greed section in this chapter for more on this emotional attribute.",
			name: "Greed",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Attribute", enable: "Greed" }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "All Dwarves have stern values hammered into their skulls from a very early age. In fact, Dwarven society is a complex and interlocking network of promises and traditions. The most prime among them is: 'Honor the oath.' To break an oath is to break tradition that has seen Dwarves through many dark ages. It is a terrible crime and one not easily forgiven or forgotten.<br>Dwarf characters start the game with an additional (fourth) Belief. This Belief must come in the form of an oath and represents a pre-game bond between the Dwarf and one of his relationships. Oaths that pertain to the situation in play fill one of the standard three Belief slots.<br>Acceptable oaths are: 'I owe Burri a debt of honor;' 'I swore to recover the crown for my brother;', 'My father's last words were to rule wisely this I swore;', 'I vow never to go near the beer again.'.<br>Yes, the requirements of an oath mean a Dwarf character must start with a relationship which must be bought with resource points.",
			name: "Oathsworn",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Belief", openFourth: true, beliefName: "Oath" }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "In the first age, when the earth was barren, Dwarves were created by the One Who Most Dearly Loves to Shape with His Hands. Dwarves were born beneath the earth and it was long before they came forth into the light of the sun. In those dark ages, they grew familiar with the ores, veins, rocks and sediments that were their sky, ocean and earth.<br>Attendant with their appreciation of raw materials is a love of building and shaping. Above all else it is craftsmanship and the beauty of that which is wrought by skill that Dwarves prize most. And since they were Born Under Earth, metals, stones and gems are their first love —far beyond cloth, wood or leather. This trait also gives the Dwarves access to natural magic abilities —open-ended/special skills for most of their crafts and arts.",
			name: "Shaped from Earth and Stone",
			stock: "Dwarf",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Dwarves are smaller than Men in stature, but they tend to be a bit thicker around the middle, with broader hands, feet and arms. Though tough and doughty, Dwarves' stout frames also hinder them slightly. Speed must always be lower than their Power or Forte (whichever is higher), even if this limits advancement. Their stride is 6.<br>Dwarven nature allows for a Forte maximum of 9 rather than 8 and a Speed maximum of 6 rather than 8. All other caps are 8.",
			name: "Stout",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Stat", limit: { Forte: { min: 1, max: 9 }, Speed: { min: 1, max: 6 } } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Dwarves are durable folk, hewn from the underpinnings of the Earth. Dwarves round up when factoring their Mortal Wound.",
			name: "Tough",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Attribute", roundUp: "Mortal Wound" }
			]
		}
	]
};

export const DwarfLifepath: TraitCategory = {
	allowed: ["bwg"],
	name: "Dwarf Lifepath",
	traits: [
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Dwarven society is very structured and rigid. Those that break its conventions are forever branded as outsiders-even if they're later let back into the fold. Characters who were once Adventurers bear the stain of their deeds for the rest of their lives. No matter how hard they try to hide it, other Dwarves can just smell it on them. Adventurers gain +1 Ob to all Circles tests when dealing with Artificers or Noble Born Dwarves. However, Adventurers may choose a minor affiliation (1D) outside the Dwarf hold for free.",
			name: "Adventurer",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Resource", free: { resourceType: "Affiliation", description: "1D, Some circle outside the Dwarf Holds." } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This trait adds +1D to any skill or stat when dealing with sheep or goats.",
			name: "Affinity for Sheep and Goats",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "+1D to any skill or stat when dealing with sheep or goats." }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "A call-on for Intimidation or Interrogation when attempting to inject gravity into a situation or to cow a subject: 'He just gives you that look.'",
			name: "Baleful Stare",
			stock: "Dwarf",
			type: "Call-on",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Intimidation", condition: "When attempting to inject gravity into a situation or to cow a subject: 'He just gives you that look.'" } },
				{ type: "Skill", callon: { skillPath: "Any General➞Interrogation", condition: "When attempting to inject gravity into a situation or to cow a subject: 'He just gives you that look.'" } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Whether true or not, this character has been branded a coward. In Dwarven society, this stain comes not from breaking an oath, but from refusing to swear the oath in the first place. Branded a Coward grants the character a 1D infamous reputation with either Dwarven Nobles, Clansmen, Guilders, Artificers or the Host. Player's choice. Also, and more important, this Dwarf may not swear an Oath until he has redeemed himself in the eyes of his Longbeard.",
			name: "Branded a Coward",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Resource", free: { resourceType: "Reputation", description: "1D, Infamous, with either Dwarven Nobles, Clansmen, Guilders, Artificers or the Host." } },
				{ type: "Belief", openFourth: false, beliefName: "Special Belief" }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Treasurers spend too much time with the Prince's hoard. They eat, sleep and drink coins and riches. They dream about-cannot stop thinking about-fantastic wealth. This trait adds +1D to starting Greed.",
			name: "Dangerous Obsession",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Attribute", modify: { attribute: "Greed", modifier: 1 } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This trait turns the character's Perception into an Orienteering-like skill when underground. He can discern direction, depth and inclination like surface dwellers can see the lay of the land, time of day and the weather.",
			name: "Deep Sense",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "Turn Perception into an Orienteering-like skill when underground." }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This skill acts as a call-on for Persuasion, Coarse Persuasion or Oratory when trying to settle a dispute between two characters.",
			name: "Dispute-Settler",
			stock: "Dwarf",
			type: "Call-on",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Intimidation", condition: "When trying to settle a dispute between two characters." } },
				{ type: "Skill", callon: { skillPath: "Dwarf Art➞Coarse Persuasion", condition: "When trying to settle a dispute between two characters." } },
				{ type: "Skill", callon: { skillPath: "Any General➞Oratory", condition: "When trying to settle a dispute between two characters." } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Dvergar are original, mythical Dwarves. Dwarven nobility all lay claim of blood ties to these ancient forebears. This trait grants a 1D affiliation with other Dwarven nobility and a 1D reputation among all Dwarves as a noble. Characters with this trait suffer a +1 Ob to all Inconspicuous tests among Dwarves.",
			name: "Dvergar",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Resource", free: { resourceType: "Affiliation", description: "1D, With other Dwarven nobility." } },
				{ type: "Resource", free: { resourceType: "Reputation", description: "1D, Among all Dwarves as a noble." } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Galvanizing Presence is a call-on for Command or Conspicuous.",
			name: "Galvanizing Presence",
			stock: "Dwarf",
			type: "Call-on",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Command" } },
				{ type: "Skill", callon: { skillPath: "Dwarf Art➞Coarse Conspicuous" } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The Warden may choose to ignore one wound once per conflict. He may do as long as the wounded dice penalty is not greater than his current Will. So if he's only got 1D of Will left, he can't ignore a traumatic wound, but he can ignore a light.",
			name: "Hard as Nails",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "Ignore one wound once per conflict, as long as the wounded dice penalty is not greater than current Will and not 1D of Will left." }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Wordbearers are taught tricks of the memory so that they never forget the missives they are commissioned to recite. Players whose characters have this trait, who have forgotten a vital game—important detail, may make an Ob 3 Perception test to recall it.",
			name: "Iron Memory",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "A forgotten vital game—important detail may recalled by an Ob 3 Perception test." }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This character has smelled the worst of it. He never has to take a Steel, Health or Forte test due to nauseating smells.",
			name: "Iron Nose",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "Never make a Steel, Health or Forte test due to nauseating smells." }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Call-on for Power when lifting something that is obviously too heavy, bulky or cumbersome for the chahacter.",
			name: "Lifting Heavy Things",
			stock: "Dwarf",
			type: "Call-on",
			effects: [
				{ type: "Stat", callon: { statName: "Power", condition: "When lifting something that is obviously too heavy, bulky or cumbersome for the chahacter." } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "A character who breaks an oath, lies while under oath or fails to fulfill an oath is forever marked as an Oathbreaker. While Oathbreaker's are tolerated in Dwarven society, they are also mistrusted. No oaths may be sworn with an Oathbreaker until he has somehow resolved his initial betrayal. Also, the player must choose a relationship at the start of play that encompasses his broken oath. Lastly, Oathbreaker grants a 1D infamous reputation among the Nobles, Host, Artificers, Guilders or Clans. Player's choice.",
			name: "Oathbreaker",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Resource", free: { resourceType: "Reputation", description: "1D, Infamous, among the Nobles, Host, Artificers, Guilders or Clans." } },
				{ type: "Basic", subtype: "Requirement", description: "Must choose a relationship at the start of play that encompasses his broken oath." },
				{ type: "Belief", openFourth: false, beliefName: "Special Belief" }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Long has it been the tradition of the great Dwarven Princes to go before the Longbeards of the clans to receive their blessing and swear an oath to protect them and uphold the traditions of their forefathers. Oathswearer is perhaps the most vital trait in Dwarven culture. Though all Dwarves are Oathsworn, only those with the Oathswearer trait may pronounce a binding pact. Any oath taken while not under the guidance of an Oathswearer is not binding. Any oath pronounced before an Oathswearer must he written into the character's Beliefs. It usually replaces one of the character's existing three Beliefs. It can be used to replace the fourth, Oathsworn trait belief only if that oath has been satisfied.<br>If an Oathswearer demands a character's word, and the character refuses, the Oathswearer can, at his discretion, brand him a coward. It is a stain that all Dwarves recognize, and no oaths or agreements are made with cowards. The character is given the Branded a Coward trait.",
			name: "Oathswearer",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "If an Oathswearer demands a character's word, and the character refuses, the Oathswearer can, at his discretion, brand him a coward. The character is given the Branded a Coward trait." },
				{ type: "Belief", openFourth: true, beliefName: "Oath" }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This Dwarf spends a little too much time talking about certain things. Obsessive must relate to the character's Greed idiom and adds +1D to starting Greed.",
			name: "Obsessive",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Attribute", modify: { attribute: "Greed", modifier: 1 } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "No matter how outrageous his deeds or words, there's just something about this Dwarf that's charming and likeable.",
			name: "Oddly Likeable",
			stock: "Dwarf",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Wordbearers must hustle from the Miller to the Brewer, from the Quartermaster to the Khirurgeon, and from the Trader to the Longbeard. This trait acts as a call-on for any Speed test where the Dwarf is hurrying or hustling (including running to escape or maneuvering for a positioning test).",
			name: "Quick-Step",
			stock: "Dwarf",
			type: "Call-on",
			effects: [
				{ type: "Stat", callon: { statName: "Speed", condition: "Where the Dwarf is hurrying or hustling (including running to escape or maneuvering for a positioning test)." } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The Rune Caster is plagued with fleeting visions of what could be and what might have been. He sees his own fate intertwined with all the other doomed strands; there is no other path to walk but the one he is on.",
			name: "Slave to Fate",
			stock: "Dwarf",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Call-on for Conspicuous, Stentorious Debate and Oratory. Characters who have this trait are at a double obstacle penalty for all Singing skill tests.",
			name: "Stentorious Voice",
			stock: "Dwarf",
			type: "Call-on and Die",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Conspicuous" } },
				{ type: "Skill", callon: { skillPath: "Dwarf Art➞Stentorious Debate" } },
				{ type: "Skill", callon: { skillPath: "Any General➞Oratory" } },
				{ type: "Basic", subtype: "Obstacle", description: "Double obstacle penalty for all Singing skill tests." }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This trait cancels the effects of the Discerner song and any other trait or special ability that allows the character to be 'read'. However, it doesn't count against Aura Reading with the Magesense or Second Sight. It also adds +2D to Falsehood and Gambling.",
			name: "Stone Faced",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "Cancel the effects of the Discerner song and any other trait or special ability that allows the character to be 'read'. However, it doesn't count against Aura Reading with the Magesense or Second Sight." },
				{ type: "Skill", modify: { skillPath: "Any General➞Falsehood", modifier: 2 } },
				{ type: "Skill", modify: { skillPath: "Any General➞Gambling", modifier: 2 } }
			]
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This trait acts as a call-on for Mending or Black-Metal Artifice when trying to cobble together something new or weird.",
			name: "Tinkerer",
			stock: "Dwarf",
			type: "Call-on",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Mending", condition: "When trying to cobble together something new or weird." } },
				{ type: "Skill", callon: { skillPath: "Dwarf Art➞Black-Metal Artifice", condition: "When trying to cobble together something new or weird." } }
			]
		}
	]
};

export const DwarfSpecial: TraitCategory = {
	allowed: ["bwg"],
	name: "Dwarf Special",
	traits: [
		{
			allowed: ["bwg"],
			cost: 3,
			description: "A player may choose to make his Dwarven character especially Greedy. With this trait, he can raise his character's starting Greed to whatever exponent he desires (so long as it is higher than what it would start at). The downside of this is that Greed tests always count as the type of test the character needs to advance, no matter the obstacle. If he needs a routine, the next test counts as routine. See the Greed mechanics for the ramifications of this.",
			name: "Avarice",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Attribute", freeExponent: "Greed" },
				{ type: "Basic", subtype: "Conditional", description: "Greed tests always count as the type of test the character needs to advance, no matter the obstacle. If he needs a routine, the next test counts as routine." }
			]
		},
		{
			allowed: ["bwg"],
			cost: 2,
			description: "Dwarven Engineers often share with each other their vast knowledge. 'How far do y' think that is?' 'Hunnert paces?' 'Nah, hunnert seven and an eighth, easy.' Using this training skill, a Dwarf may add a +1D any skill that requires an estimation of distance, depth or height: building a bridge, carving out a hall or even leaping a chasm. Be warned though, estimating incorrectly can be calamitous. If the test is failed, the results are catastrophic.",
			name: "Estimation",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "May add a +1D any skill that requires an estimation of distance, depth or height. If the test is failed, the results are catastrophic." }
			]
		},
		{
			allowed: ["bwg"],
			cost: 1,
			description: "This character contains within him the capacity to maintain terrible enmity for perceived slights. He swears grudges like others swear oaths. The Grudgekeeper trait allows the player to replace his Oathsworn Belief with a Grudge. Rather than a promise or an oath, he swears revenge. Grudges follow the same mechanic as oaths.<br>If the character has the Oathswearer trait, it combines with Grudgekeeper. He may only pronounce grudges-rather than oaths-between two characters. They must write them into their Beliefs as if they were oaths.",
			name: "Grudgekeeper",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Belief", openFourth: true, beliefName: "Grudge" }
			]
		},
		{
			allowed: ["bwg"],
			cost: 3,
			description: "This Dwarf is virtuous, honorable and restrained. He may add +2D to his Steel when making tests against Greed. He also may reduce his starting Greed by -1D.",
			name: "Virtuous",
			stock: "Dwarf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "+2D to Steel when making tests against Greed." },
				{ type: "Attribute", modify: { attribute: "Greed", modifier: -1 } }
			]
		}
	]
};
