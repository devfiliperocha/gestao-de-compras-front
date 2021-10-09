import { Address } from 'types/address'
import { ValueOf } from 'types/utils'

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

type OrganErrorFields = {
  name?: string
  corporateDocNumber?: string
  address?: string
  'address.address'?: string
  'address.number'?: string
  'address.CEP'?: string
  'address.district'?: string
  'address.city'?: string
  'address.state'?: string
  'address.complement'?: string
  secretariat?: boolean
  autarchy?: boolean
}

export type OrganFormErrors = Record<keyof OrganErrorFields, string[]>
