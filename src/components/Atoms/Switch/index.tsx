import {
  FormControl,
  FormHelperText,
  FormControlLabel,
  SwitchProps
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import * as S from './styles' /** S = Styles */

export type SwitchPropsBase = {
  checked?: boolean
  error?: boolean
  helperText?: string
  label?: string
} & Pick<SwitchProps, 'onChange'>

const Switch = ({
  checked = false,
  onChange,
  error = false,
  helperText = '',
  label = ''
}: SwitchPropsBase) => {
  const [isChecked, setCheck] = useState(checked)

  useEffect(() => {
    setCheck(checked)
  }, [checked])

  const toggleCheck = (check: boolean) => setCheck(!check)

  return (
    <FormControl error={error}>
      {label && (
        <FormControlLabel
          label={label}
          checked={isChecked}
          control={
            <S.Wrapper
              onChange={onChange}
              id="switch"
              color="accent"
              onClick={() => toggleCheck(isChecked)}
            />
          }
        />
      )}

      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default Switch
