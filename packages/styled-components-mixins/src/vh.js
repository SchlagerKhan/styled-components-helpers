import { debounce } from 'lodash';

import { css } from 'styled-components';

let hasEventListener = false;

function updateVh() {
	const newValue = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${newValue}px`);
}

export function vh(prop, val) {
	return css`
		/* Fallback for browsers that do not support Custom Properties */
		${prop}: ${val}vh;

		/* Magic with css variables */
		${prop}: calc(var(--vh, 1vh) * ${val});
	`;
}

vh.triggerUpdate = debounce(updateVh, 100);

vh.enable = function() {
	if (hasEventListener) return;

	window.addEventListener('load', vh.triggerUpdate);
	window.addEventListener('resize', vh.triggerUpdate);

	hasEventListener = true;
};

vh.disable = function() {
	if (!hasEventListener) return;

	window.removeEventListener('load', vh.triggerUpdate);
	window.removeEventListener('resize', vh.triggerUpdate);

	hasEventListener = false;
};
