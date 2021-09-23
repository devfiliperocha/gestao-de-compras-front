import TextField from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    value: { table: { disable: true } },
    onChange: { table: { disable: true } }
  }
} as Meta

export const Basic: Story = (args) => <TextField {...args} />

Basic.args = {
  label: 'Campo de Texto',
  error: false,
  helperText: 'Essa é uma mensagem de Erro'
}
