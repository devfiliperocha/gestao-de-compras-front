import { screen, render } from '@testing-library/react'
import Button from '.'

describe('<Button/>', () => {
  it('should render the button', () => {
    const { container } = render(<Button />)
    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
