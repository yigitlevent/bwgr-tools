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

import GitHubIcon from "@mui/icons-material/GitHub";

import { useAppSelector } from "../state/store";
import { useStore } from "../hooks/useStore";


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
	[["Lifepath Randomizer", "/lprandomizer"], ["Practice Planner", "/practiceplanner"], ["Magic Wheel", "/magicwheel"]],
	[["Duel of Wits Planner", "/dowplanner"], ["Range and Cover Planner", "/racplanner"], ["Fight Planner", "/fightplanner"]]
];

export function MainDrawer() {
	const { open, type } = useAppSelector(state => state.drawer);
	const { drwCloseDrawer } = useStore().drawer;

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

			<Box sx={{ width: 250, position: "absolute", bottom: "0", padding: 1 }} onClick={closeDrawer} onKeyDown={closeDrawer}>
				<IconButton aria-label="delete" href="https://github.com/yigitlevent/bwgr-tools">
					<GitHubIcon />
				</IconButton>
			</Box>
		</Drawer>
	);
}
