import styled, { css } from 'styled-components'
import IconBase from '@material-ui/core/Icon'

export const Wrapper = styled(IconBase)`
  ${({ theme }) => css`
    &.MuiIcon-colorAccent {
      color: ${theme.palette.accent.main};
    }
  `}
`
