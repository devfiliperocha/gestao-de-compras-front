/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { VendorProps } from '../types/vendors'
import api, { handleResponse } from 'services/api'
import { AxiosResponse } from 'axios'

type Docs = keyof Pick<
  VendorProps,
  | 'corporateDocPdf'
  | 'federalCertificatePdf'
  | 'fgtsCertificatePdf'
  | 'laborCertificatePdf'
  | 'municipalCertificatePdf'
  | 'stateCertificatePdf'
  | 'declaration'
>

const mapProps = (vendor: VendorProps): VendorProps => {
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
      vendor[doc]!.file!.url! = `${
        process.env.NEXT_PUBLIC_API_URL || process.env.API_URL
      }${vendor[doc]!.file!.url}`
    }
  }
  return vendor
}

export const getVendors = async () => {
  try {
    const vendors: AxiosResponse = await api.get('/vendor')
    const result = handleResponse(vendors, 'array')
    return {
      ...result,
      data: Array.isArray(result.data)
        ? result.data.map((d) => {
            return mapProps(d)
          })
        : result.data
    }
  } catch (err: any) {
    const response: AxiosResponse = err.response
    return handleResponse(response, 'array')
  }
}

export const getVendor = async (id: number) => {
  try {
    const vendor: AxiosResponse = await api.get(`vendor/${id}`)
    const result = handleResponse(vendor, 'object')
    return {
      ...result,
      data:
        typeof result.data === 'object'
          ? mapProps(result.data as VendorProps)
          : result.data
    }
  } catch (err: any) {
    const response: AxiosResponse = err.response
    return handleResponse(response, 'object')
  }
}

export const createVendor = async (data: Partial<VendorProps>) => {
  try {
    const save: AxiosResponse = await api.post('/vendor', data)
    return handleResponse(save)
  } catch (err: any) {
    const response: AxiosResponse = err.response
    return handleResponse(response)
  }
}
export const updateVendor = async (
  data: Partial<VendorProps>,
  id: VendorProps['id']
) => {
  try {
    const save: AxiosResponse = await api.put(`/vendor/${id}`, data)
    return handleResponse(save)
  } catch (err: any) {
    const response: AxiosResponse = err.response
    return handleResponse(response)
  }
}
export const deleteVendor = async (id: VendorProps['id']) => {
  try {
    const save: AxiosResponse = await api.delete(`/vendor/${id}`)
    return handleResponse(save)
  } catch (err: any) {
    const response: AxiosResponse = err.response
    return handleResponse(response)
  }
}
