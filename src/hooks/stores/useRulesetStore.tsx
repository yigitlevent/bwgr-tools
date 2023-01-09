import produce from "immer";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { RulesetStoreVersion } from "./_persistOptions";

import { Setting, Stock, Stocks } from "../../data/stocks/_stocks";
import { SkillCategories, SkillCategory } from "../../data/skills/_skills";
import { TraitCategories, TraitCategory } from "../../data/traits/_traits";
import { Resources, ResourceStock } from "../../data/resources/_resources";


interface RulesetState {
	rulesets: RulesetId[];

	lifepathStock: StocksList;
	lifepathSetting: string;
	allowedStocks: Stock[];
	allowedSettings: Setting[];

	skillCategory: SkillCategoryPath;
	allowedSkillCategories: SkillCategory[];

	traitCategory: TraitCategoryPath;
	allowedTraitCategories: TraitCategory[];

	resourceStock: StocksListExtended;
	allowedResourceStocks: ResourceStock[];

	toggleDataset: (dataset: RulesetId) => void;
	checkRulesets: (allowed: RulesetId[]) => boolean;
	checkExactRulesets: (allowed: RulesetId[]) => boolean;

	refreshAllowedStocksList: (stock: StocksList) => void;
	refreshAllowedSettingsList: (setting: string) => void;
	refreshAllowedSkillCategoriesList: (category: SkillCategoryPath) => void;
	refreshAllowedTraitCategoriesList: (category: TraitCategoryPath) => void;
	refreshAllowedResourceStocksList: (stock: StocksListExtended) => void;

	changeLifepathStock: (stock: StocksList) => void;
	changeLifepathSetting: (setting: string) => void;
	changeSkillCategory: (category: SkillCategoryPath) => void;
	changeTraitCategory: (category: TraitCategoryPath) => void;
	changeResourceStock: (stock: StocksListExtended) => void;
}

function CheckRulesets(rulesets: RulesetId[], allowed: RulesetId[]) {
	return rulesets.some(ruleset => allowed.includes(ruleset));
}

export const useRulesetStore = create<RulesetState>()(
	devtools(
		persist(
			(set, get) => ({
				rulesets: ["bwgr"],

				lifepathStock: Object.values(Stocks).filter(v => CheckRulesets(["bwgr", "bwc"], v.allowed))[0].name,
				lifepathSetting: Object.values(Stocks["Dwarf"].settings).filter(v => CheckRulesets(["bwgr", "bwc"], v.allowed))[0].name,
				allowedStocks: Object.values(Stocks).filter(v => CheckRulesets(["bwgr", "bwc"], v.allowed)),
				allowedSettings: Object.values(Stocks["Dwarf"].settings).filter(v => CheckRulesets(["bwgr", "bwc"], v.allowed)),

				skillCategory: Object.values(SkillCategories).filter(v => CheckRulesets(["bwgr", "bwc"], v.allowed))[0].name,
				allowedSkillCategories: Object.values(SkillCategories).filter(v => CheckRulesets(["bwgr", "bwc"], v.allowed)),

				traitCategory: Object.values(TraitCategories).filter(v => CheckRulesets(["bwgr", "bwc"], v.allowed))[0].name,
				allowedTraitCategories: Object.values(TraitCategories).filter(v => CheckRulesets(["bwgr", "bwc"], v.allowed)),

				resourceStock: Object.values(Resources).filter(v => CheckRulesets(["bwgr", "bwc"], v.allowed))[0].name,
				allowedResourceStocks: Object.values(Resources).filter(v => CheckRulesets(["bwgr", "bwc"], v.allowed)),

				toggleDataset: (ruleset: RulesetId) => {
					set(produce<RulesetState>((state) => {
						if (state.rulesets.includes(ruleset)) {
							state.rulesets = state.rulesets.filter(v => v != ruleset);
						}
						else {
							const newRulesets = state.rulesets;
							newRulesets.push(ruleset);
							state.rulesets = newRulesets;
						}
					}));
					const state = get();
					state.refreshAllowedStocksList(state.lifepathStock);
					state.refreshAllowedSettingsList(state.lifepathSetting);
					state.refreshAllowedSkillCategoriesList(state.skillCategory);
					state.refreshAllowedTraitCategoriesList(state.traitCategory);
					state.refreshAllowedResourceStocksList(state.resourceStock);
				},
				checkRulesets: (allowed: RulesetId[]) => {
					const state = get();
					return CheckRulesets(state.rulesets, allowed);
				},
				checkExactRulesets: (allowed: RulesetId[]) => {
					const state = get();
					return allowed.every(ruleset => state.rulesets.includes(ruleset));
				},

				refreshAllowedStocksList: (stock: StocksList) => {
					set(produce<RulesetState>((state) => {
						state.allowedStocks = Object.values(Stocks).filter(v => state.checkRulesets(v.allowed));
						const isAllowed = state.allowedStocks.some(v => v.name === stock);
						if (!isAllowed) state.lifepathStock = state.allowedStocks[0].name;
					}));
				},
				refreshAllowedSettingsList: (setting: string) => {
					set(produce<RulesetState>((state) => {
						state.allowedSettings = Object.values(Stocks[state.lifepathStock].settings).filter(v => state.checkRulesets(v.allowed));
						const isAllowed = state.allowedSettings.some(v => v.name === setting);
						if (!isAllowed) state.lifepathSetting = state.allowedSettings[0].name;
					}));
				},
				refreshAllowedSkillCategoriesList: (category: SkillCategoryPath) => {
					set(produce<RulesetState>((state) => {
						state.allowedSkillCategories = Object.values(SkillCategories).filter(v => state.checkRulesets(v.allowed));
						const isAllowed = state.allowedSkillCategories.some(v => v.name === category);
						if (!isAllowed) state.skillCategory = state.allowedSkillCategories[0].name;
					}));
				},
				refreshAllowedTraitCategoriesList: (category: TraitCategoryPath) => {
					set(produce<RulesetState>((state) => {
						state.allowedTraitCategories = Object.values(TraitCategories).filter(v => state.checkRulesets(v.allowed));
						const isAllowed = state.allowedTraitCategories.some(v => v.name === category);
						if (!isAllowed) state.traitCategory = state.allowedTraitCategories[0].name;
					}));
				},
				refreshAllowedResourceStocksList: (stock: StocksListExtended) => {
					set(produce<RulesetState>((state) => {
						state.allowedResourceStocks = Object.values(Resources).filter(v => state.checkRulesets(v.allowed));
						const isAllowed = state.allowedResourceStocks.some(v => v.name === stock);
						if (!isAllowed) state.resourceStock = state.allowedResourceStocks[0].name;
					}));
				},

				changeLifepathStock: (stock: StocksList) => {
					set(produce<RulesetState>((state) => {
						state.lifepathStock = stock;
						state.lifepathSetting = Object.keys(Stocks[stock].settings)[0];
					}));
					const state = get();
					state.refreshAllowedSettingsList(state.lifepathStock);
				},
				changeLifepathSetting: (setting: string) => {
					set(produce<RulesetState>((state) => {
						state.lifepathSetting = setting;
					}));
				},
				changeSkillCategory: (category: SkillCategoryPath) => {
					set(produce<RulesetState>((state) => {
						state.skillCategory = category;
					}));
				},
				changeTraitCategory: (category: TraitCategoryPath) => {
					set(produce<RulesetState>((state) => {
						state.traitCategory = category;
					}));
				},
				changeResourceStock: (stock: StocksListExtended) => {
					set(produce<RulesetState>((state) => {
						state.resourceStock = stock;
					}));
				}
			}),
			{
				name: "ruleset-storage",
				version: RulesetStoreVersion
			}
		)
	)
);
