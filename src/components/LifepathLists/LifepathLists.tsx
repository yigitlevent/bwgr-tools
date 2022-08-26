import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useAppDispatch, useAppSelector } from "../../state/store";
import { Stocks } from "../../data/stocks";
import { LifepathBox } from "./LifepathBox";


export function Lifepaths() {
	const { stock, setting } = useAppSelector(state => state.lifepathList);
	const dispatch = useAppDispatch();

	const changeStock = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_LIFEPATH_LIST_STOCK", payload: { stock: event.target.value } });
	};

	const changeSetting = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_LIFEPATH_LIST_SETTING", payload: { setting: event.target.value } });
	};

	return (
		<Fragment>
			<Typography variant="h3">Lifepath Explorer</Typography>

			<Grid container spacing={1} sx={{ width: "100%" }} columns={2}>
				<Grid item xs={2} md={1}>
					<FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "95%" }}>
						<InputLabel id="lpls-label">Stock</InputLabel>
						<Select label="Stock" labelId="lpls-label" value={stock} onChange={changeStock} placeholder="Select a stock">
							{Object.values(Stocks).map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={2} md={1}>
					<FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "95%" }}>
						<InputLabel id="lplst-label">Setting</InputLabel>
						<Select label="Setting" labelId="lplst-label" value={setting} onChange={changeSetting} placeholder="Select a setting">
							{stock !== ""
								? Object.values(Stocks[stock].settings).map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)
								: <MenuItem value={""}><em>Select stock first</em></MenuItem>
							}
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			{stock !== "" && setting !== ""
				? Stocks[stock].settings[setting].lifepaths.map((v, i) => <LifepathBox key={i} lifepath={v} />)
				: null
			}
		</Fragment>
	);
}
