import * as S from './styles' /** S = Styles */
import Dropdown from 'components/Molecules/Dropdown'
import { Grid } from '@material-ui/core'
import { useState } from 'react'
import Typography from 'components/Atoms/Typography'
import VendorList from 'components/Organisms/Vendor/VendorList'
import { Vendors } from 'types/vendors'

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

  const situations: Situation[] = [
    { title: 'Todos', value: 'all' },
    { title: 'Pendente', value: 'warning' },
    { title: 'Aprovado', value: 'success' },
    { title: 'Rejeitado', value: 'error' }
  ]
  return (
    <S.Wrapper maxWidth="lg">
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        rowSpacing={5}
      >
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
            <Grid item xs={6}>
              <Dropdown
                value={situation}
                options={situations}
                onChange={(e, v) => setStituation(v)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <VendorList vendorsData={data} status={situation.value} />
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default VendorPage
