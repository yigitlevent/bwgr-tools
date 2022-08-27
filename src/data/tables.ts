interface PracticeTable {
	[key: string]: {
		[key: string]: number;
		Cycle: number;
		Routine: number;
		Difficult: number;
		Challenging: number;
	};
}

export const PracticeTable: PracticeTable = {
	"Academic": { Cycle: 6, Routine: 2, Difficult: 4, Challenging: 8 },
	"Artisan": { Cycle: 12, Routine: 4, Difficult: 8, Challenging: 12 },
	"Artist": { Cycle: 6, Routine: 3, Difficult: 6, Challenging: 12 },
	"Craftsman": { Cycle: 12, Routine: 3, Difficult: 8, Challenging: 12 },
	"Forester": { Cycle: 6, Routine: 3, Difficult: 6, Challenging: 12 },
	"Martial": { Cycle: 1, Routine: 2, Difficult: 4, Challenging: 8 },
	"Medicinal": { Cycle: 12, Routine: 4, Difficult: 8, Challenging: 12 },
	"Military": { Cycle: 6, Routine: 2, Difficult: 4, Challenging: 8 },
	"Musical": { Cycle: 1, Routine: 2, Difficult: 4, Challenging: 8 },
	"Peasant": { Cycle: 3, Routine: 1, Difficult: 4, Challenging: 12 },
	"Physical": { Cycle: 1, Routine: 2, Difficult: 4, Challenging: 8 },
	"School of Thought": { Cycle: 6, Routine: 3, Difficult: 6, Challenging: 12 },
	"Seafaring": { Cycle: 3, Routine: 2, Difficult: 4, Challenging: 8 },
	"Social": { Cycle: 1, Routine: 2, Difficult: 4, Challenging: 8 },
	"Sorcerous": { Cycle: 12, Routine: 5, Difficult: 10, Challenging: 15 },
	"Special": { Cycle: 3, Routine: 3, Difficult: 6, Challenging: 12 },

	"Will": { Cycle: 12, Routine: 4, Difficult: 8, Challenging: 16 },
	"Perception": { Cycle: 6, Routine: 3, Difficult: 6, Challenging: 12 },
	"Agility": { Cycle: 3, Routine: 2, Difficult: 4, Challenging: 8 },
	"Speed": { Cycle: 3, Routine: 3, Difficult: 6, Challenging: 9 },
	"Power": { Cycle: 1, Routine: 2, Difficult: 4, Challenging: 8 },
	"Forte": { Cycle: 2, Routine: 4, Difficult: 8, Challenging: 16 },

	"Faith": { Cycle: 12, Routine: 5, Difficult: 10, Challenging: 20 },
	"Steel": { Cycle: 2, Routine: 1, Difficult: 3, Challenging: 9 }
};
