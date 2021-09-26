import MediaQuery from 'components/Helpers/MediaQuery'
import Button from 'components/Atoms/Button'
import Icon from 'components/Atoms/Icon'
import { ButtonBase } from '@material-ui/core'
import { ListItemComponentProps } from 'components/Molecules/ListItem'
import { ListLabelItemProps } from 'components/Molecules/ListLabel'
import Typography from 'components/Atoms/Typography'
import { ReferenceTerms } from 'types/reference-term'

const generateItem = (line: ReferenceTerms): ListItemComponentProps[] => {
  return [
    {
      value: line.number,
      component: (
        <>
          <MediaQuery greaterThan="medium">
            <Typography color="primary" variant="h3">
              {line.number}
            </Typography>
          </MediaQuery>
          <MediaQuery lessThan="medium">
            <Typography color="info" variant="subtitle2">
              {line.organ.corporateName}
            </Typography>
            <Typography color="primary" variant="h6">
              {line.number}
            </Typography>
          </MediaQuery>
        </>
      ),
      lg: 5,
      sm: 3,
      xs: 8
    },
    {
      value: line.organ.corporateName,
      component: (
        <>
          <MediaQuery greaterThan="medium">
            <Typography color="info" variant="h3">
              {line.organ.corporateName}
            </Typography>
          </MediaQuery>
        </>
      ),
      lg: 4,
      sm: 4,
      xs: 'auto'
    },
    {
      value: '',
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
              Editar Termo
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
        Nº do Termo
      </Typography>
    ),
    sortable: true,
    lg: 5,
    sm: 4,
    xs: 7
  },
  {
    component: (
      <Typography color="primary" variant="overline">
        Órgão
      </Typography>
    ),
    sortable: true,
    lg: 4,
    sm: 3,
    xs: 5
  }
]

export const GenerateVendorHeader = () => labelItems
export const GenerateVendorRows = (data: ReferenceTerms[]) =>
  data.map((d) => generateItem(d))
