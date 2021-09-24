import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import DashboardCard from '.'

describe('<DashboardCard/>', () => {
  it('should render the DashboardCard', () => {
    renderWithTheme(
      <DashboardCard icon="AccountBalanceOutlined" title="Órgãos" />
    )
    expect(screen.getByRole('heading', { name: 'Órgãos' })).toBeInTheDocument()
    expect(screen.getByTestId('AccountBalanceOutlinedIcon')).toBeInTheDocument()
  })
})
