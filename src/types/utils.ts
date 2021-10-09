export type SortDirections = 'asc' | 'desc'
export type Status = {
  type: 'error' | 'warning' | 'success'
  text: string
}

export type ValueOf<T> = T[keyof T]

export type Docs =
  | 'corporateDocPdf'
  | 'federalCertificatePdf'
  | 'fgtsCertificatePdf'
  | 'laborCertificatePdf'
  | 'municipalCertificatePdf'
  | 'stateCertificatePdf'
  | 'declaration'

export type AppIcons =
  | 'Box'
  | 'VehicleTruckProfile'
  | 'Building'
  | 'DocumentOnePage'
  | 'Receipt'
  | 'ReceiptCube'
  | 'ReceiptMoney'
  | 'RibbonStar'
  | 'ChartPerson'
  | 'TaskListSquareLtr'
  | 'AppFolder'
  | 'Alert'

export type AppMenusNames =
  | 'Órgãos'
  | 'Fornecedores'
  | 'Termos'
  | 'Cotações'
  | 'Almoxarifado'
  | 'Ordens'
  | 'Notificações'
  | 'Declaração'
  | 'Início'

export type AppMenu = {
  label: AppMenusNames
  icon: AppIcons
}

export type AppMenus =
  | 'organ'
  | 'vendor'
  | 'referenceterm'
  | 'quotation'
  | 'warehouse'
  | 'order'
  | 'notification'
  | 'declaration'
  | 'home'

export const DocsNames: Record<Docs, string> = {
  corporateDocPdf: 'CNPJ',
  federalCertificatePdf: 'Certidão Federal',
  fgtsCertificatePdf: 'Certidão FGTS',
  laborCertificatePdf: 'Certidão Trabalhista',
  municipalCertificatePdf: 'Certidão Municipal',
  stateCertificatePdf: 'Certidão Estadual',
  declaration: 'Declaração do Fornecedor'
}

export const OrganMenus: Partial<Record<AppMenus, AppMenu>> = {
  home: {
    label: 'Início',
    icon: 'AppFolder'
  },
  organ: {
    label: 'Órgãos',
    icon: 'Building'
  },
  vendor: {
    label: 'Fornecedores',
    icon: 'VehicleTruckProfile'
  },
  quotation: {
    label: 'Cotações',
    icon: 'ReceiptMoney'
  },
  referenceterm: {
    label: 'Termos',
    icon: 'DocumentOnePage'
  },
  warehouse: {
    label: 'Almoxarifado',
    icon: 'Box'
  },
  order: {
    label: 'Ordens',
    icon: 'ReceiptCube'
  },
  notification: {
    label: 'Notificações',
    icon: 'Alert'
  }
}

export const VendorMenus: Partial<Record<AppMenus, AppMenu>> = {
  home: {
    label: 'Início',
    icon: 'AppFolder'
  },
  vendor: {
    label: 'Declaração',
    icon: 'DocumentOnePage'
  },
  quotation: {
    label: 'Cotações',
    icon: 'ReceiptMoney'
  },
  order: {
    label: 'Ordens',
    icon: 'ReceiptCube'
  },
  notification: {
    label: 'Notificações',
    icon: 'Alert'
  }
}
