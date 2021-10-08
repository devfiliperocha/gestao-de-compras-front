import { Address } from './address'
import { ValueOf } from './utils'

export type OrganProps = {
  id: number
  name: string
  corporateDocNumber: string
  address?: Address | null
  secretariat: boolean
  autarchy: boolean
}

export type OrganColumns = keyof OrganProps

export type UpdateOrganProps = (
  field: keyof OrganProps,
  value: ValueOf<OrganProps>
) => void
