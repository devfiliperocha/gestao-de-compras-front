/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext, useEffect, useState } from 'react'
import { VendorFormErrors, VendorProps } from '../types/vendors'
import { getVendor, updateVendor } from '../service/vendors'
import { useRouter } from 'next/dist/client/router'
import { AppContext } from 'contexts/app'
import { Docs } from 'types/utils'

type VendorContextProps = {
  vendor: Partial<VendorProps>
  setFormData: (vendor: Partial<VendorProps>) => void
  updateVendorStatus: (status: 'error' | 'success') => void
  updateDocStatus: (field: Docs, status: 'error' | 'success') => void
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
  const [error, setError] = useState('')
  const router = useRouter()
  const { id } = router.query

  const setFormData = (vendor: Partial<VendorContextProps['vendor']>) => {
    setVendorData(vendor)
  }

  const updateVendorStatus = async (status: 'error' | 'success') => {
    const docs: Docs[] = [
      'corporateDocPdf',
      'federalCertificatePdf',
      'fgtsCertificatePdf',
      'laborCertificatePdf',
      'municipalCertificatePdf',
      'stateCertificatePdf'
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

    const toUpdate: VendorContextProps['vendor'] = {}
    for (const doc of docs) {
      toUpdate[doc] = {
        ...vendorData[doc],
        status: {
          type: status,
          text: ' '
        }
      }
    }

    const newFormData = {
      ...vendorData,
      status: {
        type: status,
        text: status === 'error' ? 'Cadastro Rejeitado' : 'Cadastro Aprovado'
      }
    }
    await update({
      status: newFormData.status,
      ...toUpdate
    })
    if (!error) {
      setVendorData(newFormData)
    }
  }

  const updateDocStatus = async (field: Docs, status: 'error' | 'success') => {
    const newFormData = {
      ...vendorData,
      [field]: {
        ...vendorData[field],
        status: {
          type: status,
          text: ''
        }
      }
    }
    await update({
      [field]: {
        ...newFormData[field],
        status: {
          type: status,
          text: ' '
        }
      }
    })
    if (!error) {
      setVendorData(newFormData)
    }
  }

  const update = async (data: VendorContextProps['vendor']) => {
    const vendorId = typeof id === 'string' ? parseInt(id) : 0
    setContainerLoading(true)
    setError('')
    setErrors({} as VendorFormErrors)
    const save = await updateVendor(data ? data : vendorData, vendorId)
    if (save.success) {
      await getData(vendorId)
    } else {
      if (typeof save.error === 'string') {
        setGlobalMessage({ type: 'error', text: save.error })
        setError(save.error)
      } else {
        setGlobalMessage({ type: 'error', text: 'Erro ao atualizar registro!' })
        setErrors(save.error as VendorFormErrors)
        setError('Erro ao atualizar registro!')
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
        updateVendorStatus,
        updateDocStatus,
        errors
      }}
    >
      {children}
    </VendorContext.Provider>
  )
}
