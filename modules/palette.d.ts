import '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    secondary: string
  }
  interface Palette {
    accent: Palette['primary']
    background: TypeBackground
  }
  interface PaletteOptions {
    accent: PaletteOptions['primary']
    background?: Partial<TypeBackground>
  }
}
