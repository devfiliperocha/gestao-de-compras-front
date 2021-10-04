import { Toolbar } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
`
export const UserCard = styled(Toolbar)`
  ${({ theme }) => css`
    height: 14rem;
    background-color: ${theme.palette.primary.main};
  `}
`
