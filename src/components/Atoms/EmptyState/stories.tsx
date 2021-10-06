import EmptyState from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/EmptyState',
  component: EmptyState
} as Meta

export const Basic: Story = (args) => <EmptyState {...args} />
