import * as S from './styles' /** S = Styles */
import { Button, Grid } from '@material-ui/core'
import { ListItemComponentProps } from 'components/Molecules/ListItem'
import Icon from 'components/Atoms/Icon'
import { useState } from 'react'

export type ListLabelItemProps = {
  sortable?: boolean
} & Omit<ListItemComponentProps, 'value'>

export type ListLabelProps = {
  items: ListLabelItemProps[]
  sortColumnNumber?: number
  spacing?: number
  onSort?: (column: number, state: 'asc' | 'desc') => void
  onClick?: (column: number, state: 'asc' | 'desc') => void
}

const ListLabel = ({
  items,
  spacing,
  sortColumnNumber = 0,
  onClick = (column: number, state) => [column, state],
  onSort = (column: number, state) => [column, state]
}: ListLabelProps) => {
  const [sortColumn, setSortColumn] = useState(sortColumnNumber)
  const [sortAsc, setSortAsc] = useState(true)

  return (
    <S.Wrapper>
      <Grid container spacing={spacing} alignItems="center">
        {!!items &&
          items.map((item: ListLabelItemProps, i: number) => (
            <Grid
              key={i}
              item
              xs={item.xs}
              md={item.md}
              sm={item.sm}
              xl={item.xl}
              lg={item.lg}
            >
              <Button
                variant="text"
                disableRipple
                size="small"
                endIcon={
                  item.sortable &&
                  sortColumn === i && (
                    <Icon
                      name={sortAsc ? 'ChevronUp' : 'ChevronDown'}
                      variant="primary"
                    />
                  )
                }
                onClick={
                  item.sortable
                    ? () => {
                        setSortColumn(i)
                        setSortAsc(!sortAsc)
                        onSort(sortColumn, sortAsc ? 'asc' : 'desc')
                      }
                    : () => onClick(sortColumn, sortAsc ? 'asc' : 'desc')
                }
              >
                {item.component}
              </Button>
            </Grid>
          ))}
      </Grid>
    </S.Wrapper>
  )
}

export default ListLabel
