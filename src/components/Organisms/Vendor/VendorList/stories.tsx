import VendorList from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { VendorsMockData } from 'types/vendors.mock'
import { Container } from '@material-ui/core'
import { useState } from 'react'
import { sortVendors } from './utils'

export default {
  title: 'Design System/Organisms/VendorList',
  component: VendorList,
  argTypes: {
    vendorsData: { table: { disable: true } }
  }
} as Meta

export const Basic: Story = (args) => {
  const [vendors, setVendors] = useState(VendorsMockData)

  return (
    <Container maxWidth="lg">
      <VendorList
        {...args}
        data={vendors}
        onSort={(sortColumn, sortDirection) =>
          setVendors(sortVendors(sortColumn, sortDirection, vendors))
        }
      />
    </Container>
  )
}
