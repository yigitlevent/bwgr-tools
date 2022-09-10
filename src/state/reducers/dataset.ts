interface ToggleDatasetAction { type: "TOGGLE_DATASET"; payload: { dataset: Ruleset; }; }

export type DatasetActions = ToggleDatasetAction;

export interface DatasetState {
	datasets: Ruleset[];
}

const INITIAL: DatasetState = {
	datasets: ["bwg", "bwc"]
};

export const DatasetReducer = (state = INITIAL, action: DatasetActions): DatasetState => {
	switch (action.type) {
		case "TOGGLE_DATASET":
			if (state.datasets.includes(action.payload.dataset)) {
				return { ...state, datasets: state.datasets.filter(v => v != action.payload.dataset) };
			}
			return { ...state, datasets: [...state.datasets, action.payload.dataset] };
		default:
			return { ...state };
	}
};
