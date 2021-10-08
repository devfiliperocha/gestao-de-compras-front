import { createContext, useCallback, useEffect, useState } from 'react'
import { User } from 'types/user'
import { AuthCheck, LogIn } from 'services/user'
import axios from 'axios'
import { useRouter } from 'next/router'

type UserContextProps = {
  user: User
  isLoading: boolean
  isLogged: boolean
  setError: (errorMsg: string | undefined) => void
  setLoading: (state: boolean) => void
  login: (email: string, password: string) => void
  logout: () => void
  hasError?: boolean
  errorMsg?: string
}

export const UserContext = createContext({} as UserContextProps)

export const UserContextProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState({} as User)
  const [isLoading, setIsLoading] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | undefined>()
  const router = useRouter()

  const logout = useCallback(() => {
    setUserData({} as User)
    setIsLogged(false)
    axios.defaults.headers = {}
    localStorage.removeItem('userToken')
    router.push('/login')
  }, [router])

  useEffect(() => {
    setIsLoading(true)
    const token = localStorage.getItem('userToken')
    if (token) {
      axios.defaults.headers = {
        Authorization: `Bearer ${token}`
      }
    }
    AuthCheck()
      .then((result) => {
        setUserData(result.data)
        setIsLogged(result.success)
        setIsLoading(false)
      })
      .catch((err) => {
        setLoginError(err)
        setIsLoading(false)
        logout()
      })
  }, [logout])

  const setLoginError = (errorMsg: string | undefined) => {
    setHasError(!!errorMsg)
    setErrorMsg(errorMsg)
  }

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    const getUser = await LogIn(email, password)
    if (getUser.success) {
      const userData = getUser.data
      if (userData.jwt) {
        setUserData(userData.user)
        setIsLogged(true)
        localStorage.setItem('userToken', userData.jwt)
        //localStorage.setItem('userData', JSON.stringify(userData.user))
        axios.defaults.headers = {
          Authorization: `Bearer ${userData.jwt}`
        }
        if (
          window.history.length > 1 &&
          document.referrer.indexOf(window.location.host) !== -1
        ) {
          router.back()
        } else {
          router.replace('/')
        }
      } else {
        setUserData({} as User)
        setIsLogged(false)
        setLoginError('Erro ao fazer login.')
      }
    } else {
      setLoginError(getUser.error)
    }

    setIsLoading(false)
  }

  return (
    <UserContext.Provider
      value={{
        user: userData,
        isLoading,
        isLogged,
        login,
        logout,
        hasError,
        errorMsg,
        setError: setLoginError,
        setLoading: setIsLoading
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
