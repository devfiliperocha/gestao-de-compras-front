import * as S from './styles' /** S = Styles */
import React, { useState } from 'react'
import Icon from 'components/Atoms/Icon'
import { File } from 'types/file'
import Typography from 'components/Atoms/Typography'
import Modal from 'components/Atoms/Modal'
import StatusBadge from 'components/Atoms/StatusBadge'
import PdfViewer from 'components/Atoms/PdfViewer'
import { Container } from '@material-ui/core'

export type DocIconProps = {
  variant?: 'error' | 'success' | 'warning' | undefined
  fileName: string
} & File

const DocIcon = ({
  variant = undefined,
  file,
  fileName,
  expirationDate
}: DocIconProps) => {
  const [isDocumentShowing, setIsDocumentShowing] = useState(false)

  const icon = file ? 'DocumentPdf' : 'DocumentQuestionMark'

  return (
    <S.Wrapper>
      <StatusBadge
        status={file ? variant : undefined}
        onClick={() => setIsDocumentShowing(!!file)}
      >
        <Icon
          type="regular"
          size={40}
          name={icon}
          variant={file ? 'grey' : 'warning'}
        />
      </StatusBadge>

      <Typography variant="caption" color="info">
        {fileName}
      </Typography>
      <Typography variant="overline" color="accent">
        {expirationDate}
      </Typography>

      {file && (
        <Modal
          title={fileName}
          open={isDocumentShowing}
          onClose={() => setIsDocumentShowing(false)}
        >
          <Container maxWidth="lg">
            <PdfViewer file={file} />
          </Container>
        </Modal>
      )}
    </S.Wrapper>
  )
}

export default DocIcon
