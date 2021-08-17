import { Box } from "../shared/Box";
import { Title } from "../shared/Titles";

import { LifepathExplorer } from "./leftbox/LifepathExplorer";

export function LeftBox(): JSX.Element {

	return (
		<Box grow={0} shrink={0} flexWidth={"300px"}>
			<Title>BWGR Tools</Title>

			<LifepathExplorer />

		</Box>
	);
}
