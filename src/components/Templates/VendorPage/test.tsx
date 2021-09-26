import { screen } from '@testing-library/react'
import { VendorsMockData } from 'types/vendors.mock'
import { renderWithTheme } from 'utils/tests/helpers'
import VendorPage from '.'

describe('<VendorPage/>', () => {
  it('should render the VendorPage', () => {
    renderWithTheme(<VendorPage data={VendorsMockData} />)
    expect(
      screen.getByRole('heading', { name: /Situação Cadastral/i })
    ).toBeInTheDocument()
  })
})
