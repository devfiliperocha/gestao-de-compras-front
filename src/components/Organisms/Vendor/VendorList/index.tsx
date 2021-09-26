import * as S from './styles' /** S = Styles */
import { Vendors } from 'types/vendors'
import { GenerateVendorHeader, GenerateVendorRows } from './generator'

type VendorListProps = {
  vendorsData: Vendors[]
  status?: 'warning' | 'success' | 'error' | 'all'
}

const VendorList = ({ vendorsData, status }: VendorListProps) => {
  const header = GenerateVendorHeader()
  const rows = GenerateVendorRows(vendorsData)

  return (
    <S.Wrapper
      rows={rows}
      header={header}
      {...(status &&
        status !== 'all' && { filterColumn: 1, filterValue: status })}
    />
  )
}

export default VendorList
