/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react'
import { OrganFormErrors, OrganProps } from '../types/organs'
import { createOrgan, getOrgans } from '../service/organs'
import { AppContext } from 'contexts/app'

export type OrgansContextProps = {
  organs: OrganProps[]
  isLoading?: boolean
  hasError?: boolean
  errorMsg?: string
  setOrgans: (organs: OrganProps[]) => void
  setError?: (errorMsg: string | undefined) => void
  create: () => void
  newOrgan: Partial<OrganProps>
  setFormData: (organ: Partial<OrganProps>) => void
  errors: OrganFormErrors | undefined
  clearErrors: () => void
}
export const OrgansContext = createContext({} as OrgansContextProps)

export const OrgansContextProvider: React.FC = ({ children }) => {
  const {
    setContainerLoading,
    setContainerError,
    setGlobalMessage,
    setGlobalLoading
  } = useContext(AppContext)
  const [organsData, setOrgansData] = useState([] as OrganProps[])
  const [errors, setErrors] = useState({} as OrgansContextProps['errors'])
  const [newOrganData, setNewOrganData] = useState<
    OrgansContextProps['newOrgan']
  >({})

  const setOrgans = (data: OrganProps[]) => {
    setOrgansData(data)
  }
  const getData = async () => {
    setContainerLoading(true)
    const organs = await getOrgans()
    if (organs.success) {
      setOrgans(organs.data as OrganProps[])
    } else {
      if (typeof organs.error === 'string') {
        setContainerError(organs.error)
      } else {
        setContainerError('Erro ao carregar registros!')
        setErrors(organs.error as OrganFormErrors)
      }
    }
    setContainerLoading(false)
  }

  const setFormData = (organ: OrgansContextProps['newOrgan']) => {
    setNewOrganData(organ)
  }

  const create = async () => {
    setGlobalLoading(true)
    const create = await createOrgan(newOrganData)
    if (create.success) {
      await getData()
    } else {
      if (typeof create.error === 'string') {
        setGlobalMessage({ type: 'error', text: create.error })
      } else {
        setGlobalMessage({ type: 'error', text: 'Erro ao criar registros!' })
        setErrors(create.error as OrganFormErrors)
      }
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
        setFormData,
        create,
        errors,
        clearErrors: () => setErrors(undefined)
      }}
    >
      {children}
    </OrgansContext.Provider>
  )
}
