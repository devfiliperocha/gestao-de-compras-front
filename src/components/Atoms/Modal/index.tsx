import React, { useEffect, useState } from 'react'
import Typography from 'components/Atoms/Typography'
import * as S from './styles' /** S = Styles */
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core'

export type ModalProps = {
  children: React.ReactNode
  open: boolean
  title?: React.ReactNode
  action?: React.ReactNode | React.ReactNode[]
  onClose?: (event: React.SyntheticEvent) => void
}

const Modal = ({
  open = false,
  children,
  title = 'Modal',
  action,
  onClose = () => null
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()

  const md = useMediaQuery(theme.breakpoints.only('md'))
  const sm = useMediaQuery(theme.breakpoints.only('sm'))

  const smallMobile = useMediaQuery(
    `@media (min-width:0px) and (max-width:320px)`
  )
  const largeMobile = useMediaQuery(
    `@media (min-width:321px) and (max-width:414px)`
  )

  const fullScreen = smallMobile || largeMobile || sm

  const closeDialog = (event: React.SyntheticEvent) => {
    setIsOpen(false)
    onClose(event)
  }

  useEffect(() => {
    setIsOpen(isOpen)
  }, [isOpen])

  return (
    <S.Wrapper
      fullScreen={fullScreen}
      fullWidth={md}
      maxWidth="md"
      open={open}
      onClose={closeDialog}
    >
      <S.TitleWrapper>
        <Typography variant={md || sm ? 'h1' : 'h3'} color="secondary">
          {title}
        </Typography>
        <S.IconWrapper name="Dismiss" onClick={closeDialog} />
      </S.TitleWrapper>
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <S.ActionWrapper>{action}</S.ActionWrapper>
    </S.Wrapper>
  )
}

export default Modal
