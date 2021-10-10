import React from 'react'
import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'
import { VendorContextProvider, VendorContext } from './context/vendor'
import Page from './components/Page'

function VendorPage() {
  return (
    <VendorContextProvider>
      <VendorContext.Consumer>
        {({ vendor }) => {
          return <AppLeftMenu>{ vendor.id && <Page />}</AppLeftMenu>
        }}
      </VendorContext.Consumer>
    </VendorContextProvider>
  )
}

export default VendorPage
