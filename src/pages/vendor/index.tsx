import React from 'react'
import { withAuth } from 'components/hoc/Auth'
import VendorsMain from 'Menus/Vendor/vendors'

function Vendors() {
  return <VendorsMain />
}

export default withAuth(Vendors)
