/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles' /** S = Styles */
import * as Icons from '@material-ui/icons'

export const iconTypes = Object.keys(Icons)

export type IconProps = {
  name: typeof iconTypes[number]
  size?: number
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'error'
    | 'warning'
    | 'success'
  onClick?: (event: React.SyntheticEvent) => void
}

const Icon = ({ name, size = 30, variant = 'primary', onClick }: IconProps) => {
  const IconComponent = (Icons as any)[name]
  return (
    <S.Wrapper
      onClick={onClick}
      color={variant}
      sx={{ fontSize: size, padding: '0px' }}
    >
      <IconComponent fontSize="inherit" />
    </S.Wrapper>
  )
}

export default Icon
