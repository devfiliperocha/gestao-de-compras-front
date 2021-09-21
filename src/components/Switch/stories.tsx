import Switch from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Switch',
  component: Switch
} as Meta

export const Basic: Story = (args) => <Switch {...args} />
