import produce from "immer";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { RangeAndCoverPlannerStoreVersion } from "./_persistOptions";

import { RangeAndCoverAction, RangeAndCoverActions } from "../../data/rangeAndCover";


export interface RangeAndCoverActionExtended extends RangeAndCoverAction {
	open: boolean;
	visible: boolean;
}

interface RangeAndCoverPlannerState {
	volleyIndex: number;
	actions: [undefined | RangeAndCoverActionExtended, undefined | RangeAndCoverActionExtended, undefined | RangeAndCoverActionExtended];
	selectedAction: string;

	changeVolleyIndex: (volleyIndex: number) => void;
	addAction: (volleyIndex: number, actionName: string) => void;
	deleteAction: (volleyIndex: number) => void;
	selectedChangeAction: (actionName: string) => void;
	toggleActionDetails: (volleyIndex: number) => void;
	toggleActionVisibility: (volleyIndex: number) => void;
}

export const useRangeAndCoverPlannerStore = create<RangeAndCoverPlannerState>()(
	devtools(
		persist(
			(set) => ({
				volleyIndex: 0,
				actions: [undefined, undefined, undefined],
				selectedAction: "Close",

				changeVolleyIndex: (volleyIndex: number) => {
					set(produce<RangeAndCoverPlannerState>((state) => {
						state.volleyIndex = volleyIndex;
					}));
				},
				addAction: (volleyIndex: number, actionName: string) => {
					const action: RangeAndCoverActionExtended = { ...RangeAndCoverActions.find(v => v.name === actionName) as RangeAndCoverAction, open: false, visible: true };
					set(produce<RangeAndCoverPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (i === volleyIndex) return action;
							else return v;
						}) as [RangeAndCoverActionExtended, RangeAndCoverActionExtended, RangeAndCoverActionExtended];
					}));
				},
				deleteAction: (volleyIndex: number) => {
					set(produce<RangeAndCoverPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (i === volleyIndex) return undefined;
							else return v;
						}) as [RangeAndCoverActionExtended, RangeAndCoverActionExtended, RangeAndCoverActionExtended];
					}));
				},
				selectedChangeAction: (actionName: string) => {
					set(produce<RangeAndCoverPlannerState>((state) => {
						state.selectedAction = actionName;
					}));
				},
				toggleActionDetails: (volleyIndex: number) => {
					set(produce<RangeAndCoverPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (v && i === volleyIndex) { return { ...v, open: !v.open }; }
							return v;
						}) as [RangeAndCoverActionExtended, RangeAndCoverActionExtended, RangeAndCoverActionExtended];
					}));
				},
				toggleActionVisibility: (volleyIndex: number) => {
					set(produce<RangeAndCoverPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (v && i === volleyIndex) { return { ...v, visible: !v.visible }; }
							return v;
						}) as [RangeAndCoverActionExtended, RangeAndCoverActionExtended, RangeAndCoverActionExtended];
					}));
				}
			}),
			{
				name: "range-and-cover-planner-storage",
				version: RangeAndCoverPlannerStoreVersion
			}
		)
	)
);
