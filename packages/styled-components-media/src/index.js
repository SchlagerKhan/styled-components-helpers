import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

// Default media sizes
export const DEFAULT_MEDIA_SIZES = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 600,
	laptop: 1024,
	laptopL: 1440,
	desktop: 2560,
};

// Media query generators
const createMedia = (mediaName, valFn) => new Proxy(
	{},
	{
		get: (proxy, key) => (props) => {
			const size = props && props.theme && props.theme.media && props.theme.media[key];

			if (!size) throw new Error(`No such media available: ${key}`);

			const mediaSize = valFn(size);
			return `@media screen and (${mediaName}: ${mediaSize}px)`;
		},
	},
);

export const minMedia = createMedia('min-width', s => s);
export const maxMedia = createMedia('max-width', s => s - 1);

styled.minMedia = minMedia;
styled.maxMedia = maxMedia;

// MediaThemeProvider
const media = DEFAULT_MEDIA_SIZES;
const createTheme = theme => Object.assign({ media }, theme);
export const MediaThemeProvider = ({ theme, ...props }) => {
	const newTheme = createTheme(theme);

	return <ThemeProvider theme={newTheme} {...props} />;
};
