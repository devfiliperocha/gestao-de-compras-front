import AppBar from 'components/Molecules/AppWrapper/AppBar'
import React from 'react'
import * as S from './styles' /** S = Styles */
import Drawer from 'components/Molecules/AppWrapper/Drawer'

const ResponsiveDrawer: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <AppBar title="JP Gestão de Compras" />
      <Drawer />
      <S.Container component="main">
        <S.ContainerChildren>{children}</S.ContainerChildren>
      </S.Container>
    </S.Wrapper>
  )
}

export default ResponsiveDrawer
