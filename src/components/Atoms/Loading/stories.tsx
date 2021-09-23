import Loading from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/Loading',
  component: Loading,
  args: {
    size: 30,
    variant: 'primary'
  }
} as Meta

export const Basic: Story = (args) => <Loading {...args} />
