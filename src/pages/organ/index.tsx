import React from 'react'
import { withAuth } from 'components/hoc/Auth'
import OrgansMain from 'Menus/Organ/organs'

function Organs() {
  return <OrgansMain />
}

export default withAuth(Organs)
