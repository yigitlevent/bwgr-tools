namespace bwgr {

	namespace stores {

		type MenuNames = "" | "lifepath" | "skill" | "trait" | "magicwheel" | "distillation" | "faction" | "unit";

		interface ClientStore {
			status: bwgr.Status;
			username: string;
			activeMenu: bwgr.stores.MenuNames;

			lifepathMenu: { stock: "" | bwgr.data.StocksList; setting: string; };
			skillMenu: { category: string; };
			traitMenu: { category: string; };
			magicwheelMenu: { canvasSize: number; circleRadius: number; circleOffset: number; textOffset: number; };
			factionMenu: { factionIndex: number; factions: bwgr.data.FactionCard[]; };
			unitMenu: { unitIndex: number; units: bwgr.data.UnitCard[]; };

			// BASICS
			setStatus: (status: bwgr.Status) => void;
			setUsername: (username: string) => void;
			setActiveMenu: (menuName: bwgr.stores.MenuNames) => void;

			// LIFEPATH MENU
			setLifepathMenu: (stock: "" | bwgr.data.StocksList, setting: string) => void;

			// SKILL MENU
			setSkillMenu: (skillCategory: string) => void;

			// TRAIT MENU
			setTraitMenu: (traitCategory: string) => void;

			// MAGICWHEEL MENU

			// DISTILLATION MENU

			// FACTION MENU
			setFactionMenu: (factionIndex: number) => void;
			addFaction: (faction: bwgr.data.FactionCard) => void;
			removeFaction: (factionIndex: number) => void;

			// UNIT MENU
			setUnitMenu: (unitIndex: number) => void;
			addUnit: (unit: bwgr.data.UnitCard) => void;
			removeUnit: (unitIndex: number) => void;
		}

	}

}