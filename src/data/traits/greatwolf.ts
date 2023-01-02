import { TraitCategory } from "./_traits";


export const GreatWolfCommon: TraitCategory = {
	allowed: ["bwc"],
	name: "Great Wolf Common",
	traits: [
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Great Wolves have powerful jaws honed into deadly hunting weapons. Crushing jaws: Pow 2, Add 2, VA 1, WS 3, Short. When using the Savage Attack skill, the wolf can choose the Lock and Strike action.",
			name: "Crushing Jaws",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "When using the Savage Attack skill, the wolf can choose the Lock and Strike action." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Heavy and thick fur protects Great Wolves against the cold of their harsh enviroment. They can tolerate extremely cold temperatures, whereas extended times of hot weather tend to agitate them. This trait allows the wolf to ignore penalties and tests relating to cold weather. However, extended time in hot weather causes +1 Ob to all tests.",
			name: "Deep Fur",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "Ignore penalties and tests relating to cold weather. but extended time in hot weather causes +1 Ob to all tests." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Great Wolves possess the basic form common to wolves. They have a rangy, muscular body set on high and powerful legs with large, well-padded feet. They have lonf snouths and massive, protruding jaws. Their fur is a crown of coarse guard hairs supported by a night-impertmeable layer of soft underfur. Their most prominent feature is, of couse, their massive size. Great wolves stand three to five feet at the shoulder, and can weigh 200-600 lbs.<br>Great Wolves have a maximum exponent of 6 for Agility (from their lack of hands), while other stat maximums are 8. Their Stride is 11.",
			name: "Great Lupine Form",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Stat", limit: { Agility: { min: 0, max: 6 } } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Without a doubt, Great Wolve are intelligent creatures. They possess a personality and intellect equivalent to that of humans and Orcs. Never assume that just because they don't live in cities, write with pends or eat with knives, wolves are dumb brutes.<br>Even so, Great Wolves are not tool-using creatures. Though they understand a great many matters, they generally don't use (or even need) tools to accomplish the tasks in their daily lives. Any wolf attempting to use tools like hammers, swords or scissors suffers quadruple obstacle penalties.",
			name: "Lupine Intellect",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Obstacle", description: "Using tools like hammers, swords or scissors suffers quadruple obstacle penalties." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Wolves possess the advantage of being able to see well in low light. Wolves reduce obstacle penalties for dim light, darkness and have by one step.",
			name: "Wolf Eyes",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "Wolves reduce obstacle penalties for dim light, darkness and have by one step." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Wolves benefit from an exceptional sense of smell. Wolf Snout grants +1D to Perception for assesses, and +1D to Scent Tracking and Pack Hunting skill tests. This bonus is also added to Perception for determining Reflexes. This trait counts as Observation when combined with Woodland Ear.",
			name: "Wolf Snout",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "+1D to Perception for assesses." },
				{ type: "Skill", modify: { skillPath: "Great Wolf Special➞Scent Tracking", modifier: 1 } },
				{ type: "Skill", modify: { skillPath: "Great Wolf Special➞Pack Hunting", modifier: 1 } },
				{ type: "Basic", subtype: "Conditional", description: "Wolf Snout counts as Observation when combined with Woodland Ear." },
				{ type: "Attribute", addWhenCalculating: { attribute: "Reflexes", modifier: 1 } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Wolves have extraordinary hearing. The Woodland Ear allows wolves to distinguish between different animal calls and add +1D to Perception tests for assesses, Scent tracking and Pack Hunting. This bonus is also added to Perception for determining Reflexes. This trait counts as Observation when combined with Wolf Snout.",
			name: "Woodland Ear",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "+1D to Perception for assesses." },
				{ type: "Skill", modify: { skillPath: "Great Wolf Special➞Scent Tracking", modifier: 1 } },
				{ type: "Skill", modify: { skillPath: "Great Wolf Special➞Pack Hunting", modifier: 1 } },
				{ type: "Basic", subtype: "Conditional", description: "Woodland Ear counts as Observation when combined with Wolf Snout." },
				{ type: "Attribute", addWhenCalculating: { attribute: "Reflexes", modifier: 1 } }
			]
		}
	]
};

export const GreatWolfLifepath: TraitCategory = {
	allowed: ["bwc"],
	name: "Great Wolf Lifepath",
	traits: [
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Spirit Hunters are said to be the chosen ones of the Great Grandfather —selected to take up his eternal struggle against the spirits, speech-twisters and demons that seek to overcome wolf-kind. Once a wolf begings to sing the howls of the Spirit Hunters, he grows closer to the Great Grandfather; in fact he begins to take on a bit of the ancient wolf's essence. The more the Spirit Howler sings the ancient songs, the more the Taint grows within him. See the Ancestral Taint rules in the Spirit Hunter section for more on this.",
			name: "Ancestral Taint",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Attribute", enable: "Ancestral Taint" }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "-1 Ob to all Intimidation, Interrogation, Command, and Seduction tests used against this character. His Will has been broken.",
			name: "Broken",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Obstacle", description: "-1 Ob to all Intimidation, Interrogation, Command, and Seduction tests used against this character" }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Demented",
			stock: "Great Wolf",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "There are only ever two Dominants in a pack: a male and female pair. These two serve as the mother and father of the group, guiding them to new hunting grounds and producing more offspring to strengthen and expand the pack. This trait grants a 1D affiliation with a pack and a 1D reputation within that pack as a Dominant. This trait compounds with other similar, appropriate affiliations and reputations.",
			name: "Dominant",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Resource", free: { resourceType: "Affiliation", description: "With a pack." } },
				{ type: "Resource", free: { resourceType: "Reputation", description: "With a pack." } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "This character is practically immune to fear. Reduce hesitation for pain, fear, and the shock of gore or death by three. Hesitation for wonderment or surprise is not reduced.",
			name: "Fearless",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "Reduce hesitation for pain, fear, and the shock of gore or death by three." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Ebon Tyrants are the Dominants of the vast Black Destroyer packs. More than just savagery and brutality are required to attain this rank. Great Cunning is a necessity. This trait acts as a call-on for Strategy, Tactics and any wise tested for insight.",
			name: "Great Cunning",
			stock: "Great Wolf",
			type: "Call-on",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Strategy", condition: "For insight." } },
				{ type: "Skill", callon: { skillPath: "Any General➞Tactics", condition: "For insight." } },
				{ type: "Skill", callon: { skillPath: "Any Wise➞Any wise", condition: "For insight." } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Before the charge, these beasts bombard their opponents with cold fear. This wolf can howl and add +4D to Intimidation. This howl requires two actions to perform and cannot be done on the charge —it must be done beforehand. In Range and Cover, it positions with 2D. In Fight, it counts as the Longest weapon.",
			name: "Howl of Doom",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "Howl and add +4D to Intimidation. Howl is two actions and cannot be done on the charge —it must be done beforehand. In Range and Cover, it positions with 2D. In Fight, it counts as the Longest weapon." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Intense Hatred",
			stock: "Great Wolf",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "There is an old saying: 'Death is lighter than a feather, but duty is heavier than a mountain.' This character lives by these words. The player may add an additional Belief centered around his Loyalty to another character. Should this trait ever be voted off, the character loses the Belief as well; should the Belief be changed, the trait is lost.",
			name: "Loyal",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Belief", openFourth: true, beliefName: "Loyalty" }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Wolves who are chosen to become Dark Friends tend to be particularly obedient. While their masters can be extremely generous —feeding their wolves much fresh meat— they are also extremely violent and punishing. Rarely do they hesitate to kill a disobedient wolf. Lastly, a Dark Friend has an intuitive understanding of the powers the Blood Summoners wield —he knows the might of success and the calamity of failure. It is far better to aid the former and prevent the latter.",
			name: "Obedient",
			stock: "Great Wolf",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "This wolf stinks of spirits. The packs shun him, and the Spirit Hunters harry him. 1D infamous reputation and +1 Ob Inconspicuous among the wild packs and legion. Only the Haunts and Ghosts accept him.",
			name: "Odor of Spirits",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Resource", free: { resourceType: "Reputation", description: "1D, infamous among all great wolves." } },
				{ type: "Basic", subtype: "Obstacle", description: "+1 Ob Inconspicuous among the wild packs and legion." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Paranoid",
			stock: "Great Wolf",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "The eyes of a Ghost of the Deeping Wood burn like glittering coals. This trait is a call-on for Intimidation. Also, characters attempting to decieve the wolf (using Falsehood, Persuasion or Soothing Platitudes) suffer +1 Ob penalty. Burning flames flash implacably behind his eyes and hint at the terrible fate of liars.",
			name: "Piercing Gaze",
			stock: "Great Wolf",
			type: "Call-on and Die",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Intimidation" } },
				{ type: "Basic", subtype: "Obstacle", description: "Falsehood, Persuasion or Soothing Platitudes) against you suffer +1 Ob penalty." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Ghosts of the Deeping Wood possess a calmness that rivals the most serene glade on a starry summer night. Reduce hesitation by two.",
			name: "Prenaturally Calm",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Attribute", modify: { attribute: "Hesitation", modifier: -2 } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Reclusive",
			stock: "Great Wolf",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "After life in the cage, you can't help but act against the world that has hurt you. Instincts that get you into weird or deep trouble earn a persona point instead of a fate point.",
			name: "Slave No More",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Conditional", description: "Instincts that get you into weird or deep trouble earn a persona point instead of a fate point." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Spirit Howlers become attuned to the spirit world as their Taint grows. A wolf with this trait has the ability to hear those of the spirit nature. Counts as Observation for detecting the movements of spirits, demons and other creatures of spirit nature. Obstacles to detect spirits is 10 minues their Strength. Wolves may use their Woodland Ear in combination with this trait but not their Wolf Snout.",
			name: "Spirit Ears",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Additional Effect", description: "Counts as Observation for detecting the movements of spirits, demons and other creatures of spirit nature. Obstacles to detect spirits is 10 minues their Strength." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 3,
			description: "On certain nights in the dead of winter, the Spirit Hunters will come to territories and seek out lone wolves. Those who are chosen recieve a special scent and are marked to become Spirit Hunters. This trait is required to be able to take the Spirit Chaser lifepath. It grants 1D affiliation with the Spirit Hunters. It also grants a 1D spirit mark as per the Spirit Binding rules.",
			name: "Spirit Marked",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Resource", free: { resourceType: "Affiliation", description: "1D, with the Spirit Hunters." } },
				{ type: "Resource", free: { resourceType: "Magical", description: "1D, spirit mark." } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "The Taint suffuses the Spirit Hunter. Using his Spirit Nose, he may add his Wolf Snout to detect spirits (as Spirit Ears). Also Spirit Nose allows Spirit Hunters to track spirits, even those who leave no marks or do not touch the ground. Use the obstacles listed with the Scent Tracking skill and be creative.",
			name: "Spirit Nose",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Additional Effect", description: "Also Spirit Nose allows Spirit Hunters to track spirits." }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "The Last Wolf is the scapegoat of the pack. All of the pack's anger and frustration is taken out on his hide. No matter how he elevates himself throught his life, the Last Wolf always bears this stain on his very heart. This trait grants a 1D reputation as a Last Wolf.",
			name: "Stained",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Resource", free: { resourceType: "Reputation", description: "1D, as a Last Wolf." } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Great Wolves can smell a Ghost of the Wood when he is near. His scent is distinct, a mix of Ancient Ways and twisted speech that covers his coat like the blood of the hunter. This stink causes fear, trepidation and even hatred in Great Wolves. They do not look kindly upon one who so tampers with the will of the Grandfather. This trait grants a 1D infamous reputation as a Ghost of the Deeping Wood among the packs. Combine this with other reputations as appropriate.",
			name: "Stink of the Ancient",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Resource", free: { resourceType: "Reputation", description: "1D, as a Ghost of the Deeping Wood among the packs." } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Wolves learn to submit to a Dominant wolf at a very young age. Any wolf in the pack who is not part of the Dominant pair is submissive. These wolves follow the lead of their superiors and often beg for certain permissions, including permission to eat from a kill. Being Submissive in the pack connotes no weakness. It merely shows that the wolf understands the natural order of things. This trait grants a free relationship with a master or dominant character.<br>Prominent Submissive behaviors include: looking away from the Dominant's gaze, crouching with head to the ground before the Dominant, rolling over and exposing the belly to the Dominant and nibbling or licking the Dominant's chin.<br>Lastly, wolves may possess both the Dominant and Submissive traits. These wolves will rule their pack as they rightly should, but they might also submit to stronger Dominants —be they wolf, human or prc.",
			name: "Submissive",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Resource", free: { resourceType: "Relationship", description: "With a master or dominant character." } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "When another character cracks a whip across his back and gives an order, the player must obey the orders (so long as the orders aren't to 'stick that knife in your throat' or something similar). He can be driven to attack, to flee, to drop his weapon, fall to his knees, or just plain row the boat.<br>This trait does not allow a reroll, it merely forces an action. Thus it can be used to cow opportunities or send your reluctant underlings into the fray.",
			name: "Tasting the Lash",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Basic", subtype: "Additional Effect", description: "When another character cracks a whip across his back and gives an order, the player must obey the orders" }
			]
		},
		{
			allowed: ["bwc"],
			cost: 0,
			description: "Orcs speak a special language of shadow, chill and blight. They share this tongue with corrupt vermin, shades, Great Wolves, Trolls, and certain Great Spiders.",
			name: "Vile Language",
			stock: "Great Wolf",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Wanderlust",
			stock: "Great Wolf",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 0,
			name: "Watchful",
			stock: "Great Wolf",
			type: "Character"
		}
	]
};

export const GreatWolfSpecial: TraitCategory = {
	allowed: ["bwc"],
	name: "Great Wolf Special",
	traits: [
		{
			allowed: ["bwc"],
			cost: 6,
			description: "Ancient fear rolls off this wolf in weves. Add +2D to Intimidation tests.",
			name: "Ancient Terror",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Skill", modify: { skillPath: "Any General➞Intimidation", modifier: 2 } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 3,
			description: "This wolf was born to be a trickster. His coat shifts patterns and colors at will. Add +1D to Stealthy and Inconspicuous tests.",
			name: "Changeling Coat",
			stock: "Great Wolf",
			type: "Die",
			effects: [
				{ type: "Skill", modify: { skillPath: "Any General➞Stealthy", modifier: 1 } },
				{ type: "Skill", modify: { skillPath: "Any General➞Inconspicuous", modifier: 1 } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 2,
			description: "There is an odd and unsettling air about this wolf -something very old and frightening. Use this trait as a call-on for Intimidation.",
			name: "Fearsome Beast",
			stock: "Great Wolf",
			type: "Call-on",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Intimidation" } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 2,
			description: "The pelf of this wolf is glittering ice. Use this trait as a call-on for Stealthy when stalking the tundra and arctic wastes.",
			name: "Frost Coat",
			stock: "Great Wolf",
			type: "Call-on",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Stealthy", condition: "When stalking the tundra and arctic wastes." } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 4,
			description: "This wolf's coat shifts subtly from dark to light, from mottled to plain, depending on what land he stalks and haunts. Use this for a call-on for Stealthy in any terrain.",
			name: "Ghost Coat",
			stock: "Great Wolf",
			type: "Call-on",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Stealthy", condition: "In any terrain." } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 1,
			name: "Mangy Coat",
			stock: "Great Wolf",
			type: "Character"
		},
		{
			allowed: ["bwc"],
			cost: 5,
			description: "Some pups are born with the look of the Great Ancient about them. Such rare wolves are descendants from the Ancient, the first wolf who created the world. The packs believe such wolves are cursed and destined for a life of mayhem. This trait is required for using the skills Tongue of the Ancient One and Ancient Ways",
			name: "Mark of the Ancient",
			stock: "Great Wolf",
			type: "Die"
		},
		{
			allowed: ["bwc"],
			cost: 2,
			description: "The voice of this wolf is strong and clear. It easily pierces the dense woods and cuts through dampening fog. Use this trait as a call-on for Howling and Command.",
			name: "Formidable Bark",
			stock: "Great Wolf",
			type: "Call-on",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Command" } },
				{ type: "Skill", callon: { skillPath: "Great Wolf Special➞Howling" } }
			]
		},
		{
			allowed: ["bwc"],
			cost: 2,
			description: "Wolves and ravens have a special relationship. Not only do they aid one another on the hunt -ravens will circle a herd to mark it for wolves, and wolves will allow ravens to feed at their kills- they are also great friends. Wolves and ravens enjoy taunting each other and playing endless and dangerous games of tak. This trait grants either a free relationship with a raven or a 1D affiliation with a conspiracy of ravens.<br>This trait signifies a wolf who is especially fond of ravens and well though of by the birds. While the whole pack may play, he is the only pack member who can understand the quacks and squawks of raven speech.",
			name: "Raven Friend",
			stock: "Great Wolf",
			type: "Call-on"
			// TODO: Effect of this trait has an "OR" condition
		},
		{
			allowed: ["bwc"],
			cost: 2,
			description: "The fur of this wolf is perfectly suited to stalking in the shadows of the woods. Use this trait as a call-on for Stealthy when stalking the forests and valleys.",
			name: "Shadow Coat",
			stock: "Great Wolf",
			type: "Call-on",
			effects: [
				{ type: "Skill", callon: { skillPath: "Any General➞Stealthy", condition: "When stalking the forests and valleys." } }
			]
		}
	]
};
