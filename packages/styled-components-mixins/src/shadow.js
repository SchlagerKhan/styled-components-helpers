import { css } from 'styled-components';

export const shadow = (x, y, z, color) => css`
	box-shadow: ${x}px ${y}px ${z}px ${color};
`;

export const dropShadow = shadow(0, 2, 4, 'rgba(0,0,0,0.2)');

export const castShadow = shadow(0, -2, 4, 'rgba(0,0,0,0.2)');
