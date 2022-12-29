import { Fragment, useState } from "react";

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
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks6Icon from "@mui/icons-material/Looks6";

import { Tests } from "../../data/tests";
import { RandomNumber } from "../../utils/misc";
import { GenericGrid } from "../Shared/Grids";


interface TestResult {
	dice: number[];
	successes: number;
	failures: number;
	test: string;
	usedFate: boolean;
}

export function DiceRoller() {
	const [shade, setShade] = useState("Black");
	const [dicePool, setDicePool] = useState(1);
	const [obstacle, setObstacle] = useState(1);
	const [isOpenEnded, setIsOpenEnded] = useState(false);
	const [isDoubleObstacle, setIsDoubleObstacle] = useState(false);
	const [result, setResult] = useState<TestResult | undefined>(undefined);

	const calculateResult = (dice: number[], usedFate: boolean) => {
		let successes = 0;
		let failures = 0;

		dice.forEach((v) => {
			if ((shade === "Black" && v > 3) || (shade === "Gray" && v > 2) || (shade === "White" && v > 1)) successes += 1;
			else failures += 1;
		});

		const test = (dicePool === 1 && obstacle === 1)
			? "Routine or Difficult"
			: (obstacle > dicePool) ? "Challenging"
				: (Tests[dicePool].routineMaxObstacle <= obstacle)
					? "Routine"
					: "Difficult";

		setResult({ dice, successes, failures, test, usedFate });
	};

	const rerollFailure = (dice: number[]) => {
		const tempDice = [...dice];
		const index = tempDice.findIndex(v => (shade === "Black" && v < 4) || (shade === "Gray" && v < 3) || (shade === "White" && v < 2));
		tempDice[index] = RandomNumber(1, 6);
		calculateResult(tempDice.sort((a, b) => b - a), true);
	};

	const rerollSixes = (dice: number[], spendingFate: boolean) => {
		const rerolled: number[][] = [];
		if (isOpenEnded || spendingFate) {
			rerolled.push(dice.filter(v => v === 6).map(() => RandomNumber(1, 6)));
			while (rerolled[rerolled.length - 1].filter(v => v === 6).length > 0) {
				rerolled.push(rerolled[rerolled.length - 1].filter(v => v === 6).map(() => RandomNumber(1, 6)));
			}
		}
		calculateResult([...dice, ...rerolled.flat()].sort((a, b) => b - a), spendingFate);
	};

	const resolveDiceRoll = () => {
		rerollSixes([...Array(dicePool)].map(() => RandomNumber(1, 6)), false);
	};

	const getResult = (testResult: TestResult) => {
		const actualObstacle = (isDoubleObstacle) ? obstacle * 2 : obstacle;
		const pre = (testResult.successes > actualObstacle)
			? `Success with a margin of ${testResult.successes - actualObstacle}.`
			: (testResult.successes < actualObstacle)
				? `Failure with a margin of ${actualObstacle - testResult.successes}.`
				: "Tie.";

		return (
			<Fragment>
				<Typography variant="h6">Result</Typography>
				<Typography>{pre}</Typography>
			</Fragment>
		);
	};

	const getIcons = (testResult: TestResult) => {
		const diceIcons = () => {
			return testResult.dice.map((v, i) => {
				if (v === 1) return <LooksOneIcon key={i} color="error" sx={{ margin: "0 0 -6px" }} />;
				else if (v === 2) return <LooksTwoIcon key={i} color={(shade === "White") ? "success" : "error"} sx={{ margin: "0 0 -6px" }} />;
				else if (v === 3) return <Looks3Icon key={i} color={(shade === "Gray") ? "success" : "error"} sx={{ margin: "0 0 -6px" }} />;
				else if (v === 4) return <Looks4Icon key={i} color={"success"} sx={{ margin: "0 0 -6px" }} />;
				else if (v === 5) return <Looks5Icon key={i} color={"success"} sx={{ margin: "0 0 -6px" }} />;
				else return <Looks6Icon key={i} color={"success"} sx={{ margin: "0 0 -6px" }} />;
			});
		};

		return (
			<Fragment>
				<Typography variant="h6">Dice</Typography>
				<Typography>{diceIcons()}</Typography>
			</Fragment>
		);
	};

	const getTest = (testResult: TestResult) => {
		return (
			<Fragment>
				<Typography variant="h6">Test</Typography>
				<Typography>{testResult.test}</Typography>
			</Fragment>
		);
	};

	return (
		<Fragment>
			<Typography variant="h3">Dice Roller</Typography>

			<GenericGrid columns={6} center>
				<Grid item xs={6} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Shade</InputLabel>
						<Select value={shade} onChange={e => setShade(e.target.value)}>
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
						onChange={e => setDicePool(parseInt(e.target.value))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={6} sm={2} md={1}>
					<TextField
						label="Obstacle"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={obstacle}
						onChange={e => setObstacle(parseInt(e.target.value))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Is Open Ended?"
						labelPlacement="start"
						control={<Checkbox checked={isOpenEnded} onChange={(e, c) => setIsOpenEnded(c)} />}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Is Double Obstacle?"
						labelPlacement="start"
						control={<Checkbox checked={isDoubleObstacle} onChange={(e, c) => setIsDoubleObstacle(c)} />}
					/>
				</Grid>

				<Grid item>
					<Button variant="outlined" size="medium" onClick={resolveDiceRoll}>Roll Dice</Button>
				</Grid>
			</GenericGrid>

			{result
				? <GenericGrid columns={3}>
					<Grid item xs={3} sm={1}>
						{getResult(result)}
					</Grid>

					<Grid item xs={3} sm={1}>
						{getIcons(result)}

						{!isOpenEnded && result.dice.includes(6) && !result.usedFate
							? <Button variant="outlined" size="medium" onClick={() => rerollSixes(result.dice, true)} sx={{ margin: "24px 0 0" }}>Reroll sixes using Fate</Button>
							: null
						}

						{isOpenEnded && result.failures > 0 && !result.usedFate
							? <Button variant="outlined" size="medium" onClick={() => rerollFailure(result.dice)} sx={{ margin: "6px 0 0" }}>Reroll a single failure using Fate</Button>
							: null
						}
					</Grid>

					<Grid item xs={3} sm={1}>
						{getTest(result)}
					</Grid>
				</GenericGrid>
				: null
			}
		</Fragment>
	);
}
