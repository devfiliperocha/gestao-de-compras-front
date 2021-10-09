import { createContext, useState } from 'react'

type AppContextProps = {
  isContainerLoading?: boolean
  isGlobalLoading?: boolean
  hasContainerError?: boolean
  containerErrorMsg?: string
  hasGlobalError?: boolean
  globalErrorMsg?: string
  setContainerError: (errorMsg: string | undefined) => void
  setContainerLoading: (state: boolean) => void
  setGlobalError: (errorMsg: string | undefined) => void
  setGlobalLoading: (state: boolean) => void
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
  drawerWidth: number
  title: string
  setTitle: (title: string) => void
}

export const AppContext = createContext({} as AppContextProps)

export const AppContextProvider: React.FC = ({ children }) => {
  const [isContainerLoading, setContainerLoading] = useState(false)
  const [hasContainerError, setHasContainerError] = useState(false)
  const [containerErrorMsg, setContainerErrorMsg] = useState<
    string | undefined
  >()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [title, setTitle] = useState('JP Gestão de Compras')
  const [isGlobalLoading, setGlobalLoading] = useState(false)
  const [hasGlobalError, setHasGlobalError] = useState(false)
  const [globalErrorMsg, setGlobalErrorMsg] = useState<string | undefined>()

  const globalError = (errorMsg: string | undefined) => {
    setHasGlobalError(!!errorMsg)
    setGlobalErrorMsg(errorMsg)
  }

  const containerError = (errorMsg: string | undefined) => {
    setHasContainerError(!!errorMsg)
    setContainerErrorMsg(errorMsg)
  }

  const setPageTitle = (title: string) => {
    setTitle(title)
  }

  return (
    <AppContext.Provider
      value={{
        isContainerLoading,
        hasContainerError,
        containerErrorMsg,
        isGlobalLoading,
        hasGlobalError,
        globalErrorMsg,
        setContainerError: containerError,
        setContainerLoading,
        setGlobalError: globalError,
        setGlobalLoading,
        mobileOpen,
        setMobileOpen,
        drawerWidth: 250,
        title,
        setTitle: setPageTitle
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
