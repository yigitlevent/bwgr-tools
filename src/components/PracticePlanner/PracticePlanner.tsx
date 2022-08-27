import { Fragment, useState } from "react";

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

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StopIcon from "@mui/icons-material/Stop";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { PracticeTable } from "../../data/tables";


export function PracticePlanner(): JSX.Element {
	const { days, hours, cells } = useAppSelector(state => state.practicePlanner);
	const { prpChangeDays, prpChangeHours, prpAddCells, prpDeleteCell, prpChangeCellHour, prpAddPractice, prpDeletePractice } = useStore();

	const [notification, setNotification] = useState<null | JSX.Element>(null);

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
						onChange={prpChangeDays}
						size="small"
					/>
				</Grid>

				<Grid item>
					<TextField
						label="Number of Hours per Day"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={hours}
						onChange={prpChangeHours}
						size="small"
					/>
				</Grid>

				<Grid item>
					<Button variant="outlined" onClick={() => prpAddCells(days, hours)}>Add Days</Button>
				</Grid>
			</Grid>

			<form onSubmit={(e) => setNotification(prpAddPractice(e, cells, setNotification))}>
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
										<IconButton size="small" sx={{ float: "right" }} onClick={() => prpDeleteCell(i)}><DeleteOutlineIcon fontSize="small" /></IconButton>
										<IconButton size="small" sx={{ float: "right" }} onClick={() => setNotification(prpChangeCellHour(i, -1, cells, setNotification))}><RemoveCircleOutlineIcon fontSize="small" /></IconButton>
										<IconButton size="small" sx={{ float: "right" }} onClick={() => setNotification(prpChangeCellHour(i, 1, cells, setNotification))}><AddCircleOutlineIcon fontSize="small" /></IconButton>
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
												<IconButton size="small" sx={{ float: "right" }} onClick={() => prpDeletePractice(i, ii)}><DeleteOutlineIcon fontSize="small" /></IconButton>
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
