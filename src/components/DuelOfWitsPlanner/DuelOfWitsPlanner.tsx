import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import DeleteOutline from "@mui/icons-material/DeleteOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { DuelOfWitsActions } from "../../data/duelOfWits";

import { DuelOfWitsActionDetails } from "./DuelOfWitsActionDetails";
import { GenericGrid } from "../Shared/Grids";


export function DuelOfWitsPlanner() {
	const { volleyIndex, actions, selectedAction } = useAppSelector(state => state.duelOfWits);
	const { dowChangeVolleyIndex, dowAddAction, dowDeleteAction, dowSelectedChangeAction, dowToggleActionDetails, dowToggleActionVisibility } = useStore().duelOfWits;

	return (
		<Fragment>
			<Typography variant="h3">Duel of Wits Planner</Typography>

			<GenericGrid columns={3} center>
				<Grid item xs={3} sm={3} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Volley</InputLabel>
						<Select label="Volley" value={volleyIndex} onChange={(e) => dowChangeVolleyIndex(parseInt(e.target.value as string))}>
							<MenuItem value={0}>Volley 1</MenuItem>
							<MenuItem value={1}>Volley 2</MenuItem>
							<MenuItem value={2}>Volley 3</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={3} sm={3} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Action</InputLabel>
						<Select label="Action" value={selectedAction} onChange={(e) => dowSelectedChangeAction(volleyIndex, e.target.value)}>
							{DuelOfWitsActions.map(v => <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={3} sm={3} md={1}>
					<Button variant="outlined" size="medium" onClick={() => dowAddAction(volleyIndex, selectedAction)}>Add Action</Button>
				</Grid>
			</GenericGrid>

			<GenericGrid columns={1}>
				{actions.map((action, volleyIndex) =>
					<Grid item xs={1} key={volleyIndex}>
						<Typography variant="h5" sx={{ padding: "6px 10px" }}>Volley {volleyIndex + 1}</Typography>

						{action
							? <Grid container columns={2} justifyContent="space-between" sx={{ padding: "10px" }}>
								<Grid item xs={2} sm={1} md={1}>
									<Typography variant="h6" sx={{ display: "inline-block" }}>
										{action.visible ? action.name : "────────────────────"}
									</Typography>
								</Grid>

								<Grid item>
									<IconButton size="small" sx={{ margin: "0 8px" }} onClick={() => dowToggleActionDetails(volleyIndex)}>
										{action.open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
									</IconButton>
									<IconButton size="small" sx={{ margin: "0 8px" }} onClick={() => dowToggleActionVisibility(volleyIndex)}>
										{action.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
									</IconButton>
									<IconButton size="small" sx={{ margin: "0 8px" }} onClick={() => dowDeleteAction(volleyIndex)}>
										<DeleteOutline />
									</IconButton>
								</Grid>

								<Grid item xs={2}>
									<Divider />
								</Grid>

								{action.visible && action.open ? <DuelOfWitsActionDetails action={action} /> : null}
							</Grid>
							: <Typography variant="body2">No action selected</Typography>
						}
					</Grid>
				)}
			</GenericGrid>
		</Fragment>
	);
}
