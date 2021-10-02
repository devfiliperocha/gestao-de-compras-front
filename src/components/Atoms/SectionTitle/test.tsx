import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import SectionTitle from '.'

describe('<SectionTitle/>', () => {
  it('should render the SectionTitle', () => {
    renderWithTheme(<SectionTitle>TESTE</SectionTitle>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
