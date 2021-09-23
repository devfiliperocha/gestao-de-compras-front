import Radio from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Design System/Atoms/Radio',
  component: Radio
} as Meta

export const Basic: Story = (args) => (
  <Radio {...args} onChange={action('Check!')} />
)
Basic.args = {
  checked: false
}
