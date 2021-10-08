import { useContext } from 'react'
import { AppContext } from 'contexts/app'
import * as S from './styles' /** S = Styles */
import AppBar from 'components/Molecules/AppWrapper/AppBar'
import Drawer from 'components/Molecules/AppWrapper/Drawer'
import Loading from 'components/Atoms/Loading'
import Alert from 'components/Atoms/Alert'
import FullSizeContainer from 'components/Atoms/FullSizeContainer'

const AppLeftMenu: React.FC = ({ children }) => {
  const { isContainerLoading, hasContainerError, containerErrorMsg } =
    useContext(AppContext)

  return (
    <S.Wrapper>
      <AppBar title="JP Gestão de Compras" />
      <Drawer />
      <S.Container component="main">
        {isContainerLoading && (
          <FullSizeContainer>
            <Loading />
          </FullSizeContainer>
        )}
        {!isContainerLoading && !hasContainerError && (
          <S.ContainerChildren>{children}</S.ContainerChildren>
        )}
        {hasContainerError && (
          <FullSizeContainer>
            <Alert severity="error">{containerErrorMsg}</Alert>
          </FullSizeContainer>
        )}
      </S.Container>
    </S.Wrapper>
  )
}

export default AppLeftMenu
