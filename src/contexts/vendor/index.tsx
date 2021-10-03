import { createContext } from 'react'
import { Docs } from 'types/utils'
import { Vendors } from 'types/vendors'
import { File } from 'types/file'

type VendorContextProps = {
  vendor: Vendors
  updateFormData: (field: string, value: string) => void
  updateDocStatus: (field: Docs, value: File) => void
  updateVendorStatus: (status: 'error' | 'success') => void
  setError: (msg: string) => void
}
type VendorsContextProps = {
  vendors: Vendors[]
}

export const VendorContext = createContext({} as VendorContextProps)
export const VendorsContext = createContext({} as VendorsContextProps)
