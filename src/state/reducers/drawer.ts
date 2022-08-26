export type DrawerItem = "Lifepaths" | "Skills" | "Traits" | "Lifepath Randomizer" | "Practice Planner" | "Magic Wheel" | "Faction" | "Unit";

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
	type: "persistent",
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
