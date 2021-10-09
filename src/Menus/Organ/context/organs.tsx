/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react'
import { OrganProps } from '../types/organs'
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
  newOrgan: Partial<OrganProps>
  setFormData: (organ: Partial<OrganProps>) => void
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
  const [newOrganData, setNewOrganData] = useState<
    OrgansContextProps['newOrgan']
  >({
    name: '',
    corporateDocNumber: '',
    address: {
      address: '',
      number: '',
      CEP: '',
      district: '',
      city: '',
      state: '',
      complement: ''
    },
    secretariat: false,
    autarchy: false
  })

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
  const setFormData = (organ: OrgansContextProps['newOrgan']) => {
    setNewOrganData(organ)
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
        setFormData,
        create
      }}
    >
      {children}
    </OrgansContext.Provider>
  )
}
