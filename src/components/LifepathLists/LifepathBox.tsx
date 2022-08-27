import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import type { Lifepath } from "../../data/stocks";
import { Stocks } from "../../data/stocks";

import { LifepathSkills } from "./LifepathSkills";
import { LifepathTraits } from "./LifepathTraits";
import { LifepathRequirements } from "./LifepathRequirements";


export function LifepathBox({ lifepath }: { lifepath: Lifepath; }) {
	const getYears = (l: Lifepath) => {
		return l.years + (typeof l.years !== "number" ? "" : (l.skillPool > 1) ? "yrs" : "yr");
	};

	const getResources = (l: Lifepath) => {
		return l.resources + (typeof l.resources !== "number" ? "" : (l.resources > 1) ? "rps" : "rp");
	};

	const getStatPools = (l: Lifepath) => {
		const statPoolsString = [];
		if (l.eitherPool === 0 && l.mentalPool === 0 && l.physicalPool === 0) { statPoolsString.push("—"); }
		else if (l.eitherPool !== 0) { statPoolsString.push(`${(l.eitherPool > 0) ? `+${l.eitherPool}` : l.eitherPool}M/P`); }
		else {
			if (l.mentalPool !== 0) { statPoolsString.push(`${(l.mentalPool > 0) ? `+${l.mentalPool}` : l.mentalPool}M`); }
			if (l.physicalPool !== 0) { statPoolsString.push(`${(l.physicalPool > 0) ? `+${l.physicalPool}` : l.physicalPool}P`); }
		}
		return statPoolsString.join(", ");
	};

	const getLeads = (l: Lifepath) => {
		const leads = (l.leads.length === 0) ? "—" : l.leads.map((lead) => {
			const path = lead.split("➞");
			return Stocks[path[0]].settings[path[1]].short;
		});

		if (typeof leads === "string") return leads;
		return leads.join(", ");
	};

	return (
		<Grid container spacing={0} sx={{ width: "100%", margin: "10px 0 16px" }} columns={18}>
			<Grid item lg={6} md={12} sm={18} xs={18}>
				<Paper elevation={3} square sx={{ padding: "2px 6px 4px" }}>
					<Typography variant="body1">{lifepath.name}</Typography>
				</Paper>
			</Grid>

			<Grid item lg={1} md={2} sm={6} xs={6}>
				<Paper elevation={3} square sx={{ padding: "2px 6px 4px" }}>
					<Typography variant="caption">{getYears(lifepath)}</Typography>
				</Paper>
			</Grid>
			<Grid item lg={1} md={2} sm={6} xs={6}>
				<Paper elevation={3} square sx={{ padding: "2px 6px 4px" }}>
					<Typography variant="caption">{getResources(lifepath)}</Typography>
				</Paper>
			</Grid>
			<Grid item lg={1} md={2} sm={6} xs={6}>
				<Paper elevation={3} square sx={{ padding: "2px 6px 4px" }}>
					<Typography variant="caption">{getStatPools(lifepath)}</Typography>
				</Paper>
			</Grid>

			<Grid item lg={9} md={18} sm={18} xs={18}>
				<Paper elevation={3} square sx={{ padding: "2px 6px 4px" }}>
					<Typography variant="caption">{getLeads(lifepath)}</Typography>
				</Paper>
			</Grid>

			<Grid item md={16}>
				<Typography variant="caption">
					<LifepathSkills lifepath={lifepath} />
				</Typography>
			</Grid>

			<Grid item md={16}>
				<Typography variant="caption">
					<LifepathTraits lifepath={lifepath} />
				</Typography>
			</Grid>

			{Object.keys(lifepath.requirements).length > 0
				? <Grid item md={16}>
					<Typography variant="caption">
						<LifepathRequirements lifepath={lifepath} />
					</Typography>
				</Grid>
				: null
			}
		</Grid >
	);
}
