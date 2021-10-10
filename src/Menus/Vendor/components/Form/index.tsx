/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles' /** S = Styles */

import TextField from 'components/Atoms/TextField'
import MaskedInput from 'components/Atoms/MaskedInput'
import SectionTitle from 'components/Atoms/SectionTitle'
import { Grid } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import debounce from '@material-ui/utils/debounce'
import {
  VendorFormErrors,
  VendorProps,
  UpdateVendorProps
} from '../../types/vendors'
import DocIcon from '../DocIcon'
import { Docs, DocsNames } from 'types/utils'
import { File } from 'types/file'
import Alert from 'components/Atoms/Alert'

export type VendorFormProps = {
  disabled?: boolean
  onUpdateForm: (vendor: Partial<VendorProps>) => void
  onUpdateDocument: (field: Docs, value: File) => void
  vendor: Partial<VendorProps>
  errors: VendorFormErrors | undefined
}

const certidoes: Partial<Docs[]> = [
  'federalCertificatePdf',
  'fgtsCertificatePdf',
  'laborCertificatePdf',
  'municipalCertificatePdf',
  'stateCertificatePdf'
]

const VendorForm = ({
  disabled = false,
  vendor,
  onUpdateForm,
  onUpdateDocument,
  errors = {} as VendorFormErrors
}: VendorFormProps) => {
  const [formData, setFormData] = useState(vendor)
  const debouncedSave = useRef(
    debounce((data) => onUpdateForm(data), 400)
  ).current

  const updateVendorData: UpdateVendorProps = (field, value) => {
    const data: Partial<VendorProps> = {
      ...formData,
      [field]: value
    }
    setFormData(data)
    debouncedSave(data)
  }

  return (
    <S.Wrapper>
      <SectionTitle>Identificação</SectionTitle>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <S.Input>
            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateVendorData('corporateName', e.target.value)
              }
              error={!!errors['corporateName']}
              helperText={
                !!errors['corporateName'] && errors['corporateName'].join(',')
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
            <MaskedInput
              fullWidth
              mask="99.999.999/9999-99"
              disabled={disabled}
              error={!!errors['corporateDocNumber']}
              helperText={
                !!errors['corporateDocNumber'] &&
                errors['corporateDocNumber'].join(',')
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                updateVendorData('corporateDocNumber', e.target.value)
              }}
              onBlur={() => {
                updateVendorData(
                  'corporateDocNumber',
                  formData.corporateDocNumber
                )
              }}
              requiredCharCount={14}
              requiredCharCountRegex={/[^0-9]/g}
              placeholder="CNPJ"
              value={formData.corporateDocNumber}
            />
          </S.Input>
        </Grid>
      </Grid>
      <SectionTitle>
        Endereço
        {!!errors['address'] && (
          <Alert severity="error">
            {!!errors['address'] && errors['address'].join(',')}
          </Alert>
        )}
      </SectionTitle>
      <Grid container>
        <Grid item xs={9} sm={4}>
          <S.Input>
            <TextField
              error={!!errors['address.address']}
              helperText={
                !!errors['address.address'] &&
                errors['address.address'].join(',')
              }
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateVendorData('address', {
                  ...formData.address,
                  address: e.target.value
                })
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
              error={!!errors['address.number']}
              helperText={
                !!errors['address.number'] && errors['address.number'].join(',')
              }
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateVendorData('address', {
                  ...formData.address,
                  number: e.target.value
                })
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
              error={!!errors['address.complement']}
              helperText={
                !!errors['address.complement'] &&
                errors['address.complement'].join(',')
              }
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateVendorData('address', {
                  ...formData.address,
                  complement: e.target.value
                })
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
              error={!!errors['address.CEP']}
              helperText={
                !!errors['address.CEP'] && errors['address.CEP'].join(',')
              }
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateVendorData('address', {
                  ...formData.address,
                  CEP: e.target.value
                })
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
              error={!!errors['address.state']}
              helperText={
                !!errors['address.state'] && errors['address.state'].join(',')
              }
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateVendorData('address', {
                  ...formData.address,
                  state: e.target.value
                })
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
              error={!!errors['address.city']}
              helperText={
                !!errors['address.city'] && errors['address.city'].join(',')
              }
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateVendorData('address', {
                  ...formData.address,
                  city: e.target.value
                })
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
              docData={formData[cert!] as File}
              fileName={DocsNames[cert!]}
              onUpdateDoc={onUpdateDocument}
            />
          </Grid>
        ))}
      </Grid>

      <SectionTitle>CNPJ</SectionTitle>
      <DocIcon
        docName="corporateDocPdf"
        docData={formData.corporateDocPdf as File}
        fileName="Certidão Federal"
        onUpdateDoc={onUpdateDocument}
      />
    </S.Wrapper>
  )
}

export default VendorForm
