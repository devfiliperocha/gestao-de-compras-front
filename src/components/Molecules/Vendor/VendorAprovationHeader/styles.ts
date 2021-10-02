import styled from 'styled-components'
import VendorAprovationHeaderBase from 'components/Atoms/ListItem'
import media from 'styled-media-query'

export const Wrapper = styled(VendorAprovationHeaderBase)`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`
export const ActionItem = styled.div`
  && {
    margin-left: 1rem;
    ${media.lessThan('large')`
        margin: 0.3rem;
    `}
  }
`
export const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${media.lessThan('medium')`
  flex-grow:1;
`}
`

export const StatusWrapper = styled.div`
  width: 25rem;
  padding: 0;
`
