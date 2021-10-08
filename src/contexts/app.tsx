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
}

export const AppContext = createContext({} as AppContextProps)

export const AppContextProvider: React.FC = ({ children }) => {
  const [isContainerLoading, setContainerLoading] = useState(false)
  const [hasContainerError, setHasContainerError] = useState(false)
  const [containerErrorMsg, setContainerErrorMsg] = useState<
    string | undefined
  >()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isGlobalLoading, setGlobalLoading] = useState(true)
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
        drawerWidth: 250
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
