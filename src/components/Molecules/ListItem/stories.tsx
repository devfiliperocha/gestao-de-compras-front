import ListItem, { Item } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import Typography from 'components/Atoms/Typography'
import Status from 'components/Molecules/Status'
import Button from 'components/Atoms/Button'
import { ReactElement } from 'react'
import { Grid } from '@material-ui/core'
import Icon from 'components/Atoms/Icon'
import Checkbox from 'components/Atoms/Checkbox'

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
  const generateItem = (line: typeof rows[0]): Item[] => {
    return [
      {
        component: (
          <Typography key={0} color="primary" variant="h2">
            {line.title}
          </Typography>
        ),
        xs: 7,
        md: 4
      },
      {
        component: <Status key={1} type={line.status} text={line.statusText} />
      },
      {
        component: <Button key={2}>Visualizar</Button>
      }
    ]
  }
  return (
    <Grid container rowSpacing={1} direction="column">
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
  const items: Item[] = [
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
  const items: Item[] = [
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
