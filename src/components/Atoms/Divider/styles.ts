import styled, { css } from 'styled-components'
import DividerBase from '@material-ui/core/Divider'

const wrapperModifiers = {
  light: () => css`
    border: none;
    border-top: thin solid ${({ theme }) => theme.palette.accent.main};
  `
}

export const Wrapper = styled(DividerBase)`
  ${({ light }) => css`
    && {
      ${light && wrapperModifiers.light}
    }
  `}
`
