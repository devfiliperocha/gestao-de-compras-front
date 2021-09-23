import styled, { css } from 'styled-components'
import SwitchBase from '@material-ui/core/Switch'

export const Wrapper = styled(SwitchBase)`
  ${({ theme }) => css`
    && {
      & .MuiSwitch-track {
        background-color: ${theme.palette.background.secondary};
      }
      & .Mui-checked + .MuiSwitch-track {
        background-color: ${theme.palette.background.secondary};
      }
    }
  `}
`
