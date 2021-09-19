import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xsmall};
    border-left: 0.5rem solid ${theme.colors.accent};
  `,
  dark: () => css`
    color: ${({ theme }) => theme.colors.primary};
  `,
  light: () => css`
    color: ${({ theme }) => theme.colors.secondary};
  `
}

export const Wrapper = styled.h1<HeadingProps>`
  ${({ theme, color, lineLeft }) => css`
    ${!!color && wrapperModifiers[color]}
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxxlarge};
    `}

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
  `}
`
