import PdfViewer, { PdfViewerProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Container } from '@material-ui/core'

export default {
  title: 'PdfViewer',
  component: PdfViewer,
  args: {
    file: 'http://localhost:3000/pdf-test.pdf'
  }
} as Meta

export const Basic: Story<PdfViewerProps> = (args) => {
  return (
    <Container maxWidth="lg">
      <PdfViewer {...args} />
    </Container>
  )
}
