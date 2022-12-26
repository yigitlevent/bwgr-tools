import { useCallback, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";
import { TraitCategories } from "../../../data/traits/_traits";
import { CheckDatasets } from "../../../utils/checkDatasets";
import { GetTraitFromPath } from "../../../utils/pathFinder";
import { GetRemainingTraitTotals } from "../../../utils/characterTraitUtils";

import { GenericGrid } from "../../Shared/Grids";


export function GeneralTraitModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void; }) {
	const { datasets } = useAppSelector(state => state.dataset);
	const { stock, totals, spendings } = useAppSelector(state => state.characterBurner);
	const { cbAddTrait } = useStore().characterBurner;

	const [chosenTrait, setChosenTrait] = useState("");

	const getPossible = useCallback(() => {
		const possibilities = [];
		for (const categoryKey in TraitCategories) {
			const category = TraitCategories[categoryKey];

			const allowedByDataset = CheckDatasets(datasets, category.allowed);
			if (!allowedByDataset) continue;
			const allowedByCategory = !(category.name.endsWith("Common") || category.name.endsWith("Lifepath"));
			if (!allowedByCategory) continue;

			for (const traitKey in category.traits) {
				const trait = category.traits[traitKey];
				const traitPath = `${category.name}➞${trait.name}`;
				const traitRemaining = GetRemainingTraitTotals(totals, spendings);

				const allowedByDataset = CheckDatasets(datasets, trait.allowed);
				const allowedByStock = trait.stock === "Any" || trait.stock === stock;
				const notInLists = !(totals.traits.commonList.includes(traitPath) || totals.traits.mandatoryList.includes(traitPath)
					|| totals.traits.lifepathList.includes(traitPath) || totals.traits.generalList.includes(traitPath));
				const canPayCost = traitRemaining.traitPoints >= trait.cost;
				if (allowedByDataset && allowedByStock && notInLists && canPayCost) {
					possibilities.push(traitPath);
				}
			}
		}
		return possibilities;
	}, [datasets, spendings, stock, totals]);

	const resetDefaultChosen = useCallback(() => {
		setChosenTrait(getPossible()[0]);
	}, [getPossible]);

	const addNewTrait = () => {
		setOpen(false);
		cbAddTrait(chosenTrait as TraitPath);
		resetDefaultChosen();
	};

	useEffect(() => {
		resetDefaultChosen();
	}, [resetDefaultChosen, datasets]);

	const trait = chosenTrait.length > 0 ? GetTraitFromPath(chosenTrait) : undefined;

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none" }}>
				<GenericGrid columns={1} spacing={[2, 2]} center>
					{chosenTrait.length > 0
						? <Grid item xs={1}>
							<Autocomplete
								value={chosenTrait}
								options={getPossible().sort((a, b) => a.localeCompare(b))}
								getOptionLabel={(option) => option.split("➞")[1]}
								groupBy={(option) => option.split("➞")[0]}
								renderInput={(params) => <TextField {...params} label="Chosen Trait" />}
								onChange={(e, v) => setChosenTrait(v)}
								fullWidth
								disableClearable
							/>
						</Grid>
						: null
					}

					{trait
						? <Grid item xs={1}>
							<Grid container spacing={1} columns={3}>
								<Grid item xs={3}>
									<Typography variant="h6">{trait.name}</Typography>
								</Grid>

								<Grid item sm={3} md={1}>
									<Typography variant="caption">Type: {trait.type}</Typography>
								</Grid>

								{trait.cost !== 0
									? <Grid item sm={3} md={1}>
										<Typography variant="caption">
											Cost: {trait.cost}
										</Typography>
									</Grid>
									: null
								}

								{trait.stock !== "Any"
									? <Grid item sm={3} md={1}>
										<Typography variant="caption">Stock: {trait.stock}</Typography>
									</Grid>
									: null
								}

								<Grid item xs={3}>
									{trait.description.split("<br>").map(v => <Typography key={v} variant="body2" sx={{ textIndent: "8px" }}>{v}</Typography>)}
								</Grid>
							</Grid>
						</Grid>
						: null
					}

					<Grid item xs={1}>
						<Button variant="outlined" size="medium" onClick={addNewTrait} fullWidth>Add Trait</Button>
					</Grid>
				</GenericGrid>
			</Paper>
		</Modal>

	);
}
