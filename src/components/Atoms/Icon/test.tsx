import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Icon from '.'

describe('<Icon/>', () => {
  it('should render the Icon', () => {
    renderWithTheme(<Icon data-testid="icon" name="VehicleTruckProfile" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render the Icon with primary color by default', () => {
    renderWithTheme(<Icon data-testid="icon" name="VehicleTruckProfile" />)
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: '#204372'
    })
  })

  it('should render the Icon with accent color', () => {
    renderWithTheme(
      <Icon name="VehicleTruckProfile" data-testid="icon" variant="accent" />
    )
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: '#f5a818'
    })
  })

  it('should render the Icon with secondary color', () => {
    renderWithTheme(
      <Icon name="VehicleTruckProfile" data-testid="icon" variant="secondary" />
    )
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: '#3e98c7'
    })
  })

  it('should render the Icon with warning color', () => {
    renderWithTheme(
      <Icon name="VehicleTruckProfile" data-testid="icon" variant="warning" />
    )
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: '#efc880'
    })
  })

  it('should render the Icon with info color', () => {
    renderWithTheme(
      <Icon name="VehicleTruckProfile" data-testid="icon" variant="info" />
    )
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: '#0288d1'
    })
  })

  it('should render the Icon with white color', () => {
    renderWithTheme(
      <Icon name="VehicleTruckProfile" data-testid="icon" variant="white" />
    )
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: '#FCFCFC'
    })
  })

  it('should render the Icon with error color', () => {
    renderWithTheme(
      <Icon name="VehicleTruckProfile" data-testid="icon" variant="error" />
    )
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: '#f54531'
    })
  })

  it('should render the Icon with white success', () => {
    renderWithTheme(
      <Icon name="VehicleTruckProfile" data-testid="icon" variant="success" />
    )
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: '#36B369'
    })
  })

  it('should render the Icon with grey success', () => {
    renderWithTheme(
      <Icon name="VehicleTruckProfile" data-testid="icon" variant="grey" />
    )
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: '#656565'
    })
  })
  656565
  it('should execute event on trigger click', () => {
    const handleClick = jest.fn()
    renderWithTheme(
      <Icon
        data-testid="icon"
        name="VehicleTruckProfile"
        onClick={handleClick}
      />
    )
    fireEvent.click(screen.getByTestId('icon'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
