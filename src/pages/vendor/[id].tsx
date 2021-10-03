/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { getVendor } from 'services/vendors'
import { Docs } from 'types/utils'
import { File } from 'types/file'
import { Vendors } from 'types/vendors'
import { VendorContext } from 'contexts/vendor'
import VendorAprovationPage from 'components/Templates/Vendor/VendorAprovationPage'

type VendorAprovationPageProps = {
  vendor: Vendors
}

export default function VendorApprovePage({
  vendor
}: VendorAprovationPageProps) {
  const [vendorData, setVendorData] = useState(vendor)
  const [error, setError] = useState('')

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
      const allHaveFiles = docs.every((d) => vendor[d]?.file?.url)
      if (!allHaveFiles) {
        setError(
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

  return (
    <VendorContext.Provider
      value={{
        vendor: vendorData,
        updateFormData,
        updateDocStatus,
        updateVendorStatus,
        setError
      }}
    >
      <h1>{error}</h1>
      <VendorAprovationPage />
    </VendorContext.Provider>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const vendorId =
    typeof context?.params?.id === 'string'
      ? parseInt(context?.params?.id)
      : undefined
  const vendor = await getVendor(vendorId!)

  if (vendor.success) {
    return {
      props: {
        vendor: vendor.data
      }
    }
  } else {
    return {
      props: {
        vendor: [],
        message: vendor.error
      }
    }
  }
}
