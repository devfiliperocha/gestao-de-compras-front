import Main from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.argTypes = {
  title: {
    name: 'Title',
    type: { name: 'string' },
    defaultValue: 'JP Gestão de Compras',
    description: 'Título',
    control: {
      type: 'text'
    }
  },
  description: {
    name: 'Description',
    type: { name: 'string' },
    defaultValue:
      'Sistema para otimização do fluxo de gestão de compras para órgãos públicos.',
    description: 'Descrição',
    control: {
      type: 'text'
    }
  },
  logo: {
    name: 'Logo',
    type: { name: 'string' },
    description: 'Arquivo de logo',
    control: {
      type: 'file'
    }
  },
  illustration: {
    name: 'Illustration',
    type: { name: 'string' },
    description: 'Arquivo de ilustração',
    control: {
      type: 'file'
    }
  }
}
