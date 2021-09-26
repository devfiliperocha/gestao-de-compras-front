import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import ListItem from '.'

describe('<ListItem/>', () => {
  it('should render the ListItem', () => {
    renderWithTheme(
      <ListItem
        items={[
          {
            component: <h1>TESTE</h1>,
            value: 'teste'
          }
        ]}
      />
    )
    expect(screen.getByRole('heading', { name: /TESTE/i })).toBeInTheDocument()
  })
})
