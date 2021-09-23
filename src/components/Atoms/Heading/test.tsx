import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Heading from '.'

describe('<Heading/>', () => {
  it('should render a heading with a line to the left side when passed', () => {
    renderWithTheme(<Heading lineLeft>Jp Sistemas</Heading>)
    expect(screen.getByRole('heading', { name: /Jp Sistemas/i })).toHaveStyle({
      'border-left': '0.5rem solid #f5a818'
    })
  })
  it('should not render a line to the left side by default', () => {
    renderWithTheme(<Heading>Jp Sistemas</Heading>)
    expect(
      screen.getByRole('heading', { name: /Jp Sistemas/i })
    ).not.toHaveStyle({
      'border-left': '0.5rem solid #f5a818'
    })
  })

  it('should render a dark heading by default', () => {
    renderWithTheme(<Heading>Jp Sistemas</Heading>)
    expect(screen.getByRole('heading', { name: /Jp Sistemas/i })).toHaveStyle({
      color: '#204372'
    })
  })
  it('should render a light heading when "light" is passed', () => {
    renderWithTheme(<Heading color="light">Jp Sistemas</Heading>)
    expect(screen.getByRole('heading', { name: /Jp Sistemas/i })).toHaveStyle({
      color: '#3E98C7'
    })
  })
})
