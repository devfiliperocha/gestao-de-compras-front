import * as S from './styles' /** S = Styles */
import Icon from 'components/Atoms/Icon'

export type StatusProps = {
  type: 'error' | 'warning' | 'success'
  text: string
}

const Status = ({ text, type }: StatusProps) => (
  <S.Wrapper
    disableRipple
    variant="text"
    size="small"
    color={type}
    sx={{
      fontSize: 12,
      fontWeight: 'medium',
      textTransform: 'capitalize'
    }}
    startIcon={<Icon variant={type} size={40} name="Circle" />}
  >
    {text}
  </S.Wrapper>
)

export default Status
