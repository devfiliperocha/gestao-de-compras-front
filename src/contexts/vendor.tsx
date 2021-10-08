/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext, useEffect, useState } from 'react'
import { Docs } from 'types/utils'
import { Vendors } from 'types/vendors'
import { File } from 'types/file'
import { getVendor } from 'services/vendors'
import { useRouter } from 'next/dist/client/router'
import { AppContext } from './app'

type VendorContextProps = {
  vendor: Vendors
  updateFormData: (field: string, value: string) => void
  updateDocStatus: (field: Docs, value: File) => void
  updateVendorStatus: (status: 'error' | 'success') => void
}

export const VendorContext = createContext({} as VendorContextProps)

export const VendorContextProvider: React.FC = ({ children }) => {
  const { setContainerLoading, setContainerError } = useContext(AppContext)
  const [vendorData, setVendorData] = useState({} as Vendors)
  const router = useRouter()
  const { id } = router.query

  const updateFormData = (field: string, value: string) => {
    const newFormData = {
      ...vendorData,
      [field]: value
    }
    setVendorData(newFormData)
  }

  const updateDocStatus = (field: Docs, value: File) => {
    const newFormData = {
      ...vendorData,
      [field]: {
        ...vendorData[field],
        ...value
      }
    }
    setVendorData(newFormData)
  }

  const updateVendorStatus = (status: 'error' | 'success') => {
    //TODO: Rever essa função, pois não está alterando o status dos docs, apenas do vendor
    const docs: Docs[] = [
      'corporateDocPdf',
      'federalCertificatePdf',
      'fgtsCertificatePdf',
      'laborCertificatePdf',
      'municipalCertificatePdf',
      'stateCertificatePdf',
      'declaration'
    ]

    if (status === 'success') {
      const allHaveFiles = docs.every((d) => vendorData[d]?.file?.url)
      if (!allHaveFiles) {
        setContainerError(
          'Para ser aprovado, o fornecedor precisa enviar todos os documentos.'
        )
        return
      }
    }

    for (const doc of docs) {
      updateDocStatus(doc, {
        status: { text: '', type: status }
      })
    }

    const newFormData = {
      ...vendorData,
      status: {
        type: status,
        text: status === 'error' ? 'Cadastro Rejeitado' : 'Cadastro Aprovado'
      }
    }
    setVendorData(newFormData)
  }

  const setVendor = (data: Vendors) => {
    setVendorData(data)
  }

  useEffect(() => {
    const getData = async (id: number) => {
      setContainerLoading(true)
      const vendor = await getVendor(id)
      if (vendor.success) {
        setVendor(vendor.data)
      } else {
        setContainerError(vendor.error)
      }
      setContainerLoading(false)
    }

    const vendorId = typeof id === 'string' ? parseInt(id) : 0
    if (vendorId > 0) {
      getData(vendorId)
    }
  }, [id])

  return (
    <VendorContext.Provider
      value={{
        vendor: vendorData,
        updateFormData,
        updateDocStatus,
        updateVendorStatus
      }}
    >
      {children}
    </VendorContext.Provider>
  )
}
