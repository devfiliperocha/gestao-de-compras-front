/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles' /** S = Styles */
import { Document, Page } from 'react-pdf'
import { useState } from 'react'
import { pdfjs } from 'react-pdf'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export type PdfViewerProps = {
  file: string
  width?: number
}

const PdfViewer = ({ file, width = 800 }: PdfViewerProps) => {
  const theme = useTheme()
  const [numPages, setNumPages] = useState(0)

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages)
  }

  const md = useMediaQuery(theme.breakpoints.only('md'))
  const sm = useMediaQuery(theme.breakpoints.only('sm'))

  const smallMobile = useMediaQuery(
    `@media (min-width:0px) and (max-width:320px)`
  )
  const largeMobile = useMediaQuery(
    `@media (min-width:321px) and (max-width:414px)`
  )

  const widthByBreak = smallMobile
    ? 280
    : largeMobile
    ? 400
    : sm
    ? 700
    : md
    ? 800
    : 300

  return (
    <S.Wrapper>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={widthByBreak}
          />
        ))}
      </Document>
    </S.Wrapper>
  )
}

export default PdfViewer
