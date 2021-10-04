const fontSizes = {
  xsmall: '1.0rem',
  small: '1.4rem',
  medium: '1.6rem',
  large: '1.8rem',
  xlarge: '2.0rem',
  xxlarge: '2.6rem',
  xxxlarge: '3.8rem'
}
const fontWeights = {
  normal: 400,
  medium: 500,
  bold: 700
}

const material = {
  palette: {
    contrastThreshold: 5,
    primary: {
      light: '#526ea1',
      main: '#204372',
      dark: '#001d46',
      contrastText: '#FCFCFC'
    },
    secondary: {
      light: '#77c9fa',
      main: '#3e98c7',
      dark: '#006a96',
      contrastText: '#FCFCFC'
    },
    action: {
      hover: '#204372'
    },
    accent: {
      light: '#ffd952',
      main: '#f5a818',
      dark: '#bd7900',
      contrastText: '#FCFCFC'
    },
    error: {
      light: '#ff7a5d',
      main: '#f54531',
      dark: '#ba0005',
      contrastText: '#FCFCFC'
    },
    info: {
      light: '#5eb8ff',
      main: '#0288d1',
      dark: '#005b9f',
      contrastText: '#FCFCFC'
    },
    warning: {
      light: '#fffbb0',
      main: '#efc880',
      dark: '#bb9752',
      contrastText: '#886926'
    },
    success: {
      light: '#6ee698',
      main: '#36B369',
      dark: '#00823d',
      contrastText: '#FCFCFC'
    },
    text: {
      primary: '#1D1D1D',
      secondary: '#656565'
    },
    divider: '#204372',
    background: {
      paper: '#FCFCFC',
      default: '#F1F1F1',
      secondary: '#DEDEDE'
    },
    common: {
      white: '#FCFCFC',
      black: '#1D1D1D'
    }
  },
  grid: {
    container: '108.5rem',
    gutter: '1.9rem'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '5.6rem'
  },
  shape: { borderRadius: '0.4rem' },
  typography: {
    fontFamily:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontWeightRegular: fontWeights.normal,
    fontWeightMedium: fontWeights.medium,
    fontWeightBold: fontWeights.bold,
    defaultSizes: fontSizes,
    h1: {
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.xxxlarge,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em'
    },
    h1_mobile: {
      fontWeight: fontWeights.medium,
      fontSize: fontSizes.xxlarge,
      lineHeight: 1.2,
      letterSpacing: '-0.00833em'
    },
    h2: {
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.xxlarge,
      lineHeight: 1.167,
      letterSpacing: '0em'
    },
    h3: {
      fontWeight: fontWeights.normal,
      fontSize: fontSizes.large,
      lineHeight: 1.235,
      letterSpacing: '0.00735em'
    },
    subtitle1: {
      fontWeight: fontWeights.normal,
      fontSize: fontSizes.small,
      lineHeight: 1.75,
      letterSpacing: '0.00938em'
    },
    body1: {
      fontWeight: fontWeights.normal,
      fontSize: fontSizes.large,
      lineHeight: 1.5,
      letterSpacing: '0.00938em'
    },
    body2: {
      fontWeight: fontWeights.normal,
      fontSize: fontSizes.small,
      lineHeight: 1.43,
      letterSpacing: '0.01071em'
    },
    button: {
      fontWeight: fontWeights.medium,
      fontSize: fontSizes.medium,
      lineHeight: 1.75,
      letterSpacing: '0.02857em'
    },
    caption: {
      fontWeight: fontWeights.normal,
      fontSize: fontSizes.xsmall,
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
    },
    overline: {
      fontWeight: fontWeights.normal,
      fontSize: fontSizes.xsmall,
      lineHeight: 2.66,
      letterSpacing: '0.08333em'
    }
  }
}
export default material
