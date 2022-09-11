interface OpenAction { type: "OPEN_DRAWER"; }
interface CloseAction { type: "CLOSE_DRAWER"; }
interface ToggleAction { type: "TOGGLE_DRAWER"; }

export type DrawerActions = OpenAction | CloseAction | ToggleAction;

export interface DrawerState {
	open: boolean;
	type: "permanent" | "temporary" | "persistent";
}

const INITIAL: DrawerState = {
	open: true,
	type: window.innerWidth < 1700 ? "temporary" : "permanent"
};

export const DrawerReducer = (state = INITIAL, action: DrawerActions): DrawerState => {
	switch (action.type) {
		case "OPEN_DRAWER":
			return { ...state, open: true };
		case "CLOSE_DRAWER":
			return { ...state, open: false };
		case "TOGGLE_DRAWER":
			return { ...state, open: !state.open };
		default:
			return { ...state };
	}
};
