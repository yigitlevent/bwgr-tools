import { Fragment } from "react";

import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

import { useStore } from "./state/useStore";

import { MainDrawer } from "./components/MainDrawer";
import { MainBox } from "./components/MainBox";


export function App(): JSX.Element {
	const { drwToggleDrawer } = useStore().drawer;

	return (
		<Fragment>
			<IconButton sx={{ position: "absolute", top: "0", left: "0" }} onClick={drwToggleDrawer}>
				<MenuIcon />
			</IconButton>
			<MainDrawer />
			<MainBox />
		</Fragment>
	);
}
