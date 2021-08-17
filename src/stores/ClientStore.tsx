import produce from "immer";
import create from "zustand";

export const ClientStore = create<bwgr.stores.ClientStore>(set => ({
	status: "loading",
	username: "",
	activeMenu: "",

	lifepathMenu: { stock: "", setting: "" },

	// BASICS
	setStatus: (status) => set(produce((state: bwgr.stores.ClientStore) => {
		state.status = status;
	})),
	setUsername: (username) => set(produce((state: bwgr.stores.ClientStore) => {
		state.username = username;
	})),
	setActiveMenu: (menuName) => set(produce((state: bwgr.stores.ClientStore) => {
		state.activeMenu = menuName;
	})),

	// LIFEPATH MENU
	setLifepathMenu: (stock, setting) => set(produce((state: bwgr.stores.ClientStore) => {
		state.lifepathMenu = { stock, setting };
	}))

}));
