import * as S from './styles' /** S = Styles */
import { Toolbar } from '@material-ui/core'
import React, { useContext } from 'react'
import IconButton from 'components/Atoms/IconButton'
import Icon from 'components/Atoms/Icon'
import Typography from 'components/Atoms/Typography'
import { UserContext } from 'contexts/user'

type AppBarProps = {
  title: string
}

const AppBar = ({ title }: AppBarProps) => {
  const context = useContext(UserContext)
  const { mobileOpen, setMobileOpen, drawerWidth } = context

  const mobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <S.Wrapper
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: 'white',
        color: 'primary.main'
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={mobileDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Icon name="LineHorizontal3" variant="primary" />
        </IconButton>
        <Typography variant="h5">{title}</Typography>
      </Toolbar>
    </S.Wrapper>
  )
}

export default AppBar
