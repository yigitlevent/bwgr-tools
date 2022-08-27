import { ChangeEvent, FormEvent } from "react";

import { SelectChangeEvent } from "@mui/material/Select";

import { useAppDispatch } from "./store";
import { DrawerItem } from "./reducers/drawer";
import { PracticeTable } from "../data/tables";
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

	const prpChangeCellHour = (cellIndex: number, change: 1 | -1, cells: Cell[], onClose: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
		if (cells[cellIndex].remaining === 0 && change === -1) {
			return <Notification text="Cannot reduce hours from day. It is used by practices." severity="error" onClose={() => onClose(null)} />;
		}
		else {
			dispatch({ type: "CHANGE_PRACTICE_PLANNER_CELL_HOURS", payload: { cellIndex, change } });
			return null;
		}
	};

	const prpAddPractice = (e: FormEvent<HTMLFormElement>, cells: Cell[], onClose: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
		e.preventDefault();
		const els = Object.values((e.target as HTMLFormElement).elements) as HTMLInputElement[];
		const [cIndex, sType, tType, sName] = els.filter(v => v.tagName === "INPUT" && v.type === "text").map((v) => v.value);
		const hours = PracticeTable[sType][tType];
		const cellIndex = parseInt(cIndex);

		if (sName === "") {
			return <Notification text="Please enter a Skill name." severity="error" onClose={() => onClose(null)} />;
		}
		else if (cells[cellIndex].remaining - hours < 0) {
			return <Notification text={`Cannot fit practice into the day. This practice takes ${hours} hours.`} severity="error" onClose={() => onClose(null)} />;
		}
		else {
			const practice: Practice = { skillName: sName, skillType: sType, testType: tType, hours: PracticeTable[sType][tType] };
			dispatch({ type: "ADD_PRACTICE_PLANNER_PRACTICE", payload: { cellIndex, practice } });
			return null;
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
		mgwChangeAOE, mgwChangeElement, mgwChangeImpetus, mgwChangeDuration, mgwChangeOrigin,
		mgwChangeDirection, mgwChangeSteps, mgwToggleCover
	};
}
