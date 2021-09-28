import * as S from './styles' /** S = Styles */
import Dropdown from 'components/Molecules/Dropdown'
import { useEffect, useState } from 'react'
import Typography from 'components/Atoms/Typography'
import { Vendors } from 'types/vendors'
import { sortVendors } from 'components/Templates/Vendor/VendorPage/utils'

export type VendorProps = {
  data?: Vendors[]
}
type Situation = {
  title: string
  value: 'all' | 'warning' | 'success' | 'error'
}

const VendorPage = ({ data = [] }: VendorProps) => {
  const initialSituation: Situation = { title: 'Todos', value: 'all' }
  const [situation, setStituation] = useState(initialSituation)
  const [vendors, setVendors] = useState(data)

  useEffect(() => {
    setVendors(data)
  }, [data])

  const situations: Situation[] = [
    { title: 'Todos', value: 'all' },
    { title: 'Pendente', value: 'warning' },
    { title: 'Aprovado', value: 'success' },
    { title: 'Rejeitado', value: 'error' }
  ]

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
            .map((vendor, i) => <S.ListItem key={i} vendor={vendor} />)}
      </S.ListWrapper>
    </S.Wrapper>
  )
}

export default VendorPage
