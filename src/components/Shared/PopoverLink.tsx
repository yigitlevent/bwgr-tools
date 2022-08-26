import { Fragment, MouseEvent, useState } from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Popover from "@mui/material/Popover";
import Grid from "@mui/material/Grid";

import { Skill } from "../../data/skills";
import { Trait } from "../../data/traits";

function SkillPop({ skill }: { skill: Skill; }) {
	return (
		<Grid container spacing={1} sx={{ width: "400px", padding: 1 }} columns={2}>
			<Grid item xs={2}>
				<Typography variant="h6">{skill.name}</Typography>
			</Grid>

			<Grid item xs={2} md={1}>
				<Typography variant="caption">Root: {skill.root}</Typography>
			</Grid>

			<Grid item xs={2} md={1}>
				<Typography variant="caption">Type: {skill.type}</Typography>
			</Grid>

			<Grid item xs={2}>
				<Typography variant="caption">Tools: {skill.tools.filter(v => v !== "").join(", ")}</Typography>
			</Grid>

			<Grid item xs={2}>
				<Typography variant="caption">Restrictions: {skill.restriction}</Typography>
			</Grid>

			<Grid item xs={2}>
				{skill.description.split("<br>").map(v => <Typography key={v} variant="body2">{v}</Typography>)}
			</Grid>
		</Grid>

	);
}

function TraitPop({ trait }: { trait: Trait; }) {
	return (
		<Grid container spacing={1} sx={{ width: "400px", padding: 1 }} columns={3}>
			<Grid item xs={3}>
				<Typography variant="h6">{trait.name}</Typography>
			</Grid>

			<Grid item sm={3} md={1}>
				<Typography variant="caption">Type: {trait.type}</Typography>
			</Grid>

			{trait.cost !== 0
				? <Grid item sm={3} md={1}>
					<Typography variant="caption">
						Cost: {typeof trait.cost === "number" ? trait.cost : trait.cost.join(", ")}
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

	);
}

function Pop({ anchor, data, onClose }: { anchor: HTMLElement | null; data: Skill | Trait; onClose: () => void; }) {
	return (
		<Popover
			open={Boolean(anchor)}
			onClose={onClose}
			anchorEl={anchor}
			anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			transformOrigin={{ vertical: "top", horizontal: "left" }}
		>
			<Grid container spacing={1} sx={{ width: "400px", padding: "4px 10px 0px" }} columns={2}>
				{"root" in data
					? <SkillPop skill={data} />
					: <TraitPop trait={data} />
				}
			</Grid>
		</Popover>
	);
}

export function PopoverLink({ data }: { data: Skill | Trait; }) {
	const [anchor, setAnchor] = useState<HTMLElement | null>(null);

	const closePopover = () => { setAnchor(null); };
	const openPopover = (event: MouseEvent<HTMLElement>) => {
		setAnchor(event.currentTarget);
	};

	return (
		<Fragment>
			<Link underline="hover" onMouseDown={openPopover}>
				{data.name}
				<Pop anchor={anchor} data={data} onClose={closePopover} />
			</Link>
		</Fragment>
	);
}
