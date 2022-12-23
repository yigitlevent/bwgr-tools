import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";
import { Attributes } from "../../../data/attributes";
import { GetAttributeExponent, GetAttributeShade } from "../../../utils/characterAttributeUtils";

import { GenericGrid } from "../../Shared/Grids";
import { AttributeButton } from "../AbilityButtons";
import { BlockText } from "../BlockText";


export function AttributesBlock() {
	const { stock, spending } = useAppSelector(state => state.characterBurner);
	const { cbChangeAttributeShade } = useStore().characterBurner;

	return (
		<GenericGrid columns={6} center spacing={[0, 2]}>
			<Grid item xs={6}>
				<Typography variant="h4">Attributes</Typography>
			</Grid>

			<Fragment>
				{Attributes.filter(v => Object.keys(spending.attributes).includes(v.name)).map((v, i) =>
					<Grid key={i} item xs={6} sm={3} md={2}>
						<GenericGrid columns={5} center="h" hasBackground={1}>
							<BlockText text={v.name} hasLeftPadding />
							<Grid item>
								{v.hasShade
									? <AttributeButton
										name={v.name}
										value={GetAttributeShade(v.name, spending)}
										disabled={GetAttributeExponent(v.name, stock, spending) < 6}
										onClick={cbChangeAttributeShade}
										onContext={cbChangeAttributeShade}
									/>
									: null
								}
								<AttributeButton name={v.name} value={GetAttributeExponent(v.name, stock, spending)} disabled />
							</Grid>
						</GenericGrid>
					</Grid>
				)}
			</Fragment>
		</GenericGrid>
	);
}
