import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";
import { Lifepath } from "../../../data/stocks/_stocks";
import { GetLifepathFromPath } from "../../../utils/pathFinder";

import { GenericGrid } from "../../Shared/Grids";
import { LifepathBox } from "../../LifepathLists/LifepathBox";
import { SpecialLifepaths } from "../../../data/stocks/_specialLifepaths";
import { SpecialSkills } from "../../../data/skills/_specialSkills";


type Generic = (open: boolean) => void;

export function LifepathsBlock({ openLpModal, openRlModal, openQuModal, openSlModal, openSuModal, openSsModal }: { openLpModal: Generic; openRlModal: Generic; openQuModal: Generic; openSlModal: Generic; openSuModal: Generic; openSsModal: Generic; }) {
	const { stock, lifepathPaths, totals } = useAppSelector(state => state.characterBurner);
	const { cbRemoveLifepath } = useStore().characterBurner;

	const isSpecialLifepathsDisabled =
		!lifepathPaths.some(v => SpecialLifepaths.includes(v));

	const isSpecialSkillsDisabled =
		!(totals.skills.generalList.some(v => SpecialSkills.includes(v as SkillPath))
			|| totals.skills.mandatoryList.some(v => SpecialSkills.includes(v as SkillPath))
			|| totals.skills.lifepathList.some(v => SpecialSkills.includes(v as SkillPath)));

	const isStockSpecificDisabled =
		!(stock === "Orc" && lifepathPaths.length < 5);

	return (
		<GenericGrid columns={4} center="v">
			<Grid item xs={4}>
				<Typography variant="h4">Lifepaths</Typography>
			</Grid>

			<Fragment>
				{lifepathPaths.map((lpPath, i) =>
					<Grid key={i} item xs={4}>
						<LifepathBox lifepath={GetLifepathFromPath(lpPath) as Lifepath} />
					</Grid>
				)}
			</Fragment>

			<Grid item xs={4} sm={2} md={1}>
				<Button variant="outlined" size="medium" fullWidth onClick={() => openLpModal(true)}>Add Lifepath</Button>
			</Grid>

			<Grid item xs={4} sm={2} md={1}>
				<Button variant="outlined" size="medium" fullWidth onClick={() => cbRemoveLifepath()} disabled={lifepathPaths.length === 0}>Remove Lifepath</Button>
			</Grid>

			<Grid item xs={4} sm={2} md={1}>
				<Button variant="outlined" size="medium" fullWidth onClick={() => openRlModal(true)} disabled={lifepathPaths.length !== 0}>Random Lifepaths</Button>
			</Grid>

			<Grid item xs={4} sm={2} md={1}>
				<Button variant="outlined" size="medium" fullWidth onClick={() => openQuModal(true)} disabled={lifepathPaths.length === 0}>Answer Questions</Button>
			</Grid>

			<Grid item xs={4} sm={2} md={1}>
				<Button variant="outlined" size="medium" fullWidth onClick={() => openSlModal(true)} disabled={isSpecialLifepathsDisabled}>Special Lifepaths</Button>
			</Grid>

			<Grid item xs={4} sm={2} md={1}>
				<Button variant="outlined" size="medium" fullWidth onClick={() => openSuModal(true)} disabled={isSpecialSkillsDisabled}>Special Skills</Button>
			</Grid>

			<Grid item xs={4} sm={2} md={1}>
				<Button variant="outlined" size="medium" fullWidth onClick={() => openSsModal(true)} disabled={isStockSpecificDisabled}>Stock Specific</Button>
			</Grid>
		</GenericGrid>
	);
}
