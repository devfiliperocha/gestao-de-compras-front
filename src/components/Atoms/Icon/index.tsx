/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles' /** S = Styles */
import * as IconsRegular from '@styled-icons/fluentui-system-regular'
import * as IconsFilled from '@styled-icons/fluentui-system-filled'

export type IconProps = {
  name: string
  size?: number
  type?: 'filled' | 'regular'
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'error'
    | 'warning'
    | 'success'
    | 'white'
  onClick?: (event: React.SyntheticEvent) => void
}

const Icon = ({
  name,
  size = 20,
  type = 'filled',
  variant = 'primary',
  onClick,
  ...props
}: IconProps) => {
  const IconComponent =
    type === 'regular'
      ? (IconsRegular as any)[name]
      : (IconsFilled as any)[name]

  return (
    <S.Wrapper
      {...props}
      onClick={onClick}
      htmlColor={variant}
      sx={{ fontSize: size, padding: '0px' }}
    >
      <IconComponent />
    </S.Wrapper>
  )
}

export default Icon
