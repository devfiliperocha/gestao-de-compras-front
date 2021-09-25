import TextField from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import Icon from 'components/Atoms/Icon'

export default {
  title: 'Design System/Atoms/TextField',
  component: TextField,
  argTypes: {
    value: { table: { disable: true } },
    onChange: { table: { disable: true } }
  },
  args: {
    label: 'Campo de Texto',
    error: false,
    helperText: 'Essa é uma mensagem de Erro'
  }
} as Meta

export const Basic: Story = (args) => <TextField {...args} />
export const IconLeft: Story = (args) => (
  <TextField
    iconLeft={<Icon variant="grey" name="Person" type="filled" />}
    {...args}
  />
)
export const IconRight: Story = (args) => (
  <TextField
    iconRight={<Icon variant="grey" name="LockClosed" type="filled" />}
    {...args}
  />
)
