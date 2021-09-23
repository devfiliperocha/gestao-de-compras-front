import '@material-ui/core/styles/createTheme'

declare module '@material-ui/core/styles/createTheme' {
  interface DefaultSpacings {
    xxsmall: string
    xsmall: string
    small: string
    medium: string
    large: string
    xlarge: string
    xxlarge: string
    xxxlarge: string
  }

  interface Theme {
    spacings: DefaultSpacings
    grid: {
      container: string
      gutter: string
    }
  }
  interface ThemeOptions {
    spacings: DefaultSpacings
    grid: {
      container: string
      gutter: string
    }
  }
}
