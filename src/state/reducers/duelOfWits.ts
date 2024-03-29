import { DuelOfWitsActions, DuelOfWitsAction } from "../../data/duelOfWits";


export interface DuelOfWitsActionExtended extends DuelOfWitsAction {
	open: boolean;
	visible: boolean;
}

interface ChangeVolleyIndex { type: "CHANGE_DUEL_OF_WITS_VOLLEY_INDEX"; payload: { volleyIndex: number; }; }
interface AddActionAction { type: "ADD_DUEL_OF_WITS_ACTION"; payload: { volleyIndex: number; action: DuelOfWitsActionExtended; }; }
interface DeleteActionAction { type: "DELETE_DUEL_OF_WITS_ACTION"; payload: { volleyIndex: number; }; }
interface ChangeSelectedActionAction { type: "CHANGE_DUEL_OF_WITS_SELECTED_ACTION"; payload: { volleyIndex: number; actionName: string; }; }
interface ToggleActionDetailsAction { type: "TOGGLE_DUEL_OF_WITS_ACTION_DETAILS"; payload: { volleyIndex: number; }; }
interface ToggleActionVisibilityAction { type: "TOGGLE_DUEL_OF_WITS_ACTION_VISIBILITY"; payload: { volleyIndex: number; }; }

export type DuelOfWitsActions = ChangeVolleyIndex | AddActionAction | DeleteActionAction | ChangeSelectedActionAction | ToggleActionDetailsAction | ToggleActionVisibilityAction;

export interface DuelOfWitsState {
	volleyIndex: number;
	actions: [undefined | DuelOfWitsActionExtended, undefined | DuelOfWitsActionExtended, undefined | DuelOfWitsActionExtended];
	selectedAction: string;
}

const INITIAL: DuelOfWitsState = {
	volleyIndex: 0,
	actions: [undefined, undefined, undefined],
	selectedAction: "Avoid the Topic"
};

export const DuelOfWitsReducer = (state = INITIAL, action: DuelOfWitsActions): DuelOfWitsState => {
	switch (action.type) {
		case "CHANGE_DUEL_OF_WITS_VOLLEY_INDEX":
			return { ...state, volleyIndex: action.payload.volleyIndex };
		case "ADD_DUEL_OF_WITS_ACTION":
			const cvaa = state.actions.map((v, i) => {
				if (i === action.payload.volleyIndex) return action.payload.action;
				else return v;
			}) as [DuelOfWitsActionExtended, DuelOfWitsActionExtended, DuelOfWitsActionExtended];
			return { ...state, actions: cvaa };
		case "DELETE_DUEL_OF_WITS_ACTION":
			const dvaa = state.actions.map((v, i) => {
				if (i === action.payload.volleyIndex) return undefined;
				else return v;
			}) as [DuelOfWitsActionExtended, DuelOfWitsActionExtended, DuelOfWitsActionExtended];
			return { ...state, actions: dvaa };
		case "CHANGE_DUEL_OF_WITS_SELECTED_ACTION":
			return { ...state, selectedAction: action.payload.actionName };
		case "TOGGLE_DUEL_OF_WITS_ACTION_DETAILS":
			const taa = state.actions.map((v, i) => {
				if (v && i === action.payload.volleyIndex) { return { ...v, open: !v.open }; }
				return v;
			}) as [DuelOfWitsActionExtended, DuelOfWitsActionExtended, DuelOfWitsActionExtended];
			return { ...state, actions: taa };
		case "TOGGLE_DUEL_OF_WITS_ACTION_VISIBILITY":
			const tav = state.actions.map((v, i) => {
				if (v && i === action.payload.volleyIndex) { return { ...v, visible: !v.visible }; }
				return v;
			}) as [DuelOfWitsActionExtended, DuelOfWitsActionExtended, DuelOfWitsActionExtended];
			return { ...state, actions: tav };
		default:
			return { ...state };
	}
};
