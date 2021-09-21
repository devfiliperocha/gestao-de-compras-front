import React from 'react'
import * as S from './styles' /** S = Styles */

export type ButtonProps = {
  children?: React.ReactNode
  color?: 'primary' | 'secondary' | 'info' | 'error' | 'success' | 'warning'
  variant?: 'contained' | 'outlined' | 'text'
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Button = ({
  children,
  color = 'primary',
  variant = 'contained',
  iconLeft,
  iconRight
}: ButtonProps) => (
  <S.Wrapper
    color={color}
    variant={variant}
    startIcon={iconLeft}
    endIcon={iconRight}
    disableElevation
  >
    {!!children && <span>{children} </span>}
  </S.Wrapper>
)

export default Button
