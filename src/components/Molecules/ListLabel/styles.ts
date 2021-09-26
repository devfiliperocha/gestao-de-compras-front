import styled from 'styled-components'
import ListLabelBase from '@material-ui/core/Box'
import media from 'styled-media-query'

export const Wrapper = styled(ListLabelBase)`
  width: 100%;
  padding: 0;
  flex-grow: 1;
  && {
    align-items: left;
    opacity: 1;
    height: 5rem;
    padding-top: 2.1rem;
    padding-bottom: 2.1rem;
    padding-left: 2.6rem;
    padding-right: 2.6rem;
    margin: 0;
    ${media.lessThan('large')`
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
      `}
    ${media.lessThan('medium')`
        padding-top: 1.1rem;
        padding-bottom: 1.1rem;
        padding-left: 1rem;
        padding-right: 1rem;
      `}
  }
`
