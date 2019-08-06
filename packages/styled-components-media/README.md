# Styled Components Media

A super simple library that makes it easier to handle media queries in `styled-components`.

_**OBS! This library injects the properties `minMedia` and `maxMedia` into the styled-components default exported object.**_

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
// import { minMedia } from '@schlagerkhan/styled-components-media'; // if you want to

const Wrapper = styled.div`
    width: 100%;

    ${styled.minMedia.laptop} {
        width: 50%;
    }
`;

export const Comp = () => <Wrapper>Text</Wrapper>;
```

## Full

The following code exposes a component with the following properties:

-   The wrapper has a default width of `100%` and `50%` if the viewport if `> 500px`.
-   The text has a default font-size of `24px` and `16px` if the viewport is `< 800px`.

```jsx
import styled from 'styled-components';
import {
    MediaThemeProvider,
    minMedia,
    maxMedia,
} from '@schlagerkhan/styled-components-media';

const THEME = {
    media: {
        mediaQuery1: 500,
        mediaQuery2: 800,
    },
};

const Wrapper = styled.div`
    width: 100%;

    ${minMedia.mediaQuery1} {
        width: 50%;
    }
`;

const Text = styled.p`
    font-size: 24px;

    ${maxMedia.mediaQuery2} {
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

### DEFAULT_MEDIA_SIZES

-   mobileS: 320
-   mobileM: 375
-   mobileL: 425
-   tablet: 600
-   laptop: 1024
-   laptopL: 1440
-   desktop: 2560

### minMedia

As mentioned above; `minMedia` and `maxMedia` are injected into the styled-components default export object.

Uses the current theme to find out the value and translates it into a media query such as:

```js
minMedia.laptop {
    background: red;
}
```

compiles to

```css
@media screen and (min-width: 1024px) {
    background: red;
}
```

### maxMedia

The same as minMedia but for the `max-width` query instead.

# Contribute

Pull requests are welcome.

# License

[MIT](https://choosealicense.com/licenses/mit/)
