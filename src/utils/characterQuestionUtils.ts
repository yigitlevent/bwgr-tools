import { Attribute, AttributeQuestions, AttributeQuestionsKeys, Attributes } from "../data/attributes";
import { CharacterQuestions, CharacterSpendings } from "../state/reducers/characterBurner";


// REFRESH
export function RefreshQuestionsList(spendings: CharacterSpendings, currentQuestions: CharacterQuestions): CharacterQuestions {
	const newQuestions: CharacterQuestions = {};

	for (const questionKey in AttributeQuestions) {
		const key = questionKey as AttributeQuestionsKeys;
		const question = AttributeQuestions[key];

		if (typeof question.attribute !== "string") {
			const attributes = Array.from(question.attribute);
			for (const attrKey in attributes) {
				const attr = attributes[attrKey];
				const questionTrait = (Attributes.find(v => v.name === attr) as Attribute).requiredTrait as TraitPath;
				if (questionTrait in spendings.traits && spendings.traits[questionTrait].open > 0) {
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
			if (questionTrait in spendings.traits && spendings.traits[questionTrait].open > 0) {
				if (questionKey in currentQuestions) newQuestions[key] = currentQuestions[key];
				else newQuestions[key] = false;
			}
		}
	}

	console.log({ newQuestions });

	return newQuestions;
}
