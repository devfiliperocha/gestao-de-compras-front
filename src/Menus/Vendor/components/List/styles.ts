import styled from 'styled-components'
import VendorPageBase from '@material-ui/core/Container'
import VendorListHeader from '../ListHeader'
import VendorListItem from '../ListItem'
import media from 'styled-media-query'

export const Wrapper = styled(VendorPageBase)``

export const ListHeader = styled(VendorListHeader)`
  margin: 1rem 0;
`
export const ListItem = styled(VendorListItem)`
  margin: 1rem 0;
`
export const ListWrapper = styled.div``

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  ${media.greaterThan('small')`
    margin-bottom: 3rem;

    ${media.greaterThan('large')`
          margin-bottom: 10rem;
    `}
  `}
`
export const TitleWrapper = styled.div`
  width: 20rem;
  ${media.lessThan('medium')`
    width: 100%;
    margin: 1rem 0;
  `}
`

export const Actions = styled.div`
  padding: 1rem;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  gap: 1rem;
`
export const DropdownWrapper = styled.div`
  width: 50rem;
  ${media.lessThan('medium')`
    width: 100%;
  `}
`
