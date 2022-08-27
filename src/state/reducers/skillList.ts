interface ChangeCategoryAction { type: "CHANGE_SKILL_LIST_CATEGORY"; payload: { category: string; }; }

export type SkillListActions = ChangeCategoryAction;

export interface SkillListState {
	category: string;
}

const INITIAL: SkillListState = {
	category: ""
};

export const SkillListReducer = (state = INITIAL, action: SkillListActions): SkillListState => {
	switch (action.type) {
		case "CHANGE_SKILL_LIST_CATEGORY":
			return { ...state, category: action.payload.category };
		default:
			return { ...state };
	}
};
