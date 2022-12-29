import { Fragment, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Alert from "@mui/material/Alert";

import { useRulesetStore } from "../../hooks/stores/useRulesetStore";
import { Trait, TraitCategories } from "../../data/traits/_traits";
import { useSearch } from "../../hooks/useSearch";

import { PopoverLink } from "../Shared/PopoverLink";
import { GenericGrid } from "../Shared/Grids";


export function TraitLists() {
	const { checkRulesets } = useRulesetStore();
	const { traitCategory, changeTraitCategory } = useRulesetStore();
	const { searchString, setSearchString, searchFields, setSearchFields, setList, searchResults } = useSearch<Trait>(TraitCategories[traitCategory].traits);

	const [searchParams, setSearchParams] = useSearchParams();

	const allowedCategories = Object.values(TraitCategories).filter(v => checkRulesets(v.allowed));

	useEffect(() => {
		if (!(allowedCategories.map(v => v.name).includes(traitCategory))) {
			changeTraitCategory(allowedCategories[0].name as TraitCategoryPath);
		}
	}, [allowedCategories, changeTraitCategory, traitCategory]);

	useEffect(() => {
		const arr = [...searchParams.entries()];
		const prms: { [key: string]: string; } = {};
		for (const item in arr) { prms[arr[item][0]] = arr[item][1]; }
		prms["category"] = traitCategory;
		setSearchParams(prms);
	}, [traitCategory, searchParams, setSearchParams]);

	useEffect(() => {
		const arr = [...searchParams.entries()];
		const prms: { [key: string]: string; } = {};
		for (const item in arr) { prms[arr[item][0]] = arr[item][1]; }
		if ("category" in prms) { changeTraitCategory(prms["category"] as TraitCategoryPath); }
	}, [changeTraitCategory, searchParams]);

	useEffect(() => {
		setList(TraitCategories[traitCategory].traits);
	}, [traitCategory, setList]);

	return (
		<Fragment>
			<Typography variant="h3">Trait Explorer</Typography>

			<GenericGrid columns={4} center>
				<Grid item xs={4} sm={4} md={2}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Trait Category</InputLabel>
						<Select
							label="Trait Category"
							value={allowedCategories.map(v => v.name).includes(traitCategory) ? traitCategory : allowedCategories[0].name}
							onChange={v => changeTraitCategory(v.target.value as TraitCategoryPath)}
						>
							{allowedCategories.map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={4} sm={2} md={1}>
					<TextField
						label={"Search"}
						variant="standard"
						value={searchString}
						onChange={(e) => setSearchString(e.target.value)}
						fullWidth
					/>
				</Grid>
				<Grid item xs={4} sm={2} md={1}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Search Fields</InputLabel>
						<Select
							value={searchFields}
							onChange={(e) => setSearchFields(typeof e.target.value === "string" ? e.target.value.split(",") : e.target.value)}
							renderValue={(selected) => selected.join(", ")}
							multiple
						>
							{["Name", "Type", "Description"].map((name) => (
								<MenuItem key={name} value={name}>
									<Checkbox checked={searchFields.indexOf(name) > -1} />
									<ListItemText primary={name} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
			</GenericGrid>

			<GenericGrid spacing={[2, 2]}>
				{searchResults.length > 0
					? searchResults.sort((a, b) => a.name.localeCompare(b.name)).map((trait, i) =>
						<Grid item key={i}>
							<Paper elevation={2} sx={{ cursor: "pointer", padding: "2px 6px" }}>
								<PopoverLink data={trait} />
							</Paper>
						</Grid>
					)
					: <Alert severity="warning" sx={{ width: "100%", maxWidth: "600px", margin: "12px auto" }}>Could not find any matches. Try adding more fields or changing search text.</Alert>
				}
			</GenericGrid>
		</Fragment>
	);
}
