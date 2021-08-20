export const EmptyUnit: bwgr.data.UnitCard = {
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

export const UnitStatuses: bwgr.data.UnitStatus[] = [
	"Ready", "Out of Supply", "Unscathed", "Bloodied", "Broken"
];
