import styled, { css } from 'styled-components'
import ProgressBarBase from '@material-ui/core/LinearProgress'

export const Wrapper = styled(ProgressBarBase)`
  ${({ theme }) => css`
    border-radius: ${theme.shape.borderRadius};
    background-color: ${theme.palette.background.secondary};
  `}
`
