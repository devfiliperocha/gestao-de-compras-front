import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Loading from '.'

describe('<Loading/>', () => {
  it('should render the Loading', () => {
    renderWithTheme(<Loading />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should render the Loading with size passed', () => {
    renderWithTheme(<Loading size={50} />)
    expect(screen.getByRole('progressbar')).toHaveStyle({
      width: '50px',
      height: '50px'
    })
  })

  it('should render the Loading with color primary', () => {
    renderWithTheme(<Loading variant="primary" />)
    expect(screen.getByRole('progressbar')).toHaveClass(
      'MuiCircularProgress-colorPrimary'
    )
  })

  it('should render the Loading with color accent', () => {
    renderWithTheme(<Loading variant="accent" />)
    expect(screen.getByRole('progressbar')).toHaveClass(
      'MuiCircularProgress-colorAccent'
    )
  })
})
