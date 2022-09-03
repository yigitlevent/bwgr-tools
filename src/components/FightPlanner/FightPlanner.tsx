import { Fragment, useState } from "react";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ListSubheader from "@mui/material/ListSubheader";

import DeleteOutline from "@mui/icons-material/DeleteOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { FightActions } from "../../data/fight";
import { GroupBy } from "../../utils/misc";

import { FightPlannerActionDetails } from "./FightActionDetails";
import { GenericGrid } from "../Shared/Grids";


const GroupedFightActions = GroupBy(FightActions, a => a.group);

export function FightPlanner() {
	const { reflexes, volleyIndex, actions, selectedAction } = useAppSelector(state => state.fight);
	const { fgtChangeReflexes, fgtChangeVolleyIndex, fgtAddAction, fgtDeleteAction, fgtChangeSelectedAction, fgtToggleActionDetails, fgtToggleActionVisibility } = useStore().fight;

	const [notification, setNotification] = useState<null | JSX.Element>(null);

	return (
		<Fragment>
			{notification}

			<Typography variant="h3">Fight Planner</Typography>

			<GenericGrid columns={4} center>
				<Grid item xs={4} sm={2} md={1}>
					<TextField
						label="Reflexes"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={reflexes}
						onChange={(e) => fgtChangeReflexes(parseInt(e.target.value), actions, setNotification)}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Volley</InputLabel>
						<Select label="Volley" value={volleyIndex} onChange={(e) => fgtChangeVolleyIndex(parseInt(e.target.value as string))}>
							<MenuItem value={0}>Volley 1</MenuItem>
							<MenuItem value={1}>Volley 2</MenuItem>
							<MenuItem value={2}>Volley 3</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Action</InputLabel>
						<Select label="Action" value={selectedAction} onChange={(e) => fgtChangeSelectedAction(volleyIndex, e.target.value)}>
							{Object.keys(GroupedFightActions).map((groupKey, groupIndex) => {
								const elements = [
									<ListSubheader key={groupIndex}>{groupKey}</ListSubheader>,
									Object.values(GroupedFightActions)[groupIndex].map((action, actionIndex) =>
										<MenuItem key={actionIndex} value={action.name}>{action.name}</MenuItem>
									)
								];
								return elements;
							})}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<Button variant="outlined" size="medium" onClick={() => fgtAddAction(volleyIndex, selectedAction, reflexes, actions, setNotification)}>Add Action</Button>
				</Grid>
			</GenericGrid>

			<GenericGrid columns={1}>
				{actions.map((action, volleyIndex) =>
					<Grid item xs={1} key={volleyIndex}>
						<Typography variant="h5" sx={{ padding: "6px 10px" }}>Volley {volleyIndex + 1}</Typography>

						{action.length > 0
							? action.map((action, actionIndex) =>
								<Grid key={actionIndex} container columns={3} justifyContent="space-between" sx={{ padding: "10px" }}>
									<Grid item xs={3} sm={2} md={2}>
										<Typography variant="h6" sx={{ display: "inline-block" }}>
											{action.visible ? action.name : "────────────────────"}
										</Typography>
									</Grid>

									<Grid item>
										<IconButton size="small" sx={{ margin: "0 8px" }} onClick={() => fgtToggleActionDetails(volleyIndex, actionIndex)}>
											{action.open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
										</IconButton>
										<IconButton size="small" sx={{ margin: "0 8px" }} onClick={() => fgtToggleActionVisibility(volleyIndex, actionIndex)}>
											{action.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
										</IconButton>
										<IconButton size="small" sx={{ margin: "0 8px" }} onClick={() => fgtDeleteAction(volleyIndex, actionIndex)}>
											<DeleteOutline />
										</IconButton>
									</Grid>

									<Grid item xs={3}>
										<Divider />
									</Grid>

									{action.visible && action.open ? <FightPlannerActionDetails action={action} /> : null}
								</Grid>
							)
							: <Typography variant="body2">No action selected</Typography>
						}
					</Grid>
				)}
			</GenericGrid>
		</Fragment >
	);
}
