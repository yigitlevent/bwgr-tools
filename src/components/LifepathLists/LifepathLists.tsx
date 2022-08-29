import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { Stocks } from "../../data/stocks";

import { LifepathBox } from "./LifepathBox";


export function Lifepaths() {
	const { stock, setting } = useAppSelector(state => state.lifepathList);
	const { lplChangeStock, lplChangeSetting } = useStore().lifepathList;

	return (
		<Fragment>
			<Typography variant="h3">Lifepath Explorer</Typography>

			<Grid container spacing={1} columns={2} sx={{ marginTop: 1 }} justifyContent="center" alignItems="center">
				<Grid item xs={2} md={1}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Stock</InputLabel>
						<Select label="Stock" value={stock} onChange={lplChangeStock} placeholder="Select a stock">
							{Object.values(Stocks).map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={2} md={1}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Setting</InputLabel>
						<Select label="Setting" value={setting} onChange={lplChangeSetting} placeholder="Select a setting">
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
