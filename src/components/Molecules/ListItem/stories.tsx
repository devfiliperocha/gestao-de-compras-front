import { Meta, Story } from '@storybook/react/types-6-0'
import Typography from 'components/Atoms/Typography'
import Status from 'components/Molecules/Status'
import Button from 'components/Atoms/Button'
import { ReactElement } from 'react'
import { ButtonBase, Grid } from '@material-ui/core'
import Icon from 'components/Atoms/Icon'
import Checkbox from 'components/Atoms/Checkbox'
import ListLabel, { ListLabelItemProps } from 'components/Molecules/ListLabel'
import ListItem, { ListItemComponentProps } from '.'
import MediaQuery from 'components/Helpers/MediaQuery'

export default {
  title: 'Design System/Molecules/ListItem',
  component: ListItem,
  argTypes: {
    items: { table: { disable: true } },
    spacing: { table: { disable: true } }
  }
} as Meta

export const Vendor: Story = (): ReactElement => {
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
  const itemLabelItems: ListLabelItemProps[] = [
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
    <Grid container rowSpacing={1} direction="column">
      <ListLabel items={itemLabelItems} />
      {rows.map((r, i) => {
        const items = generateItem(r)
        return (
          <Grid key={i} item xs={12}>
            <ListItem items={items} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export const Organ: Story = (): ReactElement => {
  const items: ListItemComponentProps[] = [
    {
      component: (
        <Typography key={0} color="primary" variant="h2">
          EEEDF 987 de Paulinia 6
        </Typography>
      ),
      xs: 7,
      md: 4
    },
    {
      component: (
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
      )
    },
    {
      component: <Button key={2}>Visualizar</Button>
    }
  ]
  return <ListItem items={items} />
}

export const Product: Story = (): ReactElement => {
  const items: ListItemComponentProps[] = [
    {
      component: <Checkbox />
    },
    {
      component: (
        <Typography key={0} color="primary" variant="h2">
          Papel A4
        </Typography>
      ),
      xs: 4
    },
    {
      component: (
        <Typography key={0} color="primary" variant="h3">
          Papeis
        </Typography>
      ),
      xs: 3
    },
    {
      component: (
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
      )
    },
    {
      component: <Button key={2}>Visualizar</Button>
    }
  ]
  return <ListItem items={items} />
}
