import Button, { ButtonPropsBase } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import Icon from 'components/Atoms/Icon'

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    iconLeft: { table: { disable: true } },
    iconRight: { table: { disable: true } },
    onClick: { table: { disable: true } }
  }
} as Meta

export const Basic: Story<ButtonPropsBase> = (args) => (
  <Button {...args}>BUTTON</Button>
)
export const IconLeft: Story<ButtonPropsBase> = (args) => (
  <Button iconLeft={<Icon name="AppFolder" variant="white" />} {...args}>
    ICON LEFT
  </Button>
)
export const IconRight: Story<ButtonPropsBase> = (args) => (
  <Button iconRight={<Icon name="AppFolder" variant="white" />} {...args}>
    ICON RIGHT
  </Button>
)

const defaultArgs: Pick<ButtonPropsBase, 'color' | 'variant'> = {
  color: 'primary',
  variant: 'contained'
}
Basic.args = defaultArgs
IconLeft.args = defaultArgs
IconRight.args = defaultArgs
