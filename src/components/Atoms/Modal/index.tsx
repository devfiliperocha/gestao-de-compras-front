import React, { useEffect, useState } from 'react'
import Typography from 'components/Atoms/Typography'
import * as S from './styles' /** S = Styles */
import useResponsive from 'Hooks/useResponsive'

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

  const breakPoint = useResponsive()

  const closeDialog = (event: React.SyntheticEvent) => {
    setIsOpen(false)
    onClose(event)
  }

  useEffect(() => {
    setIsOpen(isOpen)
  }, [isOpen])

  return (
    <S.Wrapper
      fullScreen={breakPoint !== 'desktop'}
      fullWidth={breakPoint === 'desktop'}
      maxWidth="md"
      open={open}
      onClose={closeDialog}
    >
      <S.TitleWrapper>
        <Typography
          variant={
            breakPoint === 'desktop' || breakPoint === 'tablet' ? 'h3' : 'h5'
          }
          color="secondary"
        >
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
