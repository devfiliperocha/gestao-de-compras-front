import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'
import Login from 'components/Templates/Login'
import { UserContextProvider, UserContext } from 'contexts/user'

const materialTheme = createTheme(theme)

function App({ Component, pageProps }: AppProps) {
  return (
    <EmotionThemeProvider theme={materialTheme}>
      <MaterialThemeProvider theme={materialTheme}>
        <CssBaseline />
        <StyledThemeProvider theme={theme}>
          <Head>
            <title>JP Gestão de Compras</title>
            <link rel="shortcut icon" href="/img/icon-192.png" />
            <link rel="apple-touch-icon" href="/img/icon-192.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="A simple project starter to work with Typescript, React, Next and Styled Components"
            />
          </Head>
          <GlobalStyles />
          <UserContextProvider>
            <UserContext.Consumer>
              {({ isLogged }) => {
                if (isLogged) {
                  return (
                    <AppLeftMenu>
                      <Component {...pageProps} />
                    </AppLeftMenu>
                  )
                } else {
                  return <Login />
                }
              }}
            </UserContext.Consumer>
          </UserContextProvider>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </EmotionThemeProvider>
  )
}
export default App
