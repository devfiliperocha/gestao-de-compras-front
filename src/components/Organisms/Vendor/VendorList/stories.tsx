import VendorList from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { VendorsMockData } from 'types/vendors.mock'

export default {
  title: 'Design System/Organisms/VendorList',
  component: VendorList,
  argTypes: {
    vendorsData: { table: { disable: true } }
  }
} as Meta

export const Basic: Story = (args) => (
  <VendorList {...args} vendorsData={VendorsMockData} />
)
