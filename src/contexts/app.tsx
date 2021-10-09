import { createContext, useState } from 'react'

type GlobalMessageProps = {
  type: 'success' | 'warning' | 'error'
  text: string
}

type AppContextProps = {
  isContainerLoading?: boolean
  isGlobalLoading?: boolean
  hasContainerError?: boolean
  containerErrorMsg?: string
  setContainerError: (errorMsg: string | undefined) => void
  setContainerLoading: (state: boolean) => void
  setGlobalLoading: (state: boolean) => void
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
  drawerWidth: number
  title: string
  setTitle: (title: string) => void
  hasGlobalMessage: boolean
  globalMessage: GlobalMessageProps | null | undefined
  setGlobalMessage: (msg: GlobalMessageProps | null) => void
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
  const [hasGlobalMsg, setHasGlobalMsg] = useState(false)
  const [globalMsg, setGlobalMsg] = useState<GlobalMessageProps | null>()

  const globalMessage = (message: GlobalMessageProps | null) => {
    setHasGlobalMsg(!!message)
    setGlobalMsg(message)
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
        hasGlobalMessage: hasGlobalMsg,
        globalMessage: globalMsg,
        setGlobalMessage: globalMessage,
        setContainerError: containerError,
        setContainerLoading,
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
