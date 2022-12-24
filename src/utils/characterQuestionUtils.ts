import { Attribute, AttributeQuestions, Attributes } from "../data/attributes";
import { CharacterQuestions, CharacterSpending } from "../state/reducers/characterBurner";


// REFRESH
export function RefreshQuestionsList(spendings: CharacterSpending, currentQuestions: CharacterQuestions): CharacterQuestions {
	const newQuestions: CharacterQuestions = {};

	for (const questionKey in AttributeQuestions) {
		const question = AttributeQuestions[questionKey];

		if (question.attribute === "Always") {
			if (questionKey in currentQuestions) {
				newQuestions[questionKey] = currentQuestions[questionKey];
			}
			else {
				newQuestions[questionKey] = false;
			}
		}
		else {
			const questionTrait = (Attributes.find(v => v.name === question.attribute) as Attribute).requiredTrait as TraitPath;

			if (questionTrait in spendings.traits && spendings.traits[questionTrait].open > 0) {
				if (questionKey in currentQuestions) {
					newQuestions[questionKey] = currentQuestions[questionKey];
				}
				else {
					newQuestions[questionKey] = false;
				}
			}
		}
	}

	console.log({ newQuestions });

	return newQuestions;
}
