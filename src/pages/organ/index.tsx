import OrganList from 'components/Templates/Organ/OrganList'
import { OrgansContextProvider } from 'contexts/organs'
import React from 'react'
import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'
import { withAuth } from 'components/hoc/Auth'

function OrgansPage() {
  return (
    <OrgansContextProvider>
      <AppLeftMenu>
        <OrganList />
      </AppLeftMenu>
    </OrgansContextProvider>
  )
}

export default withAuth(OrgansPage)
