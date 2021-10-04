import * as S from './styles' /** S = Styles */
import Typography from 'components/Atoms/Typography'
import Icon from 'components/Atoms/Icon'

export type DashboardCardProps = {
  icon:
    | 'Box'
    | 'VehicleTruckProfile'
    | 'Building'
    | 'DocumentOnePage'
    | 'Receipt'
    | 'ReceiptCube'
    | 'ReceiptMoney'
    | 'RibbonStar'
    | 'ChartPerson'
    | 'TaskListSquareLtr'
  title: string
}

const DashboardCard = ({ icon, title }: DashboardCardProps) => (
  <S.Wrapper>
    <S.Card>
      <Icon type="regular" name={icon} size={85} />
      <Typography color="primary" variant="h2">
        {title}
      </Typography>
    </S.Card>
  </S.Wrapper>
)

export default DashboardCard
