import { createRef, Fragment, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import code from "../../assets/fonts/SourceCodePro-SemiBold.woff";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { MagicData } from "../../data/magic";
import { RandomNumber } from "../../utils/misc";

import { BackCanvas } from "./BackCanvas";
import { MainCanvas } from "./MainCanvas";
import { FrontCanvas } from "./FrontCanvas";
import { GenericGrid } from "../Shared/Grids";


const CanvasWrapper = styled.div<{ size: string; }>`
	max-width: 100%;
	width: ${p => (p.size === "0px") ? "580px" : p.size};
	height: ${p => (p.size === "0px") ? "580px" : p.size};

	position: relative;
	margin: 0 auto;

	z-index: 100;
`;

export const MWCONST = { canvasSize: 580, circleRadius: 32, circleOffset: 90, textOffset: 100 };

export function MagicWheel() {
	const { aoe, element, impetus, duration, origin, direction, steps, cover } = useAppSelector(state => state.magicWheel);
	const { mgwChangeAOE, mgwChangeElement, mgwChangeImpetus, mgwChangeDuration, mgwChangeOrigin, mgwChangeDirection, mgwChangeSteps, mgwToggleCover } = useStore().magicWheel;

	const wrapperRef = createRef<HTMLDivElement>();
	const [size, setSize] = useState("0px");
	const [isRotating, setIsRotating] = useState(0);
	const [isFontLoaded, setIsFontLoaded] = useState(false);

	const [entryAngleSpan, setEntryAngleSpan] = useState([0, 0, 0, 0, 0]);

	const [currentOriginAngle, setCurrentOriginAngle] = useState(0);
	const [currentDurationAngle, setCurrentDurationAngle] = useState(0);
	const [currentImpetusAngle, setCurrentImpetusAngle] = useState(0);
	const [currentElementAngle, setCurrentElementAngle] = useState(0);
	const [currentAOEAngle, setCurrentAOEAngle] = useState(0);

	const updateFacets = useCallback((amount: number) => {
		const selected: string[] = [origin, duration, impetus, element, aoe];

		for (const key in MagicData) {
			const currentIndex = MagicData[key].findIndex(v => v.name === selected[key]);
			let newIndex = currentIndex + amount;
			if (newIndex > MagicData[key].length - 1) { newIndex = newIndex % MagicData[key].length; }
			else if (newIndex < 0) { newIndex = (newIndex % MagicData[key].length + MagicData[key].length) % MagicData[key].length; }

			selected[key] = MagicData[key][newIndex].name;
		}

		mgwChangeOrigin(selected[0]);
		mgwChangeDuration(selected[1]);
		mgwChangeImpetus(selected[2]);
		mgwChangeElement(selected[3]);
		mgwChangeAOE(selected[4]);
	}, [aoe, duration, element, impetus, origin, mgwChangeAOE, mgwChangeDuration, mgwChangeElement, mgwChangeImpetus, mgwChangeOrigin]);

	const getFacetMapping = useCallback((type: string) => {
		switch (type) {
			case "Area of Effect":
				return { bandIndex: 4, currentAngle: currentAOEAngle, setFunction: setCurrentAOEAngle, setStoreFunction: mgwChangeAOE };
			case "Element":
				return { bandIndex: 3, currentAngle: currentElementAngle, setFunction: setCurrentElementAngle, setStoreFunction: mgwChangeElement };
			case "Impetus":
				return { bandIndex: 2, currentAngle: currentImpetusAngle, setFunction: setCurrentImpetusAngle, setStoreFunction: mgwChangeImpetus };
			case "Duration":
				return { bandIndex: 1, currentAngle: currentDurationAngle, setFunction: setCurrentDurationAngle, setStoreFunction: mgwChangeDuration };
			case "Origin":
				return { bandIndex: 0, currentAngle: currentOriginAngle, setFunction: setCurrentOriginAngle, setStoreFunction: mgwChangeOrigin };
			default:
				throw "Facet type invalid.";
		}
	}, [currentAOEAngle, currentDurationAngle, currentElementAngle, currentImpetusAngle, currentOriginAngle, mgwChangeAOE, mgwChangeDuration, mgwChangeElement, mgwChangeImpetus, mgwChangeOrigin]);

	const rotateBand = useCallback((amount: number, type: string) => {
		const { bandIndex, currentAngle, setFunction } = getFacetMapping(type);

		const targetRotation = currentAngle + (amount * (entryAngleSpan[bandIndex] / 2));
		let intermediateRotation = currentAngle;

		let animationFrame = 0;
		let skip = true;
		let done = false;

		const step = () => {
			skip = !skip;

			const tempVal = (intermediateRotation + (0.05 * amount));
			intermediateRotation = ((amount > 0 && tempVal >= targetRotation) || (amount < 0 && tempVal <= targetRotation))
				? targetRotation
				: tempVal;

			if (!skip) {
				setFunction(intermediateRotation);
				if ((amount > 0 && intermediateRotation >= targetRotation) || (amount < 0 && intermediateRotation <= targetRotation)) done = true;
			}

			if (done) {
				cancelAnimationFrame(animationFrame);
				setIsRotating(v => v - 1);
			}
			else animationFrame = requestAnimationFrame(step);
		};

		animationFrame = requestAnimationFrame(step);
	}, [entryAngleSpan, getFacetMapping]);

	const rotate = useCallback((amount: number) => {
		updateFacets(amount);
		setIsRotating(5);
		const facetTypes = ["Area of Effect", "Element", "Impetus", "Duration", "Origin"];
		facetTypes.forEach(type => rotateBand(amount, type));
	}, [rotateBand, updateFacets]);

	const changeStartingFacet = useCallback((event: SelectChangeEvent<string>) => {
		const name = event.target.name;
		const value = event.target.value;

		const getStartAngle = (circleIndex: number) => {
			const selectionIndex = MagicData[circleIndex].findIndex(v => v.name === value);
			if (selectionIndex > -1) return (entryAngleSpan[circleIndex] / 2) * selectionIndex;
			throw "Facet not found.";
		};

		const { bandIndex, setFunction, setStoreFunction } = getFacetMapping(name as any);

		setFunction(getStartAngle(bandIndex));
		setStoreFunction(value);
	}, [entryAngleSpan, getFacetMapping]);

	useEffect(() => {
		if (wrapperRef && wrapperRef.current) setSize(window.getComputedStyle(wrapperRef.current).width);
	}, [wrapperRef]);

	useEffect(() => {
		const tempArr = [0, 0, 0, 0, 0];
		for (const arrayKey in MagicData) {
			tempArr[parseInt(arrayKey)] = 4 * Math.PI / MagicData[arrayKey].length;
		}
		setEntryAngleSpan(tempArr);
	}, [aoe, element, impetus, duration, origin]);

	useEffect(() => {
		if (!isFontLoaded) {
			(new FontFace("Code", `url(${code})`)).load().then(
				(font) => { document.fonts.add(font); setIsFontLoaded(true); },
				console.error
			);
		}
	}, [isFontLoaded]);

	return (
		<Fragment>
			<Typography variant="h3">Magic Wheel</Typography>

			<GenericGrid columns={5} center>
				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Area of Effect</InputLabel>
						<Select label="Area of Effect" name="Area of Effect" value={isRotating > 0 ? "" : aoe} onChange={changeStartingFacet} disabled={isRotating > 0}>
							{Object.values(MagicData[4]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Element</InputLabel>
						<Select label="Element" name="Element" value={isRotating > 0 ? "" : element} onChange={changeStartingFacet} disabled={isRotating > 0}>
							{Object.values(MagicData[3]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Impetus</InputLabel>
						<Select label="Impetus" name="Impetus" value={isRotating > 0 ? "" : impetus} onChange={changeStartingFacet} disabled={isRotating > 0}>
							{Object.values(MagicData[2]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Duration</InputLabel>
						<Select label="Duration" name="Duration" value={isRotating > 0 ? "" : duration} onChange={changeStartingFacet} disabled={isRotating > 0}>
							{Object.values(MagicData[1]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Origin</InputLabel>
						<Select label="Origin" name="Origin" value={isRotating > 0 ? "" : origin} onChange={changeStartingFacet} disabled={isRotating > 0}>
							{Object.values(MagicData[0]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>
			</GenericGrid>

			<Divider sx={{ margin: "10px 0 10px" }} />

			<Button
				variant="outlined"
				disabled={isRotating > 0}
				onClick={() => rotate(((Math.random() > 0.5) ? 1 : -1) * RandomNumber(1, 6))}
				fullWidth
			>
				Pray to the Lady Luck
			</Button>

			<Divider sx={{ margin: "2px 0 -8px" }}>
				<Typography>OR</Typography>
			</Divider>

			<GenericGrid columns={2} center>
				<Grid item xs={2} sm={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Direction</InputLabel>
						<Select label="Direction" value={direction} onChange={mgwChangeDirection} disabled={isRotating > 0}>
							<MenuItem value={"Clockwise"}>Clockwise</MenuItem>
							<MenuItem value={"Counterclockwise"}>Counterclockwise</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={2} sm={1}>
					<TextField
						label="Steps"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={steps}
						onChange={mgwChangeSteps}
						fullWidth
						disabled={isRotating > 0}
						variant="standard"
					/>
				</Grid>

				<Grid item xs={2}>
					<Button
						variant="outlined"
						disabled={isRotating > 0}
						onClick={() => { if (!isRotating) rotate((direction === "Clockwise" ? 1 : 0) * steps); }}
						fullWidth
					>
						Turn the Wheel
					</Button>
				</Grid>
			</GenericGrid>

			<Divider sx={{ margin: "10px 0 8px" }} />

			{isFontLoaded
				? <Fragment>
					<CanvasWrapper ref={wrapperRef} size={size}>
						<BackCanvas />
						<MainCanvas currentAngles={[currentOriginAngle, currentDurationAngle, currentImpetusAngle, currentElementAngle, currentAOEAngle]} blockAngle={entryAngleSpan} />
						<FrontCanvas show={cover} />
					</CanvasWrapper>

					<FormControlLabel
						label="Toggle Cover"
						labelPlacement="start"
						control={<Checkbox checked={cover} onChange={mgwToggleCover} />}
					/>
				</Fragment>
				: <CircularProgress />
			}
		</Fragment >
	);
}
