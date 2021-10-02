import useDeviceBreakPoint from './useDeviceBreakPoint'

export default function useResponsive() {
  const desktop = useDeviceBreakPoint({ device: 'desktop' })
  const tablet = useDeviceBreakPoint({ device: 'tablet' })
  const smallMobile = useDeviceBreakPoint({ device: 'smallMobile' })
  const largeMobile = useDeviceBreakPoint({ device: 'largeMobile' })

  return smallMobile
    ? 'smallMobile'
    : largeMobile
    ? 'largeMobile'
    : tablet
    ? 'tablet'
    : desktop
    ? 'desktop'
    : 'desktop'
}
