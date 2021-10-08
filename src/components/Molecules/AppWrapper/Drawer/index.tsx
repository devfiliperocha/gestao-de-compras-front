import { Drawer } from '@material-ui/core'
import LeftNav from 'components/Molecules/AppWrapper/LeftNav'
import React, { useContext } from 'react'
import * as S from './styles' /** S = Styles */
import { AppContext } from 'contexts/app'

const AppDrawer = () => {
  const { mobileOpen, setMobileOpen, drawerWidth } = useContext(AppContext)

  const mobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container = undefined

  return (
    <S.Wrapper
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={mobileDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'primary.dark'
          }
        }}
      >
        <LeftNav />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'primary.dark'
          }
        }}
        open
      >
        <LeftNav />
      </Drawer>
    </S.Wrapper>
  )
}

export default AppDrawer
