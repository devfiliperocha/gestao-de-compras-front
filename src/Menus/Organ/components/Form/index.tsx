/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles' /** S = Styles */

import TextField from 'components/Atoms/TextField'
import SectionTitle from 'components/Atoms/SectionTitle'
import { Grid } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import debounce from '@material-ui/utils/debounce'
import { OrganProps, UpdateOrganProps } from '../../types/organs'

export type OrganFormProps = {
  disabled?: boolean
  onUpdateForm: UpdateOrganProps
  organ: OrganProps
}

const OrganForm = ({
  disabled = false,
  organ,
  onUpdateForm
}: OrganFormProps) => {
  const [formData, setFormData] = useState(organ)

  const debouncedSave = useRef(
    debounce((field, value) => onUpdateForm(field, value), 400)
  ).current

  const updateOrganData: UpdateOrganProps = (field, value) => {
    const data: OrganProps = {
      ...formData,
      [field]: value
    }
    setFormData(data)
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
                updateOrganData('id', e.target.value)
              }
              fullWidth
              disabled={disabled}
              placeholder="ID"
              value={formData.id + ''}
            />
          </S.Input>
        </Grid>
        <Grid item xs={12} sm={6}>
          <S.Input>
            <TextField
              fullWidth
              disabled={disabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateOrganData('id', e.target.value)
              }
              placeholder="CNPJ"
              value={formData.id + ''}
            />
          </S.Input>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}

export default OrganForm
