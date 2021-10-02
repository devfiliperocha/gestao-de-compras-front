import VendorListItem from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { VendorsMockData } from 'types/vendors.mock'

export default {
  title: 'Design System/Molecules/Vendor/VendorListItem',
  component: VendorListItem
} as Meta

export const Basic: Story = (args) => (
  <VendorListItem {...args} vendor={VendorsMockData[0]} />
)
