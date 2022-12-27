import { Fragment, useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";
import { GetRemainingTraitTotals, GetTraitOpenness } from "../../../utils/characterTraitUtils";

import { GenericGrid } from "../../Shared/Grids";
import { BlockTraitPopover } from "../BlockText";
import { GeneralTraitModal } from "../Modals/GeneralTraitModal";


function CommonTraitsBlock() {
	const { totals } = useAppSelector(state => state.characterBurner);

	return (
		<Fragment>
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
	);
}

function MandatoryTraitsBlock() {
	const { totals, spendings } = useAppSelector(state => state.characterBurner);

	return (
		<Fragment>
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
									checked: GetTraitOpenness(traitName, spendings),
									disabled: true
								}}
							/>
						</GenericGrid>
					</Grid>
				)}
			</Fragment>
		</Fragment>
	);
}

function LifepathTraitsBlock() {
	const { totals, spendings } = useAppSelector(state => state.characterBurner);
	const { cbOpenTrait } = useStore().characterBurner;

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Lifepath</Typography>
			</Grid>

			{totals.traits.lifepathList.map((traitName, i) =>
				<Grid key={i} item xs={6} sm={3} md={2}>
					<GenericGrid columns={5} center="h" hasBackground={1}>
						<BlockTraitPopover
							traitName={traitName}
							checkbox={{
								checked: GetTraitOpenness(traitName, spendings),
								disabled: !GetTraitOpenness(traitName, spendings) && GetRemainingTraitTotals(totals, spendings).traitPoints === 0,
								onChange: (e, c) => cbOpenTrait(traitName, c, true)
							}}
						/>
					</GenericGrid>
				</Grid>
			)}
		</Fragment>
	);
}

function GeneralTraitsBlock() {
	const { totals, spendings } = useAppSelector(state => state.characterBurner);
	const { cbOpenTrait } = useStore().characterBurner;

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>General</Typography>
			</Grid>

			{totals.traits.generalList.map((traitName, i) =>
				<Grid key={i} item xs={6} sm={3} md={2}>
					<GenericGrid columns={5} center="h" hasBackground={1}>
						<BlockTraitPopover
							traitName={traitName}
							checkbox={{
								checked: GetTraitOpenness(traitName, spendings),
								disabled: !GetTraitOpenness(traitName, spendings) && GetRemainingTraitTotals(totals, spendings).traitPoints === 0,
								onChange: (e, c) => cbOpenTrait(traitName, c, false)
							}}
						/>
					</GenericGrid>
				</Grid>
			)}
		</Fragment>
	);
}

export function TraitsBlock() {
	const { totals, spendings } = useAppSelector(state => state.characterBurner);

	const [open, setOpen] = useState(false);

	const traitRemaining = GetRemainingTraitTotals(totals, spendings);

	return (
		<GenericGrid columns={6} center spacing={[0, 2]}>
			<Grid item xs={6}>
				<Typography variant="h4">Traits</Typography>
			</Grid>

			<Grid item xs={6} sm={5}>
				<Typography>Trait Points: {totals.traits.points}, Remaining: {traitRemaining ? traitRemaining.traitPoints : -1}</Typography>
			</Grid>

			<Grid item xs={6} sm={1}>
				<Button variant="outlined" size="small" onClick={() => setOpen(true)} fullWidth>Add General Trait</Button>
			</Grid>

			{totals.traits.commonList.length > 0 ? <CommonTraitsBlock /> : null}
			{totals.traits.mandatoryList.length > 0 ? <MandatoryTraitsBlock /> : null}
			{totals.traits.lifepathList.length > 0 ? <LifepathTraitsBlock /> : null}
			{totals.traits.generalList.length > 0 ? <GeneralTraitsBlock /> : null}

			<GeneralTraitModal open={open} setOpen={setOpen} />
		</GenericGrid>
	);
}
