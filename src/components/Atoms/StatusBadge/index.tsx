import * as S from './styles' /** S = Styles */
import { Badge } from '@material-ui/core'
import Icon from 'components/Atoms/Icon'

type Status = 'error' | 'warning' | 'success'

export type StatusBadgeProps = {
  status?: Status
  children: React.ReactNode
  onClick?: () => void
}

const StatusBadge = ({
  status = undefined,
  children,
  onClick = () => null
}: StatusBadgeProps) => {
  const iconsByVariant: Record<Status, string> = {
    error: 'Dismiss',
    success: 'Checkmark',
    warning: 'Warning'
  }
  return (
    <S.Wrapper onClick={onClick}>
      <Badge
        badgeContent={
          status && (
            <Icon
              name={iconsByVariant[status]}
              size={25}
              type="regular"
              variant={status}
            />
          )
        }
      >
        {children}
      </Badge>
    </S.Wrapper>
  )
}
export default StatusBadge
