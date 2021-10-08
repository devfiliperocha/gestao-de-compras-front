/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OrganProps } from 'types/organs'
import api from './api'

type OrganResponse = {
  data: OrganProps
}
type OrgansResponse = {
  data: OrganProps[]
}

export const getOrgans = async () => {
  try {
    const organs: OrgansResponse = await api.get('/organ')
    return {
      data: organs.data,
      success: true
    }
  } catch (err) {
    return {
      data: [] as OrganProps[],
      success: false,
      error: 'Erro ao recuperar dados de Órgãos'
    }
  }
}

export const getOrgan = async (id: number) => {
  try {
    const organ: OrganResponse = await api.get(`organ/${id}`)

    return {
      data: organ.data,
      success: true
    }
  } catch (err) {
    return {
      data: {} as OrganProps,
      success: false,
      error: 'Erro ao recuperar dados de Órgãos.'
    }
  }
}
