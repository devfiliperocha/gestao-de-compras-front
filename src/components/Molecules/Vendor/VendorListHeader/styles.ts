import styled, { css } from 'styled-components'
import VendorListHeaderBase from 'components/Atoms/ListItem'
import media from 'styled-media-query'

export const Wrapper = styled(VendorListHeaderBase)`
  display: flex;
  justify-content: space-between;
  && {
    border-radius: none;
    background: transparent;
    box-shadow: none;
    opacity: 1;
    height: 5.2rem;
  }
`
export const ColumnOneWrapper = styled.div``
export const ColumnTwoWrapper = styled.div`
  width: 25rem;
  padding: 0;
  ${media.lessThan('medium')`
    width: auto;
  `}
`
export const InvisibleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${({ theme }) => css`
    color: transparent;
    margin-left: ${theme.spacings.large};

    ${media.lessThan('medium')`
      display:none;
    `}
  `}
`
