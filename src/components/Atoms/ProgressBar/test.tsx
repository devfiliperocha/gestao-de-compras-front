import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import ProgressBar from '.'

describe('<ProgressBar/>', () => {
  it('should render the ProgressBar', () => {
    renderWithTheme(<ProgressBar progress={20} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should render the ProgressBar with percentage filled', () => {
    renderWithTheme(<ProgressBar progress={30} />)
    expect(
      screen.getByRole('progressbar').getAttribute('aria-valuenow')
    ).toEqual('30')
  })
})
