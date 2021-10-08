import Login from 'components/Templates/Login'
import { UserContext } from 'contexts/user'
import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'

export default function LogIn() {
  const { isLogged } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (isLogged) {
      router.push('/')
    }
  }, [isLogged, router])

  return <Login />
}
