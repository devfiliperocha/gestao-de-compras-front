import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'

export const Wrapper = styled(Button)`
  ${({ theme, color }) => css`
    ${color === 'warning' &&
    css`
      color: ${theme.palette.accent.main};
    `}
  `}
`
