import { IconButtonProps } from '@material-ui/core'
import React from 'react'
import * as S from './styles' /** S = Styles */

export type IconButtonPropsBase = {
  children?: React.ReactNode
} & IconButtonProps

const IconButton = ({ children, ...props }: IconButtonPropsBase) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default IconButton
