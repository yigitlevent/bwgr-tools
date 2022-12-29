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

import { useRulesetStore } from "../../hooks/stores/useRulesetStore";
import { Lifepath, Stocks } from "../../data/stocks/_stocks";
import { useSearch } from "../../hooks/useSearch";

import { LifepathBox } from "./LifepathBox";
import { GenericGrid } from "../Shared/Grids";


export function LifepathLists() {
	const { rulesets } = useRulesetStore();
	const { lifepathStock, lifepathSetting, allowedStocks, allowedSettings, changeLifepathStock, changeLifepathSetting } = useRulesetStore();
	const { searchString, setSearchString, searchFields, setSearchFields, setList, searchResults } = useSearch<Lifepath>(Stocks[lifepathStock].settings[lifepathSetting].lifepaths);

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const arr = [...searchParams.entries()];
		const prms: { [key: string]: string; } = {};
		for (const item in arr) { prms[arr[item][0]] = arr[item][1]; }
		prms["stock"] = lifepathStock;
		prms["setting"] = lifepathSetting;
		setSearchParams(prms);
	}, [lifepathSetting, lifepathStock, searchParams, setSearchParams]);

	useEffect(() => {
		const arr = [...searchParams.entries()];
		const prms: { [key: string]: string; } = {};
		for (const item in arr) { prms[arr[item][0]] = arr[item][1]; }
		if ("stock" in prms) { changeLifepathStock(prms["stock"] as StocksList); }
		if ("setting" in prms) { changeLifepathSetting(prms["setting"]); }
	}, [changeLifepathSetting, changeLifepathStock, searchParams]);

	useEffect(() => {
		setList(Stocks[lifepathStock].settings[lifepathSetting].lifepaths);
	}, [rulesets, lifepathStock, lifepathSetting, setList]);

	return (
		<Fragment>
			<Typography variant="h3">Lifepath Explorer</Typography>

			<GenericGrid columns={4} center>
				<Grid item xs={6} sm={3} md={1}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Stock</InputLabel>
						<Select
							label="Stock"
							value={lifepathStock}
							onChange={v => changeLifepathStock(v.target.value as StocksList)}
						>
							{allowedStocks.map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={6} sm={3} md={1}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Setting</InputLabel>
						<Select
							label="Setting"
							value={lifepathSetting}
							onChange={v => changeLifepathSetting(v.target.value)}
						>
							{allowedSettings.map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
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

			<GenericGrid columns={1} spacing={[2, 2]} center>
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
