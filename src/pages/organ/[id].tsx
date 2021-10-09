import React from 'react'
import { withAuth } from 'components/hoc/Auth'
import OrganPage from 'Menus/Organ/organ'

function Organ() {
  return <OrganPage />
}

export default withAuth(Organ)
