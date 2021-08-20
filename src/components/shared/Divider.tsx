import { Fragment } from "react";
import styled from "styled-components";

const DividerWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	min-height: 18px;
`;

const DividerLine = styled.div`
	border-bottom: ${(props: bwgr.style.Props) => props.theme.border.medium};
	width: 100%;
`;

const DividerText = styled.div`
	padding: 0 10px 0 10px;
	flex: 1 0 auto;
`;

export function Divider({ title }: { title?: string; }): JSX.Element {
	return (
		<DividerWrapper>
			<DividerLine />

			{(title)
				? <Fragment>
					<DividerText>
						{title}
					</DividerText>
					<DividerLine />
				</Fragment>
				: null
			}
		</DividerWrapper>
	);
}
