import { Button as ButtonBase, IconProps } from '@material-ui/core'
import React from 'react'
import * as S from './styles' /** S = Styles */

type ButtonBaseProps = Partial<typeof ButtonBase>

type Variants = 'primary' | 'secondary' | 'link' | 'list'

const variantsConfig: Record<Variants, ButtonBaseProps> = {
  primary: {
    color: 'primary',
    variant: 'contained',
    disableElevation: true,
    size: 'medium'
  },
  secondary: {
    color: 'secondary',
    variant: 'outlined',
    size: 'medium'
  },
  link: {
    color: 'warning',
    variant: 'text',
    size: 'medium'
  },
  list: {
    color: 'primary',
    variant: 'text',
    size: 'medium'
  }
}

export type ButtonProps = {
  children?: React.ReactNode
  variant?: Variants
  leftIcon?: IconProps
  rightIcon?: IconProps
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  variant = 'primary',
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    {...variantsConfig[variant]}
    endIcon={rightIcon}
    startIcon={leftIcon}
    {...props}
  >
    {!!children && <span>{children} </span>}
  </S.Wrapper>
)

export default Button
