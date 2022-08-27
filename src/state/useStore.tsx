import { ChangeEvent, FormEvent } from "react";

import { SelectChangeEvent } from "@mui/material/Select";

import { useAppDispatch } from "./store";
import type { DrawerItem } from "./reducers/drawer";
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

	// DRAWER
	const drwToggleDrawer = () => {
		dispatch({ type: "TOGGLE_DRAWER" });
	};

	const drwCloseDrawer = () => {
		dispatch({ type: "CLOSE_DRAWER" });
	};

	const drwSetSelectedItem = (value: DrawerItem) => {
		dispatch({ type: "SELECT_DRAWER_ITEM", payload: { selected: value } });
	};

	// LIFEPATH LIST
	const lplChangeStock = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_LIFEPATH_LIST_STOCK", payload: { stock: event.target.value } });
	};

	const lplChangeSetting = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_LIFEPATH_LIST_SETTING", payload: { setting: event.target.value } });
	};

	// SKILL LIST
	const sklChangeCategory = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_SKILL_LIST_CATEGORY", payload: { category: event.target.value } });
	};

	// TRAIT LIST
	const trtChangeCategory = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_TRAIT_LIST_CATEGORY", payload: { category: event.target.value } });
	};

	// LIFEPATH RANDOMIZER
	const lprChangeStock = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_LP_RANDOMIZER_STOCK", payload: { stock: event.target.value } });
	};

	const lprChangeMaxLeads = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_LP_RANDOMIZER_MAX_LEADS", payload: { maxLeads: value } });
	};

	const lprChangeMaxLPs = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_LP_RANDOMIZER_MAX_LIFEPATHS", payload: { maxLifepaths: value } });
	};

	const lprChangeMinLPs = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_LP_RANDOMIZER_MIN_LIFEPATHS", payload: { minLifepaths: value } });
	};

	const lprToggleNoDuplicates = () => {
		dispatch({ type: "TOGGLE_LP_RANDOMIZER_NO_DUPLICATES" });
	};

	// PRACTICE PLANNER
	const prpChangeDays = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 30);
		dispatch({ type: "CHANGE_PRACTICE_PLANNER_DAYS", payload: { days: value } });
	};

	const prpChangeHours = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 1, 24);
		dispatch({ type: "CHANGE_PRACTICE_PLANNER_HOURS", payload: { hours: value } });
	};

	const prpAddCells = (days: number, hours: number) => {
		dispatch({ type: "ADD_PRACTICE_PLANNER_CELLS", payload: { days, hours } });
	};

	const prpDeleteCell = (cellIndex: number) => {
		dispatch({ type: "DELETE_PRACTICE_PLANNER_CELL", payload: { cellIndex } });
	};

	const prpChangeCellHour = (cellIndex: number, change: 1 | -1, cells: Cell[], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
		if (cells[cellIndex].remaining === 0 && change === -1) {
			setNotification(<Notification text="Cannot reduce hours from day. It is used by practices." severity="error" onClose={() => setNotification(null)} />);
		}
		else {
			dispatch({ type: "CHANGE_PRACTICE_PLANNER_CELL_HOURS", payload: { cellIndex, change } });
			setNotification(null);
		}
	};

	const prpAddPractice = (e: FormEvent<HTMLFormElement>, cells: Cell[], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
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
	};

	const prpDeletePractice = (cellIndex: number, practiceIndex: number) => {
		dispatch({ type: "DELETE_PRACTICE_PLANNER_PRACTICE", payload: { cellIndex, practiceIndex } });
	};

	// MAGIC WHEEL
	const mgwChangeAOE = (event: SelectChangeEvent | string) => {
		const aoe = (typeof event === "string") ? event : event.target.value;
		dispatch({ type: "CHANGE_MAGIC_WHEEL_AOE", payload: { aoe } });
	};

	const mgwChangeElement = (event: SelectChangeEvent | string) => {
		const element = (typeof event === "string") ? event : event.target.value;
		dispatch({ type: "CHANGE_MAGIC_WHEEL_ELEMENT", payload: { element } });
	};

	const mgwChangeImpetus = (event: SelectChangeEvent | string) => {
		const impetus = (typeof event === "string") ? event : event.target.value;
		dispatch({ type: "CHANGE_MAGIC_WHEEL_IMPETUS", payload: { impetus } });
	};

	const mgwChangeDuration = (event: SelectChangeEvent | string) => {
		const duration = (typeof event === "string") ? event : event.target.value;
		dispatch({ type: "CHANGE_MAGIC_WHEEL_DURATION", payload: { duration } });
	};

	const mgwChangeOrigin = (event: SelectChangeEvent | string) => {
		const origin = (typeof event === "string") ? event : event.target.value;
		dispatch({ type: "CHANGE_MAGIC_WHEEL_ORIGIN", payload: { origin } });
	};

	const mgwChangeDirection = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_MAGIC_WHEEL_DIRECTION", payload: { direction: event.target.value as any } });
	};

	const mgwChangeSteps = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_MAGIC_WHEEL_STEPS", payload: { steps: value } });
	};

	const mgwToggleCover = () => {
		dispatch({ type: "TOGGLE_MAGIC_WHEEL_COVER" });
	};

	// DUEL OF WITS
	const dowChangeVolleyIndex = (volleyIndex: number) => {
		dispatch({ type: "CHANGE_DUEL_OF_WITS_VOLLEY_INDEX", payload: { volleyIndex: volleyIndex } });
	};

	const dowAddAction = (volleyIndex: number, actionName: undefined | string) => {
		const action: DuelOfWitsActionExtended = { ...DuelOfWitsActions.find(v => v.name === actionName) as DuelOfWitsAction, open: false, visible: true };
		dispatch({ type: "ADD_DUEL_OF_WITS_ACTION", payload: { volleyIndex, action } });
	};

	const dowDeleteAction = (volleyIndex: number) => {
		dispatch({ type: "DELETE_DUEL_OF_WITS_ACTION", payload: { volleyIndex } });
	};

	const dowSelectedChangeAction = (volleyIndex: number, actionName: string) => {
		dispatch({ type: "CHANGE_DUEL_OF_WITS_SELECTED_ACTION", payload: { volleyIndex, actionName } });
	};

	const dowToggleActionDetails = (volleyIndex: number) => {
		dispatch({ type: "TOGGLE_DUEL_OF_WITS_ACTION_DETAILS", payload: { volleyIndex } });
	};

	const dowToggleActionVisibility = (volleyIndex: number) => {
		dispatch({ type: "TOGGLE_DUEL_OF_WITS_ACTION_VISIBILITY", payload: { volleyIndex } });
	};

	// RANGE AND COVER
	const racChangeVolleyIndex = (volleyIndex: number) => {
		dispatch({ type: "CHANGE_RANGE_AND_COVER_VOLLEY_INDEX", payload: { volleyIndex: volleyIndex } });
	};

	const racAddAction = (volleyIndex: number, actionName: string) => {
		const action: RangeAndCoverActionExtended = { ...RangeAndCoverActions.find(v => v.name === actionName) as RangeAndCoverAction, open: false, visible: true };
		dispatch({ type: "ADD_RANGE_AND_COVER_ACTION", payload: { volleyIndex, action } });
	};

	const racDeleteAction = (volleyIndex: number) => {
		dispatch({ type: "DELETE_RANGE_AND_COVER_ACTION", payload: { volleyIndex } });
	};

	const racSelectedChangeAction = (volleyIndex: number, actionName: string) => {
		dispatch({ type: "CHANGE_RANGE_AND_COVER_SELECTED_ACTION", payload: { volleyIndex, actionName } });
	};

	const racToggleActionDetails = (volleyIndex: number) => {
		dispatch({ type: "TOGGLE_RANGE_AND_COVER_ACTION_DETAILS", payload: { volleyIndex } });
	};

	const racToggleActionVisibility = (volleyIndex: number) => {
		dispatch({ type: "TOGGLE_RANGE_AND_COVER_ACTION_VISIBILITY", payload: { volleyIndex } });
	};

	// FIGHT
	const fgtChangeReflexes = (reflexes: number, actions: [FightActionExtended[], FightActionExtended[], FightActionExtended[]], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
		const flatActions = actions.flat().filter(v => v.name !== "No Action");
		if (flatActions.length > reflexes) {
			setNotification(<Notification text="Cannot decrease reflex. Remove some actions and try again." severity="error" onClose={() => setNotification(null)} />);
		}
		else {
			const value = Clamp(reflexes, 0, 12);
			dispatch({ type: "CHANGE_FIGHT_REFLEXES", payload: { reflexes: value } });
			setNotification(null);
		}
	};

	const fgtChangeVolleyIndex = (volleyIndex: number) => {
		dispatch({ type: "CHANGE_FIGHT_VOLLEY_INDEX", payload: { volleyIndex: volleyIndex } });
	};

	const fgtAddAction = (volleyIndex: number, actionName: undefined | string, reflexes: number, actions: [FightActionExtended[], FightActionExtended[], FightActionExtended[]], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
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
	};

	const fgtDeleteAction = (volleyIndex: number, actionIndex: number) => {
		dispatch({ type: "DELETE_FIGHT_ACTION", payload: { volleyIndex, actionIndex } });
	};

	const fgtChangeSelectedAction = (volleyIndex: number, actionName: string) => {
		dispatch({ type: "CHANGE_FIGHT_SELECTED_ACTION", payload: { volleyIndex, actionName } });
	};

	const fgtToggleActionDetails = (volleyIndex: number, actionIndex: number) => {
		dispatch({ type: "TOGGLE_FIGHT_ACTION_DETAILS", payload: { volleyIndex, actionIndex } });
	};

	const fgtToggleActionVisibility = (volleyIndex: number, actionIndex: number) => {
		dispatch({ type: "TOGGLE_FIGHT_ACTION_VISIBILITY", payload: { volleyIndex, actionIndex } });
	};

	return {
		// DRAWER
		drwToggleDrawer, drwCloseDrawer, drwSetSelectedItem,
		// LIFEPATH LIST
		lplChangeStock, lplChangeSetting,
		// SKILL LIST
		sklChangeCategory,
		// TRAIT LIST
		trtChangeCategory,
		// LIFEPATH RANDOMIZER
		lprChangeStock, lprChangeMaxLeads, lprChangeMaxLPs, lprChangeMinLPs, lprToggleNoDuplicates,
		// PRACTICE PLANNER
		prpChangeDays, prpChangeHours, prpAddCells, prpDeleteCell, prpChangeCellHour, prpAddPractice, prpDeletePractice,
		// MAGIC WHEEL
		mgwChangeAOE, mgwChangeElement, mgwChangeImpetus, mgwChangeDuration, mgwChangeOrigin, mgwChangeDirection, mgwChangeSteps, mgwToggleCover,
		// DUEL OF WITS
		dowChangeVolleyIndex, dowAddAction, dowDeleteAction, dowSelectedChangeAction, dowToggleActionDetails, dowToggleActionVisibility,
		// RANGE AND COVER
		racChangeVolleyIndex, racAddAction, racDeleteAction, racSelectedChangeAction, racToggleActionDetails, racToggleActionVisibility,
		// FIGHT
		fgtChangeReflexes, fgtChangeVolleyIndex, fgtAddAction, fgtDeleteAction, fgtChangeSelectedAction, fgtToggleActionDetails, fgtToggleActionVisibility
	};
}
