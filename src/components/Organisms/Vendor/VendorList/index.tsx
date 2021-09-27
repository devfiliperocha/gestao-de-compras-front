import * as S from './styles' /** S = Styles */
import { useEffect, useState } from 'react'
import { sortVendors } from './utils'
import { VendorColumns, Vendors } from 'types/vendors'
import { SortDirections } from 'types/utils'

type VendorListProps = {
  data: Vendors[]
  externalSort?: boolean
  onSort?: (sortColumn: VendorColumns, sortDirection: SortDirections) => void
}

const VendorList = ({
  data,
  externalSort = false,
  onSort = () => true
}: VendorListProps) => {
  const [sortedVendors, setSortedVendors] = useState(data)

  useEffect(() => {
    setSortedVendors(data)
  }, [data])

  return (
    <S.Wrapper>
      <S.ListHeader
        onSort={(sortColumn, sortDirection) => {
          if (externalSort) {
            onSort(sortColumn, sortDirection)
          } else {
            setSortedVendors(
              sortVendors(sortColumn, sortDirection, sortedVendors)
            )
          }
        }}
      />
      {sortedVendors &&
        sortedVendors.map((vendor, i) => (
          <S.ListItem key={i} vendor={vendor} />
        ))}
    </S.Wrapper>
  )
}

export default VendorList
