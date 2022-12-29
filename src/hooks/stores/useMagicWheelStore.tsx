import produce from "immer";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { MagicWheelStoreVersion } from "./_persistOptions";

import { Clamp } from "../../utils/misc";


interface MagicWheelState {
	aoe: string;
	element: string;
	impetus: string;
	duration: string;
	origin: string;

	direction: "Clockwise" | "Counterclockwise";
	steps: number;
	cover: boolean;

	elementIndex: number;

	changeAOE: (aoe: string) => void;
	changeElement: (element: string) => void;
	changeImpetus: (impetus: string) => void;
	changeDuration: (duration: string) => void;
	changeOrigin: (origin: string) => void;

	changeDirection: (direction: string) => void;
	changeSteps: (steps: string) => void;
	toggleCover: () => void;

	changeElementIndex: (elementIndex: number) => void;
}

export const useMagicWheelStore = create<MagicWheelState>()(
	devtools(
		persist(
			(set) => ({
				aoe: "Caster",
				element: "Anima",
				impetus: "Create",
				duration: "Instantaneous",
				origin: "Personal",

				direction: "Clockwise",
				steps: 1,
				cover: true,

				elementIndex: 0,

				changeAOE: (aoe: string) => {
					set(produce<MagicWheelState>((state) => {
						state.aoe = aoe;
					}));
				},
				changeElement: (element: string) => {
					set(produce<MagicWheelState>((state) => {
						state.element = element;
					}));
				},
				changeImpetus: (impetus: string) => {
					set(produce<MagicWheelState>((state) => {
						state.impetus = impetus;
					}));
				},
				changeDuration: (duration: string) => {
					set(produce<MagicWheelState>((state) => {
						state.duration = duration;
					}));
				},
				changeOrigin: (origin: string) => {
					set(produce<MagicWheelState>((state) => {
						state.origin = origin;
					}));
				},
				changeDirection: (direction: string) => {
					set(produce<MagicWheelState>((state) => {
						state.steps = Clamp(direction === "" ? 0 : parseInt(direction), 0, 10);
					}));
				},
				changeSteps: (steps: string) => {
					set(produce<MagicWheelState>((state) => {
						state.steps = Clamp(steps === "" ? 0 : parseInt(steps), 0, 10);
					}));
				},
				toggleCover: () => {
					set(produce<MagicWheelState>((state) => {
						state.cover = !state.cover;
					}));
				},
				changeElementIndex: (elementIndex: number) => {
					set(produce<MagicWheelState>((state) => {
						state.elementIndex = elementIndex;
					}));
				}
			}),
			{
				name: "magic-wheel-storage",
				version: MagicWheelStoreVersion
			}
		)
	)
);
