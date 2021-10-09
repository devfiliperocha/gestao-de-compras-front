/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react'
import { OrganProps, UpdateOrganProps } from '../types/organs'
import { createOrgan, getOrgans } from '../service/organs'
import { AppContext } from 'contexts/app'

type OrgansContextProps = {
  organs: OrganProps[]
  isLoading?: boolean
  hasError?: boolean
  errorMsg?: string
  setOrgans: (organs: OrganProps[]) => void
  setError?: (errorMsg: string | undefined) => void
  create: () => void
  newOrgan: OrganProps
  updateFormData: UpdateOrganProps
}
export const OrgansContext = createContext({} as OrgansContextProps)

export const OrgansContextProvider: React.FC = ({ children }) => {
  const {
    setContainerLoading,
    setContainerError,
    setGlobalError,
    setGlobalLoading
  } = useContext(AppContext)
  const [organsData, setOrgansData] = useState([] as OrganProps[])
  const [newOrganData, setNewOrganData] = useState({} as OrganProps)

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
  const updateFormData: UpdateOrganProps = (field, value) => {
    const newFormData = {
      ...newOrganData,
      [field]: value
    }
    setNewOrganData(newFormData)
  }
  const create = async () => {
    setGlobalLoading(true)
    const create = await createOrgan(newOrganData)
    if (create.success) {
      await getData()
    } else {
      setGlobalError(create.error)
    }
    setGlobalLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <OrgansContext.Provider
      value={{
        organs: organsData,
        setOrgans,
        newOrgan: newOrganData,
        updateFormData,
        create
      }}
    >
      {children}
    </OrgansContext.Provider>
  )
}
