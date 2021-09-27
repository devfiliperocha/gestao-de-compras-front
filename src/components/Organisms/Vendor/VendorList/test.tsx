import { screen } from '@testing-library/react'
import { VendorsMockData } from 'types/vendors.mock'
import { renderWithTheme } from 'utils/tests/helpers'
import VendorList from '.'

describe('<VendorList/>', () => {
  it('should render the VendorList', () => {
    renderWithTheme(<VendorList data={VendorsMockData} />)
    expect(
      screen.getByRole('button', { name: /Razão Social/i })
    ).toBeInTheDocument()
  })
})
