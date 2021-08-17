import { Box } from "../shared/Box";
import { Title } from "../shared/Titles";

export function LeftBox(): JSX.Element {
	return (
		<Box grow={0} shrink={0} flexWidth={"400px"}>
			<Title>BWGR Tools</Title>

		</Box>
	);
}
