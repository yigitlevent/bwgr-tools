namespace bwgr {

	namespace stores {

		type MenuNames = "" | "lifepath" | "skill" | "trait" | "lifepathrandomizer" | "magicwheel" | "distillation" | "faction" | "unit";

		interface ClientStore {
			status: bwgr.Status;
			username: string;
			activeMenu: bwgr.stores.MenuNames;

			lifepathMenu: { stock: "" | bwgr.data.StocksList; setting: string; };
			skillMenu: { category: string; };
			traitMenu: { category: string; };
			factionMenu: { currentIndex: number; factions: bwgr.data.FactionCard[]; };
			unitMenu: { currentIndex: number; units: bwgr.data.UnitCard[]; };
			magicwheelMenu: { canvasSize: number; circleRadius: number; circleOffset: number; textOffset: number; };

			// BASICS
			setStatus: (status: bwgr.Status) => void;
			setUsername: (username: string) => void;
			setActiveMenu: (menuName: bwgr.stores.MenuNames) => void;

			// LIFEPATH MENU
			setLifepathStockSetting: (stock: "" | bwgr.data.StocksList, setting: string) => void;

			// SKILL MENU
			setSkillCategory: (skillCategory: string) => void;

			// TRAIT MENU
			setTraitCategory: (traitCategory: string) => void;

			// MAGICWHEEL MENU

			// DISTILLATION MENU

			// FACTION MENU
			setFactionIndex: (factionIndex: number) => void;
			addFaction: (faction: bwgr.data.FactionCard) => void;
			removeFaction: (factionIndex: number) => void;

			// UNIT MENU
			setUnitIndex: (uintIndex: number) => void;
			addUnit: (unit: bwgr.data.UnitCard) => void;
			removeUnit: (unitIndex: number) => void;
		}

	}

}