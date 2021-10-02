import { VendorColumns, Vendors } from 'types/vendors'
import { SortDirections } from 'types/utils'

export const sortVendors = (
  sortColumn: VendorColumns,
  sortDirection: SortDirections,
  vendors: Vendors[]
): Vendors[] => {
  const sortedVendors = [...vendors]
  sortedVendors.sort((a, b) => {
    let aValue = a[sortColumn]
    let bValue = b[sortColumn]

    if (sortColumn === 'status') {
      aValue = a.status.text
      bValue = b.status.text
    }

    if (sortDirection === 'asc') {
      if (bValue > aValue) {
        return 1
      }
      if (bValue < aValue) {
        return -1
      }
      return 0
    } else {
      if (bValue < aValue) {
        return 1
      }
      if (bValue > aValue) {
        return -1
      }
      return 0
    }
  })
  return sortedVendors
}
