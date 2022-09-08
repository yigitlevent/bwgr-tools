interface ChangeStockAction { type: "CHANGE_RESOURCE_LIST_STOCK"; payload: { stock: string; }; }

export type ResourceListActions = ChangeStockAction;

export interface ResourceListState {
	stock: string;
}

const INITIAL: ResourceListState = {
	stock: "Dwarf"
};

export const ResourceListReducer = (state = INITIAL, action: ResourceListActions): ResourceListState => {
	switch (action.type) {
		case "CHANGE_RESOURCE_LIST_STOCK":
			return { ...state, stock: action.payload.stock };
		default:
			return { ...state };
	}
};
