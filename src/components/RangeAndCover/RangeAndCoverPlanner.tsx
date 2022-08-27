import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";

import DeleteOutline from "@mui/icons-material/DeleteOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { RangeAndCoverActions } from "../../data/rangeAndCover";
import { GroupBy } from "../../utils/misc";

import { RangeAndCoverActionDetails } from "./RangeAndCoverActionDetails";


const GroupedRangeAndCoverActions = GroupBy(RangeAndCoverActions, a => a.group);

export function RangeAndCoverPlanner() {
	const { volleyIndex, actions, selectedAction } = useAppSelector(state => state.rangeAndCover);
	const { racChangeVolleyIndex, racAddAction, racDeleteAction, racSelectedChangeAction, racToggleActionDetails, racToggleActionVisibility } = useStore();

	return (
		<Fragment>
			<Typography variant="h3">Range and Cover Planner</Typography>

			<Stack spacing={5} sx={{ margin: "20px 0" }}>
				<Grid container spacing={1} columns={3}>
					<Grid item xs={3} sm={3} md={1}>
						<FormControl fullWidth size="small">
							<InputLabel id="sa">Volley</InputLabel>
							<Select labelId="sa" label="Volley" value={volleyIndex} onChange={(e) => racChangeVolleyIndex(parseInt(e.target.value as string))}>
								<MenuItem value={0}>Volley 1</MenuItem>
								<MenuItem value={1}>Volley 2</MenuItem>
								<MenuItem value={2}>Volley 3</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={3} sm={3} md={1}>
						<FormControl fullWidth size="small">
							<InputLabel id="sa">Action</InputLabel>
							<Select labelId="sa" label="Action" value={selectedAction} onChange={(e) => racSelectedChangeAction(volleyIndex, e.target.value)}>
								{Object.keys(GroupedRangeAndCoverActions).map((groupKey, groupIndex) => {
									const elements = [
										<ListSubheader key={groupIndex}>{groupKey}</ListSubheader>,
										Object.values(GroupedRangeAndCoverActions)[groupIndex].map((action, actionIndex) =>
											<MenuItem key={actionIndex} value={action.name}>{action.name}</MenuItem>
										)
									];
									return elements;
								})}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={3} sm={3} md={1}>
						<Button variant="outlined" size="medium" onClick={() => racAddAction(volleyIndex, selectedAction)}>Add Action</Button>
					</Grid>
				</Grid>

				{actions.map((action, volleyIndex) => {
					return (
						<Paper key={volleyIndex}>
							<Typography variant="h5" sx={{ padding: "6px 10px" }}>Volley {volleyIndex + 1}</Typography>

							{action
								? <Grid container columns={2} justifyContent="space-between" sx={{ padding: "10px" }}>
									<Grid item xs={2} sm={1} md={1}>
										<Typography variant="h6" sx={{ display: "inline-block" }}>
											{action.visible ? action.name : "────────────────────"}
										</Typography>
									</Grid>

									<Grid item>
										<IconButton size="small" sx={{ margin: "0 8px" }} onClick={() => racToggleActionDetails(volleyIndex)}>
											{action.open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
										</IconButton>
										<IconButton size="small" sx={{ margin: "0 8px" }} onClick={() => racToggleActionVisibility(volleyIndex)}>
											{action.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
										</IconButton>
										<IconButton size="small" sx={{ margin: "0 8px" }} onClick={() => racDeleteAction(volleyIndex)}>
											<DeleteOutline />
										</IconButton>
									</Grid>

									<Grid item xs={2}>
										<Divider />
									</Grid>

									{action.visible && action.open ? <RangeAndCoverActionDetails action={action} /> : null}
								</Grid>
								: null
							}
						</Paper>
					);
				})}
			</Stack>
		</Fragment>
	);
}
