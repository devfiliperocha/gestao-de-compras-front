import * as S from './styles' /** S = Styles */
import Button from 'components/Atoms/Button'
import Icon from 'components/Atoms/Icon'
import { useState } from 'react'
import { OrganColumns } from '../../types/organs'
import { SortDirections } from 'types/utils'

export type OrganListHeaderProps = {
  onSort?: (sortColumn: OrganColumns, sortDirection: SortDirections) => void
}

const OrganListHeader = ({ onSort, ...props }: OrganListHeaderProps) => {
  const [sortDirection, setSortDirection] = useState<SortDirections>('asc')
  const [sortColumn, setSortColumn] = useState<OrganColumns>('id')

  const toggleSortDirection = () =>
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')

  const onColumnClick = (column: OrganColumns) => {
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
            sortColumn === 'name' ? (
              <Icon
                name={sortDirection === 'asc' ? 'ChevronUp' : 'ChevronDown'}
                variant="primary"
              />
            ) : (
              <></>
            )
          }
          onClick={() => onColumnClick('name')}
        >
          Razão Social
        </Button>
      </S.ColumnOneWrapper>
      <S.InvisibleWrapper>#</S.InvisibleWrapper>
    </S.Wrapper>
  )
}

export default OrganListHeader
