export interface TestResult {
	dice: number[];
	successes: number;
	failures: number;
	test: string;
	singleFailureRolled: boolean;
}

interface ChangeShadeAction { type: "CHANGE_DICE_ROLLER_SHADE"; payload: { shade: string; }; }
interface ChangeDicePoolAction { type: "CHANGE_DICE_ROLLER_DICE_POOL"; payload: { dicePool: number; }; }
interface ChangeObstacleAction { type: "CHANGE_DICE_ROLLER_OBSTACLE"; payload: { obstacle: number; }; }
interface ToggleIsOpenEndedAction { type: "TOGGLE_DICE_ROLLER_IS_OPEN_ENDED"; }
interface ToggleIsDoubleObstacleAction { type: "TOGGLE_DICE_ROLLER_IS_DOUBLE_OBSTACLE"; }
interface SetResultAction { type: "SET_DICE_ROLLER_RESULT"; payload: { result: TestResult; }; }

export type DiceRollerActions = ChangeShadeAction | ChangeDicePoolAction | ChangeObstacleAction | ToggleIsOpenEndedAction | ToggleIsDoubleObstacleAction | SetResultAction;

export interface DiceRollerState {
	shade: string;
	dicePool: number;
	obstacle: number;
	isOpenEnded: boolean;
	isDoubleObstacle: boolean;
	result: undefined | TestResult;
}

const INITIAL: DiceRollerState = {
	shade: "Black",
	dicePool: 1,
	obstacle: 1,
	isOpenEnded: false,
	isDoubleObstacle: false,
	result: undefined
};

export const DiceRollerReducer = (state = INITIAL, action: DiceRollerActions): DiceRollerState => {
	switch (action.type) {
		case "CHANGE_DICE_ROLLER_SHADE":
			return { ...state, shade: action.payload.shade };
		case "CHANGE_DICE_ROLLER_DICE_POOL":
			return { ...state, dicePool: action.payload.dicePool };
		case "CHANGE_DICE_ROLLER_OBSTACLE":
			return { ...state, obstacle: action.payload.obstacle };
		case "TOGGLE_DICE_ROLLER_IS_OPEN_ENDED":
			return { ...state, isOpenEnded: !state.isOpenEnded };
		case "TOGGLE_DICE_ROLLER_IS_DOUBLE_OBSTACLE":
			return { ...state, isDoubleObstacle: !state.isDoubleObstacle };
		case "SET_DICE_ROLLER_RESULT":
			return { ...state, result: action.payload.result };
		default:
			return { ...state };
	}
};
