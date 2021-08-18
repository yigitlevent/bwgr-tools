namespace bwgr {

	namespace stores {

		type MenuNames = "" | "lifepath" | "skill" | "trait" | "magicwheel";

		interface ClientStore {
			status: bwgr.Status;
			username: string;
			activeMenu: bwgr.stores.MenuNames;

			lifepathMenu: { stock: "" | bwgr.data.StocksList; setting: string; };
			skillMenu: { category: string; };
			traitMenu: { category: string; };
			magicwheelMenu: { canvasSize: number; circleRadius: number; circleOffset: number; textOffset: number; };

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
		}

	}

}