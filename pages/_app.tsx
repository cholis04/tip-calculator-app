import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

// Font Source
import '@fontsource/space-mono';

// Global Style
export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Space Mono";
    background-color:hsl(185, 41%, 84%);
  }
  img {
    display: block;
    max-width: 100%;
  }
  a {
    text-decoration: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
