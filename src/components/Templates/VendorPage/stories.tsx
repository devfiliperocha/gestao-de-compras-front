import VendorPage from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Vendors } from 'types/vendors'

export default {
  title: 'Design System/Templates/Vendor/VendorPage',
  component: VendorPage,
  argTypes: {
    data: { table: { disable: true } }
  }
} as Meta

const rows: Vendors[] = [
  {
    corporateName: 'Little Church',
    fantasyName: '',
    status: {
      type: 'warning',
      text: 'Aguardando Aprovação'
    }
  },
  {
    corporateName: 'Seven Lakes',
    fantasyName: '',
    status: {
      type: 'success',
      text: 'Cadastro Aprovado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  }
]
export const Basic: Story = (args) => <VendorPage {...args} data={rows} />
