import { Organs } from './organ'
import { Product } from './product'

export type ReferenceTerms = {
  number: string
  organ: Organs
  product: Product[]
  status: 'Pending' | 'Canceled' | 'Published'
}
