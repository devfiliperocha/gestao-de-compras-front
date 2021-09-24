import Icon, { IconProps, iconTypes } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    onClick: { table: { disable: true } },
    name: {
      control: {
        type: 'select',
        options: iconTypes
      }
    }
  },
  args: {
    name: 'CameraFront',
    size: 40,
    variant: 'primary'
  }
} as Meta

export const Basic: Story<IconProps> = (args) => <Icon {...args} />
