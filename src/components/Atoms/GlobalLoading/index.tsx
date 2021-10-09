import { Box } from '@material-ui/core'
import Loading from 'components/Atoms/Loading'
import React from 'react'
import * as S from './styles' /** S = Styles */

export type LoadingProps = {
  size?: number
  variant?: 'accent' | 'primary'
}

const GlobalLoading = ({ size = 30, variant = 'primary' }: LoadingProps) => (
  <S.Wrapper open disableEnforceFocus disableAutoFocus>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        padding: '5rem'
      }}
    >
      <Loading size={size} variant={variant} />
    </Box>
  </S.Wrapper>
)

export default GlobalLoading
