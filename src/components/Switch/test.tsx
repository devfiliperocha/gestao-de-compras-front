import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Switch from '.'

describe('<Switch/>', () => {
  it('should render the Switch', () => {
    renderWithTheme(<Switch />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
