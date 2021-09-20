import Button, { ButtonProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { PlaylistAddCheckOutlined } from '@material-ui/icons'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    leftIcon: { type: '' },
    rightIcon: { type: '' }
  }
} as Meta

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />

export const IconLeft: Story<ButtonProps> = (args) => (
  <Button {...args} leftIcon={<PlaylistAddCheckOutlined />} />
)
export const IconRight: Story<ButtonProps> = (args) => (
  <Button {...args} rightIcon={<PlaylistAddCheckOutlined />} />
)

Basic.args = {
  children: 'BASIC',
  variant: 'primary'
}

IconLeft.args = {
  children: 'ICON LEFT',
  variant: 'primary'
}
IconRight.args = {
  children: 'ICON RIGHT',
  variant: 'primary'
}
