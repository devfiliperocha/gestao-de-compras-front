import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Checkbox from '.'

describe('<Checkbox/>', () => {
  it('should render the Checkbox  not checked by default', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('checked')
  })

  it('should check Checkbox if checked is passed', () => {
    renderWithTheme(<Checkbox checked={true} />)
    expect(screen.getByRole('checkbox')).toHaveAttribute('checked')
  })
  it('should fire onChange event on change Checkbox', () => {
    const handleCheck = jest.fn()
    renderWithTheme(<Checkbox onChange={handleCheck} />)
    const component = screen.getByRole('checkbox')
    fireEvent.click(component)

    expect(handleCheck).toHaveBeenCalledTimes(1)
  })
})
