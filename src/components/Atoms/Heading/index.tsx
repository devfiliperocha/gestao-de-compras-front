import * as S from './styles' /** S = Styles */

export type HeadingProps = {
  children: React.ReactNode
  lineLeft?: boolean
  color?: 'dark' | 'light'
}

const Heading = ({
  children,
  lineLeft = false,
  color = 'dark'
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft}>
    {children}
  </S.Wrapper>
)

export default Heading
