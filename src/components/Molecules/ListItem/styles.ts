import styled, { css } from 'styled-components'
import ListItemBase from '@material-ui/core/Paper'
import media from 'styled-media-query'

export const Wrapper = styled(ListItemBase)`
  ${({ theme }) => css`
    width: 100%;
    padding: 0;
    flex-grow: 1;
    align-items: center;
    && {
      border-radius: 0.8rem;
      background: ${theme.palette.common.white} 0% 0% no-repeat padding-box;
      box-shadow: 0px 0.3rem 0.6rem #00000029;
      border-radius: 0.8rem;
      opacity: 1;
      height: 8rem;
      padding-top: 2.1rem;
      padding-bottom: 2.1rem;
      padding-left: 2.6rem;
      padding-right: 2.6rem;
      margin: 0;
      ${media.lessThan('large')`
        height: 6rem;
        padding-top: 1.2rem;
        padding-bottom: 1.5rem;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
      `}
      ${media.lessThan('medium')`
        height: 5rem;
        padding-top: 1.1rem;
        padding-bottom: 1.1rem;
        padding-left: 1rem;
        padding-right: 1rem;
      `}
    }
  `}
`
