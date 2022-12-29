import { Dispatch, FormEvent, SetStateAction } from "react";
import produce from "immer";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { PracticePlannerStoreVersion } from "./_persistOptions";

import { PracticeTable } from "../../data/tables";
import { Clamp } from "../../utils/misc";

import { Notification } from "../../components/Shared/Notification";


interface PracticePlannerState {
	days: number;
	hours: number;
	cells: Cell[];

	changeDays: (value: string) => void;
	changeHours: (value: string) => void;
	addCells: (days: number, hours: number) => void;
	deleteCell: (cellIndex: number) => void;
	changeCellHour: (cellIndex: number, change: 1 | -1, cells: Cell[], setNotification: Dispatch<SetStateAction<JSX.Element | null>>) => void;
	addPractice: (e: FormEvent<HTMLFormElement>, cells: Cell[], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => void;
	deletePractice: (cellIndex: number, practiceIndex: number) => void;
}

export const usePracticePlannerStore = create<PracticePlannerState>()(
	devtools(
		persist(
			(set) => ({
				days: 6,
				hours: 6,
				cells: [],

				changeDays: (value: string) => {
					set(produce<PracticePlannerState>((state) => {
						state.days = Clamp(value === "" ? 0 : parseInt(value), 0, 30);
					}));
				},
				changeHours: (value: string) => {
					set(produce<PracticePlannerState>((state) => {
						state.days = Clamp(value === "" ? 0 : parseInt(value), 1, 24);
					}));
				},
				addCells: (days: number, hours: number) => {
					set(produce<PracticePlannerState>((state) => {
						const newCells = state.cells;
						newCells.push(...[...Array(days)].map(() => { return { maxHours: hours, remaining: hours, placed: [] }; }));
						state.cells = newCells;
					}));
				},
				deleteCell: (cellIndex: number) => {
					set(produce<PracticePlannerState>((state) => {
						const newCells = state.cells;
						newCells.splice(cellIndex, 1);
						state.cells = newCells;
					}));
				},
				changeCellHour: (cellIndex: number, change: 1 | -1, cells: Cell[], setNotification: Dispatch<SetStateAction<JSX.Element | null>>) => {
					if (cells[cellIndex].remaining === 0 && change === -1) {
						setNotification(<Notification text="Cannot reduce hours from day. It is used by practices." severity="error" onClose={() => setNotification(null)} />);
					}
					else {
						set(produce<PracticePlannerState>((state) => {
							const newCells = state.cells;
							state.cells = newCells.map((v, i) => {
								if (i === cellIndex && ((v.maxHours < 24 && change > 0) || (v.maxHours > 1 && change < 0))) {
									return { ...v, maxHours: v.maxHours + change, remaining: v.remaining + change };
								}
								return v;
							});
						}));
						setNotification(null);
					}
				},
				addPractice: (e: FormEvent<HTMLFormElement>, cells: Cell[], setNotification: React.Dispatch<React.SetStateAction<JSX.Element | null>>) => {
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
						set(produce<PracticePlannerState>((state) => {
							const newCells = state.cells;
							state.cells = newCells.map((v, i) => {
								if (i === cellIndex) {
									const placed = [...v.placed, practice];
									const hours = v.remaining - practice.hours;
									return { ...v, remaining: hours, placed: placed };
								}
								return v;
							});
						}));
						setNotification(null);
					}
				},
				deletePractice: (cellIndex: number, practiceIndex: number) => {
					set(produce<PracticePlannerState>((state) => {
						const newCells = state.cells;
						state.cells = newCells.map((v, i) => {
							if (i === cellIndex) {
								const placed = v.placed.filter((v, i) => i !== practiceIndex);
								const hours = v.remaining + v.placed[practiceIndex].hours;
								return { ...v, remaining: hours, placed: placed };
							}
							return v;
						});
					}));
				}
			}),
			{
				name: "practice-planner-storage",
				version: PracticePlannerStoreVersion
			}
		)
	)
);
