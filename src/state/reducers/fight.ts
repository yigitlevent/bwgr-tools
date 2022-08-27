import { FightActions, FightAction } from "../../data/fight";


export interface FightActionExtended extends FightAction {
	open: boolean;
	visible: boolean;
}

interface ChangeReflexesAction { type: "CHANGE_FIGHT_REFLEXES"; payload: { reflexes: number; }; }
interface ChangeVolleyIndex { type: "CHANGE_FIGHT_VOLLEY_INDEX"; payload: { volleyIndex: number; }; }
interface AddActionAction { type: "ADD_FIGHT_ACTION"; payload: { volleyIndex: number; action: FightActionExtended; }; }
interface DeleteActionAction { type: "DELETE_FIGHT_ACTION"; payload: { volleyIndex: number; actionIndex: number; }; }
interface ChangeSelectedActionAction { type: "CHANGE_FIGHT_SELECTED_ACTION"; payload: { volleyIndex: number; actionName: string; }; }
interface ToggleActionDetailsAction { type: "TOGGLE_FIGHT_ACTION_DETAILS"; payload: { volleyIndex: number; actionIndex: number; }; }
interface ToggleActionVisibilityAction { type: "TOGGLE_FIGHT_ACTION_VISIBILITY"; payload: { volleyIndex: number; actionIndex: number; }; }

export type FightActions = ChangeReflexesAction | ChangeVolleyIndex | AddActionAction | DeleteActionAction | ChangeSelectedActionAction | ToggleActionDetailsAction | ToggleActionVisibilityAction;

export interface FightState {
	reflexes: number;
	volleyIndex: number;
	actions: [FightActionExtended[], FightActionExtended[], FightActionExtended[]];
	selectedAction: string;
}

const INITIAL: FightState = {
	reflexes: 3,
	volleyIndex: 0,
	actions: [[], [], []],
	selectedAction: "No Action"
};

export const FightReducer = (state = INITIAL, action: FightActions): FightState => {
	switch (action.type) {
		case "CHANGE_FIGHT_REFLEXES":
			return { ...state, reflexes: action.payload.reflexes };
		case "CHANGE_FIGHT_VOLLEY_INDEX":
			return { ...state, volleyIndex: action.payload.volleyIndex };
		case "ADD_FIGHT_ACTION":
			const afa = state.actions.map((v, i) => {
				if (i === action.payload.volleyIndex) { return [...v, action.payload.action]; }
				return v;
			}) as [FightActionExtended[], FightActionExtended[], FightActionExtended[]];
			return { ...state, actions: afa };
		case "DELETE_FIGHT_ACTION":
			const dfa = state.actions.map((v, i) => {
				if (i === action.payload.volleyIndex) { return v.filter((vv, ii) => ii !== action.payload.actionIndex); }
				return v;
			}) as [FightActionExtended[], FightActionExtended[], FightActionExtended[]];
			return { ...state, actions: dfa };
		case "CHANGE_FIGHT_SELECTED_ACTION":
			return { ...state, selectedAction: action.payload.actionName };
		case "TOGGLE_FIGHT_ACTION_DETAILS":
			const tfad = state.actions.map((v, i) => {
				if (i === action.payload.volleyIndex) {
					return v.map((vv, ii) => {
						if (ii === action.payload.actionIndex) { return { ...vv, open: !vv.open }; }
						return vv;
					});
				}
				return v;
			}) as [FightActionExtended[], FightActionExtended[], FightActionExtended[]];
			return { ...state, actions: tfad };
		case "TOGGLE_FIGHT_ACTION_VISIBILITY":
			const tfav = state.actions.map((v, i) => {
				if (i === action.payload.volleyIndex) {
					return v.map((vv, ii) => {
						if (ii === action.payload.actionIndex) { return { ...vv, visible: !vv.visible }; }
						return vv;
					});
				}
				return v;
			}) as [FightActionExtended[], FightActionExtended[], FightActionExtended[]];
			return { ...state, actions: tfav };
		default:
			return { ...state };
	}
};
