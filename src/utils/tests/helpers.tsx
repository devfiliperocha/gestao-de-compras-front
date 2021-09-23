import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import { render, RenderResult } from '@testing-library/react'
import { createTheme } from '@material-ui/core/styles'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import React from 'react'

const materialTheme = createTheme(theme)

//Recebe um elemento React, e retorna o elemento renderizado pelo testing-library com o tema
export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <EmotionThemeProvider theme={materialTheme}>
      <MaterialThemeProvider theme={materialTheme}>
        <CssBaseline />
        <StyledThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </EmotionThemeProvider>
  )
