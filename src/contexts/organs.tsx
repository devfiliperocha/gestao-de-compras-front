/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react'
import { OrganProps } from 'types/organs'
import { getOrgans } from 'services/organs'
import { AppContext } from './app'

type OrgansContextProps = {
  organs: OrganProps[]
  isLoading?: boolean
  hasError?: boolean
  errorMsg?: string
  setOrgans: (organs: OrganProps[]) => void
  setError?: (errorMsg: string | undefined) => void
}
export const OrgansContext = createContext({} as OrgansContextProps)

export const OrgansContextProvider: React.FC = ({ children }) => {
  const { setContainerLoading, setContainerError } = useContext(AppContext)
  const [organsData, setOrgansData] = useState([] as OrganProps[])

  const setOrgans = (data: OrganProps[]) => {
    setOrgansData(data)
  }
  const getData = async () => {
    setContainerLoading(true)
    const organs = await getOrgans()
    if (organs.success) {
      setOrgans(organs.data)
    } else {
      setContainerError(organs.error)
    }
    setContainerLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <OrgansContext.Provider
      value={{
        organs: organsData,
        setOrgans
      }}
    >
      {children}
    </OrgansContext.Provider>
  )
}
