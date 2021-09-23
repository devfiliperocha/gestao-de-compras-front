import { screen, render } from '@testing-library/react'
import MediaQuery from '.'

describe('<MediaQuery/>', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaQuery greaterThan="medium">
          <h1 data-testid="desktop">Only on desktop</h1>
        </MediaQuery>
        <MediaQuery lessThan="medium">
          <h1 data-testid="mobile">Only on mobile</h1>
        </MediaQuery>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide, based on the media passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
