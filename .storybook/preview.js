import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import MaterialThemeProvider from '@material-ui/core/styles/ThemeProvider'
import { createTheme } from '@material-ui/core/styles'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const materialTheme = createTheme(theme)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = (Story, context) => {
  return (
    <EmotionThemeProvider theme={materialTheme}>
      <MaterialThemeProvider theme={materialTheme}>
        <CssBaseline />
        <StyledThemeProvider theme={theme}>
          <GlobalStyles/>
          <Story {...context} />
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </EmotionThemeProvider>
  )
}

export const decorators = [withThemeProvider]

