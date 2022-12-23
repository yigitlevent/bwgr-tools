export interface Stat {
	name: StatsList,
	pool: "Mental" | "Physical";
}

export const Stats: Stat[] = [
	{ name: "Will", pool: "Mental" },
	{ name: "Perception", pool: "Mental" },
	{ name: "Power", pool: "Physical" },
	{ name: "Agility", pool: "Physical" },
	{ name: "Forte", pool: "Physical" },
	{ name: "Speed", pool: "Physical" }
];
