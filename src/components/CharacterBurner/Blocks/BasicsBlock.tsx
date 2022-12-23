import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";
import { Stocks } from "../../../data/stocks/_stocks";

import { GenericGrid } from "../../Shared/Grids";


export function BasicsBlock() {
	const { stock, concept, totals } = useAppSelector(state => state.characterBurner);
	const { cbChangeStock, cbChangeConcept } = useStore().characterBurner;

	return (
		<GenericGrid columns={4} center>
			<Grid item xs={2} sm={1} md={1}>
				<FormControl fullWidth variant="standard">
					<InputLabel>Stock</InputLabel>
					<Select value={stock} onChange={(e) => cbChangeStock(e.target.value as StocksList)}>
						{Object.keys(Stocks).map((stock, i) => <MenuItem key={i} value={stock}>{stock}</MenuItem>)}
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={2} sm={1} md={1}>
				<TextField
					label="Age"
					value={totals.years.points > 0 ? `${totals.years.points}${totals.years.extensions.length > 0 ? `, plus ${totals.years.extensions.join(" ")}` : ""}` : ""}
					fullWidth
					variant="standard"
					disabled
				/>
			</Grid>

			<Grid item xs={4} sm={2} md={2}>
				<TextField
					label="Concept"
					value={concept}
					onChange={(e) => cbChangeConcept(e.target.value)}
					fullWidth
					variant="standard"
				/>
			</Grid>
		</GenericGrid>
	);
}
