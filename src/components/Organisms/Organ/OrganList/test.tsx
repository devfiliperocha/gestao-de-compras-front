import { screen } from '@testing-library/react'
import { OrgansMockData } from 'types/organ.mock'
import { renderWithTheme } from 'utils/tests/helpers'
import OrganList from '.'

describe('<OrganList/>', () => {
  it('should render the OrganList', () => {
    renderWithTheme(<OrganList organsData={OrgansMockData} />)
    expect(
      screen.getByRole('button', { name: /Razão Social/i })
    ).toBeInTheDocument()
  })
})
