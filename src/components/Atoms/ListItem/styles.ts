import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 0.8rem;
    background: ${theme.palette.common.white} 0% 0% no-repeat padding-box;
    box-shadow: 0px 0.3rem 0.6rem #00000029;
    border-radius: 0.8rem;
    opacity: 1;
    height: auto;
    padding: 2.1rem 1.8rem;
    margin: ${theme.spacings.xxsmall} 0;
    ${media.lessThan('large')`
      padding: 2rem 1.5rem;
    `}
    ${media.lessThan('medium')`
      padding: 1rem 1rem;
    `}
    h5, h3 {
      font-weight: bold;
    }
  `}
`
