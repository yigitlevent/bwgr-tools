


interface UnitCard {
	[key: string]: string | ["B" | "G" | "W", number] | ["B" | "G" | "W", number, number] | number | ListItem[];
	name: string;
	commander: string;
	type: string;
	status: UnitStatus;
	composition: string;
	doctrine: string;
	tradition: string;
	traits: ListItem[];
	ambush: ["B" | "G" | "W", number];
	battle: ["B" | "G" | "W", number];
	siege: ["B" | "G" | "W", number];
	skirmish: ["B" | "G" | "W", number];
	soldiering: ["B" | "G" | "W", number];
	seamanship: ["B" | "G" | "W", number];
	health: ["B" | "G" | "W", number, number];
	steel: ["B" | "G" | "W", number, number];
	strature: number;
	strength: number;
	stride: number;
	supply: number;
	weaponry: string;
	armor: string;
	trainings: string;
}

export const EmptyUnit: UnitCard = {
	name: "",
	commander: "",
	type: "",
	status: "Ready",
	composition: "",
	doctrine: "",
	tradition: "",
	weaponry: "",
	armor: "",
	trainings: "",
	traits: [],
	ambush: ["B", 0],
	battle: ["B", 0],
	siege: ["B", 0],
	skirmish: ["B", 0],
	soldiering: ["B", 0],
	seamanship: ["B", 0],
	health: ["B", 0, 0],
	steel: ["B", 0, 0],
	strature: 0,
	strength: 0,
	stride: 0,
	supply: 0
};

export const UnitStatuses: UnitStatus[] = [
	"Ready", "Out of Supply", "Unscathed", "Bloodied", "Broken"
];
