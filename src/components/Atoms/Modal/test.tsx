import { screen, render } from '@testing-library/react'
import Modal from '.'

describe('<Modal/>', () => {
  it('should render the Modal', () => {
    const { container } = render(<Modal />)
    expect(screen.getByRole('modal')).toBeInTheDocument()
  })
})
