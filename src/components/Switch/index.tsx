import * as S from './styles' /** S = Styles */

export type SwitchProps = {
  checked?: boolean
  onCheck?: () => (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Switch = ({ checked = false, ...props }) => (
  <S.Wrapper checked={checked} {...props} color="warning" />
)

export default Switch
