import * as S from './styles' /** S = Styles */
import { useTheme } from '@material-ui/core/styles'

export type ProgressBarProps = {
  progress?: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const theme = useTheme()
  return (
    <S.Wrapper
      sx={{ height: 8, background: theme.palette.background.secondary }}
      color="primary"
      variant="determinate"
      value={progress}
    />
  )
}

export default ProgressBar
