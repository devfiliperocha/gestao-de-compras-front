/* eslint-disable @typescript-eslint/no-explicit-any */
import { AutocompleteChangeReason, Box } from '@material-ui/core'
import { useEffect, useState } from 'react'
import * as S from './styles' /** S = Styles */
import { useTheme } from '@material-ui/core/styles'
import Loading from 'components/Atoms/Loading'
import Icon from 'components/Atoms/Icon'
import TextField from 'components/Atoms/TextField'

export type DropDownProps = {
  options: ReadonlyArray<unknown>
  value?: unknown
  loading?: boolean
  open?: boolean
  label?: string
  listLabelKey?: string
  valueKey?: string
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
  value,
  label,
  listLabelKey = 'title',
  valueKey = 'value',
  onChange
}: DropDownProps) => {
  const [isLoading, setLoading] = useState(loading)
  const [isOpen, setOpen] = useState(open)
  const theme = useTheme()

  useEffect(() => {
    setLoading(loading)
    !loading && setOpen(open)
    loading && setOpen(false)
  }, [loading, open])

  return (
    <S.Wrapper
      disableClearable
      disablePortal
      value={value}
      onChange={onChange}
      open={isOpen}
      onOpen={() => !isLoading && setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      loading={isLoading}
      getOptionLabel={(option: any): string => option[listLabelKey]}
      isOptionEqualToValue={(option: any, value: any) =>
        option[valueKey] === value[valueKey]
      }
      size="small"
      fullWidth={false}
      openOnFocus
      noOptionsText="Nenhuma opção correspondente..."
      loadingText="Carregando..."
      closeText="Fechar"
      clearText="Limpar"
      color="info"
      popupIcon={
        !isLoading ? (
          <Icon name="ChevronDown" size={30} variant="accent" />
        ) : (
          <Loading variant="accent" size={20} />
        )
      }
      renderInput={(params) => <TextField {...params} label={label} />}
      renderOption={(props, option: any) => (
        <li {...props}>
          <Box
            sx={{
              borderBottom: `thin solid ${theme.palette.info.light}`,
              flexGrow: 1
            }}
          >
            {option[listLabelKey]}
          </Box>
        </li>
      )}
    />
  )
}

export default Dropdown
