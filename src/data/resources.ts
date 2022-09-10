export interface Resource {
	name: string;
	allowed: Ruleset;
	type: "Gear" | "Property";
	description?: string;
	cost: number | [string, number][] | "various";
}

interface ResourceGroup {
	[key: string]: {
		name: string;
		allowed: Ruleset;
		resources: Resource[];
	};
}

export const Resources: ResourceGroup = {
	"Dwarf": {
		name: "Dwarf",
		allowed: "bwg",
		resources: [
			{
				name: "Shoddy Arms",
				allowed: "bwg",
				type: "Gear",
				cost: 5,
				description: "Any gear choice listed as 'shoddy' merely means the is not Dwarf-made. It counts as run of the mill gear and provides none of the bonuses of the more expensive Dwarven gear."
			},
			{
				name: "Dwarven Arms",
				allowed: "bwg",
				type: "Gear",
				cost: 20,
				description: "All Dwarven Arms are considered superior quality items. In addition, they add a +1 D balance die to the skill of the wielder. Traditionally, Dwarves use axes and hammers, throwing axes and knives. But swords and maces are acceptable as well. Players may purchase beaks, spikes and weights for their character's weapons at +4 rps per modification, per weapon."
			},
			{
				name: "Shoddy Crossbow",
				allowed: "bwg",
				type: "Gear",
				cost: 6,
				description: "Any gear choice listed as 'shoddy' merely means the is not Dwarf-made. It counts as run of the mill gear and provides none of the bonuses of the more expensive Dwarven gear."
			},
			{
				name: "Dwarven Arbalest",
				allowed: "bwg",
				type: "Gear",
				cost: 20,
				description: "The arbalest is a special Dwarven make of the traditional crossbow. It can fire rocks or bolts. It counts as a crossbow but only requires 10 actions to load when firing bolts, or 6 actions when firing rocks. These devices are so well-made they add a +1D balance die to the wielder 's skill.<br>Rocks IMS: I B3, M B6, S B9 VA-. When firing rocks, the arbalest counts as an arquebus for Range and Cover and DoF rules.<br>It can fire bolts using the range and damage of a crossbow."
			},
			{
				name: "Dwarven-made Armor",
				allowed: "bwg",
				type: "Gear",
				cost: [["Light Mail", 9], ["Heavy Mail", 10], ["Plated Mail", 20]],
				description: "This is run of the mill armor made by Dwarves. It obeys the standard rules for armor, except that the first '1' rolled on an armor test per piece may be ignored. After that, it obeys the normal rules for armor failure. Once the 1 is gone, the special ability is gone. Lastly, Dwarven-made armor does not cause a Clumsy Weight Speed penalty (no obstacle penalty or -1D)."
			},
			{
				name: "Dwarven Armor",
				allowed: "bwg",
				type: "Gear",
				cost: 100,
				description: "This is the most precious of all armors. Dwarven mail covers the bearer in fine and supple chainmail. It gives no clumsy weight penalties except for gauntlets and penalties for Stealthy. The armor counts as gray shade heavy mail from head to hand to boot. It is, of course, superior quality. Dwarven mail counts as property when factoring Resources."
			},
			{
				name: "Forge Mask",
				allowed: "bwg",
				type: "Gear",
				cost: 40,
				description: "This is a highly coveted piece of Dwarven craftsmanship. Forge Masks are constructed under great secrecy using the most complex and obscure Dwarven forging techniques. Designed to withstand the extreme heat of the Dwarven forge and errant heavy blows of the smithing process, they are requisite protection for every Artificer and Mask Bearer, as well as a sign of rank and skill. The mask may also be worn as a piece of armor added onto another suit and counts as 4D of gray shade armor for the face and head (with only a +1 Ob clumsy weight penalty). The mask is highly resistant to heat and flame. It allows an armor test against flames directed at the head. Also, the mask can cause an opponent to make a Steel test at the time of the wearer's choosing. This fear effect only works once per target, costs one action to activate and can only be us ed on a target face to face with the Mask Bearer."
			},
			{
				name: "Dwarven Shield",
				allowed: "bwg",
				type: "Gear",
				cost: 20,
				description: "This magnificent device counts as a 3D gray shade superior quality shield. Against heat and flame, the shield counts as magical armor. The bearer of a Dwarven shield may make an armor test (3D) against any incoming flame attacks. Black s hade fire has no VA, gray shade is VA 1, and white shade is VA 2. Use these VAs instead of any spell VA . If the shield bearer is wearing a Forge Mask, he may add +2D to this armor test. When used as a weapon, the shield's weapon shade is that of its bearer 's Power."
			},
			{
				name: "Riding Mount or Pack Animal",
				allowed: "bwg",
				type: "Gear",
				cost: 8,
				description: "Dwarves tend to ride ponies or mules."
			},
			{
				name: "Clothes",
				allowed: "bwg",
				type: "Gear",
				cost: 1
			},
			{
				name: "Traveling Gear",
				allowed: "bwg",
				type: "Gear",
				cost: 1,
				description: "This is all the necessary bits, odds and ends and what-no ts that are needed for survival on the road-candles, matches, flint and steel, a pocket knife, a rain cloak, a rain hat, a good sturdy rucksack, a thick leather belt, a money purse or wallet, a warm coat, etc. The exact choices are up to the player, but th e GM has some say —no flamethrowers or Elven cloaks in traveling gear. Oh, yes, I almost forgot... don't forget to bring a good length of rope; you'll want one if you don't."
			},
			{
				name: "Sturdy Shoes",
				allowed: "bwg",
				type: "Gear",
				cost: 1
			},
			{
				name: "Finery",
				allowed: "bwg",
				type: "Gear",
				cost: 5
			},
			{
				name: "Chronicles",
				allowed: "bwg",
				type: "Gear",
				cost: 15,
				description: "Chronicles add +1D to any history type test about Dwarves."
			},
			{
				name: "Keg o' Nog",
				allowed: "bwg",
				type: "Gear",
				cost: 20,
				description: "A Keg o' Nog provides the Dwarf with 12 tall mugfuls of the fabled drink. Each mug is worth +1D to one Health test, but +1 Ob to social skill tests for the scene. (Only one bonus/penalty is in effect, no matter how much of the brew is quaffed by Dwarves.) One sip is enough to get any non-Dwarf drunk."
			},
			{
				name: "Shoddy Tools",
				allowed: "bwg",
				type: "Gear",
				cost: 5,
				description: "Any gear choice listed as 'shoddy' merely means the stuff is not Dwarf-made. It counts as run of the mill gear and provides none of the bonuses of the more expensive Dwarven gear."
			},
			{
				name: "Dwarven Tools",
				allowed: "bwg",
				type: "Gear",
				cost: 10,
				description: "Every Master Artificer builds and maintain s his own tools. It is an ancient and proud art passed down from master to student: a vital tradition, for the tools are the Artificer's fingers and hands in the forge. Dwarven Tools (of any type) provide the user with +1D of equipment dice when used with the appropriate skill."
			},
			{
				name: "Property",
				allowed: "bwg",
				type: "Property",
				cost: [["A small house", 10], ["Large house", 15], ["A Dwarven hall (a large apartment in a hold)", 30], ["A Graybeard's hold*", 40], ["An Engineer's hold*", 45], ["A Master Artificer's hold*", 60], ["A Warden's hold*", 75], ["A High Captain's hold*", 90], ["A Prince's hold*", 105]],
				description: "These all count as property when factoring Resources. *Only Dwarves of the listed rank or higher may take this kind of property."
			},
			{
				name: "Workshop",
				allowed: "bwg",
				type: "Property",
				cost: 60,
				description: "Workshops are necessary to completely utilize Dwarven Artificer and Dwarven craftsman skills-without one, the Dwarf may only undertake smaller projects (Ob 3 tests or lower). Also, Dwarven Workshops are required if the character will be building special Dwarven items like masks, shields, arms or mail. Dwarven Workshops include (portable) skill tool kits as part of their cost (see below). Workshops count as property when factoring Resources."
			},
			{
				name: "Carts and Baggage",
				allowed: "bwg",
				type: "Property",
				description: "Guilders bring th eir wares down from the holds in great lumbering carts. Carts and Baggage represents trade and salable go ods for Guilder Dwarves . They count as property when factoring resources and may be purc ha sed multiple times for multiple bonuses.",
				cost: 15
			}
		]
	},
	"Elf": {
		name: "Elf",
		allowed: "bwg",
		resources: [
			{
				name: "Run of the Mill Weapons and Armor",
				allowed: "bwg",
				type: "Gear",
				cost: [["Bow", 5], ["Arms", 5], ["Reinforced Leather", 3], ["Light Mail", 6], ["Heavy Mail", 10], ["Plated Mail", 20]],
				description: "Use the stats for the equipment listed in the Human Lifepaths and run of the mill lists for this gear."
			},
			{
				name: "Elven Armor",
				allowed: "bwg",
				type: "Gear",
				cost: [["Elven gambeson", 9], ["Elven reinforced leather", 20], ["Elven light mail", 30], ["Elven heavy mail", 40], ["Elven plated mail", 75]],
				description: "Elven Armor is superior quality armor. Also, there are no Clumsy Weight penalties for all, except plated mail. Elves may buy armor piecemeal as described in the Human Resources section."
			},
			{
				name: "Elven Arms",
				allowed: "bwg",
				type: "Gear",
				cost: 15,
				description: "Elven Arms are considered superior quality weapons. Players may purchase beaks, spikes and weights for their characters' weapons at +3 rps per modification, per weapon."
			},
			{
				name: "Elven Bow",
				allowed: "bwg",
				type: "Gear",
				cost: 25,
				description: "These are the weapons made using the Elven Bowcraft skill. Elven Bows are bigger than hunting bows, but not as big as the great bows of men. Th ey provide 3D of range dice at extreme, and 3D at optimal. Maximum range is 250 paces. In the Fight rules, they have a Nock and Draw time of five actions.<br>When purchasing an Elven Bow, Elves may choose from these arrows:<br>Hunting Head: I: B4, M: B8, S: B11, VA 2, Free<br>Leaf Head: I: BS, M: B9, S: B12, VA 1, +1 rp<br>Bodkin: I: B4, M: B7, S: B10, VA 3, +2 rps<br>Elven characters who take four or fewer lifepaths and whose last lifepath is Elven Bowyer may take an Elven Bow for 5 rps."
			},
			{
				name: "Elven Cloak",
				allowed: "bwg",
				type: "Gear",
				cost: 30,
				description: "Elven Cloaks are also known as Gray Mantles. They are imbued with the Threne of the Chameleon and conceal Elven rangers who guard the fences of the hidden kingdoms of the Elves. Gray Mantles count as a 4D Threne of the Chameleon. If the character is using Stealthy and/or the actual Threne, he may add the cloak's dice to the skill or song when rolling to hide. In addition, Elven Cloaks are warm in winter, cool in summer, covering in rain and quick to dry."
			},
			{
				name: "Elven Steed",
				allowed: "bwg",
				type: "Gear",
				cost: 8,
				description: "Elven Steeds are swift in travel and steadfast in war. Pe: B3(4), Wi: B2, Ag: B3, Sp: B6, Po: B6, Fo: B6. Hea: B6, Ste: B6 , Ref: B3, MW: B12 (Tough). Hesitation: 7 (Determined), Stride: 13. Skills: Mounted Combat Training, Rider Training, Intimidation B3, Foraging B4. Traits: Good Bone, Fleet of Hoof, Obedient, Loyal, Tough, Brute, Determined, Long-Limbed, Keen Hearing, Hooved, Ungulate."
			},
			{
				name: "Elven Clothes",
				allowed: "bwg",
				type: "Gear",
				cost: 2
			},
			{
				name: "Elven Shoes",
				allowed: "bwg",
				type: "Gear",
				cost: 1
			},
			{
				name: "Elven Finery",
				allowed: "bwg",
				type: "Gear",
				cost: 5
			},
			{
				name: "Elven Rope",
				allowed: "bwg",
				type: "Gear",
				cost: 12,
				description: "Elven Rope is light and strong. It weighs half as much as its normal counterpart and holds twice as much for its thickness. Climbing, Knots and Rigging tests taken using Elven Rope may add +1D. It counts as tools for Knots and Climbing. Any Elf or Elf-friend may cue his rope to unknot and untie itself with a tug, nod or gesture."
			},
			{
				name: "Elven Bread",
				allowed: "bwg",
				type: "Gear",
				cost: 10,
				description: "This rare and cherished bread is nourishing and restorative. After it is eaten, it grants +3D to all Health tests taken for the day after it is eaten. One portion of Elven Bread will suffice as a meal for a day. 10 rps buys six portions."
			},
			{
				name: "Elven Mirrorwine",
				allowed: "bwg",
				type: "Gear",
				cost: 8,
				description: "Mirrorwine refreshes and restores those who taste it. Add two open-ended dice to the next Health test taken. 8 rps buys four draughts."
			},
			{
				name: "Starlight",
				allowed: "bwg",
				type: "Gear",
				cost: 50,
				description: "A bottle of starlight to illuminate the darkest times with the silver halo of the favored star. The Starlight is as bright as Mage Light with four successes over the obstacle. Counts as sunlight for creatures with Cold Black Blood or Enemy of the Sun traits."
			},
			{
				name: "Tome of Lore",
				allowed: "bwg",
				type: "Gear",
				cost: 20,
				description: "The tome of lore contains knowledge both prosaic and rare. It grants + 1D to all Elven academic skills, skill songs and appropriate wises."
			},
			{
				name: "Elven Instrument",
				allowed: "bwg",
				type: "Gear",
				cost: 6,
				description: "Elves are renowned for their music, both in song and instrument. Elven instruments —flutes, trumpets, lyres, etc.— grant +1D to the bearer 's musical instrument skill."
			},
			{
				name: "Traveling Gear",
				allowed: "bwg",
				type: "Gear",
				cost: 2,
				description: "This is all the necessary bits, odds and ends and what-no ts that are needed for survival on the road-candles, matches, flint and steel, a pocket knife, a rain cloak, a rain hat, a good sturdy rucksack, a thick leather belt, a money purse or wallet, a warm coat, etc. The exact choices are up to the player, but th e GM has some say —no flamethrowers or Elven cloaks in traveling gear. Oh, yes, I almost forgot... don't forget to bring a good length of rope; you'll want one if you don't."
			},
			{
				name: "Personal Effects",
				allowed: "bwg",
				type: "Gear",
				cost: 1,
				description: "A player may purchase for his character personal effects of sentimental value: a lock of hair, a mirror, a book, a ring, a cane, a locket or any other similar item."
			},
			{
				name: "Skill Tools",
				allowed: "bwg",
				type: "Gear",
				cost: 9,
				description: "Many skills require tools. This resource can represent anything from medicine to books. If a skill is listed with 'Tools: Yes,' then a character must spend resource points on a toolkit in order to be able to adequately perform skill tests. Tests without tools (for skills that require them) are at a double obstacle penalty.<br>A toolkit that has finite supplies —like medicine for Herbalism— can run dry. Each use after the first, roll a d6. If a 1 comes up, the kit is empty. The character must make an Ob 2-5 Resources test to replenish it. The GM may set the obstacle depending on how rare the contents of the kit are. Ob 2 for peasant tools, Ob 4 for surgeon's tools, Ob 5 for sorcerous tools. Only one character can help you when you're using a toolkit."
			},
			{
				name: "Workshops",
				allowed: "bwg",
				type: "Property",
				cost: [["Elven Smithy", 50], ["Artisan's Shop", 60]],
				description: "Workshops are necessary to completely utilize Stonecraft, Smithcraft, Starcraft and Gemcraft skills-without one, the Elf may only undertake smaller projects (Ob 3 or lower). Also, Elven Workshops are required if the character will be building special 'Elven works'. Workshops count as property when factoring Resources."
			},
			{
				name: "Elven Ship",
				allowed: "bwg",
				type: "Property",
				cost: 80,
				description: "This is a beautiful, sleek and sturdy sea-going vessel. She has two masts and can accommodate a crew of about twenty. The crew is included so long as the player purchases a relationship with an Elf who acts as his pilot, navigator or first mate. Their exact abilities are determined via the I Need a Gang or Crew rules. A ship counts as property when factoring Resources."
			},
			{
				name: "Elven Land",
				allowed: "bwg",
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
	},
	"Dark Elf": {
		name: "Dark Elf",
		allowed: "bwc",
		resources: []
	},
	"Human": {
		name: "Human",
		allowed: "bwg",
		resources: [
			{
				name: "Arms",
				allowed: "bwg",
				type: "Gear",
				cost: [
					["Poor Quality Arms", 3],
					["Run of the Mill Quality Arms", 5],
					["Superior Quality Arms", 20]
				],
				description: "Arms covers the necessary hand weaponry to suit a character's idiom. Arms for a knight would consist of a sword, lance and dagger. For a foot soldier, perhaps an axe and spear. Whatever it is, just take what you need. Players may purchase beaks, spikes and weights for their characters' weapons at + 1 rp per modification per weapon, +4 rps per modification per weapon of superior quality.<br>Poor Quality Arms - sing poor quality weapon incurs a +1 Ob penalty to all combat tests using the weapon.<br>Run of the Mill Quality Arms - Use run of the mill stats for weapons<br>Superior Quality Arms - Use the superior quality weapon stats."
			},
			{
				name: "Missiles",
				allowed: "bwg",
				type: "Gear",
				cost: [
					["Throwing weapons like knives or javelins", 3],
					["Hunting bow", 5],
					["Great bow", 10],
					["Crossbow", 7],
					["Heavy crossbow", 12],
					["Pistol", 15],
					["Arquebus", 20]
				],
				description: "Included in the costs of these weapons are enough missiles to adequately outfit the character. Special arrowheads are not included and cost extra resource points. They cost 1 rp per special head type-take as many of each head as you like. Rules for special arrowheads are given in the Weapon Appendix.<br>Poor Quality Missiles - Half resource points cost rounded up. Poor quality missiles are + 1 Ob to hit.<br>Superior Quality Missiles- 3x rps cost. Superior quality missile weapons grant the character a +1D bonus balance die. This is added to his skill every time he takes a shot."
			},
			{
				name: "Armor",
				allowed: "bwg",
				type: "Gear",
				cost: [
					["Gambeson", 3],
					["Reinforced leather", 6],
					["Light mail", 10],
					["Heavy mail", 15],
					["Plated mail", 20],
					["Full plated mail", 50]
				],
				description: "When you buy armor, you buy the whole suit-helmet, arms, chest and legs. The player may choose individual pieces if he likes. A helmet or br eastplate costs half th e full suit. Grea ves or leggin gs cost a third of the full price. Round up any fractional costs. Shields may be included in an armor kit at no extra cost.<br>Poor Quality Armor - Half of th e run of th e mill cost rounded up. This armor falls apart; all 1s count for losing armor dice.<br>Superior Quality Armor - 4x cost of a full suit. Only the first 1 counts, which is rerolled; if that die comes up a 1 again, an armor die is lost."
			},
			{
				name: "Riding Mount or Pack Animal",
				allowed: "bwg",
				type: "Gear",
				cost: 5,
				description: "A horse, pony, camel and so forth can be bought with this choice. Basic riding horse stats follow: Stats: Pe: B3(4), Wi: B2, Ag: B2, Sp: B6, Po: B6, Fo: B6. Attributes: He: B4, St: B3, Re: B4 , MW: B12. Hesitation: 8. Skills: Rider Training, Foraging B2. Traits: Gelded, Docile, Obedient, Proud, Long-Limbed, Keen Hearing, Hooved, Ungulate. Stride: 12."
			},
			{
				name: "Warhorse (Courser)",
				allowed: "bwg",
				type: "Gear",
				cost: 12,
				description: "A warhorse is trained to carry its master into battle. Basic warhorse stats: Pe: B3(4), Wi: B2, Ag: B4, Sp: B6, Po: B7, Fo: B7. Attributes: He: B5, St: B7, Re: B4, MW: B13. Hesitation: 5 (Fearless and Determined). Skills: Rider Training, Mounted Combat Training, Armor Training, Formation Fighting Training, Intimidation B2, Brawling B3, Foraging B2. Traits: Level-Headed, Loyal, Determined, Fearless, Aggressive, Long-Limbed, Keen Hearing, Hooved, Ungulate. Stride : 12."
			},
			{
				name: "Clothes",
				allowed: "bwg",
				type: "Gear",
				cost: 1,
				description: "This resource purchase includes all of the clothing a character would need for everyday life in his station. It is not just one outfit. Like the Arms purchase, Clothing allows the player to take what he needs to trick out his character (short of finery)."
			},
			{
				name: "Traveling Gear",
				allowed: "bwg",
				type: "Gear",
				cost: 1,
				description: "This is all the necessary bits, odds and ends and what-no ts that are needed for survival on the road-candles, matches, flint and steel, a pocket knife, a rain cloak, a rain hat, a good sturdy rucksack, a thick leather belt, a money purse or wallet, a warm coat, etc. The exact choices are up to the player, but th e GM has some say —no flamethrowers or Elven cloaks in traveling gear. Oh, yes, I almost forgot... don't forget to bring a good length of rope; you'll want one if you don't."
			},
			{
				name: "Shoes",
				allowed: "bwg",
				type: "Gear",
				cost: 1,
				description: "Shoes"
			},
			{
				name: "Personal Effects",
				allowed: "bwg",
				type: "Gear",
				cost: 1,
				description: "A player may purchase for his character personal effects of sentimental value: a religious trinket, a mirror, a book, a ring, a cane, a locket or any other similar item."
			},
			{
				name: "Finery",
				allowed: "bwg",
				type: "Gear",
				cost: 5,
				description: "Finery covers specialty clothing and expensive items that one would wear either on special occasions or when trying to make a point: courtly regalia for nobles, vestments for priests, shining robes for mages, etc. Like clothing, this purchase includes a whole wardrobe, not just a single outfit. Take as much or as little as you like. Improper dress imposes obstacle penalties to Inconspicuous and Etiquette tests among others"
			},
			{
				name: "Cash",
				allowed: "bwg",
				type: "Gear",
				cost: 6,
				description: "A player may start with a pocketful of cash. This grants 1D of cash that can be used as per the Resources rules. Once used, the cash is expended."
			},
			{
				name: "Skill Toolkits",
				allowed: "bwg",
				type: "Gear",
				cost: 8,
				description: "Many skills require tools. This resource can represent anything from medicine to books. If a skill is listed with 'Tools: Yes,' then a character must spend resource points on a toolkit in order to be able to adequately perform skill tests. Tests without tools (for skills that require them) are at a double obstacle penalty.<br>A toolkit that has finite supplies —like medicine for Herbalism— can run dry. Each use after the first, roll a d6. If a 1 comes up, the kit is empty. The character must make an Ob 2-5 Resources test to replenish it. The GM may set the obstacle depending on how rare the contents of the kit are. Ob 2 for peasant tools, Ob 4 for surgeon's tools, Ob 5 for sorcerous tools. Only one character can help you when you're using a toolkit."
			},
			{
				name: "Workshop",
				allowed: "bwg",
				type: "Property",
				cost: 20,
				description: "A workshop is just a big toolkit. It is used for artisan and craftsman skill tests that require more than just simple tools. Purchasing this gives the character an appropriate room/building/tower to house the workshop. Workshops allow for more than one character to help on a skill test. This counts as property when factoring resources."
			},
			{
				name: "Companion Animal",
				allowed: "bwg",
				type: "Gear",
				cost: 3,
				description: "Some players may wish to take a dog, cat or falcon as an accoutrement to their character. Stats are provided for these beasties in the Creature Codex PDF, but they are really there more for show than for stealing the spotlight in an adventure."
			},
			{
				name: "Herd of Animals",
				allowed: "bwg",
				type: "Property",
				cost: 20,
				description: "Characters with the Animal Husbandry skill, or the Master of Horses, Merchant or Magnate lifepath, may take an appropriate herd of animals. This purchase counts as property when factoring resources."
			},
			{
				name: "Rent",
				allowed: "bwg",
				type: "Property",
				cost: 5,
				description: "Characters who cannot afford to own property live on leased land or rented houses/apartments. It's a common condition of the age. This purchase gives the character a place to live and counts as an Ob 2 Resources maintenan ce test. Paying rent counts as property when factoring Resources."
			},
			{
				name: "Property",
				allowed: "bwg",
				type: "Property",
				cost: [
					["A leaky shack", 1],
					["A small cottage", 3],
					["A house or 'cottage industry' like a weaver", 10],
					["A villa or a farm or a knight's fee", 15],
					["A small business ", 20],
					["Moderate-sized business", 30],
					["Manor or estate, an urban hotel*", 40],
					["Well-paid position (like mayor)*", 45],
					["Successful small business, a large business, a keep*", 60],
					["A fortress or moderat e-s iz ed estate*", 75],
					["A castle with attendant town, a large estate*", 90],
					["A palace or government position in a prosperous town*", 105],
					["Rowboat or skiff", 5],
					["Longboat", 10],
					["Junk", 15],
					["Felucca", 30],
					["Carrack", 60],
					["Caravel", 75],
					["Treasure ship", 105]
				],
				description: "Property counts as property when factoring Resources.<br>*Note that only Noble Born chara cters or characters with the Minister, Town Official, Merchant, Magnate, Steward, Master of Horse, Master of Hounds, Bailiff, Justiciar, Coroner, Constable, Treasurer, Bishop or Abbot LPs may spend more than 40 rps on property. Other characters simply may not own that degree of property (unless otherwi sespecified). The property purchase comes with appropriate staff, buildings and accoutrements. It does not provide the character with other free purchases from the Resources list."
			},
			{
				name: "Spells",
				allowed: "bwg",
				type: "Gear",
				cost: "various",
				description: "Starting sorcerer characters purchase their spells with resource points. Resource point costs are provided with each spell. But in case yo u n ee d to price your own spells, the costs are as follows: The resource point cost for each spe ll is 2 rps for every point of obstacle. If the spell is li sted with a '^', the cost is 4 rps per obstacle point. If the obstacle is listed as a 'range', price the spell using the obstacle in the middle of the variable range. For example, if a spell obstacle is 1-10, price th e spell as an Ob 5 spell. If the spell Obstacle is based on a stat , price the spell based on a stat of 5 plus the cost of any base obstacle."
			}
		]
	},
	"Orc": {
		name: "Orc",
		allowed: "bwg",
		resources: []
	},
	"Roden": {
		name: "Roden",
		allowed: "bwg",
		resources: []
	},
	"Troll": {
		name: "Troll",
		allowed: "bwg",
		resources: []
	},
	"Great Wolf": {
		name: "Great Wolf",
		allowed: "bwg",
		resources: []
	}
};
