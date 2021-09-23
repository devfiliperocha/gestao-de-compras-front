/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TextField,
  CircularProgress,
  AutocompleteChangeReason
} from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import * as S from './styles' /** S = Styles */

export type DropDownProps = {
  options: ReadonlyArray<unknown>
  loading?: boolean
  open?: boolean
  label?: string
  listLabelKey?: string
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    value: any,
    reason: AutocompleteChangeReason,
    details: any
  ) => void
}

const Dropdown = ({
  options,
  loading = false,
  open = false,
  label = 'Selecione',
  listLabelKey = 'title',
  onChange
}: DropDownProps) => {
  const [isLoading, setLoading] = useState(loading)
  const [isOpen, setOpen] = useState(open)

  useEffect(() => {
    setLoading(loading)
    !loading && setOpen(open)
    loading && setOpen(false)
  }, [loading, open])

  return (
    <S.Wrapper
      disablePortal
      onChange={onChange}
      open={isOpen}
      onOpen={() => !isLoading && setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      loading={isLoading}
      getOptionLabel={(option: any): string => option[listLabelKey]}
      size="small"
      fullWidth={false}
      openOnFocus
      noOptionsText="Nenhuma opção correspondente..."
      loadingText="Carregando..."
      closeText="Fechar"
      clearText="Limpar"
      color="info"
      popupIcon={
        !isLoading && (
          <KeyboardArrowDown
            sx={{ fontSize: 30, padding: '0px' }}
            color="warning"
          />
        )
      }
      renderInput={(params) => (
        <TextField
          color="info"
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress
                    color="warning"
                    size={20}
                    sx={{ marginRight: '1rem' }}
                  />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
    />
  )
}

export default Dropdown
