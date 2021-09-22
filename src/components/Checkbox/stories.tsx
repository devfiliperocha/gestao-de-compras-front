import Checkbox from '.'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Checkbox',
  component: Checkbox
} as Meta

export const Basic: Story = (args) => (
  <Checkbox {...args} onChange={action('Check!')} />
)
