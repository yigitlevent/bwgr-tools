interface ChangeCategoryAction { type: "CHANGE_TRAIT_LIST_CATEGORY"; payload: { category: string; }; }

export type TraitListActions = ChangeCategoryAction;

export interface TraitListState {
	category: string;
}

const INITIAL: TraitListState = {
	category: "",
};

export const TraitListReducer = (state = INITIAL, action: TraitListActions): TraitListState => {
	switch (action.type) {
		case "CHANGE_TRAIT_LIST_CATEGORY":
			return { ...state, category: action.payload.category };
		default:
			return { ...state };
	}
};
