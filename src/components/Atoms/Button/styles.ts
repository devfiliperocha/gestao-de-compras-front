import styled from 'styled-components'
import ButtonBase from '@material-ui/core/Button'
import media from 'styled-media-query'

export const Wrapper = styled(ButtonBase)`
  text-transform: capitalize;
  font-size: 14px;
  ${media.lessThan('large')`
  `}
`
