import { PaperProps } from '@material-ui/core'
import * as S from './styles' /** S = Styles */

export type ListItemProps = {
  children: React.ReactNode | React.ReactNode[]
} & PaperProps

const ListItem = ({ children, ...props }: ListItemProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default ListItem
