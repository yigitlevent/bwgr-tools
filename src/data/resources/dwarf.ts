import { ResourceStock } from "./_resources";
import { Relationship, Reputation, Affiliation } from "./_social";


export const Dwarf: ResourceStock = {
	name: "Dwarf",
	allowed: ["bwgr"],
	resources: [
		Relationship,
		Reputation,
		Affiliation,
		{
			name: "Shoddy Arms",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 5,
			modifiers: [
				["Spiked Pommel", "1/per"],
				["Weighted Pommel", "1/per"],
				["Beak Pommel", "1/per"]
			],
			description: "Any gear choice listed as 'shoddy' merely means the is not Dwarf-made. It counts as run of the mill gear and provides none of the bonuses of the more expensive Dwarven gear."
		},
		{
			name: "Dwarven Arms",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 20,
			modifiers: [
				["Spiked Pommel", "4/per"],
				["Weighted Pommel", "4/per"],
				["Beak Pommel", "4/per"]
			],
			description: "All Dwarven Arms are considered superior quality items. In addition, they add a +1D balance die to the skill of the wielder. Traditionally, Dwarves use axes and hammers, throwing axes and knives. But swords and maces are acceptable as well. Players may purchase beaks, spikes and weights for their character's weapons at +4rps per modification, per weapon."
		},
		{
			name: "Shoddy Crossbow",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 6,
			modifiers: [
				["Helmeted", 0],
				["Mallet Head", 1],
				["Fisted Bolt", 1],
				["Spear Tip", 1]
			],
			description: "Any gear choice listed as 'shoddy' merely means the is not Dwarf-made. It counts as run of the mill gear and provides none of the bonuses of the more expensive Dwarven gear."
		},
		{
			name: "Dwarven Arbalest",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 20,
			modifiers: [
				["Helmeted", 0],
				["Mallet Head", 1],
				["Fisted Bolt", 1],
				["Spear Tip", 1]
			],
			description: "The arbalest is a special Dwarven make of the traditional crossbow. It can fire rocks or bolts. It counts as a crossbow but only requires 10 actions to load when firing bolts, or 6 actions when firing rocks. These devices are so well-made they add a +1D balance die to the wielder's skill.<br>Rocks IMS: I: B3, M: B6, S: B9, VA: —. When firing rocks, the arbalest counts as an arquebus for Range and Cover and DoF rules.<br>It can fire bolts using the range and damage of a crossbow."
		},
		{
			name: "Dwarven-made Armor",
			allowed: ["bwgr"],
			type: "Gear",
			cost: [["Light Mail", 9], ["Heavy Mail", 10], ["Plated Mail", 20]],
			description: "This is run of the mill armor made by Dwarves. It obeys the standard rules for armor, except that the first '1' rolled on an armor test per piece may be ignored. After that, it obeys the normal rules for armor failure. Once the 1 is gone, the special ability is gone. Lastly, Dwarven-made armor does not cause a Clumsy Weight Speed penalty (no obstacle penalty or -1D)."
		},
		{
			name: "Dwarven Armor",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 100,
			description: "This is the most precious of all armors. Dwarven mail covers the bearer in fine and supple chainmail. It gives no clumsy weight penalties except for gauntlets and penalties for Stealthy. The armor counts as gray shade heavy mail from head to hand to boot. It is, of course, superior quality. Dwarven mail counts as property when factoring Resources."
		},
		{
			name: "Forge Mask",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 40,
			description: "This is a highly coveted piece of Dwarven craftsmanship. Forge Masks are constructed under great secrecy using the most complex and obscure Dwarven forging techniques. Designed to withstand the extreme heat of the Dwarven forge and errant heavy blows of the smithing process, they are requisite protection for every Artificer and Mask Bearer, as well as a sign of rank and skill. The mask may also be worn as a piece of armor added onto another suit and counts as 4D of gray shade armor for the face and head (with only a +1 Ob clumsy weight penalty). The mask is highly resistant to heat and flame. It allows an armor test against flames directed at the head. Also, the mask can cause an opponent to make a Steel test at the time of the wearer's choosing. This fear effect only works once per target, costs one action to activate and can only be us ed on a target face to face with the Mask Bearer."
		},
		{
			name: "Dwarven Shield",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 20,
			description: "This magnificent device counts as a 3D gray shade superior quality shield. Against heat and flame, the shield counts as magical armor. The bearer of a Dwarven shield may make an armor test (3D) against any incoming flame attacks. Black s hade fire has no VA, gray shade is VA 1, and white shade is VA 2. Use these VAs instead of any spell VA . If the shield bearer is wearing a Forge Mask, he may add +2D to this armor test. When used as a weapon, the shield's weapon shade is that of its bearer 's Power."
		},
		{
			name: "Riding Mount or Pack Animal",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 8,
			description: "Dwarves tend to ride ponies or mules."
		},
		{
			name: "Clothes",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 1
		},
		{
			name: "Traveling Gear",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 1,
			description: "This is all the necessary bits, odds and ends and what-no ts that are needed for survival on the road-candles, matches, flint and steel, a pocket knife, a rain cloak, a rain hat, a good sturdy rucksack, a thick leather belt, a money purse or wallet, a warm coat, etc. The exact choices are up to the player, but the GM has some say —no flamethrowers or Elven cloaks in traveling gear. Oh, yes, I almost forgot... don't forget to bring a good length of rope; you'll want one if you don't."
		},
		{
			name: "Sturdy Shoes",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 1
		},
		{
			name: "Finery",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 5
		},
		{
			name: "Chronicles",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 15,
			description: "Chronicles add +1D to any history type test about Dwarves."
		},
		{
			name: "Keg o' Nog",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 20,
			description: "A Keg o' Nog provides the Dwarf with 12 tall mugfuls of the fabled drink. Each mug is worth +1D to one Health test, but +1 Ob to social skill tests for the scene. (Only one bonus/penalty is in effect, no matter how much of the brew is quaffed by Dwarves.) One sip is enough to get any non-Dwarf drunk."
		},
		{
			name: "Shoddy Tools",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 5,
			description: "Any gear choice listed as 'shoddy' merely means the stuff is not Dwarf-made. It counts as run of the mill gear and provides none of the bonuses of the more expensive Dwarven gear."
		},
		{
			name: "Dwarven Tools",
			allowed: ["bwgr"],
			type: "Gear",
			cost: 10,
			description: "Every Master Artificer builds and maintain s his own tools. It is an ancient and proud art passed down from master to student: a vital tradition, for the tools are the Artificer's fingers and hands in the forge. Dwarven Tools (of any type) provide the user with +1D of equipment dice when used with the appropriate skill."
		},
		{
			name: "Property",
			allowed: ["bwgr"],
			type: "Property",
			cost: [["A small house", 10], ["Large house", 15], ["A Dwarven hall (a large apartment in a hold)", 30], ["A Graybeard's hold*", 40], ["An Engineer's hold*", 45], ["A Master Artificer's hold*", 60], ["A Warden's hold*", 75], ["A High Captain's hold*", 90], ["A Prince's hold*", 105]],
			description: "These all count as property when factoring Resources. *Only Dwarves of the listed rank or higher may take this kind of property."
		},
		{
			name: "Workshop",
			allowed: ["bwgr"],
			type: "Property",
			cost: 60,
			description: "Workshops are necessary to completely utilize Dwarven Artificer and Dwarven craftsman skills-without one, the Dwarf may only undertake smaller projects (Ob 3 tests or lower). Also, Dwarven Workshops are required if the character will be building special Dwarven items like masks, shields, arms or mail. Dwarven Workshops include (portable) skill tool kits as part of their cost (see below). Workshops count as property when factoring Resources."
		},
		{
			name: "Carts and Baggage",
			allowed: ["bwgr"],
			type: "Property",
			description: "Guilders bring their wares down from the holds in great lumbering carts. Carts and Baggage represents trade and salable go ods for Guilder Dwarves . They count as property when factoring resources and may be purc ha sed multiple times for multiple bonuses.",
			cost: 15
		}
	]
};
