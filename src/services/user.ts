import { User, UserProps } from 'types/user'
import api from './api'

type LoginResponse = {
  data: UserProps
}

type AuthResponse = {
  data: User
}

export const LogIn = async (identifier: string, password: string) => {
  try {
    const userData: LoginResponse = await api.post(`/auth/local`, {
      identifier,
      password
    })

    return {
      data: userData.data,
      success: true
    }
  } catch (err) {
    return {
      data: {} as UserProps,
      success: false,
      error: 'Usuário ou senha inválidos.'
    }
  }
}

export const AuthCheck = async () => {
  try {
    const me: AuthResponse = await api.get('/users/me')
    if (me.data.id) {
      return {
        success: true,
        data: me.data
      }
    } else {
      return {
        data: {} as User,
        success: false,
        error: 'Usuário não autenticado!'
      }
    }
  } catch (err) {
    return {
      data: {} as User,
      success: false,
      error: 'Usuário não autenticado!'
    }
  }
}
