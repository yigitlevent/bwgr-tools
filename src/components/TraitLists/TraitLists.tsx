import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useAppDispatch, useAppSelector } from "../../state/store";
import { TraitCategories } from "../../data/traits";

import { PopoverLink } from "../Shared/PopoverLink";


export function TraitLists() {
	const { category } = useAppSelector(state => state.traitList);
	const dispatch = useAppDispatch();

	const changeCategory = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_TRAIT_LIST_CATEGORY", payload: { category: event.target.value } });
	};

	return (
		<Fragment>
			<Typography variant="h3">Trait Explorer</Typography>

			<Grid container spacing={1} sx={{ width: "100%" }} columns={2}>
				<Grid item xs={2} md={1}>
					<FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "95%" }}>
						<InputLabel id="tls-label">Trait Category</InputLabel>
						<Select label="Trait Category" labelId="tls-label" value={category} onChange={changeCategory} placeholder="Select a category">
							{Object.values(TraitCategories).map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			{category !== ""
				? <Grid container spacing={2} sx={{ marginTop: 1 }}>
					{TraitCategories[category].traits.map((trait, i) => {
						return (
							<Grid item key={i}>
								<Paper elevation={2} sx={{ cursor: "pointer", padding: "2px 6px" }}>
									<PopoverLink data={trait} />
								</Paper>
							</Grid>
						);
					})}
				</Grid>
				: null
			}
		</Fragment>
	);
}
