import { v4 as uuidv4 } from "uuid";
import produce from "immer";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CharacterBurnerStoreVersion } from "./_persistOptions";

import { GetLifepathFromPath, GetLifepathsFromPaths, GetSkillFromPath, GetTraitFromPath } from "../../utils/pathFinder";
import { GetAverage } from "../../utils/misc";
import { Lifepath, Stocks } from "../../data/stocks/_stocks";
import { Stat, Stats } from "../../data/stats";
import { Attribute, AttributeQuestions, AttributeQuestionsKeys, Attributes } from "../../data/attributes";
import { TraitCategories } from "../../data/traits/_traits";


const EmptyTotals: LifepathTotals = {
	years: {
		points: 0,
		extensions: []
	},
	resources: {
		points: 0,
		extensions: [],
		fromTraitsList: []
	},
	stats: {
		fromAge: [0, 0],
		fromLifepaths: {
			mentalPoints: 0,
			physicalPoints: 0,
			eitherPoints: 0
		}
	},
	skills: {
		generalPoints: {
			points: 0,
			extensions: []
		},
		lifepathPoints: {
			points: 0,
			extensions: []
		},
		mandatoryList: [],
		lifepathList: [],
		generalList: []
	},
	traits: {
		points: 0,
		commonList: [],
		mandatoryList: [],
		lifepathList: [],
		generalList: [],
		attributeMods: {}
	}
};

const EmptySpendings: CharacterSpendings = {
	stats: {
		Will: { mentalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } },
		Perception: { mentalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } },
		Power: { physicalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } },
		Agility: { physicalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } },
		Forte: { physicalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } },
		Speed: { physicalPool: { shade: 0, exponent: 0 }, eitherPool: { shade: 0, exponent: 0 } }
	},
	attributes: {},
	skills: {},
	traits: {},
	resources: {}
};

export const useCharacterBurnerStore = create<CharacterBurnerState>()(
	devtools(
		persist(
			(set, get) => ({
				stock: "Dwarf",
				concept: "",
				name: "",
				beliefs: {
					list: ["", "", "", ""],
					fourthBeliefName: "Special Belief"
				},
				instincts: {
					list: ["", "", "", ""],
					fourthInstinctName: "Special Instinct"
				},
				limits: {
					beliefs: 3,
					instincts: 3,
					stats: {
						Will: { min: 1, max: 8 },
						Perception: { min: 1, max: 8 },
						Power: { min: 1, max: 8 },
						Agility: { min: 1, max: 8 },
						Forte: { min: 1, max: 8 },
						Speed: { min: 1, max: 8 }
					},
					attributes: 9
				},
				lifepathPaths: [],
				specialLifepaths: {
					advisorToTheCourt: { years: 1 },
					bondsman: { ownerLifepathPath: "Human➞Noble➞Lord" },
					princeOfTheBlood: { years: 2 }
				},
				specialSkills: {
					appropriateWeapons: { selected: ["Any General➞Sword"], mandatory: "Any General➞Sword" },
					javelinOrBow: "Any General➞Javelin",
					anySmith: ["Any General➞Blacksmith"]
				},
				totals: EmptyTotals,
				spendings: EmptySpendings,
				questions: {},
				stockSpecific: {
					brutalLife: {
						traits: []
					},
					territory: {
						huntingGround: undefined
					}
				},

				checkHasLifepath: (lifepathPath: LifepathPath) => {
					const state = get();
					return (state.lifepathPaths.includes(lifepathPath));
				},
				checkHasSkill: (skillPath: SkillPath) => {
					const state = get();
					return (state.totals.skills.mandatoryList.includes(skillPath)
						|| state.totals.skills.lifepathList.includes(skillPath)
						|| state.totals.skills.generalList.includes(skillPath));
				},
				checkHasTrait: (traitPath: TraitPath) => {
					const state = get();
					return (state.totals.traits.commonList.includes(traitPath)
						|| state.totals.traits.mandatoryList.includes(traitPath)
						|| state.totals.traits.lifepathList.includes(traitPath)
						|| state.totals.traits.generalList.includes(traitPath));
				},

				calculateTotals: (chosenLifepaths: Lifepath[]) => {
					const occuranceCount = (chosenLifepaths: Lifepath[], currentLifepath: Lifepath, currentIndex: number) => {
						const previousLifepaths = chosenLifepaths.slice(0, currentIndex);
						return previousLifepaths.filter(lp => lp.name === currentLifepath.name).length;
					};

					const totals = JSON.parse(JSON.stringify(EmptyTotals)) as LifepathTotals;

					if (chosenLifepaths.length > 0) {
						for (let i = 0; i < chosenLifepaths.length; i++) {
							const lp = chosenLifepaths[i];
							const repeatCount = occuranceCount(chosenLifepaths, lp, i);

							if (i !== 0) {
								const prevLp = chosenLifepaths[i - 1];
								if (lp.setting !== prevLp.setting) totals.years.points += 1;
							}

							if (typeof lp.years === "number") totals.years.points = totals.years.points + lp.years;
							else totals.years.extensions.push(lp.years);

							if (repeatCount === 0 || repeatCount === 1) {
								totals.stats.fromLifepaths.eitherPoints += lp.eitherPool;
								totals.stats.fromLifepaths.mentalPoints += lp.mentalPool;
								totals.stats.fromLifepaths.physicalPoints += lp.physicalPool;

								if (typeof lp.resources === "number") totals.resources.points += lp.resources;
								else if (lp.name === "Hostage") totals.resources.points += Math.floor(chosenLifepaths[i - 1].resources as number / 2);
								else totals.resources.extensions.push(lp.resources);

								if (typeof lp.generalSkillPool === "number") totals.skills.generalPoints.points += lp.generalSkillPool;
								else totals.skills.generalPoints.extensions.push(lp.generalSkillPool);

								if (typeof lp.skillPool === "number") totals.skills.lifepathPoints.points += lp.skillPool;
								else totals.skills.lifepathPoints.extensions.push(lp.skillPool);

								if (repeatCount === 1 && lp.traits.length < 2) totals.traits.points += lp.traitPool - 1;
								else totals.traits.points += lp.traitPool;
							}
							else if (repeatCount === 2) {
								if (typeof lp.resources === "number") totals.resources.points += Math.floor(lp.resources / 2);
								else if (lp.name === "Hostage") totals.resources.points += Math.floor(chosenLifepaths[i - 1].resources as number / 4);

								if (typeof lp.generalSkillPool === "number") totals.skills.generalPoints.points += Math.floor(lp.generalSkillPool / 2);

								if (typeof lp.skillPool === "number") totals.skills.lifepathPoints.points += Math.floor(lp.skillPool / 2);
							}
							else if (repeatCount > 2) {
								if (typeof lp.resources === "number") totals.resources.points += Math.floor(lp.resources / 2);
								else if (lp.name === "Hostage") totals.resources.points += Math.floor(chosenLifepaths[i - 1].resources as number / 2 / 2);
							}
						}

						const stock = chosenLifepaths[0].stock;

						const ageBracket = Stocks[stock].agePool.filter(v => (v.max >= totals.years.points && v.min <= totals.years.points));
						totals.stats.fromAge = [ageBracket[0].m, ageBracket[0].p];

						const mandSkills = new Set<string>();
						const skills = new Set<string>();

						const commonTraits = new Set<string>(`${stock} Common` in TraitCategories ? TraitCategories[`${stock} Common`].traits.map(trait => `${stock} Common➞${trait.name}`) : []);
						const mandTraits = new Set<string>();
						const traits = new Set<string>();

						for (let i = 0; i < chosenLifepaths.length; i++) {
							const lp = chosenLifepaths[i];
							const repeatCount = occuranceCount(chosenLifepaths, lp, i);

							if (lp.skills.length > 0) mandSkills.add(lp.skills[0]);
							if (repeatCount === 1 && lp.skills.length > 1) mandSkills.add(lp.skills[1]);

							if (lp.traits.length > 0) mandTraits.add(lp.traits[0]);
							if (repeatCount === 1 && lp.traits.length > 1) mandTraits.add(lp.traits[1]);
						}

						for (const lifepathKey in chosenLifepaths) {
							const lp = chosenLifepaths[lifepathKey];
							lp.skills.forEach(skill => { if (!mandSkills.has(skill)) skills.add(skill); });
							lp.traits.forEach(skill => { if (!commonTraits.has(skill) && !mandTraits.has(skill)) traits.add(skill); });
						}

						totals.skills.mandatoryList = Array.from(mandSkills);
						totals.skills.lifepathList = Array.from(skills);

						totals.traits.commonList = Array.from(commonTraits);
						totals.traits.mandatoryList = Array.from(mandTraits);
						totals.traits.lifepathList = Array.from(traits);
					}

					return totals;
				},
				checkIfTraitInCommonOrOpen: (questionTrait: string) => {
					const state = get();
					const inCommon = state.totals.traits.commonList.includes(questionTrait);
					const isOpen = questionTrait in state.spendings.traits && state.spendings.traits[questionTrait].open > 0;
					return inCommon || isOpen;
				},

				clearLifepathPaths: () => {
					set(produce<CharacterBurnerState>((state) => {
						state.lifepathPaths = [];
					}));
				},
				clearTotals: () => {
					set(produce<CharacterBurnerState>((state) => {
						state.totals = JSON.parse(JSON.stringify(EmptyTotals));
					}));
				},
				clearSpendings: () => {
					set(produce<CharacterBurnerState>((state) => {
						state.spendings = JSON.parse(JSON.stringify(EmptySpendings));
					}));
				},
				clearQuestions: () => {
					set(produce<CharacterBurnerState>((state) => {
						state.questions = {};
					}));
				},

				refreshTotals: (generalSkills: string[], generalTraits: string[]) => {
					const occuranceCount = (chosenLifepaths: Lifepath[], currentLifepath: Lifepath, currentIndex: number) => {
						const previousLifepaths = chosenLifepaths.slice(0, currentIndex);
						return previousLifepaths.filter(lp => lp.name === currentLifepath.name).length;
					};

					const state = get();
					state.clearTotals();

					set(produce<CharacterBurnerState>((state) => {
						const chosenLifepaths = GetLifepathsFromPaths(state.lifepathPaths);

						if (chosenLifepaths.length > 0) {
							for (let i = 0; i < state.lifepathPaths.length; i++) {
								const lp = chosenLifepaths[i];
								const repeatCount = occuranceCount(chosenLifepaths, lp, i);

								if (i !== 0) {
									const prevLp = chosenLifepaths[i - 1];
									if (lp.setting !== prevLp.setting) state.totals.years.points += 1;
								}

								if (typeof lp.years === "number") state.totals.years.points = state.totals.years.points + lp.years;
								else if (lp.name === "Advisor to the Court") state.totals.years.points += state.specialLifepaths.advisorToTheCourt.years;
								else if (lp.name === "Prince of the Blood") state.totals.years.points += state.specialLifepaths.princeOfTheBlood.years;
								else state.totals.years.extensions.push(lp.years);

								const bondsmanOwnerLifepath = (lp.name === "Bondsman") ? GetLifepathFromPath(state.specialLifepaths.bondsman.ownerLifepathPath) : undefined;

								if (repeatCount === 0 || repeatCount === 1) {
									state.totals.stats.fromLifepaths.eitherPoints += lp.eitherPool;
									state.totals.stats.fromLifepaths.mentalPoints += lp.mentalPool;
									state.totals.stats.fromLifepaths.physicalPoints += lp.physicalPool;

									if (typeof lp.resources === "number") state.totals.resources.points += lp.resources;
									else if (lp.name === "Hostage") state.totals.resources.points += Math.floor(chosenLifepaths[i - 1].resources as number / 2);
									else if (lp.name === "Advisor to the Court") state.totals.resources.points += 10 * state.specialLifepaths.advisorToTheCourt.years;
									else state.totals.resources.extensions.push(lp.resources);

									if (typeof lp.generalSkillPool === "number") state.totals.skills.generalPoints.points += lp.generalSkillPool;
									else if (lp.name === "Advisor to the Court") state.totals.skills.generalPoints.points += state.specialLifepaths.advisorToTheCourt.years;
									else state.totals.skills.generalPoints.extensions.push(lp.generalSkillPool);

									if (typeof lp.skillPool === "number") state.totals.skills.lifepathPoints.points += lp.skillPool;
									else if (bondsmanOwnerLifepath) state.totals.skills.lifepathPoints.points += Math.floor(bondsmanOwnerLifepath.skillPool as number / 4);
									else state.totals.skills.lifepathPoints.extensions.push(lp.skillPool);

									if (repeatCount === 1 && lp.traits.length < 2) state.totals.traits.points += lp.traitPool - 1;
									else state.totals.traits.points += lp.traitPool;
								}
								else if (repeatCount === 2) {
									if (typeof lp.resources === "number") state.totals.resources.points += Math.floor(lp.resources / 2);
									else if (lp.name === "Hostage") state.totals.resources.points += Math.floor(chosenLifepaths[i - 1].resources as number / 4);
									else if (lp.name === "Advisor to the Court") state.totals.resources.points += Math.floor(10 * state.specialLifepaths.advisorToTheCourt.years / 2);

									if (typeof lp.generalSkillPool === "number") state.totals.skills.generalPoints.points += Math.floor(lp.generalSkillPool / 2);
									else if (lp.name === "Advisor to the Court") state.totals.skills.generalPoints.points += Math.floor(state.specialLifepaths.advisorToTheCourt.years / 2);

									if (typeof lp.skillPool === "number") state.totals.skills.lifepathPoints.points += Math.floor(lp.skillPool / 2);
									else if (bondsmanOwnerLifepath) state.totals.skills.lifepathPoints.points += Math.floor(bondsmanOwnerLifepath.skillPool as number / 4 / 2);
								}
								else if (repeatCount > 2) {
									if (typeof lp.resources === "number") state.totals.resources.points += Math.floor(lp.resources / 2);
									else if (lp.name === "Hostage") state.totals.resources.points += Math.floor(chosenLifepaths[i - 1].resources as number / 2 / 2);
									else if (lp.name === "Advisor to the Court") state.totals.resources.points += Math.floor(10 * state.specialLifepaths.advisorToTheCourt.years / 2 / 2);
								}
							}

							const stock = chosenLifepaths[0].stock;

							const ageBracket = Stocks[stock].agePool.filter(v => (v.max >= state.totals.years.points && v.min <= state.totals.years.points));
							state.totals.stats.fromAge = [ageBracket[0].m, ageBracket[0].p];

							const mandSkills = new Set<string>();
							const skills = new Set<string>();

							const commonTraits = new Set<string>(`${stock} Common` in TraitCategories ? TraitCategories[`${stock} Common`].traits.map(trait => `${stock} Common➞${trait.name}`) : []);
							const mandTraits = new Set<string>();
							const traits = new Set<string>();

							for (let i = 0; i < chosenLifepaths.length; i++) {
								const lp = chosenLifepaths[i];
								const repeatCount = occuranceCount(chosenLifepaths, lp, i);

								if (lp.skills.length > 0) mandSkills.add(lp.skills[0]);
								if (repeatCount === 1 && lp.skills.length > 1) mandSkills.add(lp.skills[1]);

								if (mandSkills.has("Any General➞Appropriate Weapons")) {
									mandSkills.add(state.specialSkills.appropriateWeapons.mandatory);
								}

								if (lp.traits.length > 0) mandTraits.add(lp.traits[0]);
								if (repeatCount === 1 && lp.traits.length > 1) mandTraits.add(lp.traits[1]);
							}

							for (const lifepathKey in chosenLifepaths) {
								const lp = chosenLifepaths[lifepathKey];

								lp.skills.forEach(skill => { if (!mandSkills.has(skill)) skills.add(skill); });

								const bondsmanOwnerLifepath = (lp.name === "Bondsman") ? GetLifepathFromPath(state.specialLifepaths.bondsman.ownerLifepathPath) : undefined;
								if (bondsmanOwnerLifepath) {
									bondsmanOwnerLifepath.skills.forEach(skill => { if (!mandSkills.has(skill)) skills.add(skill); });
								}

								lp.traits.forEach(skill => { if (!commonTraits.has(skill) && !mandTraits.has(skill)) traits.add(skill); });

								if (mandSkills.has("Any General➞Appropriate Weapons") || skills.has("Any General➞Appropriate Weapons")) {
									state.specialSkills.appropriateWeapons.selected.forEach(skill => { if (!mandSkills.has(skill)) skills.add(skill); });
								}

								if (skills.has("Any General➞Javelin or Bow")) {
									if (!mandSkills.has(state.specialSkills.javelinOrBow)) skills.add(state.specialSkills.javelinOrBow);
								}

								if (skills.has("Any General➞Any -smith")) {
									state.specialSkills.anySmith.forEach(skill => { if (!mandSkills.has(skill)) skills.add(skill); });
								}
							}

							state.totals.skills.mandatoryList = Array.from(mandSkills);
							state.totals.skills.lifepathList = Array.from(skills);
							for (const key in generalSkills) {
								const skillPath = generalSkills[key];
								if (!(skillPath in state.totals.skills.mandatoryList || skillPath in state.totals.skills.lifepathList)) {
									state.totals.skills.generalList.push(skillPath);
								}
							}

							state.totals.traits.commonList = Array.from(commonTraits);
							state.totals.traits.mandatoryList = Array.from(mandTraits);
							state.totals.traits.lifepathList = Array.from(traits);
							for (const key in generalTraits) {
								const traitPath = generalTraits[key];
								if (!(traitPath in state.totals.traits.commonList || traitPath in state.totals.traits.mandatoryList || traitPath in state.totals.traits.lifepathList)) {
									state.totals.traits.generalList.push(traitPath);
								}
							}
						}
					}));
				},
				refreshSkillSpendings: () => {
					set(produce<CharacterBurnerState>((state) => {
						for (const key in state.spendings.skills) {
							if (state.totals.skills.generalList.includes(key)) {
								state.spendings.skills[key] = { ...state.spendings.skills[key], lifepath: { open: 0, advance: 0 } };
							}
							else if (state.totals.skills.mandatoryList.includes(key) || state.totals.skills.lifepathList.includes(key)) {
								state.spendings.skills[key] = { ...state.spendings.skills[key] };
							}
							else {
								delete state.spendings.skills[key];
							}
						}

						[...state.totals.skills.mandatoryList, ...state.totals.skills.lifepathList, ...state.totals.skills.generalList].forEach(skillName => {
							if (!(skillName in state.spendings.skills)) {
								state.spendings.skills[skillName] = { general: { open: 0, advance: 0 }, lifepath: { open: 0, advance: 0 } };
							}
						});
					}));
					const state = get();
					state.totals.skills.mandatoryList.forEach(skillName => {
						state.openSkill(skillName as SkillPath, true, true);
					});
				},
				refreshTraitSpendings: () => {
					set(produce<CharacterBurnerState>((state) => {
						for (const key in state.spendings.traits) {
							if (state.totals.traits.mandatoryList.includes(key) || state.totals.traits.lifepathList.includes(key) || state.totals.traits.generalList.includes(key)) {
								state.spendings.traits[key] = { ...state.spendings.traits[key] };
							}
							else delete state.spendings.traits[key];
						}

						[...state.totals.traits.mandatoryList, ...state.totals.traits.lifepathList, ...state.totals.traits.generalList].forEach(traitName => {
							if (!(traitName in state.spendings.traits)) {
								state.spendings.traits[traitName] = { open: 0 };
							}
						});
					}));
					const state = get();
					state.totals.traits.mandatoryList.forEach(traitName => {
						state.openTrait(traitName as TraitPath, true, true);
					});
					state.refreshTraitEffects();
				},
				refreshTraitEffects: () => {
					set(produce<CharacterBurnerState>((state) => {
						const createResource = (type: ResourceTypes, nameSuffix: string, description: string) => {
							if (nameSuffix.length > 0) return { name: `${type} (${nameSuffix})`, type, description };
							return { name: type, type, description };
						};
						const createAttributeIfNotExists = (attribute: AttributesList) => {
							if (!(attribute in state.totals.traits.attributeMods)) state.totals.traits.attributeMods[attribute] = 0;
						};

						const newResources = [];
						state.beliefs.fourthBeliefName = "Special Belief";
						state.instincts.fourthInstinctName = "Special Instinct";

						// ELF
						if (state.checkHasTrait("Elf Common➞First Born")) {
							state.limits.stats.Perception = { min: 1, max: 9 };
						}
						if (state.checkHasTrait("Elf Lifepath➞Etharchal")) {
							newResources.push(createResource("Affiliation", "1D", "With Elven Etharchs."));
						}
						if (state.checkHasTrait("Elf Lifepath➞Servant of the Citadel")) {
							newResources.push(createResource("Affiliation", "2D", "In and around the citadel."));
							newResources.push(createResource("Reputation", "2D", "In and around the citadel."));
						}
						if (state.checkHasTrait("Elf Lifepath➞Sword of the White Towers")) {
							newResources.push(createResource("Affiliation", "1D", "With the Swords of the White Towers—Elven."));
						}
						if (state.checkHasTrait("Elf Lifepath➞Sworn to Protect")) {
							newResources.push(createResource("Affiliation", "2D", "Within the Protectors."));
						}
						if (state.checkHasTrait("Elf Lifepath➞Sworn to the Lord Protector")) {
							newResources.push(createResource("Relationship", "", "With the Lord Protector."));
						}
						if (state.checkHasTrait("Elf Lifepath➞Exile")) {
							newResources.push(createResource("Reputation", "1D", "Infamous, among all Elves."));
						}
						if (state.checkHasTrait("Elf Special➞Slayer")) {
							newResources.push(createResource("Reputation", "2D", "Infamous, (all Elven people) as a Slayer."));
							createAttributeIfNotExists("Grief");
							state.totals.traits.attributeMods["Grief"] += 1;
						}
						if (state.checkHasTrait("Elf Lifepath➞Ear to the Ground")) {
							if (!state.checkHasTrait("Dark Elf Lifepath➞Feral")) {
								createAttributeIfNotExists("Circles");
								state.totals.traits.attributeMods["Circles"] += 1;
							}
						}
						if (state.checkHasTrait("Elf Lifepath➞Prince of the Blood")) {
							if (!state.checkHasTrait("Dark Elf Lifepath➞Feral")) {
								createAttributeIfNotExists("Circles");
								state.totals.traits.attributeMods["Circles"] += 1;
							}
						}
						if (state.checkHasTrait("Elf Special➞Exile")) {
							createAttributeIfNotExists("Grief");
							state.totals.traits.attributeMods["Grief"] += 1;
						}
						if (state.checkHasTrait("Elf Special➞Unbreakable")) {
							createAttributeIfNotExists("Grief");
							state.totals.traits.attributeMods["Grief"] -= 2;
						}
						if (state.checkHasTrait("Elf Special➞World Weary")) {
							createAttributeIfNotExists("Hesitation");
							createAttributeIfNotExists("Grief");
							state.totals.traits.attributeMods["Hesitation"] -= 2;
							state.totals.traits.attributeMods["Grief"] += 1;
						}
						/* TODO: Incomplete Elf trait effects
						Elf Lifepath➞Lesson of One
							1D Reputation: as his student if an important relationship is selected with mentor
							2D Reputation: as his student if a powerful relationship is selected with mentor

						Elf Lifepath➞Lord of Ages
							+1D to any Reputation or Affiliation

						Elf Special➞Mourner
							Attribute: Grief exponent to anything equal or above starting exp, up to 9
						*/

						// HUMAN
						if (state.checkHasTrait("Human Lifepath➞Affinity for Business")) {
							createAttributeIfNotExists("Resources");
							state.totals.traits.attributeMods["Resources"] += 1;
						}
						if (state.checkHasTrait("Human Lifepath➞Keys to the Church")) {
							newResources.push(createResource("Affiliation", "1D", "Within the Church. If he took liberties with his duties, infamous."));
						}
						if (state.checkHasTrait("Human Lifepath➞Made Man")) {
							newResources.push(createResource("Affiliation", "1D", "For being a journeyman craftsman."));
						}
						if (state.checkHasTrait("Human Lifepath➞Mark of Privilage")) {
							newResources.push(createResource("Affiliation", "1D", "With nobility."));
						}
						/* TODO: Incomplete Human trait effects
						*/

						// ORC
						if (state.checkHasTrait("Orc Lifepath➞Born to Rule Them All")) {
							newResources.push(createResource("Affiliation", "1D", "Among Great and Black Orcs."));
							newResources.push(createResource("Reputation", "1D", "Infamous, among the chattel and the legion."));
						}

						// RODEN
						/* TODO: Roden trait effects */

						// GREAT WOLF
						if (state.checkHasTrait("Great Wolf Common➞Great Lupine Form")) {
							state.limits.stats.Agility = { min: 1, max: 6 };
						}
						if (state.checkHasTrait("Great Wolf Lifepath➞Dominant")) {
							newResources.push(createResource("Affiliation", "1D", "With a pack."));
							newResources.push(createResource("Reputation", "1D", "Within that pack as a Dominant."));
						}
						if (state.checkHasTrait("Great Wolf Lifepath➞Loyal")) {
							state.beliefs.fourthBeliefName = "Loyalty";
							state.limits.beliefs = 4;
						}
						if (state.checkHasTrait("Great Wolf Lifepath➞Odor of Spirits")) {
							newResources.push(createResource("Reputation", "1D", "Infamous."));
						}
						if (state.checkHasTrait("Great Wolf Lifepath➞Prenaturally Calm")) {
							createAttributeIfNotExists("Hesitation");
							state.totals.traits.attributeMods["Hesitation"] -= 2;
						}
						if (state.checkHasTrait("Great Wolf Lifepath➞Spirit Marked")) {
							newResources.push(createResource("Affiliation", "1D", "With the Spirit Hunters."));
							newResources.push(createResource("Magical", "Spirit Mark 1D", "As per the Spirit Binding rules."));
						}
						if (state.checkHasTrait("Great Wolf Lifepath➞Stained")) {
							newResources.push(createResource("Reputation", "1D", "As a Last Wolf."));
						}
						if (state.checkHasTrait("Great Wolf Lifepath➞Stink of the Ancient")) {
							newResources.push(createResource("Reputation", "1D", "As a Ghost of the Deeping Wood among the packs."));
						}
						if (state.checkHasTrait("Great Wolf Lifepath➞Submissive")) {
							newResources.push(createResource("Relationship", "", "With a master or dominant character."));
						}
						if (state.checkHasTrait("Great Wolf Special➞Raven Friend")) {
							newResources.push(createResource("Relationship", "", "With a raven."));
							newResources.push(createResource("Affiliation", "1D", "With a conspiracy of ravens."));
						}

						// TROLL
						if (state.checkHasTrait("Troll Common➞Massive Stature")) {
							state.limits.stats.Power = { min: 4, max: 9 };
							state.limits.stats.Forte = { min: 4, max: 9 };
							state.limits.stats.Agility = { min: 1, max: 5 };
							state.limits.stats.Speed = { min: 1, max: 5 };
						}
						/* TODO: Troll trait effects */

						// GENERAL CALL-ON
						/* TODO: General call-on trait effects */

						// GENERAL DIE
						/* TODO: General die trait effects */

						// GENERAL MONSTROUS
						/* TODO: General monstrous trait effects */

						state.totals.resources.fromTraitsList = newResources;
					}));
				},
				refreshAttributeSpendings: () => {
					set(produce<CharacterBurnerState>((state) => {
						for (const key in Attributes) {
							const attr = Attributes[key];

							if (attr.requiredTrait) {
								if (state.checkIfTraitInCommonOrOpen(attr.requiredTrait)) {
									if (!(attr.name in state.spendings.attributes)) {
										state.spendings.attributes[attr.name] = { shadeShifted: 0 };
									}
								}
								else {
									delete state.spendings.attributes[attr.name];
								}
							}
							else {
								if (!(attr.name in state.spendings.attributes)) {
									state.spendings.attributes[attr.name] = { shadeShifted: 0 };
								}
							}
						}
					}));
				},
				refreshQuestions: () => {
					set(produce<CharacterBurnerState>((state) => {
						const newQuestions: CharacterQuestions = {};
						for (const questionKey in AttributeQuestions) {
							const key = questionKey as AttributeQuestionsKeys;
							const question = AttributeQuestions[key];

							if (typeof question.attribute !== "string") {
								const attributes = Array.from(question.attribute);

								for (const attrKey in attributes) {
									const attr = attributes[attrKey];
									const questionTrait = (Attributes.find(v => v.name === attr) as Attribute).requiredTrait as TraitPath;

									if (state.checkIfTraitInCommonOrOpen(questionTrait)) {
										if (questionKey in state.questions) newQuestions[key] = state.questions[key];
										else newQuestions[key] = false;
									}
								}
							}
							else if (question.attribute === "Always") {
								if (questionKey in state.questions) newQuestions[key] = state.questions[key];
								else newQuestions[key] = false;
							}
							else {
								const questionTrait = (Attributes.find(v => v.name === question.attribute) as Attribute).requiredTrait as TraitPath;

								if (state.checkIfTraitInCommonOrOpen(questionTrait)) {
									if (questionKey in state.questions) newQuestions[key] = state.questions[key];
									else newQuestions[key] = false;
								}
							}
						}
						state.questions = newQuestions;
					}));
				},
				resetStockSpecifics: () => {
					set(produce<CharacterBurnerState>((state) => {
						if (state.stockSpecific.brutalLife.traits.length > 0) {
							const brutalLifeTraits = state.stockSpecific.brutalLife.traits;
							brutalLifeTraits.pop();
							state.stockSpecific.brutalLife.traits = brutalLifeTraits;
						}
						state.stockSpecific.territory.huntingGround = undefined;
					}));
				},


				getMentalPointsTotal: () => {
					const state = get();
					return state.totals.stats.fromAge[0] + state.totals.stats.fromLifepaths.mentalPoints;
				},
				getPhysicalPointsTotal: () => {
					const state = get();
					return state.totals.stats.fromAge[1] + state.totals.stats.fromLifepaths.physicalPoints;
				},
				getStatShade: (statName: StatsList) => {
					const state = get();
					const totalSpent =
						state.spendings.stats[statName].eitherPool.shade +
						((Stats.find(v => v.name === statName) as Stat).pool === "Mental"
							? (state.spendings.stats[statName].mentalPool as StatSpending).shade
							: (state.spendings.stats[statName].physicalPool as StatSpending).shade);
					return totalSpent === 0 ? "B" : "G";
				},
				getStatExponent: (statName: StatsList) => {
					const state = get();
					const total =
						state.spendings.stats[statName].eitherPool.exponent +
						((Stats.find(v => v.name === statName) as Stat).pool === "Mental"
							? (state.spendings.stats[statName].mentalPool as StatSpending).exponent
							: (state.spendings.stats[statName].physicalPool as StatSpending).exponent);
					return total;
				},
				getStatRemainings: () => {
					const state = get();
					const eitherSpending =
						Object.values(state.spendings.stats).map(v => v.eitherPool.exponent + v.eitherPool.shade).reduce((v, a) => v + a);

					const mentalSpending =
						Object.values(state.spendings.stats).map(v => ("mentalPool" in v) ? (v.mentalPool as StatSpending).exponent + (v.mentalPool as StatSpending).shade : 0).reduce((v, a) => v + a);

					const physicalSpending =
						Object.values(state.spendings.stats).map(v => ("physicalPool" in v) ? (v.physicalPool as StatSpending).exponent + (v.physicalPool as StatSpending).shade : 0).reduce((v, a) => v + a);

					return {
						eitherPool: state.totals.stats.fromLifepaths.eitherPoints - eitherSpending,
						mentalPool: (state.totals.stats.fromAge[0] + state.totals.stats.fromLifepaths.mentalPoints) - mentalSpending,
						physicalPool: (state.totals.stats.fromAge[1] + state.totals.stats.fromLifepaths.physicalPoints) - physicalSpending
					};
				},
				getAttributeShade: (attributeName: AttributesList) => {
					const state = get();
					let shade: ShadesList = "B";
					if (attributeName in state.spendings.attributes) {
						if (attributeName === "Faith in Dead Gods" || attributeName === "Ancestral Taint") {
							shade = (state.spendings.stats.Will.mentalPool as StatSpending).shade + state.spendings.stats.Will.eitherPool.shade > 0 ? "G" : "B";
						}
						else { shade = state.spendings.attributes[attributeName].shadeShifted === 5 ? "G" : state.spendings.attributes[attributeName].shadeShifted === 10 ? "W" : "B"; }
					}

					return shade;
				},
				getAttributeExponent: (attributeName: AttributesList) => {
					const state = get();
					let exponent = 0;

					const getHealthExponent = () => {
						const shades = [state.getStatShade("Will"), state.getStatShade("Forte")];
						const roots = [state.getStatExponent("Will"), state.getStatExponent("Forte")];
						if (shades.some(v => v === "G") && shades.some(v => v === "B")) { roots.push(2); }

						let extras = 0;
						if (state.questions.FILTH) extras -= 1;
						if (state.questions.SICKLY) extras -= 1;
						if (state.questions.WOUND) extras -= 1;
						if (state.questions.TORTURE && state.questions.ENSLAVED) extras -= 1;
						if (["Dwarf", "Elf", "Orc"].includes(state.stock)) extras += 1;
						if (state.questions.ACTIVE) extras += 1;
						if (state.questions.HAPPY) extras += 1;

						const base =
							(state.checkHasTrait("Human Lifepath➞Hardened"))
								? Math.ceil(GetAverage(roots))
								: Math.floor(GetAverage(roots));

						return base + extras - state.spendings.attributes.Health.shadeShifted;
					};

					const getSteelExponent = () => {
						const willExp = state.getStatExponent("Will");
						const forteExp = state.getStatExponent("Forte");

						let extras = 0;
						if (state.questions.SOLDIER) extras += 1;
						if (state.questions.WOUND && state.questions.SOLDIER) extras += 1;
						if (state.questions.WOUND && !state.questions.SOLDIER) extras -= 1;
						if (state.questions.KILLER) extras += 1;
						if (state.questions.TORTURE || state.questions.ENSLAVED || state.questions.BEATEN) {
							if (willExp >= 5) extras += 1;
							if (willExp <= 3) extras -= 1;
						}
						if (state.questions.SHELTER) extras -= 1;
						if (state.questions.COMPETITIVE) extras += 1;
						if (state.questions.BIRTH) extras += 1;
						if (state.questions.GIFTED) extras += 1;
						if (willExp >= 7) extras += 2;
						else if (willExp >= 5) extras += 1;
						if (forteExp >= 6) extras += 2;

						return 3 + extras - state.spendings.attributes.Steel.shadeShifted;
					};

					const getReflexesExponent = () => {
						const perceptionShade = state.getStatShade("Perception");
						const perceptionExp = state.getStatExponent("Perception");

						const agilityShade = state.getStatShade("Agility");
						const agilityExp = state.getStatExponent("Agility");

						const speedShade = state.getStatShade("Speed");
						const speedExp = state.getStatExponent("Speed");

						const shades = [perceptionShade, agilityShade, speedShade];
						const roots = [perceptionExp, agilityExp, speedExp];

						if (state.checkHasTrait("Great Wolf Common➞Wolf Snout")) roots[0] += 1;
						if (state.checkHasTrait("Great Wolf Common➞Woodland Ear")) roots[0] += 1;

						if (shades.some(v => v === "G") && shades.some(v => v === "B")) { roots[0] += 2; }
						return Math.floor(GetAverage(roots)) - state.spendings.attributes.Reflexes.shadeShifted;
					};

					const getHesitationExponent = () => {
						return 10 - ((state.spendings.stats.Will.mentalPool as StatSpending).exponent + state.spendings.stats.Will.eitherPool.exponent);
					};

					const getGreedExponent = () => {
						const willExp = state.getStatExponent("Will");

						const lifepathsToCheck = ["Dwarf➞Guilder➞Trader", "Dwarf➞Artificer➞Mask Bearer", "Dwarf➞Artificer➞Master of Arches", "Dwarf➞Artificer➞Master of Forges", "Dwarf➞Artificer➞Master Engraver", "Dwarf➞Noble➞Treasurer", "Dwarf➞Host➞Quartermaster", "Dwarf➞Noble➞Seneschal", "Dwarf➞Noble➞Prince"];

						const relationships = Object.values(state.spendings.resources).filter(v => v.type === "Relationship");

						let extras = 0;
						if (willExp <= 4) extras += 1;
						extras += Math.floor(state.totals.resources.points / 60);
						extras += state.lifepathPaths.filter(v => lifepathsToCheck.includes(v)).length;
						if (state.questions.COVET) extras += 1;
						if (state.questions.STOLE) extras += 1;
						if (state.questions.STOLEN) extras += 1;
						if (state.questions.MASTERCRAFT) extras += 1;
						if (state.questions.POSSESSION) extras += 1;
						if (state.totals.years.points > 400) extras += 2;
						else if (state.totals.years.points > 200) extras += 1;
						extras += -1 * relationships.filter(v => v.modifiers.includes("Romantic")).length;
						extras += 1 * relationships.filter(v => v.modifiers.includes("Hateful")).length;
						extras += 2 * relationships.filter(v => v.modifiers.includes("Immediate family") && v.modifiers.includes("Hateful")).length;
						if (state.getTraitOpenness("Dwarf Special➞Virtuous")) extras -= 1;

						return 0 + extras - state.spendings.attributes.Greed.shadeShifted;
					};

					const getGriefOrSpiteExponent = (attributeName: AttributesList) => {
						const steelExp = getSteelExponent();
						const perceptionExp = state.getStatExponent("Perception");

						const lifepathsToCheck = ["Elf➞Protector➞Lancer", "Elf➞Protector➞Lieutenant", "Elf➞Protector➞Captain"];
						const lifepathsToCheck2 = ["Elf➞Protector➞Lord Protector", "Elf➞Protector➞Soother"];
						const lifepathsToCheck3 = ["Elf➞Citadel➞Loremaster", "Elf➞Citadel➞Adjutant", "Elf➞Citadel➞Althing"];

						const knowsLament = Object.keys(state.spendings.skills).filter(v => v.toLowerCase().includes("lament") && state.getSkillOpenness(v as SkillPath));

						let extras = 0;
						if (state.lifepathPaths.filter(v => v.split("➞")[1] === "Protector").length > 0) extras += 1;
						if (state.lifepathPaths.some(v => lifepathsToCheck.includes(v))) extras += 1;
						if (state.lifepathPaths.some(v => lifepathsToCheck2.includes(v))) extras += 1;
						if (state.lifepathPaths.some(v => v === "Elf➞Etharch➞Born Etharch")) extras += 1;
						if (state.lifepathPaths.some(v => lifepathsToCheck3.includes(v))) extras += 1;
						if (state.lifepathPaths.some(v => v === "Elf➞Wilderlands➞Elder")) extras += 1;
						extras += knowsLament ? 0 : 1;
						if (state.questions.TRAGEDY) extras += 1;
						if (state.questions.OUTSIDER) extras += 1;
						if (steelExp > 5) extras += (steelExp - 5);
						if (perceptionExp > 5) extras += 1;
						if (state.totals.years.points > 1000) extras += 3;
						else if (state.totals.years.points > 750) extras += 2;
						else if (state.totals.years.points > 500) extras += 1;

						if (attributeName === "Spite") {
							const traitsToCheck = ["Elf Special➞Slayer", "Elf Special➞Exile", "Dark Elf Lifepath➞Feral", "Any Character➞Murderous", "Dark Elf Lifepath➞Saturnine", "Dark Elf Lifepath➞Femme Fatale/Homme Fatal", "Dark Elf Lifepath➞Cold", "Any Character➞Bitter"];

							const bitterReminders = Object.values(state.spendings.resources).filter(v => v.name === "Bitter Reminder");

							if (traitsToCheck.filter(v => state.getTraitOpenness(v as TraitPath))) extras += 1;
							extras += bitterReminders.length > 0 ? Math.floor(bitterReminders.map(v => v.cost).reduce((a, b) => a + b) / 10) : 0;
							if (state.questions.OUTSIDER) extras += 1;
							if (state.questions.LOVESICK) extras += 1;
							if (state.questions.ABANDON) extras += 1;
							if (state.questions.ABUSED) extras += 1;
							if (state.questions.RESPECT) extras -= 1;
							if (state.questions.LOVE) extras -= 1;
						}

						return 0 + extras - state.spendings.attributes[attributeName].shadeShifted;
					};

					const getFaithExponent = () => {
						let extras = 0;
						if (state.questions.TRUST) extras += 1;
						if (state.questions.CONSULT) extras += 1;
						if (state.questions.SERVE) extras += 1;
						return 3 + extras - state.spendings.attributes.Faith.shadeShifted;
					};

					const getFaithInDeadGodsExponent = () => {
						let extras = 0;
						if (state.questions.DEADTRUST) extras += 1;
						if (state.questions.DEADCONSULT) extras += 1;
						if (state.questions.DEADSERVE) extras += 1;
						return 3 + extras - state.spendings.attributes["Faith in Dead Gods"].shadeShifted;
					};

					const getHatredExponent = () => {
						const willExp = state.getStatExponent("Will");
						const steelExp = getSteelExponent();
						const perceptionExp = state.getStatExponent("Perception");
						let extras = 0;
						if (state.questions.WOUND) extras += 1;
						extras += state.stockSpecific.brutalLife.traits.filter(v => v !== undefined && v !== null).length;
						if (state.questions.TORTURE) extras += 1;
						if (state.questions.SLAVE) extras += 1;
						if (state.questions.FRATRICIDE) extras += 1;
						if (state.questions.HOBGOBLIN) extras += 1;
						if (willExp <= 2) extras + 1;
						if (steelExp >= 5) extras + 1;
						if (perceptionExp >= 6) extras + 1;
						return 0 + extras - state.spendings.attributes.Hatred.shadeShifted;
					};

					const getVoidEmbraceExponent = () => {
						let extras = 0;
						if (state.questions.MASTER) extras += 1;
						if (state.questions.FATE) extras += 1;
						if (state.questions.WELLSPRING) extras += 1;
						return 3 + extras - state.spendings.attributes["Void Embrace"].shadeShifted;
					};

					const getAncestralTaintExponent = () => {
						let extras = 0;
						if (state.getTraitOpenness("Great Wolf Lifepath➞Ancestral Taint")) extras += 1;
						if (state.getSkillOpenness("Great Wolf Spirit Hunter Song➞Primal Bark")) extras += 1;
						if (state.getTraitOpenness("Great Wolf Lifepath➞Spirit Nose")) extras += 1;
						if (state.getSkillOpenness("Great Wolf Spirit Hunter Song➞Ancestral Jaw")) extras += 1;
						if (state.getSkillOpenness("Great Wolf Spirit Hunter Song➞Grandfather's Song")) extras += 1;
						if (state.getTraitOpenness("Great Wolf Lifepath➞Stink of the Ancient")) extras += 1;
						return 0 + extras - state.spendings.attributes["Ancestral Taint"].shadeShifted;
					};

					const getCorruptionExponent = () => {
						const spiritMarks = Object.values(state.spendings.resources).filter(v => v.name === "Spirit Binding — Spirit Mark Levels");
						const orders = Object.values(state.spendings.resources).filter(v => v.name === "Summoning — Affiliated Order Levels");
						let extras = 0;
						if (state.getTraitOpenness("Human Special➞Gifted")) extras += 1;
						if (state.getTraitOpenness("Human Special➞Faithful") || state.getTraitOpenness("Human Lifepath➞Faith in Dead Gods")) extras += 1;
						if (state.getTraitOpenness("Human Special➞Chosen One")) extras += 1;
						extras += spiritMarks.length > 0 ? spiritMarks.map(v => v.cost).reduce((a, b) => a + (b === 10 ? 1 : b === 25 ? 2 : 3), 0) : 0;
						extras += orders.length > 0 ? orders.map(v => v.cost).reduce((a, b) => a + (b === 10 ? 1 : b === 20 ? 2 : b === 25 ? 3 : 4), 0) : 0;
						if (state.questions.PRAY) extras += 1;
						if (state.questions.PACT) extras += 1;
						return 0 + extras - state.spendings.attributes.Corruption.shadeShifted;
					};

					const getResourcesExponent = () => {
						let extras = 0;
						const res = Object.values(state.spendings.resources).filter(v => ["Property", "Reputation", "Affiliation"].includes(v.type));
						if (res.length > 0) { extras += Math.floor(res.map(v => v.cost).reduce((a, b) => a + b) / 15); }
						return 0 + extras;
					};

					const getCirclesExponent = () => {
						let extras = 0;
						const res = Object.values(state.spendings.resources).filter(v => ["Property", "Relationship"].includes(v.type));
						if (res.length > 0 && res.map(v => v.cost).reduce((a, b) => a + b) >= 50) { extras += 1; }
						return Math.floor(state.getStatExponent("Will") / 2) + extras;
					};

					if (attributeName in state.spendings.attributes) {
						if (attributeName === "Health") exponent = getHealthExponent();
						else if (attributeName === "Steel") exponent = getSteelExponent();
						else if (attributeName === "Reflexes") exponent = getReflexesExponent();
						else if (attributeName === "Hesitation") exponent = getHesitationExponent();
						else if (attributeName === "Greed") exponent = getGreedExponent();
						else if (attributeName === "Grief" || attributeName === "Spite") exponent = getGriefOrSpiteExponent(attributeName);
						else if (attributeName === "Faith") exponent = getFaithExponent();
						else if (attributeName === "Faith in Dead Gods") exponent = getFaithInDeadGodsExponent();
						else if (attributeName === "Hatred") exponent = getHatredExponent();
						else if (attributeName === "Void Embrace") exponent = getVoidEmbraceExponent();
						else if (attributeName === "Ancestral Taint") exponent = getAncestralTaintExponent();
						else if (attributeName === "Corruption") exponent = getCorruptionExponent();
						else if (attributeName === "Resources") exponent = getResourcesExponent();
						else if (attributeName === "Circles") exponent = getCirclesExponent();
						else throw `Unhandled Attribute ${attributeName}`;
					}
					return exponent;
				},
				getSkillOpenness: (skillName: SkillPath) => {
					const state = get();
					return (state.spendings.skills[skillName].general.open + state.spendings.skills[skillName].lifepath.open) > 0;
				},
				getSkillShade: (skillName: SkillPath) => {
					const state = get();
					const skill = GetSkillFromPath(skillName);
					const statShades = [
						...Stats.filter(v => skill.root.includes(v.name)).map(v => state.getStatShade(v.name)),
						...Attributes.filter(v => skill.root.includes(v.name)).map(v => state.getAttributeShade(v.name))
					];
					return statShades.every(v => v === "G") ? "G" : "B";
				},
				getSkillExponent: (skillName: SkillPath) => {
					const state = get();
					const skill = GetSkillFromPath(skillName);
					return Math.floor(GetAverage([
						...Stats.filter(v => skill.root.includes(v.name)).map(v => state.getStatExponent(v.name)),
						...Attributes.filter(v => skill.root.includes(v.name)).map(v => state.getAttributeExponent(v.name))
					]) / 2) + state.spendings.skills[skillName].general.advance + state.spendings.skills[skillName].lifepath.advance;
				},
				getSkillRemainings: () => {
					const state = get();
					const generalSpending =
						Object.values(state.spendings.skills).map(v => v.general.open + v.general.advance);

					const lifepathSpending =
						Object.values(state.spendings.skills).map(v => v.lifepath.open + v.lifepath.advance);

					return {
						generalPoints: state.totals.skills.generalPoints.points - ((generalSpending.length > 0) ? generalSpending.reduce((v, a) => v + a) : 0),
						lifepathPoints: state.totals.skills.lifepathPoints.points - ((lifepathSpending.length > 0) ? lifepathSpending.reduce((v, a) => v + a) : 0)
					};
				},
				getTraitOpenness: (traitName: TraitPath) => {
					const state = get();
					return traitName in state.spendings.traits && state.spendings.traits[traitName].open > 0;
				},
				getTraitRemainings: () => {
					const state = get();
					const traitPointSpending = Object.values(state.spendings.traits).map(v => v.open);
					return {
						traitPoints: state.totals.traits.points - ((traitPointSpending.length > 0) ? traitPointSpending.reduce((v, a) => v + a) : 0)
					};
				},
				getResourceRemainings: () => {
					const state = get();
					const costs = Object.values(state.spendings.resources).map(v => v.cost);
					const resourcePointSpending = costs.length > 0 ? costs.reduce((a, b) => a + b) : 0;
					return {
						resourcePoints: state.totals.resources.points - resourcePointSpending
					};
				},

				changeStock: (stock: StocksList) => {
					set(produce<CharacterBurnerState>((state) => {
						state.stock = stock;
					}));
					const state = get();
					state.clearLifepathPaths();
					state.clearTotals();
					state.clearSpendings();
					state.clearQuestions();
				},
				changeConcept: (concept: string) => {
					set(produce<CharacterBurnerState>((state) => {
						state.concept = concept;
					}));
				},
				changeName: (name: string) => {
					set(produce<CharacterBurnerState>((state) => {
						state.name = name;
					}));
				},
				changeBelief: (index: number, belief: string) => {
					set(produce<CharacterBurnerState>((state) => {
						state.beliefs.list[index] = belief;
					}));
				},
				changeInstinct: (index: number, instinct: string) => {
					set(produce<CharacterBurnerState>((state) => {
						state.instincts.list[index] = instinct;
					}));
				},

				addLifepath: (lifepathPath: LifepathPath) => {
					set(produce<CharacterBurnerState>((state) => {
						const lifepaths = state.lifepathPaths;
						lifepaths.push(lifepathPath);
						state.lifepathPaths = lifepaths;
					}));
					const state = get();
					state.refreshTotals(state.totals.skills.generalList, state.totals.traits.generalList);
					state.refreshSkillSpendings();
					state.refreshTraitSpendings();
					state.refreshTraitEffects();
					state.refreshAttributeSpendings();
					state.refreshQuestions();
					state.resetStockSpecifics();
				},
				removeLifepath: () => {
					set(produce<CharacterBurnerState>((state) => {
						state.lifepathPaths = state.lifepathPaths.slice(0, state.lifepathPaths.length - 1);
					}));
					const state = get();
					state.refreshTotals(state.totals.skills.generalList, state.totals.traits.generalList);
					state.refreshSkillSpendings();
					state.refreshTraitSpendings();
					state.refreshTraitEffects();
					state.refreshAttributeSpendings();
					state.refreshQuestions();
					state.resetStockSpecifics();
				},

				changeStatShade: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, statName: StatsList) => {
					e.preventDefault();
					set(produce<CharacterBurnerState>((state) => {
						const remaining = state.getStatRemainings();
						const key = (Stats.find(v => v.name === statName) as Stat).pool === "Mental" ? "mentalPool" : "physicalPool";
						const shadeSpending = state.spendings.stats[statName].eitherPool.shade + (state.spendings.stats[statName][key] as StatSpending).shade;

						if (shadeSpending === 0) {
							// if mental pool has enough points, add that
							if (remaining[key] >= 5) {
								(state.spendings.stats[statName][key] as StatSpending).shade += 5;
							}
							// otherwise add as many as possible from mental pool, then deduct either
							else if (remaining.eitherPool + remaining[key] >= 5) {
								(state.spendings.stats[statName][key] as StatSpending).shade += remaining[key];
								state.spendings.stats[statName].eitherPool.shade += (5 - remaining[key]);
							}
						}
						else if (shadeSpending === 5) {
							(state.spendings.stats[statName][key] as StatSpending).shade = 0;
							state.spendings.stats[statName].eitherPool.shade = 0;
						}
					}));
				},
				changeStatExponent: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, statName: StatsList, change: 1 | -1) => {
					e.preventDefault();
					set(produce<CharacterBurnerState>((state) => {
						const remaining = state.getStatRemainings();
						const key = (Stats.find(v => v.name === statName) as Stat).pool === "Mental" ? "mentalPool" : "physicalPool";

						const totalSpent = (state.spendings.stats[statName][key] as StatSpending).exponent + state.spendings.stats[statName].eitherPool.exponent;

						if (change === 1) {
							if (totalSpent < state.limits.stats[statName].max) {
								if (remaining[key] > 0) (state.spendings.stats[statName][key] as StatSpending).exponent += 1;
								else if (remaining.eitherPool > 0) state.spendings.stats[statName].eitherPool.exponent += 1;
							}
						}
						else if (change === -1) {
							if (totalSpent > state.limits.stats[statName].min) {
								if (state.spendings.stats[statName].eitherPool.exponent > 0) state.spendings.stats[statName].eitherPool.exponent -= 1;
								else if ((state.spendings.stats[statName][key] as StatSpending).exponent > 0) (state.spendings.stats[statName][key] as StatSpending).exponent -= 1;
							}
						}
					}));
				},

				changeAttributeShade: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, attributeName: AttributesList, change: 5 | -5) => {
					e.preventDefault();
					set(produce<CharacterBurnerState>((state) => {
						const shade = state.getAttributeShade(attributeName);
						const exponent = state.getAttributeExponent(attributeName);

						if (change === 5 && exponent > 5 && shade !== "W") {
							state.spendings.attributes[attributeName].shadeShifted += change;
						}
						else if (change === -5 && state.spendings.attributes[attributeName].shadeShifted > 0 && shade !== "B") {
							state.spendings.attributes[attributeName].shadeShifted -= change;
						}
					}));
				},

				openSkill: (skillPath: SkillPath, toOpen: boolean, isLifepath: boolean) => {
					set(produce<CharacterBurnerState>((state) => {
						const skill = GetSkillFromPath(skillPath);
						const remainings = state.getSkillRemainings();

						if (toOpen) {
							const cost = skill.magical || skill.training ? 2 : 1;

							if (isLifepath && remainings.lifepathPoints >= cost) {
								state.spendings.skills[skillPath].lifepath.open = cost;
							}
							else if (isLifepath && cost === 2 && remainings.lifepathPoints > 0 && remainings.generalPoints > 0) {
								state.spendings.skills[skillPath].lifepath.open = 1;
								state.spendings.skills[skillPath].general.open = 1;
							}
							else if (remainings.generalPoints >= cost) {
								state.spendings.skills[skillPath].general.open = cost;
							}
						}
						else {
							state.spendings.skills[skillPath].lifepath.open = 0;
							state.spendings.skills[skillPath].general.open = 0;
						}
					}));
					const state = get();
					state.refreshAttributeSpendings();
					state.refreshQuestions();
				},
				changeSkillExponent: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, skillPath: SkillPath, change: 1 | -1, isLifepath: boolean) => {
					e.preventDefault();
					set(produce<CharacterBurnerState>((state) => {
						const remainings = state.getSkillRemainings();
						if (change === 1) {
							if (isLifepath && remainings.lifepathPoints > 0) state.spendings.skills[skillPath].lifepath.advance += 1;
							else if (isLifepath && remainings.generalPoints > 0) state.spendings.skills[skillPath].general.advance += 1;
							else if (!isLifepath && remainings.generalPoints > 0) state.spendings.skills[skillPath].general.advance += 1;
						}
						else if (change === -1) {
							if (state.spendings.skills[skillPath].general.advance > 0) state.spendings.skills[skillPath].general.advance -= 1;
							else if (state.spendings.skills[skillPath].lifepath.advance > 0) state.spendings.skills[skillPath].lifepath.advance -= 1;
						}
					}));
				},
				addSkill: (skillPath: SkillPath) => {
					set(produce<CharacterBurnerState>((state) => {
						const generalSkills = state.totals.skills.generalList;
						generalSkills.push(skillPath);
						state.totals.skills.generalList = generalSkills;
					}));
					const state = get();
					state.refreshSkillSpendings();
					state.refreshAttributeSpendings();
				},
				removeSkill: (skillPath: SkillPath) => {
					set(produce<CharacterBurnerState>((state) => {
						state.totals.skills.generalList = state.totals.skills.generalList.filter(v => v !== skillPath);
					}));
					const state = get();
					state.refreshSkillSpendings();
					state.refreshAttributeSpendings();
				},

				openTrait: (traitPath: TraitPath, toOpen: boolean, isLifepath: boolean) => {
					set(produce<CharacterBurnerState>((state) => {
						const trait = GetTraitFromPath(traitPath);
						const traitRemainings = state.getTraitRemainings();

						if (toOpen) {
							if (!(traitPath in state.spendings.traits)) {
								state.spendings.traits[traitPath] = { open: 0 };
							}

							if (isLifepath && traitRemainings.traitPoints >= 1) state.spendings.traits[traitPath].open = 1;
							else if (!isLifepath && traitRemainings.traitPoints >= trait.cost) state.spendings.traits[traitPath].open = trait.cost;
						}
						else {
							state.spendings.traits[traitPath].open = 0;
						}
					}));
					const state = get();
					state.refreshAttributeSpendings();
					state.refreshQuestions();
				},
				addTrait: (traitPath: TraitPath) => {
					set(produce<CharacterBurnerState>((state) => {
						const generalTraits = state.totals.traits.generalList;
						generalTraits.push(traitPath);
						state.totals.traits.generalList = generalTraits;
					}));
					const state = get();
					state.refreshTraitSpendings();
					state.refreshAttributeSpendings();
					state.refreshQuestions();
				},
				removeTrait: (traitPath: TraitPath) => {
					set(produce<CharacterBurnerState>((state) => {
						state.totals.traits.generalList = state.totals.traits.generalList.filter(v => v !== traitPath);
					}));
					const state = get();
					state.refreshTraitSpendings();
					state.refreshAttributeSpendings();
					state.refreshQuestions();
				},

				switchAnswer: (questionKey: AttributeQuestionsKeys) => {
					set(produce<CharacterBurnerState>((state) => {
						state.questions[questionKey] = !state.questions[questionKey];
					}));
				},

				selectAppropriateWeapon: (skillPath: SkillPath) => {
					set(produce<CharacterBurnerState>((state) => {
						if (state.specialSkills.appropriateWeapons.selected.length > 1 && state.specialSkills.appropriateWeapons.selected.includes(skillPath)) {
							state.specialSkills.appropriateWeapons.selected = state.specialSkills.appropriateWeapons.selected.filter(v => v !== skillPath);
						}
						else {
							const selectedSkills = state.specialSkills.appropriateWeapons.selected;
							selectedSkills.push(skillPath);
							state.specialSkills.appropriateWeapons.selected = selectedSkills;
						}

						state.specialSkills.appropriateWeapons.mandatory =
							(state.specialSkills.appropriateWeapons.selected.includes(state.specialSkills.appropriateWeapons.mandatory))
								? state.specialSkills.appropriateWeapons.mandatory
								: state.specialSkills.appropriateWeapons.selected[0];
					}));
					const state = get();
					state.refreshTotals(state.totals.skills.generalList, state.totals.traits.generalList);
					state.refreshSkillSpendings();
					state.refreshAttributeSpendings();
				},
				selectMandatoryAppropriateWeapon: (skillPath: SkillPath) => {
					set(produce<CharacterBurnerState>((state) => {
						state.specialSkills.appropriateWeapons.mandatory =
							(state.specialSkills.appropriateWeapons.selected.includes(skillPath))
								? skillPath
								: state.specialSkills.appropriateWeapons.selected[0];
					}));
					const state = get();
					state.refreshTotals(state.totals.skills.generalList, state.totals.traits.generalList);
					state.refreshSkillSpendings();
					state.refreshAttributeSpendings();
				},
				selectJavelinOrBow: (skillPath: SkillPath) => {
					set(produce<CharacterBurnerState>((state) => {
						state.specialSkills.javelinOrBow = skillPath;
					}));
					const state = get();
					state.refreshTotals(state.totals.skills.generalList, state.totals.traits.generalList);
					state.refreshSkillSpendings();
					state.refreshAttributeSpendings();
				},
				selectAnySmith: (skillPath: SkillPath) => {
					set(produce<CharacterBurnerState>((state) => {
						if (state.specialSkills.anySmith.includes(skillPath)) {
							state.specialSkills.anySmith = state.specialSkills.anySmith.filter(v => v !== skillPath);
						}
						else {
							const selectedSkills = state.specialSkills.anySmith;
							selectedSkills.push(skillPath);
							state.specialSkills.anySmith = selectedSkills;
						}
					}));
					const state = get();
					state.refreshTotals(state.totals.skills.generalList, state.totals.traits.generalList);
					state.refreshSkillSpendings();
					state.refreshAttributeSpendings();
				},

				addResource: (resource: SpendingForResource) => {
					set(produce<CharacterBurnerState>((state) => {
						state.spendings.resources[uuidv4()] = resource;
					}));
				},
				removeResource: (guid: string) => {
					set(produce<CharacterBurnerState>((state) => {
						delete state.spendings.resources[guid];
					}));
				},
				editResourceDescription: (guid: string, description: string) => {
					set(produce<CharacterBurnerState>((state) => {
						state.spendings.resources[guid].description = description;
					}));
				},

				addBrutalLifeTrait: (traitPath: TraitPath | undefined) => {
					set(produce<CharacterBurnerState>((state) => {
						const brutalLifeTraits = state.stockSpecific.brutalLife.traits;
						brutalLifeTraits.push(traitPath);
						state.stockSpecific.brutalLife.traits = brutalLifeTraits;
					}));
				},
				setHuntingGround: (huntingGround: HuntingGroundsList) => {
					set(produce<CharacterBurnerState>((state) => {
						state.stockSpecific.territory.huntingGround = huntingGround;
					}));
				},

				modifySpecialLifepathValue: (value: { advisorToTheCourtYears: number; } | { princeOfTheBloodYears: number; } | { bondsmanOwnerLifepathPath: LifepathPath; }) => {
					set(produce<CharacterBurnerState>((state) => {
						if ("advisorToTheCourtYears" in value) state.specialLifepaths.advisorToTheCourt.years = value.advisorToTheCourtYears;
						if ("bondsmanOwnerLifepathPath" in value) state.specialLifepaths.bondsman.ownerLifepathPath = value.bondsmanOwnerLifepathPath;
						if ("princeOfTheBloodYears" in value) state.specialLifepaths.princeOfTheBlood.years = value.princeOfTheBloodYears;
					}));
				}
			}),
			{
				name: "character-burner-storage",
				version: CharacterBurnerStoreVersion
			}
		)
	)
);
