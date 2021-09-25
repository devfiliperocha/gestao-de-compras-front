import * as S from './styles' /** S = Styles */
import { Grid, GridSize } from '@material-ui/core'

export type Item = {
  component: React.ReactNode
  xs?: GridSize
  md?: GridSize
  sm?: GridSize
}

export type ListItemProps = {
  items: Item[]
  spacing?: number
}

const ListItem = ({ items, spacing }: ListItemProps) => {
  return (
    <S.Wrapper>
      <Grid
        container
        spacing={spacing}
        alignItems="center"
        justifyContent="space-between"
      >
        {!!items &&
          items.map((item: Item, i: number) => (
            <Grid key={i} item xs={item.xs} md={item.sm} sm={item.sm}>
              {item.component}
            </Grid>
          ))}
      </Grid>
    </S.Wrapper>
  )
}

export default ListItem
