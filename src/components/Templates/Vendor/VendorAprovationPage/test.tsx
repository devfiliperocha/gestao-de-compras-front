import { screen } from '@testing-library/react'
import { VendorsMockData } from 'types/vendors.mock'
import { renderWithTheme } from 'utils/tests/helpers'
import VendorAprovationPage from '.'

describe('<VendorAprovationPage/>', () => {
  it('should render the VendorPage', () => {
    renderWithTheme(<VendorAprovationPage vendor={VendorsMockData[0]} />)
    expect(
      screen.getByRole('heading', { name: /Little Church Altar/i })
    ).toBeInTheDocument()
  })
})
