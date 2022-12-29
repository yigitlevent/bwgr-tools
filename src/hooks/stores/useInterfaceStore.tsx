import produce from "immer";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { InterfaceStoreVersion } from "./_persistOptions";


interface InterfaceState {
	open: boolean;
	type: "permanent" | "temporary" | "persistent";

	openDrawer: () => void;
	closeDrawer: () => void;
	toggleDrawer: () => void;
}

export const useInterfaceStore = create<InterfaceState>()(
	devtools(
		persist(
			(set) => ({
				open: true,
				type: window.innerWidth < 1700 ? "temporary" : "permanent",

				openDrawer: () => {
					set(produce<InterfaceState>((state) => {
						state.open = true;
					}));
				},
				closeDrawer: () => {
					set(produce<InterfaceState>((state) => {
						state.open = false;
					}));
				},
				toggleDrawer: () => {
					set(produce<InterfaceState>((state) => {
						state.open = !state.open;
					}));
				}
			}),
			{
				name: "interface-storage",
				version: InterfaceStoreVersion
			}
		)
	)
);
