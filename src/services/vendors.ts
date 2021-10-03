/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Vendors } from 'types/vendors'
import api from './api'

type VendorResponse = {
  data: Vendors
}
type VendorsResponse = {
  data: Vendors[]
}

type Docs = keyof Pick<
  Vendors,
  | 'corporateDocPdf'
  | 'federalCertificatePdf'
  | 'fgtsCertificatePdf'
  | 'laborCertificatePdf'
  | 'municipalCertificatePdf'
  | 'stateCertificatePdf'
  | 'declaration'
>

const mapProps = (vendor: Vendors): Vendors => {
  const docs: Docs[] = [
    'corporateDocPdf',
    'federalCertificatePdf',
    'fgtsCertificatePdf',
    'laborCertificatePdf',
    'municipalCertificatePdf',
    'stateCertificatePdf',
    'declaration'
  ]
  for (const doc of docs) {
    if (vendor[doc]?.file?.url) {
      vendor[doc]!.file!.url! = `${process.env.API_URL}${
        vendor[doc]!.file!.url
      }`
    }
  }
  return vendor
}

export const getVendors = async () => {
  try {
    const vendors: VendorsResponse = await api.get('/vendor')
    return {
      data: vendors.data.map((d) => {
        return mapProps(d)
      }),
      success: true
    }
  } catch (err) {
    return {
      data: [] as Vendors[],
      success: false,
      error: 'Erro ao recuperar dados de fornecedores.'
    }
  }
}

export const getVendor = async (id: number) => {
  try {
    const vendor: VendorResponse = await api.get(`vendor/${id}`)

    return {
      data: mapProps(vendor.data),
      success: true
    }
  } catch (err) {
    return {
      data: {} as Vendors,
      success: false,
      error: 'Erro ao recuperar dados de fornecedores.'
    }
  }
}
