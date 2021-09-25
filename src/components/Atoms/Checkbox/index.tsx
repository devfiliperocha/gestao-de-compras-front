import { CheckboxProps } from '@material-ui/core'
import { useState, useEffect } from 'react'
import * as S from './styles' /** S = Styles */

export type CheckboxPropsBase = {
  checked?: boolean
  indeterminate?: boolean
} & Pick<CheckboxProps, 'onChange'>

const Checkbox = ({
  checked = false,
  indeterminate = false,
  onChange
}: CheckboxPropsBase) => {
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
      indeterminate={indeterminate}
      color="accent"
    />
  )
}

export default Checkbox
