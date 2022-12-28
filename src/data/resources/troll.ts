import { ResourceStock } from "./_resources";
import { Relationship, Reputation, Affiliation } from "./_social";


export const Troll: ResourceStock = {
	name: "Troll",
	allowed: ["bwc"],
	resources: [
		Relationship,
		Reputation,
		Affiliation,
		{
			name: "Rags",
			allowed: ["bwc"],
			type: "Gear",
			cost: 1
		},
		{
			name: "Troll Shoes",
			allowed: ["bwc"],
			type: "Gear",
			cost: 1
		},
		{
			name: "Sack",
			allowed: ["bwc"],
			type: "Gear",
			cost: 1
		},
		{
			name: "Chest or Footlocker",
			allowed: ["bwc"],
			type: "Gear",
			cost: 3
		},
		{
			name: "Trophies",
			allowed: ["bwc"],
			type: "Gear",
			cost: 3,
			description: "Trolls love to keep skulls or other keepsakes from their favorite meals. These are then draped across the shoulders or strung from the wrists to let other Trolls know how well he has eaten."
		},
		{
			name: "Shiny Trophies",
			allowed: ["bwc"],
			type: "Gear",
			cost: 7,
			description: "Somewhere along the way, one of the Troll's meals came with some very lovely shiny bits. These are usually worn prominently about the neck or waist."
		},
		{
			name: "Pile of Rocks",
			allowed: ["bwc"],
			type: "Gear",
			cost: 2
		},
		{
			name: "Troll Lash",
			allowed: ["bwc"],
			type: "Gear",
			cost: 5,
			description: "This dreaded weapon is used by Bellowers to keep their subordinates in line. Not only does it allow the Troll to use its 'Where There's a Whip, There's a Way' trait, but the Troll whip is powerful enough to be used as an actualy weapon.<br>Lash: Base Power = Lash skill exponent. Weapon is Power 2, VA —, Add 2, WS 1, Weapon length Longest. The lash can only be used by creatures of Massive Stature."

		},
		{
			name: "Mattock",
			allowed: ["bwc"],
			type: "Gear",
			cost: 10,
			description: "A fearsome weapon: Two-handed: Power 4, VA 2, Add 2, WS 2, Weapon length Long, may Great Strike. One-handed: Power 3, VA 2, Add 2, WS 1, Weapon length Long.<br>This weapon is built to suit the size of a Troll and cannot be weilded by creatures smaller than Massive Stature. Even for Trolls, it is heavy. Characters must have at least a B6 Power to use it properly."
		},
		{
			name: "Black Iron Shield",
			allowed: ["bwc"],
			type: "Gear",
			cost: 5,
			description: "This massive shield provides 3D protection. Its sharp edge can also be used as a weapon: Power 2, VA 1, Add 2, WS 2, Weapon length Short."
		},
		{
			name: "Cave Hole",
			allowed: ["bwc"],
			type: "Property",
			cost: 5,
			description: "Even a Troll should have a little home somewhere —a nice, romantic, stinking hole in the ground to call its own. This counts as property."
		}
	]
};
