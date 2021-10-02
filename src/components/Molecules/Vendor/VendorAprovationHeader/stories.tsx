import VendorAprovationHeader, { VendorAprovationHeaderProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { VendorsMockData } from 'types/vendors.mock'

export default {
  title: 'Design System/Molecules/Vendor/VendorAprovationHeader',
  component: VendorAprovationHeader,
  argTypes: {
    status: {
      options: ['warning', 'error', 'success'],
      control: { type: 'select' }
    }
  },
  args: {
    status: 'warning'
  }
} as Meta

type VendorApHeaderProps = {
  status: 'warning' | 'error' | 'success'
} & VendorAprovationHeaderProps

const mountData = (
  data: VendorApHeaderProps['vendor'],
  status: VendorApHeaderProps['status']
) => {
  const statusMsg = {
    warning: 'Aguardando Aprovação',
    error: 'Cadastro Rejeitado',
    success: 'Cadastro Aprovado'
  }

  data.status = {
    type: status,
    text: statusMsg[status]
  }
  return data
}

export const Basic: Story<VendorApHeaderProps> = ({ status, ...args }) => {
  const data = mountData(VendorsMockData[0], status)

  return <VendorAprovationHeader {...args} vendor={data} />
}
