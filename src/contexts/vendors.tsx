/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react'
import { Vendors } from 'types/vendors'
import { getVendors } from 'services/vendors'
import { AppContext } from './app'

type VendorsContextProps = {
  vendors: Vendors[]
  isLoading?: boolean
  hasError?: boolean
  errorMsg?: string
  setVendors: (vendors: Vendors[]) => void
  setError?: (errorMsg: string | undefined) => void
}
export const VendorsContext = createContext({} as VendorsContextProps)

export const VendorsContextProvider: React.FC = ({ children }) => {
  const { setContainerLoading, setContainerError } = useContext(AppContext)
  const [vendorsData, setVendorsData] = useState([] as Vendors[])

  const setVendors = (data: Vendors[]) => {
    setVendorsData(data)
  }
  const getData = async () => {
    setContainerLoading(true)
    const vendors = await getVendors()
    if (vendors.success) {
      setVendors(vendors.data)
    } else {
      setContainerError(vendors.error)
    }
    setContainerLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <VendorsContext.Provider
      value={{
        vendors: vendorsData,
        setVendors
      }}
    >
      {children}
    </VendorsContext.Provider>
  )
}
