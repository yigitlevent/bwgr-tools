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
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useRulesetStore } from "../hooks/stores/useRulesetStore";
import { useInterfaceStore } from "../hooks/stores/useInterfaceStore";

import { GenericGrid } from "./Shared/Grids";


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
	[["Magic Wheel", "/magicwheel"]],
	[["Practice Planner", "/practiceplanner"], ["Duel of Wits Planner", "/dowplanner"], ["Range and Cover Planner", "/racplanner"], ["Fight Planner", "/fightplanner"]],
	[["Character Burner", "/characterburner"]]
];

export function MainDrawer() {
	const { checkRulesets, toggleDataset } = useRulesetStore();
	const { open, type, closeDrawer } = useInterfaceStore();

	const close = () => {
		if (type !== "persistent") closeDrawer();
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
			<Box sx={{ width: 250, height: "100%" }} onClick={close} onKeyDown={close}>
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

			<Box sx={{ width: 250, position: "absolute", bottom: "0" }} onClick={close} onKeyDown={close}>
				<Divider />

				<GenericGrid columns={3} sx={{ overflow: "hidden", marginTop: "-3px" }} center>
					{/*<Grid item xs={3}>
						<Typography variant="h5" sx={{ width: "100%", margin: "-6px 0 0", padding: 0, textAlign: "center" }}>Datasets</Typography>
					</Grid>*/}

					<Grid item xs={1}>
						<FormControlLabel
							label="Core"
							labelPlacement="top"
							checked={checkRulesets(["bwg"])}
							control={<Switch color="primary" />}
							onChange={() => toggleDataset("bwg")}
						/>
					</Grid>
					<Grid item xs={1}>
						<FormControlLabel
							label="Codex"
							labelPlacement="top"
							checked={checkRulesets(["bwc"])}
							control={<Switch color="primary" />}
							onChange={() => toggleDataset("bwc")}
						/>
					</Grid>
					<Grid item xs={1}>
						<FormControlLabel
							label="Misc"
							labelPlacement="top"
							checked={checkRulesets(["msc"])}
							control={<Switch color="primary" />}
							onChange={() => toggleDataset("msc")}
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
