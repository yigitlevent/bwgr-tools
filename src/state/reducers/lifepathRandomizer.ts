interface ChangeStockAction { type: "CHANGE_LP_RANDOMIZER_STOCK"; payload: { stock: string | "Random"; }; }
interface ChangeSettingAction { type: "CHANGE_LP_RANDOMIZER_SETTING"; payload: { setting: "Random"; }; }
interface ToggleNoDuplicatesAction { type: "TOGGLE_LP_RANDOMIZER_NO_DUPLICATES"; }
interface ChangeMaxLeadsAction { type: "CHANGE_LP_RANDOMIZER_MAX_LEADS"; payload: { maxLeads: number; }; }
interface ChangeMaxLifepathsAction { type: "CHANGE_LP_RANDOMIZER_MAX_LIFEPATHS"; payload: { maxLifepaths: number; }; }
interface ChangeMinLifepathsAction { type: "CHANGE_LP_RANDOMIZER_MIN_LIFEPATHS"; payload: { minLifepaths: number; }; }

export type LifepathRandomizerActions = ChangeStockAction | ChangeSettingAction | ToggleNoDuplicatesAction | ChangeMaxLeadsAction | ChangeMaxLifepathsAction | ChangeMinLifepathsAction;

export interface LifepathRandomizerState {
	stock: string | "Random";
	setting: "Random";
	noDuplicates: boolean;
	maxLeads: number;
	maxLifepaths: number;
	minLifepaths: number;
}

const INITIAL: LifepathRandomizerState = {
	stock: "Random",
	setting: "Random",
	noDuplicates: true,
	maxLeads: 3,
	maxLifepaths: 6,
	minLifepaths: 5
};

export const LifepathRandomizerReducer = (state = INITIAL, action: LifepathRandomizerActions): LifepathRandomizerState => {
	switch (action.type) {
		case "CHANGE_LP_RANDOMIZER_STOCK":
			return { ...state, stock: action.payload.stock };
		case "CHANGE_LP_RANDOMIZER_SETTING":
			return { ...state, setting: action.payload.setting };
		case "TOGGLE_LP_RANDOMIZER_NO_DUPLICATES":
			return { ...state, noDuplicates: !state.noDuplicates };
		case "CHANGE_LP_RANDOMIZER_MAX_LEADS":
			return { ...state, maxLeads: action.payload.maxLeads };
		case "CHANGE_LP_RANDOMIZER_MAX_LIFEPATHS":
			return { ...state, maxLifepaths: action.payload.maxLifepaths };
		case "CHANGE_LP_RANDOMIZER_MIN_LIFEPATHS":
			return { ...state, minLifepaths: action.payload.minLifepaths };
		default:
			return { ...state };
	}
};
