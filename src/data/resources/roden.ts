import { ResourceStock } from "./_resources";
import { Relationship, Reputation, Affiliation } from "./_social";
import { SorcerySpells, PracticalMagicSchools, SpiritBindingDomainBindingLevels, SpiritBindingSpiritMarkLevels, SummoningAffiliatedOrderLevels } from "./_magical";


export const Roden: ResourceStock = {
	name: "Roden",
	allowed: ["bwc"],
	resources: [
		Relationship,
		Reputation,
		Affiliation,
		{
			name: "Arms",
			allowed: ["bwc"],
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
			allowed: ["bwc"],
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
			name: "Roden Throwing Blades",
			allowed: ["bwc"],
			type: "Gear",
			cost: 15,
			description: "This category includes a number of weapons designed for throwing, including knives, darts and discs. The balance ofthese blades are superb and adds +1D to the Throwing skillwhen used. Players may take two knives. These are meant to be rare and expensive.<br>Pow: 1, VA: 1, DoF 1-2/3-4/5-6, Range: Optimal 1D, Extreme 1D"
		},
		{
			name: "Wooden Shield",
			allowed: ["bwc"],
			type: "Gear",
			cost: 2,
			description: "While armor might be very rare for Roden, they often use shields to protect themselves in battle. These shields are made from strong wood and offer 2D of protection as target shields."
		},
		{
			name: "Poor Quality Armor",
			allowed: ["bwc"],
			type: "Gear",
			cost: [
				["Leather", 5],
				["Plated leather", 8],
				["Chain", 10]
			],
			description: "When you buy armor, you buy the whole suit-helmet, arms, chest and legs. The player may choose individual pieces if he likes. A helmet or br eastplate costs half the full suit. Greaves or leggings cost a third of the full price. Round up any fractional costs. Shields may be included in an armor kit at no extra cost.<br>Poor Quality Armor - This armor falls apart; all 1s count for losing armor dice."
		},
		{
			name: "Run of the Mill Armor",
			allowed: ["bwc"],
			type: "Gear",
			cost: [
				["Leather", 10],
				["Plated leather", 15],
				["Chain", 20]
			],
			description: "When you buy armor, you buy the whole suit-helmet, arms, chest and legs. The player may choose individual pieces if he likes. A helmet or br eastplate costs half the full suit. Greaves or leggings cost a third of the full price. Round up any fractional costs. Shields may be included in an armor kit at no extra cost."
		},
		{
			name: "Superior Quality Armor",
			allowed: ["bwc"],
			type: "Gear",
			cost: [
				["Leather", 40],
				["Plated leather", 60],
				["Chain", 80]
			],
			description: "When you buy armor, you buy the whole suit-helmet, arms, chest and legs. The player may choose individual pieces if he likes. A helmet or br eastplate costs half the full suit. Greaves or leggings cost a third of the full price. Round up any fractional costs. Shields may be included in an armor kit at no extra cost.<br>Superior Quality Armor - Only the first 1 counts, which is rerolled; if that die comes up a 1 again, an armor die is lost."
		},
		{
			name: "Workshop",
			allowed: ["bwc"],
			type: "Property",
			cost: 20,
			description: "A workshop is just a big toolkit. It is used for artisan and craftsman skill tests that require more than just simple tools. Purchasing this gives the character an appropriate room/building/tower to house the workshop. Workshops allow for more than one character to help on a skill test. This counts as property when factoring resources."
		},
		{
			name: "Animal Herd",
			allowed: ["bwc"],
			type: "Property",
			cost: 10,
			description: "Although the Field Roden do not keep animals, their kin Below have long known the taste of flesh. A herd may include goats, pigs or chickens. This counts as property for the purposes of factoring resources."
		},
		{
			name: "Clothes",
			allowed: ["bwc"],
			type: "Gear",
			cost: 1,
			description: "This resource purchase includes all of the clothing a character would need for everyday life in his station. It is not just one outfit. Like the Arms purchase, Clothing allows the player to take what he needs to trick out his character (short of finery)."
		},
		{
			name: "Traveling Gear",
			allowed: ["bwc"],
			type: "Gear",
			cost: 1,
			description: "This is all the necessary bits, odds and ends and what-no ts that are needed for survival on the road-candles, matches, flint and steel, a pocket knife, a rain cloak, a rain hat, a good sturdy rucksack, a thick leather belt, a money purse or wallet, a warm coat, etc. The exact choices are up to the player, but the GM has some say —no flamethrowers or Elven cloaks in traveling gear. Oh, yes, I almost forgot... don't forget to bring a good length of rope; you'll want one if you don't."
		},
		{
			name: "Shoes",
			allowed: ["bwc"],
			type: "Gear",
			cost: 3,
			description: "Shoes"
		},
		{
			name: "Skill Toolkits",
			allowed: ["bwc"],
			type: "Gear",
			cost: 9,
			description: "Many skills require tools. This resource can represent anything from medicine to books. If a skill is listed with 'Tools: Yes,' then a character must spend resource points on a toolkit in order to be able to adequately perform skill tests. Tests without tools (for skills that require them) are at a double obstacle penalty.<br>A toolkit that has finite supplies —like medicine for Herbalism— can run dry. Each use after the first, roll a d6. If a 1 comes up, the kit is empty. The character must make an Ob 2-5 Resources test to replenish it. The GM may set the obstacle depending on how rare the contents of the kit are. Ob 2 for peasant tools, Ob 4 for surgeon's tools, Ob 5 for sorcerous tools. Only one character can help you when you're using a toolkit."
		},
		{
			name: "Firebombs",
			allowed: ["bwc"],
			type: "Gear",
			cost: [
				["Requirements unfulfilled", 20],
				["Requirements fulfilled", 6]
			],
			description: "In order to purchase firebombs, the character's last lifepath must be in the Society. Players may purchase six bottle-sized bombs or one medium-sized incendiary bomb. If a player's last lifepath was Arsonist, he may purchase the firebombs for 6 rps. See the Firebombs skill for more information."
		},
		{
			name: "Robes of the Ordained",
			allowed: ["bwc"],
			type: "Gear",
			cost: 1,
			description: "These are the humble wool robes worn by Aecer's Ordained. Brothers and Sisters wear brown; Fathers and Mothers wear green; and Abbots and Abbesses wear pumpkin."
		},
		{
			name: "Honeyed Oatcakes",
			allowed: ["bwc"],
			type: "Gear",
			cost: 5,
			description: "These are delight for any traveler! Sweet and crunchy, filling and healthy, they don't spoil and make for good meals while on the road. They add +1D to any Forte or Health tests made within 1 day of consumption."
		},
		{
			name: "Dandewine",
			allowed: ["bwc"],
			type: "Gear",
			cost: 5,
			description: "Made from dandelions and infused with other secret liquids and spices, dandewine is featuresd at every Field Roden social event. Surprisingly, it's nonalcoholic, but it has wondrous effects. Reduce hesitation by one and also decrease by one all social skill tests obstacles made against those drunk on wine."
		},
		{
			name: "Blood Blossom",
			allowed: ["bwc"],
			type: "Gear",
			cost: 5,
			description: "Known in the Fields and Below for its great healing powers, blood blossoms have been stabple of Roden healers for ages. Harvested only at the summer equinox, they are prepared immediately and stay usable for up to a full year. These flowers will add +1D to any Herbalism or Field Dressing tests."
		},
		{
			name: "Roden Property",
			allowed: ["bwc"],
			type: "Property",
			cost: [
				["A den for a single Roden", 2],
				["A nest for a small family of Roden", 7],
				["A nest for a large group of Roden", 10],
				["Apiary for the beekeepers", 10],
				["Fields for harvesters", 15]
			]
		},
		{
			name: "Visionary Cult",
			allowed: ["bwc"],
			type: "Affiliation",
			cost: [
				["1D: A small, local or specialized group", 10],
				["2D: A large, regional or expansive group", 25],
				["3D: A national, powerful or ruling group", 50]
			],
			description: "The devotees of the Visionary, they follow his guidance and do his bidding. Most are clever and work inconspicuously among the Field and Below, being very careful to avoid suspicion. Only a Visionary may purchase a Cult. A Cult counts as an affiliation. Each die spent in the affiliation also grants +1D to the Visionary Faith trait. If the cult is lost, destroyed or abandoned, the Visionary loses access to these dice."
		},
		...SorcerySpells,
		...PracticalMagicSchools,
		...SpiritBindingDomainBindingLevels,
		...SpiritBindingSpiritMarkLevels,
		...SummoningAffiliatedOrderLevels
	]
};
