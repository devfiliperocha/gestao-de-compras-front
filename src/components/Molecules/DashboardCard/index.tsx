import * as S from './styles' /** S = Styles */
import Typography from 'components/Atoms/Typography'
import Icon from 'components/Atoms/Icon'

export type DashboardCardProps = {
  icon:
    | 'LocalShippingOutlined'
    | 'AccountBalanceOutlined'
    | 'DescriptionOutlined'
    | 'AccountBalanceOutlined'
    | 'ReceiptOutlined'
    | 'InsertChartOutlinedOutlined'
  title: string
}

const DashboardCard = ({ icon, title }: DashboardCardProps) => (
  <S.Wrapper>
    <Icon name={icon} size={85} />
    <Typography color="primary" variant="h2">
      {title}
    </Typography>
  </S.Wrapper>
)

export default DashboardCard
