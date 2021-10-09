/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OrganProps } from '../types/organs'
import api, { handleResponse } from 'services/api'
import { AxiosResponse } from 'axios'

export const getOrgans = async () => {
  try {
    const organs: AxiosResponse = await api.get('/organ')
    return handleResponse(organs, 'array')
  } catch (err: any) {
    const response: AxiosResponse = err.response
    return handleResponse(response, 'array')
  }
}

export const getOrgan = async (id: number) => {
  try {
    const organ: AxiosResponse = await api.get(`organ/${id}`)
    return handleResponse(organ, 'object')
  } catch (err: any) {
    const response: AxiosResponse = err.response
    return handleResponse(response, 'object')
  }
}

export const createOrgan = async (data: Partial<OrganProps>) => {
  try {
    const save: AxiosResponse = await api.post('/organ', data)
    return handleResponse(save)
  } catch (err: any) {
    const response: AxiosResponse = err.response
    return handleResponse(response)
  }
}
export const updateOrgan = async (
  data: Partial<OrganProps>,
  id: OrganProps['id']
) => {
  try {
    const save: AxiosResponse = await api.put(`/organ/${id}`, data)
    return handleResponse(save)
  } catch (err: any) {
    const response: AxiosResponse = err.response
    return handleResponse(response)
  }
}
export const deleteOrgan = async (id: OrganProps['id']) => {
  try {
    const save: AxiosResponse = await api.delete(`/organ/${id}`)
    return handleResponse(save)
  } catch (err: any) {
    const response: AxiosResponse = err.response
    return handleResponse(response)
  }
}
