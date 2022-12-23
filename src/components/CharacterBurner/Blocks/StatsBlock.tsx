import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";
import { Stats } from "../../../data/stats";
import { GetMentalTotal, GetPhysicalTotal, GetRemainingStatTotals, GetStatExponent, GetStatShade } from "../../../utils/characterStatUtils";

import { GenericGrid } from "../../Shared/Grids";
import { StatButton } from "../AbilityButtons";
import { BlockText } from "../BlockText";


export function StatsBlock() {
	const { totals, spending } = useAppSelector(state => state.characterBurner);
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
								<StatButton name={v.name} value={GetStatShade(v.name, spending)} onClick={cbChangeStatShade} onContext={cbChangeStatShade} />
								<StatButton name={v.name} value={GetStatExponent(v.name, spending)} onClick={cbChangeStatExponent} onContext={cbChangeStatExponent} />
							</Grid>
						</GenericGrid>
					</Grid>
				)}
			</Fragment>
		</GenericGrid>
	);
}
