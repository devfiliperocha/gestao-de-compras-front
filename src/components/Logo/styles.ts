import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 18rem;
  `,
  large: () => css`
    width: 57rem;
  `,
  dark: () => css`
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  light: () => css`
    color: ${({ theme }) => theme.palette.common.white};
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 22rem;
      svg:{
        pointer-events:none;
      }
      .text{
        display:none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ color, size, hideOnMobile }) => css`
    ${!!color && wrapperModifiers[color]}
    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `};
`
