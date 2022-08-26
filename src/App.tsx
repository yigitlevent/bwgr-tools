
import { Fragment } from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useAppDispatch } from "./state/store";

import { MainDrawer } from "./components/MainDrawer";
import { MainBox } from "./components/MainBox";

export function App(): JSX.Element {
	const dispatch = useAppDispatch();

	return (
		<Fragment>
			<IconButton sx={{ position: "absolute", top: "0", right: "0" }} onClick={() => dispatch({ type: "TOGGLE_DRAWER" })}>
				<MenuIcon />
			</IconButton>
			<MainDrawer />
			<MainBox />
		</Fragment>
	);
}
