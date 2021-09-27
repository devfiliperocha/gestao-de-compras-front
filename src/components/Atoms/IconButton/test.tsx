import { PlayArrow } from '@material-ui/icons'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import IconButton from '.'

describe('<Button/>', () => {
  it('should render the icon button', () => {
    renderWithTheme(
      <IconButton>
        <PlayArrow data-testid="icon" />
      </IconButton>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should fire click event on click', () => {
    const handleClick = jest.fn()
    renderWithTheme(
      <IconButton onClick={handleClick}>
        <PlayArrow data-testid="icon" />
      </IconButton>
    )
    const component = screen.getByRole('button')
    fireEvent.click(component)
    expect(handleClick).toBeCalledTimes(1)
  })
})
