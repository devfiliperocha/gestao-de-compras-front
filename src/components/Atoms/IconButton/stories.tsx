import IconButton from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import Icon from 'components/Atoms/Icon'

export default {
  title: 'Design System/Atoms/IconButton',
  component: IconButton,
  argTypes: {
    iconLeft: { table: { disable: true } },
    iconRight: { table: { disable: true } },
    onClick: { table: { disable: true } }
  }
} as Meta

export const Basic: Story = (args) => (
  <IconButton {...args}>
    <Icon name="AppFolder" variant={args.color} size={args.size} />
  </IconButton>
)
