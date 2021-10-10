import VendorList from './components/List'
import { VendorsContextProvider } from './context/vendors'
import React from 'react'
import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'

function VendorsMain() {
  return (
    <VendorsContextProvider>
      <AppLeftMenu>
        <VendorList />
      </AppLeftMenu>
    </VendorsContextProvider>
  )
}

export default VendorsMain
