import { createGlobalStyle } from "styled-components";
import InterFont from "../assets/fonts/inter/static/Inter_18pt-Regular.ttf";
import InterFontBold from "../assets/fonts/inter/static/Inter_18pt-Bold.ttf";

const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.neutral[900]};
  }
 

  /* Headings */
  h1 {
    ${(props) => props.theme.typography.preset1}
  }

  h2 {
    ${(props) => props.theme.typography.preset2}
  }

  h3 {
    ${(props) => props.theme.typography.preset3}
  }

  h4 {
    ${(props) => props.theme.typography.preset4}
  }

  h5 {
    ${(props) => props.theme.typography.preset5}
  }

  h6 {
    ${(props) => props.theme.typography.preset6}
  }

  /* Paragraphs */
  p {
    ${(props) => props.theme.typography.preset4}
  }

  /* Links */
  /* a {
    color: ${(props) => props.theme.colors.blue[500]};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  } */

  /* Buttons */
  /* button {
    font-family: ${(props) => props.theme.fonts.primary};
    cursor: pointer;
    border: none;
    background: none;
    padding: ${(props) => props.theme.spacing[100]} ${(props) =>
  props.theme.spacing[200]};
    border-radius: 4px;
  } */

  /* Lists */
  ul, ol {
    list-style: none;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Forms */
  input, textarea, select, button {
    font-family: inherit;
    font-size: inherit;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterFont}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterFontBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  
`;

export default GlobalStyles;
