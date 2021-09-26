import * as S from './styles' /** S = Styles */
import ListLabel, { ListLabelItemProps } from 'components/Molecules/ListLabel'
import ListItem, { ListItemComponentProps } from 'components/Molecules/ListItem'
import { Grid } from '@material-ui/core'
import { useState } from 'react'

export type ListProps = {
  rows: ListItemComponentProps[][]
  header: ListLabelItemProps[]
  filterColumn?: number
  filterValue?: string | number
}

const List = ({
  header,
  rows,
  filterColumn = 0,
  filterValue = ''
}: ListProps) => {
  const [sorted, setSorted] = useState(rows)

  const sortArray = (sortColumn: number, sortAsc: boolean) => {
    const arr = [...sorted]
    arr.sort((a, b) => {
      if (!sortAsc) {
        if (b[sortColumn].value > a[sortColumn].value) {
          return 1
        }
        if (b[sortColumn].value < a[sortColumn].value) {
          return -1
        }
        return 0
      } else {
        if (b[sortColumn].value < a[sortColumn].value) {
          return 1
        }
        if (b[sortColumn].value > a[sortColumn].value) {
          return -1
        }
        return 0
      }
    })
    setSorted(arr)
  }

  return (
    <S.Wrapper container rowSpacing={1} direction="column">
      <ListLabel
        items={header}
        onSort={(col: number, state) => {
          sortArray(col, state === 'asc')
        }}
      />
      {sorted
        .filter((r) =>
          String(r[filterColumn].value).includes(String(filterValue))
        )
        .map((rowColumns, i) => (
          <Grid key={i} item xs={12}>
            <ListItem items={rowColumns} />
          </Grid>
        ))}
    </S.Wrapper>
  )
}

export default List
