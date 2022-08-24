import styled from "styled-components";
import shallow from "zustand/shallow";
import { ClientStore } from "../../stores/ClientStore";
import { SkillElement, TraitElement } from "./Description";

export const Link = styled.a`
	color: ${(props: bwgr.style.Props) => props.theme.text.link};
	cursor: pointer;
	text-decoration: none;

	&:hover {
		${(props: bwgr.style.Props) => props.theme.brightness.hovered}
	}

	&:visited {
		color: ${(props: bwgr.style.Props) => props.theme.text.link};
		text-decoration: none;
	}
`;


const NoLinkStyle = styled.span<{ seperator?: string; }>`
	color: ${(props: bwgr.style.Props) => props.theme.text.nolink};
	cursor: pointer;
	text-decoration: none;

	&:not(:last-child):after {
		content: "${p => (p.seperator) ? p.seperator : ""}";
		color: ${(props: bwgr.style.Props) => props.theme.text.main};
	}

	&:hover {
		${(props: bwgr.style.Props) => props.theme.brightness.hovered}
	}

	&:visited {
		color: ${(props: bwgr.style.Props) => props.theme.text.link};
		text-decoration: none;
	}
`;

interface NoLinkProps {
	children: string | JSX.Element;
	seperator?: string;
	data?: ["Skill", bwgr.data.Skill] | ["Trait", bwgr.data.Trait];
	onClick?: () => void;
}


export function NoLink({ children, seperator, data, onClick }: NoLinkProps) {
	const { setDescriptionPopup } = ClientStore(state => ({ setDescriptionPopup: state.setDescriptionPopup }), shallow);

	const showData = (arr: ["Skill", bwgr.data.Skill] | ["Trait", bwgr.data.Trait]) => {
		if (arr[0] === "Skill") {
			setDescriptionPopup(<SkillElement skill={arr[1]} />);
		}
		else if (arr[0] === "Trait") {
			setDescriptionPopup(<TraitElement trait={arr[1]} />);
		}
	};

	return (
		<NoLinkStyle
			seperator={seperator}
			onClick={data ? () => showData(data) : onClick}>
			{children}
		</NoLinkStyle>
	);
}
