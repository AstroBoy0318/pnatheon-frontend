import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pantheon-org/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: inherit;
    letter-spacing: 0.1em !important;
  }
  @font-face {
    font-family: "SQPR";
    src: url(/fonts/poly/sqpr.ttf);
  } 
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(images/back.png), url(images/back.png);
    background-position: right top, left top;
    background-size: auto calc(100% - 58px), auto calc(100% - 58px);
    background-attachment: fixed;
    background-repeat: no-repeat, no-repeat;
    font-family: SQPR;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
