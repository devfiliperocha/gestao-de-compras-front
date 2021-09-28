import * as S from './styles' /** S = Styles */
import Dropdown from 'components/Molecules/Dropdown'
import { Grid } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Typography from 'components/Atoms/Typography'
import { Vendors } from 'types/vendors'
import { sortVendors } from 'components/Templates/VendorPage/utils'

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
      <Grid container direction="column" rowSpacing={5}>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            columnSpacing={3}
            alignItems="center"
            justifyContent="flex-start"
          >
            <Grid item>
              <Typography variant="h3" color="primary">
                Situação Cadastral
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Dropdown
                value={situation}
                options={situations}
                onChange={(e, v) => setStituation(v)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default VendorPage
