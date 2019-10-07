import styled from 'styled-components';

import {
	MediaThemeProvider,
	minWidth,
	maxWidth,
	maxHeight,
	minHeight,
	minDevice,
	maxDevice,
	DEFAULT_MEDIA,
	DEFAULT_MEDIA_WIDTH_SIZES,
	DEFAULT_MEDIA_HEIGHT_SIZES,
	DEFAULT_MEDIA_DEVICE_SIZES,
} from '../src';

describe('Exports', () => {
	test('Pure exports', () => {
		expect(MediaThemeProvider).not.toBeUndefined();

		expect(maxWidth).not.toBeUndefined();
		expect(minWidth).not.toBeUndefined();

		expect(maxHeight).not.toBeUndefined();
		expect(minHeight).not.toBeUndefined();

		expect(maxDevice).not.toBeUndefined();
		expect(minDevice).not.toBeUndefined();
	});

	test('Default values', () => {
		expect(DEFAULT_MEDIA).not.toBeUndefined();
		expect(DEFAULT_MEDIA_WIDTH_SIZES).not.toBeUndefined();
		expect(DEFAULT_MEDIA_HEIGHT_SIZES).not.toBeUndefined();
		expect(DEFAULT_MEDIA_DEVICE_SIZES).not.toBeUndefined();

		expect(DEFAULT_MEDIA.WIDTH).toBe(DEFAULT_MEDIA_WIDTH_SIZES);
		expect(DEFAULT_MEDIA.HEIGHT).toBe(DEFAULT_MEDIA_HEIGHT_SIZES);
		expect(DEFAULT_MEDIA.DEVICE).toBe(DEFAULT_MEDIA_DEVICE_SIZES);
	});

	test('Injected styled-component values', () => {
		expect(styled.maxWidth).not.toBeUndefined();
		expect(styled.minWidth).not.toBeUndefined();

		expect(styled.maxHeight).not.toBeUndefined();
		expect(styled.minHeight).not.toBeUndefined();

		expect(styled.minDevice).not.toBeUndefined();
		expect(styled.maxDevice).not.toBeUndefined();
	});
});
