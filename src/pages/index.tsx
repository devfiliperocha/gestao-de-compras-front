import AppLeftMenu from 'components/Molecules/AppWrapper/AppLeftMenu'
import { withAuth } from 'components/hoc/Auth'
import Main from 'components/Pages/Main'
import React from 'react'
import { UserContext } from 'contexts/user'
import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'

const Home = () => {
  const { isLogged } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (!isLogged) {
      router.push('/login')
    }
  }, [isLogged, router])

  return (
    <AppLeftMenu>
      <Main />
    </AppLeftMenu>
  )
}

export default withAuth(Home)
