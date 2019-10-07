# Styled Components Media

A super simple library that makes it easier to handle media queries in `styled-components`.

_**OBS! This library injects the following properties into the styled-components default exported object:**_

-   `minWidth`, `maxWidth`
-   `minHeight`, `maxHeight`
-   `minDevice`, `maxDevice`

# Installation

```bash
npm install @schlagerkhan/styled-components-media
```

or

```bash
yarn add @schlagerkhan/styled-components-media
```

# Usage

## Simple

```jsx
/* App.js */
import styled from 'styled-components';
import { MediaThemeProvider } from '@schlagerkhan/styled-components-media';

export const App = () => (
	<MediaThemeProvider>
		<Comp />
	</MediaThemeProvider>
);

/* Comp.js */
import styled from 'styled-components';
// import { minWidth } from '@schlagerkhan/styled-components-media'; // if you want to

const Wrapper = styled.div`
	width: 100%;

	${styled.minWidth.laptop} {
		width: 50%;
	}
`;

export const Comp = () => <Wrapper>Text</Wrapper>;
```

## Advanced

The following code exposes a component with the following properties:

-   The wrapper has a default width of `100%` and `50%` if the viewport if `> 500px`.
-   The text has a default font-size of `24px` and `16px` if the viewport is `< 800px`.

```jsx
import styled from 'styled-components';
import { MediaThemeProvider, minWidth, maxWidth } from '@schlagerkhan/styled-components-media';

const WIDTH = { width1: 500, width2: 800 };
const THEME = {
	media: createMedia({ WIDTH }),
};

const Wrapper = styled.div`
	width: 100%;

	${minWidth.width1} {
		width: 50%;
	}
`;

const Text = styled.p`
	font-size: 24px;

	${maxWidth.width2} {
		font-size: 16px;
	}
`;

export const App = () => (
	<MediaThemeProvider theme={THEME}>
		<Wrapper>
			<Text>Hello</Text>
		</Wrapper>
	</MediaThemeProvider>
);
```

## API

The package exposes the following modules/components:

### MediaThemeProvider

A direct extension of styled-components's `ThemeProvider` but with a default set of media (see below). The media can be overridden (as seen in the example).

### `DEFAULT_MEDIA_WIDTH_SIZES`

-   mobileS: 320
-   mobileM: 375
-   mobileL: 425
-   tablet: 600
-   laptop: 1024
-   laptopL: 1440
-   desktop: 2560

### `DEFAULT_MEDIA_HEIGHT_SIZES`

-   mobileS: 568
-   mobileM: 667
-   mobileL: 812

### `DEFAULT_MEDIA_DEVICE_SIZES`

_Mind the case sensitivity_

-   iPhoneSE: `{ width: 320, height: 568 }`
-   iPhone678: `{ width: 375, height: 667 }`
-   iPhone678Plus: `{ width: 414, height: 736 }`
-   iPhoneX: `{ width: 375, height: 812 }`

### `DEFAULT_MEDIA`

-   WIDTH: `DEFAULT_MEDIA_WIDTH_SIZES`
-   HEIGHT: `DEFAULT_MEDIA_HEIGHT_SIZES`
-   DEVICE: `DEFAULT_MEDIA_DEVICE_SIZES`

### `createMedia`

Helper function to create a custom media size schema to use with `MediaThemeProvider`.

```jsx
const WIDTH = {
    width1: 500
};
const HEIGHT = {
    height1: 500
};
const DEVICE = {
    device1: {
        width: 200,
        height: 200
    }
}

const media = createMedia({ WIDTH, HEIGHT, DEVICE });
const theme = { media };

<MediaThemeProvider theme={theme}>
    {...}
</MediaThemeProvider>
```

### `minWidth`, `maxWidth`

_(also available as `styled.minWidth` and `styled.maxWidth`)_

Uses the current theme to find out the value and translates it into a media query such as:

```js
// CSS-in-JS
minWidth.laptop {
    background: red;
}
```

transpiles to

```css
#CSS @media screen and (min-width: 1024px) {
	background: red;
}
```

### `minHeight`, `maxHeight`

_(also available as `styled.minHeight` and `styled.maxHeight`)_

The same as `min/maxWidth` but is instead targetting the height dimension.

### `minDevice`, `maxDevice`

_(also available as `styled.minDevice` and `styled.maxDevice`)_

In the same manner as above but with both the width and height dimension such as:

```js
// CSS-in-JS
minDevice.iPhoneX {
	background: red;
}
```

transpiles to

```css
#CSS @media screen and (min-width: 375px) and (min-height: 812px) {
	background: red;
}
```

# Contribute

Pull requests are welcome.

# License

[MIT](https://choosealicense.com/licenses/mit/)
