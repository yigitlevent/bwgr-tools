import { Fragment } from "react";

import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

import MenuIcon from "@mui/icons-material/Menu";

import { useStore } from "./state/useStore";

import { MainDrawer } from "./components/MainDrawer";
import { MainBox } from "./components/MainBox";


export function App(): JSX.Element {
	const { drwToggleDrawer } = useStore().drawer;

	return (
		<Fragment>
			<Paper square elevation={10} sx={{ position: "fixed", top: "0", left: "0", width: "max-content" }}>
				<IconButton onClick={drwToggleDrawer}>
					<MenuIcon />
				</IconButton>
			</Paper>
			<MainDrawer />
			<MainBox />
		</Fragment>
	);
}
