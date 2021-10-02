/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components'
import IconBase from '@material-ui/core/SvgIcon'

const wrapperModifiers: any = {
  primary: () => css`
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  secondary: () => css`
    color: ${({ theme }) => theme.palette.secondary.main};
  `,
  accent: () => css`
    color: ${({ theme }) => theme.palette.accent.main};
  `,
  info: () => css`
    color: ${({ theme }) => theme.palette.info.main};
  `,
  error: () => css`
    color: ${({ theme }) => theme.palette.error.main};
  `,
  warning: () => css`
    color: ${({ theme }) => theme.palette.warning.main};
  `,
  success: () => css`
    color: ${({ theme }) => theme.palette.success.main};
  `,
  white: () => css`
    color: ${({ theme }) => theme.palette.common.white};
  `,
  grey: () => css`
    color: ${({ theme }) => theme.palette.text.secondary};
  `
}

export const Wrapper = styled(IconBase)`
  ${({ htmlColor }) => css`
    cursor: pointer;
    ${!!htmlColor && wrapperModifiers[htmlColor]}
  `}
`
