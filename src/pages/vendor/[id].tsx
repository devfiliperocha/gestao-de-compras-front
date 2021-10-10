import React from 'react'
import { withAuth } from 'components/hoc/Auth'
import VendorPage from 'Menus/Vendor/vendor'

function Vendor() {
  return <VendorPage />
}

export default withAuth(Vendor)
