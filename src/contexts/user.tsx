import { createContext, useEffect, useState } from 'react'
import { User } from 'types/user'
import { AuthCheck, LogIn } from 'services/user'
import axios from 'axios'

type UserContextProps = {
  user: User
  isLoading: boolean
  isLogged: boolean
  setGlobalError: (errorMsg: string | undefined) => void
  setGlobalLoading: (state: boolean) => void
  login: (email: string, password: string) => void
  logout: () => void
  hasError?: boolean
  errorMsg?: string
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
  drawerWidth: number
}

export const UserContext = createContext({} as UserContextProps)

export const UserContextProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState({} as User)
  const [isLoading, setIsLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | undefined>()
  const [mobileOpen, setMobileOpen] = useState(false)

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
        setGlobalError(err)
        setIsLoading(false)
      })
  }, [])

  const setGlobalError = (errorMsg: string | undefined) => {
    setHasError(!!errorMsg)
    setErrorMsg(errorMsg)
  }

  const setGlobalLoading = (state: boolean) => {
    setIsLoading(state)
  }

  const logout = () => {
    setUserData({} as User)
    setIsLogged(false)
    axios.defaults.headers = {}
    localStorage.removeItem('userToken')
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
      } else {
        setUserData({} as User)
        setIsLogged(false)
        setGlobalError('Erro ao fazer login.')
      }
    } else {
      setGlobalError(getUser.error)
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
        setGlobalError,
        setGlobalLoading,
        mobileOpen,
        setMobileOpen,
        drawerWidth: 250
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
