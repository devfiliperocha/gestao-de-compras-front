import * as S from './styles' /** S = Styles */
import Dropdown from 'components/Molecules/Dropdown'
import { useContext, useState } from 'react'
import Typography from 'components/Atoms/Typography'
import { sortVendors } from 'components/Templates/Vendor/VendorPage/utils'
import { VendorsContext } from 'contexts/vendors'
import { useRouter } from 'next/router'

type Situation = {
  title: string
  value: 'all' | 'warning' | 'success' | 'error'
}

const VendorPage = () => {
  const { vendors, setVendors } = useContext(VendorsContext)
  const router = useRouter()

  const initialSituation: Situation = { title: 'Todos', value: 'all' }
  const [situation, setStituation] = useState(initialSituation)

  const situations: Situation[] = [
    { title: 'Todos', value: 'all' },
    { title: 'Pendente', value: 'warning' },
    { title: 'Aprovado', value: 'success' },
    { title: 'Rejeitado', value: 'error' }
  ]

  const onVendorClick = (id: number) => {
    router.push(`/vendor/${id}`)
    return
  }

  return (
    <S.Wrapper maxWidth="lg">
      <S.HeaderWrapper>
        <S.TitleWrapper>
          <Typography variant="h3" color="primary">
            Situação Cadastral
          </Typography>
        </S.TitleWrapper>
        <S.DropdownWrapper>
          <Dropdown
            value={situation}
            options={situations}
            onChange={(e, v) => setStituation(v)}
          />
        </S.DropdownWrapper>
      </S.HeaderWrapper>
      <S.ListWrapper>
        <S.ListHeader
          onSort={(sortColumn, sortDirection) => {
            setVendors(sortVendors(sortColumn, sortDirection, vendors))
          }}
        />
        {vendors &&
          vendors
            .filter((vendor) =>
              situation.value === 'all'
                ? true
                : vendor.status.type === situation.value
            )
            .map((vendor, i) => (
              <S.ListItem
                key={i}
                vendor={vendor}
                onActionClick={() => onVendorClick(vendor.id)}
              />
            ))}
      </S.ListWrapper>
    </S.Wrapper>
  )
}

export default VendorPage
