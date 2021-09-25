import Icon, { IconProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

import * as IconsRegular from '@styled-icons/fluentui-system-regular'
import * as IconsFilled from '@styled-icons/fluentui-system-filled'

const iconRegularTypes = Object.keys(IconsRegular)
const iconFilledTypes = Object.keys(IconsFilled)

export default {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    onClick: { table: { disable: true } },
    name: {
      control: {
        type: 'select',
        options: iconRegularTypes
          .slice(0, 10)
          .concat(iconFilledTypes.slice(0, 10))
      }
    }
  },
  args: {
    name: 'ArrowDown',
    size: 40,
    variant: 'primary'
  }
} as Meta

export const Basic: Story<IconProps> = (args) => <Icon {...args} />
