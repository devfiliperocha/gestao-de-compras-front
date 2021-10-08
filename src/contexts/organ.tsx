/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext, useEffect, useState } from 'react'
import { OrganProps } from 'types/organs'
import { getOrgan } from 'services/organs'
import { useRouter } from 'next/dist/client/router'
import { AppContext } from './app'

type OrganContextProps = {
  organ: OrganProps
  updateFormData: (field: string, value: string) => void
}

export const OrganContext = createContext({} as OrganContextProps)

export const OrganContextProvider: React.FC = ({ children }) => {
  const { setContainerLoading, setContainerError } = useContext(AppContext)
  const [organData, setOrganData] = useState({} as OrganProps)
  const router = useRouter()
  const { id } = router.query

  const updateFormData = (field: string, value: string) => {
    const newFormData = {
      ...organData,
      [field]: value
    }
    setOrganData(newFormData)
  }

  const setOrgan = (data: OrganProps) => {
    setOrganData(data)
  }

  useEffect(() => {
    const getData = async (id: number) => {
      setContainerLoading(true)
      const organ = await getOrgan(id)
      if (organ.success) {
        setOrgan(organ.data)
      } else {
        setContainerError(organ.error)
      }
      setContainerLoading(false)
    }

    const organId = typeof id === 'string' ? parseInt(id) : 0
    if (organId > 0) {
      getData(organId)
    }
  }, [id])

  return (
    <OrganContext.Provider
      value={{
        organ: organData,
        updateFormData
      }}
    >
      {children}
    </OrganContext.Provider>
  )
}
