import VendorPage from 'components/Templates/Vendor/VendorPage'
import { VendorsContextProvider } from 'contexts/vendors'
import React from 'react'
import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'
import { withAuth } from 'components/hoc/Auth'

function VendorsPage() {
  return (
    <VendorsContextProvider>
      <AppLeftMenu>
        <VendorPage />
      </AppLeftMenu>
    </VendorsContextProvider>
  )
}

export default withAuth(VendorsPage)
