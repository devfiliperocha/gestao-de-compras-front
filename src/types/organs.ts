import { Address } from './address'

export type OrganProps = {
  id: number
  name: string
  corporateDocNumber: string
  address?: Address | null
  secretariat: boolean
  autarchy: boolean
}

export type OrganColumns = keyof OrganProps
