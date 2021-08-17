namespace bwgr {

	namespace style {

		interface Props extends ThemedStyledProps {
			theme: Palette;
		}
	
		interface Palette {
			background: {
				surface: string;
				sidebar: string;
				element: string;
				subelement: string;
				input: string;
			};
			text: {
				main: string;
				hint: string;
				link: string;
			};
			border: {
				soft: string;
				medium: string;
				hard: string;
			};
			status: {
				success: string;
				warning: string;
				error: string;
			};
			brightness: {
				darkened: string;
				normal: string;
				hovered: string;
				selected: string;
			};
		}

	}
	
}
