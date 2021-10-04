import { TypographyProps } from '@material-ui/core'
import * as S from './styles' /** S = Styles */

export type TypographyPropsBase = {
  children: React.ReactNode
  color?:
    | 'dark'
    | 'light'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'white'
} & Pick<TypographyProps, 'variant'>

const Typography = ({
  children,
  color = 'dark',
  variant
}: TypographyPropsBase) => (
  <S.Wrapper color={color} variant={variant}>
    {children}
  </S.Wrapper>
)

export default Typography
