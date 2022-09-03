import { Stocks } from "../../data/stocks";

interface ChangeStockAction { type: "CHANGE_LIFEPATH_LIST_STOCK"; payload: { stock: string; }; }
interface ChangeSettingAction { type: "CHANGE_LIFEPATH_LIST_SETTING"; payload: { setting: string; }; }

export type LifepathListActions = ChangeSettingAction | ChangeStockAction;

export interface LifepathListState {
	stock: string;
	setting: string;
}

const INITIAL: LifepathListState = {
	stock: "Dwarf",
	setting: "Artificer"
};

export const LifepathListReducer = (state = INITIAL, action: LifepathListActions): LifepathListState => {
	switch (action.type) {
		case "CHANGE_LIFEPATH_LIST_STOCK":
			const settings = Stocks[action.payload.stock].settings;
			const settingName = Object.keys(settings)[0];
			return { ...state, stock: action.payload.stock, setting: settingName };
		case "CHANGE_LIFEPATH_LIST_SETTING":
			return { ...state, setting: action.payload.setting };
		default:
			return { ...state };
	}
};
