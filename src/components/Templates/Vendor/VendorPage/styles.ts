import styled from 'styled-components'
import VendorPageBase from '@material-ui/core/Container'
import VendorListHeader from 'components/Molecules/Vendor/VendorListHeader'
import VendorListItem from 'components/Molecules/Vendor/VendorListItem'
import media from 'styled-media-query'

export const Wrapper = styled(VendorPageBase)``

export const ListHeader = styled(VendorListHeader)`
  margin: 1rem 0;
`
export const ListItem = styled(VendorListItem)`
  margin: 1rem 0;
`

export const ListWrapper = styled.div`
  margin-top: 1rem;

  ${media.greaterThan('small')`
    margin-top: 3rem;

    ${media.greaterThan('large')`
          margin-top: 10rem;
    `}
  `}
`

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`
export const TitleWrapper = styled.div`
  width: 20rem;
  ${media.lessThan('medium')`
    width: 100%;
    margin: 1rem 0;
  `}
`
export const DropdownWrapper = styled.div`
  width: 50rem;
  ${media.lessThan('medium')`
    width: 100%;
  `}
`
