import axios from 'axios'
import VendorPage from 'components/Templates/Vendor/VendorPage'
import { useRouter } from 'next/dist/client/router'
import { Vendors } from 'types/vendors'
import { VendorsContext } from 'contexts/vendor'
import { useState } from 'react'

type VendorsPageProps = {
  vendors: Vendors[]
}

export default function VendorsPage({ vendors }: VendorsPageProps) {
  const [vendorsData, setVendorsData] = useState(vendors)

  const router = useRouter()

  return (
    <VendorsContext.Provider value={{ vendors: vendorsData }}>
      <VendorPage
        onVendorClick={(id: number) => {
          router.push(`/vendor/${id}`)
          return
        }}
      />
    </VendorsContext.Provider>
  )
}
export async function getServerSideProps() {
  try {
    const vendors = await axios.get(`${process.env.API_URL}/vendor`)
    return {
      props: {
        vendors: vendors.data
      }
    }
  } catch (err) {
    return {
      props: {
        vendors: []
      }
    }
  }
}
