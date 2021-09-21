import Button, { ButtonProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { PlaylistAddCheckOutlined } from '@material-ui/icons'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    iconLeft: { table: { disable: true } },
    iconRight: { table: { disable: true } },
    onClick: { table: { disable: true } }
  }
} as Meta

export const Basic: Story<ButtonProps> = (args) => (
  <Button {...args}>BUTTON</Button>
)
export const IconLeft: Story<ButtonProps> = (args) => (
  <Button iconLeft={<PlaylistAddCheckOutlined />} {...args}>
    ICON LEFT
  </Button>
)
export const IconRight: Story<ButtonProps> = (args) => (
  <Button iconRight={<PlaylistAddCheckOutlined />} {...args}>
    ICON RIGHT
  </Button>
)

const defaultArgs: Pick<ButtonProps, 'color' | 'variant'> = {
  color: 'primary',
  variant: 'contained'
}
Basic.args = defaultArgs
IconLeft.args = defaultArgs
IconRight.args = defaultArgs
