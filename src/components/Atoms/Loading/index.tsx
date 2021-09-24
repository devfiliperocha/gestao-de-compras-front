import * as S from './styles' /** S = Styles */

export type LoadingProps = {
  size?: number
  variant?: 'accent' | 'primary'
}

const Loading = ({ size = 30, variant = 'primary' }: LoadingProps) => (
  <S.Wrapper
    color={variant}
    size={size}
    sx={{ margin: '0.3rem' }}
    thickness={5.7}
  />
)

export default Loading
