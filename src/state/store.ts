import { configureStore, combineReducers, Dispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { DrawerActions, DrawerReducer, DrawerState } from "./reducers/drawer";
import { DuelOfWitsActions, DuelOfWitsReducer, DuelOfWitsState } from "./reducers/duelOfWits";
import { FightActions, FightReducer, FightState } from "./reducers/fight";
import { LifepathListActions, LifepathListReducer, LifepathListState } from "./reducers/lifepathList";
import { LifepathRandomizerActions, LifepathRandomizerReducer, LifepathRandomizerState } from "./reducers/lifepathRandomizer";
import { MagicWheelActions, MagicWheelReducer, MagicWheelState } from "./reducers/magicWheel";
import { PracticePlannerActions, PracticePlannerReducer, PracticePlannerState } from "./reducers/practicePlanner";
import { SkillListActions, SkillListReducer, SkillListState } from "./reducers/skillList";
import { TraitListActions, TraitListReducer, TraitListState } from "./reducers/traitList";

type CombinedActions = DrawerActions
	| LifepathListActions | SkillListActions | TraitListActions
	| MagicWheelActions | LifepathRandomizerActions | PracticePlannerActions
	| DuelOfWitsActions | FightActions;

type CombinedState = {
	drawer: DrawerState;
	lifepathList: LifepathListState;
	skillList: SkillListState;
	traitList: TraitListState;
	magicWheel: MagicWheelState;
	lifepathRandomizer: LifepathRandomizerState,
	practicePlanner: PracticePlannerState;
	duelOfWits: DuelOfWitsState;
	fight: FightState;
};

export const STORE = configureStore({
	reducer: combineReducers<CombinedState>({
		drawer: DrawerReducer,
		lifepathList: LifepathListReducer,
		skillList: SkillListReducer,
		traitList: TraitListReducer,
		magicWheel: MagicWheelReducer,
		lifepathRandomizer: LifepathRandomizerReducer,
		practicePlanner: PracticePlannerReducer,
		duelOfWits: DuelOfWitsReducer,
		fight: FightReducer
	})
});

type StoreState = ReturnType<typeof STORE.getState>;

export const useAppDispatch: () => Dispatch<CombinedActions> = useDispatch<Dispatch<CombinedActions>>;
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
