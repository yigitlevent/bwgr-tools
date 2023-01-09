import { ResourceStock } from "./_resources";
import { Relationship, Reputation, Affiliation } from "./_social";
import { SorcerySpells, PracticalMagicSchools, SpiritBindingDomainBindingLevels, SpiritBindingSpiritMarkLevels, SummoningAffiliatedOrderLevels } from "./_magical";


export const Human: ResourceStock = {
	name: "Human",
	allowed: ["bwgr"],
	resources: [
		Relationship,
		Reputation,
		Affiliation,
		{
			name: "Arms",
			allowed: ["bwgr"],
			type: "Gear",
			cost: [
				["Poor Quality Arms", 3],
				["Run of the Mill Quality Arms", 5]
			],
			modifiers: [
				["Spiked Pommel", "1/per"],
				["Weighted Pommel", "1/per"],
				["Beak Pommel", "1/per"]
			],
			description: "Arms covers the necessary hand weaponry to suit a character's idiom. Arms for a knight would consist of a sword, lance and dagger. For a foot soldier, perhaps an axe and spear. Whatever it is, just take what you need. Players may purchase beaks, spikes and weights for their characters' weapons at +1 rp per modification per weapon.<br>Poor Quality Arms - Using poor quality weapon incurs a +1 Ob penalty to all combat tests using the weapon.<br>Run of the Mill Quality Arms - Use run of the mill stats for weapons"
		},
		{
			name: "Superior Arms",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 20,
			modifiers: [
				["Spiked Pommel", "4/per"],
				["Weighted Pommel", "4/per"],
				["Beak Pommel", "4/per"]
			],
			description: "Arms covers the necessary hand weaponry to suit a character's idiom. Arms for a knight would consist of a sword, lance and dagger. For a foot soldier, perhaps an axe and spear. Whatever it is, just take what you need. Players may purchase beaks, spikes and weights for their characters' weapons at +4 rps per modification per weapon of superior quality.<br>Superior Quality Arms - Use the superior quality weapon stats."
		},
		{
			name: "Poor Missiles",
			allowed: ["bwgr"],
			type: "Gear",
			cost: [
				["Throwing weapons like knives or javelins", 2],
				["Hunting bow", 3],
				["Great bow", 5],
				["Crossbow", 4],
				["Heavy crossbow", 6],
				["Pistol", 8],
				["Arquebus", 10]
			],
			modifiers: [
				["Hunting Head (Bow)", 1],
				["Bodkin Head (Bow)", 1],
				["Leaf Head (Bow)", 1],
				["Frog Crotch (Bow)", 1],
				["Blunt Head (Bow)", 1],
				["Barbed Tip (Bow)", 1],
				["Helmeted (Crossbow)", 1],
				["Mallet Head (Crossbow)", 1],
				["Fisted Bolt (Crossbow)", 1],
				["Spear Tip (Crossbow)", 1]
			],
			description: "Included in the costs of these weapons are enough missiles to adequately outfit the character. Special arrowheads are not included and cost extra resource points. They cost 1 rp per special head type-take as many of each head as you like. Rules for special arrowheads are given in the Weapon Appendix.<br>Poor Quality Missiles - Half resource points cost rounded up. Poor quality missiles are +1 Ob to hit."
		},
		{
			name: "Run of the Mill Missiles",
			allowed: ["bwgr"],
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
			modifiers: [
				["Hunting Head (Bow)", 1],
				["Bodkin Head (Bow)", 1],
				["Leaf Head (Bow)", 1],
				["Frog Crotch (Bow)", 1],
				["Blunt Head (Bow)", 1],
				["Barbed Tip (Bow)", 1],
				["Helmeted (Crossbow)", 1],
				["Mallet Head (Crossbow)", 1],
				["Fisted Bolt (Crossbow)", 1],
				["Spear Tip (Crossbow)", 1]
			],
			description: "Included in the costs of these weapons are enough missiles to adequately outfit the character. Special arrowheads are not included and cost extra resource points. They cost 1 rp per special head type-take as many of each head as you like. Rules for special arrowheads are given in the Weapon Appendix."
		},
		{
			name: "Superior Missiles",
			allowed: ["bwgr"],
			type: "Gear",
			cost: [
				["Throwing weapons like knives or javelins", 9],
				["Hunting bow", 15],
				["Great bow", 30],
				["Crossbow", 21],
				["Heavy crossbow", 36],
				["Pistol", 45],
				["Arquebus", 60]
			],
			modifiers: [
				["Hunting Head (Bow)", 1],
				["Bodkin Head (Bow)", 1],
				["Leaf Head (Bow)", 1],
				["Frog Crotch (Bow)", 1],
				["Blunt Head (Bow)", 1],
				["Barbed Tip (Bow)", 1],
				["Helmeted (Crossbow)", 1],
				["Mallet Head (Crossbow)", 1],
				["Fisted Bolt (Crossbow)", 1],
				["Spear Tip (Crossbow)", 1]
			],
			description: "Included in the costs of these weapons are enough missiles to adequately outfit the character. Special arrowheads are not included and cost extra resource points. They cost 1 rp per special head type-take as many of each head as you like. Rules for special arrowheads are given in the Weapon Appendix.<br>Superior Quality Missiles- 3x rps cost. Superior quality missile weapons grant the character a +1D bonus balance die. This is added to his skill every time he takes a shot."
		},
		{
			name: "Poor Quality Armor",
			allowed: ["bwgr"],
			type: "Gear",
			cost: [
				["Gambeson", 2],
				["Reinforced leather", 3],
				["Light mail", 5],
				["Heavy mail", 8],
				["Plated mail", 10],
				["Full plated mail", 25]
			],
			description: "When you buy armor, you buy the whole suit-helmet, arms, chest and legs. The player may choose individual pieces if he likes. A helmet or br eastplate costs half the full suit. Greaves or leggings cost a third of the full price. Round up any fractional costs. Shields may be included in an armor kit at no extra cost.<br>Poor Quality Armor - This armor falls apart; all 1s count for losing armor dice."
		},
		{
			name: "Run of the Mill Armor",
			allowed: ["bwgr"],
			type: "Gear",
			cost: [
				["Gambeson", 3],
				["Reinforced leather", 6],
				["Light mail", 10],
				["Heavy mail", 15],
				["Plated mail", 20],
				["Full plated mail", 50]
			],
			description: "When you buy armor, you buy the whole suit-helmet, arms, chest and legs. The player may choose individual pieces if he likes. A helmet or br eastplate costs half the full suit. Greaves or leggings cost a third of the full price. Round up any fractional costs. Shields may be included in an armor kit at no extra cost."
		},
		{
			name: "Superior Quality Armor",
			allowed: ["bwgr"],
			type: "Gear",
			cost: [
				["Gambeson", 12],
				["Reinforced leather", 24],
				["Light mail", 40],
				["Heavy mail", 60],
				["Plated mail", 80],
				["Full plated mail", 200]
			],
			description: "When you buy armor, you buy the whole suit-helmet, arms, chest and legs. The player may choose individual pieces if he likes. A helmet or br eastplate costs half the full suit. Greaves or leggings cost a third of the full price. Round up any fractional costs. Shields may be included in an armor kit at no extra cost.<br>Superior Quality Armor - Only the first 1 counts, which is rerolled; if that die comes up a 1 again, an armor die is lost."
		},
		{
			name: "Riding Mount or Pack Animal",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 5,
			description: "A horse, pony, camel and so forth can be bought with this choice. Basic riding horse stats follow: Stats: Pe: B3(4), Wi: B2, Ag: B2, Sp: B6, Po: B6, Fo: B6. Attributes: He: B4, St: B3, Re: B4 , MW: B12. Hesitation: 8. Skills: Rider Training, Foraging B2. Traits: Gelded, Docile, Obedient, Proud, Long-Limbed, Keen Hearing, Hooved, Ungulate. Stride: 12."
		},
		{
			name: "Warhorse (Courser)",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 12,
			description: "A warhorse is trained to carry its master into battle. Basic warhorse stats: Pe: B3(4), Wi: B2, Ag: B4, Sp: B6, Po: B7, Fo: B7. Attributes: He: B5, St: B7, Re: B4, MW: B13. Hesitation: 5 (Fearless and Determined). Skills: Rider Training, Mounted Combat Training, Armor Training, Formation Fighting Training, Intimidation B2, Brawling B3, Foraging B2. Traits: Level-Headed, Loyal, Determined, Fearless, Aggressive, Long-Limbed, Keen Hearing, Hooved, Ungulate. Stride : 12."
		},
		{
			name: "Clothes",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 1,
			description: "This resource purchase includes all of the clothing a character would need for everyday life in his station. It is not just one outfit. Like the Arms purchase, Clothing allows the player to take what he needs to trick out his character (short of finery)."
		},
		{
			name: "Traveling Gear",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 1,
			description: "This is all the necessary bits, odds and ends and what-no ts that are needed for survival on the road-candles, matches, flint and steel, a pocket knife, a rain cloak, a rain hat, a good sturdy rucksack, a thick leather belt, a money purse or wallet, a warm coat, etc. The exact choices are up to the player, but the GM has some say —no flamethrowers or Elven cloaks in traveling gear. Oh, yes, I almost forgot... don't forget to bring a good length of rope; you'll want one if you don't."
		},
		{
			name: "Shoes",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 1,
			description: "Shoes"
		},
		{
			name: "Personal Effects",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 1,
			description: "A player may purchase for his character personal effects of sentimental value: a religious trinket, a mirror, a book, a ring, a cane, a locket or any other similar item."
		},
		{
			name: "Finery",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 5,
			description: "Finery covers specialty clothing and expensive items that one would wear either on special occasions or when trying to make a point: courtly regalia for nobles, vestments for priests, shining robes for mages, etc. Like clothing, this purchase includes a whole wardrobe, not just a single outfit. Take as much or as little as you like. Improper dress imposes obstacle penalties to Inconspicuous and Etiquette tests among others"
		},
		{
			name: "Cash",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 6,
			description: "A player may start with a pocketful of cash. This grants 1D of cash that can be used as per the Resources rules. Once used, the cash is expended."
		},
		{
			name: "Skill Toolkits",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 8,
			description: "Many skills require tools. This resource can represent anything from medicine to books. If a skill is listed with 'Tools: Yes,' then a character must spend resource points on a toolkit in order to be able to adequately perform skill tests. Tests without tools (for skills that require them) are at a double obstacle penalty.<br>A toolkit that has finite supplies —like medicine for Herbalism— can run dry. Each use after the first, roll a d6. If a 1 comes up, the kit is empty. The character must make an Ob 2-5 Resources test to replenish it. The GM may set the obstacle depending on how rare the contents of the kit are. Ob 2 for peasant tools, Ob 4 for surgeon's tools, Ob 5 for sorcerous tools. Only one character can help you when you're using a toolkit."
		},
		{
			name: "Workshop",
			allowed: ["bwgr"],
			type: "Property",
			cost: 20,
			description: "A workshop is just a big toolkit. It is used for artisan and craftsman skill tests that require more than just simple tools. Purchasing this gives the character an appropriate room/building/tower to house the workshop. Workshops allow for more than one character to help on a skill test. This counts as property when factoring resources."
		},
		{
			name: "Companion Animal",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 3,
			description: "Some players may wish to take a dog, cat or falcon as an accoutrement to their character. Stats are provided for these beasties in the Creature Codex PDF, but they are really there more for show than for stealing the spotlight in an adventure."
		},
		{
			name: "Herd of Animals",
			allowed: ["bwgr"],
			type: "Property",
			cost: 20,
			description: "Characters with the Animal Husbandry skill, or the Master of Horses, Merchant or Magnate lifepath, may take an appropriate herd of animals. This purchase counts as property when factoring resources."
		},
		{
			name: "Rent",
			allowed: ["bwgr"],
			type: "Property",
			cost: 5,
			description: "Characters who cannot afford to own property live on leased land or rented houses/apartments. It's a common condition of the age. This purchase gives the character a place to live and counts as an Ob 2 Resources maintenan ce test. Paying rent counts as property when factoring Resources."
		},
		{
			name: "Property",
			allowed: ["bwgr"],
			type: "Property",
			cost: [
				["A leaky shack", 1],
				["A small cottage", 3],
				["A house or 'cottage industry' like a weaver", 10],
				["A villa or a farm or a knight's fee", 15],
				["A small business", 20],
				["Moderate-sized business", 30],
				["Manor or estate, an urban hotel*", 40],
				["Well-paid position (like mayor)*", 45],
				["Successful small business, a large business, a keep*", 60],
				["A fortress or moderate-sized estate*", 75],
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
			description: "Property counts as property when factoring Resources.<br>*Note that only Noble Born characters or characters with the Minister, Town Official, Merchant, Magnate, Steward, Master of Horse, Master of Hounds, Bailiff, Justiciar, Coroner, Constable, Treasurer, Bishop or Abbot LPs may spend more than 40 rps on property. Other characters simply may not own that degree of property (unless otherwi sespecified). The property purchase comes with appropriate staff, buildings and accoutrements. It does not provide the character with other free purchases from the Resources list."
		},
		...SorcerySpells,
		...PracticalMagicSchools,
		...SpiritBindingDomainBindingLevels,
		...SpiritBindingSpiritMarkLevels,
		...SummoningAffiliatedOrderLevels
	]
};
