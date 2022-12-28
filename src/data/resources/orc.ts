import { ResourceStock } from "./_resources";
import { Relationship, Reputation, OrcAffiliation } from "./_social";
import { RitualsOfNightRituals } from "./_magical";


export const Orc: ResourceStock = {
	name: "Orc",
	allowed: ["bwg"],
	resources: [
		Relationship,
		Reputation,
		OrcAffiliation,
		{
			name: "Rags",
			allowed: ["bwg"],
			type: "Gear",
			cost: 1
		},
		{
			name: "Traveling Gear",
			allowed: ["bwg"],
			type: "Gear",
			cost: 3
		},
		{
			name: "Hobnailed Boots",
			allowed: ["bwg"],
			type: "Gear",
			cost: 1
		},
		{
			name: "Orc Arms",
			allowed: ["bwg"],
			type: "Gear",
			cost: [["Poor quality arms", 3], ["Run of the mill arms", 5]],
			modifiers: [
				["Spiked Pommel", "1/per"],
				["Weighted Pommel", "1/per"],
				["Beak Pommel", "1/per"]
			],
			description: "You may purchase run of the mill or poor quality weapons for your character. You may purchase beaks, spikes and weights for your character's weapons at +1 rp per modification, per weapon."
		},
		{
			name: "Orc Armor",
			allowed: ["bwg"],
			type: "Gear",
			cost: [
				["Poor quality hides (gambeson equivalent)", 1],
				["Poor quality reinforced hides (reinforced leather equivalent)", 3],
				["Poor quality light mail", 5],
				["Poor quality heavy mail", 8],
				["Run of the mill reinforced leather", 8],
				["Run of the mill light mail", 12],
				["Run of the mill heavy mail", 20],
				["Superior quality reinforced leather", 25]
			],
			description: "Orc players may purchase the following types of armor for their characters. They may purchase armor piecemeal as described in the Human Resources section. See the Spoils of War for more options."
		},
		{
			name: "Orc Missiles",
			allowed: ["bwg"],
			type: "Gear",
			cost: [
				["Poor quality bow (+1 Ob to hit)", 3],
				["Poor quality crossbow (+1 Ob to hit)", 4],
				["Run of the mill bow", 5],
				["Run of the mill crossbow", 6],
				["Iron-cased bombs", 10]
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
			description: "Included in the costs of these weapons are enough missiles to adequately outfit the character. Special heads for arrows and bolts can be purchased for +1rp apiece. Take as many of each head as you like. Rules for special arrowheads are given in the Weapon Appendix of the Burning Wheel."
		},
		{
			name: "Black Iron Helmet",
			allowed: ["bwg"],
			type: "Gear",
			cost: 5,
			description: "A helmet complete with spikes, horse hair tassels and a prison-gate mask. 5D, +2 Ob to Perception tests."
		},
		{
			name: "Black Iron Shield",
			allowed: ["bwg"],
			type: "Gear",
			cost: 4,
			description: "A large, iron, circular shield, stained coal black. The outer edge is sharpened to add a little surprise for those who want to get close. 3D shield. Power 2, Add 2, VA 1, WS 1, short weapon."
		},
		{
			name: "Riding Mount or Pack Animal",
			allowed: ["bwg"],
			type: "Gear",
			cost: 9
		},
		{
			name: "Great Wolf Mount",
			allowed: ["bwg"],
			type: "Gear",
			cost: 15,
			description: "The Great Wolf is the pr eferred mount of the Orcish cavalry. Though not as swift as horses, they mak e up for their loss in cunning and ferocity. Use the stats in the Monsters section in the Burning Wheel for the Black Destroyer and Astride the Beast wolves (they're too long to li st here) or burn up th e wolf using the Great Wolf lifepaths in the Codex. Burned wolves have one less lifepath than their master and obey the other rules for relationships. Lastly, the wolf can be burned up as a character by another player. This creates a powerful partnership, rather than a master/slave, rider/mount relation ship. When using a player character wolf, lifepath limits are the same as for any other character."
		},
		{
			name: "Whip",
			allowed: ["bwg"],
			type: "Gear",
			cost: 2,
			description: "The lash is required for making use of the Where There's a Whip, There's a Way trait. The whip is not a weapon of any consequence. This may only be purchased by characters with the Where There's a Whip, There's a Way trait."
		},
		{
			name: "Poison",
			allowed: ["bwg"],
			type: "Gear",
			cost: 5,
			description: "Three doses of one of the types of poison listed under Vile Poisoner."
		},
		{
			name: "Brazen Horn or Clan Banner",
			allowed: ["bwg"],
			type: "Gear",
			cost: 9,
			description: "The Brazen Horn adds +1D to the Brazen Horn of Despair skill and allows Despair Shouters to help a Named with Command or Brutal Intimidation. The banner reduces hesitation by one for all in the clan who can see it."
		},
		{
			name: "Skill Toolkits",
			allowed: ["bwg"],
			type: "Gear",
			cost: 9
		},
		{
			name: "Riding Harness for Wolf",
			allowed: ["bwg"],
			type: "Gear",
			cost: 5,
			description: "The saddle, bit and bridle, stirrups and reins add +1D to Riding tests for wolves."
		},
		{
			name: "Spoils of War",
			allowed: ["bwg"],
			type: "Gear",
			cost: "various",
			description: "Named, Great Ones, Whisperers, Head Takers, Summoners and Masters may purchase one item from any character stock resources/gear list they wish. Troll Lords may purchase gear from the Troll resources list in the Codex. Any Orc character who has 'failed' a Brutal Life test may also purchase Spoils of War from other character stocks, but the cost of the item/property may not exceed half the Orc's total resource points. Named, Great Ones, etc. may take a second item, but to do so counts as failing a Brutal Life roll at his current lifepath level. If an Orc player takes property as part of their Spoils of War, be sure to include its cost when calculating his Resources."
		},
		{
			name: "Black Robes",
			allowed: ["bwg"],
			type: "Gear",
			cost: 1,
			description: "Servants only."
		},
		{
			name: "Leather Apron",
			allowed: ["bwg"],
			type: "Gear",
			cost: 1,
			description: "Servants only."
		},
		{
			name: "Ceremonial Knives",
			allowed: ["bwg"],
			type: "Gear",
			cost: 3,
			description: "Servants only. These ornate and hallowed weapons are vital to the Servant for performing his dark rituals. Otherwise they are simply ornate run of the mill weapons."
		},
		{
			name: "Ceremonial Axe or Sword",
			allowed: ["bwg"],
			type: "Gear",
			cost: 7,
			description: "Servants only. These ornate and hallowed weapons are vital to the Servant for performing his dark rituals. Otherwise they are simply ornate run of the mill weapons."
		},
		{
			name: "Tools of the Trade",
			allowed: ["bwg"],
			type: "Gear",
			cost: 7,
			description: "Servants only. These are a collection of knives, blades, pins, clamps and other strange devices. Tools of the Trade add +1D to the Torture skill."
		},
		{
			name: "Poisoner's Toolkit",
			allowed: ["bwg"],
			type: "Gear",
			cost: 7,
			description: "Servants only. This kit allows the Knower of Secrets to mix poisons. All of the ingredients necessary for concocting the poisons listed under the Vile Poisoner skill are present in this foul smelling pouch. After using this kit, roll the Die of Fate. On a 1, the supplies have run out and the character must refill the kit via a Resources, Foraging or Scavenging test (or another means sanctioned by the GM)."
		},
		...RitualsOfNightRituals
	]
};
