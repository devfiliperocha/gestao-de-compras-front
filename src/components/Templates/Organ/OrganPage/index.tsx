/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles' /** S = Styles */
import OrganForm from 'components/Molecules/Organ/OrganForm'
import React, { useContext, useState } from 'react'
import { OrganContext } from 'contexts/organ'
import { AppContext } from 'contexts/app'
import Button from 'components/Atoms/Button'
import { Container } from '@material-ui/core'
import Modal from 'components/Atoms/Modal'

const OrganPage = () => {
  const { organ, updateFormData, update, remove } = useContext(OrganContext)
  const { isContainerLoading } = useContext(AppContext)
  const [isConfirmModalOpen, openConfirmModal] = useState(false)
  const [isRemoveModalOpen, openRemoveModal] = useState(false)

  return (
    <S.Wrapper maxWidth="lg">
      {!isContainerLoading && (
        <>
          <OrganForm organ={organ} onUpdateForm={updateFormData} />
          <S.Actions>
            <Button
              onClick={() => openRemoveModal(true)}
              variant="outlined"
              color="error"
            >
              Excluir Órgão
            </Button>
            <Button onClick={() => openConfirmModal(true)}>
              Salvar alterações
            </Button>
          </S.Actions>
          <Modal
            title="Confirmar Alterações?"
            open={isConfirmModalOpen}
            onClose={() => openConfirmModal(false)}
            action={
              <S.Actions>
                <Button
                  onClick={() => openConfirmModal(false)}
                  variant="outlined"
                  color="error"
                >
                  Cancelar
                </Button>
                <Button onClick={() => update()}>Confirmar</Button>
              </S.Actions>
            }
          >
            <Container maxWidth="lg">
              Tem certeza que deseja salvar as alterações?
            </Container>
          </Modal>

          <Modal
            title="Excluir Registro?"
            open={isRemoveModalOpen}
            onClose={() => openRemoveModal(false)}
            action={
              <S.Actions>
                <Button
                  onClick={() => openRemoveModal(false)}
                  variant="outlined"
                  color="error"
                >
                  Cancelar
                </Button>
                <Button onClick={() => remove()}>Excluir</Button>
              </S.Actions>
            }
          >
            <Container maxWidth="lg">
              Tem certeza que deseja excluir este registro?
            </Container>
          </Modal>
        </>
      )}
    </S.Wrapper>
  )
}

export default OrganPage
