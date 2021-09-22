import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import TextField from '.'
import userEvent from '@testing-library/user-event'

describe('<TextField/>', () => {
  it('should render the TextField', () => {
    renderWithTheme(<TextField />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should set value if passed', () => {
    renderWithTheme(<TextField value="TESTE" />)
    expect(screen.getByRole('textbox')).toHaveValue('TESTE')
  })
  it('should fire onChange event on change Input', async () => {
    const handleInput = jest.fn()
    renderWithTheme(<TextField onChange={handleInput} />)
    const component = screen.getByRole('textbox')
    await userEvent.type(component, 'TESTE')

    expect(handleInput).toHaveBeenCalledTimes(5)
    expect(component).toHaveValue('TESTE')
  })
})
