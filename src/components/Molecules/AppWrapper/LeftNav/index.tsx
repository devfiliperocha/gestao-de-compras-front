import * as S from './styles' /** S = Styles */
import { Grid } from '@material-ui/core'
import NavList from 'components/Molecules/AppWrapper/NavList'
import Typography from 'components/Atoms/Typography'

const LeftNav = () => {
  return (
    <S.Wrapper>
      <S.UserCard>
        <Grid container direction="column">
          <Grid item>
            <img
              style={{ width: '40px' }}
              src={process.env.NEXT_PUBLIC_ORGAN_FLAG}
            />
          </Grid>
          <Grid item>
            <Typography variant="h5" color="white">
              {process.env.NEXT_PUBLIC_ORGAN_NAME}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" color="white">
              {process.env.NEXT_PUBLIC_ORGAN_CITY}
            </Typography>
          </Grid>
        </Grid>
      </S.UserCard>
      <NavList />
    </S.Wrapper>
  )
}

export default LeftNav
