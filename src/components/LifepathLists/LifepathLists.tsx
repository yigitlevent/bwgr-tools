import { Fragment, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Alert from "@mui/material/Alert";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { Lifepath, Stocks } from "../../data/stocks";

import { useSearch } from "../../hooks/useSearch";

import { LifepathBox } from "./LifepathBox";
import { GenericGrid } from "../Shared/Grids";


export function LifepathLists() {
	const { datasets } = useAppSelector(state => state.dataset);
	const { stock, setting } = useAppSelector(state => state.lifepathList);
	const { lplChangeStock, lplChangeSetting } = useStore().lifepathList;
	const { searchString, setSearchString, searchFields, setSearchFields, setList, searchResults } = useSearch<Lifepath>(Stocks[stock].settings[setting].lifepaths);

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const arr = [...searchParams.entries()];
		const prms: { [key: string]: string; } = {};
		for (const item in arr) { prms[arr[item][0]] = arr[item][1]; }
		prms["stock"] = stock;
		prms["setting"] = setting;
		setSearchParams(prms);
	}, [searchParams, setSearchParams, setting, stock]);

	useEffect(() => {
		setList(Stocks[stock].settings[setting].lifepaths);
	}, [stock, setting, setList]);

	return (
		<Fragment>
			<Typography variant="h3">Lifepath Explorer</Typography>

			<GenericGrid columns={4} center>
				<Grid item xs={6} sm={3} md={1}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Stock</InputLabel>
						<Select label="Stock" value={stock} onChange={lplChangeStock} placeholder="Select a stock">
							{Object.values(Stocks).filter(v => datasets.includes(v.allowed)).map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={6} sm={3} md={1}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Setting</InputLabel>
						<Select label="Setting" value={setting} onChange={lplChangeSetting} placeholder="Select a setting">
							{Object.values(Stocks[stock].settings).filter(v => datasets.includes(v.allowed)).map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={6} sm={3} md={1}>
					<TextField
						label={"Search"}
						variant="standard"
						value={searchString}
						onChange={(e) => setSearchString(e.target.value)}
						fullWidth
					/>
				</Grid>
				<Grid item xs={6} sm={3} md={1}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Search Fields</InputLabel>
						<Select
							value={searchFields}
							onChange={(e) => setSearchFields(typeof e.target.value === "string" ? e.target.value.split(",") : e.target.value)}
							renderValue={(selected) => selected.join(", ")}
							multiple
						>
							{["Name", "Leads", "Skills", "Traits"].map((name) => (
								<MenuItem key={name} value={name}>
									<Checkbox checked={searchFields.indexOf(name) > -1} />
									<ListItemText primary={name} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
			</GenericGrid>

			<GenericGrid columns={1} spacing={2} center>
				{searchResults.length > 0
					? searchResults.map((v, i) =>
						<Grid item xs={1} key={i}>
							<LifepathBox lifepath={v} />
						</Grid>
					)
					: <Alert severity="warning" sx={{ width: "100%", maxWidth: "600px", margin: "12px auto" }}>Could not find any matches. Try adding more fields or changing search text.</Alert>
				}
			</GenericGrid>
		</Fragment>
	);
}
