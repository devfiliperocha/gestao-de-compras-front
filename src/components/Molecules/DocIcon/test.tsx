import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import DocIcon from '.'

describe('<DocIcon/>', () => {
  it('should render the DocIcon', () => {
    renderWithTheme(
      <DocIcon
        variant="success"
        fileName="Teste"
        file=""
        expirationDate="21/12/2021"
      />
    )
    expect(screen.getByRole('docviewer')).toBeInTheDocument()
  })
})
