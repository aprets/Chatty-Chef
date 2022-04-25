import {Tuple, DefaultMantineColor, MantineThemeOverride, DEFAULT_THEME} from '@mantine/core'

type ExtendedCustomColors = 'contrast' | DefaultMantineColor

declare module '@mantine/core' {
	export interface MantineThemeColorsOverride {
		colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
	}
}

export const theme : MantineThemeOverride = {
	/** Put your mantine theme override here */
	colorScheme: 'light',
	primaryColor: 'orange',
	colors: {
		contrast: DEFAULT_THEME.colors.blue,
	},
}
