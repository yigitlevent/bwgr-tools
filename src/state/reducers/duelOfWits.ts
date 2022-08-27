import { DuelOfWitsActions } from "../../data/duelOfWits";

export interface DuelOfWitsAction {
	name: string;
	tests?: string[];
	speakingThePart?: string;
	special?: string;
	effects?: string;
	resolution: { [key: string]: "Vs" | "Std" | "Ob 1" | `Ob=${StatsList}`; };
}

interface ChangeVolleyIndex { type: "CHANGE_DUEL_OF_WITS_VOLLEY_INDEX"; payload: { volleyIndex: number; }; }
interface ChangeActionAction { type: "CHANGE_DUEL_OF_WITS_ACTION"; payload: { volleyIndex: number; action: undefined | DuelOfWitsAction; }; }
interface ChangeSelectedActionAction { type: "CHANGE_DUEL_OF_WITS_SELECTED_ACTION"; payload: { volleyIndex: number; actionName: string; }; }
interface ToggleActionDetailsAction { type: "TOGGLE_DUEL_OF_WITS_ACTION_DETAILS"; payload: { volleyIndex: number; }; }
interface ToggleActionVisibilityAction { type: "TOGGLE_DUEL_OF_WITS_ACTION_VISIBILITY"; payload: { volleyIndex: number; }; }

export type DuelOfWitsActions = ChangeVolleyIndex | ChangeActionAction | ChangeSelectedActionAction | ToggleActionDetailsAction | ToggleActionVisibilityAction;

export interface DuelOfWitsState {
	volleyIndex: number;
	actions: [undefined | DuelOfWitsAction, undefined | DuelOfWitsAction, undefined | DuelOfWitsAction];
	selectedAction: string;
	open: [boolean, boolean, boolean];
	visible: [boolean, boolean, boolean];
}

const INITIAL: DuelOfWitsState = {
	volleyIndex: 0,
	actions: [undefined, undefined, undefined],
	selectedAction: "Avoid the Topic",
	open: [false, false, false],
	visible: [true, true, true]
};

export const DuelOfWitsReducer = (state = INITIAL, action: DuelOfWitsActions): DuelOfWitsState => {
	switch (action.type) {
		case "CHANGE_DUEL_OF_WITS_VOLLEY_INDEX":
			return { ...state, volleyIndex: action.payload.volleyIndex };
		case "CHANGE_DUEL_OF_WITS_ACTION":
			const cvaa = state.actions.map((v, i) => {
				if (i === action.payload.volleyIndex) return action.payload.action;
				else return v;
			}) as [DuelOfWitsAction, DuelOfWitsAction, DuelOfWitsAction];
			return { ...state, actions: cvaa };
		case "CHANGE_DUEL_OF_WITS_SELECTED_ACTION":
			return { ...state, selectedAction: action.payload.actionName };
		case "TOGGLE_DUEL_OF_WITS_ACTION_DETAILS":
			const taa = state.open.map((v, i) => {
				if (i === action.payload.volleyIndex) return !v;
				else return v;
			}) as [boolean, boolean, boolean];
			return { ...state, open: taa };
		case "TOGGLE_DUEL_OF_WITS_ACTION_VISIBILITY":
			const tav = state.visible.map((v, i) => {
				if (i === action.payload.volleyIndex) return !v;
				else return v;
			}) as [boolean, boolean, boolean];
			return { ...state, visible: tav };
		default:
			return { ...state };
	}
};
