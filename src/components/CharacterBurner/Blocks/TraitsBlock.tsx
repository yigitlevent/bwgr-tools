import { Fragment, useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";

import { GenericGrid } from "../../Shared/Grids";
import { BlockTraitPopover } from "../BlockText";
import { GeneralTraitModal } from "../Modals/GeneralTraitModal";


function CommonTraitsBlock() {
	const { totals } = useCharacterBurnerStore();

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Common</Typography>
			</Grid>

			<Fragment>
				{totals.traits.commonList.map((traitName, i) =>
					<Grid key={i} item xs={6} sm={3} md={2}>
						<GenericGrid columns={5} center="h" hasBackground={1}>
							<BlockTraitPopover traitPath={traitName} checkbox={{ checked: true, disabled: true }} />
						</GenericGrid>
					</Grid>
				)}
			</Fragment>
		</Fragment>
	);
}

function MandatoryTraitsBlock() {
	const { totals, getTraitOpenness } = useCharacterBurnerStore();

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Mandatory</Typography>
			</Grid>

			<Fragment>
				{totals.traits.mandatoryList.map((traitPath, i) =>
					<Grid key={i} item xs={6} sm={3} md={2}>
						<GenericGrid columns={5} center="h" hasBackground={1}>
							<BlockTraitPopover
								traitPath={traitPath}
								checkbox={{
									checked: getTraitOpenness(traitPath as TraitPath),
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
	const { totals, openTrait, getTraitOpenness, getTraitRemainings } = useCharacterBurnerStore();

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Lifepath</Typography>
			</Grid>

			{totals.traits.lifepathList.map((traitPath, i) =>
				<Grid key={i} item xs={6} sm={3} md={2}>
					<GenericGrid columns={5} center="h" hasBackground={1}>
						<BlockTraitPopover
							traitPath={traitPath as TraitPath}
							checkbox={{
								checked: getTraitOpenness(traitPath as TraitPath),
								disabled: !getTraitOpenness(traitPath as TraitPath) && getTraitRemainings().traitPoints === 0,
								onChange: (e, c) => openTrait(traitPath as TraitPath, c, true)
							}}
						/>
					</GenericGrid>
				</Grid>
			)}
		</Fragment>
	);
}

function GeneralTraitsBlock() {
	const { totals, openTrait, removeTrait, getTraitOpenness, getTraitRemainings } = useCharacterBurnerStore();

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>General</Typography>
			</Grid>

			{totals.traits.generalList.map((traitPath, i) =>
				<Grid key={i} item xs={6} sm={3} md={2}>
					<GenericGrid columns={5} center="h" hasBackground={1}>
						<BlockTraitPopover
							traitPath={traitPath as TraitPath}
							checkbox={{
								checked: getTraitOpenness(traitPath as TraitPath),
								disabled: !getTraitOpenness(traitPath as TraitPath) && getTraitRemainings().traitPoints === 0,
								onChange: (e, c) => openTrait(traitPath as TraitPath, c, false)
							}}
							deleteCallback={() => removeTrait(traitPath as TraitPath as TraitPath)}
						/>
					</GenericGrid>
				</Grid>
			)}
		</Fragment>
	);
}


function BrutalLifeTraitsBlock() {
	const { stockSpecific } = useCharacterBurnerStore();

	return (
		<Fragment>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Brutal Life</Typography>
			</Grid>

			<Fragment>
				{(stockSpecific.brutalLife.traits.filter(v => v !== undefined && v !== null) as TraitPath[]).map((traitName, i) =>
					<Grid key={i} item xs={6} sm={3} md={2}>
						<GenericGrid columns={5} center="h" hasBackground={1}>
							<BlockTraitPopover traitPath={traitName} checkbox={{ checked: true, disabled: true }} />
						</GenericGrid>
					</Grid>
				)}
			</Fragment>
		</Fragment>
	);
}

export function TraitsBlock() {
	const { totals, stockSpecific, getTraitRemainings } = useCharacterBurnerStore();

	const [open, setOpen] = useState(false);

	const traitRemaining = getTraitRemainings();

	return (
		<GenericGrid columns={6} center="v" spacing={[0, 2]}>
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
			{stockSpecific.brutalLife.traits.filter(v => v !== undefined && v !== null).length > 0 ? <BrutalLifeTraitsBlock /> : null}

			<GeneralTraitModal open={open} setOpen={setOpen} />
		</GenericGrid>
	);
}
