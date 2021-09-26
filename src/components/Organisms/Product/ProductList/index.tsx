import * as S from './styles' /** S = Styles */

import { GenerateVendorHeader, GenerateVendorRows } from './generator'
import { Product } from 'types/product'

type ProductListProps = {
  productsData: Product[]
}

const ProductList = ({ productsData }: ProductListProps) => {
  const header = GenerateVendorHeader()
  const rows = GenerateVendorRows(productsData)

  return <S.Wrapper rows={rows} header={header} />
}

export default ProductList
