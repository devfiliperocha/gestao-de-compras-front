import styled from 'styled-components'
import ModalBase from '@material-ui/core/Dialog'
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import Icon from 'components/Atoms/Icon'

export const Wrapper = styled(ModalBase)``
export const ActionWrapper = styled(DialogActions)`
  && {
    display: flex;
    justify-content: center;
    padding: 50px;
  }
`
export const ContentWrapper = styled(DialogContent)`
  && {
    border-radius: 0;
    padding: 0;
  }
`

export const TitleWrapper = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
`

export const IconWrapper = styled(Icon)`
  cursor: pointer;
`
