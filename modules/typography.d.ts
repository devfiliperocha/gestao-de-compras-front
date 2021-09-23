import '@material-ui/core/styles/createTypography'

declare module '@material-ui/core/styles/createTypography' {
  interface DefaultTypographySizes {
    xsmall: string
    small: string
    medium: string
    large: string
    xlarge: string
    xxlarge: string
    xxxlarge: string
  }

  interface FontStyle {
    defaultSizes: DefaultTypographySizes
  }

  interface TypographyOptions {
    h1_mobile: TypographyStyle
  }
}
