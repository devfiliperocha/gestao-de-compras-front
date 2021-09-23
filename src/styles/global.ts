import { createGlobalStyle, css } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/Poppins-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Poppins Bold'), local('Poppins-Bold'),
        url('/fonts/Poppins-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins Medium'), local('Poppins-Medium'),
        url('/fonts/Poppins-Medium.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.typography.fontFamily};
      font-size: ${theme.typography.htmlFontSize};
    }
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${theme.palette.background.secondary};
      border-radius: 100px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${theme.palette.primary.main};
      border-radius: 100px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.palette.primary.dark};
    }
  `}

`
export default GlobalStyles
