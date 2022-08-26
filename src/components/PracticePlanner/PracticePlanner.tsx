import { ChangeEvent, FormEvent, Fragment, useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StopIcon from "@mui/icons-material/Stop";

import { useAppDispatch, useAppSelector } from "../../state/store";
import { Practice } from "../../state/reducers/practicePlanner";
import { PracticeTable } from "../../data/tables";
import { clamp } from "../../utils/misc";
import Alert from "@mui/material/Alert";


export function PracticePlanner(): JSX.Element {
	const { days, hours, cells } = useAppSelector(state => state.practicePlanner);
	const dispatch = useAppDispatch();

	const [notification, setNotification] = useState<null | JSX.Element>(null);

	const changeDays = (event: ChangeEvent<HTMLInputElement>) => {
		const value = clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 30);
		dispatch({ type: "CHANGE_PRACTICE_PLANNER_DAYS", payload: { days: value } });
	};
	const changeHours = (event: ChangeEvent<HTMLInputElement>) => {
		const value = clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 1, 24);
		dispatch({ type: "CHANGE_PRACTICE_PLANNER_HOURS", payload: { hours: value } });
	};

	const addCells = (days: number, hours: number) => {
		dispatch({ type: "ADD_PRACTICE_PLANNER_CELLS", payload: { days, hours } });
	};
	const deleteCell = (cellIndex: number) => {
		dispatch({ type: "DELETE_PRACTICE_PLANNER_CELL", payload: { cellIndex } });
	};
	const changeCellHour = (cellIndex: number, change: 1 | -1) => {
		if (cells[cellIndex].remaining === 0 && change === -1) {
			setNotification(
				<Snackbar open={true} autoHideDuration={5000} onClose={() => setNotification(null)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
					<Alert severity="error" sx={{ width: "100%" }}>
						Cannot reduce hours from day. It is used by practices.
					</Alert>
				</Snackbar>
			);
		}
		else {
			dispatch({ type: "CHANGE_PRACTICE_PLANNER_CELL_HOURS", payload: { cellIndex, change } });
		}
	};

	const addPractice = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const els = Object.values((e.target as HTMLFormElement).elements) as HTMLInputElement[];
		const [cIndex, sType, tType, sName] = els.filter(v => v.tagName === "INPUT" && v.type === "text").map((v) => v.value);
		const hours = PracticeTable[sType][tType];
		const cellIndex = parseInt(cIndex);

		if (sName === "") {
			setNotification(
				<Snackbar open={true} autoHideDuration={5000} onClose={() => setNotification(null)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
					<Alert severity="error" sx={{ width: "100%" }}>
						Please enter a Skill name.
					</Alert>
				</Snackbar>
			);
		}
		else if (cells[cellIndex].remaining - hours < 0) {
			setNotification(
				<Snackbar open={true} autoHideDuration={5000} onClose={() => setNotification(null)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
					<Alert severity="error" sx={{ width: "100%" }}>
						Cannot fit practice into the day. This practice takes {hours} hours.
					</Alert>
				</Snackbar>
			);
		}
		else {
			const practice: Practice = { skillName: sName, skillType: sType, testType: tType, hours: PracticeTable[sType][tType] };
			dispatch({ type: "ADD_PRACTICE_PLANNER_PRACTICE", payload: { cellIndex, practice } });
		}
	};
	const deletePractice = (cellIndex: number, practiceIndex: number) => {
		dispatch({ type: "DELETE_PRACTICE_PLANNER_PRACTICE", payload: { cellIndex, practiceIndex } });
	};

	return (
		<Fragment>
			{notification}

			<Typography variant="h3">Practice Planner</Typography>

			<Grid container spacing={1} sx={{ width: "100%", margin: "10px 0 0" }} columns={2} justifyContent="center" alignItems="center">
				<Grid item>
					<TextField
						label="Number of Days"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={days}
						onChange={changeDays}
						size="small"
					/>
				</Grid>

				<Grid item>
					<TextField
						label="Number of Hours per Day"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={hours}
						onChange={changeHours}
						size="small"
					/>
				</Grid>

				<Grid item>
					<Button variant="outlined" onClick={() => addCells(days, hours)}>Add Days</Button>
				</Grid>
			</Grid>

			<form onSubmit={addPractice}>
				<Grid container spacing={1} sx={{ width: "100%", margin: "10px 0 0" }} columns={5} justifyContent="center" alignItems="center">
					<Grid item xs={4} sm={2} md={1}>
						<FormControl fullWidth size="small">
							<InputLabel id="pp-c-l">Day</InputLabel>
							<Select labelId="pp-c-l" id="pp-c" label="Day" defaultValue={0} disabled={cells.length < 1}>
								{Object.keys(cells).map(v => { return <MenuItem key={parseInt(v)} value={parseInt(v)}>{parseInt(v) + 1}</MenuItem>; })}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={4} sm={2} md={1}>
						<FormControl fullWidth size="small">
							<InputLabel id="pp-a-l">Skill Type</InputLabel>
							<Select labelId="pp-a-l" id="pp-a" label="Skill Type" defaultValue={"Academic"} disabled={cells.length < 1}>
								{Object.keys(PracticeTable).map(v => { return <MenuItem key={v} value={v}>{v}</MenuItem>; })}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={4} sm={2} md={1}>
						<FormControl fullWidth size="small">
							<InputLabel id="pp-b-l">Test Type</InputLabel>
							<Select labelId="pp-b-l" id="pp-b" label="Test Type" defaultValue={"Difficult"} disabled={cells.length < 1}>
								<MenuItem value={"Routine"}>Routine</MenuItem>
								<MenuItem value={"Difficult"}>Difficult</MenuItem>
								<MenuItem value={"Challenging"}>Challenging</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={4} sm={2} md={1}>
						<TextField
							label="Skill Name"
							fullWidth
							size="small"
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
				{cells.map((cell, i) => {
					return (
						<Grid item key={i} xs={4} sm={4} md={2} lg={2}>
							<Paper elevation={3} sx={{ padding: "5px 10px", margin: "10px 10px 10px" }}>
								<Stack spacing={0}>
									<Typography>
										Day {i + 1}
										<IconButton size="small" sx={{ float: "right" }} onClick={() => deleteCell(i)}><DeleteOutlineIcon fontSize="small" /></IconButton>
										<IconButton size="small" sx={{ float: "right" }} onClick={() => changeCellHour(i, -1)}><RemoveCircleOutlineIcon fontSize="small" /></IconButton>
										<IconButton size="small" sx={{ float: "right" }} onClick={() => changeCellHour(i, 1)}><AddCircleOutlineIcon fontSize="small" /></IconButton>
									</Typography>

									<Box sx={{ margin: "0 5px 0" }}>
										{[...Array(cell.maxHours)].map((vv, ii) => {
											const filled = (cell.placed.length > 0 ? cell.placed.map(v => v.hours).reduce((pv, cv) => pv + cv) : 0);
											return (
												<StopIcon
													key={ii}
													fontSize="small"
													color={filled >= cell.maxHours ? "error" : ii >= filled ? "success" : "warning"}
													sx={{ margin: "0 0 0 -8px", "&:nth-child(6n)": { marginRight: "3px" } }}
												/>
											);
										})}
									</Box>

									{cell.placed.length > 0 ? <Divider /> : null}

									<Stack spacing={1} sx={{ margin: "6px 0" }}>
										{cell.placed.map((placed, ii) =>
											<Paper key={ii} elevation={4} sx={{ padding: "2px 4px" }}>
												{placed.skillName} <Typography variant="caption">({placed.skillType}, {placed.testType}, {placed.hours}hr{placed.hours > 1 ? "s" : ""})</Typography>
												<IconButton size="small" sx={{ float: "right" }} onClick={() => deletePractice(i, ii)}><DeleteOutlineIcon fontSize="small" /></IconButton>
											</Paper>
										)}
									</Stack>
								</Stack>
							</Paper>
						</Grid>
					);
				})}
			</Grid>
		</Fragment>
	);
}
