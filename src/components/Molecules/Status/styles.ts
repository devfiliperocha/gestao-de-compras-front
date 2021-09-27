import styled, { css } from 'styled-components'
import IconButton from 'components/Atoms/IconButton'
import Button from 'components/Atoms/Button'

export const Wrapper = styled(Button)`
  ${({ theme, color }) => css`
    ${color === 'warning' &&
    css`
      color: ${theme.palette.accent.main};
    `}
    && {
      text-transform: capitalize;
      margin-right: ${theme.spacings.small};
    }
  `}
`
export const IconWrapper = styled(IconButton)`
  ${({ theme, color }) => css`
    ${color === 'warning' &&
    css`
      color: ${theme.palette.accent.main};
    `}
  `}
`
