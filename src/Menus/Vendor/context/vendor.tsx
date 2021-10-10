/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext, useEffect, useState } from 'react'
import { VendorFormErrors, VendorProps } from '../types/vendors'
import { getVendor, updateVendor } from '../service/vendors'
import { useRouter } from 'next/dist/client/router'
import { AppContext } from 'contexts/app'
import { Docs } from 'types/utils'
import { File } from 'types/file'

type VendorContextProps = {
  vendor: Partial<VendorProps>
  setFormData: (vendor: Partial<VendorProps>) => void
  updateVendorStatus: (status: 'error' | 'success') => void
  updateDocStatus: (field: Docs, value: File) => void
  update: () => void
  errors: VendorFormErrors | undefined
}

export const VendorContext = createContext({} as VendorContextProps)

export const VendorContextProvider: React.FC = ({ children }) => {
  const { setContainerLoading, setContainerError, setGlobalMessage } =
    useContext(AppContext)
  const [vendorData, setVendorData] = useState(
    {} as Partial<VendorContextProps['vendor']>
  )
  const [errors, setErrors] = useState({} as VendorContextProps['errors'])
  const router = useRouter()
  const { id } = router.query

  const setFormData = (vendor: Partial<VendorContextProps['vendor']>) => {
    setVendorData(vendor)
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
        setGlobalMessage({
          type: 'error',
          text: 'Para ser aprovado, o fornecedor precisa enviar todos os documentos.'
        })
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

  const update = async () => {
    const vendorId = typeof id === 'string' ? parseInt(id) : 0
    setContainerLoading(true)
    const save = await updateVendor(vendorData, vendorId)
    if (save.success) {
      await getData(vendorId)
    } else {
      if (typeof save.error === 'string') {
        setGlobalMessage({ type: 'error', text: save.error })
      } else {
        setGlobalMessage({ type: 'error', text: 'Erro ao atualizar registro!' })
        setErrors(save.error as VendorFormErrors)
      }
    }
    setContainerLoading(false)
  }

  const setVendor = (data: VendorContextProps['vendor']) => {
    setVendorData(data)
  }
  const getData = async (id: number) => {
    setContainerLoading(true)
    const vendor = await getVendor(id)
    if (vendor.success) {
      setVendor(vendor.data as VendorProps)
    } else {
      if (typeof vendor.error === 'string') {
        setContainerError(vendor.error)
      } else {
        setContainerError('Erro ao carregar registros!')
        setErrors(vendor.error as VendorFormErrors)
      }
    }
    setContainerLoading(false)
  }

  useEffect(() => {
    const vendorId = typeof id === 'string' ? parseInt(id) : 0
    if (vendorId > 0) {
      getData(vendorId)
    }
  }, [id])

  return (
    <VendorContext.Provider
      value={{
        vendor: vendorData,
        setFormData,
        update,
        updateVendorStatus,
        updateDocStatus,
        errors
      }}
    >
      {children}
    </VendorContext.Provider>
  )
}
