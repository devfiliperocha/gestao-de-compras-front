import axios, { AxiosResponse } from 'axios'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL

type Strapi400Response = {
  statusCode: 400
  error: string
  message: string
  data: {
    errors: Record<string, string[]>
  }
}
const msgs: Record<string, string> = {
  required: 'Faltou preencher este campo. É obrigatório!',
  minChar: ''
}
const msgsMap: Record<string, string> = {
  'must be defined': msgs['required']
}

const handleMessages = (errors: Strapi400Response['data']['errors']) => {
  const formatedErrors: Strapi400Response['data']['errors'] = {}
  Object.keys(errors).forEach((field) => {
    const fieldErrors = errors[field].map((err) => {
      let message = err
      Object.keys(msgsMap).forEach((msg) => {
        if (err.toLowerCase().includes(msg)) {
          message = msgsMap[msg]
        }
      })
      return message
    })
    formatedErrors[field] = fieldErrors
  })
  return formatedErrors
}

export const handleResponse = (
  response: AxiosResponse,
  returnTypes: 'array' | 'object' = 'array'
) => {
  const responseData: Strapi400Response = response.data
  const returnTypesMap = {
    array: [],
    object: {}
  }
  const returnType = returnTypesMap[returnTypes]

  switch (response.status) {
    case 401:
      //'unauthorized'
      return {
        success: false,
        error: 'Você não tem permissões para executar esta ação!',
        data: returnType
      }
      break
    case 403:
      //'forbidden'
      return {
        success: false,
        error: 'Você não tem permissões para executar esta ação!',
        data: returnType
      }
      break
    case 400:
      //'bad request'
      if (responseData.message === 'ValidationError') {
        return {
          success: false,
          error: handleMessages(responseData.data.errors),
          data: returnType
        }
      }
      return {
        success: false,
        error: 'Dados inválidos!',
        data: returnType
      }
      break
    case 404:
      //'not found'
      return {
        success: false,
        error: 'O recurso que você está tentando acessar não existe!',
        data: returnType
      }
      break
    case 500:
      //'internal server error'
      return {
        success: false,
        error: 'Erro inesperado no servidor! Favor contatar o suporte.',
        data: returnType
      }
      break
    default:
      return {
        data: response.data as typeof returnType,
        success: true
      }
  }
}

export default axios
