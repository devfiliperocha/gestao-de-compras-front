import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Status from '.'

describe('<Status/>', () => {
  it('should render the success Status ', () => {
    renderWithTheme(<Status type="success" text="Ok!" />)
    expect(screen.getByRole('button')).toHaveStyle({
      color: '#36B369'
    })
  })
  it('should render the warning Status ', () => {
    renderWithTheme(<Status type="warning" text="Ok!" />)
    expect(screen.getByRole('button')).toHaveStyle({
      color: '#f5a818'
    })
  })
  it('should render the error Status ', () => {
    renderWithTheme(<Status type="error" text="Ok!" />)
    expect(screen.getByRole('button')).toHaveStyle({
      color: '#f54531'
    })
  })
})
