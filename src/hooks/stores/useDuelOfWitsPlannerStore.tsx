import produce from "immer";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DuelOfWitsPlannerStoreVersion } from "./_persistOptions";

import { DuelOfWitsAction, DuelOfWitsActions } from "../../data/duelOfWits";


export interface DuelOfWitsActionExtended extends DuelOfWitsAction {
	open: boolean;
	visible: boolean;
}

interface DuelOfWitsPlannerState {
	volleyIndex: number;
	actions: [undefined | DuelOfWitsActionExtended, undefined | DuelOfWitsActionExtended, undefined | DuelOfWitsActionExtended];
	selectedAction: string;

	changeVolleyIndex: (volleyIndex: number) => void;
	addAction: (volleyIndex: number, actionName: undefined | string) => void;
	deleteAction: (volleyIndex: number) => void;
	selectedChangeAction: (actionName: string) => void;
	toggleActionDetails: (volleyIndex: number) => void;
	toggleActionVisibility: (volleyIndex: number) => void;
}

export const useDuelOfWitsPlannerStore = create<DuelOfWitsPlannerState>()(
	devtools(
		persist(
			(set) => ({
				volleyIndex: 0,
				actions: [undefined, undefined, undefined],
				selectedAction: "Avoid the Topic",

				changeVolleyIndex: (volleyIndex: number) => {
					set(produce<DuelOfWitsPlannerState>((state) => {
						state.volleyIndex = volleyIndex;
					}));
				},
				addAction: (volleyIndex: number, actionName: undefined | string) => {
					const action: DuelOfWitsActionExtended = { ...DuelOfWitsActions.find(v => v.name === actionName) as DuelOfWitsAction, open: false, visible: true };
					set(produce<DuelOfWitsPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (i === volleyIndex) return action;
							else return v;
						}) as [DuelOfWitsActionExtended, DuelOfWitsActionExtended, DuelOfWitsActionExtended];
					}));
				},
				deleteAction: (volleyIndex: number) => {
					set(produce<DuelOfWitsPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (i === volleyIndex) return undefined;
							else return v;
						}) as [DuelOfWitsActionExtended, DuelOfWitsActionExtended, DuelOfWitsActionExtended];

					}));
				},
				selectedChangeAction: (actionName: string) => {
					set(produce<DuelOfWitsPlannerState>((state) => {
						state.selectedAction = actionName;
					}));
				},
				toggleActionDetails: (volleyIndex: number) => {
					set(produce<DuelOfWitsPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (v && i === volleyIndex) { return { ...v, open: !v.open }; }
							return v;
						}) as [DuelOfWitsActionExtended, DuelOfWitsActionExtended, DuelOfWitsActionExtended];
					}));
				},
				toggleActionVisibility: (volleyIndex: number) => {
					set(produce<DuelOfWitsPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (v && i === volleyIndex) { return { ...v, visible: !v.visible }; }
							return v;
						}) as [DuelOfWitsActionExtended, DuelOfWitsActionExtended, DuelOfWitsActionExtended];

					}));
				}
			}),
			{
				name: "duel-of-wits-planner-storage",
				version: DuelOfWitsPlannerStoreVersion
			}
		)
	)
);
