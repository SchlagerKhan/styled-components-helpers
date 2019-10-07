import styled, { css } from 'styled-components';

function createMaxWidth(maxWidth) {
	return css`
		max-width: ${maxWidth}px;
	`;
}

function createPadding(padding) {
	return css`
		padding-left: ${padding}px;
		padding-right: ${padding}px;
	`;
}

/**
 * Loops through the css-media-values and inserts them in the corresponding minWidth query.
 */
function createMediaCssArray(values, fn) {
	const keys = Object.keys(values);

	return keys.map((key) => {
		const value = values[key];

		return css`
			${styled.minWidth[key]} {
				${fn(value)}
			}
		`;
	});
}

/**
 * Creates the max-widths for all the media queries
 */
function maxWidthStyle({ theme }) {
	const { initial, ...maxWidths } = theme.contentMediaMaxWidths;

	const initialMaxWidth = initial && createMaxWidth(initial);
	const maxWidthCssArray = createMediaCssArray(maxWidths, createMaxWidth);

	return css`
		${initialMaxWidth};

		${maxWidthCssArray};
	`;
}

/**
 * Create the paddings for all the media queries
 */
function paddingStyle({ theme }) {
	const { initial, ...paddings } = theme.contentMediaPaddings;

	const initialPadding = initial && createPadding(initial);
	const paddingCssArray = createMediaCssArray(paddings, createPadding);

	return css`
		${initialPadding};

		${paddingCssArray};
	`;
}

export const ContentPadding = styled.div`
	width: 100%;
	flex: 1;

	${paddingStyle};
`;

styled.ContentPadding = styled(ContentPadding);

export const Content = styled.ContentPadding`
	margin-left: auto;
	margin-right: auto;

	${maxWidthStyle};
`;

styled.Content = styled(Content);
