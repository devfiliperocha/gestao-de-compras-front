import { screen } from '@testing-library/react'
import { VendorsMockData } from 'types/vendors.mock'
import { renderWithTheme } from 'utils/tests/helpers'
import VendorForm from '.'

describe('<VendorForm/>', () => {
  it('should render the VendorForm', () => {
    renderWithTheme(
      <VendorForm vendor={VendorsMockData[0]} onChange={() => null} />
    )
    expect(
      screen.getByRole('heading', { name: /Identificação/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Endereço/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Certidões/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /CNPJ/i })).toBeInTheDocument()
  })
})
