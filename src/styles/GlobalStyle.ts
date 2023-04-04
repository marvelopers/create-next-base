import { css } from '@emotion/react';

export const inheritFont = css`
  color: inherit;
  letter-spacing: inherit;
  font-family: inherit;
`;

export const resetAppearance = css`
  appearance: none;
  background: none;
  box-shadow: none;
  border: 0;
  border-radius: 0;
`;

export const resetSpacing = css`
  margin: 0;
  padding: 0;
`;

export const a11y = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  border-radius: 0;
  clip: rect(0, 0, 0, 0);
`;

export const resetFont = css`
  font-weight: 400;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const GlobalStyle = css`
  html {
    ${css([resetSpacing, resetFont])};
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-size: 10px;
    line-height: 1.6;
  }
  body {
    ${css([resetSpacing])};
    overflow-x: hidden;
  }
  hr {
    ${css([resetSpacing])};
  }
  p {
    ${css([resetSpacing])};
  }
  button {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${css([inheritFont, resetAppearance, resetSpacing])};
    * {
      position: relative;
    }
    &:focus {
      outline: none;
    }
  }
  input {
    ${inheritFont};
    ${resetAppearance};
    ${resetSpacing};
    &::-ms-clear {
      display: none;
    }
    &::-webkit-search-cancel-button {
      display: none;
    }
    &:focus {
      outline: none;
    }
  }
  ul {
    list-style-type: none;
    ${css([resetSpacing])};
  }
  li {
    line-height: initial;
  }
  em {
    font-style: normal;
  }
  a {
    ${inheritFont};
    &:link,
    &:visited {
      text-decoration: none;
    }
    cursor: pointer;
  }
  h1,
  h2,
  h3,
  h4,
  button,
  input,
  p,
  span {
    letter-spacing: -0.02em;
  }
  * {
    .a11y {
      ${css([a11y])};
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -ms-overflow-style: none;
    font-size: inherit;
  }
  *:focus {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
  #__next {
    width: 100%;
    height: 100vh;
    box-sizing: content-box;
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    /* padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom); */
  }
`;

export default GlobalStyle;
