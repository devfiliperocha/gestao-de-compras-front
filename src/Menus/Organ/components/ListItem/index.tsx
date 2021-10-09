import * as S from './styles' /** S = Styles */
import { OrganProps } from '../../types/organs'
import Button from 'components/Atoms/Button'
import Typography from 'components/Atoms/Typography'

type OrganListItemProps = {
  organ: OrganProps
  onActionClick?: (event: React.SyntheticEvent) => void
}

const OrganListItem = ({
  organ,
  onActionClick,
  ...props
}: OrganListItemProps) => (
  <S.Wrapper {...props}>
    <S.TitleWrapper>
      <Typography color="primary" variant="h3">
        {organ.name}
      </Typography>
    </S.TitleWrapper>
    <S.ActionWrapper>
      <S.ShowWrapper>
        <Button onClick={onActionClick}>Visualizar</Button>
      </S.ShowWrapper>
    </S.ActionWrapper>
  </S.Wrapper>
)

export default OrganListItem
