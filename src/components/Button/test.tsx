import { PlayArrow } from '@material-ui/icons'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Button from '.'

describe('<Button/>', () => {
  it('should render primary variant by default', () => {
    renderWithTheme(<Button>Button</Button>)
    const button = screen.getByRole('button', { name: /Button/i })
    expect(button).toHaveClass('MuiButton-contained')
    expect(button).toHaveClass('MuiButton-containedPrimary')
  })

  it('should render left icon if passed', () => {
    renderWithTheme(
      <Button iconLeft={<PlayArrow data-testid="icon" />}>Button</Button>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
  it('should render right icon if passed', () => {
    renderWithTheme(
      <Button iconRight={<PlayArrow data-testid="icon" />}>Button</Button>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should fire click event on click', () => {
    const handleClick = jest.fn()
    renderWithTheme(<Button onClick={handleClick}>Button</Button>)
    const component = screen.getByRole('button')
    fireEvent.click(component)
    expect(handleClick).toBeCalledTimes(1)
  })
})
