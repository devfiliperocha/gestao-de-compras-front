import { Vendors } from 'types/vendors'

export const VendorsMockData: Vendors[] = [
  {
    corporateName: 'Little Church',
    fantasyName: '',
    status: {
      type: 'warning',
      text: 'Aguardando Aprovação'
    }
  },
  {
    corporateName: 'Seven Lakes',
    fantasyName: '',
    status: {
      type: 'success',
      text: 'Cadastro Aprovado'
    }
  },
  {
    corporateName: 'Saint Louize',
    fantasyName: '',
    status: {
      type: 'error',
      text: 'Cadastro Rejeitado'
    }
  }
]
