import { ChangeEvent } from "react";

import { SelectChangeEvent } from "@mui/material/Select";

import { useAppDispatch } from "./store";
import { Clamp } from "../utils/misc";

export function useStore() {
	const dispatch = useAppDispatch();

	// LIFEPATH RANDOMIZER
	const changeStock = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_LP_RANDOMIZER_STOCK", payload: { stock: event.target.value } });
	};

	const changeMaxLeads = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_LP_RANDOMIZER_MAX_LEADS", payload: { maxLeads: value } });
	};

	const changeMaxLPs = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_LP_RANDOMIZER_MAX_LIFEPATHS", payload: { maxLifepaths: value } });
	};

	const changeMinLPs = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_LP_RANDOMIZER_MIN_LIFEPATHS", payload: { minLifepaths: value } });
	};

	const toggleNoDuplicates = () => {
		dispatch({ type: "TOGGLE_LP_RANDOMIZER_NO_DUPLICATES" });
	};




	return {

		changeStock, changeMaxLeads, changeMaxLPs, changeMinLPs, toggleNoDuplicates
	};
}
