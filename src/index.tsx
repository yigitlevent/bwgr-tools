import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App";

export const IsDev: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));
