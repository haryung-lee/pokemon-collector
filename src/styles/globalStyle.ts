import { createGlobalStyle } from 'styled-components';
import { colors } from './theme';

export const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html,
  body {
    position: relative;
    height: 100%;
    font-size: 62.5%;
    font-family: IBMPlexSansKRRegular, sans-serif;
    background-color: ${colors.yellow};
  }

  #__next {
    width: 100vw;
    height: 100vh;
  }

  a {
  text-decoration: none;
  }

  table {
  border-collapse: collapse;
  border-spacing: 0;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input {
  border: none;
  outline: none;
  }
`;
