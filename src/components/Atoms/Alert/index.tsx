import { AlertProps } from '@material-ui/core'
import React from 'react'
import * as S from './styles' /** S = Styles */

const Alert = ({ ...props }: AlertProps) => <S.Wrapper {...props} />

export default Alert
