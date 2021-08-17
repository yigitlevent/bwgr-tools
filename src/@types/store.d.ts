namespace bwgr {

	namespace stores {

		type MenuNames = "" | "lifepath";

		interface ClientStore {
			status: bwgr.Status;
			username: string;
			activeMenu: bwgr.stores.MenuNames;

			lifepathMenu: { stock: "" | bwgr.data.StocksList; setting: string; };

			setStatus: (status: bwgr.Status) => void;
			setUsername: (username: string) => void;
			setActiveMenu: (menuName: bwgr.stores.MenuNames) => void;

			setLifepathMenu: (stock: "" | bwgr.data.StocksList, setting: string) => void;
		}

	}

}