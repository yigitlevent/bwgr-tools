interface ChangeCharacterStock { type: "CHANGE_CB_STOCK"; payload: { stock: string; }; }
interface ChangeCharacterConcept { type: "CHANGE_CB_CONCEPT"; payload: { concept: string; }; }
interface AddLifepath { type: "CHANGE_CB_ADD_LIFEPATH"; payload: { lifepathPath: string; }; }
interface RemoveLifepath { type: "CHANGE_CB_REMOVE_LIFEPATH"; }

export type CharacterBurnerActions = ChangeCharacterStock | ChangeCharacterConcept | AddLifepath | RemoveLifepath;

export interface CharacterBurnerState {
	stock: string;
	concept: string;
	lifepathPaths: string[];
}

const INITIAL: CharacterBurnerState = {
	stock: "Dwarf",
	concept: "",
	lifepathPaths: []
};

export const CharacterBurnerReducer = (state = INITIAL, action: CharacterBurnerActions): CharacterBurnerState => {
	switch (action.type) {
		case "CHANGE_CB_STOCK":
			return { ...state, stock: action.payload.stock, lifepathPaths: [] };
		case "CHANGE_CB_CONCEPT":
			return { ...state, concept: action.payload.concept };
		case "CHANGE_CB_ADD_LIFEPATH":
			const lp1 = [...state.lifepathPaths];
			lp1.push(action.payload.lifepathPath);
			return { ...state, lifepathPaths: lp1 };
		case "CHANGE_CB_REMOVE_LIFEPATH":
			const lp2 = [...state.lifepathPaths];
			lp2.pop();
			return { ...state, lifepathPaths: lp2 };
		default:
			return { ...state };
	}
};
