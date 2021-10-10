/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react'
import { VendorFormErrors, VendorProps } from '../types/vendors'
import { createVendor, getVendors } from '../service/vendors'
import { AppContext } from 'contexts/app'

export type VendorsContextProps = {
  vendors: VendorProps[]
  isLoading?: boolean
  hasError?: boolean
  errorMsg?: string
  setVendors: (vendors: VendorProps[]) => void
  setError?: (errorMsg: string | undefined) => void
  create: () => void
  newVendor: Partial<VendorProps>
  setFormData: (vendor: Partial<VendorProps>) => void
  errors: VendorFormErrors | undefined
  clearErrors: () => void
}
export const VendorsContext = createContext({} as VendorsContextProps)

export const VendorsContextProvider: React.FC = ({ children }) => {
  const {
    setContainerLoading,
    setContainerError,
    setGlobalMessage,
    setGlobalLoading
  } = useContext(AppContext)
  const [vendorsData, setVendorsData] = useState([] as VendorProps[])
  const [errors, setErrors] = useState({} as VendorsContextProps['errors'])
  const [newVendorData, setNewVendorData] = useState<
    VendorsContextProps['newVendor']
  >({})

  const setVendors = (data: VendorProps[]) => {
    setVendorsData(data)
  }
  const getData = async () => {
    setContainerLoading(true)
    const vendors = await getVendors()
    if (vendors.success) {
      setVendors(vendors.data as VendorProps[])
    } else {
      if (typeof vendors.error === 'string') {
        setContainerError(vendors.error)
      } else {
        setContainerError('Erro ao carregar registros!')
        setErrors(vendors.error as VendorFormErrors)
      }
    }
    setContainerLoading(false)
  }

  const setFormData = (vendor: VendorsContextProps['newVendor']) => {
    setNewVendorData(vendor)
  }

  const create = async () => {
    setGlobalLoading(true)
    const create = await createVendor(newVendorData)
    if (create.success) {
      await getData()
    } else {
      if (typeof create.error === 'string') {
        setGlobalMessage({ type: 'error', text: create.error })
      } else {
        setGlobalMessage({ type: 'error', text: 'Erro ao criar registros!' })
        setErrors(create.error as VendorFormErrors)
      }
    }
    setGlobalLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <VendorsContext.Provider
      value={{
        vendors: vendorsData,
        setVendors,
        newVendor: newVendorData,
        setFormData,
        create,
        errors,
        clearErrors: () => setErrors(undefined)
      }}
    >
      {children}
    </VendorsContext.Provider>
  )
}
