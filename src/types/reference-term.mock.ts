import { ReferenceTerms } from './reference-term'

export const ReferenceTermsMockData: ReferenceTerms[] = [
  {
    number: '0000-0001',
    organ: {
      corporateName: 'EEEDF 987 de Paulinia 6'
    },
    product: [
      {
        description: 'Papel A4',
        group: 'Escritório'
      },
      {
        description: 'Canetas Esferográficas',
        group: 'Escritório'
      }
    ],
    status: 'Pending'
  },
  {
    number: '0000-0002',
    organ: {
      corporateName: 'EEEDF 987 de Paulinia 6'
    },
    product: [
      {
        description: 'Canetas Esferográficas',
        group: 'Escritório'
      }
    ],
    status: 'Pending'
  },
  {
    number: '0000-0003',
    organ: {
      corporateName: 'EMEF 123 de Oliveira'
    },
    product: [
      {
        description: 'Papel A4',
        group: 'Escritório'
      }
    ],
    status: 'Pending'
  }
]
