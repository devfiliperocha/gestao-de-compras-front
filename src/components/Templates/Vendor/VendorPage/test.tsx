import { fireEvent, screen } from '@testing-library/react'
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

  it('should filter list by status on select a option in dropdown', () => {
    renderWithTheme(<VendorPage data={VendorsMockData} />)
    const combo = screen.getByRole('combobox')
    expect(screen.getByRole('combobox')).toBeInTheDocument()

    fireEvent.click(combo)
    fireEvent.click(screen.getByRole(/option/i, { name: /Aprovado/i }))
    expect(screen.getByRole('textbox')).toHaveValue('Aprovado')

    expect(
      screen.queryByRole('heading', {
        name: /little church altar/i
      })
    ).not.toBeInTheDocument()
  })
})
