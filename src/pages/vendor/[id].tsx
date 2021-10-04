import { VendorContextProvider, VendorContext } from 'contexts/vendor'
import VendorAprovationPage from 'components/Templates/Vendor/VendorAprovationPage'

export default function VendorApprovePage() {
  return (
    <VendorContextProvider>
      <VendorContext.Consumer>
        {({ isLoading }) => {
          if (isLoading) {
            return <>Carregando...</>
          } else {
            return <VendorAprovationPage />
          }
        }}
      </VendorContext.Consumer>
    </VendorContextProvider>
  )
}
