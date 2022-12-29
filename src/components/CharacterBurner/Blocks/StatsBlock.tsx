import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";
import { Stats } from "../../../data/stats";

import { GenericGrid } from "../../Shared/Grids";
import { BlockText } from "../BlockText";
import { AbilityButton } from "../../Shared/AbilityButton";


export function StatsBlock() {
	const { totals, changeStatShade, changeStatExponent, getStatRemainings, getMentalPointsTotal, getPhysicalPointsTotal, getStatShade, getStatExponent } = useCharacterBurnerStore();

	const statRemaining = getStatRemainings();

	return (
		<GenericGrid columns={6} center spacing={[0, 2]}>
			<Grid item xs={6}>
				<Typography variant="h4">Stats</Typography>
			</Grid>

			<Grid item xs={6}>
				<Typography>Mental Pool: {getMentalPointsTotal()}, Remaining: {statRemaining ? statRemaining.mentalPool : -1}</Typography>
				<Typography>Physical Pool: {getPhysicalPointsTotal()}, Remaining: {statRemaining ? statRemaining.physicalPool : -1}</Typography>
				<Typography>Either Pool: {totals.stats.fromLifepaths.eitherPoints}, Remaining: {statRemaining ? statRemaining.eitherPool : -1}</Typography>
			</Grid>

			<Fragment>
				{Stats.map((v, i) =>
					<Grid key={i} item xs={6} sm={3} md={2}>
						<GenericGrid columns={5} center="h" hasBackground={1}>
							<BlockText text={v.name} hasLeftPadding />
							<Grid item>
								<AbilityButton name={v.name} onClick={e => changeStatShade(e, v.name)} onContextMenu={e => changeStatShade(e, v.name)}>{getStatShade(v.name)}</AbilityButton>
								<AbilityButton name={v.name} onClick={e => changeStatExponent(e, v.name, 1)} onContextMenu={e => changeStatExponent(e, v.name, -1)}>{getStatExponent(v.name)}</AbilityButton>
							</Grid>
						</GenericGrid>
					</Grid>
				)}
			</Fragment>
		</GenericGrid>
	);
}
