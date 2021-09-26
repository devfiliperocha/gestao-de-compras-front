import MediaQuery from 'components/Helpers/MediaQuery'
import Button from 'components/Atoms/Button'
import Icon from 'components/Atoms/Icon'
import { IconButton } from '@material-ui/core'
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
      sm: 5
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
      sx: {
        flexGrow: 1
      }
    },
    {
      value: line.group,
      component: (
        <>
          <MediaQuery greaterThan="medium">
            <div style={{ width: '25rem' }}>
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
            </div>
          </MediaQuery>
          <MediaQuery lessThan="medium">
            <IconButton>
              <Icon
                name="NotepadEdit"
                variant="primary"
                size={20}
                type="regular"
              />
            </IconButton>
          </MediaQuery>
        </>
      )
    },
    {
      value: '',
      component: (
        <>
          <MediaQuery greaterThan="large">
            <Button>Visualizar</Button>
          </MediaQuery>
          <MediaQuery lessThan="large">
            <IconButton>
              <Icon
                name="IosArrowRight"
                type="regular"
                variant="primary"
                size={20}
              />
            </IconButton>
          </MediaQuery>
        </>
      )
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
    sx: {
      flexGrow: 1
    }
  }
]

export const GenerateVendorHeader = () => labelItems
export const GenerateVendorRows = (data: Product[]) =>
  data.map((d) => generateItem(d))
