const custom = {
  grid: {
    container: '108.5rem',
    gutter: '1.9rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xsmall: '1.0rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem',
      xxxlarge: '3.8rem'
    }
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
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
}

const material = {
  palette: {
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
      contrastText: '#1D1D1D'
    },
    error: {
      light: '#ff7a5d',
      main: '#f54531',
      dark: '#ba0005',
      contrastText: '#1D1D1D'
    },
    warning: {
      light: '#fffbb0',
      main: '#efc880',
      dark: '#bb9752',
      contrastText: '#1D1D1D'
    },
    info: {
      light: '#ff7a5d',
      main: '#f54531',
      dark: '#ba0005',
      contrastText: '#1D1D1D'
    },
    success: {
      light: '#6ee698',
      main: '#36B369',
      dark: '#00823d',
      contrastText: '#1D1D1D'
    },
    text: {
      primary: '#1D1D1D',
      secondary: '#656565'
    },
    divider: '#204372',
    background: {
      paper: '#FCFCFC',
      default: '#F1F1F1'
    },
    common: {
      white: '#FCFCFC',
      black: '#1D1D1D'
    }
  },
  shape: { borderRadius: custom.border.radius },
  typography: {
    htmlFontSize: custom.font.sizes.medium,
    fontFamily: custom.font.family,
    fontSize: custom.font.sizes.small,
    fontWeightRegular: custom.font.normal,
    fontWeightMedium: custom.font.medium,
    fontWeightBold: custom.font.bold,
    h1: {
      fontWeight: custom.font.bold,
      fontSize: custom.font.sizes.xxxlarge,
      lineHeight: 1.167,
      letterSpacing: '-0.01562em'
    },
    h2: {
      fontWeight: custom.font.medium,
      fontSize: custom.font.sizes.xxlarge,
      lineHeight: 1.2,
      letterSpacing: '-0.00833em'
    },
    h3: {
      fontWeight: custom.font.normal,
      fontSize: custom.font.sizes.xlarge,
      lineHeight: 1.167,
      letterSpacing: '0em'
    },
    h4: {
      fontWeight: custom.font.normal,
      fontSize: custom.font.sizes.large,
      lineHeight: 1.235,
      letterSpacing: '0.00735em'
    },
    subtitle1: {
      fontWeight: custom.font.normal,
      fontSize: custom.font.sizes.small,
      lineHeight: 1.75,
      letterSpacing: '0.00938em'
    },
    body1: {
      fontWeight: custom.font.normal,
      fontSize: custom.font.sizes.large,
      lineHeight: 1.5,
      letterSpacing: '0.00938em'
    },
    body2: {
      fontWeight: custom.font.normal,
      fontSize: custom.font.sizes.small,
      lineHeight: 1.43,
      letterSpacing: '0.01071em'
    },
    button: {
      fontWeight: custom.font.medium,
      fontSize: custom.font.sizes.medium,
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase'
    },
    caption: {
      fontWeight: custom.font.normal,
      fontSize: custom.font.sizes.xsmall,
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
    },
    overline: {
      fontWeight: custom.font.normal,
      fontSize: custom.font.sizes.xsmall,
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase'
    }
  },
  ...custom
}
export default material
