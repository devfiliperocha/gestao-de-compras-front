import GlobalLoading from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/GlobalLoading',
  component: GlobalLoading,
  args: {
    size: 30,
    variant: 'primary'
  }
} as Meta

export const Basic: Story = (args) => <GlobalLoading {...args} />
