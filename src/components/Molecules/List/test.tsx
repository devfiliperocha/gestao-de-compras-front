import { screen } from '@testing-library/react'
import {
  GenerateVendorHeader,
  GenerateVendorRows
} from 'components/Organisms/Vendor/VendorList/generator'
import { VendorsMockData } from 'types/vendors.mock'
import { renderWithTheme } from 'utils/tests/helpers'
import List from '.'

const mock = VendorsMockData
const header = GenerateVendorHeader()
const data = GenerateVendorRows(mock)

describe('<List/>', () => {
  it('should render the List', () => {
    renderWithTheme(<List header={header} rows={data} />)
    expect(
      screen.getByRole('button', { name: /Razão Social/i })
    ).toBeInTheDocument()
  })
})
