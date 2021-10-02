import VendorAprovationPage from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { VendorsMockData } from 'types/vendors.mock'

export default {
  title: 'Design System/Templates/Vendor/VendorAprovationPage',
  component: VendorAprovationPage,
  argTypes: {
    data: { table: { disable: true } }
  }
} as Meta

export const Basic: Story = (args) => (
  <VendorAprovationPage {...args} vendor={VendorsMockData[0]} />
)
