import styled, { css } from 'styled-components'
import VendorListHeaderBase from 'components/Molecules/ListItem'
import media from 'styled-media-query'

export const Wrapper = styled(VendorListHeaderBase)`
  border-radius: none;
  background: transparent;
  box-shadow: none;
  opacity: 1;
  height: 4.2rem;
`
export const ColumnOneWrapper = styled.div``
export const ColumnTwoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
`
export const InvisibleWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.large};
    width: 26rem;

    ${media.lessThan('large')`
      width: 15rem;
      ${media.lessThan('medium')`
      width: 0.1rem;
      `}
    `}
  `}
`
