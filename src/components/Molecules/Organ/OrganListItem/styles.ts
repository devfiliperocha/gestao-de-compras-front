import styled from 'styled-components'
import OrganListItemBase from 'components/Atoms/ListItem'
import media from 'styled-media-query'

export const Wrapper = styled(OrganListItemBase)`
  display: flex;
  justify-content: space-between;
`
export const TitleWrapper = styled.div`
  ${media.lessThan('medium')`
    width: 100%;
  `}
`
export const StatusWrapper = styled.div`
  width: 25rem;
  padding: 0;
`
export const ShowWrapper = styled.div``
export const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${media.lessThan('medium')`
    flex-grow:1;
  `}
`
