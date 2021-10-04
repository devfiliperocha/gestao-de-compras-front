import VendorPage from 'components/Templates/Vendor/VendorPage'
import { useRouter } from 'next/dist/client/router'
import { VendorsContextProvider, VendorsContext } from 'contexts/vendors'

export default function VendorsPage() {
  const router = useRouter()

  return (
    <VendorsContextProvider>
      <VendorsContext.Consumer>
        {({ isLoading }) => {
          if (isLoading) {
            return <>Carregando...</>
          } else {
            return (
              <VendorPage
                onVendorClick={(id: number) => {
                  router.push(`/vendor/${id}`)
                  return
                }}
              />
            )
          }
        }}
      </VendorsContext.Consumer>
    </VendorsContextProvider>
  )
}
