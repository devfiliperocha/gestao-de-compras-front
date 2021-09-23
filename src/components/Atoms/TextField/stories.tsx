import TextField from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { LockOutlined, PersonOutlined } from '@material-ui/icons'

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
    iconLeft={
      <PersonOutlined color="accent" sx={{ fontSize: 30, padding: '5px' }} />
    }
    {...args}
  />
)
export const IconRight: Story = (args) => (
  <TextField
    iconRight={
      <LockOutlined color="accent" sx={{ fontSize: 30, padding: '5px' }} />
    }
    {...args}
  />
)
