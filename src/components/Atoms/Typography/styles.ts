import styled, { css } from 'styled-components'
import TypographyBase from '@material-ui/core/Typography'

export const Wrapper = styled(TypographyBase)`
  ${({ theme, color }) => css`
    word-break: break-all;
    ${color === 'accent' &&
    css`
      color: ${theme.palette.accent.main};
    `}
    ${color === 'info' &&
    css`
      color: ${theme.palette.info.main};
    `}

    ${color === 'dark' &&
    css`
      color: ${theme.palette.common.black};
    `}

    ${color === 'light' &&
    css`
      color: ${theme.palette.common.white};
    `}
  `}
`
