import { forwardRef, Fragment, useMemo } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import GitHubIcon from "@mui/icons-material/GitHub";

import { useAppSelector } from "../state/store";
import { useStore } from "../hooks/useStore";
import { GenericGrid } from "./Shared/Grids";
import Grid from "@mui/material/Grid";


function ListItemLink({ item, icon }: { item: [string, string]; icon?: JSX.Element; }) {
	const renderLink = useMemo(() => forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(function Link(itemProps, ref) {
		return <RouterLink to={item[1]} ref={ref} {...itemProps} role={undefined} />;
	}), [item]);

	return (
		<ListItem key={item[0]} component={renderLink} button>
			{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
			<ListItemText primary={item[0]} />
		</ListItem>
	);
}

const Items: [string, string][][] = [
	[["Dice Roller", "/diceroller"]],
	[["Lifepaths", "/lifepaths"], ["Skills", "/skills"], ["Traits", "/traits"], ["Resources", "/resources"]],
	[["Practice Planner", "/practiceplanner"], ["Magic Wheel", "/magicwheel"]],
	[["Duel of Wits Planner", "/dowplanner"], ["Range and Cover Planner", "/racplanner"], ["Fight Planner", "/fightplanner"]],
	[["Character Burner", "/characterburner"], ["Random Character Burner", "/randomcharacterburner"]]
];

export function MainDrawer() {
	const { datasets } = useAppSelector(state => state.dataset);
	const { open, type } = useAppSelector(state => state.drawer);
	const { drwCloseDrawer } = useStore().drawer;
	const { dtsToggleDataset } = useStore().dataset;

	const closeDrawer = () => {
		if (type !== "persistent") drwCloseDrawer();
	};

	return (
		<Drawer
			anchor={"left"}
			variant={type}
			open={open}
			hideBackdrop={type === "persistent"}
			onClose={closeDrawer}
			sx={{ background: "paper" }}
			PaperProps={{ elevation: 2 }}
		>
			<Box sx={{ width: 250, height: "100%" }} onClick={closeDrawer} onKeyDown={closeDrawer}>
				<Typography variant="h4" sx={{ padding: "10px 10px" }}>BWGR Tools</Typography>

				{Items.map((itemgroup, i) => {
					return (
						<Fragment key={i}>
							<Divider />
							{itemgroup.map((item, ii) => <ListItemLink key={ii} item={item} />)}
						</Fragment>
					);
				})}
				<Divider />
			</Box>

			<Box sx={{ width: 250, position: "absolute", bottom: "0" }} onClick={closeDrawer} onKeyDown={closeDrawer}>
				<Divider />

				<GenericGrid columns={3} sx={{ overflow: "hidden", marginTop: "-3px" }} center>
					{/*<Grid item xs={3}>
						<Typography variant="h5" sx={{ width: "100%", margin: "-6px 0 0", padding: 0, textAlign: "center" }}>Datasets</Typography>
					</Grid>*/}

					<Grid item xs={1}>
						<FormControlLabel
							label="Core"
							labelPlacement="top"
							checked={datasets.includes("bwg")}
							control={<Switch color="primary" />}
							onChange={() => dtsToggleDataset("bwg")}
						/>
					</Grid>
					<Grid item xs={1}>
						<FormControlLabel
							label="Codex"
							labelPlacement="top"
							checked={datasets.includes("bwc")}
							control={<Switch color="primary" />}
							onChange={() => dtsToggleDataset("bwc")}
						/>
					</Grid>
					<Grid item xs={1}>
						<FormControlLabel
							label="Misc"
							labelPlacement="top"
							checked={datasets.includes("msc")}
							control={<Switch color="primary" />}
							onChange={() => dtsToggleDataset("msc")}
						/>
					</Grid>
				</GenericGrid>


				<Divider />

				<IconButton href="https://github.com/yigitlevent/bwgr-tools" sx={{ padding: 1, margin: "6px 10px" }}>
					<GitHubIcon />
				</IconButton>
			</Box>
		</Drawer >
	);
}
