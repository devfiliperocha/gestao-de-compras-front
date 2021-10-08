import { ContainerProps } from '@material-ui/core'
import React from 'react'
import * as S from './styles' /** S = Styles */

const FullSizeContainer = ({ ...props }: ContainerProps) => (
  <S.Wrapper
    {...props}
    sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'transparent'
    }}
  />
)

export default FullSizeContainer
