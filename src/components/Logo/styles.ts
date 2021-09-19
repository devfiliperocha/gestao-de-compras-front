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
    color: ${({ theme }) => theme.colors.primary};
  `,
  light: () => css`
    color: ${({ theme }) => theme.colors.white};
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
