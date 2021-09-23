import Divider from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/Divider',
  component: Divider
} as Meta

export const Basic: Story = (args) => <Divider {...args} />
