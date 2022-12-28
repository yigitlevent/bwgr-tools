import { ResourceStock } from "./_resources";
import { Relationship, Reputation, Affiliation } from "./_social";


export const Elf: ResourceStock = {
	name: "Elf",
	allowed: ["bwg"],
	resources: [
		Relationship,
		Reputation,
		Affiliation,
		{
			name: "Run of the Mill Arms",
			allowed: ["bwg"],
			type: "Gear",
			cost: 5,
			modifiers: [
				["Spiked Pommel", "1/per"],
				["Weighted Pommel", "1/per"],
				["Beak Pommel", "1/per"]
			],
			description: "Use the stats for the equipment listed in the Human Lifepaths and run of the mill lists for this gear."
		},
		{
			name: "Run of the Mill Bow",
			allowed: ["bwg"],
			type: "Gear",
			cost: 5,
			modifiers: [
				["Bodkin Head", 1],
				["Leaf Head", 1],
				["Frog Crotch", 1],
				["Blunt Head", 1],
				["Barbed Tip", 1]
			],
			description: "Use the stats for the equipment listed in the Human Lifepaths and run of the mill lists for this gear."
		},
		{
			name: "Run of the Mill Armor",
			allowed: ["bwg"],
			type: "Gear",
			cost: [["Reinforced Leather", 3], ["Light Mail", 6], ["Heavy Mail", 10], ["Plated Mail", 20]],
			description: "Use the stats for the equipment listed in the Human Lifepaths and run of the mill lists for this gear."
		},
		{
			name: "Elven Armor",
			allowed: ["bwg"],
			type: "Gear",
			cost: [["Elven gambeson", 9], ["Elven reinforced leather", 20], ["Elven light mail", 30], ["Elven heavy mail", 40], ["Elven plated mail", 75]],
			description: "Elven Armor is superior quality armor. Also, there are no Clumsy Weight penalties for all, except plated mail. Elves may buy armor piecemeal as described in the Human Resources section."
		},
		{
			name: "Elven Arms",
			allowed: ["bwg"],
			type: "Gear",
			cost: 15,
			modifiers: [
				["Spiked Pommel", "3/per"],
				["Weighted Pommel", "3/per"],
				["Beak Pommel", "3/per"]
			],
			description: "Elven Arms are considered superior quality weapons. Players may purchase beaks, spikes and weights for their characters' weapons at +3 rps per modification, per weapon."
		},
		{
			name: "Elven Bow",
			allowed: ["bwg"],
			type: "Gear",
			cost: [
				["Requirements unfulfilled", 25],
				["Requirements fulfilled", 5]
			],
			modifiers: [
				["Leaf Head", 1],
				["Bodkin Head", 2]
			],
			description: "These are the weapons made using the Elven Bowcraft skill. Elven Bows are bigger than hunting bows, but not as big as the great bows of men. They provide 3D of range dice at extreme, and 3D at optimal. Maximum range is 250 paces. In the Fight rules, they have a Nock and Draw time of five actions.<br>When purchasing an Elven Bow, Elves may choose from these arrows:<br>Hunting Head: I: B4, M: B8, S: B11, VA 2, Free<br>Leaf Head: I: BS, M: B9, S: B12, VA 1, +1rp<br>Bodkin Head: I: B4, M: B7, S: B10, VA 3, +2rps<br>Elven characters who take four or fewer lifepaths and whose last lifepath is Elven Bowyer may take an Elven Bow for 5 rps."
		},
		{
			name: "Elven Cloak",
			allowed: ["bwg"],
			type: "Gear",
			cost: 30,
			description: "Elven Cloaks are also known as Gray Mantles. They are imbued with the Threne of the Chameleon and conceal Elven rangers who guard the fences of the hidden kingdoms of the Elves. Gray Mantles count as a 4D Threne of the Chameleon. If the character is using Stealthy and/or the actual Threne, he may add the cloak's dice to the skill or song when rolling to hide. In addition, Elven Cloaks are warm in winter, cool in summer, covering in rain and quick to dry."
		},
		{
			name: "Elven Steed",
			allowed: ["bwg"],
			type: "Gear",
			cost: 8,
			description: "Elven Steeds are swift in travel and steadfast in war. Pe: B3(4), Wi: B2, Ag: B3, Sp: B6, Po: B6, Fo: B6. Hea: B6, Ste: B6 , Ref: B3, MW: B12 (Tough). Hesitation: 7 (Determined), Stride: 13. Skills: Mounted Combat Training, Rider Training, Intimidation B3, Foraging B4. Traits: Good Bone, Fleet of Hoof, Obedient, Loyal, Tough, Brute, Determined, Long-Limbed, Keen Hearing, Hooved, Ungulate."
		},
		{
			name: "Elven Clothes",
			allowed: ["bwg"],
			type: "Gear",
			cost: 2
		},
		{
			name: "Elven Shoes",
			allowed: ["bwg"],
			type: "Gear",
			cost: 1
		},
		{
			name: "Elven Finery",
			allowed: ["bwg"],
			type: "Gear",
			cost: 5
		},
		{
			name: "Elven Rope",
			allowed: ["bwg"],
			type: "Gear",
			cost: 12,
			description: "Elven Rope is light and strong. It weighs half as much as its normal counterpart and holds twice as much for its thickness. Climbing, Knots and Rigging tests taken using Elven Rope may add +1D. It counts as tools for Knots and Climbing. Any Elf or Elf-friend may cue his rope to unknot and untie itself with a tug, nod or gesture."
		},
		{
			name: "Elven Bread",
			allowed: ["bwg"],
			type: "Gear",
			cost: 10,
			description: "This rare and cherished bread is nourishing and restorative. After it is eaten, it grants +3D to all Health tests taken for the day after it is eaten. One portion of Elven Bread will suffice as a meal for a day. 10 rps buys six portions."
		},
		{
			name: "Elven Mirrorwine",
			allowed: ["bwg"],
			type: "Gear",
			cost: 8,
			description: "Mirrorwine refreshes and restores those who taste it. Add two open-ended dice to the next Health test taken. 8 rps buys four draughts."
		},
		{
			name: "Starlight",
			allowed: ["bwg"],
			type: "Gear",
			cost: 50,
			description: "A bottle of starlight to illuminate the darkest times with the silver halo of the favored star. The Starlight is as bright as Mage Light with four successes over the obstacle. Counts as sunlight for creatures with Cold Black Blood or Enemy of the Sun traits."
		},
		{
			name: "Tome of Lore",
			allowed: ["bwg"],
			type: "Gear",
			cost: 20,
			description: "The tome of lore contains knowledge both prosaic and rare. It grants + 1D to all Elven academic skills, skill songs and appropriate wises."
		},
		{
			name: "Elven Instrument",
			allowed: ["bwg"],
			type: "Gear",
			cost: 6,
			description: "Elves are renowned for their music, both in song and instrument. Elven instruments —flutes, trumpets, lyres, etc.— grant +1D to the bearer 's musical instrument skill."
		},
		{
			name: "Traveling Gear",
			allowed: ["bwg"],
			type: "Gear",
			cost: 2,
			description: "This is all the necessary bits, odds and ends and what-no ts that are needed for survival on the road-candles, matches, flint and steel, a pocket knife, a rain cloak, a rain hat, a good sturdy rucksack, a thick leather belt, a money purse or wallet, a warm coat, etc. The exact choices are up to the player, but the GM has some say —no flamethrowers or Elven cloaks in traveling gear. Oh, yes, I almost forgot... don't forget to bring a good length of rope; you'll want one if you don't."
		},
		{
			name: "Personal Effects",
			allowed: ["bwg"],
			type: "Gear",
			cost: 1,
			description: "A player may purchase for his character personal effects of sentimental value: a lock of hair, a mirror, a book, a ring, a cane, a locket or any other similar item."
		},
		{
			name: "Skill Tools",
			allowed: ["bwg"],
			type: "Gear",
			cost: 9,
			description: "Many skills require tools. This resource can represent anything from medicine to books. If a skill is listed with 'Tools: Yes,' then a character must spend resource points on a toolkit in order to be able to adequately perform skill tests. Tests without tools (for skills that require them) are at a double obstacle penalty.<br>A toolkit that has finite supplies —like medicine for Herbalism— can run dry. Each use after the first, roll a d6. If a 1 comes up, the kit is empty. The character must make an Ob 2-5 Resources test to replenish it. The GM may set the obstacle depending on how rare the contents of the kit are. Ob 2 for peasant tools, Ob 4 for surgeon's tools, Ob 5 for sorcerous tools. Only one character can help you when you're using a toolkit."
		},
		{
			name: "Workshops",
			allowed: ["bwg"],
			type: "Property",
			cost: [["Elven Smithy", 50], ["Artisan's Shop", 60]],
			description: "Workshops are necessary to completely utilize Stonecraft, Smithcraft, Starcraft and Gemcraft skills-without one, the Elf may only undertake smaller projects (Ob 3 or lower). Also, Elven Workshops are required if the character will be building special 'Elven works'. Workshops count as property when factoring Resources."
		},
		{
			name: "Elven Ship",
			allowed: ["bwg"],
			type: "Property",
			cost: 80,
			description: "This is a beautiful, sleek and sturdy sea-going vessel. She has two masts and can accommodate a crew of about twenty. The crew is included so long as the player purchases a relationship with an Elf who acts as his pilot, navigator or first mate. Their exact abilities are determined via the I Need a Gang or Crew rules. A ship counts as property when factoring Resources."
		},
		{
			name: "Elven Land",
			allowed: ["bwg"],
			type: "Property",
			cost: [
				["Pastoral lands. This includes a single important terrain feature like a lake, a length of river, a hill or prairie and a modest but comfortable dwelling for the Elf's family.", 20],
				["A large country manor and land", 50],
				["A palace", 100],
				["Allows the Elf and his family to occupy a major terrain feature like a forest, bay or mountain.", 150],
				["A sumptuous apartment in the Citadel.", 25]
			],
			description: "Elves, though not as particular or land-hungry as Men and Dwarves, do lay some claims of ownership to certain tracts. Elven Land counts as property when factoring Resources."
		}
	]
};
