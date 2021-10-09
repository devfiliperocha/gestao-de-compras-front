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

const OrganList = () => {
  const { organs, setOrgans, create, newOrgan, updateFormData } =
    useContext(OrgansContext)
  const [isNewOrgaoModalOpen, setNewOrgaoModalOpen] = useState(false)
  const router = useRouter()

  const onOrganClick = (id: number) => {
    router.push(`/organ/${id}`)
    return
  }

  return (
    <S.Wrapper maxWidth="lg">
      {organs.length > 0 && (
        <>
          <S.HeaderWrapper></S.HeaderWrapper>
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
        onClose={() => setNewOrgaoModalOpen(false)}
        action={
          <S.Actions>
            <Button
              onClick={() => setNewOrgaoModalOpen(false)}
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
          <OrganForm organ={newOrgan} onUpdateForm={updateFormData} />
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
