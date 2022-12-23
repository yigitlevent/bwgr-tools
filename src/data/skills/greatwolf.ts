import { SkillCategory } from "./_skills";


export const GreatWolfSpecial: SkillCategory = {
	allowed: ["bwc", "msc"],
	name: "Great Wolf Special",
	skills: [
		{
			allowed: ["bwc", "msc"],
			description: "It is said that the Great Ancient spoke the true names of the water, loam, wind and prairie fire. Closely guarded, these powerful names have been passed from generation to generation of Great Wolves descended from the last wolf of the ancestral pack -Fell Ancients who bear the mark.",
			magical: true,
			name: "Ancient Ways",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Cage-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Begging is the Wolf's version of the Persuasion skill. This skill may be used as Persuasion in a Del of Wits between Great Wolves or their friends. When a submissive wolf wants something, whether it be food or permission, he must beg the dominant for it. Begging is not humiliating to a wolf, it is part of their nature. Sometimes the female dominant will even need to beg when she is nursing her pups - she begs the pack to bring them food.",
			magical: false,
			name: "Begging",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Carrying a rider on a journey and bearing him into combat are two very different skills. A wolf must be trained to modify his fighting style in order to coordinate with his rider and not roll him or throw him.",
			magical: false,
			name: "Combat Mount Training",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Will", "Power"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Martial"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Dog-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Elf-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Wolves can learn nearly anything. When trapped or caged, they quickly learn the mechanics of their captivity and devise a method of escape.",
			magical: false,
			name: "Escape Artist",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Perception", "Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Forest-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Wolves learn the habits and nature of their prey.",
			magical: false,
			name: "Hoof-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Wolves love to howl, and they do so for many reasons. It is the combination of Singing, Oratory and Conspicuous skills.",
			magical: false,
			name: "Howling",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Legion-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This wolf knows the history of the trees, the streams, the rocks and brush. He knows why the snow falls and why the sun rises. He understands that the sharp tooth of the wolf lengthens the stride of the hoofed ones. He comprehends, vaguely, the interconnectedness of all things. This skill can be used as a FoRK for nearly any other skill (except martial skills), in a similar fashion to the Astrology skill.",
			magical: false,
			name: "Nature of All Things",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Perception", "Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This is the delicate process of weaning pups off the teat and slowly introducing them to meat and forage. Also, this skill is used like Field Dressing.",
			magical: false,
			name: "Nursing",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Perception", "Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Old World-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Orc-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Wolves hunt for their prey in a different manner than those on two legs. Use the obstacles to determine how much prey a pack can bring down over the course of a week. The dominant is always the primary for this test. Last wolves, pups, elders and nursing dominants may not help in this test -only Hunters, Aunts, Uncles and Yearlings.",
			magical: false,
			name: "Pack Hunting",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Perception", "Speed"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This is crucial knowledge of the laws of the pack and what behavior is appropriate at what juncture.",
			magical: false,
			name: "Pack Etiquette",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Pack-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Path-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Poisons-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Pup-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This is the wolf's instructional skill. Good unlces and Aunts pass on the knowledge of the hunt and the traditions of the pack to the young pups. Use this skill as Instruction for teaching wolves younger than you.",
			magical: false,
			name: "Rearing",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Perception", "Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This training teaches a wolf how to subordinate itself and accept commands from a rider.",
			magical: false,
			name: "Rider Training",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Physical"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Rituals-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "River-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Orcs train wolves to fight savagely and wildly. Wolves with Sacage Attack have access to all of the martial maneuvers, including Lock and Strike when using their Crushing Jaws.",
			magical: false,
			name: "Savage Attack",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Agility", "Speed"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Wolves track in a slight different manner than Humans, Elves and Orcs -they rely on scent and sound in addition to sight.",
			magical: false,
			name: "Scent Tracking",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Scent-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Spirit Hunter-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Village-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "It is said that the Great Ancient whispered his secrets to his last pup before he passed on from this world. He taught his outcast and hated child to speak the true speech, how to make his words have power beyond understanding.<br>This skill is the equivalent of Sorcery. Great Wolves with the mark of the Ancient trait may use this skill to cast spells.",
			magical: true,
			name: "Tongue of the Ancient One",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This is the Spirit Hunter's history of the world. This skill acts as Ancient History.",
			magical: false,
			name: "Way of the First Hunter",
			noList: false,
			restriction: "Great Wolf only",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Wolf-wise",
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

export const GreatWolfSpiritHunterSong: SkillCategory = {
	allowed: ["bwc", "msc"],
	name: "Great Wolf Spirit Hunter Songs",
	skills: [
		{
			allowed: ["bwc", "msc"],
			description: "It is a matter of debate among the Spirit Hunters and the Elven Wanderers as to who taught whom to sing. The Great Wolves attest that the Elves learned to sing from listening to Great Grandfather howl. The Wanderers say otherwise -it was their creator who taught Grandfather how to howl in chord and vary his pitch./nRegardless of who is correct, this song is very similar to the Song of the Sword. It allows the Spirit Howler to summon ancient power into his jaws, transforming them into a spirit weapon, or worse.<br>Obstacles: Ob 1: Spirit Jaws, jaws become a spirit weapon (This is the most basit form of this howl. All subsequent forms count as Spirit Jaws in addition to the howled for power). Ob 2: Prenatural Jaws, extra successes add dice to the wolf's Brawling or Savage Attack skills. Ob 3: Fox-Luck: all Brawling, Savage Attack and Speed dice become open-ended. Ob 4: Jaws of Lightning, +1 to Reflexes for the duration of the combat. Ob 5: Avalanche, the wolf may double his dice on the Charge.<br>Duration: Exchanges equal to Will exponent.<br>Actions: 1x Obstacle",
			magical: true,
			name: "Ancestral Jaw",
			noList: false,
			restriction: "Great Wolves only",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This powerful and dangerous song allows the wolf to take on the traits of the very spirits he hunts. The danger in this howl is that it brings the wolf closer to joining Great Grandfather in the spirit realms. Grandfather's Song causes the Ancestral Tain to spread more quickly.<br>This is the most difficult song, and within it there are four separate tones: Silent Voice, Spirit Unseen, Celestial Sight and Spirit Nature.<br><br>Howl for Silent Voice<br>Obstacle: 2, Actions: 1, Duration: Hours equal to Will<br>While under the spell's power, the wolf may speak directly to the minds of those within his presence.<br><br>Howl for the Spirit Unseen<br>Obstacle: 3 or 5, Actions: 3, Duration: Hours equal to Speed<br>The Spirit Hunter disappears from mortal sight. This Ob 3 ability grants +1D to Stealthy plus additional advantage dice for each success over obstacle. The Ob 5 version of Spirit Unseen allows Stealthy to work on normal and magical sight and negates all forms of observation, imposing unskilled penalties on observers.<br><br>Howl for Celestial Sight<br>Obstacle: 4, Actions 4, Duration: Hours equal to Perception<br> The spirit Hunter sees as the spirit do. Combined with his Spirit Easrs and Spirit Nose traits, this puts the Spirit Hunter's senses entirely within the realm of the spirits. See the Celestial Sight trait in the Monstrous Trait list.<br><br>Howl for Spirit Nature<br>Obstacle: 7, Actions: 5, Duration: Hours equal to Forte<br>The wolf may walk as the spirits do. Time does not affect him so greatly, nor does gravity or other earthly bonds. Shadeshift the wolf's Speed one step to the right. Also the wolf cannot be burned by mortal fire or cold, and mortal weapons do not harm him.",
			magical: true,
			name: "Grandfather's Song",
			noList: false,
			restriction: "Great Wolves only",
			root: ["Ancestral Taint"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This ferocious and formidable bark comes from deep within the wolf. Channeling the essence of his snarls and barks, the wolf speaks as Great Grandfather once did. Roll the wolf's skill versus the Spirit's Strength. If the wolf wins the test, the spirit abjured and driven off. It will not return while the wolf remains in its domain. If used against a named spirit, the obstacle is equal to the victim's Will. Success means the creature must pass a Steel test.<br>If used against a creature of non-Spirit Nature, Primal Bark causes a Steel test. Test the skill against the obstacle equal to the victim's Will. Successes over the obstacle increase hesitation by one each. Any animal forced to hesitate from this bark will break and Run Screaming. Characters may choose their own fate as per standard Steel test results<br>The Primal Bark is impossibly loud and penetrating. It can be heard over a great distance -for dozens of miles on quiet night. The sound of it will summon forth any Spirit Hunters in the vicinity who will come to the aid of their brethren.<br>Duration: Instantaneous<br>Actions: 2",
			magical: true,
			name: "Primal Bark",
			noList: false,
			restriction: "Great Wolves only",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		}
	]
};
