import { SwitchAnswer } from "../../../utils/characterQuestionUtils";
import { GetQuestions } from "./_common";


export function SwitchQuestionAnswer(state: CharacterBurnerState, action: SwitchQuestionAnswer) {
	const newAnswers = SwitchAnswer(action.payload.questionKey, GetQuestions(state));
	return {
		...state,
		questions: JSON.parse(JSON.stringify(newAnswers))
	};
}

export function AddBrutalLifeTrait(state: CharacterBurnerState, action: AddBrutalLifeTrait) {
	const newStockSpecific = JSON.parse(JSON.stringify(state.stockSpecific)) as CharacterStockSpecific;
	newStockSpecific.brutalLife.traits.push(action.payload.traitPath);
	return {
		...state,
		stockSpecific: newStockSpecific
	};
}

export function SetHuntingGround(state: CharacterBurnerState, action: SetHuntingGround) {
	const newStockSpecific = JSON.parse(JSON.stringify(state.stockSpecific)) as CharacterStockSpecific;
	newStockSpecific.territory.huntingGround = action.payload.huntingGround;
	return {
		...state,
		stockSpecific: newStockSpecific
	};
}

export function ModifySpecialLifepathValue(state: CharacterBurnerState, action: ModifySpecialLifepathValue) {
	const newSpecialLifepaths = JSON.parse(JSON.stringify(state.specialLifepaths)) as SpecialLifepaths;
	if ("advisorToTheCourtYears" in action.payload) newSpecialLifepaths.advisorToTheCourt.years = action.payload.advisorToTheCourtYears;
	if ("bondsmanOwnerLifepathPath" in action.payload) newSpecialLifepaths.bondsman.ownerLifepathPath = action.payload.bondsmanOwnerLifepathPath;
	if ("princeOfTheBloodYears" in action.payload) newSpecialLifepaths.princeOfTheBlood.years = action.payload.princeOfTheBloodYears;
	return {
		...state,
		specialLifepaths: newSpecialLifepaths
	};
}
