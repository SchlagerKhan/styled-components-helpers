import React from 'react';

import { MediaThemeProvider } from '@schlagerkhan/styled-components-media';

export const DEFAULT_CONTENT_MEDIA_MAX_WIDTHS = {
	initial: 425,

	tablet: 600,
	laptop: 1024,
};
export const DEFAULT_CONTENT_MEDIA_PADDINGS = {
	initial: 16,

	tablet: 24,
	laptop: 48,
};

const contentMediaPaddings = DEFAULT_CONTENT_MEDIA_PADDINGS;
const contentMediaMaxWidths = DEFAULT_CONTENT_MEDIA_MAX_WIDTHS;
const createTheme = (theme) => Object.assign({ contentMediaPaddings, contentMediaMaxWidths }, theme);

export const LayoutThemeProvider = ({ theme, ...props }) => {
	const newTheme = createTheme(theme);

	return <MediaThemeProvider theme={newTheme} {...props} />;
};
