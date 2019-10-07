import React from 'react';

import { withTheme } from 'styled-components';

import { createMedia } from '../src';
import { render, renderWithProvider, Comp, CustomComp } from './helper';

describe('Render', () => {
	test('With provider', () => {
		const wrapper = renderWithProvider(<Comp />);

		expect(wrapper.find('Child')).not.toBeUndefined();
	});

	test('Without provider (throws)', () => {
		const fn = () => render(<Comp />);

		expect(fn).toThrow();
	});

	test('Missing media', () => {
		// prettier-ignore
		const fn = () => renderWithProvider(<CustomComp />);

		expect(fn).toThrow();
	});

	test('Extra theme data', () => {
		const newTheme = { extraData: true };

		const themeComp = ({ theme }) => {
			expect(theme.extraData).toBe(true);
			expect(theme.media).not.toBeUndefined();
			expect(theme.notExisting).toBeUndefined();

			return null;
		};
		const ThemeComp = withTheme(themeComp);

		const providerProps = { theme: newTheme };
		renderWithProvider(<ThemeComp />, providerProps);
	});

	test('Custom media data', () => {
		const WIDTH = { custom: 800 };
		const media = createMedia({ WIDTH });
		const theme = { media };

		// prettier-ignore
		const fn = () => renderWithProvider(<CustomComp />, { theme });

		expect(fn).not.toThrow();
	});
});
