/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext, useEffect, useState } from 'react'
import { OrganProps } from '../types/organs'
import { getOrgan, updateOrgan, deleteOrgan } from '../service/organs'
import { useRouter } from 'next/dist/client/router'
import { AppContext } from 'contexts/app'

type OrganContextProps = {
  organ: Partial<OrganProps>
  setFormData: (organ: Partial<OrganProps>) => void
  update: () => void
  remove: () => void
}

export const OrganContext = createContext({} as OrganContextProps)

export const OrganContextProvider: React.FC = ({ children }) => {
  const { setContainerLoading, setContainerError, setGlobalError } =
    useContext(AppContext)
  const [organData, setOrganData] = useState({} as OrganContextProps['organ'])
  const router = useRouter()
  const { id } = router.query

  const setFormData = (organ: OrganContextProps['organ']) => {
    setOrganData(organ)
  }

  const update = async () => {
    const organId = typeof id === 'string' ? parseInt(id) : 0
    setContainerLoading(true)
    const save = await updateOrgan(organData, organId)
    if (save.success) {
      await getData(organId)
    } else {
      setGlobalError(save.error)
    }
    setContainerLoading(false)
  }

  const remove = async () => {
    const organId = typeof id === 'string' ? parseInt(id) : 0
    setContainerLoading(true)
    const remove = await deleteOrgan(organId)
    if (remove.success) {
      router.push('/organ')
    } else {
      setGlobalError(remove.error)
    }
    setContainerLoading(false)
  }

  const setOrgan = (data: OrganContextProps['organ']) => {
    setOrganData(data)
  }
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

  useEffect(() => {
    const organId = typeof id === 'string' ? parseInt(id) : 0
    if (organId > 0) {
      getData(organId)
    }
  }, [id])

  return (
    <OrganContext.Provider
      value={{
        organ: organData,
        setFormData,
        update,
        remove
      }}
    >
      {children}
    </OrganContext.Provider>
  )
}
