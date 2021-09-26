import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import ListLabel from '.'

describe('<ListLabel/>', () => {
  it('should render the ListLabel', () => {
    renderWithTheme(
      <ListLabel
        items={[
          {
            component: <h1>TESTE</h1>
          }
        ]}
      />
    )
    expect(screen.getByRole('heading', { name: /TESTE/i })).toBeInTheDocument()
  })
})
