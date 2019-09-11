import styled, { css } from 'styled-components';

import { shadow, castShadow, dropShadow } from './shadow';
import { vh } from './vh';

export * from './shadow';
export * from './vh';

styled.mixins = {};

styled.mixins.hideScrollbar = css`
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;

	&::webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
	}
`;

styled.mixins.hyphenate = css`
	overflow-wrap: break-word;
	word-wrap: break-word;
	-webkit-hyphens: auto;
	-ms-hyphens: auto;
	-moz-hyphens: auto;
	hyphens: auto;
`;

Object.assign(styled.mixins, { vh, shadow, castShadow, dropShadow });

vh.enable();
