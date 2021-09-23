import '@material-ui/core/Button/Button'

declare module '@material-ui/core/Button/Button' {
  interface ButtonPropsColorOverrides {
    accent: true
  }
}
