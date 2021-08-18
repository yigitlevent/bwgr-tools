namespace bwgr {

	namespace stores {

		type MenuNames = "" | "lifepath" | "magicwheel";

		interface ClientStore {
			status: bwgr.Status;
			username: string;
			activeMenu: bwgr.stores.MenuNames;

			lifepathMenu: { stock: "" | bwgr.data.StocksList; setting: string; };
			magicwheelMenu: { canvasSize: number; circleRadius: number; circleOffset: number; textOffset: number; };

			setStatus: (status: bwgr.Status) => void;
			setUsername: (username: string) => void;
			setActiveMenu: (menuName: bwgr.stores.MenuNames) => void;

			setLifepathMenu: (stock: "" | bwgr.data.StocksList, setting: string) => void;
		}

	}

}