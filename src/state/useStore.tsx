import { ChangeEvent, FormEvent } from "react";

import { SelectChangeEvent } from "@mui/material/Select";

import { useAppDispatch } from "./store";
import { TestResult } from "./reducers/diceRoller";
import { PracticeTable } from "../data/tables";
import type { DuelOfWitsActionExtended } from "./reducers/duelOfWits";
import { DuelOfWitsAction, DuelOfWitsActions } from "../data/duelOfWits";
import { RangeAndCoverActionExtended } from "./reducers/rangeAndCover";
import { RangeAndCoverAction, RangeAndCoverActions } from "../data/rangeAndCover";
import type { FightActionExtended } from "./reducers/fight";
import { FightAction, FightActions } from "../data/fight";
import { Clamp } from "../utils/misc";

import { Notification } from "../components/Shared/Notification";


export function useStore() {
	const dispatch = useAppDispatch();

	// DATASET
	const dataset = {
		dtsToggleDataset: (value: "bwg" | "bwc" | "msc") => {
			dispatch({ type: "TOGGLE_DATASET", payload: { dataset: value } });
		}
	};

	// DRAWER
	const drawer = {
		drwToggleDrawer: () => {
			dispatch({ type: "TOGGLE_DRAWER" });
		},
		drwCloseDrawer: () => {
			dispatch({ type: "CLOSE_DRAWER" });
		}
	};

	// DICE ROLLER
	const diceRoller = {
		dirChangeShade: (shade: string) => {
			dispatch({ type: "CHANGE_DICE_ROLLER_SHADE", payload: { shade } });
		},
		dirChangeDicePool: (dicePool: number) => {
			const value = Clamp(dicePool, 0, 50);
			dispatch({ type: "CHANGE_DICE_ROLLER_DICE_POOL", payload: { dicePool: value } });
		},
		dirChangeObstacle: (obstacle: number) => {
			const value = Clamp(obstacle, 0, 50);
			dispatch({ type: "CHANGE_DICE_ROLLER_OBSTACLE", payload: { obstacle: value } });
		},
		dirToggleIsOpenEnded: () => {
			dispatch({ type: "TOGGLE_DICE_ROLLER_IS_OPEN_ENDED" });
		},
		dirToggleIsDoubleObstacle: () => {
			dispatch({ type: "TOGGLE_DICE_ROLLER_IS_DOUBLE_OBSTACLE" });
		},
		dirSetResult: (dice: number[], successes: number, failures: number, test: string, usedFate: boolean) => {
			const result: TestResult = { dice, successes, failures, test, usedFate };
			dispatch({ type: "SET_DICE_ROLLER_RESULT", payload: { result } });
		}
	};

	// LIFEPATH LIST
	const lifepathList = {
		lplChangeStock: (event: SelectChangeEvent) => {
			dispatch({ type: "CHANGE_LIFEPATH_LIST_STOCK", payload: { stock: event.target.value } });
		},
		lplChangeSetting: (event: SelectChangeEvent) => {
			dispatch({ type: "CHANGE_LIFEPATH_LIST_SETTING", payload: { setting: event.target.value } });
		}
	};

	// SKILL LIST
	const skillList = {
		sklChangeCategory: (event: SelectChangeEvent) => {
			dispatch({ type: "CHANGE_SKILL_LIST_CATEGORY", payload: { category: event.target.value } });
		}
	};

	// TRAIT LIST
	const traitList = {
		trtChangeCategory: (event: SelectChangeEvent) => {
			dispatch({ type: "CHANGE_TRAIT_LIST_CATEGORY", payload: { category: event.target.value } });
		}
	};


	// RESOURCE LIST
	const resourceList = {
		rscChangeStock: (event: SelectChangeEvent) => {
			dispatch({ type: "CHANGE_RESOURCE_LIST_STOCK", payload: { stock: event.target.value } });
		}
	};

	// LIFEPATH RANDOMIZER
	const lifepathRandomizer = {
		lprChangeStock: (event: SelectChangeEvent) => {
			dispatch({ type: "CHANGE_LP_RANDOMIZER_STOCK", payload: { stock: event.target.value } });
		},
		lprChangeMaxLeads: (event: ChangeEvent<HTMLInputElement>) => {
			const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
			dispatch({ type: "CHANGE_LP_RANDOMIZER_MAX_LEADS", payload: { maxLeads: value } });
		},
		lprChangeMaxLPs: (event: ChangeEvent<HTMLInputElement>) => {
			const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
			dispatch({ type: "CHANGE_LP_RANDOMIZER_MAX_LIFEPATHS", payload: { maxLifepaths: value } });
		},
		lprChangeMinLPs: (event: ChangeEvent<HTMLInputElement>) => {
			const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
			dispatch({ type: "CHANGE_LP_RANDOMIZER_MIN_LIFEPATHS", payload: { minLifepaths: value } });
		},
		lprToggleNoDuplicates: () => {
			dispatch({ type: "TOGGLE_LP_RANDOMIZER_NO_DUPLICATES" });
		}
	};

	// PRACTICE PLANNER
	const practicePlanner = {
		prpChangeDays: (event: ChangeEvent<HTMLInputElement>) => {
			const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 30);
			dispatch({ type: "CHANGE_PRACTICE_PLANNER_DAYS", payload: { days: value } });
		},
		prpChangeHours: (event: ChangeEvent<HTMLInputElement>) => {
			const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 1, 24);
			dispatch({ type: "CHANGE_PRACTICE_PLANNER_HOURS", payload: { hours: value } });
		},
		prpAddCells: (days: number, hours: number) => {
			dispatch({ type: "ADD_PRACTICE_PLANNER_CELLS", payload: { days, hours } });
		},
		prpDeleteCell: (cellIndex: number) => {
			dispatch({ type: "DELETE_PRACTICE_PLANNER_CELL", payload: { cellIndex } });
		},
		prpChangeCellHour: (cellIndex: number, change: 1 | -1, cells: Cell[], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
			if (cells[cellIndex].remaining === 0 && change === -1) {
				setNotification(<Notification text="Cannot reduce hours from day. It is used by practices." severity="error" onClose={() => setNotification(null)} />);
			}
			else {
				dispatch({ type: "CHANGE_PRACTICE_PLANNER_CELL_HOURS", payload: { cellIndex, change } });
				setNotification(null);
			}
		},
		prpAddPractice: (e: FormEvent<HTMLFormElement>, cells: Cell[], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
			e.preventDefault();
			const els = Object.values((e.target as HTMLFormElement).elements) as HTMLInputElement[];
			const [cIndex, sType, tType, sName] = els.filter(v => v.tagName === "INPUT" && v.type === "text").map((v) => v.value);
			const hours = PracticeTable[sType][tType];
			const cellIndex = parseInt(cIndex);

			if (sName === "") {
				setNotification(<Notification text="Please enter a Skill name." severity="error" onClose={() => setNotification(null)} />);
			}
			else if (cells[cellIndex].remaining - hours < 0) {
				setNotification(<Notification text={`Cannot fit practice into the day. This practice takes ${hours} hours.`} severity="error" onClose={() => setNotification(null)} />);
			}
			else {
				const practice: Practice = { skillName: sName, skillType: sType, testType: tType, hours: PracticeTable[sType][tType] };
				dispatch({ type: "ADD_PRACTICE_PLANNER_PRACTICE", payload: { cellIndex, practice } });
				setNotification(null);
			}
		},
		prpDeletePractice: (cellIndex: number, practiceIndex: number) => {
			dispatch({ type: "DELETE_PRACTICE_PLANNER_PRACTICE", payload: { cellIndex, practiceIndex } });
		}
	};

	// MAGIC WHEEL
	const magicWheel = {
		mgwChangeAOE: (event: SelectChangeEvent | string) => {
			const aoe = (typeof event === "string") ? event : event.target.value;
			dispatch({ type: "CHANGE_MAGIC_WHEEL_AOE", payload: { aoe } });
		},
		mgwChangeElement: (event: SelectChangeEvent | string) => {
			const element = (typeof event === "string") ? event : event.target.value;
			dispatch({ type: "CHANGE_MAGIC_WHEEL_ELEMENT", payload: { element } });
		},
		mgwChangeImpetus: (event: SelectChangeEvent | string) => {
			const impetus = (typeof event === "string") ? event : event.target.value;
			dispatch({ type: "CHANGE_MAGIC_WHEEL_IMPETUS", payload: { impetus } });
		},
		mgwChangeDuration: (event: SelectChangeEvent | string) => {
			const duration = (typeof event === "string") ? event : event.target.value;
			dispatch({ type: "CHANGE_MAGIC_WHEEL_DURATION", payload: { duration } });
		},
		mgwChangeOrigin: (event: SelectChangeEvent | string) => {
			const origin = (typeof event === "string") ? event : event.target.value;
			dispatch({ type: "CHANGE_MAGIC_WHEEL_ORIGIN", payload: { origin } });
		},
		mgwChangeDirection: (event: SelectChangeEvent) => {
			dispatch({ type: "CHANGE_MAGIC_WHEEL_DIRECTION", payload: { direction: event.target.value as any } });
		},
		mgwChangeSteps: (event: ChangeEvent<HTMLInputElement>) => {
			const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
			dispatch({ type: "CHANGE_MAGIC_WHEEL_STEPS", payload: { steps: value } });
		},
		mgwToggleCover: () => {
			dispatch({ type: "TOGGLE_MAGIC_WHEEL_COVER" });
		}
	};

	// DUEL OF WITS
	const duelOfWits = {
		dowChangeVolleyIndex: (volleyIndex: number) => {
			dispatch({ type: "CHANGE_DUEL_OF_WITS_VOLLEY_INDEX", payload: { volleyIndex: volleyIndex } });
		},
		dowAddAction: (volleyIndex: number, actionName: undefined | string) => {
			const action: DuelOfWitsActionExtended = { ...DuelOfWitsActions.find(v => v.name === actionName) as DuelOfWitsAction, open: false, visible: true };
			dispatch({ type: "ADD_DUEL_OF_WITS_ACTION", payload: { volleyIndex, action } });
		},
		dowDeleteAction: (volleyIndex: number) => {
			dispatch({ type: "DELETE_DUEL_OF_WITS_ACTION", payload: { volleyIndex } });
		},
		dowSelectedChangeAction: (volleyIndex: number, actionName: string) => {
			dispatch({ type: "CHANGE_DUEL_OF_WITS_SELECTED_ACTION", payload: { volleyIndex, actionName } });
		},
		dowToggleActionDetails: (volleyIndex: number) => {
			dispatch({ type: "TOGGLE_DUEL_OF_WITS_ACTION_DETAILS", payload: { volleyIndex } });
		},
		dowToggleActionVisibility: (volleyIndex: number) => {
			dispatch({ type: "TOGGLE_DUEL_OF_WITS_ACTION_VISIBILITY", payload: { volleyIndex } });
		}
	};

	// RANGE AND COVER
	const rangeAndCover = {
		racChangeVolleyIndex: (volleyIndex: number) => {
			dispatch({ type: "CHANGE_RANGE_AND_COVER_VOLLEY_INDEX", payload: { volleyIndex: volleyIndex } });
		},
		racAddAction: (volleyIndex: number, actionName: string) => {
			const action: RangeAndCoverActionExtended = { ...RangeAndCoverActions.find(v => v.name === actionName) as RangeAndCoverAction, open: false, visible: true };
			dispatch({ type: "ADD_RANGE_AND_COVER_ACTION", payload: { volleyIndex, action } });
		},
		racDeleteAction: (volleyIndex: number) => {
			dispatch({ type: "DELETE_RANGE_AND_COVER_ACTION", payload: { volleyIndex } });
		},
		racSelectedChangeAction: (volleyIndex: number, actionName: string) => {
			dispatch({ type: "CHANGE_RANGE_AND_COVER_SELECTED_ACTION", payload: { volleyIndex, actionName } });
		},
		racToggleActionDetails: (volleyIndex: number) => {
			dispatch({ type: "TOGGLE_RANGE_AND_COVER_ACTION_DETAILS", payload: { volleyIndex } });
		},
		racToggleActionVisibility: (volleyIndex: number) => {
			dispatch({ type: "TOGGLE_RANGE_AND_COVER_ACTION_VISIBILITY", payload: { volleyIndex } });
		}
	};

	// FIGHT
	const fight = {
		fgtChangeReflexes: (reflexes: number, actions: [FightActionExtended[], FightActionExtended[], FightActionExtended[]], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
			const flatActions = actions.flat().filter(v => v.name !== "No Action");
			if (flatActions.length > reflexes) {
				setNotification(<Notification text="Cannot decrease reflex. Remove some actions and try again." severity="error" onClose={() => setNotification(null)} />);
			}
			else {
				const value = Clamp(reflexes, 0, 12);
				dispatch({ type: "CHANGE_FIGHT_REFLEXES", payload: { reflexes: value } });
				setNotification(null);
			}
		},
		fgtChangeVolleyIndex: (volleyIndex: number) => {
			dispatch({ type: "CHANGE_FIGHT_VOLLEY_INDEX", payload: { volleyIndex: volleyIndex } });
		},
		fgtAddAction: (volleyIndex: number, actionName: undefined | string, reflexes: number, actions: [FightActionExtended[], FightActionExtended[], FightActionExtended[]], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
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
				dispatch({ type: "ADD_FIGHT_ACTION", payload: { volleyIndex, action } });
				setNotification(null);
			}
		},
		fgtDeleteAction: (volleyIndex: number, actionIndex: number) => {
			dispatch({ type: "DELETE_FIGHT_ACTION", payload: { volleyIndex, actionIndex } });
		},
		fgtChangeSelectedAction: (volleyIndex: number, actionName: string) => {
			dispatch({ type: "CHANGE_FIGHT_SELECTED_ACTION", payload: { volleyIndex, actionName } });
		},
		fgtToggleActionDetails: (volleyIndex: number, actionIndex: number) => {
			dispatch({ type: "TOGGLE_FIGHT_ACTION_DETAILS", payload: { volleyIndex, actionIndex } });
		},
		fgtToggleActionVisibility: (volleyIndex: number, actionIndex: number) => {
			dispatch({ type: "TOGGLE_FIGHT_ACTION_VISIBILITY", payload: { volleyIndex, actionIndex } });
		}
	};

	return {
		dataset, drawer,
		diceRoller,
		lifepathList, skillList, traitList, resourceList,
		lifepathRandomizer, practicePlanner, magicWheel,
		duelOfWits, rangeAndCover, fight
	};
}
