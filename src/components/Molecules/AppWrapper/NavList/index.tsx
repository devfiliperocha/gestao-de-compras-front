import * as S from './styles' /** S = Styles */
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'
import Icon from 'components/Atoms/Icon'
import { useRouter } from 'next/dist/client/router'
import { AppMenus, OrganMenus, VendorMenus } from 'types/utils'
import { UserContext } from 'contexts/user'
import React, { useContext, useEffect, useState } from 'react'
import Typography from 'components/Atoms/Typography'

export type NavListProps = {
  items: typeof OrganMenus | typeof VendorMenus
}

const NavList = () => {
  const [userType, setUserType] = useState('')
  const router = useRouter()
  const userContext = useContext(UserContext)
  const { user } = userContext

  useEffect(() => {
    if (user?.role?.name) {
      setUserType(user.role.name)
    }
  }, [user])

  const menus =
    userType === 'vendor'
      ? (Object.keys(VendorMenus) as AppMenus[])
      : (Object.keys(OrganMenus) as AppMenus[])
  const items = userType === 'vendor' ? VendorMenus : OrganMenus

  return (
    <S.Wrapper>
      <ListItem dense sx={{ paddingBottom: '1rem' }}>
        <ListItemText
          primary={
            <>
              <Typography variant="caption" color="info">
                Logado como:
              </Typography>

              <Typography variant="h6" color="white">
                {user.email}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider />
      <S.List>
        {items &&
          userType &&
          menus.map((menu) => {
            const menuActive =
              router.pathname === '/' && menu === 'home'
                ? true
                : router.pathname.toLowerCase().includes(menu.toLowerCase())
                ? true
                : false

            return (
              <ListItem
                button
                key={menu}
                sx={{
                  paddingLeft: '3rem',
                  borderLeft: menuActive ? '0.3rem solid' : 'none',
                  borderColor: menuActive ? 'accent.main' : 'transparent'
                }}
                onClick={() => router.push(`/${menu === 'home' ? '' : menu}`)}
              >
                <ListItemIcon>
                  <Icon
                    name={items[menu]?.icon || 'AppFolder'}
                    variant="white"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="overline" color="white">
                      {items[menu]?.label}
                    </Typography>
                  }
                />
              </ListItem>
            )
          })}
      </S.List>
    </S.Wrapper>
  )
}

export default NavList
