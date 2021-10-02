import DocIcon, { DocIconProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { VendorsMockData } from 'types/vendors.mock'

export default {
  title: 'Design System/Molecules/DocIcon',
  component: DocIcon,
  args: {
    ...VendorsMockData[0].federalCertificatePdf,
    fileName: 'Certidão Federal'
  }
} as Meta

export const Basic: Story<DocIconProps> = (args) => <DocIcon {...args} />
