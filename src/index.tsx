import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./components/App";

export const IsDev: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

ReactDOM
	.createRoot(document.getElementById("root")!)
	.render(<StrictMode><App /></StrictMode>);
