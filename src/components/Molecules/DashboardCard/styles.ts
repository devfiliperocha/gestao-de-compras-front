import styled, { css } from 'styled-components'
import DashboardCardBase from '@material-ui/core/Card'

export const Wrapper = styled(DashboardCardBase)`
  ${({ theme }) => css`
    text-align: center;
    padding: 0;
    && {
      border-radius: 0.8rem;
      background: ${theme.palette.common.white} 0% 0% no-repeat padding-box;
      box-shadow: 0px 0.3rem 0.6rem #00000029;
      border-radius: 0.8rem;
      opacity: 1;
      width: 20rem;
      height: 20rem;
      padding-top: 4.1rem;
      padding-bottom: 4.1rem;
      padding-left: 2.1rem;
      padding-right: 2.1rem;
      margin: 0;
    }
  `}
`
