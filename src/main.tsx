import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "./theme/theme";

import { STORE } from "./state/store";

import { App } from "./App";

ReactDOM
	.createRoot(document.getElementById("root") as HTMLElement)
	.render(
		<StrictMode>
			<Provider store={STORE}>
				<ThemeProvider theme={THEME}>
					<CssBaseline />
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ThemeProvider >
			</Provider>
		</StrictMode>
	);
