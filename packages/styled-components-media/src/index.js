import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

// Default media sizes
export const DEFAULT_MEDIA_WIDTH_SIZES = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 600,
	laptop: 1024,
	laptopL: 1440,
	desktop: 2560,
};

export const DEFAULT_MEDIA_HEIGHT_SIZES = {
	mobileS: 568,
	mobileM: 667,
	mobileL: 812,
};

export const DEFAULT_MEDIA_DEVICE_SIZES = {
	iPhoneSE: {
		width: 320,
		height: 568,
	},
	iPhone678: {
		width: 375,
		height: 667,
	},
	iPhone678Plus: {
		width: 414,
		height: 736,
	},
	iPhoneX: {
		width: 375,
		height: 812,
	},
};

export const DEFAULT_MEDIA = {
	WIDTH: DEFAULT_MEDIA_WIDTH_SIZES,
	HEIGHT: DEFAULT_MEDIA_HEIGHT_SIZES,
	DEVICE: DEFAULT_MEDIA_DEVICE_SIZES,
};

export function createMedia(customMedia) {
	return Object.assign({}, DEFAULT_MEDIA, customMedia);
}

// Media query generators
function createMediaProxy(mediaName, mediaProp, valFn) {
	return new Proxy(
		{},
		{
			get: (proxy, key) => (props) => {
				// prettier-ignore
				const size = props
					&& props.theme
					&& props.theme.media
					&& props.theme.media[mediaProp]
					&& props.theme.media[mediaProp][key];

				if (!size) {
					throw new Error(`No such media available: ${mediaProp} | ${key}`);
				}

				const mediaSize = valFn(size);
				return `@media screen and (${mediaName}: ${mediaSize}px)`;
			},
		},
	);
}

function createDeviceMediaProxy(mediaOperator, valFn) {
	return new Proxy(
		{},
		{
			get: (proxy, key) => (props) => {
				// prettier-ignore
				const device = props
					&& props.theme
					&& props.theme.media
					&& props.theme.media.DEVICE
					&& props.theme.media.DEVICE[key];

				if (!device) {
					throw new Error(`No such media device available: ${key}`);
				}

				const { width, height } = device;

				if (width === undefined || height === undefined) {
					throw new Error(`Missing width or height in device: ${key}`);
				}

				const widthVal = valFn(width);
				const mediaWidth = `${mediaOperator}-width: ${widthVal}px`;

				const heightVal = valFn(height);
				const mediaHeight = `${mediaOperator}-height: ${heightVal}px`;

				return `@media screen and (${mediaWidth}) and (${mediaHeight})`;
			},
		},
	);
}

export const maxWidth = createMediaProxy('max-width', 'WIDTH', (s) => s - 1);
export const minWidth = createMediaProxy('min-width', 'WIDTH', (s) => s);
export const maxHeight = createMediaProxy('max-height', 'HEIGHT', (s) => s - 1);
export const minHeight = createMediaProxy('min-height', 'HEIGHT', (s) => s);

export const maxDevice = createDeviceMediaProxy('max', (s) => s - 1);
export const minDevice = createDeviceMediaProxy('min', (s) => s);

styled.maxWidth = maxWidth;
styled.minWidth = minWidth;
styled.maxHeight = maxHeight;
styled.minHeight = minHeight;
styled.maxDevice = maxDevice;
styled.minDevice = minDevice;

/* LEGACY */
styled.maxMedia = maxWidth;
styled.minMedia = minWidth;

// MediaThemeProvider
const media = DEFAULT_MEDIA;
const createTheme = (theme) => Object.assign({ media }, theme);
export const MediaThemeProvider = ({ theme, ...props }) => {
	const newTheme = createTheme(theme);

	return <ThemeProvider theme={newTheme} {...props} />;
};
