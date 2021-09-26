import MediaQuery from 'components/Helpers/MediaQuery'
import Button from 'components/Atoms/Button'
import Icon from 'components/Atoms/Icon'
import { ButtonBase } from '@material-ui/core'
import { ListItemComponentProps } from 'components/Molecules/ListItem'
import { ListLabelItemProps } from 'components/Molecules/ListLabel'
import Typography from 'components/Atoms/Typography'
import { Product } from 'types/product'

const generateItem = (line: Product): ListItemComponentProps[] => {
  return [
    {
      value: line.description,
      component: (
        <>
          <MediaQuery greaterThan="medium">
            <Typography color="primary" variant="h3">
              {line.description}
            </Typography>
          </MediaQuery>
          <MediaQuery lessThan="medium">
            <Typography color="info" variant="subtitle2">
              {line.group}
            </Typography>
            <Typography color="primary" variant="h6">
              {line.description}
            </Typography>
          </MediaQuery>
        </>
      ),
      lg: 5,
      sm: 5,
      xs: 8
    },
    {
      value: line.group,
      component: (
        <>
          <MediaQuery greaterThan="medium">
            <Typography color="info" variant="h3">
              {line.group}
            </Typography>
          </MediaQuery>
        </>
      ),
      lg: 4,
      sm: 3,
      xs: 'auto'
    },
    {
      value: line.group,
      component: (
        <>
          <MediaQuery greaterThan="medium">
            <Button
              variant="text"
              key={1}
              iconLeft={
                <Icon
                  name="NotepadEdit"
                  variant="primary"
                  size={40}
                  type="regular"
                />
              }
            >
              Editar Produto
            </Button>
          </MediaQuery>
          <MediaQuery lessThan="medium">
            <ButtonBase>
              <Icon
                name="NotepadEdit"
                variant="primary"
                size={20}
                type="regular"
              />
            </ButtonBase>
          </MediaQuery>
        </>
      ),
      lg: 2
    },
    {
      value: '',
      component: (
        <>
          <MediaQuery greaterThan="large">
            <Button>Visualizar</Button>
          </MediaQuery>
          <MediaQuery lessThan="large">
            <ButtonBase>
              <Icon
                name="IosArrowRight"
                type="regular"
                variant="primary"
                size={20}
              />
            </ButtonBase>
          </MediaQuery>
        </>
      ),
      lg: 1
    }
  ]
}
const labelItems: ListLabelItemProps[] = [
  {
    component: (
      <Typography color="primary" variant="overline">
        Nome do Produto
      </Typography>
    ),
    sortable: true,
    lg: 5,
    sm: 5,
    xs: 7
  },
  {
    component: (
      <Typography color="primary" variant="overline">
        Categoria
      </Typography>
    ),
    sortable: true,
    lg: 4,
    sm: 3,
    xs: 5
  }
]

export const GenerateVendorHeader = () => labelItems
export const GenerateVendorRows = (data: Product[]) =>
  data.map((d) => generateItem(d))
