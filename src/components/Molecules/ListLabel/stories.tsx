import ListLabel from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import ListItem, { Item } from '.'
import Typography from 'components/Atoms/Typography'
import { ReactElement } from 'react'

export default {
  title: 'ListLabel',
  component: ListLabel,
  argTypes: {
    items: { table: { disable: true } },
    spacing: { table: { disable: true } }
  }
} as Meta

export const Vendor: Story = (): ReactElement => {
  const items: Item[] = [
    {
      component: (
        <Typography color="primary" variant="overline">
          Razão Social
        </Typography>
      ),
      xs: 7,
      md: 4
    },
    {
      component: (
        <Typography color="primary" variant="overline">
          Status
        </Typography>
      ),
      xs: 3
    }
  ]
  return <ListItem items={items} />
}
