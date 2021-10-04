/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles' /** S = Styles */

import TextField from 'components/Atoms/TextField'
import SectionTitle from 'components/Atoms/SectionTitle'
import { Grid } from '@material-ui/core'
import React, { useRef, useContext } from 'react'
import debounce from '@material-ui/utils/debounce'
import DocIcon from 'components/Molecules/Vendor/DocIcon'
import { VendorContext } from 'contexts/vendor'
import { Docs, DocsNames } from 'types/utils'

export type VendorFormProps = {
  disabled?: boolean
}

const VendorForm = ({ disabled = false }: VendorFormProps) => {
  const context = useContext(VendorContext)

  const formData = context.vendor

  const certidoes: Partial<Docs[]> = [
    'federalCertificatePdf',
    'fgtsCertificatePdf',
    'laborCertificatePdf',
    'municipalCertificatePdf',
    'stateCertificatePdf'
  ]

  const debouncedSave = useRef(
    debounce(
      (field: string, value: string) => context.updateFormData(field, value),
      400
    )
  ).current

  const updateFormData = (field: string, value: string) => {
    debouncedSave(field, value)
  }

  return (
    <S.Wrapper>
      <SectionTitle>Identificação</SectionTitle>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <S.Input>
            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFormData('corporateName', e.target.value)
              }
              fullWidth
              disabled={disabled}
              placeholder="Razão Social"
              value={formData.corporateName}
            />
          </S.Input>
        </Grid>
        <Grid item xs={12} sm={6}>
          <S.Input>
            <TextField
              fullWidth
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFormData('corporateDocNumber', e.target.value)
              }
              placeholder="CNPJ"
              value={formData.corporateDocNumber}
            />
          </S.Input>
        </Grid>
      </Grid>

      <SectionTitle>Endereço</SectionTitle>
      <Grid container>
        <Grid item xs={9} sm={4}>
          <S.Input>
            <TextField
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFormData('address', e.target.value)
              }
              fullWidth
              placeholder="Logradouro"
              value={formData.address?.address}
            />
          </S.Input>
        </Grid>
        <Grid item xs={3} sm={2}>
          <S.Input>
            <TextField
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFormData('number', e.target.value)
              }
              fullWidth
              placeholder="Nº"
              value={formData.address?.number}
            />
          </S.Input>
        </Grid>
        <Grid item xs={12} sm={6}>
          <S.Input>
            <TextField
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFormData('complement', e.target.value)
              }
              fullWidth
              placeholder="Complemento"
              value={formData.address?.complement}
            />
          </S.Input>
        </Grid>
        <Grid item xs={6} sm={3}>
          <S.Input>
            <TextField
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFormData('CEP', e.target.value)
              }
              fullWidth
              placeholder="CEP"
              value={formData.address?.CEP}
            />
          </S.Input>
        </Grid>
        <Grid item xs={6} sm={3}>
          <S.Input>
            <TextField
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFormData('state', e.target.value)
              }
              fullWidth
              placeholder="Estado"
              value={formData.address?.state}
            />
          </S.Input>
        </Grid>
        <Grid item xs={12} sm={6}>
          <S.Input>
            <TextField
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFormData('city', e.target.value)
              }
              fullWidth
              placeholder="Cidade"
              value={formData.address?.city}
            />
          </S.Input>
        </Grid>
      </Grid>

      <SectionTitle>Certidões</SectionTitle>
      <br />
      <Grid container>
        {certidoes.map((cert, i) => (
          <Grid item key={i}>
            <DocIcon
              docName={cert}
              docData={formData[cert!]}
              fileName={DocsNames[cert!]}
            />
          </Grid>
        ))}
      </Grid>

      <SectionTitle>CNPJ</SectionTitle>
      <DocIcon
        docName="corporateDocPdf"
        docData={formData.corporateDocPdf}
        fileName="Certidão Federal"
      />
    </S.Wrapper>
  )
}

export default VendorForm
