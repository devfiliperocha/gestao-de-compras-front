import { screen } from '@testing-library/react'
import { ProductsMockData } from 'types/product.mock'
import { renderWithTheme } from 'utils/tests/helpers'
import ProductList from '.'

describe('<ProductList/>', () => {
  it('should render the ProductList', () => {
    renderWithTheme(<ProductList productsData={ProductsMockData} />)
    expect(
      screen.getByRole('button', { name: /Nome do Produto/i })
    ).toBeInTheDocument()
  })
})
