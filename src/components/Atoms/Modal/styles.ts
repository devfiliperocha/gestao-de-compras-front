import styled from 'styled-components'
import ModalBase from '@material-ui/core/Dialog'
import { DialogActions, DialogContent } from '@material-ui/core'
import Icon from 'components/Atoms/Icon'

export const Wrapper = styled(ModalBase)`
  h3,
  h5 {
    font-weight: bold;
  }
`
export const ActionWrapper = styled(DialogActions)`
  && {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }
`
export const ContentWrapper = styled(DialogContent)`
  && {
    border-radius: 0;
    padding: 0;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`

export const IconWrapper = styled(Icon)`
  cursor: pointer;
`
