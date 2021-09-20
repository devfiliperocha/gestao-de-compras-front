import { PlayArrow } from '@material-ui/icons'
import { screen } from '@testing-library/react'
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
      <Button leftIcon={<PlayArrow data-testid="icon" />}>Button</Button>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
  it('should render right icon if passed', () => {
    renderWithTheme(
      <Button rightIcon={<PlayArrow data-testid="icon" />}>Button</Button>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render secondary variant if passed', () => {
    renderWithTheme(<Button variant="secondary">Button</Button>)
    const button = screen.getByRole('button', { name: /Button/i })
    expect(button).toHaveClass('MuiButton-outlined')
    expect(button).toHaveClass('MuiButton-outlinedSecondary')
  })

  it('should render list variant if passed', () => {
    renderWithTheme(<Button variant="list">Button</Button>)
    const button = screen.getByRole('button', { name: /Button/i })
    expect(button).toHaveClass('MuiButton-text')
    expect(button).toHaveClass('MuiButton-textPrimary')
  })
  it('should render link variant if passed', () => {
    renderWithTheme(<Button variant="link">Button</Button>)
    const button = screen.getByRole('button', { name: /Button/i })
    expect(button).toHaveClass('MuiButton-text')
    expect(button).toHaveClass('MuiButton-textWarning')
  })
})
