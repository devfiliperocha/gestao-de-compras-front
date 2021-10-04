import Modal, { ModalProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import Button from 'components/Atoms/Button'

export default {
  title: 'Design System/Atoms/Modal',
  component: Modal,
  args: {
    title: 'Cartão CNPJ',
    open: true
  }
} as Meta

export const Basic: Story<ModalProps> = (args) => (
  <Modal {...args} action={<Button>Teste Testando</Button>} />
)
