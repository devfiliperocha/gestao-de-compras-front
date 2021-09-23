import { SwitchProps } from '@material-ui/core'
import { useState, useEffect } from 'react'
import * as S from './styles' /** S = Styles */

export type SwitchPropsBase = {
  checked?: boolean
} & Pick<SwitchProps, 'onChange'>

const Switch = ({ checked = false, onChange }: SwitchPropsBase) => {
  const [isChecked, setCheck] = useState(checked)

  useEffect(() => {
    setCheck(checked)
  }, [checked])

  const toggleCheck = (check: boolean) => setCheck(!check)

  return (
    <S.Wrapper
      onChange={onChange}
      onClick={() => toggleCheck(isChecked)}
      checked={isChecked}
      color="accent"
    />
  )
}

export default Switch
