import { screen } from '@testing-library/react'
import { VendorsMockData } from 'types/vendors.mock'
import { renderWithTheme } from 'utils/tests/helpers'
import VendorListItem from '.'

describe('<VendorListItem/>', () => {
  it('should render the VendorListItem', () => {
    renderWithTheme(
      <VendorListItem data-testid="list" vendor={VendorsMockData[0]} />
    )
    expect(screen.getByTestId('list')).toBeInTheDocument()
  })
})
