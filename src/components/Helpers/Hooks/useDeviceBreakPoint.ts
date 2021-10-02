import { useTheme } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export type ResponsiveBreaks = {
  device: 'smallMobile' | 'largeMobile' | 'tablet' | 'desktop'
}
export default function useDeviceBreakPoint({ device }: ResponsiveBreaks) {
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))
  const tablet = useMediaQuery(theme.breakpoints.only('sm'))

  const smallMobile = useMediaQuery(
    `@media (min-width:0px) and (max-width:320px)`
  )
  const largeMobile = useMediaQuery(
    `@media (min-width:321px) and (max-width:414px)`
  )

  const deviceConfig = {
    smallMobile,
    largeMobile,
    tablet,
    desktop
  }

  return deviceConfig[device]
}
