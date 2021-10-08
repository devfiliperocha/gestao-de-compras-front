import * as S from './styles' /** S = Styles */

type EmptyStateProps = {
  title: React.ReactNode
  button: React.ReactNode
}

const EmptyState = ({ title, button }: EmptyStateProps) => (
  <S.Wrapper>
    {title}
    {button}
  </S.Wrapper>
)

export default EmptyState
