import { AppContext } from 'contexts/app'
import { useContext, useEffect } from 'react'

export default function useTitle(title: string) {
  const { setTitle } = useContext(AppContext)

  useEffect(() => {
    if (title === '') {
      setTitle(`JP Gestão de Compras`)
      document.title = `JP Gestão de Compras`
    } else {
      setTitle(`${title}`)
      document.title = `${title} | JP Gestão de Compras`
    }
  }, [setTitle, title])

  return
}
