import { ThemeProvider } from "styled-components";
import shallow from "zustand/shallow";

import { GlobalStyle } from "../theme/global";
import { DarkTheme } from "../theme/themes";
import { ClientStore } from "../stores/ClientStore";

import { OuterBox } from "./shared/Box";

import { LeftBox } from "./app/LeftBox";
import { RightBox } from "./app/RightBox";

export function App(): JSX.Element {
	const { descriptionPopup } = ClientStore(state => ({ descriptionPopup: state.descriptionPopup }), shallow);

	return (
		<ThemeProvider theme={DarkTheme}>
			<GlobalStyle />

			<OuterBox>
				{descriptionPopup
					? descriptionPopup
					: null
				}
				<LeftBox />
				<RightBox />
			</OuterBox>
		</ThemeProvider>
	);
}
