export type DrawerItem = "Dice Roller" | "Lifepaths" | "Skills" | "Traits" | "Equipments" | "Lifepath Randomizer" | "Practice Planner" | "Magic Wheel" | "Duel of Wits Planner" | "Range and Cover Planner" | "Fight Planner";

interface OpenAction { type: "OPEN_DRAWER"; }
interface CloseAction { type: "CLOSE_DRAWER"; }
interface ToggleAction { type: "TOGGLE_DRAWER"; }
interface SelectAction { type: "SELECT_DRAWER_ITEM"; payload: { selected: DrawerItem; }; }

export type DrawerActions = OpenAction | CloseAction | ToggleAction | SelectAction;

export interface DrawerState {
	open: boolean;
	type: "permanent" | "temporary" | "persistent";
	selected: DrawerItem;
}

const INITIAL: DrawerState = {
	open: true,
	type: window.innerWidth < 1700 ? "temporary" : "permanent",
	selected: "Lifepaths"
};

export const DrawerReducer = (state = INITIAL, action: DrawerActions): DrawerState => {
	switch (action.type) {
		case "OPEN_DRAWER":
			return { ...state, open: true };
		case "CLOSE_DRAWER":
			return { ...state, open: false };
		case "TOGGLE_DRAWER":
			return { ...state, open: !state.open };
		case "SELECT_DRAWER_ITEM":
			return { ...state, selected: action.payload.selected };
		default:
			return { ...state };
	}
};
