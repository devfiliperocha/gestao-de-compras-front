import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Typography from '.'

describe('<Typography/>', () => {
  it('should render the Typography with dark color by default', () => {
    renderWithTheme(<Typography variant="h1">TESTE</Typography>)
    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#1D1D1D'
    })
  })

  it('should render the light Typography color', () => {
    renderWithTheme(
      <Typography variant="h1" color="light">
        TESTE
      </Typography>
    )
    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#FCFCFC'
    })
  })
  it('should render the accent Typography color', () => {
    renderWithTheme(
      <Typography variant="h1" color="accent">
        TESTE
      </Typography>
    )
    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#f5a818'
    })
  })
  it('should render the info Typography color', () => {
    renderWithTheme(
      <Typography variant="h1" color="info">
        TESTE
      </Typography>
    )
    expect(screen.getByRole('heading')).toHaveStyle({
      color: '#0288d1'
    })
  })
})
