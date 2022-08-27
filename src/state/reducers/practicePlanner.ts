

interface ChangeDaysAction { type: "CHANGE_PRACTICE_PLANNER_DAYS"; payload: { days: number; }; }
interface ChangeHoursAction { type: "CHANGE_PRACTICE_PLANNER_HOURS"; payload: { hours: number; }; }

interface AddRowsAction { type: "ADD_PRACTICE_PLANNER_CELLS"; payload: { days: number; hours: number; }; }
interface DeleteCellAction { type: "DELETE_PRACTICE_PLANNER_CELL"; payload: { cellIndex: number; }; }

interface AddPracticeAction { type: "ADD_PRACTICE_PLANNER_PRACTICE"; payload: { cellIndex: number; practice: Practice; }; }
interface DeletePracticeAction { type: "DELETE_PRACTICE_PLANNER_PRACTICE"; payload: { cellIndex: number; practiceIndex: number; }; }

interface ChangeCellHoursAction { type: "CHANGE_PRACTICE_PLANNER_CELL_HOURS"; payload: { cellIndex: number; change: 1 | -1; }; }

export type PracticePlannerActions =
	ChangeDaysAction | ChangeHoursAction
	| AddPracticeAction | DeletePracticeAction
	| AddRowsAction | DeleteCellAction
	| ChangeCellHoursAction;



export interface PracticePlannerState {
	days: number;
	hours: number;
	cells: Cell[];
}

const INITIAL: PracticePlannerState = {
	days: 6,
	hours: 6,
	cells: []
};

export const PracticePlannerReducer = (state = INITIAL, action: PracticePlannerActions): PracticePlannerState => {
	switch (action.type) {
		case "CHANGE_PRACTICE_PLANNER_DAYS":
			return { ...state, days: action.payload.days };
		case "CHANGE_PRACTICE_PLANNER_HOURS":
			return { ...state, hours: action.payload.hours };
		case "ADD_PRACTICE_PLANNER_CELLS":
			const appr: Cell[] = [...Array(action.payload.days)].map(() => { return { maxHours: action.payload.hours, remaining: action.payload.hours, placed: [] }; });
			return { ...state, cells: [...state.cells, ...appr] };
		case "DELETE_PRACTICE_PLANNER_CELL":
			const dppr = state.cells;
			dppr.splice(action.payload.cellIndex, 1);
			return { ...state, cells: [...dppr] };
		case "ADD_PRACTICE_PLANNER_PRACTICE":
			const appp = state.cells.map((v, i) => {
				if (i === action.payload.cellIndex) {
					const placed = [...v.placed, action.payload.practice];
					const hours = v.remaining - action.payload.practice.hours;
					return { ...v, remaining: hours, placed: placed };
				}
				return v;
			});
			return { ...state, cells: appp };
		case "DELETE_PRACTICE_PLANNER_PRACTICE":
			const dppp = state.cells.map((v, i) => {
				if (i === action.payload.cellIndex) {
					const placed = v.placed.filter((v, i) => i !== action.payload.practiceIndex);
					const hours = v.remaining + v.placed[action.payload.practiceIndex].hours;
					return { ...v, remaining: hours, placed: placed };
				}
				return v;
			});
			return { ...state, cells: dppp };
		case "CHANGE_PRACTICE_PLANNER_CELL_HOURS":
			const cppch = state.cells.map((v, i) => {
				if (i === action.payload.cellIndex && ((v.maxHours < 24 && action.payload.change > 0) || (v.maxHours > 1 && action.payload.change < 0))) {
					return { ...v, maxHours: v.maxHours + action.payload.change, remaining: v.remaining + action.payload.change };
				}
				return v;
			});
			return { ...state, cells: cppch };
		default:
			return { ...state };
	}
};
