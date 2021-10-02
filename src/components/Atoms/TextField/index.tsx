import { TextFieldProps } from '@material-ui/core'
import { useEffect, useState } from 'react'
import * as S from './styles' /** S = Styles */

export type TextFieldPropsBase = {
  value?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
} & TextFieldProps

const TextField = ({
  value,
  label,
  error = false,
  helperText = '',
  onChange,
  iconLeft,
  iconRight,
  ...props
}: TextFieldPropsBase) => {
  const [atualValue, setValue] = useState(value)

  useEffect(() => {
    setValue(value)
  }, [value])

  return (
    <S.Wrapper
      value={atualValue}
      size="small"
      color="info"
      onChange={onChange}
      {...(label ? { label } : { hiddenLabel: true })}
      error={error}
      helperText={helperText}
      FormHelperTextProps={{
        error: error,
        sx: {
          display: error ? 'block' : 'none'
        }
      }}
      InputProps={{
        startAdornment: iconLeft,
        endAdornment: iconRight
      }}
      {...props}
    />
  )
}

export default TextField
