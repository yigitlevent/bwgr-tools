import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";
import { Stats } from "../../../data/stats";
import { GetMentalTotal, GetPhysicalTotal, GetRemainingStatTotals, GetStatExponent, GetStatShade } from "../../../utils/characterStatUtils";

import { GenericGrid } from "../../Shared/Grids";
import { BlockText } from "../BlockText";
import { AbilityButton } from "../../Shared/AbilityButton";


export function StatsBlock() {
	const { totals, spendings: spending } = useAppSelector(state => state.characterBurner);
	const { cbChangeStatShade, cbChangeStatExponent } = useStore().characterBurner;

	const statRemaining = GetRemainingStatTotals(totals, spending);

	return (
		<GenericGrid columns={6} center spacing={[0, 2]}>
			<Grid item xs={6}>
				<Typography variant="h4">Stats</Typography>
			</Grid>

			<Grid item xs={6}>
				<Typography>Mental Pool: {GetMentalTotal(totals)}, Remaining: {statRemaining ? statRemaining.mentalPool : []}</Typography>
				<Typography>Physical Pool: {GetPhysicalTotal(totals)}, Remaining: {statRemaining ? statRemaining.physicalPool : []}</Typography>
				<Typography>Either Pool: {totals.stats.fromLifepaths.eitherPoints}, Remaining: {statRemaining ? statRemaining.eitherPool : []}</Typography>
			</Grid>

			<Fragment>
				{Stats.map((v, i) =>
					<Grid key={i} item xs={6} sm={3} md={2}>
						<GenericGrid columns={5} center="h" hasBackground={1}>
							<BlockText text={v.name} hasLeftPadding />
							<Grid item sx={{}}>
								<AbilityButton name={v.name} value={GetStatShade(v.name, spending)} onClick={e => cbChangeStatShade(e, v.name)} onContextMenu={e => cbChangeStatShade(e, v.name)} />
								<AbilityButton name={v.name} value={GetStatExponent(v.name, spending)} onClick={e => cbChangeStatExponent(e, v.name, 1)} onContextMenu={e => cbChangeStatExponent(e, v.name, -1)} />
							</Grid>
						</GenericGrid>
					</Grid>
				)}
			</Fragment>
		</GenericGrid>
	);
}
