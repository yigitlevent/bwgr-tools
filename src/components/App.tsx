import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../theme/global";
import { DarkTheme } from "../theme/themes";

import { EmptyFaction } from "../data/emptyFaction";

import { OuterBox } from "./shared/Box";

import { LeftBox } from "./app/LeftBox";
import { RightBox } from "./app/RightBox";

export function App(): JSX.Element {
	const [selected, setSelected] = useState("New Faction");
	const [faction, setFaction] = useState(EmptyFaction);

	return (
		<ThemeProvider theme={DarkTheme}>
			<GlobalStyle />

			<OuterBox width={"800px"}>
				<LeftBox />
				<RightBox />
			</OuterBox>

		</ThemeProvider>
	);
}