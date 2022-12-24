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


export function LifepathsBlock({ openLpModal, openQuModal }: { openLpModal: (open: boolean) => void; openQuModal: (open: boolean) => void; }) {
	const { lifepathPaths } = useAppSelector(state => state.characterBurner);
	const { cbRemoveLifepath } = useStore().characterBurner;

	return (
		<GenericGrid columns={2} center="v">
			<Grid item xs={2}>
				<Typography variant="h4">Lifepaths</Typography>
			</Grid>

			<Fragment>
				{lifepathPaths.map((lpPath, i) =>
					<Grid key={i} item xs={2}>
						<LifepathBox lifepath={GetLifepathFromPath(lpPath) as Lifepath} />
					</Grid>
				)}
			</Fragment>

			<Grid item>
				<Button variant="outlined" size="medium" onClick={() => openLpModal(true)}>Add Lifepath</Button>
			</Grid>

			<Grid item>
				<Button variant="outlined" size="medium" onClick={() => cbRemoveLifepath()} disabled={lifepathPaths.length === 0}>Remove Lifepath</Button>
			</Grid>

			<Grid item>
				<Button variant="outlined" size="medium" onClick={() => openQuModal(true)} disabled={lifepathPaths.length === 0}>Answer Questions</Button>
			</Grid>
		</GenericGrid>
	);
}
