import Button from 'components/Atoms/Button'
import Typography from 'components/Atoms/Typography'
import * as S from './styles' /** S = Styles */

type EmptyStateProps = {
  menuName: string
}

const EmptyState = ({ menuName }: EmptyStateProps) => (
  <S.Wrapper>
    <Typography variant="h5">
      Você ainda não tem nenhum {menuName} cadastrado.
    </Typography>
    <Button>Cadastrar {menuName}</Button>
  </S.Wrapper>
)

export default EmptyState
