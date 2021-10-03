import { Address } from './address'
import { File } from './file'
import { Status } from './utils'

export type Vendors = {
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
  corporateDocPdf?: File
  federalCertificatePdf?: File
  municipalCertificatePdf?: File
  stateCertificatePdf?: File
  laborCertificatePdf?: File
  fgtsCertificatePdf?: File
  declaration?: File
}

export type VendorColumns = keyof Vendors
