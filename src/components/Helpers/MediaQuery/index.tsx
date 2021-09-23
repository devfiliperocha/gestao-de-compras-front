import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoints = keyof DefaultBreakpoints

export type MediaProps = {
  lessThan?: breakpoints
  greaterThan?: breakpoints
}

const mediaModifiers = {
  lessThan: (size: breakpoints) => css`
    ${media.lessThan(size)`display:block`}
  `,
  greaterThan: (size: breakpoints) => css`
    ${media.greaterThan(size)`display:block`}
  `
}

const MediaQuery = styled.div<MediaProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaModifiers.greaterThan(greaterThan)}
  `}
`

export default MediaQuery
