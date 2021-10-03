/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles' /** S = Styles */
import { Document, Page } from 'react-pdf'
import { useState } from 'react'
import { pdfjs } from 'react-pdf'
import useResponsive from 'components/Helpers/Hooks/useResponsive'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export type PdfViewerProps = {
  file: string
}

const PdfViewer = ({ file }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState(0)

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages)
  }

  const breakPoint = useResponsive()

  const widthByBreak = {
    smallMobile: 265,
    largeMobile: 380,
    tablet: 700,
    desktop: 800
  }

  return (
    <S.Wrapper>
      <Document
        noData="Nenhum arquivo encontrado."
        loading="Carregando PDF..."
        error="Erro ao carregar PDF."
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            noData="Nenhum arquivo encontrado."
            loading="Carregando PDF..."
            error="Erro ao carregar PDF."
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={widthByBreak[breakPoint]}
          />
        ))}
      </Document>
    </S.Wrapper>
  )
}

export default PdfViewer
