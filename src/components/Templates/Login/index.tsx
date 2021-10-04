import { UserContext } from 'contexts/user'
import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'

const Login = () => {
  const context = useContext(UserContext)
  const { login, user, isLoading, isLogged, hasError, errorMsg } = context
  const router = useRouter()

  useEffect(() => {
    if (isLogged) {
      router.push('/')
    }
  }, [router, isLogged])

  return (
    <>
      {isLoading ? (
        <>Carregando Login... </>
      ) : (
        <>
          <h1>Login</h1>
          {JSON.stringify(user)}
          <button onClick={() => login('test@test.com', 'test')}>
            Login Test
          </button>
          <hr />
          {hasError && (
            <>
              <span style={{ color: 'red' }}>{errorMsg}</span>{' '}
            </>
          )}
        </>
      )}
    </>
  )
}

export default Login
