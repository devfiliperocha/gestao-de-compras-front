import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import { Snackbar } from '@material-ui/core'
import { UserContextProvider } from 'contexts/user'
import { AppContext, AppContextProvider } from 'contexts/app'
import React from 'react'
import GlobalLoading from 'components/Atoms/GlobalLoading'
//import Alert from 'components/Atoms/Alert'
import { Alert } from '@material-ui/core'

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
          <AppContextProvider>
            <AppContext.Consumer>
              {({
                isGlobalLoading,
                hasGlobalMessage,
                setGlobalMessage,
                globalMessage
              }) => (
                <>
                  {isGlobalLoading && (
                    <GlobalLoading size={45} variant="accent" />
                  )}
                  {hasGlobalMessage && (
                    <Snackbar
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      open
                      autoHideDuration={6000}
                      onClose={() => setGlobalMessage(null)}
                    >
                      <Alert
                        severity={globalMessage?.type || 'info'}
                        sx={{ width: '100%' }}
                      >
                        {globalMessage?.text}
                      </Alert>
                    </Snackbar>
                  )}
                </>
              )}
            </AppContext.Consumer>
            <UserContextProvider>
              <Component {...pageProps} />
            </UserContextProvider>
          </AppContextProvider>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </EmotionThemeProvider>
  )
}
export default App
