import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body, html {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text};
    }
    * {
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.font.families.sans};
        box-sizing: border-box;
    }
    h1, h2, h3 {
        font-weight: 400;
        font-family: ${props => props.theme.font.families.serif};
    }
    h1 {
        font-size: ${props => props.theme.font.sizes.h1};
    }
    h2 {
        font-size: ${props => props.theme.font.sizes.h2};
    }
    h3 {
        font-size: ${props => props.theme.font.sizes.h3};
        font-weight: 700;
    }
    p, a, label {
        font-size: ${props => props.theme.font.sizes.p};
        font-weight: 300;
    }
    small {
        font-size: ${props => props.theme.font.sizes.s};
    }
    code {
        font-family: monospace;
        font-weight: 500;
    }
`