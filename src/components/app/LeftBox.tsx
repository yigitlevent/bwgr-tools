import styled from "styled-components";

import { IsDev } from "../../index";

import { DataDebug } from "../../utility/dataDebug";

import { Box } from "../shared/Box";
import { Title } from "../shared/Titles";
import { Button } from "../shared/Inputs";
import { Divider } from "../shared/Divider";
import { Icon } from "../shared/Icon";
import { Link } from "../shared/Links";

import { LifepathExplorer } from "./leftbox/LifepathExplorer";
import { SkillExplorer } from "./leftbox/SkillExplorer";
import { TraitExplorer } from "./leftbox/TraitExplorer";
import { Faction } from "./leftbox/Faction";
import { Unit } from "./leftbox/Unit";
import { MagicWheel } from "./leftbox/MagicWheel";
// import { Distillation } from "./leftbox/Distillation";

const IconWrapper = styled.div`
	width: 100%;
	margin-bottom: 9px;
	height: auto;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: center;
`;

export function LeftBox(): JSX.Element {

	return (
		<Box grow={0} shrink={0} flexWidth={"300px"}>
			<Title>BWGR Tools</Title>

			<LifepathExplorer />
			<SkillExplorer />
			<TraitExplorer />

			<Faction />
			<Unit />

			<MagicWheel />
			{/*<Distillation />*/}

			<Divider />

			<IconWrapper>
				<Link href="https://www.burningwheel.com" rel="noopener noreferrer" target="_blank">
					<Icon name={"external"} title={"Burning Wheel HQ"} isDev={IsDev} />
				</Link>
				<Link href="https://github.com/yigitlevent/bwgr-tools" rel="noopener noreferrer" target="_blank">
					<Icon name={"github"} title={"BWGR Tools Github"} isDev={IsDev} />
				</Link>
				<Link href="https://discord.gg/dwkuevMXCH" rel="noopener noreferrer" target="_blank">
					<Icon name={"discord"} title={"Burning Wheel Discord Server"} isDev={IsDev} />
				</Link>
			</IconWrapper>

			{(IsDev)
				? <Button value="Data Debug" onClick={DataDebug} />
				: null
			}
		</Box>
	);
}
