import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Switch from '.'

describe('<Switch/>', () => {
  it('should render the Switch not checked by default', () => {
    renderWithTheme(<Switch />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('checked')
  })
  it('should check switch if checked is passed', () => {
    renderWithTheme(<Switch checked={true} />)
    expect(screen.getByRole('checkbox')).toHaveAttribute('checked')
  })
  it('should fire onChange event on change Switch', () => {
    const handleCheck = jest.fn()
    renderWithTheme(<Switch onChange={handleCheck} />)
    const component = screen.getByRole('checkbox')
    fireEvent.click(component)

    expect(handleCheck).toHaveBeenCalledTimes(1)
  })
})
