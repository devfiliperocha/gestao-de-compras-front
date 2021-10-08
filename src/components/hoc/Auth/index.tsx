import { useRouter } from 'next/router'

export function withAuth<T>(WrappedComponent: React.ComponentType<T>) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithAuth = (props: Partial<T>) => {
    const router = useRouter()
    if (typeof window !== 'undefined') {
      const userToken = localStorage.getItem('userToken')

      // If there is no access token we redirect to "/" page.
      if (!userToken) {
        router.push('/login')
        return null
      }

      // props comes afterwards so the can override the default ones.
      return <WrappedComponent {...(props as T)} />
    } else {
      return null
    }
  }

  ComponentWithAuth.displayName = `withAuth(${displayName})`

  return ComponentWithAuth
}
