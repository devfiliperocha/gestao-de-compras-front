import { screen } from '@testing-library/react'
import { ReferenceTermsMockData } from 'types/reference-term.mock'
import { renderWithTheme } from 'utils/tests/helpers'
import ReferenceTermList from '.'

describe('<ReferenceTermList/>', () => {
  it('should render the ReferenceTermList', () => {
    renderWithTheme(<ReferenceTermList termsData={ReferenceTermsMockData} />)
    expect(
      screen.getByRole('button', { name: /Nº do Termo/i })
    ).toBeInTheDocument()
  })
})
