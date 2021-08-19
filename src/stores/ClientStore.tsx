import produce from "immer";
import create from "zustand";

export const ClientStore = create<bwgr.stores.ClientStore>(set => ({
	status: "loading",
	username: "",
	activeMenu: "",

	lifepathMenu: { stock: "", setting: "" },
	skillMenu: { category: "" },
	traitMenu: { category: "" },
	magicwheelMenu: { canvasSize: 580, circleRadius: 32, circleOffset: 90, textOffset: 100 },
	factionMenu: { factionIndex: -1, factions: [] },
	unitMenu: { unitIndex: -1, units: [] },

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
	})),

	// SKILL MENU
	setSkillMenu: (skill) => set(produce((state: bwgr.stores.ClientStore) => {
		state.skillMenu.category = skill;
	})),

	// TRAIT MENU
	setTraitMenu: (trait) => set(produce((state: bwgr.stores.ClientStore) => {
		state.traitMenu.category = trait;
	})),

	// MAGICWHEEL MENU

	// DISTILLATION MENU

	// FACTION MENU
	setFactionMenu: (factionIndex) => set(produce((state: bwgr.stores.ClientStore) => {
		state.factionMenu.factionIndex = factionIndex;
	})),
	addFaction: (faction) => set(produce((state: bwgr.stores.ClientStore) => {
		if (state.factionMenu.factionIndex === -1) {
			state.factionMenu.factions.push(faction);
			state.factionMenu.factionIndex = state.factionMenu.factions.length - 1;
		}
		else state.factionMenu.factions[state.factionMenu.factionIndex] = faction;
	})),
	removeFaction: (factionIndex) => set(produce((state: bwgr.stores.ClientStore) => {
		const temp = state.factionMenu.factions[factionIndex];
		if (temp !== undefined) {
			state.factionMenu.factions.splice(factionIndex, 1);
			state.factionMenu.factionIndex = -1;
		}
	})),

	// UNIT MENU
	setUnitMenu: (unitIndex) => set(produce((state: bwgr.stores.ClientStore) => {
		state.unitMenu.unitIndex = unitIndex;
	})),
	addUnit: (unit) => set(produce((state: bwgr.stores.ClientStore) => {
		if (state.unitMenu.unitIndex === -1) {
			state.unitMenu.units.push(unit);
			state.unitMenu.unitIndex = state.unitMenu.units.length - 1;
		}
		else state.unitMenu.units[state.unitMenu.unitIndex] = unit;

	})),
	removeUnit: (unitIndex) => set(produce((state: bwgr.stores.ClientStore) => {
		const temp = state.unitMenu.units[unitIndex];
		if (temp !== undefined) {
			state.unitMenu.units.splice(unitIndex, 1);
			state.unitMenu.unitIndex = -1;
		}
	})),

}));
