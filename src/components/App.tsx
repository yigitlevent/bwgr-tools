import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../theme/global";
import { DarkTheme } from "../theme/themes";

import { OuterBox } from "./shared/Box";

import { LeftBox } from "./app/LeftBox";
import { RightBox } from "./app/RightBox";

export function App(): JSX.Element {
	return (
		<ThemeProvider theme={DarkTheme}>
			<GlobalStyle />

			<OuterBox>
				<LeftBox />
				<RightBox />
			</OuterBox>
		</ThemeProvider>
	);
}
