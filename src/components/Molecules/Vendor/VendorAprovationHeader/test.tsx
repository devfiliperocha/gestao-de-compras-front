import { screen } from '@testing-library/react'
import { VendorsMockData } from 'types/vendors.mock'
import { renderWithTheme } from 'utils/tests/helpers'
import VendorAprovationHeader from '.'

describe('<VendorAprovationHeader/>', () => {
  it('should render the VendorAprovationHeader', () => {
    renderWithTheme(<VendorAprovationHeader vendor={VendorsMockData[0]} />)
    expect(
      screen.getByRole('heading', { name: /Little Church Altar/i })
    ).toBeInTheDocument()
  })
})
