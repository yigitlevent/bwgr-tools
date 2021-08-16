import { ContentWrapper, Subtitle } from "../shared/Shared";


export function Content({ faction }: { faction: FactionCard; }): JSX.Element {
	return (
		<ContentWrapper>
			<Subtitle>{faction.basics.name}</Subtitle>

		</ContentWrapper>
	);
}