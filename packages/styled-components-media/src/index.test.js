import { render } from 'enzyme';

import React from 'react';
import styled, { withTheme } from 'styled-components';

import { MediaThemeProvider as Provider, minMedia, maxMedia, DEFAULT_MEDIA_SIZES } from './index';

const Child = () => <p>Hello</p>;

const Wrapper = styled.div`
	${minMedia.laptop} {
		background: blue;
	}
`;

const OtherWrapper = styled.div`
	${minMedia.otherMedia} {
		background: blue;
	}
`;

const Comp = () => (
	<Wrapper>
		<Child />
	</Wrapper>
);

const OtherComp = () => (
	<OtherWrapper>
		<Child />
	</OtherWrapper>
);

describe('Basic test', () => {
	test('Exports', () => {
		expect(Provider).not.toBeUndefined();
		expect(minMedia).not.toBeUndefined();
		expect(maxMedia).not.toBeUndefined();
		expect(DEFAULT_MEDIA_SIZES).not.toBeUndefined();
	});
});

describe('Render', () => {
	test('With provider', () => {
		const wrapper = render(
			<Provider>
				<Comp />
			</Provider>,
		);

		expect(wrapper.find('Child')).not.toBeUndefined();
	});

	test('Without provider (throws)', () => {
		const fn = () => render(<Comp />);

		expect(fn).toThrow();
	});

	test('Missing media', () => {
		const fn = () => render(
			<Provider>
				<OtherComp />
			</Provider>,
		);

		expect(fn).toThrow();
	});

	test('Extra theme data', () => {
		const newTheme = { extraData: true };

		const themeComp = ({ theme }) => {
			expect(theme.extraData).toBe(true);
			return null;
		};
		const ThemeComp = withTheme(themeComp);

		render(
			<Provider theme={newTheme}>
				<ThemeComp />
			</Provider>,
		);
	});

	test('Other media data', () => {
		const media = { otherMedia: 800 };
		const theme = { media };

		const fn = () => render(
			<Provider theme={theme}>
				<OtherComp />
			</Provider>,
		);

		expect(fn).not.toThrow();
	});
});
