import Typography from 'components/Atoms/Typography'
import * as S from './styles' /** S = Styles */

export type SectionTitleProps = {
  children: React.ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <S.Wrapper>
    <Typography color="primary" variant="h3">
      {children}
    </Typography>
  </S.Wrapper>
)

export default SectionTitle
