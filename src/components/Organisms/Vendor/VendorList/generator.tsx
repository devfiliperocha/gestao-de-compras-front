import MediaQuery from 'components/Helpers/MediaQuery'
import Status from 'components/Molecules/Status'
import Button from 'components/Atoms/Button'
import Icon from 'components/Atoms/Icon'
import { ButtonBase } from '@material-ui/core'
import { ListItemComponentProps } from 'components/Molecules/ListItem'
import { ListLabelItemProps } from 'components/Molecules/ListLabel'
import { Vendors } from 'types/vendors'
import Typography from 'components/Atoms/Typography'

const generateItem = (line: Vendors): ListItemComponentProps[] => {
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
      lg: 9,
      sm: 7,
      xs: 7
    },
    {
      value: line.status.type,
      component: (
        <>
          <MediaQuery greaterThan="medium">
            <Status type={line.status.type} text={line.status.text} />
          </MediaQuery>
          <MediaQuery lessThan="medium">
            <Status type={line.status.type} />
          </MediaQuery>
        </>
      ),
      lg: 2,
      sm: 3,
      xs: 2
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
        Razão Social
      </Typography>
    ),
    sortable: true,
    lg: 9,
    sm: 8,
    xs: 8
  },
  {
    component: (
      <Typography color="primary" variant="overline">
        Status
      </Typography>
    ),
    sortable: true,
    lg: 3,
    sm: 3,
    xs: 4
  }
]

export const GenerateVendorHeader = () => labelItems
export const GenerateVendorRows = (data: Vendors[]) =>
  data.map((d) => generateItem(d))
