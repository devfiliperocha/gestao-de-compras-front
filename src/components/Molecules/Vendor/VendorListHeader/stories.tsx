import VendorListHeader, { VendorListHeaderProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Molecules/Vendor/VendorListHeader',
  component: VendorListHeader
} as Meta

export const Basic: Story<VendorListHeaderProps> = (args) => (
  <VendorListHeader {...args} />
)
