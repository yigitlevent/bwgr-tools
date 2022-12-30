import { DataDebug } from "./utils/dataDebug";

import { MainBox } from "./components/MainBox";


export function App(): JSX.Element {
	if (import.meta.env.MODE === "development") DataDebug();

	return (<MainBox />);
}
