import React from 'react'
import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'
import { withAuth } from 'components/hoc/Auth'
import { VendorContextProvider, VendorContext } from 'contexts/vendor'
import VendorAprovationPage from 'components/Templates/Vendor/VendorAprovationPage'

function VendorApprovePage() {
  return (
    <VendorContextProvider>
      <VendorContext.Consumer>
        {({ vendor }) => {
          return (
            <AppLeftMenu>{vendor.id && <VendorAprovationPage />}</AppLeftMenu>
          )
        }}
      </VendorContext.Consumer>
    </VendorContextProvider>
  )
}

export default withAuth(VendorApprovePage)
