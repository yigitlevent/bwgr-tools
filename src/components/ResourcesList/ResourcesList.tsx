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
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { Resource, Resources } from "../../data/resources";

import { useSearch } from "../../hooks/useSearch";

import { GenericGrid } from "../Shared/Grids";


function ResourceItem({ resource }: { resource: Resource; }) {
	return (
		<GenericGrid columns={3} center>
			<Grid item xs={2}>
				<Typography variant="h4">{resource.name} </Typography>
			</Grid>

			<Grid item xs={1}>
				<Typography sx={{ float: "right" }}>{resource.type}</Typography>
			</Grid>

			<Grid item xs={3}>
				{typeof resource.cost === "string"
					? <Typography>Cost: {resource.cost}</Typography>
					: typeof resource.cost === "number"
						? <Typography>Cost: {resource.cost}{resource.cost > 1 ? "rps" : "rp"}</Typography>
						: <Box>
							Cost: {resource.cost.map((v, i) => <Typography variant="body2" key={i}>{v[0]}: {v[1]}{v[1] > 1 ? "rps" : "rp"}</Typography>)}
						</Box>
				}
			</Grid>

			{resource.description
				? <Fragment>
					<Grid item xs={3}>
						<Divider />
					</Grid>

					<Grid item xs={3}>
						{resource.description.split("<br>").map((v, i) => <Typography key={i} variant="body2">{v}</Typography>)}
					</Grid>
				</Fragment>
				: null
			}
		</GenericGrid>
	);
}


export function ResourcesList() {
	const { datasets } = useAppSelector(state => state.dataset);
	const { stock } = useAppSelector(state => state.resourceList);
	const { rscChangeStock } = useStore().resourceList;
	const { searchString, setSearchString, searchFields, setSearchFields, setList, searchResults } = useSearch<Resource>(Resources[stock].resources);

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const arr = [...searchParams.entries()];
		const prms: { [key: string]: string; } = {};
		for (const item in arr) { prms[arr[item][0]] = arr[item][1]; }
		prms["stock"] = stock;
		setSearchParams(prms);
	}, [searchParams, setSearchParams, stock]);

	useEffect(() => {
		setList(Resources[stock].resources);
	}, [setList, stock]);

	return (
		<Fragment>
			<Typography variant="h3">Resources List</Typography>

			<GenericGrid columns={4} center>
				<Grid item xs={4} sm={4} md={2}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Resource Stock</InputLabel>
						<Select label="Resource Stock" value={stock} onChange={rscChangeStock} placeholder="Select a stock">
							{Object.values(Resources).filter(v => datasets.includes(v.allowed)).map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
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

			<GenericGrid columns={1}>

				{searchResults.length > 0
					? searchResults.map((resource, i) =>
						<Grid item xs={1} key={i}>
							<Paper elevation={2} sx={{ padding: "0 12px 16px" }}>
								<ResourceItem resource={resource} />
							</Paper>
						</Grid>
					)
					: <Alert severity="warning" sx={{ width: "100%", maxWidth: "600px", margin: "12px auto" }}>Could not find any matches. Try adding more fields or changing search text.</Alert>
				}
			</GenericGrid>
		</Fragment>
	);
}
