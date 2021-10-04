import * as S from './styles' /** S = Styles */

const Main = ({
  title = 'JP Gestão de Compras',
  description = 'Sistema para otimização do fluxo de gestão de compras para órgãos públicos.',
  logo = '/img/logo-dark.png',
  illustration = '/img/hero-illustration.svg'
}) => (
  <S.Wrapper>
    <main>
      <S.Logo src={logo} alt="Logo" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src={illustration}
        alt="Desenvolvedor sentado de frente para telas com códigos"
      />
      <br />
    </main>
  </S.Wrapper>
)

export default Main
