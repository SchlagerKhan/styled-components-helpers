import { render } from 'enzyme';
import React from 'react';

import styled, { withTheme } from 'styled-components';

import { LayoutThemeProvider as Provider, Layout, Main, Content } from './index';

const Comp = () => (
	<Layout>
		<Main>
			<Content>Hello</Content>
		</Main>
	</Layout>
);

describe('Basic', () => {
	test('Exports', () => {
		expect(Provider).not.toBeUndefined();
		expect(Layout).not.toBeUndefined();
		expect(Main).not.toBeUndefined();
		expect(Content).not.toBeUndefined();
	});

	test('Styled-components injected', () => {
		expect(styled.Layout).not.toBeUndefined();
		expect(styled.Main).not.toBeUndefined();
		expect(styled.Content).not.toBeUndefined();
	});
});

describe('Rendering', () => {
	test('Render Content', () => {
		const fn = () =>
			render(
				<Provider>
					<Content />
				</Provider>,
			);

		expect(fn).not.toThrow();
	});

	test('Render all', () => {
		const fn = () =>
			render(
				<Provider>
					<Comp />
				</Provider>,
			);

		expect(fn).not.toThrow();
	});

	test('Theme content', () => {
		const extraThemeData = { data: true };

		const themeComp = ({ theme }) => {
			expect(theme.media).not.toBeUndefined();
			expect(theme.contentMediaPaddings).not.toBeUndefined();
			expect(theme.contentMediaMaxWidths).not.toBeUndefined();
			expect(theme.data).toBe(true);

			return null;
		};

		const ThemeComp = withTheme(themeComp);

		render(
			<Provider theme={extraThemeData}>
				<ThemeComp />
			</Provider>,
		);
	});
});
