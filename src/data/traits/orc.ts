import { TraitCategory } from "./_traits";


export const OrcCommon: TraitCategory = {
	allowed: ["bwg"],
	name: "Orc Common",
	traits: [
		{
			allowed: ["bwg"],
			cost: 0,
			description: "So vile are they, Ores will not hesitate to slay and eat their companions.",
			name: "Cannibal",
			stock: "Orc",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The cold substance of night runs through their veins, rendering these tormented souls immortal. But it also makes them susceptible to the sun's burning rays. Ores suffer +2 Ob to all tests while abroad in the sunlight. If it is cloudy, dawn or twilight, the penalty is only +1 Ob. But the night deadens their nerves as well: Cold Black Blood reduces hesitation obstacles by two for pain, but not fear or wonderment.",
			name: "Cold Black Blood",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The mouth of an Orc is a violent organ, well suited to tearing flesh and shouting blasphemies. Ores may use their Fanged Maw as a weapon: The bite is a Power 1, WS 1, VA 1, Add 2, shortest length weapon. Claws like steel shards protrude from their gnarled fingers. They may be used as weapons: Power 1, WS X, VA -, Add 2, shortest length. They act like knives for purposes of positioning and fighting distance.",
			name: "Fanged and Clawed",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Orcs are repellent, even to their own kind, and especially to Elves, Men and Dwarves. Their bodies are bent and squat, with ugly, long arms and sickening charred flesh: Orc stat maximums are straight 8s. This trait also unlocks the Hatred emotional attribute for Orcs.",
			name: "Loathsome and Twisted",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "An Orc's eyes glow red with the inner fire of despite and hatred. Orcs can see clearly in darkness and shadows. They never suffer a penalty for such conditions.",
			name: "Lynx-Eyed, Like Burning Coals",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Orcs speak a special language of shadow, chill and blight. They share this tongue with corrupt vermin, shades, Great Wolves, Trolls, and certain Great Spiders.",
			name: "Vile Language",
			stock: "Orc",
			type: "Character"
		}
	]
};

export const OrcLifepath: TraitCategory = {
	allowed: ["bwg"],
	name: "Orc Lifepath",
	traits: [
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The Master of Eight develops a special kinship with his spider slaves. He learns their ways and habits. This trait adds +1D to any spider-related stat or skill tests.",
			name: "Affinity for Spiders",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Call-on for Power or Forte when performing hard labor.",
			name: "Back-Breaking Labor",
			stock: "Orc",
			type: "Call-on"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The Siege Master cannot resist big targets. Massive, sturdy donjons are an affront to his sensibilities. The Siege Master will always target the biggest hunk of bricks (or prettiest war machines) first and pound them into dust and ruin.",
			name: "The Bigger They Come…",
			stock: "Orc",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This Orc is beset with a wretched hacking cough. This wheezing gives him +1 Ob to all Health, Stealthy, and Inconspicuous tests.",
			name: "Black Lung",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Those Born Great and Black are marked by distinctive features—tall stature, broad shoulders, and deep-hued skin. This is the mantle of hereditary leadership among the Orcs. In order to be a Great One or a Servant, one must be Born to Rule Them All. This trait grants a 1D affiliation among Great and Black Orcs and a 1D infamous reputation among the chattel and the legion.",
			name: "Born to Rule Them All",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The Great One is prone to profound mood swings. If ever beaten in a Duel of Wits or surpassed in a social skill test, the Great One must succumb to this trait. He must hesitate for his full hesitation (minimum of two actions). While Brooding, the player may invoke his Flights of Murderous Fancy trait. (Note that in order to access that trait, the Great One must have this trait.) If the Great One does not have the Flights of Murderous Fancy trait, he simply fumes for a few moments as he broods and then returns to his regular state of mind.",
			name: "Brooding",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This trait acts as a call-on for Siege Engineer.",
			name: "Brutish Efficiency",
			stock: "Orc",
			type: "Call-on"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Add +1D to Steel tests when at the van of an attack and charging across the field of battle.",
			name: "Charging Blindly",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "He Who Sits Astride the Howling Black Beast learns to howl like a Great Wolf. He may deliver a potent and terrifying war cry from the back of his charging mount. The Cry adds +2D to Intimidation when mounted and bearing down on your prey. Intimidation requires two actions. Also using the Cry, the Orc may call his wolf to him over great distances—communicating with him as if he himself were a wolf.",
			name: "Cry of Doom",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Pushed to the brink of his endurance one too many times, this character is simply exhausted. +1 Ob to all Health tests.",
			name: "Exhausted",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "While under the effects of the Brooding trait, the Great One is beset by the winged visions of his horrid and vile fantasies. These tempting little morsels dance in his mind's eye: tearing the Elven captain limb from limb, turning pesky knights into dinnerware, or slaughtering his entire clan in order to get them to shut up, for example. After being humiliated in a social skill test or Duel of Wits, such visions become irresistible. While Brooding, the Orc player may design a Flight of Murderous Fancy to focus on. He must name a task and the vivid details of how he'll accomplish said task. He may then FoRK his Hatred into any and all tests—stat, skill, Steel, Health, or whatever—while on the job. When he sates his fancy (and accomplishes the goal), the player immediately earns a persona point. Tapping into the Flights of Murderous Fancy trait counts as a routine test for Hatred.",
			name: "Flights of Murderous Fancy",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This trait is a call-on for Falsehood.",
			name: "Forked Tongue",
			stock: "Orc",
			type: "Call-on"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Goblins learn very quickly that it's better to hide from their masters than be caught or volunteer. Add +1D to Stealthy.",
			name: "Hiding",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "It is the Cattle Slaves' responsibility to move any herd animals owned by the clan. Should any animals go missing, the Goblins become the herd. Characters with this trait may use their Power or Agility, or a weapon skill, to motivate any herd animal (in lieu of Animal Husbandry, Riding, or Driving). The animals do suffer wounds from any extreme behavior.",
			name: "Kicking the Beast",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Reduce hesitation obstacles due to injury and pain by two.",
			name: "Life is Death",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Orcs with this trait actually know how to march in step. Add +1D to Speed for any marching or travel tests, and +1D to Health tests for fatigue, when marching in formation under the lash.",
			name: "Marching",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "This character has lived life under the whip. The Numb trait gives the character pronounced scars along his back, shoulders, and legs. Also, the character does not feel the +1 Ob effects of superficial wounds. Three superficial still equal -1D.",
			name: "Numb",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Ravagers hunt with one another in an instinctual fashion. This trait adds +1D to all Steel tests so long as the Orcs equal their enemy's numbers. It also adds +1D to all engagement and positioning tests (in Fight!), and field maneuvers (in Range and Cover) when attacking in a group (as small as two Orcs).",
			name: "Pack Hunter",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Pain Life reduces hesitation due to pain by one.",
			name: "Pain Life",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Amazingly, and against all expectations, this Orc is actually talented with his hands and mind. The player may choose one craftsman or artisan-type skill for which this trait acts as a call-on. No wonder he was promoted to Gate Forger.",
			name: "Rare Talent",
			stock: "Orc",
			type: "Call-on"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Increases the character's stride by one when he's running in fear, surprise, or terror—and not necessarily just from a failed Steel test.",
			name: "Running (Away)",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "The Named pays back any slight or injury two-fold. You wound him, he cripples you. You best half his clan, he slaughters two of your cities.",
			name: "Savage Consequences",
			stock: "Orc",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Drinkers of the Dark are driven to the brink of madness and then shoved over the edge. Embracing the absence of reason and the totality of fear is essential to mastering Hatred and becoming a true Servant.",
			name: "Stark Madness",
			stock: "Orc",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Should a player whose character has this trait take a kleptomaniacal Instinct, he may use Stealing as a call-on for Sleight of Hand. If no such Instinct is taken, this character is the first one accused when anything is stolen in the clan.",
			name: "Stealing",
			stock: "Orc",
			type: "Character"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "When another character cracks a whip across his back and gives an order, the player must obey the orders (so long as the orders aren't to 'stick that knife in your throat' or something similar). He can be driven to attack, to flee, to drop his weapon, fall to his knees, or just plain row the boat. <br> This trait does not allow a reroll, it merely forces an action. Thus it can be used to cow opportunities or send your reluctant underlings into the fray.",
			name: "Tasting the Lash",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Orc Troll Lords learn to communicate with Trolls, not only in the Vile language, but in the brute's own language as well. This character may understand spoken Trollish and speak it himself.",
			name: "Troll Speak",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Head-Takers earn their position through their ability to master their blood lust. When in battle, or when committing murder, this character may FoRK his Hatred into any weapon skill or Power test. However, the player who controls this character must take his actions too far. When he uses this trait he must describe an act so horrid and vile it causes the other players to flinch and grimace. Failure to evoke the savage nature of the Head-Taker is cause for loss of the trait in the Trait Vote. Invoking this trait also counts as a routine test for Hatred.",
			name: "Unrelenting Savagery",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 0,
			description: "Orcs live by the rule of the lash. With a whip in hand and lads to lash, an Orc taskmaster feels that nothing can stop him! An Orc with this trait and a whip can force another—any character—to reroll a failed test once per session as if he had a call-on for this particular test. This effect is automatic so long as the player is bellowing and flailing around like he has a whip in his hand (and his character actually has a whip). This is how Orcs make slaves of their captives. A few sessions of accepting the whip will no doubt earn you the Tasting the Lash trait in the vote.",
			name: "Where There's a Whip There's a Way",
			stock: "Orc",
			type: "Call-on and Die"
		}
	]
};

export const OrcSpecial: TraitCategory = {
	allowed: ["bwg"],
	name: "Orc Special",
	traits: [
		{
			allowed: ["bwg"],
			cost: 3,
			description: "Black Hunters know a little-known secret about Orc bile. It's toxic to other creatures. A Hunter with this training may simply vomit on his arrows or knives to poison them before a fight. The vomit stays fresh for about a half hour before it loses its potency. No roll is required. Any creature who takes a Mark result hit from such a coated barb must pass an Ob 4 Health test. Margin of failure is added to all Health and Steel test obstacles taken for the rest of the day. This poison does not affect Orcs.",
			name: "Black Bile Poison",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 3,
			description: "The greatest, most fearsome of Ores have been bred to resist the pure rays of the sun. They may travel by day and suffer no obstacle penalties as under the Cold Black Blood Orc common trait.",
			name: "Enemy of the Sun",
			stock: "Orc",
			type: "Die"
		},
		{
			allowed: ["bwg"],
			cost: 4,
			description: "This is a call-on for any skill used in betraying a superior.",
			name: "Low Cunning",
			stock: "Orc",
			type: "Call-on"
		},
		{
			allowed: ["bwg"],
			cost: 4,
			description: "Drinkers of the Dark are immersed in shivering pools of arcane energies. They are taught to imbibe, inhale and exhale the Dark Blood and survive. This trait transforms the Orc's Hatred into a vehicle for enormous power. However, Ores are unable to tap their innate power without Rituals. Void Embrace is an emotional attribute with its own shade and exponent. <br> It is used to resist tax, sustain spells (rather than Will), and is used to maintain a spell after a distraction. Any Orc maybe taught the Rituals, but without Void Embrace, he cannot resist the tax and thus will be permanently crippled or worse. Void Embrace can also he used to enhance certain rolls by spending a persona point to tap the Void. See the Void Embrace section of the Orc chapter for more details. If Void Embrace is advanced to exponent 10, the Orc goes mad or commits suicide. Either way, he's removed from play.",
			name: "Void Embrace",
			stock: "Orc",
			type: "Die"
		}
	]
};
