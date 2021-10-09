import * as S from './styles' /** S = Styles */
import React, { useContext, useState } from 'react'
import Container from '@material-ui/core/Container'
import { useRouter } from 'next/router'
import Typography from 'components/Atoms/Typography'
import EmptyState from 'components/Atoms/EmptyState'
import Button from 'components/Atoms/Button'
import Modal from 'components/Atoms/Modal'
import OrganForm from '../Form'
import { sortOrgans } from './utils'
import { OrgansContext } from '../../context/organs'
import useTitle from 'Hooks/useTitle'

const OrganList = () => {
  const {
    organs,
    setOrgans,
    create,
    newOrgan,
    setFormData,
    errors,
    clearErrors
  } = useContext(OrgansContext)
  const [isNewOrgaoModalOpen, setNewOrgaoModalOpen] = useState(false)
  const router = useRouter()

  const closeModalNewOrgao = () => {
    setFormData({})
    clearErrors()
    setNewOrgaoModalOpen(false)
  }

  const onOrganClick = (id: number) => {
    router.push(`/organ/${id}`)
    return
  }
  useTitle(`Órgãos`)

  return (
    <S.Wrapper maxWidth="lg">
      {organs.length > 0 && (
        <>
          <S.Actions>
            <Button onClick={() => setNewOrgaoModalOpen(true)}>
              Cadastrar Novo Órgão
            </Button>
          </S.Actions>
        </>
      )}

      <Modal
        title="Cadastrar Novo Órgão"
        open={isNewOrgaoModalOpen}
        onClose={() => closeModalNewOrgao()}
        action={
          <S.Actions>
            <Button
              onClick={() => closeModalNewOrgao()}
              variant="outlined"
              color="error"
            >
              Cancelar
            </Button>
            <Button onClick={() => create()}>Confirmar</Button>
          </S.Actions>
        }
      >
        <Container maxWidth="lg">
          <OrganForm
            organ={newOrgan}
            onUpdateForm={setFormData}
            errors={errors}
          />
        </Container>
      </Modal>

      {organs.length === 0 && (
        <EmptyState
          title={
            <Typography variant="body2" color="primary">
              Você ainda não tem nenhum <strong>Órgão</strong> cadastrado.
              Clique em <strong>Cadastrar Órgão</strong>
            </Typography>
          }
          button={
            <Button onClick={() => setNewOrgaoModalOpen(true)}>
              Cadastrar Órgão
            </Button>
          }
        />
      )}
      {organs.length > 0 && (
        <S.ListWrapper>
          <S.ListHeader
            onSort={(sortColumn, sortDirection) => {
              setOrgans(sortOrgans(sortColumn, sortDirection, organs))
            }}
          />
          {organs &&
            organs.map((organ, i) => (
              <S.ListItem
                key={i}
                organ={organ}
                onActionClick={() => onOrganClick(organ.id)}
              />
            ))}
        </S.ListWrapper>
      )}
    </S.Wrapper>
  )
}

export default OrganList
