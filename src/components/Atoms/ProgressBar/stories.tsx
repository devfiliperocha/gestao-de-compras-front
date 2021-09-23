import ProgressBar from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/ProgressBar',
  component: ProgressBar,
  args: {
    progress: 20
  }
} as Meta

export const Basic: Story = (args) => <ProgressBar {...args} />
