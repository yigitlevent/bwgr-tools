import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";
import { GetAverage } from "../../../utils/misc";

import { GenericGrid } from "../../Shared/Grids";


export function TolerancesBlock() {
	const { checkHasTrait, getStatExponent } = useCharacterBurnerStore();

	const [tolerances, setTolerances] = useState<string[]>(Array(16).fill("—"));

	useEffect(() => {
		const ptgs: string[] = Array(16).fill("—");

		const powerExp = getStatExponent("Power");
		const forteExp = getStatExponent("Forte");

		const maxDistance = Math.ceil(forteExp / 2);

		const mortalWound = (checkHasTrait("Any Die➞Tough") || checkHasTrait("Dwarf Common➞Tough") || checkHasTrait("Troll Common➞Tough"))
			? Math.ceil(GetAverage([powerExp, forteExp])) + 6
			: Math.floor(GetAverage([powerExp, forteExp])) + 6;

		let traumatic = mortalWound - 1;
		let severe = mortalWound - 2;
		let midi = mortalWound - 3;
		let light = mortalWound - 4;
		const superficial = Math.floor(forteExp / 2) + 1;

		while (light - superficial > maxDistance) light--;
		while (midi - light > maxDistance) midi--;
		while (severe - midi > maxDistance) severe--;
		while (traumatic - severe > maxDistance) traumatic--;

		for (let i = 0; i < ptgs.length; i++) {
			if (i >= superficial && i < light) ptgs[i] = "Su";
			else if (i >= light && i < midi) ptgs[i] = "Li";
			else if (i >= midi && i < severe) ptgs[i] = "Mi";
			else if (i >= severe && i < traumatic) ptgs[i] = "Se";
			else if (i >= traumatic && i < mortalWound) ptgs[i] = "Tr";
			else if (i === mortalWound) ptgs[i] = "MW";
		}

		setTolerances(ptgs);
	}, [checkHasTrait, getStatExponent]);

	return (
		<GenericGrid columns={16} spacing={[0, 1]} center>
			<Grid item xs={16}>
				<Typography variant="h4">Tolerances</Typography>
			</Grid>

			<Grid item xs={16}>
				<TableContainer component={Paper}>
					<Table size="small">
						<TableHead>
							<TableRow>
								{Array.from(Array(16).keys()).map(v =>
									<TableCell key={v} sx={{ textAlign: "center" }}>
										B{v + 1}
									</TableCell>
								)}
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow sx={{ margin: "8px 0 0", "&:last-child td": { border: 0 } }}>
								{tolerances.map((tolerance, i) => (
									<TableCell key={i} component="td" scope="row" sx={{ textAlign: "center" }}>
										{tolerance}
									</TableCell>
								))}
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</GenericGrid>
	);
}
