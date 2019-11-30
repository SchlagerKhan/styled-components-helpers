import { css } from 'styled-components';

export const shadow = (x, y, blur, spread, color) => css`
	box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};
`;

export const dropShadow = shadow(0, 2, 4, 0, 'rgba(0,0,0,0.2)');

export const castShadow = shadow(0, -2, 4, 0, 'rgba(0,0,0,0.2)');
