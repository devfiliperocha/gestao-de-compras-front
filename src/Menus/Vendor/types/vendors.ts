import { Address } from 'types/address'
import { Status, ValueOf } from 'types/utils'
import { File } from 'types/file'

export type VendorProps = {
  id: number
  corporateName: string
  fantasyName: string
  corporateDocNumber: string
  email?: string | null
  phone?: string | null
  responsible: string
  responsibleDocNumber: string
  address?: Address | null
  status: Status
  corporateDocPdf?: File | undefined
  federalCertificatePdf?: File | undefined
  municipalCertificatePdf?: File | undefined
  stateCertificatePdf?: File | undefined
  laborCertificatePdf?: File | undefined
  fgtsCertificatePdf?: File | undefined
  declaration?: File | undefined
}

export type VendorColumns = keyof VendorProps

export type UpdateVendorProps = (
  field: keyof VendorProps,
  value: ValueOf<VendorProps>
) => void

type VendorErrorFields = {
  corporateName?: string
  fantasyName?: string
  corporateDocNumber?: string
  email?: string
  phone?: string
  responsible?: string
  responsibleDocNumber?: string
  address?: string
  'address.address'?: string
  'address.number'?: string
  'address.CEP'?: string
  'address.district'?: string
  'address.city'?: string
  'address.state'?: string
  'address.complement'?: string
  status?: string
  corporateDocPdf?: string
  federalCertificatePdf?: string
  municipalCertificatePdf?: string
  stateCertificatePdf?: string
  laborCertificatePdf?: string
  fgtsCertificatePdf?: string
  declaration?: string
}

export type VendorFormErrors = Record<keyof VendorErrorFields, string[]>
