import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Radio from '.'

describe('<Radio/>', () => {
  it('should render the Radio  not checked by default', () => {
    renderWithTheme(<Radio />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByRole('radio')).not.toHaveAttribute('checked')
  })

  it('should check Radio if checked is passed', () => {
    renderWithTheme(<Radio checked={true} />)
    expect(screen.getByRole('radio')).toHaveAttribute('checked')
  })
  it('should fire onChange event on change Radio', () => {
    const handleCheck = jest.fn()
    renderWithTheme(<Radio onChange={handleCheck} />)
    const component = screen.getByRole('radio')
    fireEvent.click(component)

    expect(handleCheck).toHaveBeenCalledTimes(1)
  })
})
