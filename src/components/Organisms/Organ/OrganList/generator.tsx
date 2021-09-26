import MediaQuery from 'components/Helpers/MediaQuery'
import Button from 'components/Atoms/Button'
import Icon from 'components/Atoms/Icon'
import { ButtonBase } from '@material-ui/core'
import { ListItemComponentProps } from 'components/Molecules/ListItem'
import { ListLabelItemProps } from 'components/Molecules/ListLabel'
import Typography from 'components/Atoms/Typography'
import { Organs } from 'types/organ'

const generateItem = (line: Organs): ListItemComponentProps[] => {
  return [
    {
      value: line.corporateName,
      component: (
        <>
          <MediaQuery greaterThan="medium">
            <Typography key={0} color="primary" variant="h2">
              {line.corporateName}
            </Typography>
          </MediaQuery>
          <MediaQuery lessThan="medium">
            <Typography key={0} color="primary" variant="h6">
              {line.corporateName}
            </Typography>
          </MediaQuery>
        </>
      ),
      sx: {
        flexGrow: 1
      }
    },
    {
      value: '',
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
                Editar Cadastro
              </Button>
            </div>
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
      )
    }
  ]
}
const labelItems: ListLabelItemProps[] = [
  {
    component: (
      <Typography color="primary" variant="overline">
        Razão Social
      </Typography>
    ),
    sortable: true,
    sx: {
      flexGrow: 1
    }
  }
]

export const GenerateVendorHeader = () => labelItems
export const GenerateVendorRows = (data: Organs[]) =>
  data.map((d) => generateItem(d))
