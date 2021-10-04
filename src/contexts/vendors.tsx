import { createContext, useEffect, useState } from 'react'
import { Vendors } from 'types/vendors'
import { getVendors } from 'services/vendors'

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
  const [vendorsData, setVendorsData] = useState([] as Vendors[])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | undefined>()

  const setVendors = (data: Vendors[]) => {
    setVendorsData(data)
  }

  const setError = (errorMsg: string | undefined) => {
    setHasError(!!errorMsg)
    setErrorMsg(errorMsg)
  }

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const vendors = await getVendors()
      if (vendors.success) {
        setVendors(vendors.data)
      } else {
        setError(vendors.error)
      }
      setIsLoading(false)
    }
    getData()
  }, [])

  return (
    <VendorsContext.Provider
      value={{
        vendors: vendorsData,
        isLoading,
        hasError,
        errorMsg,
        setVendors,
        setError
      }}
    >
      {children}
    </VendorsContext.Provider>
  )
}
