import * as S from './styles' /** S = Styles */
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Typography from 'components/Atoms/Typography'
import EmptyState from 'components/Atoms/EmptyState'
import Dropdown from 'components/Molecules/Dropdown'
import { sortVendors } from './utils'
import { VendorsContext } from '../../context/vendors'
import useTitle from 'Hooks/useTitle'

type Situation = {
  title: string
  value: 'all' | 'warning' | 'success' | 'error'
}

const situations: Situation[] = [
  { title: 'Todos', value: 'all' },
  { title: 'Pendente', value: 'warning' },
  { title: 'Aprovado', value: 'success' },
  { title: 'Rejeitado', value: 'error' }
]

const VendorList = () => {
  const { vendors, setVendors } = useContext(VendorsContext)
  const initialSituation: Situation = { title: 'Todos', value: 'all' }
  const [situation, setStituation] = useState(initialSituation)
  const router = useRouter()
  useTitle(`Fornecedores`)

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

      {vendors.length === 0 && (
        <EmptyState
          title={
            <Typography variant="body2" color="primary">
              Nenhum <strong>Fornecedor</strong> cadastrado por enquanto.
            </Typography>
          }
          button={<></>}
        />
      )}
      {vendors.length > 0 && (
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
      )}
    </S.Wrapper>
  )
}

export default VendorList
