import * as S from './styles' /** S = Styles */
import { Divider, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import NavList from 'components/Molecules/AppWrapper/NavList'
import { UserContext } from 'contexts/user'
import Typography from 'components/Atoms/Typography'

const LeftNav = () => {
  const userContext = useContext(UserContext)
  const { user } = userContext

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
