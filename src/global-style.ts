import { createGlobalStyle, css } from 'styled-components';
import { ThemeKey } from './types/styled';

const fontsRequest = css`
    @font-face {
        font-family: 'Pokemon';
        src: local('☺'), url('fonts/PokemonHollow.ttf') format('truetype');
    }
    @font-face {
        font-family: 'PokemonSolid';
        src: local('☺'), url('fonts/PokemonSolid.ttf') format('truetype');
    }
`;

export const GlobalStyle = createGlobalStyle<{ $themeKey: ThemeKey }>`
    /* RESET PROPERTIES */
    html {
        box-sizing: border-box;
        font-size: 100%;
        width: 100vw;
        height: 100vh;
        scroll-behavior: smooth;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }
    ol, ul {
        list-style: none;
    }
    img {
        max-width: 100%;
        height: auto;
    }    

    #root {
        width: 100%;
        height: 100%;
    }
    * {
        box-sizing: border-box;
    }
    a, a:active, a:visited {
        text-decoration: none;
        color: inherit;
    }

    ${fontsRequest}

    body {
        display: flex;
        flex-direction: column;
        ${({ theme, $themeKey }) => {
            const { body } = theme;
            return css`
                background-color: ${body.bg[$themeKey]};
                width: ${body.width};
                height: ${body.height};
            `;
        }}
    }
`;

export const GlobalStyleIndex = createGlobalStyle`
    body {
        ${({ theme }) => {
            const { index } = theme.body;
            return css`
                padding: ${index.padding};
            `;
        }}
    }
`;

export const GlobalStyleInfo = createGlobalStyle`
    body {
        ${({ theme }) => {
            const { info: details } = theme.body;
            return css`
                padding: ${details.padding};
            `;
        }}
    }
`;
