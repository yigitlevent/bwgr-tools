import produce from "immer";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { LifepathRandomizerStoreVersion } from "./_persistOptions";

import { Clamp } from "../../utils/misc";


interface LifepathRandomizerState {
	stock: StocksList | "Random";
	setting: "Random";
	noDuplicates: boolean;
	maxLeads: number;
	maxLifepaths: number;
	minLifepaths: number;

	randomizerChangeStock: (stock: StocksList | "Random") => void;
	randomizerChangeMaxLeads: (value: string) => void;
	randomizerChangeMaxLifepaths: (value: string) => void;
	randomizerChangeMinLifepaths: (value: string) => void;
	randomizerToggleNoDuplicates: () => void;
}

export const useLifepathRandomizerStore = create<LifepathRandomizerState>()(
	devtools(
		persist(
			(set) => ({
				stock: "Random",
				setting: "Random",
				noDuplicates: true,
				maxLeads: 3,
				maxLifepaths: 6,
				minLifepaths: 5,

				randomizerChangeStock: (stock: StocksList | "Random") => {
					set(produce<LifepathRandomizerState>((state) => {
						state.stock = stock;
					}));
				},
				randomizerChangeMaxLeads: (value: string) => {
					set(produce<LifepathRandomizerState>((state) => {
						state.maxLeads = Clamp(value === "" ? 0 : parseInt(value), 0, 10);
					}));
				},
				randomizerChangeMaxLifepaths: (value: string) => {
					set(produce<LifepathRandomizerState>((state) => {
						state.maxLifepaths = Clamp(value === "" ? 0 : parseInt(value), 0, 10);

					}));
				},
				randomizerChangeMinLifepaths: (value: string) => {
					set(produce<LifepathRandomizerState>((state) => {
						state.minLifepaths = Clamp(value === "" ? 0 : parseInt(value), 0, 10);
					}));
				},
				randomizerToggleNoDuplicates: () => {
					set(produce<LifepathRandomizerState>((state) => {
						state.noDuplicates != state.noDuplicates;
					}));
				}
			}),
			{
				name: "randomizer-storage",
				version: LifepathRandomizerStoreVersion
			}
		)
	)
);
