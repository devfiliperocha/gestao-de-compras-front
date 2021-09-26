import * as S from './styles' /** S = Styles */
import { Grid, GridProps } from '@material-ui/core'

export type ListItemComponentProps = {
  component: React.ReactNode
  value: string | number
} & Pick<GridProps, 'xl' | 'xs' | 'md' | 'sm' | 'lg' | 'sx'>

export type ListItemProps = {
  items: ListItemComponentProps[]
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
          items.map((item: ListItemComponentProps, i: number) => (
            <Grid
              key={i}
              item
              xs={item.xs}
              md={item.md}
              sm={item.sm}
              xl={item.xl}
              lg={item.lg}
              sx={item.sx}
            >
              {item.component}
            </Grid>
          ))}
      </Grid>
    </S.Wrapper>
  )
}

export default ListItem
