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
import { SkillCategories } from "../../data/skills";

import { PopoverLink } from "../Shared/PopoverLink";


export function SkillLists() {
	const { category } = useAppSelector(state => state.skillList);
	const { sklChangeCategory } = useStore().skillList;

	return (
		<Fragment>
			<Typography variant="h3">Skill Explorer</Typography>

			<Grid container spacing={1} columns={1} sx={{ marginTop: 1 }} justifyContent="center" alignItems="center">
				<Grid item xs={2} md={1}>
					<FormControl variant="standard" fullWidth>
						<InputLabel>Skill Category</InputLabel>
						<Select label="Skill Category" value={category} onChange={sklChangeCategory} placeholder="Select a category">
							{Object.values(SkillCategories).map((v, i) => <MenuItem key={i} value={v.name}>{v.name}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			{category !== ""
				? <Grid container spacing={2} sx={{ marginTop: 1 }}>
					{SkillCategories[category].skills.map((skill, i) => {
						return (
							<Grid item key={i}>
								<Paper elevation={2} sx={{ cursor: "pointer", padding: "2px 6px" }}>
									<PopoverLink data={skill} />
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
