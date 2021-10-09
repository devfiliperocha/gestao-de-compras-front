/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OrganProps } from '../types/organs'
import api from 'services/api'

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

export const createOrgan = async (data: Partial<OrganProps>) => {
  try {
    const save: OrganResponse = await api.post('/organ', data)
    return {
      data: save.data,
      success: true
    }
  } catch (err) {
    return {
      data: {} as OrganProps,
      success: false,
      error: 'Erro ao criar registro.'
    }
  }
}
export const updateOrgan = async (
  data: Partial<OrganProps>,
  id: OrganProps['id']
) => {
  try {
    const save: OrganResponse = await api.put(`/organ/${id}`, data)
    return {
      data: save.data,
      success: true
    }
  } catch (err) {
    return {
      data: {} as OrganProps,
      success: false,
      error: 'Erro ao salvar registro.'
    }
  }
}
export const deleteOrgan = async (id: OrganProps['id']) => {
  try {
    const save: OrganResponse = await api.delete(`/organ/${id}`)
    return {
      data: save.data,
      success: true
    }
  } catch (err) {
    return {
      data: {} as OrganProps,
      success: false,
      error: 'Erro ao deletar dados.'
    }
  }
}
