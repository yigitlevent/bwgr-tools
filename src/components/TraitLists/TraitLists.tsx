import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { TraitCategories } from "../../data/traits";

import { PopoverLink } from "../Shared/PopoverLink";
import { GenericGrid } from "../Shared/Grids";


export function TraitLists() {
	const { category } = useAppSelector(state => state.traitList);
	const { trtChangeCategory } = useStore().traitList;

	return (
		<Fragment>
			<Typography variant="h3">Trait Explorer</Typography>

			<Grid container spacing={1} columns={1} sx={{ marginTop: 1 }} justifyContent="center" alignItems="center">
				<Grid item xs={2} md={1}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Trait Category</InputLabel>
						<Select label="Trait Category" value={category} onChange={trtChangeCategory} placeholder="Select a category">
							{Object.values(TraitCategories).map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			<GenericGrid spacing={2}>
				{category !== ""
					? TraitCategories[category].traits.map((trait, i) =>
						<Grid item key={i}>
							<Paper elevation={2} sx={{ cursor: "pointer", padding: "2px 6px" }}>
								<PopoverLink data={trait} />
							</Paper>
						</Grid>
					)
					: null
				}
			</GenericGrid>
		</Fragment>
	);
}
