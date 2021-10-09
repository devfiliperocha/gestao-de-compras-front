import React from 'react'
import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'
import { OrganContextProvider, OrganContext } from './context/organ'
import Page from './components/Page'

function OrganPage() {
  return (
    <OrganContextProvider>
      <OrganContext.Consumer>
        {({ organ }) => {
          return <AppLeftMenu>{organ.id && <Page />}</AppLeftMenu>
        }}
      </OrganContext.Consumer>
    </OrganContextProvider>
  )
}

export default OrganPage
