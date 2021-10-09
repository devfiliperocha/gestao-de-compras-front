import OrganList from './components/List'
import { OrgansContextProvider } from './context/organs'
import React from 'react'
import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'

function OrgansMain() {
  return (
    <OrgansContextProvider>
      <AppLeftMenu>
        <OrganList />
      </AppLeftMenu>
    </OrgansContextProvider>
  )
}

export default OrgansMain
