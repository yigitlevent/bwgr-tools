import { RangeAndCoverActions, RangeAndCoverAction } from "../../data/rangeAndCover";


export interface RangeAndCoverActionExtended extends RangeAndCoverAction {
	open: boolean;
	visible: boolean;
}

interface ChangeVolleyIndex { type: "CHANGE_RANGE_AND_COVER_VOLLEY_INDEX"; payload: { volleyIndex: number; }; }
interface AddActionAction { type: "ADD_RANGE_AND_COVER_ACTION"; payload: { volleyIndex: number; action: RangeAndCoverActionExtended; }; }
interface DeleteActionAction { type: "DELETE_RANGE_AND_COVER_ACTION"; payload: { volleyIndex: number; }; }
interface ChangeSelectedActionAction { type: "CHANGE_RANGE_AND_COVER_SELECTED_ACTION"; payload: { volleyIndex: number; actionName: string; }; }
interface ToggleActionDetailsAction { type: "TOGGLE_RANGE_AND_COVER_ACTION_DETAILS"; payload: { volleyIndex: number; }; }
interface ToggleActionVisibilityAction { type: "TOGGLE_RANGE_AND_COVER_ACTION_VISIBILITY"; payload: { volleyIndex: number; }; }

export type RangeAndCoverActions = ChangeVolleyIndex | AddActionAction | DeleteActionAction | ChangeSelectedActionAction | ToggleActionDetailsAction | ToggleActionVisibilityAction;

export interface RangeAndCoverState {
	volleyIndex: number;
	actions: [undefined | RangeAndCoverActionExtended, undefined | RangeAndCoverActionExtended, undefined | RangeAndCoverActionExtended];
	selectedAction: string;
}

const INITIAL: RangeAndCoverState = {
	volleyIndex: 0,
	actions: [undefined, undefined, undefined],
	selectedAction: "Close"
};

export const RangeAndCoverReducer = (state = INITIAL, action: RangeAndCoverActions): RangeAndCoverState => {
	switch (action.type) {
		case "CHANGE_RANGE_AND_COVER_VOLLEY_INDEX":
			return { ...state, volleyIndex: action.payload.volleyIndex };
		case "ADD_RANGE_AND_COVER_ACTION":
			const avaa = state.actions.map((v, i) => {
				if (i === action.payload.volleyIndex) return action.payload.action;
				else return v;
			}) as [RangeAndCoverActionExtended, RangeAndCoverActionExtended, RangeAndCoverActionExtended];
			return { ...state, actions: avaa };
		case "DELETE_RANGE_AND_COVER_ACTION":
			const dvaa = state.actions.map((v, i) => {
				if (i === action.payload.volleyIndex) return undefined;
				else return v;
			}) as [RangeAndCoverActionExtended, RangeAndCoverActionExtended, RangeAndCoverActionExtended];
			return { ...state, actions: dvaa };
		case "CHANGE_RANGE_AND_COVER_SELECTED_ACTION":
			return { ...state, selectedAction: action.payload.actionName };
		case "TOGGLE_RANGE_AND_COVER_ACTION_DETAILS":
			const taa = state.actions.map((v, i) => {
				if (v && i === action.payload.volleyIndex) { return { ...v, open: !v.open }; }
				return v;
			}) as [RangeAndCoverActionExtended, RangeAndCoverActionExtended, RangeAndCoverActionExtended];
			return { ...state, actions: taa };
		case "TOGGLE_RANGE_AND_COVER_ACTION_VISIBILITY":
			const tav = state.actions.map((v, i) => {
				if (v && i === action.payload.volleyIndex) { return { ...v, visible: !v.visible }; }
				return v;
			}) as [RangeAndCoverActionExtended, RangeAndCoverActionExtended, RangeAndCoverActionExtended];
			return { ...state, actions: tav };
		default:
			return { ...state };
	}
};
