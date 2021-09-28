import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;

    border-radius: 0.8rem;
    background: ${theme.palette.common.white} 0% 0% no-repeat padding-box;
    box-shadow: 0px 0.3rem 0.6rem #00000029;
    border-radius: 0.8rem;
    opacity: 1;
    height: 8.2rem;
    padding: 0 ${theme.spacings.xsmall};
    margin: ${theme.spacings.xxsmall} 0;
    ${media.lessThan('large')`
        height: 6rem;
      `}
    ${media.lessThan('medium')`
        height: 5rem;
      `}
    && {
    }
  `}
`
