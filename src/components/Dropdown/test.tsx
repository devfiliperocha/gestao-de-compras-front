import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Dropdown from '.'
import userEvent from '@testing-library/user-event'

const topFilms = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
]

describe('<Dropdown/>', () => {
  it('should render the Dropdown', () => {
    renderWithTheme(<Dropdown options={topFilms} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('should open the Dropdown on open prop is passed', () => {
    renderWithTheme(<Dropdown options={topFilms} open={true} />)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(
      screen.getByRole('option', {
        name: /the shawshank redemption/i
      })
    ).toBeInTheDocument()
  })

  it('should not open dropdown on click, when Dropdown is loading', () => {
    renderWithTheme(<Dropdown options={topFilms} loading={true} />)
    const component = screen.getByRole('combobox')
    userEvent.click(component)
    expect(
      screen.getByRole('combobox', { expanded: false })
    ).toBeInTheDocument()
  })

  it('should open dropdown on click, when Dropdown is not loading', () => {
    renderWithTheme(<Dropdown options={topFilms} loading={false} />)
    userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('combobox', { expanded: true })).toBeInTheDocument()
  })

  it('should close dropdown on click in close button', () => {
    renderWithTheme(<Dropdown options={topFilms} loading={false} />)
    userEvent.click(screen.getByRole('combobox'))
    userEvent.click(screen.getByRole('button', { name: 'Fechar' }))
    expect(
      screen.getByRole('combobox', { expanded: false })
    ).toBeInTheDocument()
  })

  it('should filter dropdown by prop listLabelKey when type', async () => {
    renderWithTheme(
      <Dropdown options={topFilms} listLabelKey="title" open={true} />
    )

    userEvent.type(screen.getByRole('textbox'), 'godfather')

    const options = await screen.findAllByRole('option')
    expect(options).toHaveLength(2)

    expect(
      screen.getByRole('option', {
        name: 'The Godfather'
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('option', {
        name: 'The Godfather: Part II'
      })
    ).toBeInTheDocument()
  })
})
