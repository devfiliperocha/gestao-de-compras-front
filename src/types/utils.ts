export type SortDirections = 'asc' | 'desc'
export type Status = {
  type: 'error' | 'warning' | 'success'
  text: string
}
export type Docs =
  | 'corporateDocPdf'
  | 'federalCertificatePdf'
  | 'fgtsCertificatePdf'
  | 'laborCertificatePdf'
  | 'municipalCertificatePdf'
  | 'stateCertificatePdf'
  | 'declaration'

export const DocsNames: Record<Docs, string> = {
  corporateDocPdf: 'CNPJ',
  federalCertificatePdf: 'Certidão Federal',
  fgtsCertificatePdf: 'Certidão FGTS',
  laborCertificatePdf: 'Certidão Trabalhista',
  municipalCertificatePdf: 'Certidão Municipal',
  stateCertificatePdf: 'Certidão Estadual',
  declaration: 'Declaração do Fornecedor'
}
