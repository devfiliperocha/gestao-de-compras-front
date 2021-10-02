import * as S from './styles' /** S = Styles */

import TextField from 'components/Atoms/TextField'
import SectionTitle from 'components/Atoms/SectionTitle'
import { Grid } from '@material-ui/core'
import { Vendors } from 'types/vendors'
import React, { useState, useRef } from 'react'
import debounce from '@material-ui/utils/debounce'
import DocIcon from 'components/Molecules/DocIcon'

export type VendorFormProps = {
  vendor: Vendors
  onChange?: (formData: Vendors) => void
  disabled?: boolean
}

const VendorForm = ({
  vendor,
  onChange = () => null,
  disabled = false
}: VendorFormProps) => {
  const [formData, setFormData] = useState<Vendors>(vendor)

  const debouncedSave = useRef(
    debounce((newFormData) => onChange(newFormData), 400)
  ).current

  const updateFormData = (field: string, value: string) => {
    const newFormData = {
      ...formData,
      [field]: value
    }
    setFormData(newFormData)
    debouncedSave(newFormData)
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
        <Grid item>
          <DocIcon
            variant={vendor.federalCertificatePdf?.status}
            {...{
              // TODO: Modal Actions (aprove, reject)
              fileName: 'Certidão Federal',
              ...vendor.federalCertificatePdf
            }}
          />
        </Grid>
        <Grid item>
          <DocIcon
            variant={vendor.stateCertificatePdf?.status}
            {...{
              fileName: 'Certidão Estadual',
              ...vendor.stateCertificatePdf
            }}
          />
        </Grid>
        <Grid item>
          <DocIcon
            variant={vendor.municipalCertificatePdf?.status}
            {...{
              fileName: 'Certidão Municipal',
              ...vendor.municipalCertificatePdf
            }}
          />
        </Grid>
        <Grid item>
          <DocIcon
            variant={vendor.fgtsCertificatePdf?.status}
            {...{
              fileName: 'Certidão FGTS',
              ...vendor.fgtsCertificatePdf
            }}
          />
        </Grid>
        <Grid item>
          <DocIcon
            variant={vendor.laborCertificatePdf?.status}
            {...{
              fileName: 'Certidão Trabalhista',
              ...vendor.laborCertificatePdf
            }}
          />
        </Grid>
      </Grid>

      <SectionTitle>CNPJ</SectionTitle>
      <DocIcon
        variant={vendor.corporateDocPdf?.status}
        {...{
          fileName: 'Cartão CNPJ',
          ...vendor.corporateDocPdf
        }}
      />
    </S.Wrapper>
  )
}

export default VendorForm
