import { ButtonProps } from '@material-ui/core'
import React from 'react'
import * as S from './styles' /** S = Styles */

export type ButtonPropsBase = {
  children?: React.ReactNode
  color?: 'primary' | 'secondary' | 'info' | 'error' | 'success' | 'warning'
  variant?: 'contained' | 'outlined' | 'text'
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
} & Pick<ButtonProps, 'onClick'>

const Button = ({
  children,
  color = 'primary',
  variant = 'contained',
  iconLeft,
  iconRight,
  onClick
}: ButtonPropsBase) => (
  <S.Wrapper
    color={color}
    variant={variant}
    startIcon={iconLeft}
    endIcon={iconRight}
    disableElevation
    onClick={onClick}
  >
    {!!children && <span>{children} </span>}
  </S.Wrapper>
)

export default Button
