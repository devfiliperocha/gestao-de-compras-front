import { Grid } from '@material-ui/core'
import Button from 'components/Atoms/Button'
import TextField from 'components/Atoms/TextField'
import Typography from 'components/Atoms/Typography'
import { UserContext } from 'contexts/user'
import React, { useContext, useState } from 'react'
import Loading from 'components/Atoms/Loading'
import useResponsive from 'Hooks/useResponsive'
import Logo from 'components/Atoms/Logo'
import Alert from 'components/Atoms/Alert'

//TODO: Rever responsividade
const Login = () => {
  const { login, isLoading, hasError, errorMsg, setError } =
    useContext(UserContext)

  const [identifier, setIdentifier] = useState('test@test.com')
  const [password, setPassword] = useState('test')

  const breakPoint = useResponsive()

  const LogIn = async () => {
    setError('')
    await login(identifier, password)
  }

  return (
    <>
      <Grid container>
        <Grid item xs={breakPoint === 'desktop' ? 5 : 12}>
          <Grid
            container
            direction="column"
            padding={breakPoint === 'desktop' ? 0 : '1rem'}
            alignItems="center"
            justifyContent="center"
            sx={
              breakPoint == 'desktop'
                ? { height: '100vh', width: '100%' }
                : {
                    height: '100vh',
                    width: '100%',
                    backgroundImage: 'url(/img/bg-logo.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                  }
            }
          >
            {breakPoint !== 'desktop' && (
              <Grid item sx={{ margin: '2rem' }}>
                <Logo color="light" />
              </Grid>
            )}
            <Grid
              item
              padding={breakPoint === 'desktop' ? '12rem' : '7rem 2rem'}
              sx={{ bgcolor: 'background.default' }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h2" color="info">
                    Entrar
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    disabled={isLoading}
                    fullWidth
                    placeholder="Usuário"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    disabled={isLoading}
                    fullWidth
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sx={{ textAlign: 'right' }}>
                  <Button variant="text" color="accent" disabled={isLoading}>
                    Esqueceu a senha
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  {hasError && (
                    <Grid item>
                      <Alert severity="error">{errorMsg}</Alert>
                    </Grid>
                  )}
                  {isLoading && <Loading size={35} />}
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                  <Button onClick={() => LogIn()} disabled={isLoading}>
                    Entrar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {breakPoint === 'desktop' && (
          <Grid
            item
            xs={7}
            sx={{
              height: '100vh',
              width: '100%',
              backgroundImage: 'url(/img/bg-logo.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center'
            }}
          ></Grid>
        )}
      </Grid>
    </>
  )
}

export default Login
