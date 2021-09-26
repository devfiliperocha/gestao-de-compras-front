import VendorList from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { VendorsMockData } from 'types/vendors.mock'
import { Container } from '@material-ui/core'

export default {
  title: 'Design System/Organisms/VendorList',
  component: VendorList,
  argTypes: {
    vendorsData: { table: { disable: true } }
  }
} as Meta

export const Basic: Story = (args) => (
  <Container maxWidth="lg">
    <VendorList {...args} vendorsData={VendorsMockData} />
  </Container>
)
