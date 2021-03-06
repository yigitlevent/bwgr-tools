import produce from "immer";
import create from "zustand";

export const ClientStore = create<bwgr.stores.ClientStore>(set => ({
	status: "loading",
	username: "",
	activeMenu: "",

	lifepathMenu: { stock: "", setting: "" },
	skillMenu: { category: "" },
	traitMenu: { category: "" },
	factionMenu: { currentIndex: -1, factions: [] },
	unitMenu: { currentIndex: -1, units: [] },
	magicwheelMenu: { canvasSize: 580, circleRadius: 32, circleOffset: 90, textOffset: 100 },

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
	setLifepathStockSetting: (stock, setting) => set(produce((state: bwgr.stores.ClientStore) => {
		state.lifepathMenu = { stock, setting };
	})),

	// SKILL MENU
	setSkillCategory: (skill) => set(produce((state: bwgr.stores.ClientStore) => {
		state.skillMenu.category = skill;
	})),

	// TRAIT MENU
	setTraitCategory: (trait) => set(produce((state: bwgr.stores.ClientStore) => {
		state.traitMenu.category = trait;
	})),

	// MAGICWHEEL MENU

	// DISTILLATION MENU

	// FACTION MENU
	setFactionIndex: (factionIndex) => set(produce((state: bwgr.stores.ClientStore) => {
		state.factionMenu.currentIndex = factionIndex;
	})),
	addFaction: (faction) => set(produce((state: bwgr.stores.ClientStore) => {
		if (state.factionMenu.currentIndex === -1) {
			state.factionMenu.factions.push(faction);
			state.factionMenu.currentIndex = state.factionMenu.factions.length - 1;
		}
		else state.factionMenu.factions[state.factionMenu.currentIndex] = faction;
	})),
	removeFaction: (factionIndex) => set(produce((state: bwgr.stores.ClientStore) => {
		const temp = state.factionMenu.factions[factionIndex];
		if (temp !== undefined) {
			state.factionMenu.factions.splice(factionIndex, 1);
			state.factionMenu.currentIndex = -1;
		}
	})),

	// UNIT MENU
	setUnitIndex: (unitIndex) => set(produce((state: bwgr.stores.ClientStore) => {
		state.unitMenu.currentIndex = unitIndex;
	})),
	addUnit: (unit) => set(produce((state: bwgr.stores.ClientStore) => {
		if (state.unitMenu.currentIndex === -1) {
			state.unitMenu.units.push(unit);
			state.unitMenu.currentIndex = state.unitMenu.units.length - 1;
		}
		else state.unitMenu.units[state.unitMenu.currentIndex] = unit;

	})),
	removeUnit: (unitIndex) => set(produce((state: bwgr.stores.ClientStore) => {
		const temp = state.unitMenu.units[unitIndex];
		if (temp !== undefined) {
			state.unitMenu.units.splice(unitIndex, 1);
			state.unitMenu.currentIndex = -1;
		}
	})),


}));
