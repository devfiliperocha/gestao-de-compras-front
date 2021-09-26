import List from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import React, { ReactElement } from 'react'
import { ListLabelItemProps } from 'components/Molecules/ListLabel'
import Typography from 'components/Atoms/Typography'
import { ListItemComponentProps } from 'components/Molecules/ListItem'
import MediaQuery from 'components/Helpers/MediaQuery'
import Status from 'components/Molecules/Status'
import Button from 'components/Atoms/Button'
import Icon from 'components/Atoms/Icon'
import { ButtonBase } from '@material-ui/core'

export default {
  title: 'Design System/Molecules/List',
  component: List,
  argTypes: {
    filterColumn: {
      type: 'number'
    },
    filterValue: {
      type: 'string'
    },
    rows: { table: { disable: true } },
    header: { table: { disable: true } }
  },
  args: {
    filterable: true,
    sortable: true,
    filterValue: '',
    filterColumn: 0
  }
} as Meta

export const Vendor: Story = (args): ReactElement => {
  type row = {
    title: string
    status: 'warning' | 'error' | 'success'
    statusText: string
  }
  const rows: row[] = [
    {
      title: 'Little Church',
      status: 'warning',
      statusText: 'Aguardando Aprovação'
    },
    {
      title: 'Seven Lakes',
      status: 'success',
      statusText: 'Cadastro Aprovado'
    },
    { title: 'Saint Louize', status: 'error', statusText: 'Cadastro Rejeitado' }
  ]
  const generateItem = (line: typeof rows[0]): ListItemComponentProps[] => {
    return [
      {
        value: line.title,
        component: (
          <>
            <MediaQuery greaterThan="medium">
              <Typography key={0} color="primary" variant="h2">
                {line.title}
              </Typography>
            </MediaQuery>
            <MediaQuery lessThan="medium">
              <Typography key={0} color="primary" variant="h6">
                {line.title}
              </Typography>
            </MediaQuery>
          </>
        ),
        lg: 9,
        sm: 7,
        xs: 7
      },
      {
        value: line.statusText,
        component: (
          <>
            <MediaQuery greaterThan="medium">
              <Status type={line.status} text={line.statusText} />
            </MediaQuery>
            <MediaQuery lessThan="medium">
              <Status type={line.status} />
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
  return (
    <List
      header={labelItems}
      rows={rows.map((r) => generateItem(r))}
      {...args}
    />
  )
}
