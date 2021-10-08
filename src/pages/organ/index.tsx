import OrganPage from 'components/Templates/Organ/OrganPage'
import { OrgansContextProvider } from 'contexts/organs'
import React from 'react'
import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'
import { withAuth } from 'components/hoc/Auth'

function OrgansPage() {
  return (
    <OrgansContextProvider>
      <AppLeftMenu>
        <OrganPage />
      </AppLeftMenu>
    </OrgansContextProvider>
  )
}

export default withAuth(OrgansPage)
