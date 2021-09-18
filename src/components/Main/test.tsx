import { screen, render } from '@testing-library/react'
import Main from '.'

describe('<Main/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /JP Gestão de Compras/i })
    ).toBeInTheDocument()
    // Cria um snapshot para comparar as mudanças nos arquivos com ele.
    // Para garantir
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#001d46' })
  })
})
