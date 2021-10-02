import VendorAprovationHeader, { VendorAprovationHeaderProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { VendorsMockData } from 'types/vendors.mock'

export default {
  title: 'Design System/Molecules/Vendor/VendorAprovationHeader',
  component: VendorAprovationHeader
} as Meta

export const Basic: Story<VendorAprovationHeaderProps> = (args) => (
  <VendorAprovationHeader {...args} vendor={VendorsMockData[0]} />
)
