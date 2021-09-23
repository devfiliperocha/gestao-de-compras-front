import * as S from './styles' /** S = Styles */

export type DividerProps = {
  light?: boolean
}

const Divider = ({ light = false }: DividerProps) => <S.Wrapper light={light} />

export default Divider
