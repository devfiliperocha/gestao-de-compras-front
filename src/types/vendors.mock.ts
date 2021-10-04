import { Vendors } from 'types/vendors'

export const VendorsMockData: Vendors[] = [
  {
    id: 1,
    corporateName: 'Little Church Altar',
    corporateDocNumber: '07899008409',
    fantasyName: 'Test',
    status: {
      type: 'warning',
      text: 'Aguardando Aprovação'
    },
    email: 'teste@teste.com',
    phone: '8888-9999',
    responsible: 'Eu',
    responsibleDocNumber: '888999',
    address: {
      address: 'Rua a',
      number: '156',
      CEP: '57035852',
      district: 'Jatiuca',
      city: 'Maceió',
      state: 'AL',
      complement: 'Ao lado do...'
    },
    corporateDocPdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    municipalCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    stateCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    laborCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    fgtsCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    declaration: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    }
  },
  {
    id: 2,
    corporateName: 'Seven Lakes',
    corporateDocNumber: '07899008409',
    fantasyName: 'Test',
    status: {
      type: 'success',
      text: 'Cadastro Aprovado'
    },
    email: 'teste@teste.com',
    phone: '8888-9999',
    responsible: 'Eu',
    responsibleDocNumber: '888999',
    address: {
      address: 'Rua a',
      number: '156',
      CEP: '57035852',
      district: 'Jatiuca',
      city: 'Maceió',
      state: 'AL',
      complement: 'Ao lado do...'
    },
    corporateDocPdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    federalCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    municipalCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    stateCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    laborCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    fgtsCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    declaration: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    }
  },
  {
    id: 3,
    corporateName: 'Saint Louize Dimas',
    corporateDocNumber: '07899008409',
    fantasyName: 'Test',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    },
    email: 'teste@teste.com',
    phone: '8888-9999',
    responsible: 'Eu',
    responsibleDocNumber: '888999',
    address: {
      address: 'Rua a',
      number: '156',
      CEP: '57035852',
      district: 'Jatiuca',
      city: 'Maceió',
      state: 'AL',
      complement: 'Ao lado do...'
    },
    corporateDocPdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    federalCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    municipalCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    stateCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    laborCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    fgtsCertificatePdf: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    },
    declaration: {
      file: { url: 'http://localhost:3000/pdf-test.pdf' },
      expirationDate: '21/12/2021'
    }
  }
]

export const VendorDefaultData: Vendors = {
  id: 3,
  corporateName: '',
  corporateDocNumber: '',
  fantasyName: '',
  status: {
    type: 'warning',
    text: 'Aguardando Aprovação'
  },
  email: '',
  phone: '',
  responsible: '',
  responsibleDocNumber: '',
  address: {
    address: '',
    number: '',
    CEP: '',
    district: '',
    city: '',
    state: '',
    complement: ''
  },
  corporateDocPdf: {},
  federalCertificatePdf: {},
  municipalCertificatePdf: {},
  stateCertificatePdf: {},
  laborCertificatePdf: {},
  fgtsCertificatePdf: {},
  declaration: {}
}
