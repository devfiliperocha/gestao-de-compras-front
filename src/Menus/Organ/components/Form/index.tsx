/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles' /** S = Styles */

import TextField from 'components/Atoms/TextField'
import MaskedInput from 'components/Atoms/MaskedInput'
import SectionTitle from 'components/Atoms/SectionTitle'
import { Grid } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import debounce from '@material-ui/utils/debounce'
import {
  OrganFormErrors,
  OrganProps,
  UpdateOrganProps
} from '../../types/organs'
import Switch from 'components/Atoms/Switch'
import Alert from 'components/Atoms/Alert'

export type OrganFormProps = {
  disabled?: boolean
  onUpdateForm: (organ: Partial<OrganProps>) => void
  organ: Partial<OrganProps>
  errors: OrganFormErrors | undefined
}

const OrganForm = ({
  disabled = false,
  organ,
  onUpdateForm,
  errors = {} as OrganFormErrors
}: OrganFormProps) => {
  const [formData, setFormData] = useState(organ)
  const debouncedSave = useRef(
    debounce((data) => onUpdateForm(data), 400)
  ).current

  const updateOrganData: UpdateOrganProps = (field, value) => {
    const data: Partial<OrganProps> = {
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
        <Grid item xs={12}>
          <S.Input>
            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateOrganData('name', e.target.value)
              }
              error={!!errors['name']}
              helperText={!!errors['name'] && errors['name'].join(',')}
              fullWidth
              disabled={disabled}
              placeholder="Nome"
              value={formData.name}
            />
          </S.Input>
        </Grid>
        <Grid item xs={12}>
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
                updateOrganData('corporateDocNumber', e.target.value)
              }}
              onBlur={() => {
                updateOrganData(
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
        <Grid item xs={12}>
          <S.Input>
            <Switch
              label="Autarquia"
              checked={formData.autarchy}
              error={!!errors['autarchy']}
              helperText={!!errors['autarchy'] && errors['autarchy'].join(',')}
              onChange={(e: React.ChangeEvent<HTMLInputElement>, value) => {
                updateOrganData('autarchy', value)
              }}
            />

            <Switch
              label="Secretaria"
              checked={formData.secretariat}
              error={!!errors['secretariat']}
              helperText={
                !!errors['secretariat'] && errors['secretariat'].join(',')
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>, value) =>
                updateOrganData('secretariat', value)
              }
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
                updateOrganData('address', {
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
                updateOrganData('address', {
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
                updateOrganData('address', {
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
                updateOrganData('address', {
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
                updateOrganData('address', {
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
                updateOrganData('address', {
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
    </S.Wrapper>
  )
}

export default OrganForm
