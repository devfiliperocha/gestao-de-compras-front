/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles' /** S = Styles */

import TextField from 'components/Atoms/TextField'
import MaskedInput from 'components/Atoms/MaskedInput'
import SectionTitle from 'components/Atoms/SectionTitle'
import { Grid } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import debounce from '@material-ui/utils/debounce'
import { OrganProps, UpdateOrganProps } from '../../types/organs'
import Switch from 'components/Atoms/Switch'

export type OrganFormProps = {
  disabled?: boolean
  onUpdateForm: (organ: Partial<OrganProps>) => void
  organ: Partial<OrganProps>
}

const OrganForm = ({
  disabled = false,
  organ,
  onUpdateForm
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
            <span>Autarquia: </span>
            <Switch
              checked={formData.autarchy}
              onChange={(e: React.ChangeEvent<HTMLInputElement>, value) => {
                updateOrganData('autarchy', value)
              }}
            />

            <span>Secretaria: </span>
            <Switch
              checked={formData.secretariat}
              onChange={(e: React.ChangeEvent<HTMLInputElement>, value) =>
                updateOrganData('secretariat', value)
              }
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
