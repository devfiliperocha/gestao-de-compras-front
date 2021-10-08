import * as S from './styles' /** S = Styles */
import React, { useState } from 'react'
import Icon from 'components/Atoms/Icon'
import { File } from 'types/file'
import Typography from 'components/Atoms/Typography'
import Modal from 'components/Atoms/Modal'
import StatusBadge from 'components/Atoms/StatusBadge'
import PdfViewer from 'components/Atoms/PdfViewer'
import { Container } from '@material-ui/core'
import Button from 'components/Atoms/Button'
import { Docs } from 'types/utils'

export type DocIconProps = {
  docData?: File
  docName?: Docs
  fileName?: string
  onUpdateDoc: (field: Docs, value: File) => void
}

const DocIcon = ({
  docData = {} as File,
  fileName = 'Teste',
  docName = 'corporateDocPdf',
  onUpdateDoc
}: DocIconProps) => {
  const [isDocumentShowing, setIsDocumentShowing] = useState(false)

  const icon = docData ? 'DocumentPdf' : 'DocumentQuestionMark'

  const AproveReproveActions = () => {
    return (
      <>
        <Button
          onClick={() =>
            onUpdateDoc(docName, {
              status: { text: '', type: 'error' }
            })
          }
          variant="outlined"
          color="error"
        >
          Rejeitar Documento
        </Button>
        <Button
          onClick={() =>
            onUpdateDoc(docName, {
              status: { text: '', type: 'success' }
            })
          }
        >
          Aprovar Documento
        </Button>
      </>
    )
  }

  return (
    <S.Wrapper>
      <StatusBadge
        status={docData ? docData?.status?.type : undefined}
        onClick={() => setIsDocumentShowing(!!docData)}
      >
        <Icon
          type="regular"
          size={40}
          name={icon}
          variant={docData ? 'grey' : 'warning'}
        />
      </StatusBadge>

      <Typography variant="caption" color="info">
        {fileName}
      </Typography>
      <Typography variant="overline" color="accent">
        {docData?.expirationDate}
      </Typography>

      {docData && (
        <Modal
          title={fileName}
          open={isDocumentShowing}
          onClose={() => setIsDocumentShowing(false)}
          action={AproveReproveActions()}
        >
          <Container maxWidth="lg">
            <PdfViewer file={docData?.file?.url || ''} />
          </Container>
        </Modal>
      )}
    </S.Wrapper>
  )
}

export default DocIcon
