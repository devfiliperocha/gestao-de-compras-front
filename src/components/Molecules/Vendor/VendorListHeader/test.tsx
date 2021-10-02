import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import VendorListHeader from '.'

describe('<VendorListHeader/>', () => {
  it('should render the VendorListHeader', () => {
    renderWithTheme(<VendorListHeader />)
    expect(
      screen.getByRole('button', { name: /Razão Social/i })
    ).toBeInTheDocument()
  })
})
