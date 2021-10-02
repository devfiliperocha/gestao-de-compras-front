import { Address } from './address'
import { File } from './file'

export type Vendors = {
  corporateName: string
  fantasyName: string
  corporateDocNumber: string
  email?: string
  phone?: string
  responsible: string
  responsibleDocNumber: string
  address?: Address
  status: {
    type: 'error' | 'warning' | 'success'
    text: string
  }
  corporateDocPdf?: File
  federalCertificatePdf?: File
  municipalCertificatePdf?: File
  stateCertificatePdf?: File
  laborCertificatePdf?: File
  fgtsCertificatePdf?: File
  declaration?: File
}

export type VendorColumns = keyof Vendors
