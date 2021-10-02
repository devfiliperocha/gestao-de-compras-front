import ListItem, { ListItemProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/ListItem',
  component: ListItem
} as Meta

export const Basic: Story<ListItemProps> = (args) => <ListItem {...args} />
