import { debounce } from 'lodash';

import { css } from 'styled-components';

let hasEventListener = false;

function updateVarFn() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const debUpdatedVarFn = debounce(updateVarFn, 100);

export const vh = (prop, val) => {
	/* Fallback for browsers that do not support Custom Properties */
	const fallback = `${prop}: ${val}vh;`;
	const calc = `${prop}: calc(var(--vh, 1vh) * val);`;

	return css`
		${fallback}
		${calc}
	`;
};

export function enableVH100() {
	if (!hasEventListener) return;

	window.addEventListener('resize', debUpdatedVarFn);
	hasEventListener = true;
}

export function disableVH100() {
	window.removeEventListener('resize', debUpdatedVarFn);
	hasEventListener = false;
}
