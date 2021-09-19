import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xsmall};
    border-left: 0.5rem solid ${theme.palette.accent.main};
  `,
  dark: () => css`
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  light: () => css`
    color: ${({ theme }) => theme.palette.secondary.main};
  `
}

export const Wrapper = styled.h1<HeadingProps>`
  ${({ theme, color, lineLeft }) => css`
    ${!!color && wrapperModifiers[color]}
    font-size: ${theme.typography.h1_mobile};

    ${media.greaterThan('medium')`
      font-size: ${theme.typography.h1};
    `}

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
  `}
`
