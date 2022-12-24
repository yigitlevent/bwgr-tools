import { Attribute, AttributeQuestions, AttributeQuestionsKeys, Attributes } from "../data/attributes";
import { CharacterQuestions, CharacterSpendings } from "../state/reducers/characterBurner";
import { LifepathTotals } from "./lifepathTotals";


export function IsTraitInCommonOrOpen(questionTrait: string, totals: LifepathTotals, spendings: CharacterSpendings) {
	const inCommon = totals.traits.commonList.includes(questionTrait);
	const isOpen = questionTrait in spendings.traits && spendings.traits[questionTrait].open > 0;
	return inCommon || isOpen;
}

// SWITCH
export function SwitchAnswer(questionKey: AttributeQuestionsKeys, currentQuestions: CharacterQuestions) {
	currentQuestions[questionKey] = !currentQuestions[questionKey];
	return currentQuestions;
}

// REFRESH
export function RefreshQuestionsList(totals: LifepathTotals, spendings: CharacterSpendings, currentQuestions: CharacterQuestions): CharacterQuestions {
	const newQuestions: CharacterQuestions = {};

	for (const questionKey in AttributeQuestions) {
		const key = questionKey as AttributeQuestionsKeys;
		const question = AttributeQuestions[key];

		if (typeof question.attribute !== "string") {
			const attributes = Array.from(question.attribute);

			for (const attrKey in attributes) {
				const attr = attributes[attrKey];
				const questionTrait = (Attributes.find(v => v.name === attr) as Attribute).requiredTrait as TraitPath;

				if (IsTraitInCommonOrOpen(questionTrait, totals, spendings)) {
					if (questionKey in currentQuestions) newQuestions[key] = currentQuestions[key];
					else newQuestions[key] = false;
				}
			}
		}
		else if (question.attribute === "Always") {
			if (questionKey in currentQuestions) newQuestions[key] = currentQuestions[key];
			else newQuestions[key] = false;
		}
		else {
			const questionTrait = (Attributes.find(v => v.name === question.attribute) as Attribute).requiredTrait as TraitPath;

			if (IsTraitInCommonOrOpen(questionTrait, totals, spendings)) {
				if (questionKey in currentQuestions) newQuestions[key] = currentQuestions[key];
				else newQuestions[key] = false;
			}
		}
	}

	return newQuestions;
}
