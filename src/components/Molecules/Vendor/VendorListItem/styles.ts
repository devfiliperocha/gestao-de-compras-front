import styled, { css } from 'styled-components'
import VendorListItemBase from 'components/Atoms/ListItem'
import media from 'styled-media-query'

export const Wrapper = styled(VendorListItemBase)``
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const StatusWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.large};
    button {
      font-size: 12px;
    }
    ${media.greaterThan('medium')`
      width: 25rem;
    `}
  `}
`
export const ShowWrapper = styled.div``
export const ActionWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`
