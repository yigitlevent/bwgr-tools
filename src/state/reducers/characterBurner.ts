import { Lifepath } from "../../data/stocks/_stocks";
import { CalculateLifepathTotals, LifepathTotals } from "../../utils/lifepathTotals";
import { GetLifepathFromPath } from "../../utils/pathFinder";
import { GetRemainingEitherPool, GetRemainingMentalPool, GetRemainingPhysicalPool } from "../../utils/spentPools";


interface ChangeCharacterStock { type: "CHANGE_CB_STOCK"; payload: { stock: string; }; }
interface ChangeCharacterConcept { type: "CHANGE_CB_CONCEPT"; payload: { concept: string; }; }
interface AddLifepath { type: "CHANGE_CB_ADD_LIFEPATH"; payload: { lifepathPath: string; }; }
interface RemoveLifepath { type: "CHANGE_CB_REMOVE_LIFEPATH"; }
interface ChangeShade { type: "CHANGE_CB_CHANGE_SHADE"; payload: { statName: string; change: 1 | -1; }; }
interface ChangeExponent { type: "CHANGE_CB_CHANGE_EXPONENT"; payload: { statName: string; change: 1 | -1; }; }

export type CharacterBurnerActions = ChangeCharacterStock | ChangeCharacterConcept | AddLifepath | RemoveLifepath | ChangeShade | ChangeExponent;

export interface CharacterBurnerStatsState {
	[key: string]: { shade: "B" | "G"; main: number; either: number; };
	Perception: { shade: "B" | "G"; main: number; either: number; };
	Will: { shade: "B" | "G"; main: number; either: number; };
	Power: { shade: "B" | "G"; main: number; either: number; };
	Agility: { shade: "B" | "G"; main: number; either: number; };
	Forte: { shade: "B" | "G"; main: number; either: number; };
	Speed: { shade: "B" | "G"; main: number; either: number; };
}

export interface CharacterBurnerState {
	stock: string;
	concept: string;
	lifepathPaths: string[];
	stats: CharacterBurnerStatsState;
	totals?: LifepathTotals;
}

const INITIAL: CharacterBurnerState = {
	stock: "Dwarf",
	concept: "",
	lifepathPaths: [],
	stats: {
		Perception: { shade: "B", main: 0, either: 0 },
		Will: { shade: "B", main: 0, either: 0 },
		Power: { shade: "B", main: 0, either: 0 },
		Agility: { shade: "B", main: 0, either: 0 },
		Forte: { shade: "B", main: 0, either: 0 },
		Speed: { shade: "B", main: 0, either: 0 }
	},
	totals: undefined
};

export const CharacterBurnerReducer = (state = INITIAL, action: CharacterBurnerActions): CharacterBurnerState => {
	switch (action.type) {
		case "CHANGE_CB_STOCK":
			return { ...state, stock: action.payload.stock, lifepathPaths: [], totals: undefined };

		case "CHANGE_CB_CONCEPT":
			return { ...state, concept: action.payload.concept };

		case "CHANGE_CB_ADD_LIFEPATH":
			const lp1 = [...state.lifepathPaths];
			lp1.push(action.payload.lifepathPath);
			const totals1 = lp1.length > 0 ? CalculateLifepathTotals(lp1.map((lp) => GetLifepathFromPath(lp) as Lifepath)) : undefined;
			return { ...state, lifepathPaths: lp1, totals: JSON.parse(JSON.stringify(totals1)) };

		case "CHANGE_CB_REMOVE_LIFEPATH":
			const lp2 = [...state.lifepathPaths];
			lp2.pop();
			const totals2 = lp2.length > 0 ? CalculateLifepathTotals(lp2.map((lp) => GetLifepathFromPath(lp) as Lifepath)) : undefined;
			return { ...state, lifepathPaths: lp2, totals: JSON.parse(JSON.stringify(totals2)) };

		case "CHANGE_CB_CHANGE_SHADE":
			const shadeStatName = action.payload.statName;
			const shadeStats = JSON.parse(JSON.stringify(state.stats)) as CharacterBurnerStatsState;
			if (action.payload.change === 1 && shadeStats[shadeStatName].shade === "B" && state.stats[shadeStatName].main + state.stats[shadeStatName].either > 5) {
				shadeStats[shadeStatName].shade = "G";
			}
			else if (action.payload.change === -1 && shadeStats[shadeStatName].shade === "G") {
				shadeStats[shadeStatName].shade = "B";
			}
			return { ...state, stats: { ...shadeStats } };

		case "CHANGE_CB_CHANGE_EXPONENT":
			const expStatName = action.payload.statName;
			const expStats = JSON.parse(JSON.stringify(state.stats)) as CharacterBurnerStatsState;

			if (state.totals) {
				if (action.payload.change === 1) {
					const isMental = expStatName === "Perception" || expStatName === "Will";
					if ((isMental && GetRemainingMentalPool(state.totals, expStats) > 0)
						|| (!isMental && GetRemainingPhysicalPool(state.totals, expStats) > 0)) {
						expStats[expStatName].main = expStats[expStatName].main + 1;
					}
					else if (GetRemainingEitherPool(state.totals, expStats) > 0) {
						expStats[expStatName].either = expStats[expStatName].either + 1;
					}
				}
				else if (action.payload.change === -1) {
					if (expStats[expStatName].either + expStats[expStatName].main - (state.stats[expStatName].shade === "G" ? 5 : 0) > 0) {
						if (expStats[expStatName].either > 0) {
							expStats[expStatName].either = expStats[expStatName].either - 1;
						}
						else if (expStats[expStatName].main > 0) {
							expStats[expStatName].main = expStats[expStatName].main - 1;
						}
					}
				}
			}
			return { ...state, stats: { ...expStats } };

		default:
			return { ...state };
	}
};
