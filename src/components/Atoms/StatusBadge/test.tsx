import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import StatusBadge from '.'

describe('<Badge/>', () => {
  it('should render the Badge', () => {
    renderWithTheme(<StatusBadge />)
    expect(screen.getByRole('badge')).toBeInTheDocument()
  })
})
