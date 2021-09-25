import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import DashboardCard from '.'

describe('<DashboardCard/>', () => {
  it('should render the DashboardCard', () => {
    const { container } = renderWithTheme(
      <DashboardCard icon="VehicleTruckProfile" title="Órgãos" />
    )
    expect(screen.getByRole('heading', { name: 'Órgãos' })).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
