import { RadioProps } from '@material-ui/core'
import { useEffect, useState } from 'react'
import * as S from './styles' /** S = Styles */

export type RadioPropsBase = {
  checked?: boolean
} & Pick<RadioProps, 'onChange'>

const Radio = ({ checked = false, onChange }: RadioPropsBase) => {
  const [isChecked, setCheck] = useState(checked)

  useEffect(() => {
    setCheck(checked)
  }, [checked])

  const toggleCheck = (check: boolean) => setCheck(!check)

  return (
    <S.Wrapper
      size="medium"
      onChange={onChange}
      onClick={() => toggleCheck(isChecked)}
      checked={isChecked}
      color="accent"
    />
  )
}

export default Radio
