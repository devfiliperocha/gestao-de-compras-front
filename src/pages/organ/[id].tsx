import React from 'react'
import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'
import { withAuth } from 'components/hoc/Auth'
import { OrganContextProvider, OrganContext } from 'contexts/organ'
import OrganPage from 'components/Templates/Organ/OrganPage'

function OrganApprovePage() {
  return (
    <OrganContextProvider>
      <OrganContext.Consumer>
        {({ organ }) => {
          return <AppLeftMenu>{organ.id && <OrganPage />}</AppLeftMenu>
        }}
      </OrganContext.Consumer>
    </OrganContextProvider>
  )
}

export default withAuth(OrganApprovePage)
