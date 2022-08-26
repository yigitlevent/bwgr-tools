interface ChangeAOEAction { type: "CHANGE_MAGIC_WHEEL_AOE"; payload: { aoe: string; }; }
interface ChangeElementAction { type: "CHANGE_MAGIC_WHEEL_ELEMENT"; payload: { element: string; }; }
interface ChangeImpetusAction { type: "CHANGE_MAGIC_WHEEL_IMPETUS"; payload: { impetus: string; }; }
interface ChangeDurationAction { type: "CHANGE_MAGIC_WHEEL_DURATION"; payload: { duration: string; }; }
interface ChangeOriginAction { type: "CHANGE_MAGIC_WHEEL_ORIGIN"; payload: { origin: string; }; }
interface ChangeDirectionAction { type: "CHANGE_MAGIC_WHEEL_DIRECTION"; payload: { direction: "Clockwise" | "Counterclockwise"; }; }
interface ChangeStepsAction { type: "CHANGE_MAGIC_WHEEL_STEPS"; payload: { steps: number; }; }
interface ToggleCoverAction { type: "TOGGLE_MAGIC_WHEEL_COVER"; }

export type MagicWheelActions = ChangeAOEAction | ChangeElementAction | ChangeImpetusAction | ChangeDurationAction | ChangeOriginAction | ChangeDirectionAction | ChangeStepsAction | ToggleCoverAction;

export interface MagicWheelState {
	aoe: string;
	element: string;
	impetus: string;
	duration: string;
	origin: string;

	direction: "Clockwise" | "Counterclockwise";
	steps: number;
	cover: boolean;
}

const INITIAL: MagicWheelState = {
	aoe: "Caster",
	element: "Anima",
	impetus: "Create",
	duration: "Instantaneous",
	origin: "Personal",

	direction: "Clockwise",
	steps: 1,
	cover: true
};

export const MagicWheelReducer = (state = INITIAL, action: MagicWheelActions): MagicWheelState => {
	switch (action.type) {
		case "CHANGE_MAGIC_WHEEL_AOE":
			return { ...state, aoe: action.payload.aoe };
		case "CHANGE_MAGIC_WHEEL_ELEMENT":
			return { ...state, element: action.payload.element };
		case "CHANGE_MAGIC_WHEEL_IMPETUS":
			return { ...state, impetus: action.payload.impetus };
		case "CHANGE_MAGIC_WHEEL_DURATION":
			return { ...state, duration: action.payload.duration };
		case "CHANGE_MAGIC_WHEEL_ORIGIN":
			return { ...state, origin: action.payload.origin };
		case "CHANGE_MAGIC_WHEEL_DIRECTION":
			return { ...state, direction: action.payload.direction };
		case "CHANGE_MAGIC_WHEEL_STEPS":
			return { ...state, steps: action.payload.steps };
		case "TOGGLE_MAGIC_WHEEL_COVER":
			return { ...state, cover: !state.cover };
		default:
			return { ...state };
	}
};
