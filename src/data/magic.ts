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
		{ name: "Sustained", obstacle: 0, actions: 1, resource: 0 },
		{ name: "Elapsed Time", obstacle: 2, actions: 2, resource: 2 },
		{ name: "Permanent", obstacle: 0, actions: 1, resource: 0 }
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
	]
];

export const MiscMagicFacets: MagicFacet[][] = [
	[ // 3 origin
		{ name: "Personal", obstacle: 2, actions: 1, resource: 3 },
		{ name: "Presence", obstacle: 3, actions: 3, resource: 9 },
		{ name: "Sight", obstacle: 4, actions: 5, resource: 15 }
	],
	[ // 4 duration
		{ name: "Instantaneous", obstacle: 1, actions: 1, resource: 3 },
		{ name: "Sustained", obstacle: 2, actions: 2, resource: 4 },
		{ name: "Elapsed Time", obstacle: -1, actions: -1, resource: -1 },
		{ name: "Permanent", obstacle: 10, actions: 500, resource: 1302 }
	],
	[ // 7 impetus
		{ name: "Alteration", obstacle: 8, actions: 4, resource: 42 },
		{ name: "Assertion", obstacle: 6, actions: 7, resource: 32 },
		{ name: "Conjuration", obstacle: 9, actions: 33, resource: 117 },
		{ name: "Destruction", obstacle: 5, actions: 1, resource: 15 },
		{ name: "Exaltation", obstacle: 7, actions: 13, resource: 48 },
		{ name: "Reduction", obstacle: 4, actions: 1, resource: 9 },
		{ name: "Transmutation", obstacle: 10, actions: 27, resource: 120 }
	],
	[],
	[ // 5 area of effect
		{ name: "Caster", obstacle: 1, actions: 1, resource: 3 },
		{ name: "Single Target", obstacle: 2, actions: 2, resource: 6 },
		{ name: "Presence", obstacle: 3, actions: 4, resource: 9 },
		{ name: "Nat. Effect", obstacle: 4, actions: 8, resource: 18 },
		{ name: "Measured Area", obstacle: -1, actions: -1, resource: -1 }
	]
];


export const MiscMagicElements: MagicFacet[][] = [
	[ // 5 Prime Elements
		{ name: "Air", obstacle: 4, actions: 2, resource: 12 },
		{ name: "Earth", obstacle: 3, actions: 8, resource: 12 },
		{ name: "Fire", obstacle: 5, actions: 2, resource: 15 },
		{ name: "Water", obstacle: 4, actions: 6, resource: 15 },
		{ name: "White", obstacle: 5, actions: 4, resource: 18 }
	],
	[ // 4 Lower Elements
		{ name: "Anima", obstacle: 5, actions: 9, resource: 24 },
		{ name: "Leta", obstacle: 3, actions: 19, resource: 21 },
		{ name: "Simulacra", obstacle: 6, actions: 9, resource: 33 },
		{ name: "Vita", obstacle: 4, actions: 13, resource: 21 }
	],
	[ // 3 Higher Elements
		{ name: "Arcane", obstacle: 5, actions: 24, resource: 45 },
		{ name: "Light", obstacle: 4, actions: 30, resource: 39 },
		{ name: "Shadow", obstacle: 6, actions: 20, resource: 48 }
	]
];
