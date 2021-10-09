import { OrganColumns, OrganProps } from '../../types/organs'
import { SortDirections } from 'types/utils'

export const sortOrgans = (
  sortColumn: OrganColumns,
  sortDirection: SortDirections,
  organ: OrganProps[]
): OrganProps[] => {
  const sortedOrgan = [...organ]
  sortedOrgan.sort((a, b) => {
    const aValue = a[sortColumn] || 0
    const bValue = b[sortColumn] || 0

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
  return sortedOrgan
}
