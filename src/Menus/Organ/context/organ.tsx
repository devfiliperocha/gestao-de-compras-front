/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext, useEffect, useState } from 'react'
import { OrganFormErrors, OrganProps } from '../types/organs'
import { getOrgan, updateOrgan, deleteOrgan } from '../service/organs'
import { useRouter } from 'next/dist/client/router'
import { AppContext } from 'contexts/app'

type OrganContextProps = {
  organ: Partial<OrganProps>
  setFormData: (organ: Partial<OrganProps>) => void
  update: () => void
  remove: () => void
  errors: OrganFormErrors | undefined
}

export const OrganContext = createContext({} as OrganContextProps)

export const OrganContextProvider: React.FC = ({ children }) => {
  const { setContainerLoading, setContainerError, setGlobalMessage } =
    useContext(AppContext)
  const [organData, setOrganData] = useState({} as OrganContextProps['organ'])
  const [errors, setErrors] = useState({} as OrganContextProps['errors'])
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
      if (typeof save.error === 'string') {
        setGlobalMessage({ type: 'error', text: save.error })
      } else {
        setGlobalMessage({ type: 'error', text: 'Erro ao atualizar registro!' })
        setErrors(save.error as OrganFormErrors)
      }
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
      if (typeof remove.error === 'string') {
        setGlobalMessage({ type: 'error', text: remove.error })
      } else {
        setGlobalMessage({ type: 'error', text: 'Erro ao remover registro!' })
        setErrors(remove.error as OrganFormErrors)
      }
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
      setOrgan(organ.data as OrganProps)
    } else {
      if (typeof organ.error === 'string') {
        setContainerError(organ.error)
      } else {
        setContainerError('Erro ao carregar registros!')
        setErrors(organ.error as OrganFormErrors)
      }
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
        remove,
        errors
      }}
    >
      {children}
    </OrganContext.Provider>
  )
}
