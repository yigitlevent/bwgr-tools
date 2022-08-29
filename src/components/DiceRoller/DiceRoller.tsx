import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { TestResult } from "../../state/reducers/diceRoller";
import { Tests } from "../../data/tests";
import { RandomNumber } from "../../utils/misc";


export function DiceRoller() {
	const { shade, dicePool, obstacle, isOpenEnded, isDoubleObstacle, result } = useAppSelector(state => state.diceRoller);
	const { dirChangeShade, dirChangeDicePool, dirChangeObstacle, dirToggleIsOpenEnded, dirToggleIsDoubleObstacle, dirSetResult } = useStore().diceRoller;

	const calculateResult = (dice: number[]) => {
		let successes = 0;
		let failures = 0;

		dice.forEach((v) => {
			if (shade === "Black" && v > 3) successes += 1;
			else if (shade === "Gray" && v > 2) successes += 1;
			else if (shade === "Black" && v > 1) successes += 1;
			else failures += 1;
		});

		const test = (dicePool === 1 && obstacle === 1)
			? "Routine or Difficult"
			: (obstacle > dicePool) ? "Challenging"
				: (Tests[dicePool].routineMaxObstacle <= obstacle)
					? "Routine"
					: "Difficult";

		/*

		const post = `Test type is ${test}. Dice rolled: ${dice.join(", ")}`;*/

		dirSetResult(dice, successes, failures, test);
	};

	const rerollDice = (dice: number[]) => {
		const rerolled: number[][] = [];
		if (isOpenEnded) {
			rerolled.push(dice.filter(v => v === 6).map(v => RandomNumber(1, 6)));
			while (rerolled[rerolled.length - 1].filter(v => v === 6).length > 0) {
				rerolled.push(rerolled[rerolled.length - 1].filter(v => v === 6).map(v => RandomNumber(1, 6)));
			}
		}
		return dice.map(() => RandomNumber(1, 6));
	};

	const resolveDiceRoll = () => {
		const dice = [...Array(dicePool)].map(() => RandomNumber(1, 6));
		dice.push(...rerollDice(dice).flat());
		calculateResult(dice.sort((a, b) => b - a));
	};

	const getResult = (testResult: TestResult) => {
		const actualObstacle = (isDoubleObstacle) ? obstacle * 2 : obstacle;
		const pre = (testResult.successes > actualObstacle)
			? `Success with a margin of ${testResult.successes - actualObstacle}.`
			: (testResult.successes < actualObstacle)
				? `Failure with a margin of ${actualObstacle - testResult.successes}.`
				: "Tie.";

		return (
			<Stack sx={{ margin: [0, 4] }}>
				<Typography variant="h6">Result</Typography>
				<Typography>{pre}</Typography>
			</Stack>
		);
	};

	return (
		<Fragment>
			<Typography variant="h3">Dice Roller</Typography>

			<Grid container columns={6} spacing={1} sx={{ marginTop: 1 }} justifyContent="center" alignItems="center">
				<Grid item xs={6} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Shade</InputLabel>
						<Select value={shade} onChange={(e) => dirChangeShade(e.target.value)}>
							<MenuItem value={"Black"}>Black</MenuItem>
							<MenuItem value={"Gray"}>Gray</MenuItem>
							<MenuItem value={"White"}>White</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={6} sm={2} md={1}>
					<TextField
						label="Dice Pool"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={dicePool}
						onChange={(e) => dirChangeDicePool(parseInt(e.target.value))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={6} sm={2} md={1}>
					<TextField
						label="Obstacle"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={obstacle}
						onChange={(e) => dirChangeObstacle(parseInt(e.target.value))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Is Open Ended?"
						labelPlacement="start"
						control={<Checkbox checked={isOpenEnded} onChange={dirToggleIsOpenEnded} />}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Is Double Obstacle?"
						labelPlacement="start"
						control={<Checkbox checked={isDoubleObstacle} onChange={dirToggleIsDoubleObstacle} />}
					/>
				</Grid>

				<Grid item>
					<Button variant="outlined" size="medium" onClick={resolveDiceRoll}>Roll Dice</Button>
				</Grid>
			</Grid>

			{result ? getResult(result) : null}
		</Fragment>
	);
}
