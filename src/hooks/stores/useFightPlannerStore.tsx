import produce from "immer";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FightPlannerStoreVersion } from "./_persistOptions";

import { FightAction, FightActions } from "../../data/fight";
import { Clamp } from "../../utils/misc";

import { Notification } from "../../components/Shared/Notification";


export interface FightActionExtended extends FightAction {
	open: boolean;
	visible: boolean;
}

interface FightPlannerState {
	reflexes: number;
	volleyIndex: number;
	actions: [FightActionExtended[], FightActionExtended[], FightActionExtended[]];
	selectedAction: string;

	changeReflexes: (reflexes: number, actions: [FightActionExtended[], FightActionExtended[], FightActionExtended[]], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => void;
	changeVolleyIndex: (volleyIndex: number) => void;
	addAction: (volleyIndex: number, actionName: undefined | string, reflexes: number, actions: [FightActionExtended[], FightActionExtended[], FightActionExtended[]], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => void;
	deleteAction: (volleyIndex: number, actionIndex: number) => void;
	changeSelectedAction: (actionName: string) => void;
	toggleActionDetails: (volleyIndex: number, actionIndex: number) => void;
	toggleActionVisibility: (volleyIndex: number, actionIndex: number) => void;
}

export const useFightPlannerStore = create<FightPlannerState>()(
	devtools(
		persist(
			(set) => ({
				reflexes: 3,
				volleyIndex: 0,
				actions: [[], [], []],
				selectedAction: "No Action",

				changeReflexes: (reflexes: number, actions: [FightActionExtended[], FightActionExtended[], FightActionExtended[]], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
					const flatActions = actions.flat().filter(v => v.name !== "No Action");
					if (flatActions.length > reflexes) {
						setNotification(<Notification text="Cannot decrease reflex. Remove some actions and try again." severity="error" onClose={() => setNotification(null)} />);
					}
					else {
						set(produce<FightPlannerState>((state) => {
							state.reflexes = Clamp(reflexes, 0, 12);
						}));
						setNotification(null);
					}
				},
				changeVolleyIndex: (volleyIndex: number) => {
					set(produce<FightPlannerState>((state) => {
						state.volleyIndex = volleyIndex;
					}));
				},
				addAction: (volleyIndex: number, actionName: undefined | string, reflexes: number, actions: [FightActionExtended[], FightActionExtended[], FightActionExtended[]], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
					const lengths = [
						actions[0].filter(v => v.name !== "No Action").length,
						actions[1].filter(v => v.name !== "No Action").length,
						actions[2].filter(v => v.name !== "No Action").length
					];
					const flatActions = actions.flat().filter(v => v.name !== "No Action");

					if (flatActions.length === reflexes && actionName !== "No Action") {
						setNotification(<Notification text="Cannot add action because reflex maximum is reached." severity="error" onClose={() => setNotification(null)} />);
					}
					else if (lengths[volleyIndex] > Math.min(...lengths)) {
						setNotification(<Notification text="Cannot add action because volleys would be uneven." severity="error" onClose={() => setNotification(null)} />);
					}
					else {
						const action: FightActionExtended = { ...FightActions.find(v => v.name === actionName) as FightAction, open: false, visible: true };
						set(produce<FightPlannerState>((state) => {
							const newActions = state.actions;
							state.actions = newActions.map((v, i) => {
								if (i === volleyIndex) { return [...v, action]; }
								return v;
							}) as [FightActionExtended[], FightActionExtended[], FightActionExtended[]];
						}));
						setNotification(null);
					}
				},
				deleteAction: (volleyIndex: number, actionIndex: number) => {
					set(produce<FightPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (i === volleyIndex) { return v.filter((vv, ii) => ii !== actionIndex); }
							return v;
						}) as [FightActionExtended[], FightActionExtended[], FightActionExtended[]];
					}));
				},
				changeSelectedAction: (actionName: string) => {
					set(produce<FightPlannerState>((state) => {
						state.selectedAction = actionName;
					}));
				},
				toggleActionDetails: (volleyIndex: number, actionIndex: number) => {
					set(produce<FightPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (i === volleyIndex) {
								return v.map((vv, ii) => {
									if (ii === actionIndex) { return { ...vv, open: !vv.open }; }
									return vv;
								});
							}
							return v;
						}) as [FightActionExtended[], FightActionExtended[], FightActionExtended[]];
					}));
				},
				toggleActionVisibility: (volleyIndex: number, actionIndex: number) => {
					set(produce<FightPlannerState>((state) => {
						const newActions = state.actions;
						state.actions = newActions.map((v, i) => {
							if (i === volleyIndex) {
								return v.map((vv, ii) => {
									if (ii === actionIndex) { return { ...vv, visible: !vv.visible }; }
									return vv;
								});
							}
							return v;
						}) as [FightActionExtended[], FightActionExtended[], FightActionExtended[]];
					}));
				}
			}),
			{
				name: "fight-planner-storage",
				version: FightPlannerStoreVersion
			}
		)
	)
);
