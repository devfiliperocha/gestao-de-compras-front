import VendorForm, { VendorFormProps } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { VendorsMockData } from 'types/vendors.mock'
import { Container } from '@material-ui/core'

export default {
  title: 'Design System/Molecules/Vendor/VendorForm',
  component: VendorForm
} as Meta

export const Basic: Story<VendorFormProps> = (args) => (
  <Container maxWidth="lg">
    <VendorForm {...args} vendor={VendorsMockData[0]} />
  </Container>
)
