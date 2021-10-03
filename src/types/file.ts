import { Status } from './utils'

export type File = {
  file?: {
    url?: string
  }
  expirationDate?: string
  status?: Status
}
