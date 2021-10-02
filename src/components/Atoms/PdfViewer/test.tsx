import { screen, render } from '@testing-library/react'
import PdfViewer from '.'

describe('<PdfViewer/>', () => {
  it('should render the PdfViewer', () => {
    const { container } = render(<PdfViewer />)
    expect(screen.getByRole('pdfviewer')).toBeInTheDocument()
  })
})
