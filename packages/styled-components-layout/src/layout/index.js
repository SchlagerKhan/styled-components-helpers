import styled from 'styled-components';

export const Layout = styled.article`
	${styled.mixins.vh('min-height', 100)};
	width: 100%;

	display: flex;
	flex-direction: column;
`;

styled.Layout = styled(Layout);
