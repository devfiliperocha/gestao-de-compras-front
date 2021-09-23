import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Divider from '.'

describe('<Divider/>', () => {
  it('should render the Divider', () => {
    renderWithTheme(<Divider />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
  it('should render a light Divider if passed light prop', () => {
    renderWithTheme(<Divider light={true} />)
    expect(screen.getByRole('separator')).toHaveClass('MuiDivider-light')
  })
})
