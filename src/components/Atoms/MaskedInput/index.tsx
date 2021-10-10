import { TextFieldProps } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import InputMask, { Props } from 'react-input-mask'
import * as S from './styles' /** S = Styles */

export type TextFieldPropsBase = {
  value?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  mask: string
  disabled?: boolean
  requiredCharCount?: number
  requiredCharCountRegex?: RegExp
} & TextFieldProps

const MasketInput = ({
  value,
  label,
  error = false,
  helperText = '',
  onChange = () => null,
  iconLeft,
  iconRight,
  mask,
  disabled = false,
  fullWidth = false,
  placeholder = '',
  requiredCharCount = 0,
  requiredCharCountRegex = /['"]/g
}: TextFieldPropsBase) => {
  const [atualValue, setValue] = useState(value)

  useEffect(() => {
    setValue(value)
  }, [value])

  return (
    <InputMask
      alwaysShowMask={false}
      mask={mask}
      value={atualValue}
      onChange={onChange}
      disabled={disabled}
      onBlur={(e) => {
        if (
          requiredCharCount > 0 &&
          atualValue?.replace(requiredCharCountRegex, '').length !==
            requiredCharCount
        ) {
          e.target.value = ''
          onChange(e)
        }
      }}
    >
      {(inputProps: React.Component<Props>) => (
        <S.Wrapper
          {...inputProps}
          placeholder={placeholder}
          disabled={disabled}
          fullWidth={fullWidth}
          size="small"
          color="info"
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
        />
      )}
    </InputMask>
  )
}

export default MasketInput
