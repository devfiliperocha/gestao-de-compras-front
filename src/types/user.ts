export type User = {
  id: number
  username: string
  email: string
  role: {
    id: number
    name: string
    description: string
    type: string
  }
}

export type UserProps = {
  jwt: string
  user: User
}
