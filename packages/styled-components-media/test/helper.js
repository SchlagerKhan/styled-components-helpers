import { render } from 'enzyme';

import React from 'react';

import styled from 'styled-components';

import { MediaThemeProvider } from '../src';

export const Wrapper = styled.div`
	${styled.minWidth.laptop} {
		background: blue;
	}
	${styled.minHeight.mobileL} {
		border: 2px solid green;
	}
	${styled.minDevice.iPhoneX} {
		opacity: 0.5;
	}
`;

export const CustomWrapper = styled.div`
	${styled.maxWidth.custom} {
		background: blue;
	}
	${styled.maxHeight.mobileS} {
		border: 2px solid red;
	}
	${styled.maxDevice.iPhone678} {
		opacity: 0.8;
	}
`;

export const Child = () => <p>Hello</p>;

export const Comp = () => (
	<Wrapper>
		<Child />
	</Wrapper>
);

export const CustomComp = () => (
	<CustomWrapper>
		<Child />
	</CustomWrapper>
);

export const renderWithProvider = (content, providerProps = {}) => {
	// prettier-ignore
	return render(
		<MediaThemeProvider {...providerProps}>
			{content}
		</MediaThemeProvider>,
	);
};

export { render };
