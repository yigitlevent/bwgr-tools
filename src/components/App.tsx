import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../theme/global";
import { DarkTheme } from "../theme/themes";

import { EmptyFaction } from "../data/emptyFaction";

import { AppWrapper, Title } from "./shared/Shared";

import { Content } from "./app/Content";
import { Topbar } from "./app/Topbar";

export function App(): JSX.Element {
	const [selected, setSelected] = useState("New Faction");
	const [faction, setFaction] = useState(EmptyFaction);

	return (
		<ThemeProvider theme={DarkTheme}>
			<GlobalStyle />

			<AppWrapper>
				<Title>BWGR Faction Cards</Title>
				<Topbar selected={selected} setSelected={setSelected} />
				<Content faction={faction} />
			</AppWrapper>

		</ThemeProvider>
	);
}