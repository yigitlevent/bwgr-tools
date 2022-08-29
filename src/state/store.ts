import { configureStore, combineReducers, Dispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { DrawerActions, DrawerReducer, DrawerState } from "./reducers/drawer";
import { DiceRollerActions, DiceRollerReducer, DiceRollerState } from "./reducers/diceRoller";
import { DuelOfWitsActions, DuelOfWitsReducer, DuelOfWitsState } from "./reducers/duelOfWits";
import { FightActions, FightReducer, FightState } from "./reducers/fight";
import { LifepathListActions, LifepathListReducer, LifepathListState } from "./reducers/lifepathList";
import { LifepathRandomizerActions, LifepathRandomizerReducer, LifepathRandomizerState } from "./reducers/lifepathRandomizer";
import { MagicWheelActions, MagicWheelReducer, MagicWheelState } from "./reducers/magicWheel";
import { PracticePlannerActions, PracticePlannerReducer, PracticePlannerState } from "./reducers/practicePlanner";
import { RangeAndCoverActions, RangeAndCoverReducer, RangeAndCoverState } from "./reducers/rangeAndCover";
import { SkillListActions, SkillListReducer, SkillListState } from "./reducers/skillList";
import { TraitListActions, TraitListReducer, TraitListState } from "./reducers/traitList";

type CombinedActions = DrawerActions
	| DiceRollerActions
	| LifepathListActions | SkillListActions | TraitListActions
	| MagicWheelActions | LifepathRandomizerActions | PracticePlannerActions
	| DuelOfWitsActions | RangeAndCoverActions | FightActions;

type CombinedState = {
	drawer: DrawerState;
	diceRoller: DiceRollerState;
	lifepathList: LifepathListState;
	skillList: SkillListState;
	traitList: TraitListState;
	magicWheel: MagicWheelState;
	lifepathRandomizer: LifepathRandomizerState,
	practicePlanner: PracticePlannerState;
	duelOfWits: DuelOfWitsState;
	rangeAndCover: RangeAndCoverState;
	fight: FightState;
};

export const STORE = configureStore({
	reducer: combineReducers<CombinedState>({
		drawer: DrawerReducer,
		diceRoller: DiceRollerReducer,
		lifepathList: LifepathListReducer,
		skillList: SkillListReducer,
		traitList: TraitListReducer,
		magicWheel: MagicWheelReducer,
		lifepathRandomizer: LifepathRandomizerReducer,
		practicePlanner: PracticePlannerReducer,
		duelOfWits: DuelOfWitsReducer,
		rangeAndCover: RangeAndCoverReducer,
		fight: FightReducer
	})
});

type StoreState = ReturnType<typeof STORE.getState>;

export const useAppDispatch: () => Dispatch<CombinedActions> = useDispatch<Dispatch<CombinedActions>>;
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
