import { Fragment, useCallback, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";
import { Resource, Resources } from "../../../data/resources/_resources";

import { GenericGrid } from "../../Shared/Grids";
import { AbilityButton } from "../../Shared/AbilityButton";


interface SelectedCost {
	baseCost: number;
	modifiers: {
		[key: string]: {
			cost: number | `${number}/per`;
			selected: boolean;
		};
	};
}

export function ResourceModal({ openRe, openReModal }: { openRe: boolean; openReModal: (open: boolean) => void; }) {
	const { stock, addResource, getResourceRemainings } = useCharacterBurnerStore();

	const [resource, setResource] = useState<Resource>(Resources[stock].resources[0]);
	const [resourceDesc, setResourceDesc] = useState("");
	const [costs, setCosts] = useState<SelectedCost>();
	const [numberOfWeapons, setNumberOfWeapons] = useState(1);

	const resetCosts = useCallback(() => {
		const newCosts: SelectedCost = { baseCost: 0, modifiers: {} };

		if (Array.isArray(resource.cost)) {
			newCosts.baseCost = resource.cost[0][1];
		}
		else if (typeof resource.cost === "number") {
			newCosts.baseCost = resource.cost;
		}
		else if (resource.cost === "various") {
			newCosts.baseCost = 0;
		}
		if (resource.modifiers) {
			for (const key in resource.modifiers) {
				newCosts.modifiers[resource.modifiers[key][0]] = {
					cost: resource.modifiers[key][1],
					selected: false
				};
			}
		}
		setCosts({ ...newCosts });
	}, [resource]);

	const modifyResource = useCallback((resourceName: string) => {
		const res = Resources[stock].resources.find(v => v.name === resourceName);
		if (res) {
			setResourceDesc("");
			setResource(res);
			resetCosts();
		}
	}, [resetCosts, stock]);

	const changeCost = useCallback((cost: number) => {
		const newCosts = JSON.parse(JSON.stringify(costs)) as SelectedCost;
		newCosts.baseCost = cost > 0 ? cost : 0;
		setCosts({ ...newCosts });
	}, [costs]);

	const changeModifier = useCallback((name: string) => {
		const newCosts = JSON.parse(JSON.stringify(costs)) as SelectedCost;
		newCosts.modifiers[name] = { ...newCosts.modifiers[name], selected: !newCosts.modifiers[name].selected };
		setCosts({ ...newCosts });
	}, [costs]);

	const getModifiers = useCallback((costs: SelectedCost) => {
		const modifiers: [string, number | `${number}/per`][] = Object.keys(costs.modifiers).filter(v => costs.modifiers[v].selected).map(v => [v, costs.modifiers[v].cost]);
		return modifiers;
	}, []);

	const getTotalCost = useCallback((modifiers: [string, number | `${number}/per`][]) => {
		if (costs) {
			let totalCost = costs.baseCost;
			const modifierCosts = modifiers.map(v => v[1]);
			if (modifierCosts.length > 0) {
				for (const key in modifiers) {
					const modCost = modifiers[key][1];
					if (typeof modCost === "number") totalCost += modCost;
					else if (typeof modCost === "string") totalCost += numberOfWeapons * parseInt(modCost.split("/")[0]);
				}
			}
			return totalCost < 1 ? 1 : totalCost;
		}
	}, [costs, numberOfWeapons]);

	const createResource = useCallback(() => {
		if (costs) {
			const modifiers = getModifiers(costs);
			const totalCost = getTotalCost(modifiers);

			if (totalCost !== undefined && totalCost <= getResourceRemainings().resourcePoints) {
				addResource({
					name: resource.name,
					type: resource.type,
					cost: totalCost,
					modifiers: modifiers.map(v => v[0]),
					description: resourceDesc
				});
				openReModal(false);
			}
		}
	}, [addResource, costs, getModifiers, getResourceRemainings, getTotalCost, openReModal, resource.name, resource.type, resourceDesc]);

	useEffect(() => {
		resetCosts();
	}, [resource, resetCosts, numberOfWeapons]);

	return (
		<Modal open={openRe} onClose={() => openReModal(false)}>
			<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", maxHeight: "100vh", padding: "0 24px 24px", border: "none", overflow: "auto" }}>
				<GenericGrid columns={6} spacing={[1, 2]} center="v">
					<Grid item xs={6}>
						<FormControl fullWidth variant="standard">
							<InputLabel>Resource</InputLabel>
							<Select value={resource.name} onChange={(e) => modifyResource(e.target.value)}>
								{Resources[stock].resources.map((resource, i) =>
									<MenuItem key={i} value={resource.name}>{resource.name}</MenuItem>
								)}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={6}>
						<Divider>Type: {resource.type}</Divider>
					</Grid>

					{typeof resource.cost === "number"
						? <Grid item xs={6} sm={2}>
							<Typography variant="body2">Cost: {resource.cost}</Typography>
						</Grid>
						: null
					}

					{resource.magical
						? <Fragment>
							<Grid item xs={6} sm={2}>
								<Typography variant="body2">Obstacle: {resource.magical.obstacle}</Typography>
							</Grid>
							<Grid item xs={6} sm={2}>
								<Typography variant="body2">Actions: {resource.magical.actions}</Typography>
							</Grid>
						</Fragment>
						: null
					}

					{resource.magical
						? <Fragment>
							<Grid item xs={6} sm={2}>
								<Typography variant="body2">Origin: {resource.magical.origin}</Typography>
							</Grid>
							<Grid item xs={6} sm={2}>
								<Typography variant="body2">Element: {resource.magical.element.join("/")}</Typography>
							</Grid>
							<Grid item xs={6} sm={2}>
								<Typography variant="body2">Duration: {resource.magical.duration}</Typography>
							</Grid>
							<Grid item xs={6} sm={4}>
								<Typography variant="body2">Area of Effect: {resource.magical.areaOfEffect}</Typography>
							</Grid>
							<Grid item xs={6} sm={2}>
								<Typography variant="body2">Impetus: {resource.magical.impetus.join("/")}</Typography>
							</Grid>
						</Fragment>
						: null
					}

					{resource.description
						? <Grid item xs={6}>
							{resource.description.split("<br>").map((v, i) => {
								if (resource.magical && i === 0) return <Typography key={i} variant="subtitle2">{v}</Typography>;
								return <Typography key={i} variant="body2">{v}</Typography>;
							})}
						</Grid>
						: null
					}

					{costs && Array.isArray(resource.cost)
						? <Grid item xs={6}>
							<Typography variant="h6">Cost</Typography>
							<RadioGroup value={costs.baseCost} onChange={(e, v) => changeCost(parseInt(v))}>
								{resource.cost.map((v, i) =>
									<FormControlLabel key={i} label={`${v[0]} (${v[1]}rps)`} value={v[1]} control={<Radio />} />
								)}
							</RadioGroup>
						</Grid>
						: null
					}

					{costs && resource.cost === "various"
						? <Grid item xs={6}>
							<Typography sx={{ display: "inline", margin: "0 8px 0 0" }}>Cost</Typography>
							<AbilityButton
								onClick={e => { e.preventDefault(); changeCost(costs.baseCost + 1); }}
								onContextMenu={e => { e.preventDefault(); changeCost(costs.baseCost - 1); }}
							>
								{costs.baseCost}
							</AbilityButton>
						</Grid>
						: null
					}

					{costs && resource.modifiers
						? <Fragment>
							<Grid item xs={6}>
								<Typography variant="h6">Modifiers</Typography>
							</Grid>

							{resource.modifiers.map((v, i) =>
								<Grid item key={i} xs={2}>
									<FormControlLabel label={`${v[0]} (${v[1]}rps)`} checked={costs.modifiers[v[0]].selected} onChange={() => changeModifier(v[0])} control={<Checkbox />} />
								</Grid>
							)}
						</Fragment>
						: null
					}

					{costs && resource.modifiers && resource.modifiers.some(v => typeof v[1] === "string")
						? <Grid item xs={6}>
							<Typography variant="h6">Number of Weapons</Typography>
							<AbilityButton
								onClick={e => { e.preventDefault(); setNumberOfWeapons((v) => v + 1); }}
								onContextMenu={e => { e.preventDefault(); setNumberOfWeapons((v) => v - 1); }}
							>
								{numberOfWeapons}
							</AbilityButton>
						</Grid>
						: null
					}

					<Grid item xs={6}>
						<TextField label="Add description (optional)" variant="standard" value={resourceDesc} onChange={e => setResourceDesc(e.target.value)} fullWidth />
					</Grid>

					{costs
						? <Grid item>
							<Typography sx={{ marginTop: 2, marginBottom: 2 }}>Total Cost: {getTotalCost(getModifiers(costs))}</Typography>
						</Grid>
						: null
					}

					<Grid item>
						<Button variant="outlined" size="medium" onClick={() => createResource()}>Add Resource</Button>
					</Grid>
				</GenericGrid>
			</Paper >
		</Modal >
	);
}
