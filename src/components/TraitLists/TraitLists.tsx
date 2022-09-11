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

import { useAppSelector } from "../../state/store";
import { useStore } from "../../hooks/useStore";
import { Trait, TraitCategories } from "../../data/traits";

import { useSearch } from "../../hooks/useSearch";

import { PopoverLink } from "../Shared/PopoverLink";
import { GenericGrid } from "../Shared/Grids";


export function TraitLists() {
	const { datasets } = useAppSelector(state => state.dataset);
	const { category } = useAppSelector(state => state.traitList);
	const { trtChangeCategory } = useStore().traitList;
	const { searchString, setSearchString, searchFields, setSearchFields, setList, searchResults } = useSearch<Trait>(TraitCategories[category].traits);

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const arr = [...searchParams.entries()];
		const prms: { [key: string]: string; } = {};
		for (const item in arr) { prms[arr[item][0]] = arr[item][1]; }
		prms["category"] = category;
		setSearchParams(prms);
	}, [category, searchParams, setSearchParams]);

	useEffect(() => {
		setList(TraitCategories[category].traits);
	}, [category, setList]);

	return (
		<Fragment>
			<Typography variant="h3">Trait Explorer</Typography>

			<GenericGrid columns={4} center>
				<Grid item xs={4} sm={4} md={2}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Trait Category</InputLabel>
						<Select label="Trait Category" value={category} onChange={trtChangeCategory} placeholder="Select a category">
							{Object.values(TraitCategories).filter(v => datasets.includes(v.allowed)).map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
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

			<GenericGrid spacing={2}>
				{searchResults.length > 0
					? searchResults.map((trait, i) =>
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
