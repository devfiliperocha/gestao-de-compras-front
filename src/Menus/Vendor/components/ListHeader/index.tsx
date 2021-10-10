import * as S from './styles' /** S = Styles */
import Button from 'components/Atoms/Button'
import Icon from 'components/Atoms/Icon'
import { useState } from 'react'
import { VendorColumns } from '../../types/vendors'
import { SortDirections } from 'types/utils'

export type VendorListHeaderProps = {
  onSort?: (sortColumn: VendorColumns, sortDirection: SortDirections) => void
}

const VendorListHeader = ({ onSort, ...props }: VendorListHeaderProps) => {
  const [sortDirection, setSortDirection] = useState<SortDirections>('asc')
  const [sortColumn, setSortColumn] = useState<VendorColumns>('id')

  const toggleSortDirection = () =>
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')

  const onColumnClick = (column: VendorColumns) => {
    if (sortColumn === column) {
      toggleSortDirection()
    } else {
      setSortColumn(column)
    }
    !!onSort && onSort(sortColumn, sortDirection)
  }

  return (
    <S.Wrapper {...props}>
      <S.ColumnOneWrapper>
        <Button
          variant="text"
          disableRipple
          endIcon={
            sortColumn === 'corporateName' ? (
              <Icon
                name={sortDirection === 'asc' ? 'ChevronUp' : 'ChevronDown'}
                variant="primary"
              />
            ) : (
              <></>
            )
          }
          onClick={() => onColumnClick('corporateName')}
        >
          Razão Social
        </Button>
      </S.ColumnOneWrapper>
      <S.ColumnTwoWrapper>
        <Button
          variant="text"
          disableRipple
          endIcon={
            sortColumn === 'status' ? (
              <Icon
                name={sortDirection === 'asc' ? 'ChevronUp' : 'ChevronDown'}
                variant="primary"
              />
            ) : (
              <></>
            )
          }
          onClick={() => onColumnClick('status')}
        >
          Status
        </Button>
      </S.ColumnTwoWrapper>
      <S.InvisibleWrapper>#</S.InvisibleWrapper>
    </S.Wrapper>
  )
}

export default VendorListHeader
