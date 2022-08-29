import { Fragment, useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { PracticeTable } from "../../data/tables";
import { PracticePlannerCell } from "./PracticePlannerCell";


export function PracticePlanner(): JSX.Element {
	const { days, hours, cells } = useAppSelector(state => state.practicePlanner);
	const { prpChangeDays, prpChangeHours, prpAddCells, prpAddPractice } = useStore().practicePlanner;

	const [notification, setNotification] = useState<null | JSX.Element>(null);

	return (
		<Fragment>
			{notification}

			<Typography variant="h3">Practice Planner</Typography>

			<Grid container spacing={1} columns={2} sx={{ marginTop: 1 }} justifyContent="center" alignItems="center">
				<Grid item>
					<TextField
						label="Number of Days"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={days}
						onChange={prpChangeDays}
						variant="standard"
					/>
				</Grid>

				<Grid item>
					<TextField
						label="Number of Hours per Day"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={hours}
						onChange={prpChangeHours}
						variant="standard"
					/>
				</Grid>

				<Grid item>
					<Button variant="outlined" onClick={() => prpAddCells(days, hours)}>Add Days</Button>
				</Grid>
			</Grid>

			<form onSubmit={(e) => prpAddPractice(e, cells, setNotification)}>
				<Grid container spacing={1} sx={{ width: "100%", margin: "10px 0 0" }} columns={5} justifyContent="center" alignItems="center">
					<Grid item xs={4} sm={2} md={1}>
						<FormControl fullWidth variant="standard">
							<InputLabel>Day</InputLabel>
							<Select label="Day" defaultValue={0} disabled={cells.length < 1}>
								{Object.keys(cells).map(v => <MenuItem key={parseInt(v)} value={parseInt(v)}>{parseInt(v) + 1}</MenuItem>)}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={4} sm={2} md={1}>
						<FormControl fullWidth variant="standard">
							<InputLabel>Skill Type</InputLabel>
							<Select label="Skill Type" defaultValue={"Academic"} disabled={cells.length < 1}>
								{Object.keys(PracticeTable).map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={4} sm={2} md={1}>
						<FormControl fullWidth variant="standard">
							<InputLabel>Test Type</InputLabel>
							<Select defaultValue={"Difficult"} disabled={cells.length < 1}>
								<MenuItem value={"Routine"}>Routine</MenuItem>
								<MenuItem value={"Difficult"}>Difficult</MenuItem>
								<MenuItem value={"Challenging"}>Challenging</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={4} sm={2} md={1}>
						<TextField
							id="component-simple"
							label={"Skill Name"}
							variant="standard"
							defaultValue={""}
							disabled={cells.length < 1}
						/>
					</Grid>

					<Grid item xs={4} sm={2} md={1}>
						<Button type="submit" variant="outlined" size="medium" disabled={cells.length < 1}>Add Practice</Button>
					</Grid>
				</Grid>
			</form>

			{cells.length > 0 ? <Divider sx={{ margin: "10px 0 0 " }}>Timetable</Divider> : null}

			<Grid container columns={4} spacing={0}>
				{cells.map((cell, cellIndex) => {
					return (
						<Grid item key={cellIndex} xs={4} sm={4} md={2} lg={2}>
							<PracticePlannerCell cell={cell} cellIndex={cellIndex} setNotification={setNotification} />
						</Grid>
					);
				})}
			</Grid>
		</Fragment>
	);
}
