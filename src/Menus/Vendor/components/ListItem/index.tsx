import * as S from './styles' /** S = Styles */
import { VendorProps } from '../../types/vendors'
import Button from 'components/Atoms/Button'
import Status from 'components/Molecules/Status'
import Typography from 'components/Atoms/Typography'

type VendorListItemProps = {
  vendor: VendorProps
  onStatusClick?: (status: VendorProps['status']['type']) => void
  onActionClick?: (event: React.SyntheticEvent) => void
}

const VendorListItem = ({
  vendor,
  onStatusClick,
  onActionClick,
  ...props
}: VendorListItemProps) => (
  <S.Wrapper {...props}>
    <S.TitleWrapper>
      <Typography color="primary" variant="h3">
        {vendor.corporateName}
      </Typography>
    </S.TitleWrapper>

    <S.StatusWrapper>
      <Status
        onClick={onStatusClick}
        type={vendor.status.type}
        text={vendor.status.text}
      />
    </S.StatusWrapper>
    <S.ActionWrapper>
      <S.ShowWrapper>
        <Button onClick={onActionClick}>Visualizar</Button>
      </S.ShowWrapper>
    </S.ActionWrapper>
  </S.Wrapper>
)

export default VendorListItem
