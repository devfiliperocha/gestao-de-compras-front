import styled, { css, DefaultTheme } from 'styled-components'
import ButtonBase from '@material-ui/core/Button'

const wrapperModifiers = {
  contained: (theme: DefaultTheme) => css`
    color: ${theme.palette.common.white};
  `
}

export const Wrapper = styled(ButtonBase)`
  ${({ theme, variant }) => css`
    ${variant === 'contained' && wrapperModifiers.contained(theme)}
  `}
`
