import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";
import { Attributes } from "../../../data/attributes";
import { GetAttributeExponent, GetAttributeShade } from "../../../utils/characterAttributeUtils";

import { GenericGrid } from "../../Shared/Grids";
import { BlockText } from "../BlockText";
import { AbilityButton } from "../../Shared/AbilityButton";


export function AttributesBlock() {
	const { stock, lifepathPaths, totals, spendings, questions } = useAppSelector(state => state.characterBurner);
	const { cbChangeAttributeShade } = useStore().characterBurner;

	return (
		<GenericGrid columns={6} center spacing={[0, 2]}>
			<Grid item xs={6}>
				<Typography variant="h4">Attributes</Typography>
			</Grid>

			<Fragment>
				{Attributes
					.filter(v => (v.requiredTrait && totals.traits.commonList.includes(v.requiredTrait)) || Object.keys(spendings.attributes).includes(v.name))
					.map((v, i) =>
						<Grid key={i} item xs={6} sm={3} md={2}>
							<GenericGrid columns={5} center="h" hasBackground={1}>
								<BlockText text={v.name} hasLeftPadding />
								<Grid item>
									{v.hasShade
										? <AbilityButton
											name={v.name}
											disabled={GetAttributeExponent(v.name, stock, lifepathPaths, totals, spendings, questions) < 6}
											onClick={e => cbChangeAttributeShade(e, v.name, 5)}
											onContextMenu={e => cbChangeAttributeShade(e, v.name, -5)}
										>
											{GetAttributeShade(v.name, spendings)}
										</AbilityButton>
										: null
									}
									<AbilityButton name={v.name} disabled>
										{GetAttributeExponent(v.name, stock, lifepathPaths, totals, spendings, questions)}
									</AbilityButton>
								</Grid>
							</GenericGrid>
						</Grid>
					)}
			</Fragment>
		</GenericGrid>
	);
}
