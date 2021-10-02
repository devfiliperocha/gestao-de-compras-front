import * as S from './styles' /** S = Styles */
import Button from 'components/Atoms/Button'
import Typography from 'components/Atoms/Typography'
import { Vendors } from 'types/vendors'
import Status from 'components/Molecules/Status'
import React, { useState } from 'react'
import Modal from 'components/Atoms/Modal'
import PdfViewer from 'components/Atoms/PdfViewer'
import { Container } from '@material-ui/core'

export type VendorAprovationHeaderProps = {
  vendor: Vendors
  showAction?: boolean
  onAprove?: (ev: React.SyntheticEvent) => void
  onReject?: (ev: React.SyntheticEvent) => void
}

const VendorAprovationHeader = ({
  vendor,
  showAction = false,
  onAprove,
  onReject,
  ...props
}: VendorAprovationHeaderProps) => {
  const [isDocumentShowing, setIsDocumentShowing] = useState(false)

  const renderByStatus = (
    status: VendorAprovationHeaderProps['vendor']['status']['type']
  ) => {
    switch (status) {
      case 'success':
        return (
          <S.ActionItem>
            <Button onClick={() => setIsDocumentShowing(true)}>
              Visualizar Declaração
            </Button>
          </S.ActionItem>
        )
      case 'error':
        return (
          <>
            <S.ActionItem>
              <Button onClick={onAprove}>Aprovar Cadastro</Button>
            </S.ActionItem>
          </>
        )
      default:
        return (
          <>
            <S.ActionItem>
              <Button onClick={onReject} variant="outlined" color="error">
                Rejeitar Cadastro
              </Button>
            </S.ActionItem>
            <S.ActionItem>
              <Button onClick={onAprove}>Aprovar Cadastro</Button>
            </S.ActionItem>
          </>
        )
    }
  }

  return (
    <S.Wrapper {...props}>
      <Typography color="primary" variant="h3">
        {vendor.corporateName}
      </Typography>

      <S.StatusWrapper>
        <Status type={vendor.status.type} text={vendor.status.text} />
      </S.StatusWrapper>

      <S.ActionWrapper>
        {showAction && renderByStatus(vendor.status?.type)}
        <Modal
          title="Declaração do Fornecedor"
          open={isDocumentShowing}
          onClose={() => setIsDocumentShowing(false)}
        >
          <Container maxWidth="lg">
            <PdfViewer file={vendor.declaration?.file || ''} />
          </Container>
        </Modal>
      </S.ActionWrapper>
    </S.Wrapper>
  )
}

export default VendorAprovationHeader
