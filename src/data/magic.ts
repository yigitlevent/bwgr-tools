export interface MagicFacet {
	name: string;
	obstacle: number;
	actions: number;
	resource: number;
}

export const MagicData: MagicFacet[][] = [
	[ // 3 origin
		{ name: "Personal", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Presence", obstacle: 2, actions: 2, resource: 2 },
		{ name: "Sight", obstacle: 4, actions: 4, resource: 4 }
	],
	[ // 4 duration
		{ name: "Instantaneous", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Presence", obstacle: 2, actions: 2, resource: 2 },
		{ name: "Permanent", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Sustained", obstacle: 0, actions: 1, resource: 0 }
	],
	[ // 7 impetus
		{ name: "Create", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Destroy", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Tax", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Transmute", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Control", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Influence", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Enhance", obstacle: 0, actions: 1, resource: 0 }
	],
	[ // 8 elements
		{ name: "Anima", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Arcana", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Heaven", obstacle: 0, actions: 1, resource: 0 },
		{ name: "White", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Fire", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Air", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Earth", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Water", obstacle: 0, actions: 1, resource: 0 }
	],
	[ // 11 area of effect
		{ name: "Caster", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Double Area", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Measured Area", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Half Area", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Dbl. Nat. Eff.", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Nat. Effect", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Half Nat. Eff.", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Dbl. Presence", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Presence", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Half Presence", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Single Target", obstacle: 0, actions: 1, resource: 0 }
	],
];

export const EmptySpell = {
	name: "",
	obstacle: "",
	actions: "",
	resource: "",
};
