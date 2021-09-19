import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Logo from '.'
import 'jest-styled-components'

describe('<Logo/>', () => {
  it('should render the dark logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/LOGO JP/i).parentElement).toHaveStyle({
      color: '#204372'
    })
  })
  it('should render the light logo when "light" is passed', () => {
    renderWithTheme(<Logo color="light" />)
    expect(screen.getByLabelText(/LOGO JP/i).parentElement).toHaveStyle({
      color: '#FCFCFC'
    })
  })

  it('should render a normal logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/LOGO JP/i).parentElement).toHaveStyle({
      width: '18rem'
    })
  })
  it('should render a bigger logo when "large" is passed', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/LOGO JP/i).parentElement).toHaveStyle({
      width: '57rem'
    })
  })

  it('should render medium logo when hideOnMobile is true', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/LOGO JP/i).parentElement).toHaveStyleRule(
      'width',
      '22rem',
      { media: '(max-width: 768px)' }
    )
  })
})
