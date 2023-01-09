import { TraitCategory } from "./_traits";


export const TrollCommon: TraitCategory = {
	allowed: ["bwc"],
	name: "Troll Common",
	traits: [
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Trolls typically have massive, craggy claws used for digging and tearing. They don't often use their claws as a weapon, favoring the use of their stony fists to subdue prey. However if a Troll has another character in a Lock and chooses to do damage (rather than increase the Lock), add +1 Power to the damage of the attack due to the claws gouging into the victim.",
			name: "Black Nails",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "A Troll's mouth is a mass of misshapen teeth and fangs. He may bite. Pow 1, Add 2, VA -, WS: 2, Shortest.",
			name: "Fangs",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Nocturnal by nature, Trolls typically shun the sunlight, for it will undo the sorcery which gave their night-stalking ancestors life. Exposure to the sun causes the Troll's stony roots to consume him and crush him from within.",
			name: "Night Blooded",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Born of the stuff of night, Trolls can see perfectly well in the darkness and suffer no penalties for nighttime conditions. However, rain and haze do affect them like other characters, and bright light imposes a +1 Ob penalty.",
			name: "Night Eyed",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Trolls are the definition of Massive Stature: barrel-chested, hulking beasts with long thick limbs and shoulders like towering cliffs. The largest of their number growtwice as tall as humans, but even the smallest adults are rarely less than seven feet in height.<br>Increase all weapon lengths by one for the Troll.<br>These great lumbering beasts must have minimum Power and Forte of 4. The maximum exponents for Power and Forte are 9. The maximum exponents for Agility and Speed are 5. Stride is 7.",
			name: "Massive Stature",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Trolls were born of stone and sorcery and to these roots they remain closely tied. Though not immortal, these creatures age very slowly and are capable of living for long centuries -if they can survive their own violent tendencies.<br>However, the weight of granite in their blood has detrimental effects. Their view of the world is dim and ponderous and their ability to intuit or empathize is minimal. A troll may not have a Perception or Will exponent highter than 6.",
			name: "Stone's Age",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Trolls are embodiment of tough. Round up when factoring Mortal Wound.",
			name: "Tough",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Troll Skin is resilient and leathery, It provides 1D of armor to the limbs and head, 2D to the chest.<br>As he gets older, a Troll's flesh often hardens into a stony mass. Thus, the Troll Skin trait maybe upgraded to Scaly Skin or Stone Skin for just a few trait points. See the Troll Special Traits list. This skin cannot 'fail' and become damaged like armor: 1s are discounted in this case. VA works as normal against this armor.",
			name: "Troll Skin",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Voracious Carnivore",
			stock: "Troll",
			type: "Character"
		}
	]
};

export const TrollLifepath: TraitCategory = {
	allowed: ["bwc"],
	name: "Troll Lifepath",
	traits: [
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Addled",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwgr"],
			cost: 0,
			description: "Call-on for Power or Forte when performing hard labor.",
			name: "Back-Breaking Labor",
			stock: "Troll",
			type: "Call-on"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "The sound of this Troll's voice is unimaginably loud. Use as a call-on for Intimidation and Command",
			name: "Bellowing",
			stock: "Troll",
			type: "Call-on"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Bull Trolls have forceful personalities, perhaps verging on the barest of leadership qualities, but mitigated by ill moods, bad jokes and a predilection for overbearing violence.",
			name: "Boor",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Brutal",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "This troll is so though (or alternatively, stupid) that he doesn't know when to give up. When taking die penalties from wounds, mental stats do not count for the purposes of incapacitation.",
			name: "Brute",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Call-on for Intimidation and Conspicuous when displaying your deformity.",
			name: "Grotesque",
			stock: "Troll",
			type: "Call-on"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Hard labor has turned this character's back to stone and his muscles to iron. Round up when factoring Health.",
			name: "Hardened",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Ox Trolls are the breasts of burden in the Troll legions. They haul impossible loads for interminable journeys. Use this trait as a call-on for Power when pushing, pulling or hauling loads.",
			name: "Hauling",
			stock: "Troll",
			type: "Call-on"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "The lowest rung Troll soldiers in their great legions is that of the Battering Ram. These massive brutes haul forth great war engines to the walls of the citadels of their enemies and even use their own bodies to batter down walls. Use this trait as a call-on for Power when trying to break, smash or knock ower something.",
			name: "Heaving",
			stock: "Troll",
			type: "Call-on"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Insidious Cruelty",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Mind Numbing Work",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Misshapen",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "This character has lived life under the whip. The Numb trait gives the character pronounced scars along his back, shoulders, and legs. Also, the character does not feel the +1 Ob effects of superficial wounds. Three superficial still equal -1D.",
			name: "Numb",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Slow to react and slow on the uptake, he's not the sharpest knife in the drawer. +1 Ob to all Perception tests and increase base hesitation by one.",
			name: "Slow",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Solitary",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "This trait adds +2D to the character's body of argument in a Duel of Wits that contravenes one of his Beliefs.",
			name: "Stubborn",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "When another character cracks a whip across his back and gives an order, the player must obey the orders (so long as the orders aren't to 'stick that knife in your throat' or something similar). He can be driven to attack, to flee, to drop his weapon, fall to his knees, or just plain row the boat.<br>This trait does not allow a reroll, it merely forces an action. Thus it can be used to cow opportunities or send your reluctant underlings into the fray.",
			name: "Tasting the Lash",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Pain and suffering are a picnic. This character is not required to make Steel tests for pain, exhaustion, or deprivation. He just clambers to his feet and keeps going. If kicked back to the ground, he crawls.",
			name: "Tough as Nails",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Ironshields are the bodyguards and retinues of the Troll legions. They are trained to stand guard and lay down their lives for their warlord master. This trait reduces hesitation by 4 for fear and pain.",
			name: "Unflinching",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Orcs speak a special language of shadow, chill and blight. They share this tongue with corrupt vermin, shades, Great Wolves, Trolls, and certain Great Spiders.",
			name: "Vile Language",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Warlords quickly grow to understand that the world sees Trolls as mindless brutes, good only for absorbing and dealing devastation. Outsiders forget that Trolls can evince intelligence. Troll Warlords use this prejudice to their advantage -playing the part of the dumb automaton while scheming and plotting behind their thick masks. Call-on for Strategy and Tactics when unveiling a surprising stratagem or ploy.",
			name: "Wickedly Clever",
			stock: "Troll",
			type: "Call-on"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "The Brood Mother knows a bit of magic, rumored to have been handed down from an old giantess in ages past. This magic, called Witch Flesh, grants the ability to transform into a handsome young man or woman. The disguies is impenetrable. The brood mother retains her stats and attributes, but her character traits are replaced with Beautiful, Wholesome, Apple-Cheeked, etc. Any other traits requiring physical expression (like Horns or Claws) are temporarily lost to the human form. No test is required to transform, but the change requires a full scene, during which magic slowly takes effect.<br>Once the Brood Mother reveals her true nature to her victim (or is perhaps accidentally spotted transforming), the victim will never see her the same way again -and can never be fooled by the Witch Flesh of this Brood Mother again.",
			name: "Witch Flesh",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwgr"],
			cost: 0,
			description: "Orcs live by the rule of the lash. With a whip in hand and lads to lash, an Orc taskmaster feels that nothing can stop him! An Orc with this trait and a whip can force another—any character—to reroll a failed test once per session as if he had a call-on for this particular test. This effect is automatic so long as the player is bellowing and flailing around like he has a whip in his hand (and his character actually has a whip). This is how Orcs make slaves of their captives. A few sessions of accepting the whip will no doubt earn you the Tasting the Lash trait in the vote.",
			name: "Where There's a Whip There's a Way",
			stock: "Troll",
			type: "Call-on and Die"
		}
	]
};

export const TrollSpecial: TraitCategory = {
	allowed: ["bwc"],
	name: "Troll Special",
	traits: [
		{
			allowed: ["bwc"],
			cost: 3,
			description: "When this Troll fails a Steel test or suffers a wound (that he can feel - Numb and Dead to Pain work against this trait), the monster immediately and automatically shifts into aggressive stance. There is no hesitation. While enraged he will (and must) attack any living (or seemingly living) thing around him -starting with that which just hurt/enraged him. He then moves on to the next closest target, friend or foe. The Troll Remains in aggressive stance even if he sprints. The rage lasts for exchanges equal to 10 minues the character's Will exponent. If the monster is already in aggressive stance when the above conditions are met, he spends two actions roaring and bellowing (which count as an Intimidation test against his opponents).",
			name: "Berzerker",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 4,
			description: "In place of his clawed feet, this Troll possesses a pair of bony hooves that give him a kicking weapon (Pow 1, VA 1, WS 1). The Troll also walks with a distinctive gait and makes quite a racket when treading on hard surfaces. Any Speed or Stealthy tests made while on stone, ice or really hard, smooth wood are at a +1 Ob (May not be combined with Webbed Fingers and Toes).",
			name: "Bull-Legged",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 3,
			description: "A growth of crystallin spines sprouts from the back and shoulders of this Troll. The spines are sharp to the touch and break off and lodge themselves in the flesh of the unwary, causing great discomfort.<br>Any creature that grapples or otherwise comes into contanct with the Troll's spines suffers a +1 Ob to all tests until the spines are removed. This takes effect if the Troll grapples you, too. The penalty is cumulative for each contact.<br>Spines can be plucked out in about a half hour. If the Surgery or Field Dressing skill is used, they can be treated in the time it takes to tend to a Superficial wound.<br>If the troll is forced onto his back -if he falls or is pushed- it is possible that the spines are crushed and flattened. Roll the die of fate. On a 1 the spines are crushed and unusable. It takes about a month for the crystals to regrow (They always regrow).",
			name: "Crystalline Spines",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 3,
			description: "This Troll easy anything -soil, stone, wood, metal and flesh. He is indiscriminate in his choices and in fact cannot help himself from sampling his surroundings. Add +1 VA to bite attacks.",
			name: "Devourer",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 3,
			description: "No matter how badly wounded, this Troll will always heal. Cuts will close, bones will knit and even lost limbs will regrow. This Troll can never fail a Health test for Recovery (though he can roll poorly, in which case maximum healing time is required for the wound to close). The only way to destroy this beast is to put him to fire.",
			name: "Earth Blood",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 4,
			description: "The greatest, most fearsome of Trolls have been bred to resist the burning rays of the sun. They may travel by day and not b e turned to stone as with the Night Blooded trait. Enemies of the Sun do not suffer penalties for dim and twilit light, but they can no longer see in complete darkness (+4 Ob in pitch dark). This trait replaces the Night Blooded trait.",
			name: "Enemy of the Sun",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 2,
			description: "With hands like great mattocks, this Troll is best suited to brawling and pummeling. Add +1D to the Troll's Brawling skill for purposes of barefisted Block, Strike, Beat and Push actions. The Troll suffers a +1 Ob to any other skill that requires manual dexterity (including Throwing and weapons skills).",
			name: "Hammer Hands",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 4,
			description: "On of this Troll's hands has formed into a massive bony hook. This hook can be used as a weapon: Power 2, VA 1, WS 2, Short; may Great Strike. In fact, it is really too big and clumsy to be used for anything else.",
			name: "Hook Hand",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 5,
			description: "Great stony horns protrude from the Troll's skull. In addition to being terribly intimidating, they also serve a somewhat practical purpose. When the Troll charges another creature of relatively similar size, he may choose to add +1D to his Charge Power or to do damage on the Charge as if he had been simultaneously Striking. Damage is Pow 2, VA 2, WS 1. The first two successes of the Charge attack count as a superficial wound to the victim. Four successes over equals a Mark hit. Six over is a Superb hit.",
			name: "Horns",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 6,
			description: "This skinn is as tough as iron and scaled like shark. All incoming damage is reduced by -1 pip on the PTGS: B8 damage would be reduced to B7, etc.",
			name: "Iron Hide",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 1,
			name: "Malformed",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 2,
			description: "Covered in a coat of moss and slime, this Troll blends in quite well to forest or earthy surroundings. Call-on for Stealthy or Camouflage in forest or mines.",
			name: "Mossy Coat",
			stock: "Troll",
			type: "Call-on"
		},
		{
			allowed: ["bwc"],
			cost: 1,
			name: "Oafishly Charming",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 2,
			description: "This Troll's blood is noxious and caustic. If the Troll should be bitten for effect, the horrid liquid runs into the mouth of the attacking creature and causes great discomfort and nausea. Any creature that bites the Troll, penetrates his armor and achieves a Mark result, must make an Ob 4 Forte test. Any successes missed equal an obstacle penalty that lasts for three exchanges.",
			name: "Repulsive Blood",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 3,
			description: "Protruding out over this Troll's eyes is a stony brow like unto a craggy cliff. This provides +1D of armor to the Troll's head.",
			name: "Ridged Brow",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 4,
			description: "Scaly Skin provides 2D of armor to the limbs and the head, and 3D to the chest. This skin cannot 'fail' and become damaged like normal armor: 1s are ignored. VA works as normal against this armor.",
			name: "Scaly Skin",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 5,
			description: "The hide of this creature is impossibly tough and unyielding. Stone Skin provides 3D of armor protection to the head and limbs, and 4D to the chest. This skin cannot 'fail' and become damaged like normal armor: 1s are ignored. VA works as normal against this armor.",
			name: "Stone Skin",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 3,
			description: "This Troll's jaws are massive, distended and terrible. The Toothy Maw counts as: Pow 3, Add 2, VA 1, WS 1, Shortest. It replaces the Fanged trait.",
			name: "Toothy Maw",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 1,
			description: "This Troll has the uncanny ability to form complete sentences, understand what is said to him and possibly even comprehend what a written language, map or glyph could represent -if it were possible in the first place for scratching on stone or leather to mean anything. He is a mental giant among his peers and appropriately hated and feared.",
			name: "Troll Savant",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 2,
			description: "This Troll's lower canine teeth protrude into formidable tusks. The beast may use these sharpened weapons to gore the unwary. Add +1 Power to the Troll's bite attack when it is at hands fighting distance. This trait may be combined with fangs or Toothy Maw.",
			name: "Tusks",
			stock: "Troll",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 1,
			description: "The small, bat-like wings protrude from the Troll's shoulders. Flap, flap.",
			name: "Vestigial Wings",
			stock: "Troll",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 1,
			description: "Stride 5 when swimming.",
			name: "Webbed Fingers and Toes",
			stock: "Troll",
			type: "Die"
		}
	]
};
