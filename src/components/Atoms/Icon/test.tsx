import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Icon from '.'

describe('<Icon/>', () => {
  it('should render the Icon', () => {
    renderWithTheme(<Icon name="CameraFront" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByTestId('CameraFrontIcon')).toBeInTheDocument()
  })

  it('should render the Icon with primary color by default', () => {
    renderWithTheme(<Icon name="CameraFront" />)
    expect(screen.getByRole('button')).toHaveClass('MuiIconButton-colorPrimary')
  })

  it('should render the Icon with accent color', () => {
    renderWithTheme(<Icon name="CameraFront" variant="accent" />)
    expect(screen.getByRole('button')).toHaveClass('MuiIconButton-colorAccent')
  })

  it('should execute event on trigger click', () => {
    const handleClick = jest.fn()
    renderWithTheme(<Icon name="CameraFront" onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
