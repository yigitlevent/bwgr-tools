import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";

import { GenericGrid } from "../../Shared/Grids";
import { GetRemainingTraitTotals, GetTraitOpenness } from "../../../utils/characterTraitUtils";
import { BlockTraitPopover } from "../BlockText";


export function TraitsBlock() {
	const { totals, spending } = useAppSelector(state => state.characterBurner);
	const { cbOpenTrait } = useStore().characterBurner;

	const traitRemaining = GetRemainingTraitTotals(totals, spending);

	return (
		<GenericGrid columns={6} center spacing={[0, 2]}>
			<Grid item xs={6}>
				<Typography variant="h4">Traits</Typography>
			</Grid>

			<Grid item xs={6}>
				<Typography>Trait Points: {totals.traits.points}, Remaining: {traitRemaining ? traitRemaining.traitPoints : []}</Typography>
			</Grid>

			{totals.traits.commonList.length > 0
				? <Fragment>
					<Grid item xs={6}>
						<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Common</Typography>
					</Grid>

					<Fragment>
						{totals.traits.commonList.map((traitName, i) =>
							<Grid key={i} item xs={6} sm={3} md={2}>
								<GenericGrid columns={5} center="h" hasBackground={1}>
									<BlockTraitPopover traitName={traitName} checkbox={{ checked: true, disabled: true }} />
								</GenericGrid>
							</Grid>
						)}
					</Fragment>
				</Fragment>
				: null
			}

			{totals.traits.mandatoryList.length > 0
				? <Fragment>
					<Grid item xs={6}>
						<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Mandatory</Typography>
					</Grid>

					<Fragment>
						{totals.traits.mandatoryList.map((traitName, i) =>
							<Grid key={i} item xs={6} sm={3} md={2}>
								<GenericGrid columns={5} center="h" hasBackground={1}>
									<BlockTraitPopover
										traitName={traitName}
										checkbox={{
											checked: GetTraitOpenness(traitName, spending),
											disabled: true
										}}
									/>
								</GenericGrid>
							</Grid>
						)}
					</Fragment>
				</Fragment>
				: null
			}

			{totals.traits.lifepathList.length > 0
				? <Fragment>
					<Grid item xs={6}>
						<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Lifepath</Typography>
					</Grid>

					{totals.traits.lifepathList.map((traitName, i) =>
						<Grid key={i} item xs={6} sm={3} md={2}>
							<GenericGrid columns={5} center="h" hasBackground={1}>
								<BlockTraitPopover
									traitName={traitName}
									checkbox={{
										checked: GetTraitOpenness(traitName, spending),
										onChange: (e, c) => cbOpenTrait(traitName, c, true)
									}}
								/>
							</GenericGrid>
						</Grid>
					)}
				</Fragment>
				: null
			}
		</GenericGrid>
	);
}
